const popup = document.getElementById('popup');

// Informação por estado ou região
const estadoInfo = {
    "AC": {nome:"Acre", regiao:"Norte", descricao:"Principais cultivos: mandioca, cacau e açaí."},
    "AM": {nome:"Amazonas", regiao:"Norte", descricao:"Principais cultivos: mandioca, açaí e produtos da floresta."},
    "PA": {nome:"Pará", regiao:"Norte", descricao:"Principais cultivos: cacau, açaí e mandioca."},
    "CE": {nome:"Ceará", regiao:"Nordeste", descricao:"Principais cultivos: feijão, milho e frutas tropicais."},
    "BA": {nome:"Bahia", regiao:"Nordeste", descricao:"Principais cultivos: cacau, cana-de-açúcar e frutas tropicais."},
    "GO": {nome:"Goiás", regiao:"Centro-Oeste", descricao:"Principais cultivos: soja, milho e pecuária."},
    "MG": {nome:"Minas Gerais", regiao:"Sudeste", descricao:"Principais cultivos: café, milho e hortifrutigranjeiros."},
    "RS": {nome:"Rio Grande do Sul", regiao:"Sul", descricao:"Principais cultivos: trigo, milho, soja, tabaco e leite."},
    // Adicione os demais estados seguindo este padrão
};

document.querySelectorAll('path').forEach(path => {
    const id = path.id; // Cada path deve ter o ID do estado, ex: "AC", "MG"
    if(estadoInfo[id]){
        path.classList.add('region');
        path.addEventListener('click', (e) => {
            const info = estadoInfo[id];
            popup.innerHTML = `<h2>${info.nome} (${info.regiao})</h2><p>${info.descricao}</p>`;
            popup.style.display = 'block';
            popup.style.left = e.pageX + 10 + 'px';
            popup.style.top = e.pageY + 10 + 'px';
        });
    }
});

// Fechar popup ao clicar fora
document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('region')){
        popup.style.display = 'none';
    }
});
