$(function(){
  $.getJSON ("json1.txt", function (data)  
        {  
            $.each (data, function (i, item)  
            {  

    if(i=="hotdoor")
               $.each(item, function(sm, smi) {
           $("#hotdoor").find("img").eq(sm).attr("src",smi.imgname);
		   $("#hotdoor").find("h4").eq(sm).text(smi.h4);
		    $("#hotdoor").find("span").eq(sm).text(smi.nr);
    $("#hotdoor").children("ul").children("li").attr("href",smi.href);
});


    if(i=="tui")
               $.each(item, function(sm, smi) {
           $(".tui").children("li").children(".wxian1").eq(sm).children(".wx").find("img").attr("src",smi.imgname);
		   $(".tui").children("li").children(".wxian1").eq(sm).children(".wx").find("h4").text(smi.h4);
		    $(".tui").children("li").children(".wxian1").eq(sm).children(".wx").find("h5").text(smi.h5);
    $(".tui").children(".wxian1").eq(sm).children(".wx").attr("href",smi.href);
});
    if(i=="tong")
               $.each(item, function(sm, smi) {
           $(".tong").children("li").children(".wxian1").eq(sm).children(".wx").find("img").attr("src",smi.imgname);
		   $(".tong").children("li").children(".wxian1").eq(sm).children(".wx").find("h4").text(smi.h4);
		    $(".tong").children("li").children(".wxian1").eq(sm).children(".wx").find("h5").text(smi.h5);
    $(".tong").children(".wxian1").eq(sm).children(".wx").attr("href",smi.href);
});
     if(i=="t")
               $.each(item, function(sm, smi) {
           $(".t").children("li").children(".wxian1").eq(sm).children(".wx").find("img").attr("src",smi.imgname);
		   $(".t").children("li").children(".wxian1").eq(sm).children(".wx").find("h4").text(smi.h4);
		    $(".t").children("li").children(".wxian1").eq(sm).children(".wx").find("h5").text(smi.h5);
    $(".t").children(".wxian1").eq(sm).children(".wx").attr("href",smi.href);
});    
  if(i=="liebiao")
               $.each(item, function(sm, smi) {
				   
          $(".liebiao").eq(sm).children(".y").find("img").attr("src",smi.imgname);
          $(".liebiao").eq(sm).children(".d").find("img").attr("src",smi.imagname);
          $(".liebiao").eq(sm).children(".x").find("img").attr("src",smi.imagename);
		   $(".liebiao").eq(sm).children(".miaoshu").find("p").text(smi.p);
		   $(".liebiao").eq(sm).children(".miaoshu").find(".se").text(smi.se);
	});
	
	    if(i=="zuobiao")
               $.each(item, function(sm, smi) {
           $(".zuobiao").find("p").eq(sm).text(smi.p);
		   $(".zuobiao").find(".num").eq(sm).text(smi.num);
		    $(".zuobiao").find(".nn").eq(sm).text(smi.nn);
});

    if(i=="cheng")
               $.each(item, function(sm, smi) {
           $(".cheng").find("img").eq(sm).attr("src",smi.imgname);
		   $(".cheng").find("h4").eq(sm).text(smi.h4);
		    $(".cheng").find("span").eq(sm).text(smi.ssp);
		    $(".cheng").find("p").eq(sm).text(smi.pp);
});
    if(i=="cheng1")
               $.each(item, function(sm, smi) {
           $(".cheng1").find("img").eq(sm).attr("src",smi.imgname);
		   $(".cheng1").find("h4").eq(sm).text(smi.h4);
		    $(".cheng1").find("span").eq(sm).text(smi.ssp);
		    $(".cheng1").find("p").eq(sm).text(smi.pp);
});
    if(i=="cheng2")
               $.each(item, function(sm, smi) {
           $(".cheng2").find("img").eq(sm).attr("src",smi.imgname);
		   $(".cheng2").find("h4").eq(sm).text(smi.h4);
		    $(".cheng2").find("span").eq(sm).text(smi.ssp);
		    $(".cheng2").find("p").eq(sm).text(smi.pp);
});
    if(i=="cheng3")
               $.each(item, function(sm, smi) {
           $(".cheng3").find("img").eq(sm).attr("src",smi.imgname);
		   $(".cheng3").find("h4").eq(sm).text(smi.h4);
		    $(".cheng3").find("span").eq(sm).text(smi.ssp);
		    $(".cheng3").find("p").eq(sm).text(smi.pp);
});




        });
  
 });     
});
        
//-----------------------------------------------------首页-搜索
$(function(){
	$('input[type=button]').click(function(){
	var text=$('#ss').val();
	//alert(filter(':contains ("'+text+'")'));
  $('.tui li').hide().filter(':contains("'+text+'")').show();
 	});
 });

