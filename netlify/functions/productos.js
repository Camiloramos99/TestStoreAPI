// netlify/functions/productos.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const filePath = path.join(__dirname, '../../db.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const productos = JSON.parse(data).productos;

  return {
    statusCode: 200,
    body: JSON.stringify(productos)
  };
};

  