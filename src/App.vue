<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import FreshnessSection from './components/FreshnessSection.vue'
import StorySection from './components/StorySection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import LocationSection from './components/LocationSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <ProductsSection />
    <FreshnessSection />
    <StorySection />
    <ReviewsSection />
    <LocationSection />
    <CtaSection />
  </main>
  <SiteFooter />
</template>
