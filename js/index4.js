function fs6(input) {//fix nháº£y cao
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x4A9394C , "40008052C0035FD6"); //C0090034
        codeStatus = true;
    } else {
		DeactiveCodePatch("freefireth",  0x4A9394C , "40008052C0035FD6"); 	
        codeStatus = false;
    }
}
function fs7(input) {//nhay cao
    if (input.checked) {
        ActiveCodePatch("freefireth",  0x47178A8 , "C0035FD6"); 
        
        codeStatus = true;
    } else {
                
     DeactiveCodePatch("freefireth", 0x47178A8 , "C0035FD6"); 	        
        codeStatus = false;
    }
}
function hn1(button) {//aimlock
    if (button.classList.contains('active')) {
              
 DeactiveCodePatch("freefireth",  0x39770AC , "E003271EC0035FD6");                     
        button.classList.remove('active');
        button.textContent = 'Aimlock: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
        
        ActiveCodePatch("freefireth",  0x39770AC , "E003271EC0035FD6");  
         
     button.classList.add('active');
        button.textContent = 'Aimlock: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
    }
}
function hn2(button) {//aim lock tÃ¢m lá»
    if (button.classList.contains('active')) {
DeactiveCodePatch("freefireth",  0x2A8D548 , "20002052C0035FD6"); 	
       
        button.classList.remove('active');
        button.textContent = 'Aim Lock TÃ¢m: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
        
        ActiveCodePatch("freefireth",  0x2A8D548 , "20002052C0035FD6"); 

   button.classList.add('active');
        button.textContent = 'Aimlock TÃ¢m: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
    }
}
function hn3(button) {//xoas hoáº¡t áº£nh
    if (button.classList.contains('active')) {
DeactiveCodePatch("freefireth",  0x49FEA9C , "C0035FD6"); 	
        
        button.classList.remove('active');
        button.textContent = 'XoÃ¡ H/A: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
        
ActiveCodePatch("freefireth",  0x49FEA9C , "C0035FD6"); 

      button.classList.add('active');
        button.textContent = 'XoÃ¡ H/A: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function hn4(button) {//Cam Cao
     if (button.classList.contains('active')) {
DeactiveCodePatch("freefireth",  0x4A8C574 , "200080D2C0035FD6"); 	
        button.classList.remove('active');
        button.textContent = 'Cam Cao: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
        
ActiveCodePatch("freefireth",  0x4A8C574 , "200080D2C0035FD6"); 
        button.classList.add('active');
        button.textContent = 'Cam Cao: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function fs11(input) {//Cam Xa
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x37D8714 , "0857A8520001271EC0035FD6");
        codeStatus = true;
    } else {
        DeactiveCodePatch("freefireth",  0x37D8714 , "0857A8520001271EC0035FD6"); 	
        codeStatus = false;
   }
}
function fs12(input) {//ko aim tam
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x46EB8BC , "C0035FD6");
        codeStatus = true;
    } else {
        DeactiveCodePatch("freefireth",  0x46EB8BC , "C0035FD6"); 	
        codeStatus = false;
   }
}
function fs13(input) {//Äáº¡n thg
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x4A070E4 , "C0035FD6");
        codeStatus = true;
    } else {
        DeactiveCodePatch("freefireth",  0x4A070E4 , "C0035FD6"); 	
        codeStatus = false;
   }
}
function hn5(button) {//rs tk khÃ¡ch
     if (button.classList.contains('active')) {
     DeactiveCodePatch("freefireth",  0x2122FFC , "200080D2C0035FD6"); 

        button.classList.remove('active');
        button.textContent = 'Reset Gui: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        	
        
		ActiveCodePatch("freefireth",  0x2122FFC , "200080D2C0035FD6");
     button.classList.add('active');
        button.textContent = 'Reset Gui: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function hn6(button) { //Fix ngáº£y khá»±ng
    if (button.classList.contains('active')) {
    
DeactiveCodePatch("freefireth",  0x4715560 , "20008052C0035FD6"); 
DeactiveCodePatch("freefireth",  0x45FB9D0 , "20008052C0035FD6"); 
DeactiveCodePatch("freefireth",  0x4715504 , "20008052C0035FD6"); 

         button.classList.remove('active');
        button.textContent = 'Nháº£y Khá»±c: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
        
		ActiveCodePatch("freefireth",  0x4715560 , "20008052C0035FD6");	
        	ActiveCodePatch("freefireth",  0x45FB9D0 , "20008052C0035FD6");
        		ActiveCodePatch("freefireth",  0x4715504 , "20008052C0035FD6");		
        	button.classList.add('active');
        button.textContent = 'Nháº£y Khá»±c: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function hn7(button) { //ddoour sÃºng nhanh
     if (button.classList.contains('active')) {
DeactiveCodePatch("freefireth",  0x4A836E0 , "C0035FD6"); 	
            
        button.classList.remove('active');
        button.textContent = 'Gun Fast: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
                
		ActiveCodePatch("freefireth",  0x4A836E0 , "C0035FD6");
		

        button.classList.add('active');
        button.textContent = 'Gun Fast: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function fs17(input) { //chayj dÆ°á»i nuc
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x4759880 , "20008052C0035FD6");

        codeStatus = true;
    } else {
        DeactiveCodePatch("freefieth",  0x4759880 , "20008052C0035FD6"); 	
 
        codeStatus = false;
   }
}
function fs18(input) { //xoas fog
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x55DC51C , "00008052C0035FD6");

		
        codeStatus = true;
    } else {
        DeactiveCodePatch("freefireth",  0x55DC51C , "00008052C0035FD6"); 	
       

        codeStatus = false;
   }
}
function fs19(input) { //no scope
    if (input.checked) {
		ActiveCodePatch("freefireth",  0x46DE054 , "00008052C0035FD6");
        codeStatus = true;
    } else {
        DeactiveCodePatch("freefireth",  0x46DE054 , "00008052C0035FD6"); 	
        codeStatus = false;
   }
}
function hn8(button) { // ko rung svope
    if (button.classList.contains('active')) {

		DeactiveCodePatch("freefireth",  0x396D70C , "C0035FD6"); 
        button.classList.remove('active');
        button.textContent = 'ko Rung: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
    		ActiveCodePatch("freefireth",  0x396D70C , "C0035FD6");
        	
        button.classList.add('active');
        button.textContent = 'Ko Rung: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function hn9(button) { // 2gun
     if (button.classList.contains('active')) {

		
DeactiveCodePatch("freefireth",  0x370B58C , "20008052C0035FD6"); 
        button.classList.remove('active');
        button.textContent = 'Double Gun: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
    		ActiveCodePatch("freefireth",  0x370B58C , "20008052C0035FD6");
        	
        button.classList.add('active');
        button.textContent = 'Double Gun: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}
function hn10(button) { // chá»¯ v
    if (button.classList.contains('active')) {

		DeactiveCodePatch("freefireth",  0x33801BC , "20008052C0035FD6"); 
        button.classList.remove('active');
        button.textContent = 'Chá»¯ V: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
    		ActiveCodePatch("freefireth",  0x33801BC , "20008052C0035FD6");
        	
        button.classList.add('active');
        button.textContent = 'Chá»¯ V: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }
}

function hn11(button) { //tele kill
    if (button.classList.contains('active')) {
    
DeactiveCodePatch("freefireth",  0x41C87EC , "C0035FD6"); 
  button.classList.remove('active');
        button.textContent = 'Tele Kill: Off';
        
button.style.color = 'red'; // 
        codeStatus = false;
    } else {
        
        
		ActiveCodePatch("freefireth",  0x41C87EC , "C0035FD6");	
        button.classList.add('active');
        button.textContent = 'Tele Kill: On';
        
button.style.color = 'green'; // 
        codeStatus = true;
   }