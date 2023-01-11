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
      else if(L[0]=="h"&&L[1]=="t"&&L[2]=="t"&&L[3]=="p"&&L[4]=="s"&&L[5]==":"&&L[6]=="/"&&L[7]=="/"&&L[8]=="y"&&L[9]=="o"&&L[10]=="u"&&L[11]=="t"&&L[12]=="u"&&L[13]=="b"&&L[14]=="e"&&L[15]=="."&&L[16]=="c"&&L[17]=="o"&&L[18]=="m"&&L[19]=="/"&&L[20]=="s"&&L[21]=="h"&&L[22]=="o"&&L[23]=="r"&&L[24]=="t"&&L[25]=="s"&&L[26]=="/"){
        let id = "";
        for(let a = 27;a<L.length;a++){
          if(L[a]=="?"){
            break;
          }
          id+=L[a];
        }
        loc(id);
      }
      else{
      swal(`No Result Found For ${L} !`)
      }
    }
    function loc(link){
       location.href = `https://livecounts.io/youtube-live-view-counter/${link}`;
    }
