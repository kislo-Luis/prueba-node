

let nombres=['luis','fabian','natasha']


let nombresApellidos =nombres.map(function(sinApellidos){
    return  'kislo '+ sinApellidos
})

console.log(nombresApellidos)


let doble = (num)=>num*2
let triple =(num)=>num*3
let calculo = (num,operacion)=>operacion(num);
//console.log(calculo(2,triple))

//calculadora 

let suma = (num1,num2)=>num1+num2
let resta = (num1,num2)=>num1-num2
let multi = (num1,num2)=>num1*num2
let divide =(num1,num2)=>num1/num2
let calculadora= (num1,num2,calculo)=>calculo(num1,num2)
//console.log(calculadora(10,2,suma))

//


//let arreglo =['wwww.google.com','wwww.yahoo.com']
let urls = procesar (['wwww.google.com','wwww.yahoo.com'],agregar)
    agregar = arreglo.map(function(direcciones){
        return 'http:'+ direcciones
    })


console.log(urls)

//let urlCompleta=procesar (['wwww.google.com','wwww.yahoo.com'],agregar)
//console.log(urlCompleta)

let notas= [10,7,8,20,5,4,6]
let notasHastaEl100 =notas.map(function(numero){
    return numero*100
})

//console.log(notasHastaEl100)