import Footer from "../components/Footer";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      {/* Contenido de la página */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        {/* Datos de contacto */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center">
            <FiMail className="text-xl" />
            <span className="ml-2">info@example.com</span>
          </div>

          <div className="flex items-center">
            <FiMapPin className="text-xl" />
            <span className="ml-2">123 Main St, City</span>
          </div>

          <div className="flex items-center">
            <FiPhone className="text-xl" />
            <span className="ml-2">+1 (234) 567-890</span>
          </div>
        </div>

        {/* Mapa de ubicación (puedes usar un componente de mapa de Google, por ejemplo) */}
        <div className="mb-8">
          {/* Mapa aquí */}
          {/* Puedes usar una biblioteca como react-google-maps para integrar un mapa de Google Maps */}
        </div>

        {/* Formulario de contacto */}
        <form className="max-w-md">
          <label className="block mb-2">
            Nombre:
            <input type="text" className="w-full border p-2" />
          </label>

          <label className="block mb-2">
            Correo Electrónico:
            <input type="email" className="w-full border p-2" />
          </label>

          <label className="block mb-4">
            Mensaje:
            <textarea className="w-full border p-2"></textarea>
          </label>

          <button type="submit" className="bg-blue-500 text-white p-2">
            Enviar Mensaje
          </button>
        </form>
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Contact;
