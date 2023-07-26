import React, { useRef, useLayoutEffect } from 'react'

import logoimg from './perfilic.png';

import  {BiSearchAlt} from "react-icons/bi";


function Layout() {
  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('mainHeader')
    let fixedTop = stickyHeader.current.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add('fixedTop')
      } else {
        mainHeader.classList.remove('fixedTop')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])
  return (
      <div className="mainHeader" id="mainHeader" ref={stickyHeader}>

        <div className='pesquisa'>
          <input placeholder='Pesquisar' />
          <button class='pesquisar'> <BiSearchAlt size={24} color= "#FFF"/></button>
        </div>

        <div className='perfil'>
          
          <button className='perfil'> <img src={logoimg} alt= 'img-perfil'/> 
          <p>Usuário</p>
          </button>
        </div>

        <div className='sair'>
          <button className='sair'> Sair</button>
        </div>
        
      </div>
      

  )
}
export default Layout