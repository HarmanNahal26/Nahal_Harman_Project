# Personal Expense Tracker API

## Project Concept

The Personal Expense Tracker API is a back-end application designed to help users manage and track their daily expenses such as food, travel, and shopping.

Users will be able to add new expenses, view their existing expenses, update them, and delete them when needed. This system helps users understand their spending habits and manage their money more effectively.

This project is chosen because it is based on real-life use, easy to understand, and allows implementation of all major backend concepts such as CRUD operations, authentication, validation, and API security.

---

## Scope and Functionality

This API will allow users to send expense data to the server, where it will be stored in a database. Users can then retrieve, update, or delete their data at any time.

The system will include three main parts: Expenses, Categories, and Summary.

---

### 1. Expenses

This is the main resource of the API. Users will manage their daily expenses here.

Each expense will contain:
- amount (how much money was spent)
- category (such as food, travel, shopping)
- note (optional description of the expense)
- date (when the expense happened)
- userId (to identify the user)

Endpoints:
- POST /expenses  
  User sends expense data, API stores it in database  

- GET /expenses  
  API returns all expenses for the logged-in user  

- GET /expenses/:id  
  API returns a specific expense  

- PUT /expenses/:id  
  User updates an existing expense  

- DELETE /expenses/:id  
  User deletes an expense  

---

### 2. Categories

Categories help organize expenses into groups.

Each category will include:
- name (e.g., Food, Travel, Shopping)

Endpoints:
- POST /categories  
   Create a new category  

- GET /categories  
  Get all categories  

---

### 3. Summary

This feature provides a simple overview of user spending.

Endpoint:
- GET /expenses/summary  

This will return:
- total amount spent  
- number of expenses  

---

## Course Content Alignment

This project will apply all major concepts learned in the course:

- Node.js and Express will be used to build the API  
- TypeScript will be used for better structure and type safety  
- Firebase Firestore will be used as the database  
- Firebase Authentication will be used for user login and security  
- CRUD operations will be implemented for managing data  
- Joi will be used for validating user input  
- Swagger/OpenAPI will be used for API documentation  
- Helmet and CORS will be used for security  
- Layered architecture will be followed:
  - Routes → define endpoints  
  - Controllers → handle requests and responses  
  - Services → business logic  
  - Repository → database operations  

---

## GitHub Project Setup

The project will be managed using GitHub with proper version control.

### Branching Strategy:
- main - final stable version  
- development - ongoing development  
- feature branches - for individual tasks  

Example feature branches:
- feature/setup  
- feature/expenses  
- feature/authentication  
- feature/validation  
- feature/swagger  

---

### GitHub Issues

At least 5 issues will be created to track development:

1. Setup project structure  
2. Implement expense CRUD API  
3. Add Firebase authentication  
4. Add validation and error handling  
5. Add Swagger documentation  

Each issue will describe the task clearly and will be linked to a feature branch.

---

## New Component

The project will include a new component: Rate Limiting using express-rate-limit.

This feature will control how many requests a user can send to the API within a specific time period.

Purpose:
- Prevent too many requests  
- Protect the API from misuse  
- Improve security  
