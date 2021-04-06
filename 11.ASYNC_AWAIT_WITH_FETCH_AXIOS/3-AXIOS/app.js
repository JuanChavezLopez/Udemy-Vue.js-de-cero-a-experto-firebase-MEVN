console.log('Async await...!');


// const getNombre = (idPost) => {
//    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
//     .then( res => res.json())
//     .then(post => {
//         console.log(post.userId);
//         fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//             .then(res => {
//                 return res.json()
//             })
//             .then(user => {
//                 console.log(user.username);
//             })
//     });
// }

// getNombre(6)

// !----------asyncawait-----------------

// const getNombreAsync =  async (idPost) => {
//     try {
//         // TODO: el await nos devuelve una promesa
//         const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
//         const post = await resPost.json()
//         console.log(post);

//         const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
//         const user = await resUser.json();
//         console.log(user.name);
        
//     } catch (error) {
        
//         console.log(error)
//     }
// }

// getNombreAsync(80)


// !----------axios-----------------

const getNombreAxios =  async (idPost) => {
    try {
        // TODO: el await nos devuelve una promesa
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        // const post = await resPost.json()
        // console.log(resPost.data.userId);

        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data.name);

    } catch (error) {
        
        console.log(error)
    }
}

getNombreAxios(80)