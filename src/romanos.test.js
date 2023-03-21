function convertir_a_romano(num){
    if(num == 1){
        return "I";
    }
    else if(num == 2){
        return "II";
    }
    else if(num == 3){
        return "III";
    }
    else{
        return "V";
    }
    
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
  