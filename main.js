const postList = document.querySelector('.posts-list')
const url = 'http://localhost:3000/posts'
const addPostForm = document.querySelector('add-post-form')
const titleValue = document.getElementById('title-value')
const authorValue = document.getElementById('body-value')
let output = '';    
const renderPost = (posts) =>{
    posts.forEach(post =>{
        output += `
        <div class="card mt-4 col-md-6 bg-ligt" ">
            <div class="card-body" data-id = ${post.id}>
              <h5 class="card-title">${post.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${post.author}</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link" onclick = "edit()" id ="edit.post">Edit</a>
              <a href="#" class="card-link" onclick = "delet()" id ="delet.post">Delete</a>
            </div></div>
        `
    })
    postList.innerHTML = output;
}

//get request
fetch(url).then(res => res.json())
.then(data => { renderPost(data)
})

//create 
const add = (addPostForm ) => {
  
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/JSON'
        },
        body: JSON.stringify({
            title: titleValue.value ,
            author : authorValue.value
        })
    })
    .then(res => res.json())
    .then(data => {
        var dataArray = [];
        dataArray.push(data);
        renderPosts(posts);
    })}


// delete

const delet =() => {
    
    fetch(`${url}/9` , {
        method : "delete"
    }).then((response) => response.json())
    .then((data) => console.log(data))
}

// edit

const edit = () => {
    fetch(`${url}/2` , {
        method : "put" ,
        body : JSON.stringify({title : 'ryanrey' , id : 2}) ,
        headers : {
            'Content-type' : "application/json"
        }
    } ).then((response) => response.json)
    .then((data) => console.log(data))
}
























































// const edit = (e ) =>{
//     const parent = e.target.parentElement ;
//     let titleContent = parent.querySelector('card-title').textContent;
//       let authorContent = parent.querySelector('card-subtitle').textContent;
//       console.log(titleContent , authorContent);
//       titleValue.value = titleContent;
//       authorValue.value = authorContent;
// }
// btnsubmit.addEventListener('click' , () =>{
//     fetch(`${url}/${id}` , {
//         method : 'PATCH',
//         headers : {
//             'Content-Type' : 'application/json'
//         } ,
//         body : JSON.stringify({
//             title : titleValue.title ,
//             author : authorValue.author 
//         })
//     }).then(res => res.json())
//     .then(() => location.reload())
// })