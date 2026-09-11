require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');
const Card = require('./models/cards.model');
const { seedDatabase } = require('./seeders/initialCards');
const PORT = process.env.PORT || 3000;

sequelize.sync().then(async () => {
    await seedDatabase(Card);
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});