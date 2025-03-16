var head = document.querySelector("#head");

function increase(){
    head.innerHTML++;
}
function decrease(){
    if(head.innerHTML>0){
        head.innerHTML--;
    }
    else{
        head.innerHTML
    }
}
function resetValue(){
    head.innerHTML = "0"
}