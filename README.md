# Full-stack Node.js

This is a boilerplate project for a full-stack Node.js applications. Please refer to different branches for specific framworks and libraries.

## Branches

* Node.js `feature/node`
* Koa.js `feature/koa`

## Installation

Thank you Yarn!

1. `yarn install`
2. `yarn serve`
3. visit: `http://localhost:5000`

## Deployment

To deploy to Firebase (hosting and functions).

1. Make sure you have Firebase Tools CLI: `npm i -g firebase-tools`
2. Go to `https://console.firebase.google.com/`, sign-in, `Add project` and follow prompts on Firebase console.
3. Update your Firebase project ID in `.firebaserc` file, example in `.firebaserc.sample`
4. Run: `yarn deploy`, this will build your static assets, export to `out` folder and deploy to Firebase.
5. Wait!  Firebase is a bit slow at deploying. Feel free to check logs in console.

## Built with

* [Node.js](https://github.com/nodejs/node)
* [Koa](https://github.com/koajs)
* [Next](https://github.com/zeit/next.js)
* [Firebase](https://github.com/firebase)
