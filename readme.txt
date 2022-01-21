install python
pip install django, djangorestframework

django-admin startproject fcit

cd fcit
python .\manage.py makemigrations
python .\manage.py migrate

add 'rest-framework' to settings.py's insalled apps 
django-admin startapp api
create some view in view (api)
update urls.py in fcit & create one in api
register app in fcit/setting.py

python manage.py runserver

- install sqlite3 extension (viewer)

created custom user auth
    added cutome forms and views (https://testdriven.io/blog/django-custom-user-model/)

<-- REACT SETUP -->

django-admin startapp frontend

cd frontend // Here will be the frontend REACT
create dirs 
|-static
|  |-css
|  |-frontend 
|  |-images
|-templates
|-src
|  |-components 

(commands for creating dirs)
mkdir static, templates, src
mkdir static/css
mkdir static/frontend
mkdir static/images
mkdir src/components

install nodejs
commands for strictly installing node/react modules
----------------------------
npm init -y 

--> bundles all the src js into single file 
npm i webpack webpack-cli --save-dev

--> make the code runnable with different type of browsers (older browsers)
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

--> ofcourse react 
npm i react react-dom --save-dev


--> Something for babel too :) -> to use async & wait
npm install @babel/plugin-proposal-class-properties

--> R route through urls
npm install react-router-dom@5.2.0
----------------------------

create 2 files
babel.config.json
webpack.config.js

edit 1 file
package.json
<-- REACT SETUP -->

create 
template
    -> frontend 
        index.html (#app, #main)

        create view, and setup urls in 'frontend' same like 'api'

        setup components, done with setup Ugh!