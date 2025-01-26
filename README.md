# dsa-notes

## 1 Definiciones de Algoritmos y de notación `O grande`

### 1.1 ¿Qué es un Algoritmo?

Un Algoritmo es una secuencia de instrucciones para resolver un problema.

### 1.2 ¿Qué es un Programa?

Un Programa también es una secuencia de instrucciones para resolver un problema.

### 1.3 Entonces... ¿Cómo los distinguimos?

Para poder distinguir entre un Algoritmo y un Programa debemos conocer que en el desarrollo de software no podemos simplemente ir desarrollando a base de prueba y error. Debemos seguir una fase de diseño primero y posteriormente de implementación.

Pues bien, aquí tendríamos la **primera diferencia**:
Un algoritmo se escribe en la fase de diseño, mientras que un programa se escribe en la fase de implementación.

La **segunda diferencia** tendría que ver con quien escribe cada cual:
Un algoritmo va a ser escrito por el _diseñador del sofware_ (para lo cual debe tener los conocimientos técnicos para resolver el problema -p.e. de logística-), mientras que el programa va a ser escrito por el _programador_ (para lo cual debe tener los conocimientos de programación adecuados).

Una **tercera diferencia** va a ser sobre en qué lenguaje lo vamos a escribir:
Un algoritmo puede ser escrito en _cualquier lenguaje_, mientras que el programa debe ser escrito en un _lenguaje de programación_.

La **cuarta diferencia** tiene que ver con aquello de lo que depende:
Un algoritmo no tiene ninguna dependencia, mientras que un programa depende del hardware, software y sistema operativo.

Por último, la **quinta diferencia** consiste en el proceso que realizamos tras escribir cada cual:
Con un algoritmo, tras escribirlo lo _analizamos_, mientras que con un programa lo _probamos o testeamos_.

En resumen

**DIFERENCIA ALGORITMO / PROGRAMA:**

| Algoritmos         | Programas          |
| :----------------- | :----------------- |
| En diseño          | En implementación  |
| Diseñador          | Programador        |
| Cualquier lenguaje | Leng. Programación |
| Sin dependencias   | Hardware, SW y SO  |
| Luego se analiza   | Luego se prueba    |

### 1.4 ¿Cómo comparamos un algoritmo?

Ahora que ya sabemos qué es una gloritmo y que entendemos que es una solución concreta a un problema durante la fase de diseño; como estamos aún en la fase de diseño nos podemos preguntar si es la mejor solución para nuestro problema.

Para poder evaluar soluciones primero debemos ver si la solución realmente resuelve nuesto problema y una vez que tenemos un conjunto de algoritmos que solucionan nuestro problema debemos ser capaces de evaluar cual de ellos es la mejor solución.

Para ello debemos ser capacer de comparar entre diferentes algoritmos.

Podemos comparar los algoritmos en base a:

- El tiempo que tardan en llevarse a cabo
- El espacio que ocupan
- Otras cualidades

### 1.5 Caraterísticas de un algoritmo

- Un algoritmo necesita ningún o algúnos inputs.
- Un algoritmo produce al menos un output, ya que si nó sería inutil. El algoritmo debe producir algún resultado.
- Cada procedimiento debe ser totalmente definido. Ningún procedimiento puede ser ambiguo.
- Un algoritmo debe tener un final. Sin embargo un programa puede correr de forma contínua, p.e. en un servicio.
- Un algoritmo debe ser efectivo en dos sentidos: No debe tener pasos innecesarios para alcanzar una solución y al final todos los pasos deben conducir a una solución.

### 1.6 ¿Qué es la << notación O Grande >>?

La `notación O Grande` o `Big O Notation` es una forma genérica de hablar de la eficiencia de un algoritmo. Es genérica en cuanto a que no expresa de forma precisa la eficiencia, sino en una situación de `peor situación posible` para cada algoritmo.

Su utilidad viene de poder usarla para comparar entre diferentes alorimtos que sirvan para solucionar un mismo problema.

