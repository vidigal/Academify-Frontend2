$(document).ready(onInit);

function onInit() {
    $.ajax({
        url: "http://localhost:8080/api/aluno/total",
        type: "get",
        dataType: "json",
        success: function(res) {
           $("#div-total-alunos").html(res);
        }
    });
}

