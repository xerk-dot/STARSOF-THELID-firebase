# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

#Listen on
EXPOSE 3000

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production --legacy-peer-deps

# Copy local code to the container image.
COPY . ./



# Run the web service on container startup.
CMD [ "npm", "run", "dev" ]


#gcloud builds submit --tag gcr.io/starsof/starsof_firebase_0001
#gcloud run deploy --image gcr.io/starsof/starsof_firebase_0001 --port=3000