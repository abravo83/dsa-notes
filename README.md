# dsa-notes

## 1 Algoritmos y notación `O grande`

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

## 1.4 ¿Cómo comparamos un algoritmo?

Ahora que ya sabemos qué es una gloritmo y que entendemos que es una solución concreta a un problema durante la fase de diseño; como estamos aún en la fase de diseño nos podemos preguntar si es la mejor solución para nuestro problema.

Para poder evaluar soluciones primero debemos ver si la solución realmente resuelve nuesto problema y una vez que tenemos un conjunto de algoritmos que solucionan nuestro problema debemos ser capaces de evaluar cual de ellos es la mejor solución.

Para ello debemos ser capacer de comparar entre diferentes algoritmos.

Podemos comparar los algoritmos en base a:

- El tiempo que tardan en llevarse a cabo
- El espacio que ocupan
- Otras cualidades

## 1.5 Caraterísticas de un algoritmo

- Un algoritmo necesita ningún o algúnos inputs.
- Un algoritmo produce al menos un output, ya que si nó sería inutil. El algoritmo debe producir algún resultado.
- Cada procedimiento debe ser totalmente definido. Ningún procedimiento puede ser ambiguo.
- Un algoritmo debe tener un final. Sin embargo un programa puede correr de forma contínua, p.e. en un servicio.
- Un algoritmo debe ser efectivo en dos sentidos: No debe tener pasos innecesarios para alcanzar una solución y al final todos los pasos deben conducir a una solución.

## 1.6 ¿Qué es la << notación O Grande >>?

La `notación O Grande` o `Big O Notation` es una forma genérica de hablar de la eficiencia de un algoritmo. Es genérica en cuanto a que no expresa de forma precisa la eficiencia, sino en una situación de `peor situación posible` para cada algoritmo.

Su utilidad viene de poder usarla para comparar entre diferentes alorimtos que sirvan para solucionar un mismo problema.

La `notación O grande` nos resume las funciones de tiempo o de espacio de un algoritmo para que podamos comparar al más eficiente de entre vairos algoritmos.
