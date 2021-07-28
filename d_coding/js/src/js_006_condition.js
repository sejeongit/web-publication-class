// js/src/js_006_condition.js

// 삼항연산자

var boxColor = 'black';
var fontColor = 'white';
var borderRadius = 0;

// ----
boxColor = "lightGray";
// (boxColor === 'black') ? fontColor = 'white' : fontColor = 'red'; borderRadius = '10px';

// 단수 분기
  /*
      if(조건){
        // 조건이 참일 경우 수행
      }else{
        // 조건이 거짓이면 수행
      }
  */
if(boxColor === 'black'){
  fontColor = 'white';
  borderRadius = 0;
}else{
  fontColor = 'red';
  borderRadius = '10px'
}
console.log( fontColor, borderRadius );

/*
#testBox_01 {
  width:250px; height:auto; 
  color:#151515; font-size: 2rem;
  background-color: #dda;
}
*/

var tBox1 = document.getElementById('testBox_01')
// var tBox1 = document.querySelector('#testBox_01');

// tBox1.style.width = '250px';
// tBox1.style.height = 'auto';
// tBox1.style.color = '#151515';
// tBox1.style.fontSize = '2rem';
// tBox1.style.backgroundColor = '#dda';

tBox1.style = "width:250px; heigth:auto; color:#151515; font-size:2rem; backgroundColor: #dda";     

// console.log( tBox.style.width );
var tBoxW = tBox1.style.width;
if(tBoxW >= '400px' ){
  tBox1.style.backgroundColor = '#dda';
  tBox1.style.color = '#fda';
}else{
  tBox1.style.backgroundColor = '#adf'
  tBox1.style.color = '#f00';
}
// ----------------------------------------------------
/*
if(조건){
  // 조건 참
}else if(새로운 조건){
  // 새로운 조건 참
}else if(또다른 조건){
  // 또다른 조건 참
}else {
  // 거짓
}
*/

var dataN = 150;
var result;
// if(dataN >= 0 && typeof(dataN) === 'number' && dataN <= 100){
  if(dataN > 80){
    result = '당신의 점수는 A입니다.';
  }else if(dataN <= 80 && dataN> 70){
    result = '당신의 점수는 B입니다.';
  }else if(dataN <= 60){
    result = '당신의 점수는 마음속의 A입니다.';
  }else { // 61 ~ 70, 위 조건에 해당하지 않는 모든 것
    result ="당신의 점수는 당신의 생각대로 입니다.";
  }
// }  
console.log( result );


// jQuery : 1. 크로스브라우징, 2. 코드의 단순화 및 친숙함
//        : 단점 - 1. 느리다
// -----------------------------------------------------
// 다수 분기
/*
  switch(값){
    case A:
      값이 A이면 수행
    break;
    case B:
      값이 B이면 수행  
    break;  
    case C:
      값이 C이면 수행  
    break;
    default:
      값이 해당되지 않으면 수행
  }
*/

// 예: 키보드 제어
// switch 조건 해당하는 값이 명확해야한다.


var val = parseInt( prompt('당신이 태어난 월을 입력해 보세요.') );

console.log( val );
var rel;
switch(val){
  case 1:
    rel = '1월에 태어난 당신-신년과 함께';
  break;
  case 2:
    rel = '2월에 태어나셨군요?-추웠을텐데';
  break;
  case 3:
  case 4:
  case 5:
    rel = "봄에 태어난 당신";
  // break;    
  case 6:
    rel = "정말 좋은 시기에 태어나셨군요?";
  break;
  default:
    rel = '네 알겠습니다.';  
}

console.log( rel );