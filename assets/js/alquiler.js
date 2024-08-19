const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.000',
        estacionamiento: 1,
        gym: false, 
        rampa: true, 
        sala: false, 
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '2.500',
        estacionamiento: 1,
        gym: false,
        rampa: true,
        sala: true,
        smoke: true,
        pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '2.200',
    estacionamiento: 1,
    gym: false,
    rampa: true,
    sala: false,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://cache.enlaceinmobiliario.cl/cdn-cgi/image/format=webp,width=370,height=auto/Fachada-651f1a1f5702e6.webp',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '3.000',
    estacionamiento: 2,
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
    costo: '3.300',
    estacionamiento: 1,
    gym: true,
    rampa: true,
    sala: true,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://www.iaconcagua.com/Multimedia/posts/departamentos-en-las-condes-edificio-trento.w1600.jpg',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '4.100',
    estacionamiento: 2,
    gym: true,
    rampa: true,
    sala: false,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://assets.easybroker.com/property_images/3063081/48868419/EB-KT3081.jpg?version=1656019645',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '4.100',
    estacionamiento: 2,
    gym: true,
    rampa: true,
    sala: false,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://investo.com.mx/wp-content/uploads/2021/12/Amaralda-Departamentos-En-Venta-Residencial-Sur-de-Monterrey.jpg',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '4.100',
    estacionamiento: 2,
    gym: true,
    rampa: true,
    sala: false,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://investo.com.mx/wp-content/uploads/2021/12/Amaralda-Departamentos-Torre.jpg',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '789 Residential Lane, Suburbia, CA 12345',
    habitaciones: 2,
    baños: 2,
    costo: '4.100',
    estacionamiento: 2,
    gym: true,
    rampa: true,
    sala: false,
    smoke: false,
    pets: false
    },

    
    
];

// Inyección
let render = `
    <h2>Propiedades en alquiler</h2>
    <div class="row">
`;

for (let propiedad of propiedades_alquiler) {
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
//     </div>
//     <a href="#" class="btn btn-dark">Ver todas las propiedades en alquiler</a>
// `;

document.querySelector("#alquiler").innerHTML = render;