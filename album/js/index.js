window.addEventListener('DOMContentLoaded',
  function() {
    // (1) ページ本体が読み込まれたタイミングで実行するコード
    let result = document.getElementById('result');
    result.textContent = 'Hello, JavaScript!!';
    window.alert(result);
  }, false
);