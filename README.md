# Connect Me
[Connect Me](https://connect-me-bywn.onrender.com/api) is an express js implementation of social logins using passportjs OAuth 2.0. User authentication through google,facebook ,twitter and linkedin.

![passport logo](https://camo.githubusercontent.com/6835eb33bb0e58ae663c7b9baeddf2a76cc6cf98862769eddbe22ee45c00a17b/687474703a2f2f63646e2e61757468302e636f6d2f696d672f70617373706f72742d62616e6e65722d6769746875622e706e67)

## Tech stack used
NODEJS EXPRESSJS MONGODB ATLAS PASSPORTJS  

## Folder structure  
```bash
.
├── controllers
│   └── controller.js
├── db.js
├── models
│   └── models.js
├── package.json
├── package-lock.json
├── Passport
│   ├── passport-setup.js
│   └── strategies
│       ├── facebookStrategy.js
│       ├── googleStrategy.js
│       ├── linkedinStrategy.js
│       └── twitterStrategy.js
├── public
│   ├── css
│   │   └── styles.css
│   ├── images
│   │   ├── background.jpg
│   │   ├── facebook.png
│   │   ├── google.png
│   │   ├── linkedin.png
│   │   └── twitter.png
│   └── js
├── routers.js
├── server.js
├── utils
│   └── middlewares.js
└── views
    ├── 404.ejs
    ├── index.ejs
    ├── partials
    │   └── header.ejs
    └── profile.ejs

```
## Usage

For local Use   

Preliquisites :   
:point_right: node version 18.16.x   
:point_right: nodemon globally installed  

clone this github repo   
```sh
git clone https://github.com/Newton-Nganga/passportjs-oauth
```   
Install the require modules and depencies  
```sh
npm install
```   
Add the environment variables   
`create a .env file and add the required environment variables `  
Run the application using nodemon   
```sh
npm start
```   
Building the application for production   
```sh 
npm run build
```   


For testing visit `https://connect-me-bywn.onrender.com/api`  

## Screensnap of the tesing site
![Connect Me](https://github.com/Newton-Nganga/passportjs-oauth/assets/93589514/9b2145f4-2bb2-4942-82be-fbe9c08349da)

## Contribution
This project is open to contribution in efforts of improving the performance

