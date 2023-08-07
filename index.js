console.log('hello')

const question_answer=document.getElementsByClassName('question-answer')


for(let i=0; i<question_answer.length; i++){
question_answer[i].addEventListener('click',function(){
    this.classList.toggle('showAns')
})

}

