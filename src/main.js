import { createApp } from 'vue'
import App from './App.vue'

// Importar CSS Global
import './assets/css/global.css'
import { vScrollReveal } from './directives/scrollReveal'

// Configuração do Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importar os ícones que vamos usar (estilo Sólido)
import {
  faGraduationCap, faIdCard, faHeartPulse, faBriefcase, faLightbulb,
  faHeart, faUserGroup, faCompass, faShieldHalved, faStar, faCheck,
  faCalendarDays, faGift, faHandHoldingHeart, faPhone, faEnvelope,
  faLocationDot, faRoute, faClock, faQuoteLeft, faStar as faStarSolid
} from '@fortawesome/free-solid-svg-icons'

// Importar ícones de Marca (para redes sociais)
import { faWhatsapp, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Adicionar os ícones à biblioteca
library.add(
  faGraduationCap, faIdCard, faHeartPulse, faBriefcase, faLightbulb,
  faHeart, faUserGroup, faCompass, faShieldHalved, faStar, faCheck,
  faCalendarDays, faGift, faHandHoldingHeart, faPhone, faEnvelope,
  faLocationDot, faRoute, faClock, faWhatsapp, faInstagram, faFacebook,
  faLinkedin, faQuoteLeft, faStarSolid
)

const app = createApp(App)

app.directive('scroll-reveal', vScrollReveal)

// Registrar o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')