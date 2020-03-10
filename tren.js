/*let cloc = document.getElementById('clock');
let color = document.getElementById('color');


function watch(){
    let time = new Date();
    let h = time.getHours();
       let m = time.getMinutes();
      let  s = time.getSeconds();
    

      if(h < 10){
          h = '0' + h;
          
      }
      if(m < 10){
          m = "0" + m ;
      }
      if(s <10){
          s = '0' + s;
      }
   
      let timer = h + ':' + m +':' + s;
      let colorBg = '#' + h +m +s;

   cloc.textContent = timer;
      
      document.body.style.background = colorBg;






}
setInterval(watch, 1000);*/

// кубик двигаеться

let cub = document.getElementById('cub');
let left = 10;

cub.addEventListener('click',function(event){    
    event = event.target;
    console.log(event);
    //event.style.left = left + "px";
    //cub.style.left = left + 'px';
    this.style.left = left + 'px';
    left = left + 10;



});





// простой конвертатор 
/*let money = +prompt('in $','');
function convert(){
    while (isNaN(money) || money == "" || money == null){
        money = +prompt ("ещё раз, введите сумму в рублях", "");
    }
    money = money / 60;
    alert(money);
}
convert();



*/



           
       
        
         
        

