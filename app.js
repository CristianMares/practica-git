function saludar(nombre, formal = false) {
  return (formal ? 'Buenos dias ' : 'Que onda ') + nombre;
}

console.log(saludar('mundo'));
