import {disciplinas, pre_matricula, add_disciplina, remove_disciplina} from "./computacao.js";

const app = (function() {
    function show_fluxograma(_disciplinas) {
        var $fluxograma = document.querySelector("#fluxograma");
        var $disciplina, disciplina;

        for (var i = 0; i < _disciplinas.length; i++) {
            disciplina = _disciplinas[i];
            $disciplina = gera_visualizacao(disciplina);

            $disciplina.onclick = (function(disciplina, $disciplina) {
                return function() {
                    click_disciplina(disciplina, $disciplina);
                };
            })(disciplina, $disciplina);

            $fluxograma.appendChild($disciplina);
        }
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

    show_fluxograma(disciplinas());
})();