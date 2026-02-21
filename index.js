const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Aaditya Web App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #4e73df, #1cc88a);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: white;
        }
        .card {
          background: rgba(255, 255, 255, 0.15);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          text-align: center;
          width: 350px;
        }
        h1 { margin-bottom: 10px; font-size: 28px; }
        p { margin-bottom: 20px; font-size: 16px; }
        .btn {
          background: white;
          color: #4e73df;
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }
        .btn:hover { background: #f8f9fc; transform: scale(1.05); }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Hello Aaditya Dhungana 🚀</h1>
        <p>Welcome to this Azure App!</p>
        <a href="#" class="btn">Learn More</a>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
