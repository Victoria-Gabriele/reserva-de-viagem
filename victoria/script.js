document.addEventListener('DOMContentLoaded',()=>{
    const reserva = document.getElementById('reserva');
    reserva.addEventListener('submit', function(event){
        event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const viagem = document.getElementById('viagem').value;
        const mensagem = `<h3>Reserva feita</h3>
        <p> Nome: ${nome}</p>
        <p> Local: ${viagem}</p>
        <p> Data: ${data}</p> 
        `
        document.getElementById('mensagem').innerHTML = mensagem;
    });
    });
