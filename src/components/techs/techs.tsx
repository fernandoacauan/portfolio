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
                    <div className="front-and-back-area">
                    <div className="area-front">
                        <div className="thumbmail">
                        <img id="img1" src={C} />
                        </div>
                        <p>C</p>
                    </div>
                    <div className="area-back">
                        <p>Linguagem de baixo nível utilizada em sistemas embarcados.</p>
                    </div>
                    </div>
                </div>

                <div className="tech-cards">
                    <div className="front-and-back-area">
                    <div className="area-front">
                        <div className="thumbmail">
                        <img id="img1" src={CPP} />
                        </div>
                        <p>C++</p>
                    </div>
                    <div className="area-back">
                        <p>Extensão do C com suporte a orientação a objetos.</p>
                    </div>
                    </div>
                </div>

                <div className="tech-cards">
                    <div className="front-and-back-area">
                    <div className="area-front">
                        <div className="thumbmail">
                        <img id="img1" src={CSharp} />
                        </div>
                        <p>C#</p>
                    </div>
                    <div className="area-back">
                        <p>Linguagem da Microsoft usada em aplicações .NET.</p>
                    </div>
                    </div>
                </div>

                <div className="tech-cards">
                    <div className="front-and-back-area">
                    <div className="area-front">
                        <div className="thumbmail">
                        <img id="img1" src={SQL} />
                        </div>
                        <p>SQL</p>
                    </div>
                    <div className="area-back">
                        <p>Linguagem de consulta para bancos de dados relacionais.</p>
                    </div>
                    </div>
                </div>

                <div className="tech-cards">
                    <div className="front-and-back-area">
                    <div className="area-front">
                        <div className="thumbmail">
                        <img id="img1" src={VHDL} />
                        </div>
                        <p>VHDL</p>
                    </div>
                    <div className="area-back">
                        <p>Descrição de hardware usada em FPGAs e ASICs.</p>
                    </div>
                    </div>
                </div>
            </div>

        </section>

    );
}