import { CONSTANTES } from '../../utils/constants'
import styles from './footer.module.scss'

const logoIg = '/assets/instagram.png'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://www.instagram.com/luxury305rentals/?igshid=NTc4MTIwNjQ2YQ%3D%3D'
        target='_blank'
        className={styles.follow}>
        <p>Follow Us</p>
        <img
          src={logoIg}
          alt='Logo instagram'
        />
      </a>

      <p>
        <small>
          © Luxury 305 Rentals, All Rights Reserved. More information
          <a
            href={CONSTANTES.linkWhatsapp}
            target='_blank'
            className={styles.link}>
            Contact Us
          </a>
        </small>
      </p>
    </footer>
  )
}

export default Footer
