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


describe("FizzBuzz", () => {
    it("deberia mostrar el numero I para el numero 1", () => {
      expect(convertir_a_romano(1)).toEqual("I");
    });
    it("deberia mostrar el numero II para el numero 2", () => {
        expect(convertir_a_romano(2)).toEqual("II");
      });
    it("deberia mostrar el numero III para el numero 3", () => {
        expect(convertir_a_romano(3)).toEqual("III");
      });
    it("deberia mostrar el numero V para el numero 5", () => {
        expect(convertir_a_romano(5)).toEqual("V");
      });
  });
  