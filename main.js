$(document).ready(function(){
    const nameElement = document.querySelector('#name');
    const userElement = document.querySelector('#user');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const endpoint = `https://api.github.com/users/ogiansouza`

    fetch(endpoint)
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            userElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;           
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})