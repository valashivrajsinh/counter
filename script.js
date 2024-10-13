let count=0;

const val=document.querySelector('#value');
const btns=document.querySelectorAll(".button");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const current = e.currentTarget.classList;
        if(current.contains('decrease'))
        {
            count--;
        }
        else if(current.contains('increase'))
        {
            count++;
        }
        else{
            count=0;
        }
        if(count<0)
        {
            val.style.color="red";
        }
        else
        {
            val.style.color="green"
        }
        val.textContent=count;
    })
})