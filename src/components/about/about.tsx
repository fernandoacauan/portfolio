import Corpo from './corpo/corpoAbout'
import Creditos from "../creditos/creditos";
import Navbar from "../navbar/navbar";

export default function About() {
    return(
        <div className="container">
            <Navbar></Navbar>
            <Corpo></Corpo>
            <Creditos></Creditos>
        </div>
    );
}