document.addEventListener('DOMContentLoaded',()=>{
const reserva = document.getElementById('reserva');
reserva.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const viagem = document.getElementById('viagem').value;
    const mensagem = `<h3>reserva feita</h3>
    <p> ${nome}</p>
    <p> Local: ${viagem}</p>
    <p> data: ${data}</p> 
    `
    document.getElementById('mensagem').innerHTML = mensagem;
});
});