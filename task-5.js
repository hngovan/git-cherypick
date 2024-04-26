export default function () { 
  console.log("task 5.1!")

  class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = "green" } = {
      
    }) {
      this.newColor = newColor;
    }
  }
  
  const freddie = new Chameleon({ newColor: "purple" });
  freddie.colorChange("orange");
}