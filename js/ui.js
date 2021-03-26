class Interfaz{
    constructor(){
        this.init()
    }
    init(){
        this.construirSelect()
    }
    construirSelect(){
        api.obtenerMonedas()
            .then(monedas => {

                const select = document.querySelector('#criptomoneda');
                for(const [key, value] of Object.entries(monedas.monedas.Data) ){
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        const mensajes = document.querySelector('.mensajes');
        mensajes.appendChild(div);

        setTimeout( () => {
            document.querySelector('.mensajes div').remove()
        }, 3000)
    }

    mostrarResultado(resultado, moneda, crypto){
        const respMoneda = resultado[crypto][moneda];

        const resultadoAnterior = document.querySelector('#resultado > div')
        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        let precio = respMoneda.PRICE.toFixed(2),
            porcentaje = respMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(respMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado</h2>
                    <p>El precio de ${respMoneda.FROMSYMBOL} convertidos a  ${respMoneda.TOSYMBOL} es de: $ ${precio}</p>
                    <p>La bariacion en porcentaje es de: %${porcentaje}</p>
                    <p>Ultima actualizacion: ${actualizado}</p>
                </div>
            </div>
        `;

        this.mostrarOcultarSpinner('block');
        setTimeout( () => {
            this.mostrarOcultarSpinner('none');

            document.querySelector('#resultado').innerHTML = templateHTML;
        }, 2000);
    }

    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');

        spinner.style.display = vista;
    }
}