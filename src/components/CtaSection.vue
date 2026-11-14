<script setup>
import CroissantArt from './CroissantArt.vue'
import { INSTAGRAM_URL, MAPS_URL, ICONS } from '../data'
</script>

<template>
  <section class="cta-wrap">
    <div class="container">
      <div v-reveal class="cta">
        <img class="ico ico-a float ico3d" :src="ICONS.megaphone" alt="" loading="lazy" />
        <img class="ico ico-b float ico3d" :src="ICONS.thumb" alt="" loading="lazy" style="animation-delay: -3s" />

        <div class="c-art c-art-1"><CroissantArt variant="chocolate" /></div>
        <div class="c-art c-art-2"><CroissantArt variant="strawberry" /></div>

        <p class="kicker">⏰ Her gün saat 13:00</p>
        <h2>Fırın açılıyor.<br />Sen neredesin?</h2>
        <p class="sub">Bu lezzete doymayacaksınız. Kruvasanlar tükenmeden Uzun Sokak’a gel, ya da yeni çıkanları Instagram’dan kaçırma.</p>
        <div class="btns">
          <a :href="MAPS_URL" target="_blank" rel="noopener" class="btn">📍 Hemen gel</a>
          <a :href="INSTAGRAM_URL" target="_blank" rel="noopener" class="btn btn-white">Instagram’da takip et</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrap {
  padding: clamp(40px, 6vw, 80px) 0 clamp(72px, 10vw, 140px);
}

.cta {
  position: relative;
  overflow: hidden;
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 20px;
  padding: clamp(56px, 9vw, 120px) clamp(20px, 5vw, 60px);
  border-radius: clamp(32px, 5vw, 56px);
  background: var(--lime);
  border: 2px solid var(--forest);
  box-shadow: 12px 12px 0 var(--forest);
}

.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(-45deg, transparent 0 22px, rgba(15, 162, 65, 0.08) 22px 44px);
  pointer-events: none;
}

.kicker {
  position: relative;
  margin: 0;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--forest);
  color: var(--lime);
  font-weight: 800;
  font-size: 14px;
}

h2 {
  position: relative;
  font-size: clamp(44px, 8vw, 112px);
  font-weight: 800;
}

.sub {
  position: relative;
  margin: 0;
  max-width: 52ch;
  font-size: clamp(16px, 1.4vw, 19px);
  color: var(--forest-90);
}

.btns {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
}

.btn-white {
  --bg: var(--white);
  --fg: var(--forest);
}

.ico {
  position: absolute;
  width: clamp(64px, 9vw, 120px);
}

.ico-a {
  top: 8%;
  left: 5%;
}
.ico-b {
  bottom: 8%;
  right: 5%;
}

.c-art {
  position: absolute;
  width: clamp(120px, 18vw, 240px);
  opacity: 0.95;
}

.c-art-1 {
  right: -3%;
  top: 6%;
  transform: rotate(18deg);
}
.c-art-2 {
  left: -4%;
  bottom: 4%;
  transform: rotate(-14deg);
}

@media (max-width: 720px) {
  .c-art,
  .ico-b {
    display: none;
  }
  .ico-a {
    top: 3%;
    left: 3%;
    width: 56px;
  }
}
</style>
