import './CorpoProjeto.css'
import Web1 from '../../../assets/calc.jpg'
import Web2 from '../../../assets/conversor.jpg'
import Embedded1 from '../../../assets/vertigo.webp'
export default function Projetos() {
    return (
        <section id="projetos">
            <h1 className="projetos-section-title">WEB</h1>
            <div className="projetos-container">
                <div className="projeto-card">
                    <img className="project-img" src={Web1} alt="projeto"></img>
                    <p className="projeto-text">
                        Site pessoal desenvolvido em React, com foco em UI/UX e responsividade.
                    </p>
                    <p className="projeto-stack"><strong>Stack:</strong> React, CSS, Vite</p>
                    <button className="projeto-btn">FIND OUT MORE</button>
                </div>
                <div className="projeto-card">
                    <img className="project-img" src={Web2} alt="projeto"></img>
                    <p className="projeto-text">
                        Site pessoal desenvolvido em React, com foco em UI/UX e responsividade.
                    </p>
                    <p className="projeto-stack"><strong>Stack:</strong> React, CSS, Vite</p>
                    <button className="projeto-btn">FIND OUT MORE</button>
                </div>
            </div>

            <h1 className="projetos-section-title">EMBEDDED</h1>
            <div className="projetos-container">
                <div className="projeto-card">
                    <img className="project-img" src={Embedded1} alt="projeto"/>
                    <p className="projeto-text">
                        Emulador de PlayStation1 denominado VertigoSX. Ainda em construção.
                    </p>
                    <p className="projeto-stack"><strong>Stack:</strong> C++</p>
                    <button className="projeto-btn">FIND OUT MORE</button>
                </div>
            </div>
        </section>
    );
}
