function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
    function redirecionar(){
        window.open("https://www.google.com");
    }
   //    window.location.href = "https://www.google.com";
    
   function trocar(elemento){
       elemento.innerHTML = "Obrigado por passar o mouse";
   //    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   //    alert("trocar texto");
   }
   function voltar(elemento){
       elemento.innerHTML ="Passe o mouse aqui";
   //    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
   }
   function load (){
       alert("página carregada");
   }
    function funcaoChange(elemento){
        console.log(elemento.value);
    }
    
 //   console.log(document.getElementById("agradecimento"));
//alert("Obrigado por clicar")


/*
function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar= false
    }
    return validar;
}
var idade =  prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
//function setReplace(frase, nome, novo_nome){
 //   return frase.replace(nome, novo_nome)

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

//var d =new Date();
//alert(d.getDay());
//alert(d.getHours())
//alert(d.getMinutes())
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <5){
    console.log(count);
    count = count + 1;
    count++;
}
*/
/*
var idade = prompt ("Qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome: "maça" , cor: "vermelha"} , {nome:"uva" , cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta={nome: "maça" , cor:" vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*var nome = " Pamela Mariano";
var idade = 30;
var idade2 = 359
var frase = "Japão é o melhor time do mundo"
alert (nome + " tem " + idade + " anos ");
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLowerCase("Japão" , "Brasil"));
alert(frase.replace("Japão" , "Brasil")): substitui na var frase o que foi indicado através do replace. 
*/

//var lista = ["maça" ,  "pera" , "laranja"]
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



