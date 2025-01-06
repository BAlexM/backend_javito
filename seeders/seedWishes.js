const { Wish, sequelize } = require('../models/Wish');

const seedWishes = async () => {
  const wishes = Array.from({ length: 15 }).map((_, i) => ({
    name: i % 2 === 0 ? `User ${i}` : null,
    content: `Lorem ipsum dolor sit amet, wish ${i + 1}.`,
  }));

  await sequelize.sync({ force: true });
  await Wish.bulkCreate(wishes);
  console.log('Database sikeresen seedelve!');
};

seedWishes().then(() => process.exit());
