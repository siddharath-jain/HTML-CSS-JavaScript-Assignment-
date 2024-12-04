let img1=document.getElementById('img1')
let img2=document.getElementById('img2')
img1.addEventListener('mouseover',function(){
    img1.src='pic2.webp'
})
img1.addEventListener('mouseout',function(){
    img1.src='pic1.webp'
})
img2.addEventListener('mouseover',function(){
    img2.src='pic4.webp'
})
img2.addEventListener('mouseout',function(){
    img2.src='pic3.webp'
})
