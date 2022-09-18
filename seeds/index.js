const seedCategories = require('./category-seeds.json');
const seedProducts = require('./product-seeds.json');
const seedTags = require('./tag-seeds.json');
const seedProductTags = require('./product-tag-seeds.json');
const {Category, Product, ProductTag, Tag} = require('../models');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

   await Category.bulkCreate(seedCategories,{
     individualHooks : true,
     returning: true,

   });
  
  await Product.bulkCreate(seedProducts,{
    individualHooks : true,
     returning: true,

  });

  await ProductTag.bulkCreate(seedProductTags, {
    individualHooks : true,
     returning: true,
  });

 await Tag.bulkCreate(seedTags,{
  individualHooks : true,
     returning: true,
 });

  
  process.exit(0);
};

seedAll();
