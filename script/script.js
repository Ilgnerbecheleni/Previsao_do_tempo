
const formulario = document.getElementById('pesquisa');
const temperatura = document.getElementById('temp');
const maxtemp = document.getElementById('maxtemp');
const mintemp = document.getElementById('mintemp');
const humidade = document.getElementById('humidade');
const img = document.getElementById('img');
const condicao = document.getElementById('condicao');
const nomecidade = document.getElementById('cidade');
const footercopy = document.getElementById('footercopy');

data = new Date;


footercopy.innerHTML = `copyright &#169; ${data.getFullYear()}`;

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    cidade = formulario.pesquisa.value;
    if (cidade) {
        buscar(cidade)
    } else {
        alert('digite uma cidade');
    }

    formulario.reset();
})



function buscar(cidade) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=def92bb55b6be62bf1fab62695bdb5aa&units=metric&lang=pt_br`)

        .then(T => T.json())

        .then(data => {

            console.log(data);

            atualizar(data);

        }).catch((erro) => {
            alert("cidade não encontrada!")
        });

}


function atualizar(dados) {

    console.log(dados);

    nomecidade.innerHTML = "<b>" + dados['name'] + "</b> ";
    temp.innerHTML = "<b>Temp:   </b>   " + dados['main']['temp'] + " °C";
    maxtemp.innerHTML = "<b>Max:   </b>   " + dados['main']['temp_max'] + " °C";
    mintemp.innerHTML = "<b>Min:   </b>   " + dados['main']['temp_min'] + " °C";
    humidade.innerHTML = "<b>Umidade:   </b>   " + dados['main']['humidity'] + " %";
    condicao.innerHTML = "<b>Condição:  </b>   " + dados['weather'][0]['description'];
    icon = dados['weather'][0]['icon'];
    img.setAttribute('src', ` http://openweathermap.org/img/wn/${icon}@2x.png`);

}
