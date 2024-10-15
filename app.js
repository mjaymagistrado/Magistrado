const express = require('express');
const bodyParser = require('body-parser');

//Routes
const authRoutes = require('./route/authRoutes');
const userRoutes = require('./route/userRoutes');
const departmentRoutes = require('./route/departmentRoutes');
const courseRoutes = require('./route/courseRoutes');
const studentRoutes = require('./route/studentRoutes');


const app = express();

app.use(bodyParser.json());
const cors = require ('cors');
app.use(cors());


app.get ('/', function(req, res){
    res.send('Handsome, kill me');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dept', departmentRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/student', studentRoutes);

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT} `);
});