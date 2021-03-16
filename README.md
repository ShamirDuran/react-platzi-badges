## PLATZI BADGES

Aplicación del curso de introducción de react teórico (no confundir con el pratico).

1. Como es que se muestra lo del index.js?

const element = <h1>Hello, Platzi Badges!</h1>;

- La linea anterior es de React, su equivalente en JS puro seria

const element = document.createElement("h1)
element.innerText = "Hello, Platzi Badges!"

- Ese element seria el elemento que se va a insertar en el div que tiene como id "app".
  En Js puro y en React se trae con un:

const container = document.getElementById("app")

- Lo que cambia es como se inserta dentro del div el elemento que creamos

En Js puro: container.appendChild(element)
En React: ReactDOM.render(element, container);
