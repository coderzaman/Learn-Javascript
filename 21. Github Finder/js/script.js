let usersDeatails = document.querySelector(".userDetails");
let userNotFound = document.querySelector(".not_found");
let searchUser = document.querySelector("#serchUserName");
let searchBtn = document.querySelector("#serchBtn");

class UI {
    static showUser(user) {
        userNotFound.innerHTML = '';
        console.log(user);
        usersDeatails.innerHTML = `
            <div class="row shadow mt-2 py-4 px-3 userDetails rounded-3 border border-secondary text-bg-light">
                <div class="col-md-3 img-sec text-center">
                    <img src="${user.avatar_url}" class="img-fluid rounded-2" alt="">
                    <a href="${user.html_url}" target="_blank" class="bg-dark d-block mt-3 text-center text-white fs-4 rounded-3">${user.name}</a>
                </div>
                <div class="col-md-9">
                    <div class="badges">
                        <span class="badge bg-primary">Public Repors: ${user.public_repos}</span>
                        <span class="badge bg-secondary">Public Gist: ${user.public_gists}</span>
                        <span class="badge bg-success">Follower: ${user.followers} </span>
                        <span class="badge bg-danger">Following: ${user.following} </span>
                        <span class="badge bg-danger">Location: ${user.location} </span>
                    </div>

                    <div class="list-Item mt-3">
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                            <li class="list-group-item">User Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `

    }

    static notFound() {
        usersDeatails.innerHTML = '';
        userNotFound.innerHTML = `   
        <div class="row">
            <p class="text-bg-danger p-1 fs-2 text-center mt-3 rounded-2 shadow">User is Not Found...</p>
        </div>
        `;
        setTimeout(function () {
            userNotFound.innerHTML = "";
            searchUser.value = '';
        }, 2000);

    }
}

async function getUserObject(file) {
    let myObject = await fetch(file);
    let myText = await myObject.json();
    return myText;
}

async function getUser(username) {

    console.log(username);
    let usrDet = await getUserObject(`https://api.github.com/users/${username}`);

    if (usrDet.message === "Not Found") {
        UI.notFound();
    } else {
        UI.showUser(usrDet);
    }
}

searchBtn.addEventListener("click", function (e) {
    let username = searchUser.value.trim();
    if (username == '') {
        usersDeatails.innerHTML = "";
        alert("Please Enter User Name")
    } else {
        getUser(username);
    }
});


