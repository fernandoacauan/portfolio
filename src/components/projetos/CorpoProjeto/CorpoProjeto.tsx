import './CorpoProjeto.css'

export default function Projetos() {
    return (
        <section id="projetos">
            <h1 className="projetos-section-title">WEB</h1>
            <div className="projetos-container">
                <div className="projeto-card">
                    <div className="projeto-img">
                        {/* <img src={Web1} alt="projeto" /> se tiver imagem real */}
                    </div>
                    <p className="projeto-text">
                        Site pessoal desenvolvido em React, com foco em UI/UX e responsividade.
                    </p>
                    <p className="projeto-stack"><strong>Stack:</strong> React, CSS, Vite</p>
                    <button className="projeto-btn">FIND OUT MORE</button>
                </div>
                {/* outros cards... */}
            </div>

            <h1 className="projetos-section-title">EMBEDDED</h1>
            <div className="projetos-container">
                <div className="projeto-card">
                    <div className="projeto-img" />
                    <p className="projeto-text">
                        Sistema de controle de temperatura usando microcontrolador e sensores analógicos.
                    </p>
                    <p className="projeto-stack"><strong>Stack:</strong> C, STM32, VHDL</p>
                    <button className="projeto-btn">FIND OUT MORE</button>
                </div>
            </div>
        </section>
    );
}
