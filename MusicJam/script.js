{

    /* Variable Defenitions */


   let TextArray = ["Sound","Price","BEATS!"];
   let CharCounter = 0;
   let Index = 0; 
   let spantext = document.querySelector(".typespan");
   let stylespan = document.getElementById("spantxt");
   let section = document.querySelector(".prices");
   let buttons = document.getElementById("head");
   let navbutton1 = document.getElementById("navbutton1");
   let navbutton2 = document.getElementById("navbutton2");
   let navbutton3 = document.getElementById("navbutton3");
   let options = {
       threshold:1
   };
   let secoption = {
       threshold:.9
};
let introtext = document.getElementById("itrotext");
/* Javascript Media Queries */
let mquery1 = matchMedia('(max-width:575.98px)');
if(mquery1.matches){
    secoption.threshold = .65;
}
let mquery2 = matchMedia('max-width: 1199.98px');
if(mquery2.matches){
    options.threshold = .9;
}
let mquery3 = matchMedia('max-width: 1679.98px');
if(mquery3.matches){
    secoption.threshold = 1;
}
/* Javascript Media Queries */


   /* ---------------------------*/


   /* Type Effect Function */


   function type(){
    if(TextArray.length > Index){
     if(CharCounter<TextArray[Index].length){
         
         spantext.textContent += TextArray[Index].charAt(CharCounter);
         CharCounter++;
        
        if(CharCounter === TextArray[Index].length ){
            if(Index === 0){
                stylespan.style.color = "#1DA1F2";
            }else if (Index === 1){
                stylespan.style.color = "#00704A"
            }else if (Index===2){
                stylespan.style.color = " #ff0000";
            }
            setTimeout(erase,1500);

        }

     }
     setTimeout(type,100);

    }

 }

 /* --------------------------*/


 /* Ereasing Effect Function */ 
 function erase(){

    spantext.textContent  = null;
    CharCounter=0;
    Index++;
 }
/*-----------------------------*/



/* Navbar Color Change */


function navchange(){
    buttons.style.backgroundColor = "whitesmoke";
    navbutton1.style.color = "black";
    navbutton2.style.color = "black";
    navbutton3.style.color = "black";
    
}

/* -----------------------------*/ 

/* Navbar Intersection Observer */ 

let obs = new IntersectionObserver(function(entries,observer){
    entries.forEach(element => {
        if(element.isIntersecting){
            navchange();
        }else{
            buttons.style.backgroundColor = "black";
            navbutton1.style.color = "white";
            navbutton2.style.color = "white";
            navbutton3.style.color = "white";
        }
    });
},secoption);
obs.observe(section);

/* -----------------------------*/

/* Intersection Observer for Middle Of Page */ 

let observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
           type();
        } else {
             TextArray = ["Sound","Price","BEATS!"];
             CharCounter = 0;
             Index = 0; 

        }


    });
},options);
observer.observe(section);



/* ==============================*/
}