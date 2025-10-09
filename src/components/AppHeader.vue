<template>
  <header class="main-header prevent-flicker" v-scroll-reveal="{ delay: 300, origin: 'bottom' }">
    <div class="container">
      <a href="#inicio" class="logo">
        <img src="@/assets/images/logo.png" alt="Logo Roberta Romanholi" />
      </a>
      <nav :class="{ 'nav-active': isMobileMenuOpen }">
        <a href="#inicio" @click="closeMobileMenu">Início</a>
        <a href="#sobre" @click="closeMobileMenu">Sobre</a>
        <a href="#terapia" @click="closeMobileMenu">Terapia</a>
        <a href="#depoimentos" @click="closeMobileMenu">Depoimentos</a>
        <a href="#pacotes" @click="closeMobileMenu">Pacotes</a>
      </nav>
      <div class="header-actions">
        <a href="#contato" class="btn btn-secondary">Contato</a>
        <a href="#pacotes" class="btn btn-primary">Agendar</a>
      </div>
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Abrir menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobileMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
}
</script>

<style scoped>
/* (O CSS do AppHeader da resposta anterior pode ser usado aqui sem alterações) */
.main-header {
  background: white;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.main-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--dark-text);
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
nav {
  display: flex;
  gap: 30px;
}
nav a {
  text-decoration: none;
  color: var(--dark-text);
  font-weight: 500;
  transition: color 0.3s;
}
nav a:hover {
  color: var(--primary-color);
}
.header-actions {
  display: flex;
  gap: 15px;
}
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

@media (max-width: 992px) {
  nav {
    display: none;
    position: absolute;
    top: 70px; /* Altura do header */
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    gap: 20px;
    align-items: center;
  }
  nav.nav-active {
    display: flex;
  }
  .header-actions .btn-secondary {
      display: none;
  }
  .mobile-menu-toggle {
    display: block;
  }
  .mobile-menu-toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: var(--dark-text);
      margin: 5px 0;
      transition: all 0.3s;
  }
}
</style>