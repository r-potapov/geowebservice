$(document).ready(function (){
//$(".results").hide();
  $("#username").keyup(function() {
    // �������� ��, ��� ��� ������������
    var checkString = $("#username").val();
    // ���� checkString �� �����
    if(checkString) {
        // ��������� ������ �������
        var data = $("#username").serialize();
        // ������ ajax ������
        $.ajax({
            type: "POST",
            url: "checkuser",
            data: data,
            beforeSend: function(html) { // ����� ���������
                $("#results").html('');
            },
            success: function(html){ // �������� ����������
                $("#results").show();
                $("#results").append(html);
            }
        });
    }
    return false;
  });
});
