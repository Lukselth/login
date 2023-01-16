let personagem = document.querySelector('.pers');

function pular(){
  if(personagem.classList != 'pule'){
    personagem.classList.add('pule');
  }
  setTimeout(function(){
    personagem.classList.remove('pule');
  },500)
}



