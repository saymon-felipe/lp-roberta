<template>
  <section class="benefits-section">
    <div class="container">
      <h2>Por que a Terapia é importante?</h2>
      <p class="section-subtitle">A terapia é um investimento em você mesmo. É um espaço seguro para explorar seus sentimentos, desenvolver habilidades emocionais e criar uma vida mais plena e significativa.</p>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="icon-wrapper"><font-awesome-icon :icon="['fas', 'lightbulb']" /></div>
          <h3>Autoconhecimento</h3>
          <p>Desenvolva uma maior consciência sobre seus pensamentos, emoções e comportamentos.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper"><font-awesome-icon :icon="['fas', 'heart']" /></div>
          <h3>Bem-estar Emocional</h3>
          <p>Aprenda técnicas para gerenciar ansiedade, estresse e outras dificuldades emocionais.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper"><font-awesome-icon :icon="['fas', 'user-group']" /></div>
          <h3>Relacionamentos Saudáveis</h3>
          <p>Melhore sua comunicação e construa vínculos mais profundos e significativos.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper"><font-awesome-icon :icon="['fas', 'compass']" /></div>
          <h3>Novas Perspectivas</h3>
          <p>Descubra formas diferentes de encarar desafios e encontrar soluções criativas.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper"><font-awesome-icon :icon="['fas', 'shield-halved']" /></div>
          <h3>Resiliência</h3>
          <p>Fortaleça sua capacidade de lidar com adversidades e se adaptar às mudanças.</p>
        </div>
        <div class="benefit-card">
          <div class="icon-wrapper"><font-awesome-icon :icon="['fas', 'star']" /></div>
          <h3>Qualidade de Vida</h3>
          <p>Alcance maior satisfação pessoal e profissional em todas as áreas da sua vida.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'BenefitsSection'
}
</script>

<style scoped>
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
.benefit-card {
    background-color: var(--secondary-color);
    padding: 30px;
    border-radius: var(--border-radius);
}
.icon-wrapper {
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    color: var(--primary-color);
    font-size: 1.8rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.benefit-card h3 {
    margin-bottom: 10px;
}

@media (max-width: 992px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 768px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }
}
</style>