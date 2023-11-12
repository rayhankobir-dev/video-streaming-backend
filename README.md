# Title: VStream Backend 
## Overview
This project provides a comprehensive backend application for a video streaming platform using Express, MongoDB, and Cloudinary. It enables users to publish videos, view other users' videos, create playlists, subscribe to channels, like videos, post comments, and engage in community interactions. The application utilizes MongoDB to store user data, video information, and other related entities. Cloudinary is employed for efficient and scalable video storage and delivery.

## Project Setup and Installation
Install Node.js and npm: Ensure you have Node.js and npm installed on your system. These tools are essential for managing JavaScript dependencies and building the project.

Clone the Repository: Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/rayhankobir-dev/video-streaming-backend
```
Use code with caution. Learn more
Install Dependencies: Navigate to the project directory and install the required dependencies using npm:
```js
npm install
```
To start the server
```js
npm run dev
npm start
```
Use code with caution. Learn more
Create MongoDB Atlas Account: Create a MongoDB Atlas account and set up a database cluster. Obtain the connection details, including the database name, username, and password.

Configure Cloudinary: Create a Cloudinary account and obtain your API key, secret key, and cloud name. These credentials are necessary for uploading and managing videos on the Cloudinary platform.

Configure Environment Variables: Create a .env file in the project directory and add the following environment variables:

```js
TZ=[Timezone]
PORT=[Define port]

# DATABSE 
DATABASE_URI=[MongoDB Atlas connection string]
DB_NAME=[Database name]

# TOKEN
ACCESS_TOKEN_SECRET=[Define long secret]
ACCESS_TOKEN_VALIDITY=[Expirity in days]
REFRESH_TOKEN_SECRET=[Define long secret]
REFRESH_TOKEN_VALIDITY=[Expirity in days]

# CORS CONFIGURE
CORS_ORIGIN=[Whitelisted origin or * for all]

# CLOUDINARY
CLOUDINARY_API_KEY=[Cloudinary API key]
CLOUDINARY_SECRET_KEY=[Cloudinary secret key]
CLOUDINARY_CLOUD_NAME=[Cloudinary cloud name]
```

## Data Model
The application utilizes a relational data model to represent the various entities involved in the video streaming platform. These entities include:

#Users: username, fullName, email, password, avatar, watchHistory, refreshToken, createdAt, updatedAt.

Videos: Stores video metadata such as title, description, duration, thumbnail, and Cloudinary video URL.

Playlists: Stores playlists created by users, including a list of video IDs and playlist title.

Subscriptions: Stores user subscriptions to other users, enabling them to receive notifications about new videos.

Likes: Stores user likes for videos, indicating their appreciation of specific content.

Comments: Stores user comments on videos, allowing for discussions and feedback.

Posts: Stores community posts created by users, enabling them to share thoughts and engage with the platform's audience.
