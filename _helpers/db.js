const config = require('config.json');

const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    
    
    



    // connect to db
    const sequelize = new Sequelize(database, user, password, { host: host, dialect: 'postgres' });

    // init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);


    db.Wagendaten = require('../wagendaten/wagendaten.model')(sequelize);
   

    // sync all models with database
    await sequelize.sync();
}