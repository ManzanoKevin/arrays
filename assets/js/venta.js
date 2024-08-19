const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: '5.000',
    estacionamiento: 3, 
    gym: true,  
    rampa: true, 
    sala: true, 
    smoke: false,
    pets: false
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: '1.200',
    estacionamiento: 1,
    gym: false,
    rampa: false,
    sala: true,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: '4.500',
    estacionamiento: 2,
    gym: true,
    rampa: true,
    sala: true,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://cache.enlaceinmobiliario.cl/cdn-cgi/image/format=webp,width=370,height=auto/Fachada-651f1a1f5702e6.webp',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '2.200',
    estacionamiento: 1,
    gym: true,
    rampa: true,
    sala: true,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://magentostorage.s3.us-east-1.amazonaws.com/mageplaza/blog/post/c/u/cuanto_mide_departamento_ideal.jpg',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '3.200',
    estacionamiento: 2,
    gym: false,
    rampa: true,
    sala: true,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20210330/1705717/n_wm_2021080531277342083.webp',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 3,
    baños: 2,
    costo: '4.200',
    estacionamiento: 3,
    gym: true,
    rampa: true,
    sala: true,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200305/1436177/n_wm_2021070253340574499.webp',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 4,
    baños: 3,
    costo: '5.200',
    estacionamiento: 3,
    gym: true,
    rampa: true,
    sala: true,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20191213/1379210/n_wm_2022061402117801443.webp',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 3,
    baños: 2,
    costo: '4.400',
    estacionamiento: 3,
    gym: true,
    rampa: true,
    sala: true,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.adsttc.com/media/images/5f27/27fa/b357/653f/3b00/08bf/slideshow/00.jpg?1596401649',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 3,
    costo: '3.200',
    estacionamiento: 1,
    gym: false,
    rampa: true,
    sala: false,
    smoke: false,
    pets: true
    }
];


    // Inyección

let render = `
    <h2>Propiedades en venta</h2>
    <div class="row">
`;

for (let propiedad of propiedades_venta) {
    render += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${propiedad.src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p><i class="fa-solid fa-car"></i> ${propiedad.estacionamiento} Estacionamientos </p>
                    <p class= "${propiedad.gym ? 'text-success' : 'text-danger'}"><i class="fa-solid fa-dumbbell"></i> ${propiedad.gym ? 'Gym disponible' : 'No tiene gym'}</p>
                    <p class="${propiedad.rampa ? 'text-success' : 'text-danger'}"><i class="fa-solid fa-wheelchair"></i> ${propiedad.rampa ? 'Acceso rampa discapacitados' : 'No tiene rampa para discapacitados'} </p>
                    <p class="${propiedad.sala ? 'text-success' : 'text-danger'}"><i class="fa-solid fa-couch"></i> ${propiedad.sala ? 'Sala de eventos' : 'No tiene sala de eventos'}</p>
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// render += `
//     <a href="#" class="btn btn-dark">Ver todas las propiedades en venta</a>
// `;

document.querySelector("#venta").innerHTML = render;