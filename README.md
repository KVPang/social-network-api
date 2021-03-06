# Social Network API

## Description
Backend social network site where users can create a user, post thoughts, and react to other user's thoughts 

## User Story
``` 
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria 
```
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
1. Clone repository 
2. `npm install` Express, Mongoose, and Moment
3. `npm start`

## Usage 
- User: Create, update and delete
- Thoughts: Create, update, and delete
- Reactions: React, delete

## Mock Ups
![Insomnia](./images/Capture2.JPG)

## Links 
- [GitHub](https://github.com/KVPang/social-network-api)
- [Walkthrough Video](https://drive.google.com/file/d/1Zw3R7f0QGPLXd_tWjRwCfEaFL35QS3kb/view)
