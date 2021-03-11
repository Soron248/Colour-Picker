let bg = document.getElementById("1st");
let btn2 = document.getElementById("2nd");
let txt = document.getElementById("3rd");

function generateColor(){
    let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';

    for(let i=0; i<6; i++){
        let num = Math.round(Math.random() * 15);
        let num2 = hex[num];
        color += num2;
    }
    bg.style.backgroundColor = color;
    btn2.style.color = color;
    txt.value = color;

}
btn2.onclick = function(){
    txt.select();
    document.execCommand('copy');
    alert(txt.value+ '  copied!');
}