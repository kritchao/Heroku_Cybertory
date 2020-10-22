const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models/index');
const Routes = require('./routes/students')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', Routes);

db.sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log(`Server is running at port 8080`);
    });
});