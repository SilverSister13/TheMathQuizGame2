function adduser(){
    username1 = document.getElementById("player1_username").value;
    localStorage.setItem("user1_name", username1)

    username2 = document.getElementById("player2_username").value;
    localStorage.setItem("user2_name", username2)

    window.location.replace("QuizGamePage.html")
}