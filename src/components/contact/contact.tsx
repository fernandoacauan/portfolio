import Creditos from "../creditos/creditos";
import Navbar from "../navbar/navbar";
import CorpoContact from "./corpo/corpoContact";

export default function Contact() {
    return(
        <div className="container">
            <Navbar></Navbar>
            <CorpoContact></CorpoContact>
            <Creditos></Creditos>
        </div>
    );
}