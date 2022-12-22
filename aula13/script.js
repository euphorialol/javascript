function verificar(){
var data =  new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById("res")
if(fano.value.length  == 0 || fano.value > ano){
    alert("[Error]. Verifique os dados e tente novamente")
} else{
    var fsex = document.getElementsByName("radsex")
    var idade  = ano - Number(fano.value)
    var gen = ""
    var img = document.createElement("img")
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        gen = "Homem"
        if(idade >= 0.1 && idade < 10){
            img.setAttribute('src', 'crianca-homem.jgp')
        } else if(idade < 21){
            img.setAttribute('src', 'adolescente-homem.jgp')
        } else if(idade < 50){
            img.setAttribute('src', 'adulto.jgp')
        } else{
            img.setAttribute('src', 'idoso.jgp')
        }
    } else if(fsex[1].checked){
        gen = "Mulher"
        if(idade >= 0.1 && idade < 10){
            img.setAttribute('src', 'crianca-mulher.jgp')
        } else if(idade < 21){
            img.setAttribute('src', 'adolescente-mulher.jgp')
        } else if(idade < 50){
            img.setAttribute('src', 'adulta.jgp')
        } else{
            img.setAttribute('src', 'idosa.jgp')
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
}
}