import './corpo.css';
import bg from '../../escuro.jpg'

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="corpoBanner">
                <img className="banner" src={bg} alt='banner'/>
            </div>
            <div className="titulo">PROJECTS</div>
        </div>
    );
}