let listaAmigos = [];
let listaRecebe = [];
let botao = document.getElementById("botaoAdicionar");
let listaSorteio = document.getElementById("lista-sorteio");
let amigosIcluidos = document.getElementById("lista-amigos");
function adicionar(){

    let amigo = document.getElementById("nome-amigo").value;
    console.log(amigo);
    if(amigo == ''){
        return;
    }
    listaAmigos.push(' ' + amigo);
    listaRecebe.push(' ' + amigo); 
    // console.log(listaAmigos, amigosIcluidos);
    amigosIcluidos.textContent = listaAmigos;
    document.getElementById("nome-amigo").value = ' ';

}

function sortear(){

    if(listaAmigos.length < 3){
        alert("Adicione pelo menos 3 pessoas para sortear");
        return;
    }
    botao.disabled = true;
    botao.textContent = '---';
    let amigo1;
    let amigo2;
    // console.log(posicaoSorteada);
    if (listaAmigos.length < 1){
        console.log("opa opa");
        return;
    }
    let tamanhoLista = listaAmigos.length;
    for(let i = 0; i < tamanhoLista; i++){
        do{
            let x = parseInt(Math.random()*listaAmigos.length);
            amigo1 = listaAmigos[x];
            if(listaAmigos.length == 2){
                for(let j = 0; j < 2; j++){
                    if(listaAmigos[j]== listaRecebe[j]){
                        amigo1 = listaAmigos[j];
                    } 
                }
            }
            let y = parseInt(Math.random()*listaRecebe.length);
            amigo2 = listaRecebe[y];      
        }while(amigo1 == amigo2);
        listaRecebe = listaRecebe.filter(element => element != amigo2);
        listaAmigos = listaAmigos.filter(element => element != amigo1);
        listaSorteio.innerHTML += amigo1 + " -> " + amigo2 + "<br>";
    }
}

function reiniciar(){

    botao.disabled = false;
    botao.textContent = 'Adicionar';
    amigosIcluidos.textContent = ' ';
    listaSorteio.innerHTML = ' ';

}

