<template>
  <section class="hero-section" style="padding-top: 120px;">
    <div class="container">
      <div class="hero-content prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
        <h1>Cuidando da sua <span class="highlight">saúde mental</span> com acolhimento e profissionalismo</h1>
        <p>Sou Roberta Romanholi, psicóloga clínica com mais de 15 anos de formação e 8 de atuação contínua na comunidade. Acredito que todos merecem um espaço seguro para se autoconhecer.</p>
        <div class="stats">
          <span><font-awesome-icon :icon="['fas', 'id-card']" /> CRP 08/17110</span>
          <span><font-awesome-icon :icon="['fas', 'briefcase']" /> +15 anos de experiência</span>
          <span><font-awesome-icon :icon="['fas', 'user-group']" /> +500 atendimentos</span>
        </div>
        <div class="hero-actions">
          <a href="#pacotes" class="btn btn-primary">Agendar Primeira Consulta</a>
          <a href="#sobre" class="btn btn-secondary">Conhecer Meu Trabalho</a>
        </div>
      </div>
      <div class="hero-image prevent-flicker" v-scroll-reveal="{ delay: 700, origin: 'bottom' }">
        <img src="@/assets/images/roberta-hero.webp" alt="Psicóloga Roberta Romanholi">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
/* (O CSS do HeroSection da resposta anterior pode ser usado aqui, com a adição abaixo) */
.hero-section {
  background-color: var(--secondary-color);
  padding-top: 60px;
  padding-bottom: 60px;
}
.hero-section .container {
  display: flex;
  align-items: center;
  gap: 50px;
}
.hero-content {
  flex: 1;
}
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
.highlight {
  color: var(--primary-color);
}
.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 500px;
}
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 40px;
  color: var(--light-text);
  font-weight: 500;
}
.stats span {
    display: flex;
    align-items: center;
    gap: 8px;
}
.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.hero-image {
  flex: 0 0 40%;
  max-width: 450px;
}
.hero-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
}

@media (max-width: 992px) {
  .hero-image {
      display: none; /* Opcional: esconder a imagem em telas médias */
  }
}

@media (max-width: 768px) {
  .hero-section .container {
    flex-direction: column;
    text-align: center;
  }
  .hero-image {
    display: block;
    margin-top: 40px;
    flex-basis: auto;
    width: 80%;
  }
  h1 {
    font-size: 2.5rem;
  }
  .stats, .hero-actions {
    justify-content: center;
  }
}
</style>