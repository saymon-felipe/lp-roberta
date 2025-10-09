<template>
  <section class="location-section">
    <div class="container">
      <h2 class="prevent-flicker" v-scroll-reveal="{ delay: 100, origin: 'bottom' }">Localização do consultório</h2>
      <p class="section-subtitle prevent-flicker" v-scroll-reveal="{ delay: 300, origin: 'bottom' }">Estou localizada em uma região de fácil acesso no centro de São Paulo, com opções de transporte público e estacionamento próximo.</p>
      <div class="location-grid prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
        <div class="map-placeholder">
            <!-- Google Maps Preview -->
            <iframe
              width="100%"
              height="100%"
              style="border:0; border-radius: var(--border-radius);"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av+Arthur+Thomas,+831+Londrina&output=embed">
            </iframe>
        </div>
        <div class="info-cards">
            <div class="info-card">
                <h4><font-awesome-icon :icon="['fas', 'location-dot']" /> Endereço</h4>
                <p>Av Arthur Thomaz, 831 Sala 4 <br>Londrina - PR<br>CEP: 86065-000</p>
            </div>
            <div class="info-card">
                <h4><font-awesome-icon :icon="['fas', 'clock']" /> Horários de Atendimento</h4>
                <p><strong>Segunda a Quinta:</strong> 8h - 20h<br><strong>Sexta:</strong> 8h - 18h<br><strong>Sábado:</strong> 9h - 15h</p>
            </div>
        </div>
      </div>
      <div class="whatsapp-contact prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
        <p class="whatsapp-text">Fale comigo diretamente pelo WhatsApp para agendar sua consulta ou tirar dúvidas!</p>
        <a
          href="https://wa.me/5543999896773?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
          Entrar em contato via WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'LocationSection'
}
</script>

<style scoped>
.location-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 50px;
}
.map-placeholder {
    background: var(--secondary-color);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    text-align: center;
}
.map-placeholder p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
}
.info-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.info-card {
    flex: 1;
    background: var(--secondary-color);
    padding: 25px;
    border-radius: var(--border-radius);
}
.info-card h4 {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.info-card h4 .svg-inline--fa {
    color: var(--primary-color);
}
.whatsapp-contact {
    margin-top: 50px;
    text-align: center;
}
.whatsapp-text {
    font-size: 1.2rem;
    margin-bottom: 20px;
}
@media (max-width: 992px) {
    .location-grid {
        grid-template-columns: 1fr;
    }
}
</style>