


$('.sorting_asc').click(function(){
    $('th .fa').remove();

    $(this).addClass('usrt');
    $(this).removeClass('srt');
    $(this).append('<i class="fa fa-sort"></i>');
});
$('.usrt').click(function(){
    $('th .fa').remove();
    $(this).append('<i class="fa fa-sort"></i>');
    $(this).addClass('sort');
    $(this).removeClass('usrt');

 



});
$('.sorting_desc').click(function(){
    $('th .fa').remove();
    $(this).append('<i class="fa fa-sort"></i>');
    $(this).addClass('sort');


 



});


$('button[tog=modal]').click(function(){
        var target = $(this).attr('target');
        
        $(target).fadeIn("1000");
        $(target).addClass('show');
        $("body").addClass('modal-aktif');
});

$('.btn-tutup').click(function(){
    
$('.modal').removeClass('show');
$("body").removeClass('modal-aktif');
$('.modal').attr("style","");



});


$('#navb').click(function(){
    $('.madnav').fadeIn();
    $('.madnav').removeClass('hide');
  
 
    
});
$('.close-side').click(function(){
    $('.madnav').fadeOut();
    $('.madnav').attr('style','');
    $('.madnav').addClass('hide');
});
$('.profil').click(function(){
    $('.user-nav').fadeIn("1000");
    $('.user-nav').removeClass('unshow');
    $(this).removeClass('profil');   
    $(this).addClass('profile-open');   
    $(this).attr("data-open","true");
});

$('body').dblclick(function(){
    
    $('.user-nav').fadeOut("1000");
    $('.user-nav').addClass("unshow");
    $('.user-nav').attr("style","");
    $(this).removeClass('profile-open');
    $(this).addClass('profil');   
});


$('.profile').dblclick(function(){
    
    $('.user-nav').fadeOut("1000");
    $('.user-nav').addClass("unshow");
    $('.user-nav').attr("style","");
    $(this).removeClass('profile-open');
    $(this).addClass('profil');   
});


$('.faq[tog=testi]').click(function(){


    var exp = $(this).attr('expand');
    var target = $(this).attr('target');
    if(exp=="false"){
        $(this).attr('expand','true');

        $(target).fadeIn();
        $(target).removeClass('unshow');
  
    }else{
        $(this).attr('expand','false');
        $(target).fadeOut();
        $(target).addClass('unshow');
      
    }
}



);

$('.lite').click(function(){
    $('.pricing').removeClass('pricing-active');

    $('.paket').removeClass('paket-show');
    $('.paket').attr('style','');
    $('.price1').fadeIn();
    $('.price1').addClass('paket-show');

    $(this).addClass('pricing-active');


});

$('.premium').click(function(){
    $('.pricing').removeClass('pricing-active');
  
    $('.paket').removeClass('paket-show');
    $('.paket').attr('style','');
    $('.price2').fadeIn();
    $('.price2').addClass('paket-show');

    $(this).addClass('pricing-active');


});


$('.platinum').click(function(){
    $('.pricing').removeClass('pricing-active');
 
    $('.paket').removeClass('paket-show');
    $('.paket').attr('style','');
    $('.price3').fadeIn();
    $('.price3').addClass('paket-show');
 
    $(this).addClass('pricing-active');


});

$('#next').click(function(){
    $('.reg1').removeClass('reg-show');
    $('.paket').fadeOut();
    $('.reg2').fadeIn();
    $('.reg2').addClass('reg-show');
});

$('#next2').click(function(){
    $('.reg1').removeClass('reg-show');
    $('.reg2').removeClass('reg-show');
    $('.reg2').attr('style','');
    $('.paket').fadeOut();
    $('.reg3').fadeIn();
    $('.reg3').addClass('reg-show');
});
$('.navy-bar').click(function(){
  var ket = $(this).attr('data-clp');
  if(ket=="false"){
$('#navbarSupportedContent').addClass('navy-show');
$(this).attr('data-clp','true');

  }else{
    $('#navbarSupportedContent').removeClass('navy-show');
    $(this).attr('data-clp','false');
  }
});


$('#paket1-pick').click(function(){
    $('.card-pilih-paket').removeClass('picked');

    $(this).addClass('picked');

});

$('#paket2-pick').click(function(){
    $('.card-pilih-paket').removeClass('picked');

    $(this).addClass('picked');

});

$('#paket3-pick').click(function(){
    $('.card-pilih-paket').removeClass('picked');

    $(this).addClass('picked');

});