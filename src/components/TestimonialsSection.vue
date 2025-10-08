<template>
  <section class="testimonials-section">
    <div class="container">
      <h2>O que dizem meus pacientes</h2>
      <p class="section-subtitle">Cada história é única, mas o objetivo é o mesmo: proporcionar bem-estar, crescimento pessoal e uma vida mais plena e satisfatória.</p>
      <div class="testimonials-grid">
        
        <div class="testimonial-card">
          <font-awesome-icon class="quote-icon" :icon="['fas', 'quote-left']" />
          <div class="stars">
            <font-awesome-icon v-for="n in 5" :key="n" :icon="['fas', 'star']" />
          </div>
          <p class="testimonial-text">"A Roberta me ajudou a superar uma fase muito difícil da minha vida. Sua abordagem carinhosa e profissional me deu forças para encontrar meu caminho novamente."</p>
          <div class="author">
            <h4>Maria Silva</h4>
            <span>32 anos</span>
          </div>
        </div>

        <div class="testimonial-card">
          <font-awesome-icon class="quote-icon" :icon="['fas', 'quote-left']" />
          <div class="stars">
            <font-awesome-icon v-for="n in 5" :key="n" :icon="['fas', 'star']" />
          </div>
          <p class="testimonial-text">"Procurei terapia para lidar com o estresse do trabalho. As sessões com a Roberta foram transformadoras. Aprendi técnicas que uso até hoje."</p>
          <div class="author">
            <h4>João Santos</h4>
            <span>28 anos</span>
          </div>
        </div>

        <div class="testimonial-card">
          <font-awesome-icon class="quote-icon" :icon="['fas', 'quote-left']" />
          <div class="stars">
            <font-awesome-icon v-for="n in 5" :key="n" :icon="['fas', 'star']" />
          </div>
          <p class="testimonial-text">"Depois de anos evitando terapia, finalmente encontrei na Roberta alguém que me fez sentir verdadeiramente acolhida. Suas palavras são sempre certeiras."</p>
          <div class="author">
            <h4>Ana Carolina</h4>
            <span>45 anos</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'TestimonialsSection'
}
</script>

<style scoped>
.testimonials-section {
    background-color: var(--secondary-color);
}
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
.testimonial-card {
    background: white;
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--card-shadow);
}
.quote-icon {
    font-size: 2rem;
    color: var(--primary-color);
    opacity: 0.5;
    margin-bottom: 15px;
}
.stars {
    color: #FFC107; /* Amarelo para estrelas */
    margin-bottom: 15px;
}
.testimonial-text {
    margin-bottom: 20px;
    font-style: italic;
}
.author h4 {
    margin-bottom: 5px;
}
.author span {
    font-size: 0.9rem;
    color: var(--light-text);
}

@media (max-width: 992px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
}
</style>