var element  = document.getElementById("ball");

var leftpuck = document.getElementById("leftpuck");

var rightpuck = document.getElementById("rightpuck");

leftpuck.style.top = '300px';
leftpuck.style.left = '0px';
	
rightpuck.style.top = '300px';
rightpuck.style.right = '0px';
	


	var count = 0;

	var number;


	function move(event) 
	{
		

			 element.style.top = '300px';
			 element.style.left = '500px';

				var initialangle = Math.random() * 2.0 * 3.14 ;




				console.log(initialangle);

		
				var netvel = 10 ;
				var horvel;
				var vervel;


					horvel = Math.cos(initialangle) *  netvel;
				 	vervel = Math.sin(initialangle) * netvel ;
				

				if (initialangle > 0 && initialangle < 1.57 ){
						


						if (horvel < 0) {

							horvel = -1 * horvel;
						}
						if (vervel > 0 ) {

							vervel = -1 * vervel;
						}

				}

				else if (initialangle > 1.57 && initialangle < 3.14 ){
							

						if (horvel > 0) {

							horvel = -1 * horvel;
						}
						if (vervel > 0 ) {

							vervel = -1 * vervel;
						}


				}
				

				else if (initialangle > 3.14 && initialangle < 4.71){
						

						if (horvel > 0) {

							horvel = -1 * horvel;
						}
						if (vervel < 0 ) {

							vervel = -1 * vervel;
						}



					}
				
				else if (initialangle > 4.71 && initialangle < 6.28){
						
						if (horvel < 0) {

							horvel = -1 * horvel;
						}
						if (vervel < 0 ) {

							vervel = -1 * vervel;
						}
				}

				else if(initialangle == 0 || initialangle == 6.28)
				{
					horvel = netvel;
					vervel = netvel;
				}

				else if (initialangle == 3.14) {

					horvel = -1 * netvel ;
					vervel = netvel ;
				}

				else if(initialangle == 1.57)
				{
					horvel = netvel;
					vervel = -1 * netvel;
				}

				else if(initialangle == 4.71) {

					horvel = netvel ;
					vervel = netvel ;
				}


				if (number != null ) {
					clearInterval(number);
				}


				number = setInterval(function(){


				var curtop = parseFloat(element.style.top.slice(0,-2));
				var curleft = parseFloat(element.style.left.slice(0,-2));



					var curtop = parseFloat(element.style.top.slice(0,-2));
					var curleft = parseFloat(element.style.left.slice(0,-2));

				

				var maxheight = document.body.clientHeight;
				var maxwidth = document.body.clientWidth;

				var newtop = curtop + vervel ;
				var newleft = curleft + horvel;



				if (newtop < 0.1) {

					newtop = 0 ;
					vervel= -1 * vervel;

					vervel = vervel * 1.05;

				}
				else if ((newtop + 100) >= maxheight) {



					newtop = maxheight - 100;
					vervel = -1 * vervel;
					vervel = vervel * 1.05;
				}
				








				var lefttop = parseFloat(leftpuck.style.top.slice(0,-2));
				var leftbottom = lefttop + 150 ;	
				var width = 30;

				lefttop = lefttop - 50;
				leftbottom = leftbottom ;


				var righttop = parseFloat(rightpuck.style.top.slice(0,-2));
				var rightbottom = righttop + 150;

				righttop = righttop - 50;
				rightbottom = rightbottom;







				 if (newleft <= width &&  (newtop >= lefttop && newtop <=leftbottom)) {


					newleft = width;
					horvel = -1 * horvel;

					horvel = horvel * 1.1 ;



				} else if ((newleft +100) >= (maxwidth - width) &&  (newtop >= righttop && newtop <=rightbottom)){


					newleft = maxwidth - 100 - width;
					horvel = -1 * horvel;
					horvel = horvel * 1.1 ;
				}

				if(newleft <= 0.1 || (newleft+100) >= maxwidth -(0.1))
				{
					clearInterval(number);
				}


				console.log(newtop);
				console.log(newleft);


				element.style.top = (newtop) +"px";
				element.style.left = (newleft) +"px";



			},17);


	}








document.body.addEventListener("keydown",function(event){

	var maxheight = document.body.clientHeight;
	

	var lefttop = parseFloat(leftpuck.style.top.slice(0,-2));
	var leftbottom = lefttop + 150;



	var righttop = parseFloat(rightpuck.style.top.slice(0,-2));
	var rightbottom = righttop + 150;



	if (event.key=="ArrowUp") {

		var newpos = righttop - 30;

		if (newpos < 0.1) {
			newpos = 0;
		}


		
		rightpuck.style.top = (newpos)+"px";

	}
	if (event.key=="ArrowDown") {

	var newpos = rightbottom + 30;

		if (newpos > maxheight) {
			newpos = maxheight;
		}



		rightpuck.style.top = (newpos - 150)+"px";
	}		
	if (event.key=="w") {

		var newpos = lefttop - 30;

		if (newpos < 0.1) {
			newpos = 0;
		}


		
		leftpuck.style.top = (newpos)+"px";

	
	}
	if (event.key=="s") {
		
		var newpos = leftbottom + 30;

		if (newpos > maxheight) {
			newpos = maxheight;
		}



		leftpuck.style.top = (newpos - 150)+"px";
	
	
	}



});





element.addEventListener("click",move);