<template>
  <section class="about-section">
    <div class="container">
      <div class="about-image prevent-flicker" v-scroll-reveal="{ delay: 300, origin: 'bottom' }">
        <img src="@/assets/images/ambiente-acolhedor.webp" alt="Ambiente acolhedor do consultório">
        <div class="image-card">
          <h3>Ambiente Acolhedor</h3>
          <p>Um espaço pensado para seu conforto e bem-estar</p>
        </div>
      </div>
      <div class="about-content prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
        <h2>Sobre Roberta Romanholi</h2>
        <p>Formada em Psicologia pela Universidade de São Paulo, com especialização em Terapia Cognitivo-Comportamental e Mindfulness. Minha missão é oferecer um espaço seguro e acolhedor para que você possa explorar seus sentimentos, desenvolver novas perspectivas e alcançar o bem-estar emocional.</p>
        <p>Acredito que cada pessoa é única e merece um atendimento personalizado. Por isso, adapto minha abordagem às suas necessidades específicas, sempre respeitando seu ritmo e suas particularidades.</p>
        <ul class="info-list">
          <li><font-awesome-icon :icon="['fas', 'graduation-cap']" /> <strong>Formação:</strong> Psicologia - USP, Especialização em TCC</li>
          <li><font-awesome-icon :icon="['fas', 'id-card']" /> <strong>Registro:</strong> CRP 08/17110 Ativa desde 2010</li>
          <li><font-awesome-icon :icon="['fas', 'heart-pulse']" /> <strong>Especialidades:</strong> Ansiedade, Depressão, Relacionamentos</li>
          <li><font-awesome-icon :icon="['fas', 'briefcase']" /> <strong>Experiência:</strong> +500 atendimentos, +15 anos de prática</li>
        </ul>
        <a href="#contato" class="btn btn-primary">Agendar Consulta</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section .container {
    display: flex;
    align-items: center;
    gap: 60px;
}
.about-image {
    flex: 0 0 45%;
    position: relative;
}
.about-image img {
    width: 100%;
    border-radius: var(--border-radius);
    display: block;
}
.image-card {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--card-shadow);
    width: 80%;
    text-align: center;
}
.about-content {
    flex: 1;
}
.about-content h2 {
    text-align: left;
    margin-bottom: 20px;
}
.about-content p {
    margin-bottom: 20px;
}
.info-list {
    list-style: none;
    margin: 30px 0;
}
.info-list li {
    display: flex;
    align-items: start;
    gap: 15px;
    margin-bottom: 15px;
}
.info-list .svg-inline--fa {
    color: var(--primary-color);
    font-size: 1.2rem;
    margin-top: 4px;
}
@media (max-width: 992px) {
    .about-section .container {
        flex-direction: column;
    }
    .about-content {
        margin-top: 60px;
    }
    .about-content h2 {
        text-align: center;
    }
}
</style>