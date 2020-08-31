const name = document.querySelector("#name");
const username = document.querySelector("#username");
const picture = document.querySelector("#picture");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const getUserBtn = document.querySelector("#getUserBtn");
const url = "https://randomuser.me/api";

getUserBtn.addEventListener('click', getNewUser);

function getNewUser() {

    fetch(url)
        .then(handleErrors)
        .then(parseJson)
        .then(updateProfile)
        .catch(displayErrors);
}

function handleErrors(res) {
    console.log(res);
    if (!res.ok) {
        console.log("Bad Status");
        throw Error(res.status);
    }
    return res;
}

function parseJson(res) {
    console.log("Parse json");
    return res.json();
}

function updateProfile(data) {
    console.log("Updated profile", data.results[0]);
    name.innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
    username.innerHTML = data.results[0].login.username;
    email.innerHTML = 'Email: ' + data.results[0].email;
    city.innerHTML = 'City: ' + data.results[0].location.city;
    picture.src = data.results[0].picture.medium;
}

function displayErrors(err) {
    console.log(err);
}