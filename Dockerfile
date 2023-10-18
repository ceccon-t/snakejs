# Use nginx as web server.
# Alpine variant for smaller size.
FROM nginx:alpine

# As the project requires no build step,
#  just copy the app files into the folder
#  that nginx serves by default.
COPY snakejs/ /usr/share/nginx/html
