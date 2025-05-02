import './corpo.css';
import bg from '../../escuro.jpg'
import Techs from '../techs/techs';

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="corpoBanner">
                <img className="banner" src={bg} alt='banner'/>
            </div>
            <Techs></Techs>
        </div>
    );
}