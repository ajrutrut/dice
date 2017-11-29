function rolldice() {

			var dieOne = document.getElementById("dieOne");
			var dieTwo = document.getElementById("dieTwo");   //get elements
			var output = document.getElementById("output"); 

			var x = Math.floor(Math.random() * 6) + 1 ;  // random number  1-6
			var y = Math.floor(Math.random() * 6) + 1 ; 
			var dicetotal = x + y;
			// connects elements to math
			dieOne.innerHTML = x; 
			dieTwo.innerHTML = y;		
			output.innerHTML = "You rolled" + " " + dicetotal + ".";

			if(x == y) {
				output.innerHTML = "You have Doubles:" + " " + dicetotal + ".";
			}
				
		}
