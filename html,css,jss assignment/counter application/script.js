const decbtn=document.getElementById('decbtn')
const incbtn=document.getElementById('incbtn')
const displayvalue=document.getElementById('value')
function decrease(){
    const value=Number(displayvalue.innerText)
    if (value>0){
        displayvalue.innerText=value-1
    }
    else {
        alert('negative value not allowed')
    }
    
}
function increase(){
    const value=Number(displayvalue.innerText)
    displayvalue.innerText=value+1
}
decbtn.addEventListener('click',decrease)
incbtn.addEventListener('click',increase)