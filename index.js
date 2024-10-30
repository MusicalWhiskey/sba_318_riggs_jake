console.log("Riggs, Jake SBA 318");
console.log("test");

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;





app.listen(PORT, () => {
    console.log(`We are live on port: ${PORT}`);
  });