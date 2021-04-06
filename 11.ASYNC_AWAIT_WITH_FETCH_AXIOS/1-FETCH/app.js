console.log('Hola juan..listo para esta nueva aventura...!');


const getNombre = (idPost) => {
   fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then( res => res.json())
    .then(post => {
        console.log(post.userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => {
                return res.json()
            })
            .then(user => {
                console.log(user.username);
            })
    });
}

getNombre(6)