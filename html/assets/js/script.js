'use strict';

// アクセスする度にポップアップを表示
// window.addEventListener('load', function() {
//   if(!localStorage.getItem('disp_popup')) {　// ろーかるすとれーじ！！！！！
//     setTimeout(function() {
//       this.sessionStorage.setItem('disp_popup', 'on');
//       var popup = document.getElementsByClassName('popup-wrap');
//       popup[0].classList.add('js-active');
//       popup[0].onclick = function() {
//         popup[0].classList.remove('js-active');
//       }
//     }, 1000);
//   }
// }, false);

// ボタンを押した時の処理
var choiceButton = document.querySelectorAll('.js-choice');
var questionHash = location.hash;

for(var i = 0; i < choiceButton.length; i++) { // class指定なのでjs-choiceの数分forを回す
  choiceButton[i].addEventListener('click', function() {
    var targetContent = this.closest('.content-wrap'); // choiceButton[i]のcontent-wrapを取得
    var targetID =  targetContent.id;
    var targetHref = this.href.split('#')[1]; // 取得したhrefを#の前後で区切り、#以降を取得

    console.log(targetHref);
    console.log(targetID);

    if(targetContent.classList.contains('js-active') == true) {
      // targetContent.classList.remove('js-active'); // targetContentにjs-activeがあった場合削除
    };
  });
}



