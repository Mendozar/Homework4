var restartBtn = document.querySelector("button.restartBtn"),
clearBtn = document.querySelector("button.clearBtn"),

/*Get the highScores list and turn it back into an object.*/
highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
scoreList = document.getElementById("score-list");

/*Sort highscores from high to low.*/
highScores.sort(function (a, b) {
return b.score - a.score
})

/*Display the scores.*/
for (var s = 0; s < highScores.length; s++) {
var newLi = document.createElement("li")
newLi.textContent = highScores[s].name + " - " + highScores[s].score
scoreList.appendChild(newLi)
}


/*Take the quiz again and clear the scores.*/
clearBtn.addEventListener("click", function () {
localStorage.clear();
history.back()
});
restartBtn.addEventListener("click", function () {
history.back();
});