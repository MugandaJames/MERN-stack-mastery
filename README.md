# 🛒 Products API (Express + MongoDB)

A backend REST API for managing products and user authentication built with **Node.js, Express, and MongoDB Atlas**.

This project is part of my **MERN Stack Mastery Journey**, focused on building production-style backend systems with clean architecture.

---

## 🚀 Features

### 📦 Products CRUD

- Create a product
- Get all products
- Get a single product by ID
- Update a product
- Delete a product

### 🔐 Authentication

- User signup
- Password hashing
- Request validation with Joi
- Secure middleware setup

### ⚙️ Backend Features

- MongoDB Atlas integration
- RESTful API structure
- Environment variable support with dotenv
- Security headers with Helmet
- Cross-Origin Resource Sharing (CORS)
- Cookie parsing support

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi
- bcrypt / hashing utilities
- dotenv
- Helmet
- CORS
- cookie-parser
- Nodemon

---

## 📁 Project Structure

```text
products-api/
│── controllers/
│   ├── auth.controller.js
│   └── posts.controller.js
│
│── middlewares/
│   ├── validator.js
│   ├── sendMail.js
│   └── identification.js
│
│── models/
│   ├── product.model.js
│   ├── users.model.js
│   └── posts.model.js
│
│── routes/
│   ├── product.routes.js
│   ├── auth.routes.js
│   └── posts.routes.js
│
│── utils/
│   └── hashing.js
│
│── index.js
│── server.js
│── .env
│── package.json

⚙️ Installation
1. Clone the repository
git clone git@github.com:MugandaJames/MERN-stack-mastery.git
cd MERN-stack-mastery
2. Install dependencies
npm install
3. Create .env
MONGO_URI=your_mongodb_connection_string
TOKEN_SECRET = your secret
NODE_CODE_SENDING_EMAIL_ADDRESS = your sending email address
NODE_CODE_SENDING_EMAIL_PASSWORD = your app password
HMAC_VERIFICATION_CODE_SECRET = your secret
4. Run development server
npm run dev
🌐 API Endpoints
Products
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get one product
POST	/products	Create product
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product
Auth
Method	    Endpoint	                                 Description
POST	/api/auth/signup	                             Register new user
POST    /api/auth/signin                                 Login user
POST    /api/auth/signout                                Logout user

PATCH   /api/auth/send-verification-code                 sendVerificationCode
PATCH   /api/auth/verify-verification-code               verifyVerificationCode
PATCH   /api/auth/change-password                        changePassword
PATCH   /api/auth/send-forgot-password-code              sendForgotPasswordCode
PATCH   /api/auth/verify-forgot-password-code            verifyForgotPasswordCode

Posts
GET     /api/posts/all-posts                             getPosts
GET     /api/posts/single-post                           singlePost
POST    /api/posts/create-post                           createPost


PUT     /api/posts/update-post                           updatePost
DELETE  /api/posts/delete-post                           deletePost
🧪 Testing

You can test the API using:

Insomnia (found reliable)
Postman
Thunder Client (VS Code)
📚 Learning Goals

This project is helping me strengthen skills in:

Express.js architecture
MongoDB + Mongoose
REST API development
Authentication systems
Validation patterns
Real-world backend workflows


👨‍💻 Author

James Juma
Building strong full-stack systems one project at a time.
```
