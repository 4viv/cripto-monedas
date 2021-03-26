const formulario = document.querySelector('#formulario');
const api = new API('5a90c0287f03f4a108f7773c751bcf169d783d9c01714ba563f5e97c882d3de9')
const ui = new Interfaz();


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    const creiptoMonedaSelec = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = creiptoMonedaSelec.options[creiptoMonedaSelec.selectedIndex].value;

    // console.log(criptoMonedaSeleccionada);
    // console.log(monedaSeleccionada);

    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        ui.mostrarMensaje('Todos los campos son requeridos', 'alert alert-danger text-center');
    } else {
        api.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then( data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }
})