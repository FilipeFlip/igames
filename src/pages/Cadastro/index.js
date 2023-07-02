import './cadastro.css';


export default function Cadastro(){
    return(
        <div className='container-cadastrar'>

          <div className="area-input">
            <h1>Cadastrar</h1>
            <div className='email'>
              <input placeholder='Email' />
            </div>
            <div className='usuario'>
              <input placeholder='Usuário' />
            </div>
            <div className='senha'>
              <input placeholder='Senha' />
            </div>

            <button>
              Cadastrar
            </button>
          </div>


          <div className='area-cadastrado'>
            <h2>Bem Vindo(a) de volta</h2>
            <h3>Acesse sua conta</h3>
            
            <button className='botao-login'>
              <a href="/login"> Logar </a>
            </button>
          </div>
          


        </div>

    )
}