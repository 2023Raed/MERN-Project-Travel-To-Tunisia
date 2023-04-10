const express = require('express');
const dotenv = require('dotenv');


const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
dotenv.config({path :'./config/config.env'});
const PORT = process.env.PORT;
const DB = process.env.DB;
app.use(cors());
app.use(cookieParser());

app.use(express.json(), express.urlencoded({extends:true}));

require('./config/mongoose.config')(DB);

require('./routes/user.routes')(app);
require('./routes/car.routes')(app);
require('./routes/house.routes')(app);
require('./routes/others.routes')(app);
require('./routes/reservation.routes')(app);


app.get('/api/pets', (req, res) => {
    res.send('Hello World!');
});

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );
