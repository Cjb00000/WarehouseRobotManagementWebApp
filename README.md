# MERN Stack Robot Management Web App

## Overview

This MERN (MongoDB, Express, React, Node.js) stack project is designed to manage robots, track delivery times, and monitor the number of packages delivered. The application allows users to **Create, Read, Update, and Delete (CRUD)** entries for robots and their associated delivery data. This project was developed to explore how data can optimize manufacturing and delivery processes.

## Features

- **CRUD Operations**: Add, edit, update, and delete robot records.
- **Delivery Tracking**: Manage and view delivery times and the number of packages delivered.
- **User Interface**: A responsive and intuitive frontend built with React.
- **Data Persistence**: Backend API with Express and MongoDB for data storage.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Screenshots

![CRUD Operations](frontend/src/images/WebDevRobotAdd.PNG)

*CRUD operations for managing robot records*

![Mobile Viewing](frontend/src/images/WebDevRobotPhone.PNG)

*Responsive to different screen sizes*

## Installation

    git clone https://github.com/yourusername/this-repo.git


**Navigate to Project Directory**

    cd this-repo


**Install Dependencies**

  For the backend:

    cd backend

    npm install

  For the frontend:

    cd ../frontend

    npm install


**Create a .env file in the backend directory and add your MongoDB URI:**

  MONGO_DB_URI=your_mongodb_connection_string
  
**It is important to keep the MongoDB information secure and not shared in GitHub or elsewhere, which is why the .env file is in the .gitignore**


**Run the Application**

**Start the backend server:**

    cd backend

    npm start

**Start the frontend application:**

    cd ../frontend

    npm start

**Access the Application:**

  Open your browser and go to http://localhost:3000 to view the app.

**CRUD Operations:**


  Add Robots: Navigate to the 'Add Robot' page and enter the robot details.

  Edit Robots: Select a robot from the list and update its details.

  Update Delivery Times: Modify delivery schedules and track the number of packages.

  Delete Entries: Remove robots and delivery data as needed.
