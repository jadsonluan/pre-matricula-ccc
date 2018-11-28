import {disciplinas} from './computacao.js'

function show_fluxograma(disciplinas) {
    let $fluxograma = document.querySelector("#fluxograma");
    let $disciplina;
    for (var i = 0; i < disciplinas.length; i++) {
        var disciplina = disciplinas[i];
        $disciplina = document.createElement("div");
        $disciplina.style.gridColumn = disciplina.periodo;
        $disciplina.classList.add('disciplina');
        $disciplina.innerHTML = `
        <p class="nome"><b>${disciplina.nome}</b></p>
        <div class="dados">
        <span>Créditos: ${disciplina.creditos}</span>
        <span>Período: ${disciplina.periodo}</span>
        </div>`;

        $fluxograma.appendChild($disciplina);
    }
};

show_fluxograma(disciplinas());