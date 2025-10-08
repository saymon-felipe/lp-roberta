<template>
  <section class="schedule-section">
    <div class="container">
        <div class="content-wrapper">
            <h2>Agende sua consulta</h2>
            <p>Dê o primeiro passo em direção ao seu bem-estar. Vamos conversar sobre suas necessidades e encontrar o melhor caminho para sua jornada terapêutica.</p>
            <div class="contact-methods">
                <p><font-awesome-icon :icon="['fas', 'phone']" /> (11) 99999-9999</p>
                <p><font-awesome-icon :icon="['fas', 'envelope']" /> contato@robertaromanholi.com.br</p>
                <p><font-awesome-icon :icon="['fab', 'whatsapp']" /> WhatsApp: (11) 99999-9999</p>
            </div>
        </div>
        <div class="form-wrapper">
            <h3>Comece sua jornada hoje</h3>
            <p>Clique no botão abaixo para agendar. É rápido, fácil e sem compromisso.</p>
            <a href="#contato" class="btn btn-primary">Agendar Minha Consulta</a>
            <span><font-awesome-icon :icon="['fas', 'gift']" /> Primeira consulta gratuita na compra de qualquer pacote</span>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'ScheduleSection'
}
</script>

<style scoped>
.schedule-section {
    background-color: var(--primary-color);
    color: white;
}
.schedule-section .container {
    display: flex;
    gap: 40px;
    align-items: center;
}
.content-wrapper {
    flex: 1;
}
.content-wrapper h2 {
    text-align: left;
    color: white;
}
.content-wrapper p, .contact-methods p {
    color: rgba(255, 255, 255, 0.9);
}
.contact-methods {
    margin-top: 20px;
}
.contact-methods p {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.form-wrapper {
    background: white;
    color: var(--dark-text);
    padding: 40px;
    border-radius: var(--border-radius);
    text-align: center;
    flex-basis: 400px;
}
.form-wrapper .btn {
    margin: 20px 0;
}
.form-wrapper span {
    font-size: 0.9rem;
    color: var(--light-text);
}
.form-wrapper span .svg-inline--fa {
    color: var(--primary-color);
}
@media (max-width: 768px) {
    .schedule-section .container {
        flex-direction: column;
    }
    .content-wrapper h2 {
        text-align: center;
    }
    .content-wrapper {
        text-align: center;
    }
}
</style>