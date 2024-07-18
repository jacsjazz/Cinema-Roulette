const sequelize = require('../config/connection')
const { User, Favorites } = require('../models')
const userSeedData = require('./user.json')
const favoritesSeedData = require('./favorites.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: false });
    await User.bulkCreate(userSeedData, {
        returning: true
    })
    await Favorites.bulkCreate(favoritesSeedData, {
        returning: true
    })
    process.exit(0);
};
seedDatabase();