<template>
  <section class="process-section">
    <div class="container">
      <h2 class="prevent-flicker" v-scroll-reveal="{ delay: 100, origin: 'bottom' }">Como funciona o <span class="highlight">processo terapêutico?</span></h2>
      <p class="section-subtitle prevent-flicker" v-scroll-reveal="{ delay: 300, origin: 'bottom' }">Minha abordagem é baseada na Terapia Cognitivo-Comportamental, focando em resultados práticos e duradouros.</p>
      <div class="steps-grid prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3>Acolhimento</h3>
          <p>Primeira consulta para nos conhecermos e entender suas necessidades.</p>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <h3>Avaliação</h3>
          <p>Análise detalhada da situação atual e definição de objetivos claros.</p>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <h3>Tratamento</h3>
          <p>Sessões regulares com técnicas personalizadas para o seu caso.</p>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <h3>Evolução</h3>
          <p>Acompanhamento contínuo do progresso e ajustes necessários.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'ProcessSection'
}
</script>

<style scoped>
.process-section {
    background-color: var(--secondary-color);
}
.highlight {
  color: var(--primary-color);
}
.steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 50px;
}
.step-card {
    background: white;
    padding: 30px;
    border-radius: var(--border-radius);
    text-align: center;
    box-shadow: var(--card-shadow);
}
.step-number {
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 20px auto;
}
.step-card h3 {
    margin-bottom: 10px;
}

@media (max-width: 992px) {
    .steps-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 768px) {
    .steps-grid {
        grid-template-columns: 1fr;
    }
}
</style>