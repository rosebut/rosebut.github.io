//var productsCouuntEl = document.getElementById("products-count");

//console.log(productsCouuntEl)

//var addToCartButtons = document.querySelectorAll(".add-to-cart");

//console.log(addToCartButtons)


//for(var i=0; i = addToCartButtons.length; i++) {
	//addToCartButtons[i].addEventListener("click",function() {
		//console.log("clicked") 
	//	var prevProductsCount = +productsCouuntEl.textContent
	//	productsCouuntEl.textContent = prevProductsCount + 1

//	})
//}

//toggle like state

var likeButtons = document.querySelectorAll(".like")

for(var i=0; i<likeButtons.length; i++) {
	likeButtons[i].addEventListener("click",function() {
		console.log(this)
		if(this.classList.contains("liked") ) {
			this.classList.remove("liked")

		} else {
			this.classList.add("liked")
		}

})
}

  $('.slider-block').slick({
  	dots: true,

  })

  //https://kenwheeler.github.io/slick/
		


	


