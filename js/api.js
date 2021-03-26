class API{
    constructor(apiKey){
        this.apiKey = apiKey;
    }

    async obtenerMonedas(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        const urlObtenerMonedas = await fetch(url);

        const monedas = await urlObtenerMonedas.json();

        return {
            monedas
        };
    }

    async obtenerValores(moneda, criptoMoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&api_key=${this.apikey}`;
        
        const urlSeleccionada = await fetch(url);

        const resultado = await urlSeleccionada.json();

        return {
            resultado
        }
    }
}   