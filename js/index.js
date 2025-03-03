        jQuery(document).ready(function() {

            $(".chat-list a").click(function() {
                $(".chatbox").addClass('showbox');
                return false;
            });

            $(".chat-icon").click(function() {
                $(".chatbox").removeClass('showbox');
            });


        }); 

         window.onload = function() {
            
            // Check if there is a value stored in localStorage
            if (localStorage.getItem("login")) {
                console.log("login");
            }else{
				window.location.href = "signin.html";
			}

        }; 

		function Logout(){
			
			localStorage.clear();
			window.location.href = "signin.html";
		
		}