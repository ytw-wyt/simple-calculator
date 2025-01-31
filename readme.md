# Calculator App

## Introduction

The Calculator App is a simple, full-stack application designed for educational purposes. It demonstrates the integration of a frontend and a backend service using modern web technologies and containerization with Docker. This app allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The project serves as a hands-on example to learn about:

- **Frontend Development:**  
  A user-friendly interface (built with technologies like React, if desired) that lets users interact with the calculator in a seamless way.
  
- **Backend API:**  
  A Node.js-powered backend that handles the calculation logic, showcasing how to structure and manage server-side code.
  
- **Containerization with Docker:**  
  Using Docker and Docker Compose to package, deploy, and run the application consistently across various environments.

In this assignment, you would understand and implement the fundamentals of modern web application development and deployment. Whether you're learning about building RESTful APIs, managing state in a client-side application, or containerizing apps for easier deployment, this calculator project offers a practical, straightforward example to get started.

## Setting Up the Application Using Docker

Follow these steps to clone and set up the repository:

### 1. Install Docker Locally
Make sure Docker is installed on your system. Follow the instructions for your operating system:
- **Ubuntu:** [Docker Installation on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- **macOS:** [Docker Installation on macOS](https://docs.docker.com/desktop/setup/install/mac-install/)
- **Windows:** [Docker Installation on Windows](https://docs.docker.com/desktop/setup/install/windows-install/)

### 2.Clone the Repository
```bash
git clone https://github.com/CMU-17-356/calculator.git
cd calculator
```

### 3. Deploy the Calculator Using Docker
```bash
docker-compose up --build
```

### 4. View the Calculator
Open your browser and go to http://localhost:80


## Setting Up the Application Using Node.js Locally

Follow these steps to clone and set up the repository:

### 1. Clone the Repository
```bash
git clone https://github.com/CMU-17-356/calculator.git
cd calculator
```


### 2. Setup the Backend
```bash
cd calculator-backend
npm install
node index.js
```

### 3. Setup the Frontend
```bash
cd ..
cd calculator-frontend
npm install
npm start
```