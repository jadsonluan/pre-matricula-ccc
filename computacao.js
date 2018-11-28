'use strict';

var disciplinas = (function() {
    function cria_disciplina(nome, periodo, creditos) {
        return {
            nome: nome,
            periodo: periodo,
            creditos: creditos
        };
    }

    var disciplinas = function disciplinas() {
        var array = [];
        array.push(cria_disciplina("Leitura e Produção de Textos", 1, 4));
        array.push(cria_disciplina("Cálculo Diferencial e Integral I", 1, 4));
        array.push(cria_disciplina("Álgebra Vetorial e Geometria Analítica", 1, 4));
        array.push(cria_disciplina("Programação I", 1, 4));
        array.push(cria_disciplina("Introdução à Computação", 1, 4));
        array.push(cria_disciplina("Laboratório de Programação I", 1, 4));

        array.push(cria_disciplina("Metodologia Cientifica", 2, 4));
        array.push(cria_disciplina("Cálculo Diferencial e Integral I", 2, 4));
        array.push(cria_disciplina("Fundamentos de Física Clássica", 2, 4));
        array.push(cria_disciplina("Matemática Discreta", 2, 4));
        array.push(cria_disciplina("Laboratório de Programação II", 2, 4));
        array.push(cria_disciplina("Programação II", 2, 4));
        array.push(cria_disciplina("Teoria dos Grafos", 2, 2));

        array.push(cria_disciplina("Àlgebra Linear", 3, 4));
        array.push(cria_disciplina("Fundamentos de Física Moderna", 3, 4));
        array.push(cria_disciplina("Teoria da Computação", 3, 4));
        array.push(cria_disciplina("Estrutura de Dados e Algoritmos", 3, 4));
        array.push(cria_disciplina("Lab. de Estrutura de Dados e Algoritmos", 3, 4));
        array.push(cria_disciplina("Gerência da Informação", 3, 4));
        array.push(cria_disciplina("Probabilidade e Estátistica", 3, 4));

        array.push(cria_disciplina("Métodos Estátisticos", 4, 4));
        array.push(cria_disciplina("Paradigmas de Linguagem de Programação", 4, 4));
        array.push(cria_disciplina("Lógica Matemática", 4, 4));
        array.push(cria_disciplina("Org. e Arquitetura de Computadores I", 4, 4));
        array.push(cria_disciplina("Lab. de Org. e Arquitetura de Computadores I", 4, 4));
        array.push(cria_disciplina("Engenharia de Software I", 4, 4));
        array.push(cria_disciplina("Sistemas de Informação I", 4, 4));

        array.push(cria_disciplina("Informática e Sociedade", 5, 2));
        array.push(cria_disciplina("Laboratório de Engenharia de Software", 5, 4));
        array.push(cria_disciplina("Análise e Técnica de Algoritmos", 5, 4));
        array.push(cria_disciplina("Compiladores", 5, 4));
        array.push(cria_disciplina("Redes de Computadores", 5, 4));
        array.push(cria_disciplina("Banco de Dados I", 5, 4));
        array.push(cria_disciplina("Sistemas de Informação II", 5, 4));

        array.push(cria_disciplina("Direito e Cidadania", 6, 4));
        array.push(cria_disciplina("Lab. de Intercon. de Redes de Computadores", 6, 4));
        array.push(cria_disciplina("Interconexão de Redes de Computadores", 6, 4));
        array.push(cria_disciplina("Sistemas Operacionais", 6, 4));
        array.push(cria_disciplina("Banco de Dados II", 6, 4));
        array.push(cria_disciplina("Inteligência Artificial I", 6, 4));

        array.push(cria_disciplina("Projeto em Computação I", 7, 4));
        array.push(cria_disciplina("Métodos e Software Númericos", 7, 4));
        array.push(cria_disciplina("Aval. de Desempenho de Sistemas Discretos", 7, 4));

        array.push(cria_disciplina("Projeto em Computação II", 8, 4));
        return array;
    }

    return disciplinas;
})();

export {disciplinas};