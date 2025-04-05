// Archivo: CVPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Linkedin } from "lucide-react";
import logo from './logo1.png';

import "./CVPage.css";

const pages = ["inicio", "habilidades", "experiencia", "formacion"];

export default function CVPage() {
  const [currentPage, setCurrentPage] = useState("inicio");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv_daniel.pdf";
    link.download = "cv_daniel.pdf";
    link.click();
  };

  const renderPage = () => {
    switch (currentPage) {
      case "inicio":
        return (
          <motion.section
            key="inicio"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section"
          >
            <h1 className="title">Daniel Cristofer Trejo Rueda</h1>
            <p className="subtitle">SDET | QA Lead | QA Engineer</p>
            <div className="contact-info">
              <span><MapPin size={16}/>Tlalnepantla de Baz | </span>&nbsp;
              <span><Mail size={16}/> trejoruedadaniel@gmail.com | </span>&nbsp;
              <span><Phone size={16}/> 7713035597  |  </span>&nbsp;
              <span className="linkedin-link"><a href="https://www.linkedin.com/in/daniel-cristofer-trejo-rueda-579064249/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} className="linkedin-icon" />Ver perfil de LinkedIn</a>
            </span>
            </div>
            <motion.p
              className="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Soy un profesional especializado en aseguramiento de calidad de
              software, con experiencia en pruebas automatizadas y manuales. Manejo herramientas como{" "}
              <span className="highlight">Selenium</span>, <span className="highlight">JMeter</span>,{" "}
              <span className="highlight">Postman</span> y <span className="highlight">AWS</span>, y trabajo con metodologías ágiles
              como <span className="highlight">Scrum</span> y <span className="highlight">Kanban</span>. Mi enfoque se centra en
              mejorar procesos, optimizar pruebas y garantizar la calidad en proyectos tecnológicos.
            </motion.p>

            <motion.button
              className="download-btn"
              onClick={handleDownload}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Download size={16} className="mr-2" /> Descargar PDF
            </motion.button>
          </motion.section>
        );
      case "habilidades":
        return (
          <motion.section key="habilidades" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <ul className="list">
              <li><strong>Lenguajes:</strong> Java, JavaScript, Python</li>
              <li><strong>Frameworks:</strong> TestNG, JUnit, Cucumber, Express, React, Angular, Django, Selenium, Playwright</li>
              <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, MongoDB, DynamoDB, Firebase</li>
              <li><strong>Herramientas:</strong> Charles Proxy, Sumo Logic, Appium, BrowserStack, Postman, AWS, JMeter, Sonarqube, Git</li>
              <li><strong>Gestores:</strong> Zephyr, Xray, Azure, Jira, Confluence</li>
              <li><strong>Metodologías:</strong> Scrum, Kanban, XP, BDD</li>
            </ul>
          </motion.section>
        );
      case "experiencia":
        return (
          <motion.section key="experiencia" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section scrollable">
            <h2 className="section-title">Experiencia Profesional</h2>
            <div className="list">
              <div>
                <h3 className="job-title">Global Quality Assurance Specialist - ALSEA IBERIA</h3>
                <p className="job-date">Febrero 2024 - Actualidad</p>
                <ul className="job-list">
                <li>Coordinación de proyectos, gestión de requerimientos y definición de prioridades, con la ejecución de pruebas paralelas para diversas marcas.</li>
        <li>Supervisión de casos de prueba, seguimiento de defectos y gestión de tareas en Jira, incluyendo el monitoreo de proyectos en producción.</li>
        <li>Ejecutando funciones Lambda y almacenamiento en DynamoDB dentro de la nube AWS, así como la gestión de servicios en AWS.</li>
        <li>Realización de análisis de grandes volúmenes de datos utilizando Python, con comparativas y evaluaciones en formatos JSON y Excel.</li>
        <li>Generación automática de objetos y envío de solicitudes repetidas a un servicio CURL.</li>
        <li>Manejo integral de requerimientos, pruebas y documentación a través de Jira y Xray.</li>
  
                </ul>
              </div>
              <div>
                <h3 className="job-title">Analista de Calidad - TOYOTA TFSM</h3>
                <p className="job-date">Septiembre 2023 - Febrero 2024</p>
                <ul className="job-list">
                <li>Me encargué del diseño y ejecución de pruebas de calidad para asegurar el buen funcionamiento de los sistemas.</li>
        <li>Utilicé Python para gestionar grandes volúmenes de datos, además de realizar pruebas de inyecciones masivas mediante Postman para verificar la integridad y el rendimiento de las APIs.</li>
        <li>Diseñé procedimientos almacenados (stored procedures) para optimizar el acceso y la manipulación de datos en bases de datos.</li>
        <li>Contribuí al desarrollo de un sistema de gestión utilizando Java, colaborando en su mejora y manteniendo su funcionalidad.</li>
      
                </ul>
              </div>
              <div>
                <h3 className="job-title">Software Test Engineer - CTIN México</h3>
                <p className="job-date">Enero 2022 - Septiembre 2023</p>
                <ul className="job-list">
                <li>Realicé pruebas funcionales y de rendimiento, gestionando los defectos y su seguimiento en Jira.</li>
        <li>Utilicé herramientas como Charles Proxy, Postman, Selenium, entre otras, para la ejecución de pruebas.</li>
        <li>Desarrollé y mantuve pruebas automatizadas utilizando Java y TestNG, asegurando la calidad y eficiencia de las aplicaciones.</li>
        <li>Evalué el rendimiento del sistema a través de JMeter, identificando y solucionando posibles cuellos de botella en el rendimiento.</li>
     
                </ul>
              </div>
              <div>
                <h3 className="job-title">Desarrollador Backend - DISINET</h3>
                <p className="job-date">Enero 2021 - Enero 2022</p>
                <ul className="job-list">
                  <li>Desarrollé servicios API REST utilizando JavaScript y Node.js, integrando procedimientos almacenados en MongoDB para optimizar el manejo de datos.</li>
        <li>Implementé el flujo de trabajo Git Flow en proyectos DISINET, asegurando un control eficiente de versiones y colaboración en equipo.</li>
        <li>Integré soluciones de pago como PayPal y Mercado Pago, brindando soporte para transacciones seguras y eficientes.</li>
     
                </ul>
              </div>
            </div>
          </motion.section>
        );
      case "formacion":
        return (
          <motion.section key="formacion" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section">
            <h2 className="section-title">Formación Académica y Certificaciones</h2>
            <ul className="list">
              <li>Ingeniero en Desarrollo de Software – Universidad Tecnológica de Tecámac</li>
              <li>Scrum Master Profesional</li>
              <li>Desarrollador en la Nube – Google</li>
              <li>Desarrollador de JavaScript I – Salesforce</li>
              <li>Inglés Básico (A2) – 100% de dominio</li>
            </ul>
          </motion.section>
        );
        default:
      // Este es el caso 'default' para manejar cualquier valor no esperado.
      return (
        <motion.section className="section">
          <h2>Error: Página no encontrada</h2>
        </motion.section>
      );
      
    }
 
  };

  return (
    <main className="main-bg">
        
      <nav className="navbar">
         {/* Agrega el logo animado aquí */}
      <motion.section
        className="logo-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        </div>
      </motion.section>
        {pages.map((p) => (
          <button key={p} onClick={() => setCurrentPage(p)} className={`nav-button ${currentPage === p ? "active" : ""}`}>
            {p}
          </button>
        ))}
      </nav>
      {renderPage()}
      
      {/* Pie de página añadido aquí */}
      <footer className="footer">
        <p>&copy; 2025 Daniel Cristofer Trejo Rueda. Todos los derechos reservados.</p>
        <p><a href="mailto:trejoruedadaniel@gmail.com">Contactar</a></p>
      </footer>
    
    </main>
  );
}
