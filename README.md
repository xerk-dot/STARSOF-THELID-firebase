# STARSOF THELID | firebase react app
## So: what is this?
STARSOF THELID is map-based social networking webapp for MSM. Built with React, Redux, Framer-motion, firebase (for auth, firestore, storage), other GCP resources, and deployed on Cloud Run.

## How do I run it local?

### 1. Install Dependencies
```sh
$ npm i
```

### 2. Create a new firebase project
Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

Create an `.env` file and add the following variables.

```
// SAMPLE CONFIG .env, you should put the actual config details found on your project settings

VITE_FIREBASE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
VITE_FIREBASE_DB_URL=https://yourdburl.firebaseio.com
VITE_FIREBASE_PROJECT_ID=yourproject-id
VITE_FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
VITE_FIREBASE_MSG_SENDER_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_APP_ID=XXXXXXXXXXXXXXXXXXXXXX
VITE_MAPBOX_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
``` 

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** and start in test mode

### 3. Commands
```sh 
# run the development server
$ npm run dev

# build the project with vite
$ npm run build

# deploy to firebase (to cloud)
$ npm run deploy

# run firebase emulators (runs local)
$ npm run fire-emulate


# Build docker image locally
$ docker build . -t "sample-project:v1.0"
# Run docker image locally
$ docker run -p 3000:3000 sample-project:v1.0


# Build and submit a docker image to google cloud (to artifact registry)
$ gcloud builds submit --tag gcr.io/starsof/starsof_firebase_0001
# Deploy the image to cloud run
$ gcloud run deploy --image gcr.io/starsof/starsof_firebase_0001 --port=3000


```

## How to add products or perform CRUD operations for Admin
1. Navigate to your site to `/signup`
![alt text](src\images\screenshots_of_ui\login.PNG "login old")



2. Create an account for yourself
3. Go to your firestore collection `users collection` and edit the account you've just created. Change the role from `USER` to `ADMIN`.
4. Reload or sigin again to see the changes. 
<!-- 
**Firebase Admin to be integrated soon**

## Features

* Admin CRUD operations
* Firebase authentication
* Firebase auth provider authentication
* Account creation and edit




 -->
<!-- 


#VS Code Cloud Code, run Cloud Run locally for debug
#To login in to gcloud for local testing:

#gcloud auth application-default login -->