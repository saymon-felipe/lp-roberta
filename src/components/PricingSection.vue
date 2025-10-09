<template>
  <section class="pricing-section">
    <div class="container">
      <h2 class="prevent-flicker" v-scroll-reveal="{ delay: 100, origin: 'bottom' }">Escolha o pacote ideal para você</h2>
      <p class="section-subtitle prevent-flicker" v-scroll-reveal="{ delay: 300, origin: 'bottom' }">Ofertas especiais para começar sua jornada de autoconhecimento e bem-estar. Todos os pacotes incluem primeira sessão gratuita!</p>
      
      <div class="pricing-grid prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
        <div class="pricing-card">
          <h3>Sessão Individual</h3>
          <p class="description">Ideal para quem quer experimentar ou tem necessidades pontuais.</p>
          <div class="price">R$ 180 <span class="period">por sessão</span></div>
          <ul class="features-list">
            <li><font-awesome-icon :icon="['fas', 'check']" /> Duração de 50 minutos</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Atendimento presencial ou online</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Relatório de evolução</li>
          </ul>
          <a href="#contato" class="btn btn-secondary">Agendar Consulta</a>
        </div>

        <div class="pricing-card popular">
          <span class="popular-badge">Mais Popular</span>
          <h3>Pacote Bem-Estar</h3>
          <p class="description">Perfeito para trabalhar questões específicas com continuidade.</p>
          <div class="price">R$ 650 <span class="period">4 sessões</span></div>
          <ul class="features-list">
            <li><font-awesome-icon :icon="['fas', 'check']" /> 4 sessões de 50 minutos</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Desconto de 10%</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Atendimento presencial ou online</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Relatórios detalhados</li>
          </ul>
          <a href="#contato" class="btn btn-primary">Escolher Este Pacote</a>
        </div>

        <div class="pricing-card">
          <h3>Pacote Transformação</h3>
          <p class="description">Para mudanças profundas e duradouras na sua vida.</p>
          <div class="price">R$ 1.440 <span class="period">8 sessões</span></div>
          <ul class="features-list">
            <li><font-awesome-icon :icon="['fas', 'check']" /> 8 sessões de 50 minutos</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Desconto de 15%</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Suporte via WhatsApp</li>
            <li><font-awesome-icon :icon="['fas', 'check']" /> Sessão de revisão após 3 meses</li>
          </ul>
          <a href="#contato" class="btn btn-secondary">Agendar Consulta</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'PricingSection'
}
</script>

<style scoped>
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: center;
}
.pricing-card {
    background: var(--secondary-color);
    padding: 40px;
    border-radius: var(--border-radius);
    text-align: center;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}
.pricing-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}
.pricing-card.popular {
    border-color: var(--primary-color);
    transform: scale(1.05);
    position: relative;
    background: white;
}
.popular-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
}
.description {
    min-height: 60px;
}
.price {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 20px 0;
}
.price .period {
    font-size: 1rem;
    font-weight: 400;
    color: var(--light-text);
    display: block;
}
.features-list {
    list-style: none;
    text-align: left;
    margin: 30px 0;
    min-height: 150px;
}
.features-list li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.features-list .svg-inline--fa {
    color: var(--success-color);
}
.btn {
    width: 100%;
}
@media (max-width: 992px) {
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    .pricing-card.popular {
        transform: scale(1);
    }
}
</style>