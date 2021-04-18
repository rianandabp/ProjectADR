const express = require('express');

const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

app.use(express.json());
app.get('/', (req, res) => res.send('API Running'));


app.use('/api/cars', require('./routes/api/car'));
app.use('/api/customers', require('./routes/api/customer'));
app.use('/api/projects', require('./routes/api/project'));
app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));