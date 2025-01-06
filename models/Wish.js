const { Sequelize, DataTypes } = require('sequelize');

/*const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
  });
  */

 //Ez a mód sqlite-ot használt volna amit a Webváltónál is használtunk azt hiszem, de végül nem működött, a 
 // többi rész gyakorlatilag ugyan az mysql-el is mivel elvileg a "sequelize" azt írták hogy 
 // felismeri autómatikusan a mysql adatbázist vagy nem tesz közte különbséget, ezt nem teljesen értettem de azt
 // írták dokumentációkban (ezt a chatgpt is megerősítette bár azt nem venném magában feltétlen hitelesnek) így is működnie kell.
  

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: process.env.DB_HOST, 
      dialect: 'mysql', 
    }
  );
  

const Wish = sequelize.define('Wish', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [10],
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});