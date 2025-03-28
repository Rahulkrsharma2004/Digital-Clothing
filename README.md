# 👗 MERN Digital Clothing Web App

## 📜 Description
A highly interactive web application built with the **MERN (MongoDB, Express.js, React, Node.js)** stack. This app allows users to **browse, customize, and purchase** digital clothing with real-time customization features and virtual try-on functionality.

## 🖼 Demo
![Screenshot (177)](https://github.com/user-attachments/assets/777870e0-6c95-4c2c-8c47-5910ec4d2a42)
![Screenshot (178)](https://github.com/user-attachments/assets/444b1223-5d57-4c74-a3e5-29c500130117)
![Screenshot (179)](https://github.com/user-attachments/assets/8d0b593b-20f4-4fcb-98aa-27b4ec854cc9)
![Screenshot (180)](https://github.com/user-attachments/assets/7daf149d-38cc-4036-a415-43f4e8d565ef)
![Screenshot (181)](https://github.com/user-attachments/assets/39bb87ea-42da-46f5-87e2-58af38089f3c)
![Screenshot (182)](https://github.com/user-attachments/assets/59450b52-3357-4421-acf0-bcea92c65b1a)
![Screenshot (183)](https://github.com/user-attachments/assets/3e1ac130-1de9-4251-91d9-c249f508d0f1)
![Screenshot (184)](https://github.com/user-attachments/assets/e9e6ef02-e3fe-445b-be7f-94aaa81f69f5)
![Screenshot (185)](https://github.com/user-attachments/assets/9b77f154-debe-4a35-9d96-70e3b0a072da)


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

