El algoritmo número dos que controla la recepción de equipaje para un avión BOING 747, 
del cual se estable que no se puede exceder la capacidad máxima de 18.000 Kg, 
un solo bulto no puede exceder los 500 Kg, además se agregaron condiciones extras 
como la de evitar que se agregue un bulto que pese 0 Kg, valores negativos o un dato 
vacío y se establecieron los siguientes precios según el peso del bulto en Kg, así: 

de 0 a 25 Kg. No tiene costo 
de 26 a 300 Kg. 1500 pesos por kilo de equipaje. 
de 301 a 500 Kg. 2500 pesos por kilo de equipaje 

Se requiere un reporte con las siguientes observaciones: 

a) Número total de bultos ingresados para el vuelo 
b) Peso del bulto más pesado y del más liviano 
c) Peso promedio de los bultos 
d) Ingreso en pesos y en dólares por concepto de carga.
 
Por último, construir una tabla de seguimiento con al menos 15 bultos. 

El algoritmo fue realizado en el editor de código Atom, y se creó por medio de HTML, JavaScript y Css.
Para el desarrollo de este algoritmo se planteó primero la lógica de como funcionaria, para el ingreso
de los bultos se generaría una un array en donde se guardará el peso de cada bulto para luego realizar 
las operaciones que nos solicitan como buscar el máximo y el mínimo peso, se utilizarían if anidados para 
asignarle el precio del bulto de acuerdo a su peso, además se quiere visualizar en una tabla cada uno de 
los bultos ingresados el peso que se ha cargado, el valor de cada bulto y el valor acumulado de la carga total hasta el momento.

Con la lógica de funcionamiento ya establecida se crean los archivos .html, .js, .css; en el html se crea 
la plantilla base con su head y body, se escriben los metas necesarios para que el html funcione correctamente, 
como la codificación de caracteres utilizada para que sea reconocido por el navegador y se establece la vinculación
con los archivos .js y .css. Se establece el título de la página y el input donde se ingresa el peso del bulto y
un button para cargar el peso al array e inicializar la función Cargar () que crearemos en el .js donde se realizaran 
los cálculos, con las etiquetas label el texto del dato que se va visualizar más delante, se crea el encabezado 
la tabla para organizar los datos.

En el .js antes de crear la función Cargar inicializamos las variables que no queremos que se reinicien 
cada vez que se accede a la función por medio del botón en el .html, posterior a esto creamos la función Cargar ()
y agregamos las variables para guardar los datos obtenidos, luego de esto creamos los condicionales que 
verifican que el valor no sea nulo, cero, mayor a 500 y que el avión no haya alcanzado su peso máximo, 
si el valor presenta alguna de estas condiciones se presentara la alerta correspondiente al caso, de no ser así, 
entrara al if en donde se encuentran los if anidados que de acuerdo al peso ingresado le asignaran un valor al mismo,
 agregamos el valor y el peso a la suma para hallar el total de estos, creamos un objeto que será el que retornaremos 
al html para que se visualice el dato ingresado en la tabla, el cual contiene número de bulto, el peso, el peso total, 
el valor y el valor total. Con .push() agregamos el valor al vector, para poder retornar los datos en la tabla los 
escribimos de tal menara que se agregan a la tabla antes creada, realizamos la operación para hallar el promedio del
peso de los bultos ingresados, hallar el máximo y el mínimo, cantidad de bultos y la conversión del valor en pesos a dólares 
y retornamos los valores al .html. Posteriormente se crean los condicionales para las alertas según el caso por medio de if anidados.
En el archivo .Css se le dio un color de fondo a la página al título y estilo al formulario.

COMO EJECUTAR EL ALGORITMO 
Ya que este proyecto lo cree como emulando un formulario de una página web sencilla, el proyecto se probó 
en la versión más actual de Google Chrome y Mozilla Firefox.

Para su ejecución es necesario descargar la carpeta ejercicio 2 que se encuentra en el repositorio, verificando que los 
archivos .html, .js y .Css se encuentren contenidos en la misma carpeta y ejecutando el archivo .html se puede acceder al algoritmo.

OBSERVACIÓN 
La tabla solicitada de los bultos, la interprete como la muestra los datos a la salida y no una tabla predeterminada 
con datos para ser ingresados, además esta no tiene límite de elementos salvo la limitación del peso del avión.

Muchas gracias por la atención prestada.
