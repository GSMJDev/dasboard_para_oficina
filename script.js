document.addEventListener("DOMContentLoaded", () => {
    const dashboard = document.getElementById("dashboard");
    
    // Exemplo estático de dado para visualização inicial
    const exampleData = [
        {
            ordem: "4841",
            cliente: "Valmor Lopes da Silva",
            placa: "HLX7989",
            modelo: "PALIO FIRE ECONOMY",
            km: "98306 KM",
            entrada: "10/03/25 08:33",
            saidaPrevista: "12/03/25 12:00",
            etapaAtual: "Em execução"
        }
    ];
    
    exampleData.forEach(car => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${car.ordem}</td>
            <td>${car.cliente}</td>
            <td>${car.placa} - ${car.modelo}</td>
            <td>${car.km}</td>
            <td>${car.entrada}</td>
            <td>${car.saidaPrevista}</td>
            <td class="status">
                <i class="fas fa-tools status-icon"></i>
                ${car.etapaAtual}
            </td>
        `;
        dashboard.appendChild(row);

        anime({
            targets: row,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutQuad',
            duration: 800
        });
    });
});