$(document).ready(function (){
//$(".results").hide();
  $("#username").keyup(function() {
    // получаем то, что ввёл пользователь
    var checkString = $("#username").val();
    // если checkString не пуста
    if(checkString) {
        // формируем строку запроса
        var data = $("#username").serialize();
        // делаем ajax запрос
        $.ajax({
            type: "POST",
            url: "checkuser",
            data: data,
            beforeSend: function(html) { // перед отправкой
                $("#results").html('');
            },
            success: function(html){ // получаем результаты
                $("#results").show();
                $("#results").append(html);
            }
        });
    }
    return false;
  });
});
