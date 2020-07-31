FROM nginx:alpine
# always mention what is your base OS image

WORKDIR /usr/share/nginx/html
# this creates a folder (if does not exist) and 'cd' into the same

COPY ./dist/customer-dashboard/ ./
# copy files/folders from host os to the container os's workdir

# nginx-image already has a startup command to start the nginx server
EXPOSE 80
