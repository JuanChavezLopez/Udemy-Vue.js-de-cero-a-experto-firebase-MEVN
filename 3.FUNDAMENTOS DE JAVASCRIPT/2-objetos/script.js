// OBJETOS


const mascota ={
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro'],
    links: {
        youtube: {
            enlace: 'google.com'
        }
    }

}

console.log(mascota);


console.log(mascota.edad);
mascota.id = 20;
console.log(mascota);

// destructuring
const{edad, nombre, vivo} = mascota;
console.log(nombre);

console.log(mascota.links)

