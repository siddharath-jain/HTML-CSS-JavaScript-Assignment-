const btn=document.getElementById('btn')
function randomColorChange(){
    let color='abcdef123456789'
    let sign='#'
    for(let i=0;i<6;i++){
     
    sign=sign+color[Math.floor(Math.random()*16)]
    }
    return sign
}
function randomColor(){
    document.body.style.backgroundColor=randomColorChange()
}