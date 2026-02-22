const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Abhinav's Azure Web App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          font-family: 'Verdana', sans-serif;
          background: #0f2027;  /* Dark gradient background */
          background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #fff;
        }
        .card {
          background: #1c1c1c;
          padding: 45px 50px;
          border-radius: 25px;
          text-align: center;
          width: 420px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
          border-top: 5px solid #ff6b6b;
          transition: all 0.4s ease;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        h1 {
          margin-bottom: 12px;
          font-size: 32px;
          color: #ff6b6b;
        }
        p {
          margin-bottom: 25px;
          font-size: 17px;
          color: #d1d1d1;
        }
        .btn {
          display: inline-block;
          background: #ff6b6b;
          color: #fff;
          padding: 12px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
          font-size: 16px;
          transition: 0.3s ease;
        }
        .btn:hover {
          background: #ff8787;
          transform: scale(1.1);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome Abhinav Manandhar 🎉</h1>
        <p>Explore your Azure Web App and enjoy creating amazing cloud projects!</p>
        <a href="#" class="btn">Start Now</a>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});