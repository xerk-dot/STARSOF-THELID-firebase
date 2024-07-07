# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:18-alpine

# Create and change to the app directory.
WORKDIR /app


# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json .

# Install production dependencies. --only=production
RUN npm install  --legacy-peer-deps

RUN npm i serve --legacy-peer-deps



# Copy local code to the container image.
COPY . .

#run build
RUN npm run build

#Listen on
EXPOSE 3000


# Run the web service on container startup.
CMD [ "npm", "run", "serve" ]

# docker build . -t "sample-project:v1.0"
# docker run -p 3000:3000 sample-project:v1.0
# docker run -dp 3000:3000 sample-project:v1.0

# gcloud builds submit --tag gcr.io/starsof/starsof_firebase_0001
# gcloud run deploy --image gcr.io/starsof/starsof_firebase_0001 --port=3000