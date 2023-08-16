import './jogo.css';

import logoimg from './doom-1-capa.png';

import Layout from "../../components/Layout";

export default function Jogo(){

  return(
    <div className='container-jogo'>

      <div>
        <Layout/>
      </div>

      <div className='descricao'>
        <img src={logoimg} alt= 'capa-jogo'/>
        <h1>Você é um dos melhores fuzileiros navais da Terra e acaba de ser enviado para a instalação de pesquisa de Marte da United Space Carrier (UAC). O experimento funciona mal e cria um portal para o inferno. A instalação de pesquisa é invadida por demônios. Você deve cometer suicídio sozinho.</h1>
      </div>





      <div className='comentarios'>
        Write your post:

      </div>
      
    </div>
    )
}