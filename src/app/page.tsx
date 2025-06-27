
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Venta Online en 24 Horas" subheadline="Transformamos tus recomendaciones en ventas digitales con soporte 24/7, sin que te preocupes por el manejo del sitio." cta1="Digitaliza Ya" />
<How step1Title="Contacta WebGo" step1Desc="Envía tus requisitos en minutos." step2Title="Creamos tu sitio" step2Desc="Web de ventas lista en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar ventas online." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="WebGo transforma tu negocio en línea, sin complicaciones y en tiempo récord." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo por ti" beneficiotitulo2="Aumento Ventas" beneficio2="Convierte recomendaciones en ventas digitales" />
<Services heading="Transforma Tus Recomendaciones en Ventas" description="Con aaa (Precio: 123) - asdas, digitaliza tus ventas sin complicaciones." services={[{"name":"Diseño Web Express","icon":"bolt","description":"Venta online en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu negocio."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad en línea."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Funcionalidades de tienda digital."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualiza tu web sin esfuerzo."},{"name":"Marketing Digital","icon":"bullhorn","description":"Estrategias efectivas para más ventas."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web espectaculares y efectivos." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ofrece un servicio integral para que puedas vender online fácilmente. Nos encargamos de todo, desde crear tu sitio web hasta gestionar tus ventas digitales, para que tú te concentres en lo que realmente importa: tus clientes."},{"pregunta":"¿Qué beneficios tiene usar los servicios de WebGo?","respuesta":"Con WebGo, no solo tendrás un sitio web profesional, sino también una plataforma optimizada para SEO que atraerá nuevos clientes. Además, simplificamos el proceso de ventas online para que puedas aumentar tus ganancias sin complicaciones."},{"pregunta":"No sé generar ventas online, ¿cómo me puede ayudar WebGo?","respuesta":"En WebGo entendemos que el mundo digital puede ser complicado. Por eso, te ofrecemos soluciones personalizadas y te guiamos paso a paso para que puedas empezar a vender online de forma efectiva sin necesidad de ser un experto en tecnología."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué hace WebGo al respecto?","respuesta":"Nosotros nos encargamos de todo. Desde la creación y mantenimiento de tu sitio web hasta la optimización para buscadores, WebGo se asegura de que tu presencia online sea efectiva y sin que tengas que dedicarle tiempo extra."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo para digitalizar mi negocio?","respuesta":"El precio inicial del servicio es de 123, y está diseñado para ofrecerte la mejor relación calidad-precio. Nos adaptamos a las necesidades de tu negocio para asegurarnos de que recibas el máximo valor y resultados."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Línea" 
                      description="Deja de depender de las recomendaciones. Con WebGo, digitaliza tus ventas fácilmente y empieza a crecer. Precio: 123 - asdas."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
