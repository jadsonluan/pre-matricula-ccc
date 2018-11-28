import {disciplinas, pre_matricula, add_disciplina, remove_disciplina} from "./computacao.js";

const app = (function() {
    function show_fluxograma(_disciplinas) {
        let $fluxograma = document.querySelector("#fluxograma");
        let $disciplina;
        for (var i = 0; i < _disciplinas.length; i++) {
            var disciplina = _disciplinas[i];
            $disciplina = document.createElement("div");
            $disciplina.style.gridColumn = disciplina.periodo;
            $disciplina.classList.add("disciplina");
            
            $disciplina.onclick = (function(disciplina, $disciplina) {
                return function() {
                    click_disciplina(disciplina, $disciplina);
                };
            })(disciplina, $disciplina);

            $disciplina.innerHTML = `
            <p class="nome"><b>${disciplina.nome}</b></p>
            <div class="dados">
            <span>Créditos: ${disciplina.creditos}</span>
            <span>Período: ${disciplina.periodo}</span>
            </div>`;

            $fluxograma.appendChild($disciplina);
        }
    };

    function click_disciplina(disciplina, $disciplina) {
        if ($disciplina.classList.contains("marcada")) 
            remove_disciplina(disciplina);
        else
            add_disciplina(disciplina);

        $disciplina.classList.toggle("marcada");
        console.log(pre_matricula())
    }

    show_fluxograma(disciplinas());
})();