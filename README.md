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

Son los algoritmos que dependen proporcionalmente del número de datos con los que trabaja el algoritmo.
