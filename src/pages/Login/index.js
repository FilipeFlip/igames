import './login.css';


export default function Login(){
    return(
        <div className='container-logar'>

          <div className="area-input">
            <h1>Login</h1>
            <div className='email'>
              <input placeholder='Email' />
            </div>

            <div className='senha'>
              <input placeholder='Senha' />
            </div>

            <button>
              Entrar
            </button>
          </div>

        </div>

    )
}