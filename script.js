let timer=document.getElementById('time-left');
let square=document.querySelectorAll('.square');
let score=document.querySelector('#score');
let initialtimer=10;
function startgame()
{
  const add=setInterval(()=>{
   
        timer.textContent=initialtimer--;
        let molediv=document.querySelector('.mole');
        if(molediv)
        {
            molediv.classList.remove('mole');
        }
        const ranindex=Math.floor(Math.random()*9);
        square[ranindex].classList.add('mole');
        
        if(timer.textContent<=0)
        {
            clearInterval(add);
        }
  },800) 
}
function resetgame()
{
    score.textContent=0;
    initialtimer=0;
}

function init(){
    let scored=0;
    square.forEach((item)=>{
    item.addEventListener('click',(e)=>{
    if(item.classList.contains('mole'))
    {
       scored++;
       score.textContent=scored;
    }
    })
    })
    
}
window.onload=init;
