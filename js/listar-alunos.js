$(document).ready(listarAlunos);

 function listarAlunos() {

    $.ajax({
        url: 'http://localhost:8080/api/aluno/list',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var html = '';
            $.each(result, function (i, data) {
                 html += `<tr><td>` + data.matricula + `</td>`;
                 html += `<td>` + data.nome + `</td>`;
                 html += `<td><a href="editarAluno.html?id=` + data.id + `"><i class="bi bi-pencil-fill"></i></a>`;
                 html += ` <a href="visualizarAluno.html?id=` + data.id + `"><i class="bi bi-search"></i></a>`;
                 html += ` <a href="#" onclick="removerAluno(` + data.id + `)"><i class="bi bi-archive-fill"></i></a></td></tr>`;

                 $("#tbListarAlunosBody").html(html);
             });
             
             let table = new DataTable('#tbListarAlunos');
        }
    })
    

 }