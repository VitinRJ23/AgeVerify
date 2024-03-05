var button = document.querySelector('input#btn')
button.addEventListener('click', clicar)

function mouse1(){
    var res = document.querySelector('div.rec')
    var ac = document.querySelector('li#a')
    var ação = ac.textContent
    if(ação == 'Ação'){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-230453/" target="_blank">Em ritmo de fuga</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/17/07/10/19/10/576841.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }
}

function mouse2(){
    var res = document.querySelector('div.rec')
    var br = document.querySelector('li#b')
    var brasil = br.textContent
    if(brasil == 'Brasileiro'){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-133548/" target="_blank">Tropa de Elite</a><p>'
        res.innerHTML += '<img src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/22/38/19873277.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }
}

function mouse3(){
    var res = document.querySelector('div.rec')
    var av = document.querySelector('li#av')
    var aventura = av.textContent
    if(aventura == 'Aventura'){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-130368/" target="_blank">Up, altas aventuras</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }
}

function mouse4(){
    var res = document.querySelector('div.rec')
    var co = document.querySelector('li#c')
    var comedia = co.textContent
    if(comedia == 'Comédia'){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-265987/" target="_blank">Tudo bem no Natal que vem</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/20/10/09/19/10/1081565.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }
}

function mouse5(){
    var res = document.querySelector('div.rec')
    var dr = document.querySelector('li#d')
    var drama = dr.textContent 
    if(drama == 'Drama'){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-281330/" target="_blank">Não olhe para cima</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/21/12/06/21/17/3973076.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }
}

    function clicar(){
    var ação = 'Ação'.toLowerCase() // Para que a condição do if funcione, é preciso acrescentar variáveis, por isso foram criadas var br e var us
    var aventura = 'Aventura'.toLowerCase()
    var drama = 'Drama'.toLowerCase()
    var brasil = 'Brasileiro'.toLowerCase()
    var comedy = 'Comédia'.toLowerCase()
    var genre = document.querySelector('input#genre')
    var res = document.querySelector('div.rec') // essa variável insere um conteúdo na div div.rec
    var escolha = (genre.value.toLowerCase())
    if(escolha == ação){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-230453/" target="_blank">Em ritmo de fuga</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/17/07/10/19/10/576841.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }

    if(escolha == aventura){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-130368/" target="_blank">Up, altas aventuras</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 

    if(escolha == drama){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-281330/" target="_blank">Não olhe para cima</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/21/12/06/21/17/3973076.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 

    if(escolha == brasil){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-133548/" target="_blank">Tropa de Elite</a><p>'
        res.innerHTML += '<img src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/22/38/19873277.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 

    if(escolha == comedy){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-265987/" target="_blank">Tudo bem no Natal que vem</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/20/10/09/19/10/1081565.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 

    if(escolha == ''){
        res.innerHTML = ''
        alert('Preencha um gênero válido!')
    }
    
    if(escolha !== ação && escolha !== aventura && escolha !== drama && escolha !== brasil && escolha !== comedy && escolha !== ''){
        alert('Gênero inválido')
    }

}

function reset(){
    var display = document.querySelector('div.rec')
    var erase = document.querySelector('input#genre')
    display.innerHTML = ''
    erase.value = ''
    }

