function estiloContainer(container) {
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.marginTop = "20px";
  container.marginBottom = "60px";
}

function estiloDivClick(div, color) {
  div.style.backgroundColor = color;
  div.style.width = "200px";
  div.style.height = "200px";
}

function estiloDivKey(div) {
    div.style.backgroundColor = 'white';
    div.style.border = '1px solid black';
    div.style.width = "200px";
    div.style.height = "200px";
}

function blackDiv(div) {
  div.style.backgroundColor = "black";
}

function crearDivKey(color) {

    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";

    divKeyContainer.appendChild(newDiv);
}

var divContainer = document.getElementById("divContainer");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var divKeyContainer = document.getElementById("divKeyContainer");
var divKey = document.getElementById("key");
        

estiloContainer(divContainer);
estiloDivClick(div1, "blue");
estiloDivClick(div2, "red");
estiloDivClick(div3, "green");
estiloDivClick(div4, "yellow");
estiloContainer(divKeyContainer);
estiloDivKey(divKey);

div1.addEventListener("click", function () {
  blackDiv(div1);
});

div2.addEventListener("click", function () {
  blackDiv(div2);
});

div3.addEventListener("click", function () {
  blackDiv(div3);
});

div4.addEventListener("click", function () {
  blackDiv(div4);
});

var divKey = document.getElementById("key");
estiloDivKey(divKey);

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        divKey.style.backgroundColor = 'pink';

    } else if (event.key === 's') {
        divKey.style.backgroundColor = 'orange';

    } else if (event.key === 'd') {
        divKey.style.backgroundColor = 'skyblue';

    } else if (event.key === 'q') {
        crearDivKey('purple')

    } else if (event.key === 'w') {
        crearDivKey('gray')
        
    } else if (event.key === 'e') {
        crearDivKey('brown')

    } else {
        alert('letra invalida');
    }
});
