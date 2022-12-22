var agora = new Date()
var hora = agora.getHours()
if(hora < 12){
    console.log(`Bom dia, são exatamente ${hora} horas`)
} else if(hora <= 18){
    console.log(`Boa tarde, são exatamente ${hora} horas`)
} else if(hora <= 24){
    console.log(`Boa noite, são exatamente ${hora} horas`)
}