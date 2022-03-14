/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

db.products.remove({});
db.counters.remove({});

const productsDB = [
  {
    id: 1,
    productName: 'All Saints Jacket',
    pricePerUnit: 299,
    category: 'Jacket',
    imageUrl: 'https://images.app.goo.gl/7RfsZTYvou19dH9h8',
  },
  {
    id: 2,
    productName: "Levi's Jeans",
    pricePerUnit: 80,
    category: 'Jeans',
    imageUrl: 'https://images.app.goo.gl/4ttGud2gy4v7NVzh9',
  },
  {
    id: 3,
    productName: "Cotton Sweater",
    pricePerUnit: 30,
    category: 'Sweaters',
    imageUrl: 'https://images.app.goo.gl/Gbd4JdrnGrNDkzrU8',
  },
];

db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted', count, 'products');
db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });
db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ status: 1 });
db.products.createIndex({ owner: 1 });
db.products.createIndex({ created: 1 });