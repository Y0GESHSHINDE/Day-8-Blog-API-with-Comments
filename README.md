
# 📝 Blog API with Comments - Node.js, Express & MongoDB

Welcome to **Day 8** of my **10 Days of Node.js/Express/MongoDB** series!

This project is a **Blog API** that allows users to create blogs and post comments on them. It demonstrates managing related data using Mongoose references and fetching nested data using `.populate()`.

---

## 🚀 Features

- ➕ Create blog posts
- 💬 Add comments to blogs
- 🔗 Blogs and Comments are stored in separate collections (referenced)
- 📄 Get all blogs with populated comments
- 🛠️ Modular API design with Express

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (for environment variables)

---

## 📁 Folder Structure

```
blog-api/
├── models/
│   ├── Blog.js
│   └── Comment.js
├── routes/
│   ├── blogRoutes.js
│   └── commentRoutes.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/blog-api-with-comments.git
cd blog-api-with-comments
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/blogCommentDB
PORT=5000
```

4. **Start the server**
```bash
npm run start
```

App runs at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 📝 Blog Routes

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| POST   | `/api/blogs`   | Create a new blog post     |
| GET    | `/api/blogs`   | Get all blogs with comments|

### 💬 Comment Routes

| Method | Endpoint                 | Description                    |
|--------|--------------------------|--------------------------------|
| POST   | `/api/comments/:blogId`  | Add a comment to a blog        |

---

## 🧪 Sample JSON

**Create Blog**
```json
POST /api/blogs
{
  "title": "My First Blog",
  "content": "This is a blog post."
}
```

**Add Comment to Blog**
```json
POST /api/comments/<blogId>
{
  "text": "Great blog!"
}
```

**Fetch Blogs with Comments**
```
GET /api/blogs
```

---

## 🧠 Learning Goal

This project teaches:
- MongoDB **document relations** using `ref`
- Using Mongoose `.populate()` to fetch nested data
- Creating and linking related schemas
- Modularizing APIs in Express

---

## 📬 Testing with Postman

1. Open [Postman](https://www.postman.com/)
2. Use base URL: `http://localhost:5000`
3. Test:
   - `POST /api/blogs` to create blog
   - `POST /api/comments/:blogId` to add comment
   - `GET /api/blogs` to see all blogs with comments

---

## 👨‍💻 Author

**Yogesh Shinde**  
📧 yogeshshinde3624@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/y0geshshinde)  
🐙 [GitHub](https://github.com/y0geshshinde)

