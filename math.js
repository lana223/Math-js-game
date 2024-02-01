var state = { 
     score:0,
    question: {
        num1:0,
        num2:0,
        correct:0
    }
}
var elements={
    question:document.getElementById('question'),
    answers:document.getElementsByClassName('answer'),
    score:document.getElementById('score'),
    counter:document.getElementsByClassName('counter'),
    starter:document.getElementById('starter')
}
elements.starter.onclick=startGame;

  

function generateQuestion () {
state.question.num1=rand(10)
state.question.num2=rand(10)
state.question.correct=state.question.num1*state.question.num2 

renderQuestion();
generateAnswers();
}
function rand(max){
    return Math.floor(Math.random() * max);
}

function generateAnswer() {
  for(var i=0;i<elements.answers.length;i++){
      elements.answers[i].innerHTML=rand(100)
  }

}
function renderQuestion () {
    elems.question.innerHTML = state.question.num1 + ' X ' + state.question.num2
  }
  

function wrongAnswer(){
    alert('Wrong Answer Iwill restart the game');

}

function correctAnswer(){
    state.score++
    elements.score.innerHTML=state.score  
    generateQuestion ()
}