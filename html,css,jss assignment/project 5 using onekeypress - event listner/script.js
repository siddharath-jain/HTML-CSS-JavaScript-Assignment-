let area=document.getElementById('area')
area.addEventListener('keypress',function(){
    document.getElementById('demo').innerText=area.value
})