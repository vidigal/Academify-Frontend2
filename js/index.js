$(document).ready(onInit);

function onInit() {
    let usuario = sessionStorage.getItem("usuario");
    let senha = sessionStorage.getItem("senha");

    if ((usuario == null) || (senha == null) || (usuario == undefined) || (senha == undefined)) {
        alert("Usuário não autenticado");
        location.href = "/login.html";
    }

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

