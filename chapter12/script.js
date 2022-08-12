const API_KEY = "";

$(function(){
  $('bin').on('click', function() {
      // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
    })
    }).fail(function (data) {
      //通信失敗
    });
  });
});