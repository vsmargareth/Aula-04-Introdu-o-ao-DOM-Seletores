/*
body
  h1
  div class='conteudo'
    h5
    ul
      li
      li
      li
  section 
    article id='card1'
      h2 id='titleCard1'
      p
    article
      h2 
      p
    article class="animado"
      h2 
      p
    article class="diferente">
      h2 
      p
    article
      h2 
      p
    article
      h2 
      p
 
 */


//selecionando o body
let body = document.body
console.log(body)

//1° grau (filho do body)
let h1 = document.querySelector('h1')
console.log(h1)
//1° grau (filho do body)
let conteudo = body.querySelector('.conteudo')
console.log(conteudo)
//2° grau (filho do conteudo)
let h5Conteudo = conteudo.querySelector('h5')
console.log(h5Conteudo)
//2°grau ( filho do conteudo)
let ulConteudo = conteudo.querySelector('ul')
console.log(ulConteudo)
//3° grau (filho do ul do conteúdo)
let liUlConteudo = ulConteudo.querySelector('li')
console.log(liUlConteudo)

//1° grau (filho do body)
let section = document.querySelector('section')
console.log(section)
//2° grau (filho da section)
let card1 = document.querySelector('section > #card1')
console.log(card1)
//3° grau (filho do article)
card1.querySelector('h2')
card1.querySelector('p')

//2° grau (filho da section)
let article2 = section.querySelector('article:nth-child(2)');
console.log(article2)
//3° grau (filho da article 2)
console.log(article2.querySelector('h2'))
console.log(article2.querySelector('p'))

//2° grau (filho da section)
let articleAnimado = section.querySelector('.animado')
console.log(articleAnimado)

//3° grau (filho do article animado)
console.log(articleAnimado.querySelector('h2'))
console.log(articleAnimado.querySelector('p'))

//2° grau (filho da section)
let articleDiferente = section.querySelector('.diferente')
console.log(articleDiferente)

//3° grau (filho do article animado)
console.log(articleDiferente.querySelector('h2'))
console.log(articleDiferente.querySelector('p'))

//2° grau (filho da section)
let article5 = section.querySelector('article:nth-child(5)')
console.log(article5)
//3° grau (filho do article 5)
console.log(article5.querySelector('h2'))
console.log(article5.querySelector('p'))
