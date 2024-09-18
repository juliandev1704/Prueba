/* hay 3 tipos de vaiables
1. var: declara una variable pero no la inicializa. Puede ser reasignada más tarde.
2. let: declara una variable con let pero no la inicializa. No puede usarse fuera de un bloque de codigo una vez declarada dentro.
3. const: declara una variable con const y la inicializa en el momento de declarar. No puede ser reasignada.
*/
/* tipos de datos
1. String: Cadena de caracteres. Ejemplo: "Hola mundo"
2. Number: Número entero o decimal. Ejemplo: 10, 3.14159
3. Boolean: Valor verdadero (true) o falso (false). Ejemplo: true, false
4. Object: Estructura de datos compuesta de pares clave-valor. Ejemplo: { nombre: "Juan", edad: 25 }
5. Array: Estructura de datos que puede contener diferentes tipos de datos. Ejemplo: [1, "Hola", true, { nombre: "Juan", edad: 25 }]
6. Function: Una función que puede ser invocada con argumentos y puede devolver un valor. Ejemplo: function sumar(a, b) { return a + b}
7. Null: Valor especial que representa ausencia de valor. Ejemplo: null
8. Undefined: Valor especial que representa una variable no inicializada. Ejemplo: let variable; console.log(variable); // undefined
9. Symbol: Un nuevo tipo de valor único que no puede ser comparado con otro valor. Ejemplo: Symbol("miSimbolo")
10. BigInt: Un número entero muy grande que no puede ser representado con un número de punto flotante. Ejemplo: 12345678901234567890n */

// Variables var
var edad="19";

// Variables let
let apellido="Forero";
apellido="Daza"

// Variables const
const  nombre="Julian" ;

alert("hola "+apellido);
    