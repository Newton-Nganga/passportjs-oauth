# Connect Me
[Connect Me](https://connect-me-bywn.onrender.com/api) is an express js implementation of social logins using passportjs OAuth 2.0. User authentication through google,facebook ,twitter and linkedin.

![passport logo](https://camo.githubusercontent.com/6835eb33bb0e58ae663c7b9baeddf2a76cc6cf98862769eddbe22ee45c00a17b/687474703a2f2f63646e2e61757468302e636f6d2f696d672f70617373706f72742d62616e6e65722d6769746875622e706e67)

## Tech stack used
<img src="https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png" alt="nodejs" align="left" width="150px" height="100px">
<img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="mongodb" align="left" width="150px" height="100px">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="express js" align="left" width="150px" height="100px">
<img src="https://www.svgrepo.com/show/373574/ejs.svg" alt="ejs" align="left" width="150px" height="100px"> <br>


## Folder structure
:open_file_folder: vscode <br>
:open_file_folder: controllers <br>
                   :page_facing_up: controller.js <br>
:open_file_folder: models <br>
                  :page_facing_up: models.s <br>
:open_file_folder: Passport <br>
                   :open_file_folder: strategies <br>
                                     :page_facing_up: facebookStrategy.js <br>
                                     :page_facing_up: googleStrategy.js <br>
                                     :page_facing_up: linkedinStrategy.js <br>
                                     :page_facing_up: twitterStrategy.js <br>
                   :page_facing_up: passport-setip.js <br>
:open_file_folder: public <br>
                   :open_file_folder: css <br>
                                     :page_facing_up: styles.css <br>
                   :open_file_folder: images <br>
                   :open_file_folder: js <br>
                                      :page_facing_up: script.js <br>
:open_file_folder: utils <br>
                   :page_facing_up: middlewares.js <br>
:open_file_folder: views <br>
                   :open_file_folder: partials <br>
                   :page_facing_up: 404.ejs <br>
                   :page_facing_up: index.ejs <br>
                   :page_facing_up: profile.ejs <br>
:page_facing_up: db.js <br>
:page_facing_up: router.js <br>
:page_facing_up: package.json <br>
:page_facing_up: server.js <br>


## Usage

For local Use <br>

Preliquisites : <br>
:point_right: node version 18.16.x <br>
:point_right: nodemon globally installed <br>

clone this github repo <br>
`git clone https://github.com/Newton-Nganga/passportjs-oauth ` <br>
Install the require modules and depencies <br>
`npm install ` <br>
Add the environment variables <br>
`create a .env file and add the required environment variables ` <br>
Run the application using nodemon <br>
`npm start` <br>
Building the application for production <br>
`npm run build ` <br>


For testing visit `https://connect-me-bywn.onrender.com/api`

## Screensnap of the tesing site
![Connect Me](https://github.com/Newton-Nganga/passportjs-oauth/assets/93589514/9b2145f4-2bb2-4942-82be-fbe9c08349da)

## Contribution
This project is open to contribution in efforts of improving the performance

