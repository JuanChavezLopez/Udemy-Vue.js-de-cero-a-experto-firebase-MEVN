fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => {
        return res.json()
    })
    .then(data => {
        console.log(data.results)

        let arrayNombres = []
        data.results.forEach(element => {
            // arrayNombres.push(element.name);
            // console.log(element.name)
        });

        console.log(arrayNombres);
    })
    .catch(error => console.log(error))


// ASYNC AWAIT
const obtenerPokemones = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();

        // generamos un nuevo array con datos personalizados
        // const arrayNombres = data.results.map(poke => poke.url);
        const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur');

        console.log(arrayNombres);

    } catch (error) {
        console.log(error)
    }
}

obtenerPokemones();