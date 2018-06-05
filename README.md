
Run Following commands to run project

Create database in mysql named "pharma_development"

npm i --verbose

sequelize:db:migrate:undo:all

sequelize:db:migrate

sequelize:db:seed:all

npm start

-------------------------------------------------------------------------------------------
api - port 5000
application - port 4200
-------------------------------------------------------------------------------------------
For testing api - postman collection is there in [postman collection] folder
For sql file - [postman collection] folder has sql file - `pharma_development.sql` 
-------------------------------------------------------------------------------------------
database config file - [db]=>[config]=>config.json
All database related(sequelize) scripts are in [db] folder -> {models,config,migrations,seeders}
seeders will add dummy data which is stored in [seeders]=>[data] folder
-------------------------------------------------------------------------------------------




Notes -

Seeder will add demo user where - username is demo & password is demo
After Login - On dashboard you will find buttons - 
	Add Product - will add new product
	Modify Product - will modify or delete product
	Basic/Advance Search - in datagrid headers search button is available


-------------------------------------------------------------------------------------------
Project Information
-------------------------------------------------------------------------------------------	
Folder - config - Has all express routing configuration [mapped with <controllers>]
Folder - controllers - Has all routing functions [mapped with <config>]
Folder - db - Has all sequelize related scripts
Folder - db - Has all sequelize related scripts
