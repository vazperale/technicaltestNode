# Node.js with Typescript ,Express.js and Typeorm with a sql Postgres db 

How to run the project:

1. Clone the repository in a folder:

    ```bash
    git clone https://github.com/vazperale/technicaltestNode.git
    ```

2. Navigate to the project:

    ```bash
    cd central-system-api
    ```

3. Install the dependencies:

    ```bash
    npm i
    ```

4. Create .env in the root project folder and add the following variable:

    ```bash
    DB_HOST=db 
    DB_PORT='normally the default option is 5432, but depends of your critery'
    DB_USERNAME='choose the username you want to use'
    DB_PASSWORD='your password'
    DB_NAME='the name that you decide for the db'
    ```

5. You need to have docker installed, or docker desktop running. Run the docker container:

    ```bash
    docker-compose up -d
    ```
5. Then you can interactuate with api with postman, thunderclient, or the web client in the other repository

   

---------------------------------------------------------------------------------------------------------------------------------------

# Comments about the app:

-Default port is 3000,but you can change it (change in the app and in the docker files)

-try to capture the specific errors, for a better understanding of the errors,and capture the required values to introduce in body

-Add swagger/openApi for explain better the endpoints,the parameters,responses...,enter in endpoint "/api-docs" in the web

-when you delete a organization, the assigned chargepoints will be deleted in cascade

-Could capture better some error and put it more intuitive and did other performance task, but i tryed to adjust to the estimated duration of the test indicated in it.


 
