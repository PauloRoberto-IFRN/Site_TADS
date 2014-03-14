function slide1(){
	document.getElementById('id').src="imagens/img1.jpg";
	setTimeout("slide2()", 2000);
	document.getElementById('aId').href="#";
}
			 
function slide2(){
	document.getElementById('id').src="imagens/img2.jpg";
	setTimeout("slide3()", 2000);
	document.getElementById('aId').href="#";
}
	 
function slide3(){
	document.getElementById('id').src="imagens/img3.jpg";
	setTimeout("slide1()", 2000);
	document.getElementById('aId').href="#";
}
function limparForm()
{
document.getElementById("form").reset();
}