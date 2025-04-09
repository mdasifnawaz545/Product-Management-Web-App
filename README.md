# 🛍️ Product Management Web App

A full-stack **Product Management Web App** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to **add**, **view**, and **manage products** with details like name, category, price, description, rating, and image.

---

## 🚀 Live Demo

- 🔗 **Frontend**: https://product-management-web-app-1.onrender.com
- 🔗 **Backend**: https://product-management-web-app-r7id.onrender.com
---

## 📦 Tech Stack

### Frontend:
- ⚛️ React.js
- ⚡ Axios for API communication
- 🎨 TailwindCSS
- 🔐 React Router

### Backend:
- 🟢 Node.js + Express.js
- 🗄️ MongoDB (via Mongoose)
- 📦 dotenv
- 🔁 CORS

### Deployment:
- 🌐 Render (for both frontend & backend)
- ☁️ MongoDB Atlas (database)

---

## 📸 Features

- 📥 Add new products
- 🧾 View all products
- 🎨 Responsive product cards
- 🚀 Deployed and production-ready

---

## 🧑‍💻 How to Run Locally

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/Product-Management-Web-App.git
cd Product-Management-Web-App
```

### 2️⃣ Folder Structure

```
Product-Management-Web-App/
├── frontend/       # React frontend
└── backend/       # Express backend
```

---

### 3️⃣ Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

### 4️⃣ Setup Environment Variables

Create a `.env` file in `server/`:

```env
PORT=3000
MONGO_URI=your-mongodb-atlas-uri
SECRET=your-jwt-secret
```

---

### 5️⃣ Start the App

#### Run Backend

```bash
cd backend
npx ts-node app.ts
```

#### Run Frontend

```bash
cd ../frontend
npm run dev
```

---

## 📡 API Endpoints

### Base URL: `https://product-management-backend.onrender.com`

| Method | Endpoint         | Description              | Body Params                  |
|--------|------------------|--------------------------|------------------------------|
| `GET`  | `/view`          | Get all products         | –                            |
| `POST` | `/create`        | Create a new product     | `{ name, desc, categ, rating, price, imgURL }` |
| `DELETE` | `/delete`  | Delete a product by ID   | –                            |
| `PUT`  | `/update`    | Update product by ID     | Same as create               |
| `POST`  | `/login`    | Login     | Same as login               |
| `POST`  | `/signup`    | Sign up     | Same as signup               |


> ✅ All data must be sent in JSON format. Images are stored via image URLs (e.g., from Cloudinary).

---

## 🛰️ Deployment (Render)

### Backend on Render:
1. Push `server/` to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Add Environment Variables: `MONGO_URI`, `SECRET`, `PORT`
4. Build Command: `npm install`
5. Start Command: `npm run dev` or `node index.js`

### Frontend on Render:
1. Push `client/` to GitHub
2. Create new Static Site on Render
3. Set:
   - Build Command: `npm run build`
   - Publish Directory: `dist` (for Vite) or `build` (for CRA)
   - Environment Variable: `VITE_BACKEND_URL=your-backend-url`

---

## 📌 TODOs / Improvements

- 🔐 Add user auth with JWT
- ✏️ Product editing UI
- 🗑️ Confirm before delete
- 📊 Category filter or dashboard
- 🌈 Animations or transitions

---

## 🤝 Contributing

Feel free to fork this repo and submit PRs. Issues are welcome!

---



---

## 🙌 Author

Made with ❤️ by Md Asif Nawaz
