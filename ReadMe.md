# App Academy Mock Takehome Challenges

# To start this locally
- Clone this repo
- ```cd``` into ```/backend_challenge``` and run ```npm i```
- Still in ```/backend_challenge```, create a ```.env``` file and choose a port number and a database file (to view in your browser and have a local db):

``` 
   PORT=
   DB_FILE= 
   ```
- Run the following commands to build the database and seed it with starter data:
```
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
- Finally run ```npm start``` to test the routes live
