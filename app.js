const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/Wish');
const wishRoutes = require('./routes/wishRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/api/wishes', wishRoutes);


app.get('/', async (req, res) => {
  const { Wish } = require('./models/Wish');
  const wishes = await Wish.findAll({ order: [['createdAt', 'DESC']] });
  res.render('index', { wishes });
});


sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`A szerver fut`));
});
