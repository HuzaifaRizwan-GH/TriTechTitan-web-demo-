FROM nginx:alpine
# Copy the HTML, CSS, and JS folders into the Nginx web directory
COPY html /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js