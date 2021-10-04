# MyStore

## Description about the applicaion

    Angular application (e-commerce website) for Full Stack JavaScript Developer Nanodegree Program.
    This application connects with a backend (express server).
    This application allows user to browse available products, add products to cart and complete the purchase.
    This application allows admin user to add new product to the product list and delete an existing product from product list.

## Server Setup

    Clone the backend repo from this git repo (https://github.com/puviyarasuvl/MyStoreBackend)

    Run below commands to setup docker and start the server

        -   npm install
        -   docker-compose up
        -   npm run start

    docker-compose up, will create the docker container and setup db with initial values. Used a init script to create dev and test databases. While pushing the script to git it replaced all LF as CRLF. So while running the 'docker-compose up' if the script gave any error please open the scipt in any linux editor and rewrite the method. I dont have other better solution now. Sorry for that.

## Starting Angular application

    Run "npm install" to install the required packages.
    From root of the MyStore run "ng server" to start the angular application.

## Ports

    express port : localhost:3000
    docker port  : localhost:5432
    angular port : localhost:4200
