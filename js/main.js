$(function() {
	 $('.buttonItem').hover(function(event){
		 var button = event.target;
		 var nomeFile = button.id.substr(6).toLowerCase();
	     $(button).attr('src',"img/button/"+nomeFile+"Hover.png");
	     return false;
	 },
	 function(event){
		 var button = event.target;
		 var nomeFile = button.id.substr(6).toLowerCase();
		 $(button).attr('src',"img/button/"+nomeFile+".png");
	     return false;
	 });
	});

$(function() {
	 $('.buttonItem').click(function(event){
		 var button = event.target;
		 var nomeFile = button.id.substr(6).toLowerCase();
	     $(button).attr('src',"img/button/"+nomeFile+"OnClick.png");
	     return false;
	 });
	});