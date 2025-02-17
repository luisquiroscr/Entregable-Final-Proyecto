console.log('Funcionando Archivo: API_Productos');

const Api_Productos = "https://api.escuelajs.co/api/v1/categories"

// Datos locales simulando la API

let DatosFiltrados = []
let contenedor = document.getElementById('tbody');
 

//aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos() //Cuando trabajamos con APIS se llama a la funcion de consultar 
    
    
});

// Consultar Datos del API mediante Fetch(AJAX) AXIOS
function consultarDatos() {

    //fetchget
    fetch(Api_Productos) //1- se le indica la url de la api 
        
        .then(response => response.json()) // 2 -Conversion de datos , JSON 
        .then(result => {           //3- Resultado  result
            // custom error
           // console.log(result)
            DatosFiltrados = result
            Mostrar_CampoTabla()
        })
        .catch(error => {      ///4- Catch
            // common error
            alert("Error ",error)
            return null;
        });
    
}


function Mostrar_CampoTabla() {
    
    let html = ""
    
    DatosFiltrados.forEach(element => {
        
      

        html += `
        
         <tr>
            <td> ${element.name} </td>
            <td> ${element.image} </td>
                   
        </tr>
        
        
        `

    });

    contenedor.innerHTML = html

}