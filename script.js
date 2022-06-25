function editProfile(element) {
    document.getElementById(element).innerText = "Joseph Rexrode";
}

let accept1 = document.getElementById("accept1");
let accept2 = document.getElementById("accept2");
let reject1 = document.getElementById("reject1");
let reject2 = document.getElementById("reject2");


function removeConnectionRequest(element) {
    document.getElementById(element).remove();
}

function subtractRequests() {
    let amount = document.querySelector(".notification").innerText;
    console.log(amount);
    let newAmount = parseInt(amount) - 1;
    document.querySelector(".notification").innerText = newAmount;
}

function addConnection() {
    let amount = document.querySelector(".notification2").innerText;
    let newAmount = parseInt(amount) + 1;
    document.querySelector(".notification2").innerText = newAmount;
}


accept1.addEventListener("click", function() {
    removeConnectionRequest("request1");
    subtractRequests();
    addConnection();
})

accept2.addEventListener("click", function() {
    removeConnectionRequest("request2");
    subtractRequests();
    addConnection();
})

reject1.addEventListener("click", function() {
    removeConnectionRequest("request1");
    subtractRequests();
})

reject2.addEventListener("click", function() {
    removeConnectionRequest("request2");
    subtractRequests();
})