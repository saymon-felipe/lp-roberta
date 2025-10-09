<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col about">
          <h4>Roberta Romanholi</h4>
          <p>Psicóloga clínica especializada em terapia cognitivo-comportamental. Oferecendo um espaço seguro para seu crescimento pessoal e bem-estar emocional.</p>
          <p>CRP 08/17110 - Ativa desde 2010</p>
        </div>
        <div class="footer-col navigation">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#terapia">Importância da Terapia</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#pacotes">Pacotes e Promoções</a></li>
          </ul>
        </div>
        <div class="footer-col contact">
          <h4>Contato</h4>
          <p><font-awesome-icon :icon="['fas', 'phone']" /> (43) 9 9989-6773</p>
          <p><font-awesome-icon :icon="['fas', 'envelope']" /> contato@robertaromanholi.com.br</p>
          <p><font-awesome-icon :icon="['fas', 'location-dot']" /> Av. Arthur Thomaz, 831 Sala 4, Londrina - PR</p>
        </div>
        <div class="footer-col social">
            <h4>Redes Sociais</h4>
            <div class="social-icons">
                <a href="https://www.instagram.com/psi.romanholi_roberta/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="#" v-if="false"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                <a href="#" v-if="false"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ year }} Roberta Romanholi - Psicóloga CRP 08/17110. Todos os direitos reservados.</p>
        <p>Este site segue o Código de Ética Profissional do Psicólogo e a Lei de Proteção de Dados (LGPD).</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
.main-footer {
    background: var(--footer-background);
    color: #ccc;
    padding: 60px 0 30px 0;
}
.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
}
.footer-col h4 {
    color: white;
    margin-bottom: 20px;
    font-weight: 600;
}
.footer-col p {
    color: #ccc;
    margin-bottom: 10px;
    display: flex;
    align-items: start;
    gap: 10px;
}
.footer-col.navigation ul {
    list-style: none;
}
.footer-col.navigation a {
    color: #ccc;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: color 0.3s;
}
.footer-col.navigation a:hover {
    color: var(--primary-color);
}
.social-icons a {
    color: #ccc;
    font-size: 1.5rem;
    margin-right: 15px;
    transition: color 0.3s;
}
.social-icons a:hover {
    color: var(--primary-color);
}
.footer-bottom {
    border-top: 1px solid #555;
    padding-top: 30px;
    text-align: center;
    font-size: 0.9rem;
}
.footer-bottom p {
    justify-content: center;
}
@media (max-width: 992px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .footer-col p {
        justify-content: center;
    }
}
</style>