const express = require('express');

const bodyParser = require('body-parser');

const config = require('./config');

const homeRoutes = require('./routes/index');

const userRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'public');

app.use(bodyParser({ extended: false }));

app.use(homeRoutes);

app.use(userRoutes.routes);




app.listen(config.port, console.log(`Listening to ${config.host_url}`));


