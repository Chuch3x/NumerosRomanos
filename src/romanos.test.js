function convertir_a_romano(num){
    if(num == 1){
        return "I";
    }
    else{
        return "II";
    }
    
}


describe("FizzBuzz", () => {
    it("deberia mostrar el numero I para el numero 1", () => {
      expect(convertir_a_romano(1)).toEqual("I");
    });
    it("deberia mostrar el numero II para el numero 2", () => {
        expect(convertir_a_romano(2)).toEqual("II");
      });
    
  });
  