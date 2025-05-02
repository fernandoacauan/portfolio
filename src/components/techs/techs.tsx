import './techs.css'
///////////////////////////////////////////////////////////////////////////////
// Imagens

import CSharp from '../../assets/Csharp_Logo.png'
import C from '../../assets/C.png';
import CPP from '../../assets/Cpp.png';
import VHDL from '../../assets/VHDL.png';
import SQL from '../../assets/sql.png';
///////////////////////////////////////////////////////////////////////////////
export default function Techs()
{
    return (
        <section id="techs">
            <h1 id="titulo">TECHS</h1>
        <div className="techs-container">
            <div className="tech-cards">
                <div className="thumbmail">
                    <img className="images" src={C}></img>
                </div>
                <p>C</p>
            </div>
            <div className="tech-cards">
                <div className="thumbmail">
                <img className="images" src={CPP}></img>
                </div>
                <p>C++</p>
            </div>
            <div className="tech-cards">
                <div className="thumbmail">
                <img className="images" src={CSharp}></img>
                </div>
                <p>CSharp</p>
            </div>
            <div className="tech-cards">
                <div className="thumbmail">
                    <img className="images" src={SQL}></img>
                </div>
                <p>SQL</p>
            </div>
            <div className="tech-cards">
                <div className="thumbmail">
                <img className="images" src={VHDL}></img>
                </div>
                <p>VHDL</p>
            </div>
        </div>
        </section>

    );
}