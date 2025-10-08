<template>
  <div id="app-wrapper">
    <AppHeader />
    <main>
      <HeroSection id="inicio" />
      <AboutSection id="sobre" />
      <ProcessSection id="terapia" />
      <BenefitsSection />
      <TestimonialsSection id="depoimentos" />
      <PricingSection id="pacotes" />
      <ScheduleSection />
      <LocationSection id="contato" />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProcessSection from './components/ProcessSection.vue';
import BenefitsSection from './components/BenefitsSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import PricingSection from './components/PricingSection.vue';
import ScheduleSection from './components/ScheduleSection.vue';
import LocationSection from './components/LocationSection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    ProcessSection,
    BenefitsSection,
    TestimonialsSection,
    PricingSection,
    ScheduleSection,
    LocationSection,
    AppFooter
  }
}
</script>