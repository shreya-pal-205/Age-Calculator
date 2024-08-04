let date = document.querySelector(".date");
let btn = document.querySelector(".btn");
let p = document.querySelector("p");

btn.addEventListener("click",()=>{
    findAge();
})

function findAge(){
    let birthDate = new Date(date.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let l3,m3,y3;

    y3 = y2 - y1;
    

    if(m2>m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12+m2 - m1;
    }

    if(d2>d1){
        d3 = d2-d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }

    p.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days`;
}

function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate();
}