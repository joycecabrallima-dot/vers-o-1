
const popup = document.getElementById('popup');

const regiaoInfo = {
    norte: {
        nome: 'Norte',
        descricao: 'A Região Norte é rica em biodiversidade. Principais cultivos: mandioca, cacau, açaí e produtos da agrofloresta.'
    },
    nordeste: {
        nome: 'Nordeste',
        descricao: 'O Nordeste é marcado pela seca e irrigação. Principais cultivos: cana-de-açúcar, feijão, milho, algodão e frutas tropicais.'
    },
    'centro-oeste': {
        nome: 'Centro-Oeste',
        descricao: 'O Centro-Oeste é o celeiro do Brasil. Principais cultivos: soja, milho e pecuária extensiva.'
    },
    sudeste: {
        nome: 'Sudeste',
        descricao: 'O Sudeste concentra café, laranja, cana-de-açúcar e hortifrutigranjeiros.'
    },
    sul: {
        nome: 'Sul',
        descricao: 'O Sul é destaque na produção de trigo, milho, soja, tabaco, carnes e leite.'
    }
};

document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', (e) => {
        const info = regiaoInfo[region.id];
        popup.innerHTML = `<h2>${info.nome}</h2><p>${info.descricao}</p>`;
        popup.style.display = 'block';
        // Posicionar popup próximo do clique
        popup.style.left = e.pageX + 10 + 'px';
        popup.style.top = e.pageY + 10 + 'px';
    });
});

// Fechar popup ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('region')) {
        popup.style.display = 'none';
    }
});
