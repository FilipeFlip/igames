import './jogo.css';

import logoimg from './doom-1-capa.png';

import Layout from './components/Layout';

export default function Jogo(){

  return(
    <div className='container-jogo'>

      <div>
        <Layout/>
      </div>

      <div className='descricao'>

        <img src={logoimg} alt= 'capa-jogo'/>
      </div>


      <div class="header" id="myHeader">
        

        <h3>My Header</h3>
      </div>

      <div className='comentarios'>
        Write your post:
        <textarea name="post-area" rows={4} cols={40} />
      </div>
      
    </div>
    )
}