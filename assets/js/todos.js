//each li not selected thats why we used li
//click doesn't work on new elements entered while on works
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click","span",(function(event){
event.stopPropagation();

$(this).parent().fadeOut(500,function(){
	$(this).remove();
});

}));

//13 is code which for enter key here event or e or evt any can be used
$("input[type='text'").keypress(function(event){
if(event.which===13)
{
	var todoText= $(this).val();
	// create a new li and add to ul
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todoText +"</li>")
}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});