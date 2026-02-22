const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Ishan's Azure Web App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(120deg, #1f1c2c, #928dab);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #fff;
        }
        .card {
          background: rgba(0,0,0,0.6);
          padding: 50px;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          text-align: center;
          width: 400px;
          transition: transform 0.3s ease;
        }
        .card:hover { transform: translateY(-10px); }
        h1 {
          margin-bottom: 15px;
          font-size: 30px;
          color: #f9d423;
        }
        p {
          margin-bottom: 25px;
          font-size: 18px;
          color: #ffffffcc;
        }
        .btn {
          display: inline-block;
          background: #f9d423;
          color: #1f1c2c;
          padding: 12px 28px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 4px 15px rgba(249, 212, 35, 0.4);
          transition: all 0.3s ease;
        }
        .btn:hover {
          background: #ffd64d;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(249, 212, 35, 0.6);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome Ishan Shrestha 🚀</h1>
        <p>to your Azure Web App! Enjoy building cloud applications.</p>
        <a href="#" class="btn">Get Started</a>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});