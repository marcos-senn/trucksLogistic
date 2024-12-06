import instlaciones from "../assets/images/3.png";
import ampliaciones from "../assets/images/2.png";
import relevamientoYAsesoramiento from "../assets/images/1.png";
import proyectos from "../assets/images/4.png";
import mantenimientoYReparaciones from "../assets/images/5.png";
import emergencias from "../assets/images/6.png";

interface Service {
    descripcion: string;
    Imagen: {};
}

export const services: Service[] = [
    {
        descripcion: "Atendemos urgencias eléctricas 24/7 para resolver cualquier fallo o avería en tus instalaciones de manera rápida y eficiente.",
        Imagen: emergencias,
    },
    {
        descripcion: "Desarrollamos y gestionamos proyectos eléctricos completos, desde el diseño hasta la ejecución, garantizando seguridad y eficiencia.",
        Imagen: proyectos,
    },
    {
        descripcion: "Ofrecemos servicios de relevamiento y asesoramiento técnico para optimizar tus instalaciones eléctricas y asegurar su correcto funcionamiento.",
        Imagen: relevamientoYAsesoramiento,
    },
   
    {
        descripcion: "Realizamos instalaciones eléctricas nuevas, asegurando que cumplan con los más altos estándares de calidad y seguridad.",
        Imagen: instlaciones,
    },
    {
        descripcion: "Llevamos a cabo ampliaciones de sistemas eléctricos existentes para satisfacer nuevas demandas energéticas sin comprometer la seguridad.",
        Imagen: ampliaciones,
    },
   
    {
        descripcion: "Proveemos mantenimiento preventivo y correctivo, así como reparaciones para mantener tus instalaciones eléctricas en perfecto estado.",
        Imagen: mantenimientoYReparaciones,
    },
    
];
