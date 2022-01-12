import * as bootstrap from 'bootstrap';

document.getElementById('text').addEventListener('click', getText);
document.getElementById('users').addEventListener('click', loadUsers);
document.getElementById('posts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);
function getText(){
    document.getElementById('output').innerHTML= '';
    fetch('sample.txt')
    .then((res)=> res.text())
    .then((data)=> console.log(data))
}

// function getUsers(){
//     fetch('users.json')
//     .then((res)=> res.json())
//     .then((data)=>{
//         var output= "<h2>Users</h2>";
//         data.forEach((user)=>{
//             output+= `
//             <ul>
//                 <li>ID: ${user.id} </li>
//                 <li>Name: ${user.name} </li>
//                 <li>Email: ${user.email} </li>
//             </ul>
//             `;
//         })
//         document.getElementById('output').innerHTML=output;
//     })
// }
        
function loadUsers() {
    //Load Github Users
        var xhr= new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users', true);

        xhr.onload= function(){
            if (this.status== 200){
                var users= JSON.parse(xhr.responseText);
                var output= '';
                for (let i = 0; i< 5; i++){
                    output+= '<div class=user>' +
                    `<img src= ${users[i].avatar_url} alt= "" width= "70" height= "70">`+
                    '<ul>' + '<li>' + `Username: ${users[i].login}` + '</li>' +
                    '<li>' + `User ID: ${users[i].id}` + '</li>'+
                    '</ul>' + '</div>';
                }
                document.getElementById('output').innerHTML= output;
            }
        }
        xhr.send();
    }


function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=>{
        var output= "<h2>Posts</h2>";
        data.forEach((post)=>{
            output+= `
                <div class= "card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        })
        document.getElementById('output').innerHTML=output;
    })
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title, body: body})
    })
    .then((res) => res.json())
    .then((data)=> console.log(data))
}
