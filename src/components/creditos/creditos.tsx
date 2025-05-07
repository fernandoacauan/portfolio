import './creditos.css'

import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
export default function Creditos() {
    return (
        <div className="footer">
            <div className="copyright">
                <div className="footer-content">
                    <p>Copyright © Fernando Acauan 2025.</p>
                    <div className="social">
                        <a href="https://github.com/fernandoacauan" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="Github"></img>
                        </a>
                        <a href="https://linkedin.com/in/fernando-acauan-0556122a9" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="Linkedin"></img>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}