

function checking(){
  var timer=document.getElementById("test");
      var hours= document.getElementById("hours").value;
      var min = document.getElementById("min").value;
      var sec = document.getElementById("sec").value;
      var butt=document.getElementById("butt").style.display="none";
      
      
    
     
      function time(){
        if(sec==0){
            if(min==0){
              if(hours==0){
                min= 0;
                hours= 0;
                sec= 0;
               
              }
              else if(hours>0){
                hours-=1;
                min=60;
                sec=60;
                sec-=1
              }
              if(hours<10){
                hours="0" + hours;
              }
             
            }
          else if(min>0){
            min-=1;
            sec=60;
            sec-=1;
          }
          if(min<10){
            min="0" + min;
            setInterval(redAlert,1000)

          }  
        }
        else if(sec>0){
          sec-=1;
        }




        if(sec<10){
          sec="0" + sec
        }


         
        
      var ok =hours +":" + min + ":" + sec;
      timer.innerHTML=ok;
      document.getElementById("hours").value=""
      document.getElementById("min").value=""
      document.getElementById("sec").value=""

      
      }



     setInterval(time,1000)
}

function redAlert(){
    var timings=document.getElementById("test");
    if(timings.style.backgroundColor=="red"){
      timings.style.backgroundColor="white"
    }
    else{
      timings.style.backgroundColor="red"
    }

}

     
