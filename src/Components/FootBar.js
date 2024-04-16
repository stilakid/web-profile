// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub, logoInstagram, logoFacebook, logoLinkedin, mail } from 'ionicons/icons';



// Base Custom Button Class

export default function FootBar({ children, className, ...props }) {
    return (
        <footer className={`flex flex-col justify-center items-center bg-primary-darker text-neutral-pale p-10 w-full ${className}}`}>
            <div className='mb-2 flex flex-row justify-center items-center'>
                <a className='mx-2' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/juben.rana"><IonIcon icon={logoFacebook} className="text-3xl" /></a>
                <a className='mx-2' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juben_rana/"><IonIcon icon={logoInstagram} className="text-3xl" /></a>
                <a className='mx-2' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jubenrana"><IonIcon icon={logoLinkedin} className="text-3xl" /></a>
                <a className='mx-2' target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid"><IonIcon icon={logoGithub} className="text-3xl" /></a>
                <a className='mx-2' href = "mailto: zubenrana@stanford.edu"><IonIcon icon={mail} className="text-2xl" /></a>
            </div>

            © 2024 Juben Rana
        </footer>
    );
}