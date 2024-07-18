const sequelize = require('../config/connection')
const { Users, Favorites } = require('../models')
const usersSeedData = require('./users.json')
const favoritesSeedData = require('./favorites.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: false });
    await Users.bulkCreate(usersSeedData, {
        returning: true
    })
    await sequelize.sync({ force: false });
    await Favorites.bulkCreate(favoritesSeedData, {
        returning: true
    })
    process.exit(0);
};
seedDatabase();