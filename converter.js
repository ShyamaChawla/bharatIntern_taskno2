let celsius = document.getElementById('celsius')
let fahrenheit = document.getElementById("fahrenheit")
let kelvin = document.getElementById("kelvin")

celsius.addEventListener('input', function(){

    let CelsuisT = parseFloat(celsius.value);
    let FahT = (CelsuisT*9/5)+32;
    let KelT = CelsuisT+273.15;

    fahrenheit.value = Math.round(FahT * 100) / 100;;
    kelvin.value = Math.round(KelT * 100) / 100;;
})

fahrenheit.addEventListener('input', function convert(){

    let FahT = parseFloat(fahrenheit.value);
    let CelsuisT = (FahT-32)/1.8;
    let KelT = ((FahT-32)/1.8)+273.15;

    celsius.value = Math.round(CelsuisT * 100) / 100;;
    kelvin.value = Math.round(KelT * 100) / 100;;
})

kelvin.addEventListener('input', function(){

    let KelT = parseFloat(kelvin.value);
    let CelsuisT = KelT-273.15
    let FahT = ((KelT-273.15)*1.8)+32;

    fahrenheit.value = Math.round(CelsuisT * 100) / 100;;
    celsius.value = Math.round(FahT * 100) / 100;;
})

