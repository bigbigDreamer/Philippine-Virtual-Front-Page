//控制用户浏览事件，创造动画特效
$(()=>{
    let imgArr = $('a img');
    for(let i = 0;i<imgArr.length;i++){
        $(imgArr[i]).mouseenter(function () {
            $(this).addClass('animated swing')
        })
        $(imgArr[i]).mouseleave(function () {
            $(this).removeClass('animated swing')
        })
    }
})