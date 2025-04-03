document.getElementById('gerar').addEventListener('click', function() {

    const numero = parseInt(document.getElementById('numero').value);
    const tabelacorpo = document.querySelector('#tabuada tbody');
    tabelacorpo.innerHTML = ''; 

    if (isNaN(numero)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${numero} x ${i}</td>
        <td class="${resultado % 2 === 0 ? 'par' : ''}">${resultado}</td>
        `;
        
        tabelacorpo.appendChild(tr);
    }
});