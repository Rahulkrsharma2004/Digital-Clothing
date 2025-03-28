# 👗 MERN Digital Clothing Web App

## 📜 Description
A highly interactive web application built with the **MERN (MongoDB, Express.js, React, Node.js)** stack. This app allows users to **browse, customize, and purchase** digital clothing with real-time customization features and virtual try-on functionality.

## 🖼 Demo
![alt text](<Screenshot (177).png>)
![alt text](<Screenshot (178).png>)
![alt text](<Screenshot (179).png>)
![alt text](<Screenshot (180).png>)
![alt text](<Screenshot (181).png>)
![alt text](<Screenshot (182).png>)
![alt text](<Screenshot (183).png>)
![alt text](<Screenshot (184).png>)
![alt text](<Screenshot (185).png>)

## 🚀 Tech Stack

### 🌐 Frontend:
- ⚛️ React.js
- 🔥  Context API
- 🎨 Tailwind CSS 
- 🛤 React Router
- 🎬 Framer Motion (for animations)

### 🖥 Backend:
- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB
- 🏗 Mongoose
- 🔐 JWT Authentication
- 💳 Stripe (for payments)

### 🌍 Deployment:
- 🖥 Frontend: Vercel 
- ☁️ Backend: Vercel
- 🗄 Database: MongoDB Atlas

## ✨ Features

### 🔑 User Authentication
- ✅ Secure user registration and login with JWT authentication.
- 👤 Users can manage their profiles with a visually appealing UI.

### 🛍 Product Management (Admin Panel)
- ➕ Add, ✏️ update, and ❌ delete digital clothing items.
- 📸 Each item has a name, description, price, image, and customization options.

### 🎨 Advanced Customization
- 🎭 Users can personalize outfits (change **colors, patterns, accessories** in real-time).
- 🔄 Live preview of changes using React state management (**Redux/Context API**).

### 🕶 Avatar & Virtual Try-On
- 🏃‍♂️ Users can **create a digital mold of their body shape**.
- 👗 Virtual try-on feature to **see outfits in real-time**.

### 🛒 Shopping Cart & Checkout
- 🛍 Add items to cart with **dynamic and animated UI**.
- 🔄 Smooth transitions and persistent cart state.
- 💰 Integrated **payment gateway (Stripe)** for seamless checkout.

### 🎨 Frontend Development (React Focused)
- 📱 Fully **responsive UI with modern design**.
- 🚀 Seamless navigation using **React Router**.

### 🌍 Deployment
- 🚀 **Deployed on Vercel, Netlify, or Heroku**.
- 🔑 **Environment variables** used for sensitive configurations.
- ⚡ **Optimized React build for production**.

## 🛠 Installation and Setup

### 📥 1. Clone the repository:
```bash
git clone https://github.com/Rahulkrsharma2004/Digital-Clothing.git
```

### 📦 2. Install dependencies:
#### Frontend:
```bash
cd Frontend
npm install
```

#### Backend:
```bash
cd Backend
npm install
```

### 🔑 3. Setup environment variables
Create a `.env` file in both `frontend` and `backend` directories and add necessary environment variables.

### ▶️ 4. Run the application
#### Start backend server:
```bash
cd backend
npm run start
```

#### Start frontend server:
```bash
cd frontend
npm run dev
```

### 🌐 5. Open in Browser
Visit `http://localhost:5173` to use the application.

## 📡 API Endpoints
### 🔐 Authentication
- `POST /users/register` - Register a new user
- `POST /users/login` - Login user

### 🛍 Products
- `GET /products` - Fetch all products
- `POST /products/add` - Add new product (Admin only)
- `PUT /products/update/:id` - Update product (Admin only)
- `DELETE /products/delete/:id` - Delete product (Admin only)

### 🛒 Cart
- `POST /carts` - Add to cart
- `GET /carts` - Get cart items
- `DELETE /carts/:id` - Remove item from cart

### 💳 Payments
- `POST /api/payments/checkout` - Handle checkout process

## 🚀 Deployment
### 📤 Frontend Deployment (Vercel / Netlify)
```bash
npm run build
vercel deploy
```

### 📤 Backend Deployment (vercel / Render)
```bash
npm run build
vercel deploy
```

## 📜 License
This project is licensed under the **MIT License**.

## 👥 Contributors
- [Rahul Kumar](https://github.com/Rahulkrsharma2004)

