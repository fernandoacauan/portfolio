import CorpoProjeto from "./CorpoProjeto/CorpoProjeto";
import Creditos from "../creditos/creditos";
import Navbar from "../navbar/navbar";

export default function Projeto() {
    return(
        <>
           <div className="container">
                 <Navbar></Navbar>
                 <CorpoProjeto>
                 </CorpoProjeto>
                 <Creditos></Creditos>
               </div>
        </>
    );
}