//metodo para obtener productos
const obtenerProductos = async () => {
    try{ 
        const res = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
        return await res.json();
    }catch(error){
        return console.log(err);
    }
}
//cmetodp confeccionar tarjetas
const confeccionarTarjetas = (productos) => {
    return productos.map(productos => {
        return `
            <article class="card">
                <img src="${productos.image}" alt="${productos.image}" />
                <ul>
                    <li> Nombre: ${productos.name} </li>
                    <li> Precio: ${productos.price}</li>
                </ul>
            </article>
    
        `
    })
    .reduce((prev, curr) => {
        return `
            ${prev}
            ${curr}
        `
    }, '');

}
//metodo listar producto
const listarProductos = async () => {
    // 2) cuando escucho el evento, obtengo la informacion de los productos
    const productos = await obtenerProductos();
    // 3) cuando recivo la informacion de los productos actualizo la pagina
    const tarjetas = confeccionarTarjetas(productos);
    $section = document.querySelector('.cards');
    $section.innerHTML = tarjetas;
}

// 1) escuchar el evento del boton listar
const $boton = document.querySelector('.btn-listar');
$boton.addEventListener('click' , listarProductos);   




