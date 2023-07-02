import './login.css';


export default function Login(){
    return(
        <div className='container-logar'>

          <div className="area-logar">
            <h1>Login</h1>
            <div className='email'>
              <input placeholder='Email' />
            </div>

            <div className='senha'>
              <input placeholder='Senha' />
            </div>

            <button className='botao-login'>
              <a href="/cadastro"> Logar </a>
            </button>

            <div>
              <h2>Novo por aqui? <a href="/cadastro"> Criar Conta </a> </h2>
            </div>

          </div>

          <div className='area-limpa' style={{ backgroundImage: "url(/fundo.png)" }}  >

            
          </div>

        </div>

    )
}