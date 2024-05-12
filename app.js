let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

 // configuration 
let countItem = items.length;
let itemActive = 0;
// next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
            
prev.onclick = function(){
    itemActive = itemActive-1;
    if(itemActive<0){
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshTime);
    refreshTime = setInterval(()=>{
        next.click();
    },10000)
}

thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click',()=>{
        itemActive = index;
        showSlider();
    })
})
// auto slide
let refreshTime = setInterval(()=>{
    next.click();
},10000)