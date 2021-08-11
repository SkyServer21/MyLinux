// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} <a target="_blank"href="https://faucetcrypto.com/ref/228864"><imgsrc="https://faucetcrypto.com/banners/300x250.gif"width="300" height="250"></a>
	else{
		$('header').removeClass('nav-show');
	}
	   
}
<a target="_blank"href="https://faucetcrypto.com/ref/228864"><imgsrc="https://faucetcrypto.com/banners/300x250.gif"width="300" height="250"></a>
//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
<a target="_blank"href="https://faucetcrypto.com/ref/228864"><imgsrc="https://faucetcrypto.com/banners/300x250.gif"width="300" height="250"></a>		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation


	<a target="_blank"href="https://faucetcrypto.com/ref/228864"><imgsrc="https://faucetcrypto.com/banners/300x250.gif"width="300" height="250"></a>     
	     
	 hamburger.classList.toggle("toggle");             
	 
	}

window.onload = () => navSlide();
	

