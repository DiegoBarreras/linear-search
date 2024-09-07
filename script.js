let arreglo200 = [];
let boton = document.getElementById("boton_buscar");
let num = document.getElementById("numero_caja");
var ausencia = 0

for (let i = 1; i <= 200; i++) {
    arreglo200.push(Math.floor(Math.random() * 10000) + 1);
};

function listadoVector(vec) {
    let items = "";

    for(let i = 0; i <= arreglo200.length - 1; i++) {
        items += `<li>${vec[i]}</li>`;
    };

    return items;
};

document.querySelector("main").innerHTML = `
    <ol>
    ${listadoVector(arreglo200)}    
    </ol>
`;

boton.addEventListener("click", function() {
    let buscar_num = num.valueAsNumber;

    if(buscar_num > 10000) {
        alert("El número que quieres buscar es demasiado grande");
    } else if(buscar_num < 1) {
        alert("El número que quieres buscar es demasiado chico");
    } else {
        for (let i = 0; i <= arreglo200.length - 1; i++) {
            if (buscar_num == arreglo200[i]) {
                alert("El número " + buscar_num + " ha sido encontrado en la línea " + (i + 1) + ".");  
                ausencia = 1
                break          
            }
        };
    
        if (ausencia == 0) {
            alert("El número no ha sido encontrado");  
        };
    };
});