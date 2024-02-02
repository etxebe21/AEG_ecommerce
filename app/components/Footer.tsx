// Importa el componente "Link" de "next/link"
import LinklegacyBehavior from "next/link";
import { FiMail, FiMapPin, FiPhone, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto flex flex-col items-center ">
        <div className="flex gap-8 mb-14">
         
         <LinklegacyBehavior href="mailto:info@example.com">
            <div className="flex items-center">
                <FiMail />
                <span className="ml-2">info@aeg.eus</span>
            </div>
            </LinklegacyBehavior>

            <LinklegacyBehavior href="/contact">
                <div className="flex items-center">
                    <FiMapPin />
                    <span className="ml-2">Paseo de Heriz 82, 20008 San Sebastián (Gipuzkoa)</span>
                </div>
            </LinklegacyBehavior>

            
                <div className="flex items-center">
                    <FiPhone />
                    <span className="ml-2">943 31 39 07 </span>
                </div>
            
            
        </div>

        <div className="flex gap-4 mb-14">
          <LinklegacyBehavior href="https://www.instagram.com/example/" passHref>
            
              <FiInstagram size={30} style={{ marginRight: '35px' }} />
                 
          </LinklegacyBehavior>

          <LinklegacyBehavior href="https://twitter.com/example/" passHref>
           
              <FiTwitter size={30} style={{ marginRight: '35px' }} />
            
          </LinklegacyBehavior>
      
          <LinklegacyBehavior href="https://www.facebook.com/example/" passHref>
                
                <FiFacebook size={30} style={{ marginRight: '35px' }} />
            
            </LinklegacyBehavior>
        </div> 

        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
