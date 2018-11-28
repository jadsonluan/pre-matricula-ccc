var _disciplinas = [];

function carrega_disciplinas() {
    const promise = fetch("disciplinas.json")
                    .then(r => r.json())
                    .then(d => _disciplinas = d);

    return promise;
}

const disciplinas = function() { return _disciplinas; }

var disciplinas_pre_matriculadas = [];

const pre_matricula = function() { return disciplinas_pre_matriculadas; }
const add_disciplina = function(disciplina) { disciplinas_pre_matriculadas.push(disciplina); }
const remove_disciplina = function(disciplina) { 
    var index = disciplinas_pre_matriculadas.indexOf(disciplina);
    if (index != -1)
        disciplinas_pre_matriculadas.splice(index, 1);
}

export {carrega_disciplinas, disciplinas, pre_matricula, add_disciplina, remove_disciplina};