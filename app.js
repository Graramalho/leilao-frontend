async function carregarLeiloes(){
    const resp = await fetch('http://localhost:3000/leiloes');
    const dados = await resp.json();
    document.getElementById('auction-container').innerHTML = JSON.stringify(dados, null, 2);
}
carregarLeiloes();