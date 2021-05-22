$(document).ready(function (){
 //Arreglo para la lista de tarjetas
        let listadoTarjetas = [{'tit': 'Café molido',
                                'srcIni' : 'recursos/imagenes/cafe_molido.png',
                               'srcFin': 'recursos/imagenes/molido_mini.jpg' }, 
                               {'tit':'Capuchino',
                               'srcIni' : 'recursos/imagenes/capuchino.png' ,
                               'srcFin': 'recursos/imagenes/capuchino_mini.png'}, 
                               {'tit': 'Café Mocca',
                               'srcIni' : 'recursos/imagenes/cafe_mocca.jpg',
                               'srcFin': 'recursos/imagenes/mocca_mini.png' }, 
                               {'tit': 'Bebida',
                               'srcIni' : 'recursos/imagenes/cafe_bebida.png',
                               'srcFin': 'recursos/imagenes/cafe_bebida_mini.png'}, 
                               {'tit': 'Café Negro',
                               'srcIni' : 'recursos/imagenes/cafe_negro.jpg',
                               'srcFin': 'recursos/imagenes/cafe_negro_mini.png'}];

                               for (let i=0; i < listadoTarjetas.length; i++){

                                let imagenIni = listadoTarjetas[i].srcIni;
                                let titArticle = listadoTarjetas[i].tit;
                        
                                let textoHtml = '<article class=\"miTarjeta\">' +
                                                '<figure> ' +
                                                '<img src=\"' + imagenIni + '\" alt=\"\">' +
                                               '<figcaption>' + titArticle + '</figcaption> ' +
                                                '</figure> ' +
                                               ' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
                                            '</article>  ';
                                
                                $('#listaTarjetas').append(textoHtml);
                            }
                        
                            let anchoPantalla = window.innerWidth; 
                            tamañopant (anchoPantalla,listadoTarjetas); 
                        
                            $("#togglee").on("click",function(){
                            $('#lista').toggle();
                            });
                        

                            // Funcionalida de cuando la pantalla cambia de tamaño - Ancho
                            $(window).resize(function (){
                                let anchoPantalla = window.innerWidth;
                        
                                let cambio1 = [{'tit': 'Café molido',
                                'srcIni' : 'recursos/imagenes/cafe_molido.png',
                               'srcFin': 'recursos/imagenes/molido_mini.jpg' }, 
                               {'tit':'Capuchino',
                               'srcIni' : 'recursos/imagenes/capuchino.png' ,
                               'srcFin': 'recursos/imagenes/capuchino_mini.png'}, 
                               {'tit': 'Café Mocca',
                               'srcIni' : 'recursos/imagenes/cafe_mocca.jpg',
                               'srcFin': 'recursos/imagenes/mocca_mini.png' }, 
                               {'tit': 'Bebida',
                               'srcIni' : 'recursos/imagenes/cafe_bebida.png',
                               'srcFin': 'recursos/imagenes/cafe_bebida_mini.png'}, 
                               {'tit': 'Café Negro',
                               'srcIni' : 'recursos/imagenes/cafe_negro.jpg',
                               'srcFin': 'recursos/imagenes/cafe_negro_mini.png'}];
                        
                               tamañopant(anchoPantalla,cambio1); 
                            });
                        
                            
                        });
                            function tamañopant (anchoPantalla,listadoTarjetas){
                                if (anchoPantalla < 920) {
                                    $('#listaTarjetas article p').hide();
                        
                                    $('#lista').removeClass('horizontal');
                                    $('#lista').addClass('vertical');

                                    $('#togglee').show();

                                    $('main').removeClass('fondo2');
                                    $('main').addClass('fondo1');

                                    for (let i=0; i < listadoTarjetas.length; i++){
                                        let imagenIni = listadoTarjetas[i].srcFin;
                                        console.log (imagenIni);
                                
                                        var indexx = i+1; 
                                        $('.miTarjeta:nth-child('+ indexx +') img').attr('src',imagenIni);  
                                    }
                        
                                } else{
                                    $('#listaTarjetas article p').show();

                                    $('#lista').removeClass('vertical');
                                    $('#lista').addClass('horizontal');

                                    $('#togglee').hide();
                                    $('main').removeClass('fondo1');
                                    $('main').addClass('fondo2');

                                    for (let i=0; i < listadoTarjetas.length; i++){
                                        let imagenIni = listadoTarjetas[i].srcIni;
                                        console.log (imagenIni);
                                
                                        var indexx = i+1; 
                                        $('.miTarjeta:nth-child('+ indexx +') img').attr('src',imagenIni);  
                                    }
                                }
}

       
    
        
    