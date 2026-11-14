<script setup>
import { ICONS, PHOTOS } from '../data'

const steps = [
  { icon: ICONS.heart, title: 'El emeği', text: 'Dinlenmiş hamurlarımız sabah 05:00’te hazırlanır, her kruvasan elde şekillenir.' },
  { icon: ICONS.medal, title: 'Kat kat çıtır', text: 'Tereyağlı katlar, dışı çıtır içi yumuşacık. Görüntü değişir, kalite değişmez.' },
  { icon: ICONS.clock, title: 'Saat 13:00', text: 'Her gün aynı saatte fırından çıkar, dumanı üstünde vitrine girer.' },
  { icon: ICONS.calendar, title: 'Ertesi güne kalmaz', text: 'Önceki günden kalan hiçbir ürün ertesi gün vitrinimizde yer almaz.' },
]
</script>

<template>
  <section id="tazelik" class="section fresh">
    <div class="container">
      <div class="top">
        <div class="top-copy">
          <span v-reveal class="eyebrow"><span class="dot" />Tek kuralımız</span>
          <h2 v-reveal="80" class="big">
            Tazelik.<br />
            <span class="muted">Gerisi detay.</span>
          </h2>
        </div>
        <div class="photos">
          <figure v-reveal="120" class="ph ph-main">
            <img :src="PHOTOS.handmade" alt="Bolbol Roll: kat kat sarılmış rulo kruvasan, üstünde krema ve çilek" loading="lazy" />
            <figcaption>Kat kat, el emeği</figcaption>
          </figure>
          <figure v-reveal="240" class="ph ph-side">
            <img :src="PHOTOS.inside" alt="Çilek taçlı kremalı kruvasan" loading="lazy" />
          </figure>
        </div>
      </div>

      <div class="steps">
        <article v-for="(s, i) in steps" :key="s.title" v-reveal="i * 100" class="step">
          <span class="tile"><img class="ico3d" :src="s.icon" alt="" loading="lazy" /></span>
          <span class="n">0{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fresh {
  background: var(--forest);
  color: var(--blush);
  border-radius: clamp(32px, 5vw, 64px);
  margin: 0 clamp(8px, 1.5vw, 20px);
  position: relative;
  overflow: hidden;
}

.fresh::after {
  content: '';
  position: absolute;
  width: 60vw;
  height: 60vw;
  right: -20vw;
  top: -25vw;
  background: radial-gradient(circle, rgba(15, 162, 65, 0.45), transparent 60%);
  pointer-events: none;
}

.top {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: clamp(32px, 5vw, 64px);
  margin-bottom: clamp(48px, 7vw, 88px);
}

.top-copy {
  display: grid;
  gap: 24px;
  justify-items: start;
}

.photos {
  position: relative;
  height: clamp(380px, 42vw, 520px);
}

.ph {
  position: absolute;
  margin: 0;
  border-radius: 24px;
  overflow: hidden;
  border: 3px solid var(--lime);
  background: var(--forest);
}

.ph img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ph-main {
  top: 0;
  left: 0;
  width: 62%;
  height: 100%;
  rotate: -3deg;
}

.ph-main img {
  object-position: center 55%;
}

.ph-side {
  right: 0;
  bottom: 6%;
  width: 46%;
  height: 62%;
  rotate: 4deg;
  border-color: var(--blush);
}

figcaption {
  position: absolute;
  left: 12px;
  bottom: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--lime);
  color: var(--forest);
  font-weight: 800;
  font-size: 13px;
}

.eyebrow {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
  color: var(--lime);
}

.big {
  font-size: clamp(56px, 11vw, 160px);
  font-weight: 800;
  color: var(--lime);
}

.muted {
  color: var(--blush);
  opacity: 0.35;
}

.steps {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.step {
  position: relative;
  padding: 28px 24px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  transition: background 0.3s;
}

.step:hover {
  background: rgba(236, 246, 101, 0.1);
}

.tile {
  display: grid;
  place-items: center;
  width: 84px;
  height: 84px;
  margin-bottom: 18px;
  border-radius: 22px;
  background: var(--blush);
  isolation: isolate;
}

.step img {
  width: 68px;
  height: 68px;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.step:hover img {
  transform: scale(1.12) rotate(-8deg);
}

.n {
  position: absolute;
  top: 24px;
  right: 24px;
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--green);
}

h3 {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--white);
}

p {
  margin: 0;
  font-size: 15px;
  opacity: 0.75;
}

@media (max-width: 960px) {
  .top {
    grid-template-columns: 1fr;
  }
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Telefonda: tek ekrana sığsın — ince satır kartlar (simge solda), kısa fotoğraf alanı, küçük başlık */
@media (max-width: 560px) {
  .fresh {
    padding-block: 44px;
  }

  .top {
    gap: 20px;
    margin-bottom: 24px;
  }

  .top-copy {
    gap: 14px;
  }

  .big {
    font-size: 44px;
  }

  .photos {
    height: 220px;
  }

  .ph {
    border-radius: 18px;
  }

  figcaption {
    font-size: 11.5px;
    padding: 5px 10px;
    left: 10px;
    bottom: 10px;
  }

  .steps {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .step {
    display: grid;
    grid-template-columns: 44px 1fr;
    column-gap: 12px;
    align-items: center;
    padding: 10px 12px;
    border-radius: 14px;
  }

  .tile {
    grid-row: 1 / span 2;
    width: 44px;
    height: 44px;
    margin: 0;
    border-radius: 12px;
  }

  .step img {
    width: 34px;
    height: 34px;
  }

  .n {
    display: none;
  }

  h3 {
    font-size: 16px;
    margin: 0;
  }

  p {
    font-size: 12.5px;
    line-height: 1.35;
  }
}
</style>
