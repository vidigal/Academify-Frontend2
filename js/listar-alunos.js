$(document).ready(listarAlunos);

function listarAlunos() {

    let usuario = sessionStorage.getItem("usuario");
    let senha = sessionStorage.getItem("senha");

    if ((usuario == null) || (senha == null) || (usuario == undefined) || (senha == undefined)) {
        alert("Usuário não autenticado");
        location.href = "/login.html";
    }

    $.ajax({
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(usuario+":"+senha));
        },
        url: 'http://localhost:8080/api/aluno/list',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var html = '';
            $.each(result, function (i, data) {
                html += `<tr><td>` + data.matricula + `</td>`;
                html += `<td>` + data.nome + `</td>`;
                html += `<td><a href="editar-aluno.html?id=` + data.id + `"><i class="bi bi-pencil-fill"></i></a>`;
                html += ` <a href="visualizar-aluno.html?id=` + data.id + `"><i class="bi bi-search"></i></a>`;
                html += ` <a href="#" onclick="removerAluno(` + data.id + `)"><i class="bi bi-archive-fill"></i></a></td></tr>`;

                $("#tbListarAlunosBody").html(html);
            });

            let table = new DataTable('#tbListarAlunos');
        }
    })


}

function removerAluno(id) {

    var respostaPergunta = confirm("Confirma a exclusão?");
    if (respostaPergunta == true) {

        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/api/aluno/remove/' + id,
            dataType: 'json',
            success: function (result) {
                location.reload();
            },
            error: function (result) {
                alert(result);
            }
        })

    }
}