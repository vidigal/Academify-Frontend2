$(document).ready(onInit);

function onInit() {
    $.ajax({
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("victor:123456"));
        },
        url: "http://localhost:8080/api/aluno/total",
        type: "get",
        dataType: "json",
        success: function (res) {
            $("#div-total-alunos").html(res);
        }
    });
}

