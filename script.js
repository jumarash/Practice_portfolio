$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); //problem over here
});


});


$(document).on("click","#menu_about", function(){

    $(this).addClass("highlight");
    $(this).siblings().removeClass("highlight");
    $("#container").show();
    $("#container").siblings().slideUp("fast")
    
    });