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
## In order to run 
`docker-compose up --build`

## In order to stop 
`docker-compose down`.

## Mongo db
I used Docker windows  to access the mongo  cli <br />
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

##Licence <br />
`Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
