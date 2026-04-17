var tabela = document.createElement("table");
tabela.setAttribute("border", "1");

var th = document.createElement("th");
th.innerText = "Tabela 1000x100 - Numeros Aleatorios (1 a 100) com Cores Par/Impar";
th.setAttribute("colspan", "1000");

tabela.appendChild(th);

for (var i = 0; i < 100; i++) {
    var linha = document.createElement("tr");
    for (var j = 0; j < 1000; j++) {
        var celula = document.createElement("td");
        var numero = Math.floor(Math.random() * 100) + 1;
        celula.innerText = numero;
        celula.style.border = "1px solid black";
        if (numero % 2 === 0) {
            celula.style.backgroundColor = "lightblue";
        } else {
            celula.style.backgroundColor = "lightyellow";
        }
        linha.appendChild(celula);
    }
    tabela.appendChild(linha);
}

document.getElementById("todo").appendChild(tabela);
