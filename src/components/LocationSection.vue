<template>
  <section class="location-section">
    <div class="container">
      <h2>Localização do consultório</h2>
      <p class="section-subtitle">Estou localizada em uma região de fácil acesso no centro de São Paulo, com opções de transporte público e estacionamento próximo.</p>
      <div class="location-grid">
        <div class="map-placeholder">
            <p>Mapa do Consultório</p>
            <a href="#" class="btn btn-primary">Abrir no Google Maps</a>
        </div>
        <div class="info-cards">
            <div class="info-card">
                <h4><font-awesome-icon :icon="['fas', 'location-dot']" /> Endereço</h4>
                <p>Rua Pernambuco, Centro <br>Londrina - PR<br>CEP: 86.020-121</p>
            </div>
            <div class="info-card">
                <h4><font-awesome-icon :icon="['fas', 'clock']" /> Horários de Atendimento</h4>
                <p><strong>Segunda a Quinta:</strong> 8h - 20h<br><strong>Sexta:</strong> 8h - 18h<br><strong>Sábado:</strong> 9h - 15h</p>
            </div>
        </div>
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
@media (max-width: 992px) {
    .location-grid {
        grid-template-columns: 1fr;
    }
}
</style>