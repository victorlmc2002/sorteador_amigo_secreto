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
    for(let i = 0; i < listaAmigos.length; i++){
        if(amigo == listaAmigos[i]){
            alert("Amigo ja adicionado");
            return;
        }
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
            amigo1 = listaAmigos[parseInt(Math.random()*listaAmigos.length)];
            if(listaAmigos.length == 2){
                for(let j = 0; j < 2; j++){
                    if(listaAmigos[j]== listaRecebe[j]){
                        amigo1 = listaAmigos[j];
                    } 
                }
            }
            amigo2 = listaRecebe[parseInt(Math.random()*listaRecebe.length)];      
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

