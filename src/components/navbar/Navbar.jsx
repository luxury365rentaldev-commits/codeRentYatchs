import { NavLink, Link } from 'react-router-dom'
import style from './navbar.module.scss'
import { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { CONSTANTES } from '../../utils/constants'

const logo = '/assets/logo_white.svg'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [witdth, height] = useWindowSize()

  const handleMenu = () => {
    if (witdth < 800) {
      setActive(prev => !prev)
    }
  }

  return (
    <header className={`${style.container} ${active ? style.active : ''}`}>
      <nav className={style.nav}>
        <Link
          to='/'
          className={style.figure}>
          <figure>
            <img
              src={logo}
              alt='logo'
              className={style.logo}
            />
          </figure>
        </Link>

        <div
          className={style.hamburguer}
          onClick={handleMenu}>
          <div className={style.hamburguerItem}></div>
          <div className={style.hamburguerItem}></div>
          <div className={style.hamburguerItem}></div>
        </div>
        <ul className={style.ul}>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='/'>
              Home
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='yachts'>
              Yachts
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='jetskies'>
              Jetskies
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='transportation'>
              Transportation
            </NavLink>
          </li>
          <li className={style.li}>
            <NavLink
              onClick={handleMenu}
              className={style.link}
              to='about-us'>
              About us
            </NavLink>
          </li>
        </ul>

        <a
          href={CONSTANTES.linkWhatsapp}
          target='_blank'
          className={style.contact}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar
