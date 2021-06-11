
The companion tutorial on building can be found here <b>[How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d)</b> 

The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/donations`
* POST `/api/donations`
* GET `/api/donations/:id`
* PUT `/api/donations/:id`
* PATCH `/api/donations/:id`
* DELETE `/api/donations/:id`

MongoDB configs:
* >sudo mkdir /data/db
* >sudo chown -R $USER /data/db
* >mongod --port 27017 --dbpath /data/db