La `notación O grande` nos resume las funciones de tiempo o de espacio de un algoritmo para que podamos comparar al más eficiente de entre varios algoritmos.

La función tiempo, o la función espacio son el resultado de, en el primer caso contar cada una de las operaciones que se realizan al realizar el algoritmo, en el segundo de contar el número de nombre o asignaciones que se usan.

Por ejemplo: Alternar dos elementos dentro de un array

```javascript
const alternarPrimerasDosPosicionesArray(arr) {

    const temp1 = arr[1]; // 1a operación
    arr[1] = arr[0]; // 2a operación
    arr[0] = temp1; // 3a operación

    return arr;
}
```

Vemos que la función tiempo es de 3 operaciones: `f(n) = 3`
Vemos que hemos ocupado una variable temporal `temp1` luego la función espacio sería `f(n) = 1`. En este caso `n`representaría la longitud de los datos, que concidiría con la longitud del array. Pero nuestro algoritmo es independiente de la longitud del array, luego en este caso decimos que es `constante`.

Una función tiempo constante, ya sea `f(n) = 3`, `f(n) = 6` o `f(n) = 22`, se expresa como simplificación generalizada o `notación O grande` como `O(n) = 1`:

```javascript
f(n) = 3 =>  O(n) = 1
```

Decimos que la **complejidad tiempo O(n) es constante** y esto se expresa como `O(n) = 1` ya que el número de operaciones en sí es despreciable según aumentan los tamaños de los datos, y lo único que importa es que es un número fijo de operaciones sin importar el tamaño de los datos a procesar ni tampoco en sí la cantidad de operaciones fijas. Y lo mismo pasa con la complejidad espacio de este algoritmo: `O(n) = 1`. Ya que siempre usamos la misma cantidad de variables nuevas (arr era un input).

Las funciones tiempo o espacio independientes del tamaño de los datos son pocas. La mayor parte de los algoritmos comunes para resolver problemas lo hacen en función de `n`.

## 2 Vista general de los diferentes grupos de algoritmos basándonos en << Notación O Grande >>

### 2.1 O grande constante o O(n) = 1

Ya hemos visto un ejempo en la definición de `Notación O Grande`. Son los Algoritmos que tienen un número constante de tiempos (tomados como número de operaciones a realizar) o espacios (tomados como variables usadas) sin importar el tamaño de los datos con los que trabaja el algoritmo.

## 2.2 O grande lineal o O(n) = n

Son los algoritmos que dependen proporcionalmente del número de datos con los que trabaja el algoritmo. Estos algortimos pueden tener una función tiempo de `f(n) = 2n` o `f(n) = 3n + 2n + 12`, pero su notación de O grande sigue siendo `O(n) = n`.

## 2 Notación O grande de estructuras de datos de Javascript

### 2.1 Estructuras de datos de Javascript

Javascript viene con una serie de estructuras de datos ya definidas en el lenguaje. Principalmente tenemos las estructuras primitivas: `string` o cadena de texto, `number`, `NaN`, `null`, `undefined` y los booleanos `true` y `false` y luego tenemos los `arrays` y los `objetos`. Además de estos hay otras estructuras derivadas de las anteriores tales como `Sets` y `Symbols`, pero en esencia las estructuras con las que vamos a tener que trabajar y aplicar métodos y algoritmos son los `arrays` y los `objetos`. Por ello nos vamos a parar en detalle a ver las Notaciones O grande de los principales métodos de estas estructuras.

### 2.2 Notación O grande de los Arrays

Los arrays son secuencias de datos ordenados. Esta estructura tiene una longitud definida, y aunque se puedan usar métodos para agregar elementos delante, detrás o incluso en partes interiores, en realidad lo que hacemos es crear nuevos arrays a partir del array modificado.

Los principales métodos de un array son:

- push y pop para agregar y quitar elementos en la última posición del array
- shift y unshift para quitar y agregar elementos al principio del array. Es una operación costosa ya que hay que reescribir los índices de todo el array.
- map, foreach, filter, find, some... son métodos que recorren el array, a veces totalmente a veces hasta una determinada condición pero que en el peor caso han de recorrer el array entero.
- ordenación. Especialmente costosa, ya que hay que comparar los elementos, modificar su orden y volver a comparar.

