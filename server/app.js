const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;







app.use(cors());
app.listen(port, () => console.log(`Express departing now from http://localhost:${port}`))

