console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {

    Mostrar_Testimonios()
    Mostrar_Articulos()

});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

    Contenedor_IdFooter.innerHTML
        = `

   <div class="container">
        <p class="h2 mb-2">
        Explora nuestra sección de videojuegos, donde te traemos noticias sobre los lanzamientos más recientes, avances exclusivos y reseñas imparciales. Ya seas fan de los juegos de acción, aventura, estrategia o multijugador, aquí descubrirás lo último del mundo gaming.
        </p>
        <p class="h4 lead">- Autor </p>
    </div>
                


`;

}

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

    Contenedor_IdFooter.innerHTML
        = `

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/safeimagekit-cod2020.png" class="w-100" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>¡Call of Duty: Warzone da el salto a la gran pantalla!</h2>
                            <p>
                                La intensidad de los combates, las estrategias de supervivencia y la acción sin límites que han definido a Warzone ahora llegan al cine en una épica adaptación cinematográfica. Prepárate para una historia llena de adrenalina, con batallas espectaculares, misiones de alto riesgo y personajes inolvidables que llevarán la experiencia del battle royale a un nuevo nivel.

¿Estás listo para la guerra definitiva? Muy pronto en tu cine favorito. 🎮🎥🚁
                            </p>
                            <a class="btn btn-grey btn-lg mt-2 d-flex justify-content-center" href="#">Ver más</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>

`;

}