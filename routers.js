const express = require("express");
const controllers = require("./controllers/controller.js");
const passport = require("passport");
require("./Passport/passport-setup.js");
const router = express.Router();

router.get("/", controllers.apiPage);
router.get("/logout", controllers.logout);

router.get("/failed", (req, res) => res.send("Failed : You failed to login"));

router.get("/success", (req, res) => {
  console.log(req.user?.photos[0].value);

  res.render("pages/profile", {
    name: req.user.displayName,
    pic: req.user._json.picture,
    email: req.user.emails[0].value,
    profile: "google",
  });
});

//Profile
router.get("/profile", (req, res) => {
  console.log("--->( your profile) ", req.user);
  const pic = "";
  if (req.user.picture) {
    pic = req.user.picture;
  } else if (req.user.profile_image_url) {
    pic = req.user.profile_image_url;
  }
  res.render("profile", {
    profile: {
      userId: req.user.id,
      userName: req.user.username ? req.user.username : req.user.displayName,
      email: req.user.email ? req.user.email : "",
      provider: req.user.provider ? req.user.provider : "",
      picture: pic,
    },
  });
});

//Google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    failureMessage: "Google strategy coundn't log you in",
  }),
  (req, res) => {
    console.log("profile", req.user);
    res.redirect("/api/profile");
  }
);

//Facebook
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/api/profile",
    successMessage: "Facebook strategy was a success",
    failureRedirect: "/",
    failureMessage: "Facebook strategy coundn't log you in",
  })
);

//Twitter
router.get(
  "/auth/twitter",
  passport.authenticate("twitter", { scope: "email" })
);

router.get(
  "twitter/callback",
  passport.authenticate("linkedin", {
    scope: ["tweet.read", "users.read", "offline.access"],
    successRedirect: "/api/profile",
    successMessage: "Twitter strategy was a success",
    failureRedirect: "/",
    failureMessage: "twitter strategy coundn't log you in",
  })
);

//LinkedIn
router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_emailaddress", "r_liteprofile"],
  })
);

router.get(
  "linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/api/profile",
    successMessage: "LinkedIn strategy was a success",
    failureRedirect: "/",
    failureMessage: "LinkedIn strategy coundn't log you in",
  })
);

module.exports = router;
