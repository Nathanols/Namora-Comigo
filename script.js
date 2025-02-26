function sim(){
    alert("Te amo neném!!! Mais um mês de muitoosss.");
}

function desvia(btn){
    btn.style.position = 'absotule';
    btn.style.bottom = geraPosicao(10,90);
    btn.style.left = geraPosicao(10,90);
    console.log("Opa, desviei...");
}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}