const posts = [
    {title: 'Post1', body: 'This is post one'},
    {title: 'Post2', body: 'This is post two'},
    {title: 'Post3', body: 'This is post three'}
];

function getPosts(){
    setTimeout(() => {
        var total= "";

        posts.forEach((post, index)=> {
            total+= `<li>${post.title}</li>`;
        })
        document.body.innerHTML+= total;
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error= false;

            if (!error){
                resolve();
            }else{
                reject("something went wrong");
            }
        },2000)

    })
}


async function init(){

    await createPost({title: 'Post4', body: 'This is post four'});

    getPosts();
}

async function fetchUsers(){
    const res= await fetch ('https://jsonplaceholder.typicode.com/users');

    const data= await res.json();

    console.log(data);

}

fetchUsers();

// const promise1= Promise.resolve("Hello World");
// const promise2= 10;
// const promise3= new Promise((resolve, reject) => setTimeout(resolve, 2000, "this is resolved"));

// const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Promise.all([promise1, promise2, promise3, promise4]).then(values=> console.log(values));


// createPost({title: 'Post4', body: 'This is post four'}).then(getPosts).catch(err=> console.log(err));



