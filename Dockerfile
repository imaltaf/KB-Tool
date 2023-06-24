FROM httpd:2.4
EXPOSE 8001
COPY . . /usr/local/apache2/htdocs/
