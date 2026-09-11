require('dotenv').config();
const app = require('./app')
const sequelize = require('./config/database')
const PORT = process.env.PORT;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
})