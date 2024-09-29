# TA Grader

## Team Information
Devansh Waleacha - dew123@pitt.edu
Travis Mindel - tsm52@pitt.edu
Mykola Chernyashevskyy - myc21@pitt.edu

## Overview
TA Grader is a web-based application where students can rate their Teaching Assistants (TAs) on various factors, and the system provides a letter grade to the TA based on the ratings. It helps students provide feedback on the following aspects:
- **Availability**: How accessible the TA is for help and support.
- **Friendliness**: The approachability and demeanor of the TA.
- **Preparedness**: The TA's level of preparation for teaching or answering questions.

Our custom algorithm processes the collected data and assigns a letter grade (A, B, C, etc.) to each TA, reflecting their overall performance based on student feedback.

## Tech Stack
- **Backend**: Node.js for creating RESTful APIs.
- **Database**: MongoDB to store ratings and TA information.
- **Frontend**: React for building an interactive user interface.

## Features
- Students can rate TAs based on specific factors.
- TAs receive a cumulative letter grade based on their ratings.
- Seamless integration of backend and frontend for smooth performance.

## How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ta-grader.git
    cd ta-grader
    ```

2. Install dependencies for the backend:
    ```bash
    cd backend
    npm install
    ```

3. Install dependencies for the frontend:
    ```bash
    cd frontend
    npm install
    ```

4. Set up MongoDB:
    - Ensure you have MongoDB running locally or configure your cloud MongoDB connection string in the backend `.env` file.

5. Start the backend server:
    ```bash
    cd backend
    npm run dev
    ```

6. Start the frontend:
    ```bash
    cd frontend
    npm start
    ```

### Contributions
Feel free to contribute by submitting a pull request or reporting any issues you find!

---

### License
This project is licensed under the MIT License.

