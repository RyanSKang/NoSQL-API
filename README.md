# NoSQL-API
  
## Description:
This application is a built API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application utilizes Express.js and Mongoose packages. 

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation
Git clone Repository: [NoSQL-API](https://github.com/RyanSKang/NoSQL-API)  
Following Installation Needed:   
    -Express [v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)  
    -Mongoose [v7.4.1](https://www.npmjs.com/package/mongoose/v/7.4.1)
    -Moment [v2.29.4](https://www.npmjs.com/package/moment)  
    -Validator [v13.9.0](https://www.npmjs.com/package/validator)  
    -Nodemon [v3.0.1] (https://www.npmjs.com/package/nodemon)
   

## Usage Instructions
1. Using a source code editor, open the cloned repository
2. Open integrated terminal in the root folder and execute an "npm i"  
3. On integrated terminal execute "npm run seed" and then "npm start"
4. Use Insomnia in order to navigate API routes (POST/GET/DELETE)
  

## Screenshots
### Figure 1. Get All User
<img width="1462" alt="Screenshot 2023-08-04 at 10 13 52 PM" src="https://github.com/RyanSKang/OORM-Ecommerce-BackEnd/assets/124969918/7fa6e505-3fa7-4aab-822b-b5515772e682">  

### Figure 2. Get All Thoughts
<img width="1215" alt="Screenshot 2023-08-05 at 1 24 44 AM" src="https://github.com/RyanSKang/NoSQL-API/assets/124969918/40c28530-5e13-4d9e-95f9-ba5dd876b833">  

### Figure 3. Create a Reaction
<img width="1212" alt="Screenshot 2023-08-05 at 1 25 06 AM" src="https://github.com/RyanSKang/NoSQL-API/assets/124969918/2d95544a-e686-4064-8e52-3a69428ab6c7">  

### Figure 4. Add a Friend
<img width="1212" alt="Screenshot 2023-08-05 at 1 26 11 AM" src="https://github.com/RyanSKang/NoSQL-API/assets/124969918/d3275d0e-7153-489d-ba5f-71d427bdf0ab">  


## Walkthrough Video

<a href="https://watch.screencastify.com/v/XZeZGGOWW8oloJLLxXZI"> Walkthrough Video Link </a>

## Credits
-DU-Virt-FSF-PT-02-2023-U-LOLC | NoSQL 28-Stu_Mini-Project  
-AskBCS learning assistant  
-DU Dashboard Module 18 "Getting Started" Guidelines  
<a href="https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax">Stackoverflow Email Validation</a>  
<a href="https://mongoosejs.com/docs/schematypes.html">Schema Types</a>