const convertbutton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
const currencySelectConvert = document.querySelector('.currency-select-convert');


async function convertValues() {
    const inputValue = document.querySelector('.inputcurrency-value').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())
    console.log(data)

    //Valores das moedas
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const realToday = data.BRLBRL ? data.BRLBRL.high : 1

    let valorEmReais


    // --- Converter o valor de origem para Real ---

    if (currencySelectConvert.value == 'dolar') {
        valorEmReais = inputValue * dolarToday
    }

    if (currencySelectConvert.value == 'euro') {
        valorEmReais = inputValue * euroToday
    }

    if (currencySelectConvert.value == 'libra') {
        valorEmReais = inputValue * libraToday
    }

    if (currencySelectConvert.value == 'real') {
        valorEmReais = inputValue * realToday
    }

    // --- Converter o valor em Real para a moeda de destino ---
    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorEmReais / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorEmReais / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(valorEmReais / libraToday)
    }

    if (currencySelect.value == 'real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorEmReais / realToday)
    }

    if (currencySelectConvert.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue);
    }

    if (currencySelectConvert.value == 'dolar')
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue);


    if (currencySelectConvert.value == 'libra')
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue);


    if (currencySelectConvert.value == 'euro')
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue);

}


function changeCurrency() {

    const currencyName = document.querySelector('.currency-name')
    const currencyImg = document.querySelector('.currency-img')

    //Trocar a imagem e o nome da moeda
    if (currencySelect.value == 'dolar') {

        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'real') {

        currencyName.innerHTML = 'Real'
        currencyImg.src = './assets/real.png'
    }

    if (currencySelect.value == 'euro') {

        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if (currencySelect.value == 'libra') {

        currencyName.innerHTML = 'Libra Esterlina'
        currencyImg.src = './assets/libra.png'
    }


    convertValues()
}
function changeConvert() {

    const currencyNamePrimary = document.querySelector('.currency-name-primary')
    const currencyImgPrimary = document.querySelector('.currency-img-primary')

    //Trocar a imagem e o nome da moeda
    if (currencySelectConvert.value == 'dolar') {

        currencyNamePrimary.innerHTML = 'Dólar americano'
        currencyImgPrimary.src = './assets/dolar.png'
    }

    if (currencySelectConvert.value == 'euro') {

        currencyNamePrimary.innerHTML = 'Euro'
        currencyImgPrimary.src = './assets/euro.png'
    }

    if (currencySelectConvert.value == 'libra') {

        currencyNamePrimary.innerHTML = 'Libra Esterlina'
        currencyImgPrimary.src = './assets/libra.png'
    }

    if (currencySelectConvert.value == 'real') {

        currencyNamePrimary.innerHTML = 'Real'
        currencyImgPrimary.src = './assets/real.png'
    }

    convertValues()
}


currencySelectConvert.addEventListener('change', changeConvert);
currencySelect.addEventListener('change', changeCurrency);
convertbutton.addEventListener('click', convertValues);