Las Notaciones o Grande de cada operación quedarían así:
| Operación | Notación O grande |
|:-----|:-----|
| Acceder a un dato: Array[indice] | O(1) |
| Añadir o quitar elementos al final| O(1) |
| Añadir o quitar elementos del principio | O(n)|
| Métodos que recorren el array | O(n) |
| Ordenar elementos en el array | O(log-n \* n) |

### 2.3 Notación O grande de los objetos

Los objetos en javascript nos permiten tener una estructura de pares clave valor sin orden específico, lo que la hace una estructura muy versátil y eficiente a la hora de acceder a los datos y modificarlos. Cada conjunto clave-valor de denomina una `propiedad`del objeto. El acceso a los datos mediante la clave de la propiedad es inmediato, así como su modificación. Los métodos que recorren cada propiedad del objeto.

Las Notaciones o Grande de cada operación quedarían así:
| Operación | Notación O grande |
|:-----|:-----|
| Acceder a un dato: Objeto{clave] u Objeto.clave | O(1) |
| Añadir o quitar propiedades | O(1) |
| Métodos que recorren las propiedades del objeto | O(n) |

## 3 Patrones de resolución

Vamos a comentar algunos de los métodos de resolución de problemas o algoritmos que se pueden aplicar directamente a arrays y objetos

### 3.1 Contadores de frecuencia.

Los contadores de frecuencia son una gran solución a problemas en los que hay que por ejemplo evaluar si tenemos el mismo número de caracteres de un `string`, si otro `string` tiene todas las vocales al menos una vez o si un `string` es un anagrama de otro.

Básicamente, en vez de usar métodos más complejos en el caso de anagramas vamos a guardar en un objeto cada uno de los elementos únicos de un array según lo recorremos como propiedad de ese objeto (nuestro contador de frecuencia) y como valor vamos a incluir 1 la primera vez, y cuando lleguemos a un elemento del que ya contemos con propiedad en nuestro contador de frecuencia lo que hacemos es añadir 1 a dicho valor de la frecuencia.

Si usamos un contador para cada array que tengamos que comparar y luego comparamos las frecuencias podremos ver de forma sencilla si ambos strings son anagramas.

podemos ver un ejemplo aplicado [aquí](frecuency-counter1.md), [aquí](frecuency-counter2.js) y [aquí](frecuency-counter3.js)

### 3.2 Punteros movibles

La técnica de los punteros movibles está indicada para evitar realizar un bucle anidado para ver por ejemplo cuantos valores numéricos únicos tenemos dentro de un array ordenado.

Consiste en estableces dos valores que contengan dos posiciones del array, de inicio por ejemplo 0 y 1 como el valor de los índices y vamos desplazando ambos punteros para ir haciendo comprobaciones entre los dos valores situados en las posiciones de dichos punteros.

Podemos ver un ejemplo aplicado [aquí](moving-pointers1.md)

### 3.3. Ventana dezlizante

Es una técnica destinada a resolver problemas de comparación de subarrays dentro de un array. Si por ejemplo queremos encontrar el valo de la mayor suma de 3 elementos consecutivos de un array lo que hacemos es calcular la suma de los 3 primeros elementos, y, posteriormente dezplazamos el subarray una posición a la derecha y en vez de volver a sumar todo el subarray simplemente al valor de la suma anterior le sumamos el elemento de la derecha y le restamos el de la izquierda... y así hasta alcanzar la última posición.

Cuando los arrays son grandes y los subarrays tienen muchos elementos también tiene una gran ganancia de eficiencia, pasando de una complejidad tiempo de O(n^2) a O(n).

### 3.4 Divide y vencerás

La técnica consiste en ir dividiendo nuestro conjunto de datos en subconjuntos de forma subsecuente. Este es por ejemplo el método detrás de la búsqueda binaria (si contamos con un array ordenado)
