import './corpoContact.css'

export default function CorpoContact()
{
    return(
        <div className="body">
            <h2 className="contact-title">CONTACT ME</h2>
            <form className="contact-form">
                <label htmlFor="nome">Name:</label>
                <input id="nome" type="text" className="input-box" />

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" className="input-box" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" className="input-message" rows={5} />

                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}