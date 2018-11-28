import {disciplinas, carrega_disciplinas} from "./computacao.js"
import {pre_matricula, add_disciplina, remove_disciplina} from "./computacao.js";

function show_fluxograma(_disciplinas) {
    var $fluxograma = document.querySelector("#fluxograma");

    _disciplinas.forEach(disciplina => {
        var $disciplina = gera_visualizacao(disciplina);
        $disciplina.onclick = function() { click_disciplina(disciplina, $disciplina); };
        $fluxograma.appendChild($disciplina);
    });
};

function gera_visualizacao(disciplina) {
    var $disciplina = document.createElement("div");
    $disciplina.style.gridColumn = disciplina.periodo;
    $disciplina.classList.add("disciplina");

    var template = `
        <p class="nome"><b>${disciplina.nome}</b></p>
        <div class="dados">
            <span>Créditos: ${disciplina.creditos}</span>
            <span>Período: ${disciplina.periodo}</span>
        </div>
    `;

    $disciplina.innerHTML = template;
    return $disciplina;
}

function click_disciplina(disciplina, $disciplina) {
    if ($disciplina.classList.contains("marcada")) 
        remove_disciplina(disciplina);
    else
        add_disciplina(disciplina);

    $disciplina.classList.toggle("marcada");
}

carrega_disciplinas().then(function() {
    show_fluxograma(disciplinas());
});
