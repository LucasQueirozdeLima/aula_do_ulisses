/*let nome="carlos";
alert("Nome: "+nome+", texto no final");
alert(`Nome: ${nome} texto no final`);
let teste=confirm("escolha uma das opções");
if(teste){
    alert("Verdadeiro");
}else{
    alert("Falso");
}
let nome2=prompt("Digite seu apelido");
alert(`Seja bem vindo ${nome2} `); */

let botao1=document.querySelector('#btn1');
botao1.addEventListener('click',()=>{
    let nome=document.querySelector('#nome');
    let texto_nome=Boolean (nome.value);
    let num1=document.querySelector('#num1');
    let num2=document.querySelector('#num2');
    let valor1=Number (num1.value);
    /*alert(typeof valor1);
    valor1=String (valor1);
    alert(typeof valor1);
    const valor2=3; constante*/

    let valor2=Number (num2.value);
    
    //alert(valor1 ** valor2)
    //alert("a"*2); isso é um erro

    let pot=valor1**valor2;

    let p=document.querySelector(".p1");
    p.textContent=`o nome é ${texto_nome}, o primeiro número: ${valor1} e o segundo número é: ${valor2}`;
    p.textContent+=`A potencia deu: ${pot}`


    //alert(`o nome é ${texto_nome}, o primeiro número: ${valor1} e o segundo número é: ${valor2}`);
})