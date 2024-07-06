#instructions: 
#https://www.googlecloudcommunity.com/gc/Community-Blogs/No-servers-no-problem-A-guide-to-deploying-your-React/ba-p/690760


# Use the slim version of the node 20 image as our base
FROM node:20-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]


# To test the build
# 
# npm run build
# npm run serve


# If Cloud Build CD is set up, you don't need to add it to the artifact registry and Cloud Run.
# Otherwise, once you have the container, add it to the artifact registry by:
    
# docker build  -t  starsof .

 # gcloud config set project starsof
 # gcloud auth login
 # gcloud builds submit -t us-central1-docker.pkg.dev/starsof/starsmap-react-frontend/starsof_firebase-site ./