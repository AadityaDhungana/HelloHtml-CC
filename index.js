const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Aaditya Dhungana.</h1><br>Welcome to this azure app 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
