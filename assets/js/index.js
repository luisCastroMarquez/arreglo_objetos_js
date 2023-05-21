const propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    }
];

const propiedades = document.querySelector(".propiedades");
const rooms = document.querySelector("#rooms");
const totalPropiedades = document.querySelector("#total-propiedades");
const selectMin = document.querySelector("#select-min");
const selectMax = document.querySelector("#select-max");
const btn = document.querySelector("#btn");

let html = '';

for (let propiedad of propiedadesJSON) {
    html += `
        <div class="propiedad">
            <div class="img" style="background-image: url(' ${propiedad.src} ')"></div>
            <section>
                <h5> ${propiedad.name} </h5>
                <div class="d-flex justify-content-between">
                    <p> ${propiedad.rooms} </p>
                    <p> ${propiedad.m} </p>
                </div>
                <p class="my-3"> ${propiedad.description} </p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
    `;
}

propiedades.innerHTML = html;

    //alert(' faltal cosas');
totalPropiedades.innerHTML = propiedadesJSON.length;

btn.addEventListener('click', () => {
    const totalRooms = +rooms.value;
    const totalSelectMin = +selectMin.value;
    const totalSelectMax = +selectMax.value;

    if (totalRooms === 0 || totalSelectMin === 0 || totalSelectMax === 0) {
        return alert('Debes ingresar todas las opciones');
    }

    if (totalSelectMin > totalSelectMax) {
        return alert('Opción inválida: el valor mínimo no puede ser mayor que el valor máximo');
    }

    let html = '';
    let count = 0;

    for (let propiedad of propiedadesJSON) {
        if (
            totalRooms === propiedad.rooms &&
            propiedad.m >= totalSelectMin &&
            propiedad.m <= totalSelectMax
        )   {

            count++;
            html += `
                <div class="propiedad">
                    <div class="img" style="background-image: url(' ${propiedad.src} ')"></div>
                    <section>
                        <h5> ${propiedad.name} </h5>
                        <div class="d-flex justify-content-between">
                            <p> ${propiedad.rooms} </p>
                            <p> ${propiedad.m} </p>
                        </div>
                        <p class="my-3"> ${propiedad.description} </p>
                        <button class="btn btn-info ">Ver más</button>
                    </section>
                </div>
            `;
        }
    }

    propiedades.innerHTML = html;
    totalPropiedades.innerHTML = count;

    if (count === 0) {
        alert('Rooms no disponible');
    }
});
