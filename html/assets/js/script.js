console.log('aaa')

// アクセスする度にポップアップを表示
window.addEventListener('load', function() {
  if(!localStorage.getItem('disp_popup')) {
    setTimeout(function() {
      this.sessionStorage.setItem('disp_popup', 'on');
      var popup = document.getElementsByClassName('popup-wrap');
      popup[0].classList.add('js-active');
      popup[0].onclick = function() {
        popup[0].classList.remove('js-active');
      }
    }, 1000);
  }
}, false);
