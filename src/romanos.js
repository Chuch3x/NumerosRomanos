function convertir_a_romano(num){
    var romano=["I", "IV","V","X","XL","XC","C"];
    var numeros=[1, 4,5,10,40,90,100];
    var i=numeros.length;
    var texto="";
    while(num > 0)
    {
        if(numeros[i]<=num)
        {
          texto+=romano[i];
          num=num-numeros[i];
        }
        else
        {
          i--;
        }
    }
      return texto;
}

export default convertir_a_romano;