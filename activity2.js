function getnumb() {
    score = localStorage.getItem("score");
    document.getElementById("score").innerHTML = "Score:" + score;
}

function backUp() {
    window.location = "activity_1.html";
}