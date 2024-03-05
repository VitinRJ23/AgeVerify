function clicar(){
    var ano = document.querySelector('input#year')
    var homem = document.querySelector('input#m')
    var mulher = document.querySelector('input#f')
    var anoagr = new Date().getFullYear()
    var valorano = parseInt(ano.value )
    var res =  anoagr - valorano
    var result = document.querySelector('div.res')

    if (valorano.length == 0) {
        alert('Verifique os dados e tente novamente!')
        result.innerHTML = ''
    }

    if (res < 0) {
        alert('Verifique os dados e tente novamente!')
        result.innerHTML = ''
    }

    if (res === 0) {
        result.innerHTML = (`Você é um recém nascido! <div id="pic"><img src="https://images.ctfassets.net/nhtsjibbyili/1qenHmFwDNXJTvG7019h6C/6268bc4951b5602b85172745f49be8ee/700x340__48_.png?fm=webp&q=70"></img></div>`)
    }

    if (res <= 10 && homem.checked && res > 0){
        result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://brstatic.guiainfantil.com/pictures/materias/22310-o-que-as-criancas-de-10-anos-aprendem.jpg"></img></div>`)
    }  else{
        if (res <= 10 && mulher.checked && res > 0){
            result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://villaville.com/images/blog/menina10anos.jpg"></img></div>`)
        } else{
            if (homem.checked && mulher.checked) {
                alert('Selecione apenas um gênero!')
                result.innerHTML = ''
            }
        }
    }

        if (res > 10 && res <=30 && homem.checked) {
            result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://img.freepik.com/fotos-premium/homem-etnico-sorridente-olhando-para-a-camera_842316-79.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709337600&semt=ais>"</img></div>`)
        } else{
            if (res > 10 && res <=30 && mulher.checked){
                result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://img.freepik.com/fotos-premium/mulher-asiatica-de-25-anos-chinesa-ou-japonesa-com-um-rosto-incrivelmente-bonito-seu-olhar-sensual-e-misterioso-e-leve-sorriso-exalam-uma-aura-sedutora-generative-ai_213438-8951.jpg"></img></div>`)
            } 
        }

            if (res > 30 && res < 50 && homem.checked) {
                result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://img.freepik.com/fotos-gratis/retrato-de-homem-negro-sorridente_23-2149022881.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707523200&semt=ais"</img></div>`)
            } else{
                if (res > 30 && res <50 && mulher.checked){
                    result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-relaxando-em-casa_23-2150307065.jpg"></img></div>`)
                } 
            }

                if (res >= 50 && res < 120 && homem.checked) {
                    result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://media.istockphoto.com/id/1178857901/pt/foto/street-portrait-of-smiling-senior-man.jpg?s=612x612&w=0&k=20&c=H5L8ZpIvWbYFGl2Rmh6RkHN_9zmV35QgOtqdQC6voS0="</img></div>`)
                } else{
                    if (res >= 50 && res <120 && mulher.checked){
                        result.innerHTML = (`Você tem ${res} anos! <div id="pic"><img src="https://st.depositphotos.com/1010710/3383/i/450/depositphotos_33833021-stock-photo-senior-woman-with-pearl-earrings.jpg>"</img></div>`)
                    } 
                }

                    if(res > 120 && res !== 2024){
                        result.innerHTML = `Você não pode ser um humano, chamem a NASA!!! (Sua idade é ${res})`
                    }

                }


function limpar(){
    let clear = document.querySelector('div.res')
    let clr = document.querySelector('input#year')
    clear.innerHTML = ''
    clr.value = ''
}
