import './corpoContact.css'

export default function CorpoContact()
{
    return(
        <div className="body">
            <p>CONTACT ME</p>
            <div className="dados">
                <p>Nome:</p>
                <input className="caixa"></input>
                <p>Email:</p>
                <input className="caixa"></input>  
                <p>Message:</p>
                <input className="caixa-message"></input> 
            </div>
            <button>ENVIAR</button>
        </div>
    );
}