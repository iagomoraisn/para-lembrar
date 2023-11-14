// console.log('Hello, TypeScript!');

/* function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
  }
  
  printId(101);
  printId("202"); */

 /*  function printId(id: number | string) {
    console.log(id.toUpperCase());
  }
  
  printId(101); */
/* 
  function printId(id: number | string) {

    if (typeof id === "string") {
  
      return console.log(id.toUpperCase());
  
    }
  
    return console.log(id);
  
  }
  
  
  printId(101); */

/*   type PersonalInfo = {
    name: string;
    birthYear: number;
  };

  function printPersonalInfo(data: PersonalInfo) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
  }
  
  printPersonalInfo({ name: 'Rogerinho', birthYear: 1978}); */

  type StatesOfMatter = "liquid" | "solid" | "gaseous";

  type IdentifyingDocument = string | number;
  // O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012.

  type SO = "Linux" | "MacOS" | "Windows";
  // Sistemas operacionais: Linux, MacOS ou Windows.

  type ReservationNames = string[] | string;
// type aliases para: a. Representar pessoa(s) em uma reserva de restaurante.

// represantando um endereço

type Address = {
    publicPlace: string;
    number: number;
    district: string;
    city: string;
    state: string;
}