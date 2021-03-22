# Bc-health

clone repo.

navigate to folder bc-health

## Setup Required
Please make sure docker is  installed in your system. <br />
Get docker from 
https://docs.docker.com/docker-for-windows/install-windows-home/ <br />
Confirm installation by running <br />
` docker  -v` <br />
`docker-compose -v`
## In order to run container
`docker-compose up --build` <br />

Navigate to http://localhost:4200 to view the app.

## In order to stop container
`docker-compose down`.

## Viewing the database
I used Docker Desktop windows application  to access the mongo  cli <br />
![docker](https://user-images.githubusercontent.com/16315570/111927619-c0839900-8a87-11eb-9a2c-bfd4b90c4620.PNG) <br />
Use the following command to access the database. <br />
`mongo` <br />
`show dbs` <br />
`use bchealth` <br />
`show collections` <br />
`db.bchealth.find().pretty()` <br />
![db2](https://user-images.githubusercontent.com/16315570/111927921-9088c580-8a88-11eb-93dc-962371f00a45.PNG)

## DB count also can be viewed in the console.
![db](https://user-images.githubusercontent.com/16315570/111924110-29174980-8a79-11eb-88a3-4478cbf491e7.PNG)

