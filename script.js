const contactos = [];

const contacto = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mostrarInfo: function () {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Teléfono: ${this.telefono}, Email: ${this.email}`;
    }
};

document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Lógica para agregar contacto aquí
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Crear un nuevo contacto y agregarlo al array
    
});

document.getElementById('mostrarContactosBtn').addEventListener('click', () => {
    // Lógica para mostrar contactos aquí
    
});
