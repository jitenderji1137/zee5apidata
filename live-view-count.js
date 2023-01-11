    let input = document.getElementById("link");
    let enter = document.getElementById("enter");
    enter.addEventListener("click",()=>{
     redirectfunction();
    })
    input.addEventListener("keypress",(event)=>{
      if(event.key === "Enter"){
        redirectfunction();
      }
    })
    function redirectfunction(){
      let L = input.value;
      if(L[0]=="h"&&L[1]=="t"&&L[2]=="t"&&L[3]=="p"&&L[4]=="s"&&L[5]==":"&&L[6]=="/"&&L[7]=="/"&&L[8]=="y"&&L[9]=="o"&&L[10]=="u"&&L[11]=="t"&&L[12]=="u"&&L[13]=="."&&L[14]=="b"&&L[15]=="e"&&L[16]=="/"){
        let id = "";
        for(let a = 17;a<L.length;a++){
          id+=L[a];
        }
        loc(id);
      }
      else{
        swal("Please type correct URL ...");
      }
    }
    function loc(link){
       location.href = `https://livecounts.io/youtube-live-view-counter/${link}`;
    }
