# 💰 Personal Finance Tracker (MERN)

A simple **Personal Finance Tracker** built with the **MERN** stack. This app allows you to **track income & expenses**, with full **CRUD operations** for transactions.

---

## 🚀 Features

- Add, edit, delete, and view transactions
- Transactions include: title, amount, category, date
- Categories: "income" or "expenses"
- Clean UI with TailwindCSS
- Notifications with react-hot-toast
- API requests handled via custom ApiServices class
- Bonus-ready for filters and charts

---

## 🛠️ Tech Stack

### 🖥️ Frontend

- React
- TailwindCSS
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- Custom API handler: ApiServices

### 🌐 Backend

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- CORS
- Custom classes: ApiError, ApiRespons

---

## 📚 Pages & Routes

| Route        | Description                           |
|--------------|---------------------------------------|
| `/`          | Home - List of transactions           |
| `/add`       | Add a new transaction                 |
| `/:id/edit`  | Edit a transaction by ID              |
| `/:id/delete`| Delete confirmation (optional UI)     |

---

## 🌐 API Endpoints
### Base URL: /api/transactions

| Method | Endpoint                             | Description                       |
| ------ | ------------------------------------ | --------------------------------- |
| GET    | `/get-transactions`                  | Get all transactions              |
| GET    | `/get-transactions-by-category`      | Get all transaction by category   |
| GET    | `/get-transaction/:transactionId`    | Get single transaction by ID      |
| POST   | `/add-transaction`                   | Create new transaction            |
| PUT    | `/update-transaction/:transactionId` | Update a transaction by ID        |
| DELETE | `/delete-transaction/:transactionId` | Delete a transaction by ID        |

---

## 📁 Folder Structure
```pgsql

root/
│
├── backend/
|   ├── .env
|   └── src/
│       ├── controllers/
|       ├── db/
│       ├── models/
│       ├── routes/
│       ├── utils/
│       └── app.js, contants.js, index.js
│
├── frontend/
|   ├── .env
|   └── src/
|       ├── api/         # ApiServices class
│       ├── components/
|       ├── config/
│       ├── pages/
│       └── App.jsx, main.jsx, index.css

```
---

## ⚙️ Setup Instructions

### 🧑‍🎨 Frontend Setup
```bash
cd frontend
npm install
cp .env.sample .env  # Add your env variable's values
npm run dev
```

### 🌐 Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Add your env vairalbe's values
npm run dev
```

---

## 🌐 Deployment

| Part      | Platform |
|-----------|----------|
| Frontend  | Vercel   |
| Backend   | Render   |

> This application is deployed and live at:  
🔗 [https://personal-finance-tracker-vert-theta.vercel.app/](https://personal-finance-tracker-vert-theta.vercel.app/)


> ⚠️ **Note:** The backend is deployed on **Render’s free tier**, which means it may take **20–30 seconds to wake up** after being idle. If you get no response initially, please wait or **refresh the page 1–2 times**.

---