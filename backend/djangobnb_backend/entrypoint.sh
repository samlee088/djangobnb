#!/bin/sh

if [ "$DATABASE" = "postgres" ]
    echo "Check if database is running..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1 
    DJANGO_ALLOWED_HOSTS
    
    echo "The database is up and running "
fi

python manage.py migrate

exec "$@"