const btn = document.querySelector(".btn");
const secondCard = document.querySelector(".container__submit");
const firstCard = document.querySelector(".container");
const enableRate= document.querySelector(".container__rate")
const ratings = document.querySelectorAll(".rate");
const review = document.querySelector('.review');

let selectedRate;

btn.addEventListener('click', function(){
    if(secondCard.classList.contains('visibility')){
secondCard.classList.remove('visibility');
firstCard.style.display = "none";
    }
    else{
        secondCard.classList.add('visibility')
    }
})

    ratings.forEach((item,id)=>{
        item.addEventListener('click', function(e){
            this.style.backgroundColor = "hsl(25, 97%, 53%)";
            selectedRate = id+1;
           e.preventDefault();
         review.textContent = selectedRate;
         if (e.currentTarget=item) {
        enableRate.classList.add('action')
         }
        }); 
    })



