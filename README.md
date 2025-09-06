
---

# 📄 **Project Report: Blog Website (MERN-Stack)**

---

## 🧾 Project Name

**Blog Website - MERN Stack (Frontend + Backend)**

---

## 📚 Project Overview

This is a **full-stack blog platform** where users can:

* Register and log in securely
* Create and manage blog posts
* Upload images to cloud storage
* Edit profile details
  The backend is built with **Node.js, Express.js, MongoDB**, and the frontend is built with **React (Vite)**.

---

## 🧠 Core Features

| Area        | Features                                                               |
| ----------- | ---------------------------------------------------------------------- |
| User Auth   | Register, Login, Logout with JWT tokens                                |
| Blog System | Create, read, update, and delete blogs with image upload               |
| Dashboard   | Logged-in users can view/manage their own posts                        |
| Profile     | View and edit user profile details                                     |
| Security    | Password hashing, token-based authentication, route protection         |
| UI          | Modern responsive UI using React and dynamic routing with React Router |

---

## 🔧 Technology Stack

| Layer      | Technology             |
| ---------- | ---------------------- |
| Frontend   | React (Vite), CSS      |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB (via Mongoose) |
| Auth       | JWT, bcryptjs          |
| Uploads    | Multer + Cloudinary    |
| State Mgmt | React Hooks            |
| Styling    | Plain CSS              |

---

## 📁 Backend Structure (Express + MongoDB)

```
/backend
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── server.js
└── .env
```

* **Express APIs** handle user login, blog CRUD, file uploads.
* **MongoDB** stores user and blog data.
* **Cloudinary** hosts blog images.
* **Multer** handles local file storage and conversion.

---

## 📁 Frontend Structure (React + Vite)

```
/frontend
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Login, Register, Home, Profile, CreatePost
│   ├── App.jsx          # Main routing logic
│   └── main.jsx         # React app entry point
├── public/
├── index.html
└── vite.config.js
```

* **Routing:** Uses `react-router-dom` for navigation.
* **Auth:** Stores JWT token in localStorage or cookies.
* **API Calls:** Axios or fetch used to interact with Express backend.

---

## 💻 Frontend Features

### 🔐 Authentication

* Register & login pages
* Auth-protected routes
* Token stored locally (likely using `localStorage`)

### 🏠 Home Page

* Displays all blogs fetched from backend
* Supports title, content, image display

### ✍️ Blog Editor

* Create and edit posts
* Upload images (via backend + Cloudinary)
* Automatically links blog to the logged-in user

### 👤 Profile Page

* View user details
* View user-created blogs
* Option to edit profile (if implemented)

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend responds with JWT token
3. Token is stored on frontend (cookie/localStorage)
4. Protected routes verify token and grant access

---

## 🌐 Image Upload Workflow

1. User selects an image in frontend form.
2. FormData is submitted via `POST` to backend API.
3. Multer saves file, `datauri` converts to buffer.
4. Cloudinary uploads and returns a public image URL.
5. URL is saved with the blog post in MongoDB.

---

## ⚙️ Backend Scripts (`package.json`)

```json
"scripts": {
  "dev": "nodemon backend/server.js",
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
  "start": "nodemon backend/server.js"
}
```

* `dev`: Starts backend in development mode
* `build`: Installs dependencies and builds frontend
* `start`: Starts server in production mode

---

## ✅ Dependencies Summary

### Backend:

* `express`, `mongoose`, `cors`, `dotenv`, `jsonwebtoken`, `bcryptjs`, `multer`, `cloudinary`, `cookie-parser`, `datauri`

### Frontend:

* `react`, `react-router-dom`, `vite`, `axios` (if used), etc.

---

## 📈 Future Improvements (Suggestions)

* Add blog categories and filters
* Add like/comments on blog posts
* Integrate rich-text editor (e.g., Quill)
* Add light/dark theme toggle
* Setup email verification and forgot password
* Use Redux or Zustand for advanced state management

---

## 🔗 GitHub Link

👉 [https://github.com/nomanmalek18/Blog-website]

---
