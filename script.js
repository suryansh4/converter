let cel=document.getElementById(`cel`);
let fer=document.getElementById(`fer`);
cel.addEventListener(`input`,function(){
    let x=this.value;
    let m=(x * 9/5) + 32 ;
    if(!Number.isInteger(m))
    {
        m=m.toFixed(4);
    }
    fer.value=m;



})

fer.addEventListener(`input`,function()
{
    let z=this.value;
    let c = (z * 2) + 30;
    if(!Number.isInteger(c))
    {
        c=c.toFixed(4);
    }
    cel.value=c;

    
})