// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
}

//hamburger
const navSlide = () => {
	<a target="_blank" href="https://faucetcrypto.com/ref/228864"><img src="https://faucetcrypto.com/banners/468x60.gif" width="468" height="60"></a>
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation


	  
	     
	 hamburger.classList.toggle("toggle");             
	 
	}

window.onload = () => navSlide();
	

