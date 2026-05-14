const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000, categoria: 'tecnologia', stock: 3 },
    { id: 2, nombre: 'Mouse', precio: 50, categoria: 'tecnologia', stock: 10 },
    { id: 3, nombre: 'Silla', precio: 150, categoria: 'hogar', stock: 0 },
    { id: 4, nombre: 'Teclado', precio: 80, categoria: 'tecnologia', stock: 5 },
    { id: 5, nombre: 'Lampara', precio: 40, categoria: 'hogar', stock: 7 }
];

// Ejercicio 1
// Obtener solo los productos que:
// - tengan stock
// - y sean de categoría 'tecnologia'

const stockEj = productos.filter(n => n.stock && n.categoria === 'tecnologia');
console.log(stockEj);

// Ejercicio 2
// A partir del resultado anterior:
// devolver un nuevo array con solo los nombres

/*const resultado = productos
    .filter(u => u.categoria === 'tecnologia')
    .map(u => u.nombre);

console.log(resultado);*/

const resultado = stockEj.map(u => u.nombre);
console.log(resultado);

// Ejercicio 3
// Generar un nuevo array de objetos con este formato:
// [
//  { nombre: 'Laptop', precioConIVA: 1220 },
//  ...
// ]

const productosConIVA = productos.map(p => ({
    nombre: p.nombre,
    precioConIVA: p.precio * 1.22
}));

console.log(productosConIVA);

// Ejercicio 4
// Buscar un producto específico por id: 4

const idProducto = productos.find(u => u.id === 4);
console.log(idProducto);