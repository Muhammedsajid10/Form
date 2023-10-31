const express = require('express');
const connection = require('./Mongodb/config');
const router = require('./Router');
const app = express();
const cors = require('cors')

connection();
app.use(express.json());
app.use(cors())
app.use('/', router);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is on Port ${PORT}`));
