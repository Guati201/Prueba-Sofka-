Bienvanidos 


El algoritmo número uno que determina el valor de un pasaje de avión, de acuerdo a la distancia recorrida y los días de estancia, 
con la observación de que se aplicara un descuento del 30% sobre el valor del pasaje si el recorrido supera los 1000 Km y además 
el usuario se va a hospedar por más de 7 días, también se conoce que el precio por km. es de $35.00.

El algoritmo fue realizado en el editor de código Atom, y se creó por medio de HTML, JavaScript y Css.
En primera instancia se realizó la lógica del algoritmo en la que se calcula el precio del boleto,
 realizando la operación de los km’s recorridos por el precio, de esta manera ya se tiene la base, 
luego creamos los condicionales que verifican si el boleto del avión califica o no para el descuento, 
con un ayuda de un if validamos si el recorrido supera los 1000 km’s y la estancia es mayor a 7 días, 
de ser así se calcula el precio del boleto, se halla el 30% de esté y se le notifica el precio del boleto 
restándole el descuento, si las condiciones de entrada para el descuento no se cumplen no ingresa al if y 
continua al else en el que se calcula el precio neto del boleto sin descuento y se le notifica al usuario el valor de este.

Ya con la lógica de funcionamiento establecida se crean los archivos .html, .js, .css; en el html se 
crea la plantilla base con su head y body, se escriben los metas necesarios para que el html funcione 
correctamente, como la codificación de caracteres utilizada para que sea reconocido por el navegador y 
se establece la conexión con los archivos .js y .css. Se continúo creando el formulario donde el usuario 
ingresara los datos pedidos, se coloca un titulo y el texto que le indica que tipo de dato ingresar al
usuario, por medio de la etiqueta input, se crea el cuadro donde se ingresa el dato y con un button se 
enviaran los datos al JavaScript donde se calculara el precio del boleto de avión con la función onclick 
se ejecuta la función Cargar ().

Dentro del archivo .js creamos la función Cargar, en ella creamos las variables donde se cargarán los 
datos obtenidos en el html con getElementById, se crean las variables necesarias para calcular el descuento, 
creamos el condicional if que evalúa los días de estancia y los km’s recorridos, si cumple con las condiciones 
del descuento entra al if y se calcula el 30% del valor del boleto y se le resta, además se genera una alerta 
indicándole el descuento, por otro lado si no cumple con las condiciones del descuento pasa al else y se le notifica el precio del boleto.
En el archivo .Css se le dio un color de fondo a la página al título y estilo al formulario.
 

COMO EJECUTAR EL ALGORITMO 
Ya que este proyecto lo cree como emulando un formulario de una página web sencilla, el proyecto se probó 
en la versión más actual de Google Chrome y Mozilla Firefox.

Para su ejecución es necesario descargar la carpeta que se encuentra en el repositorio, verificando que
los archivos .html, .js y .Css se encuentren contenidos en la misma carpeta y ejecutando el archivo .html se puede acceder al algoritmo.

Muchas gracias por la atención prestada 






