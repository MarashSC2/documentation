$(document).ready(function(){
    $("#menu").hover(function(){
        $("#menuContent").show();
    },function(){
        $("#menuContent").hide();
    });
    $("#menu").hover(function(){
        $(this).fadeTo(250,1);
    },function(){
        $(this).fadeTo(250,0.5);
    });
});