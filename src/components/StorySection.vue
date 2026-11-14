<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { INSTAGRAM_URL } from '../data'

// Sadece doğrulanmış bilgiler: Instagram gönderileri (28 Eylül 2026'dan itibaren), Facebook açılış duyurusu,
// Google Haritalar kaydı. Sahip/kurucu bilgisi gelince buraya eklenebilir.
const facts = [
  { big: 'Eylül 2026', text: 'Trabzon’un kalbinde, Meydan’a birkaç adım mesafedeki Uzun Sokak’ta kapılarımızı açtık.' },
  { big: '13:00', text: 'Her gün aynı saatte fırını açıyoruz. Kapanış saatimiz yok: kruvasanlar tükenince kapanıyoruz.' },
  { big: 'Sıfır', text: 'Dünden kalan tek bir ürün bile ertesi gün vitrinimize girmez.' },
  { big: '1 milyon+', text: 'Açılışımızı paylaştığımız video 1 milyondan fazla izlendi. Teşekkürler Trabzon!' },
]

const text =
  'Bir serüven, el emeği ve göz nuru bir emek. Cesaretimiz samimiyetimizden. Her gün aynı heyecanla fırını açıyoruz, çünkü sizler en iyisine layıksınız.'
const words = text.split(' ')

const el = ref(null)
const progress = ref(0)

const onScroll = () => {
  if (!el.value) return
  const r = el.value.getBoundingClientRect()
  const vh = window.innerHeight
  // bölüm ekranın %85'inden girip %35'ine gelene kadar 0 → 1
  const p = (vh * 0.85 - r.top) / (r.height * 0.9)
  progress.value = Math.min(1, Math.max(0, p))
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

const lit = computed(() => Math.round(progress.value * words.length))
</script>

<template>
  <section id="hikaye" class="section story">
    <div class="container">
      <span v-reveal class="eyebrow"><span class="dot" />Hikayemiz</span>

      <p ref="el" class="scrolltext">
        <span v-for="(w, i) in words" :key="i" :class="{ on: i < lit }">{{ w + ' ' }}</span>
      </p>

      <div class="about">
        <figure v-reveal class="shop">
          <img src="/images/foto/dukkan.jpg" alt="Yeşil Bakery dükkanının tabelası ve vitrini" width="1000" height="536" loading="lazy" />
          <figcaption>📍 Uzun Sokak No:10/B · Trabzon</figcaption>
        </figure>

        <ol class="facts">
          <li v-for="(f, i) in facts" :key="f.big" v-reveal="i * 90">
            <strong>{{ f.big }}</strong>
            <span>{{ f.text }}</span>
          </li>
        </ol>
      </div>

      <a v-reveal :href="INSTAGRAM_URL" target="_blank" rel="noopener" class="btn btn-green">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
        Instagram’da takip et
      </a>
    </div>
  </section>
</template>

<style scoped>
.story .container {
  display: grid;
  gap: 40px;
  justify-items: start;
}

.scrolltext {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(32px, 5vw, 68px);
  line-height: 1.12;
  letter-spacing: -0.03em;
}

.scrolltext span {
  color: var(--forest);
  opacity: 0.15;
  transition:
    opacity 0.4s,
    color 0.4s;
}

.scrolltext span.on {
  opacity: 1;
}

.scrolltext span.on:nth-child(5n + 3) {
  color: var(--green);
}

.about {
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(20px, 3vw, 40px);
  align-items: stretch;
}

.shop {
  position: relative;
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid var(--forest);
  box-shadow: 8px 8px 0 var(--forest);
  background: var(--forest);
  min-height: 280px;
}

.shop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shop figcaption {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  width: fit-content;
  max-width: calc(100% - 28px);
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--lime);
  color: var(--forest);
  font-weight: 700;
  font-size: 13.5px;
}

.facts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.facts li {
  display: grid;
  gap: 6px;
  align-content: start;
  padding: 18px 18px 20px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 2px solid var(--forest);
}

.facts li:nth-child(2) {
  background: var(--lime);
}

.facts li:nth-child(4) {
  background: var(--forest);
  color: var(--blush);
}

.facts strong {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(24px, 2.6vw, 32px);
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--green);
}

.facts li:nth-child(2) strong {
  color: var(--forest);
}

.facts li:nth-child(4) strong {
  color: var(--lime);
}

.facts span {
  font-size: 14.5px;
  line-height: 1.45;
}

@media (max-width: 900px) {
  .about {
    grid-template-columns: 1fr;
  }
  .shop {
    min-height: 0;
    aspect-ratio: 1000 / 536;
  }
}

@media (max-width: 560px) {
  .story .container {
    gap: 28px;
  }
  .shop {
    border-radius: 20px;
    box-shadow: 5px 5px 0 var(--forest);
  }
  .shop figcaption {
    font-size: 11.5px;
    padding: 6px 10px;
    left: 10px;
    bottom: 10px;
  }
  .facts {
    gap: 8px;
  }
  .facts li {
    padding: 12px 12px 14px;
    border-radius: 14px;
    gap: 4px;
  }
  .facts strong {
    font-size: 20px;
  }
  .facts span {
    font-size: 12.5px;
    line-height: 1.38;
  }
}
</style>
