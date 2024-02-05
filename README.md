# Ejercicios

### Ej 1
* Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
* Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script".
* Añadir algunos comentarios que expliquen el funcionamiento del código.
* Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript.

### Ej 2
* El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.
* El mensaje mostrado sea "Hola Mundo! Qué fácil es incluir 'comillas simples' y "comillas dobles".

### Ej 3
* Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función `console.log()`.

### Ej 5
* Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

        var numero1 = 5;
        var numero2 = 8;
        
        if(...) {
        console.log("numero1 no es mayor que numero2");
        }
        if(...) {
        console.log("numero2 es positivo");
        }
        if(...) {
        console.log("numero1 es negativo o distinto de cero");
        }
        if(...) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }

### Ej 6
* El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras. El array de letras es:

        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

* Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

* Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
* En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
* Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
* Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

### Ej 7
* El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores `n x (n-1) x (n-2) x ... x 1`. Así, el factorial de `5` (escrito como `5!`) es igual a: `5! = 5 x 4 x 3 x 2 x 1 = 120`.

* Utilizando la estructura `for`, crear un script que calcule el factorial de un número entero.

### Ej 8
* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

### Ej 9
* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

### Ej 10
* Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

### Ej 11
* Objeto `Persona` con las propiedades `nombre`, `edad` y `género`, y el método `obtDetalles()`, que muestra por pantalla las propiedades de la persona.
* Objeto `Estudiante`, que hereda de `Persona`, e incluye las propiedades `curso` y `grupo` y el método `registrar()`.
* Objeto `Profesor`, que hereda de `Persona`, e incluye las propiedades `asignatura` y `nivel` y el método `asignar()`.

### Ej 12
* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

### Ej 17
* A partir de la página web proporcionada, completar el código JavaScript para que:
* Cuando se pinche sobre el primer enlace, se oculte su sección relacionada.
* Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos.
* Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace.
* Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado.

### Ej 18
* Completar el código JavaScript proporcionado para que:
* Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página(navegador, pagina)
* Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.
* Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada (carácter, código)

### Ej 22
* A partir de un texto dado, separar las palabras en un array y mostrarlas en pantalla (una por cada línea).

### Tipos de if
* Consigna 1:<br>
  Determinar el nombre del día de la semana según un número ingresado por el usuario (1 para lunes, 2 para martes, etc.).

* Consigna 2:<br>
  Determinar si un año es bisiesto o no. Pide al usuario que ingrese un año y muestra el resultado.

* Consigna 3:<br>
  Determinar la clasificación de un estudiante según su puntaje en un examen. Pide al usuario que ingrese su puntaje y muestra la clasificación: Sobresaliente, Aprobado o No Aprobado.

* Consigna 4:<br>
  Determinar si un número es positivo, negativo o cero. Pide al usuario que ingrese un número y muestra el resultado.

* Consigna 5:<br>
  Modifica el programa anterior para agregar una condición adicional. Si el número es positivo, verifica si es par o impar.
