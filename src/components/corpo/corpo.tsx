import './corpo.css';
import Techs from '../techs/techs';

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="corpoBanner">
                <div className="apresentacao">
                    <img className="foto-perfil" alt="Perfil" />
                    <div className="texto-apresentacao">
                        <h1>Fernando Acauan</h1>
                        <p>Computer Engineering student at PUCRS, specializing in desktop applications and embedded systems development.</p>
                    </div>
                </div>
            </div>
            <Techs></Techs>
        </div>
    );
}