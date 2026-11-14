<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { ICONS, INSTAGRAM_URL, BAKE_HOUR, PHOTOS } from '../data'

// Trabzon saati (UTC+3, yaz saati yok)
const now = ref(Date.now())
const scrollY = ref(0)
let timer

const status = computed(() => {
  const ist = new Date(now.value + 3 * 3600 * 1000)
  const mins = ist.getUTCHours() * 60 + ist.getUTCMinutes()
  const bake = BAKE_HOUR * 60
  if (mins < bake) {
    const left = bake - mins
    const h = Math.floor(left / 60)
    const m = left % 60
    return { text: `Taze kruvasanlara ${h ? `${h} sa ` : ''}${m} dk kaldı` }
  }
  // Sabit kapanış saati yok: günün ürünleri tükenince kapanılıyor
  return { text: 'Günün kruvasanları vitrinde · tükenene kadar açığız' }
})

const onScroll = () => (scrollY.value = window.scrollY)

onMounted(() => {
  timer = setInterval(() => (now.value = Date.now()), 30000)
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener('scroll', onScroll)
})

const artStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.1}px) rotate(${-4 + scrollY.value * 0.012}deg)`,
}))
</script>

<template>
  <section id="top" class="hero">
    <div class="container grid">
      <div class="copy">
        <span class="eyebrow reveal-hero" style="--i: 0">
          <span class="dot" />{{ status.text }}
        </span>

        <h1 class="title-xl reveal-hero" style="--i: 1">
          Trabzon’un<br />
          <span class="hl">marka</span> kruvasan<br />
          dükkanı<span class="g">.</span>
        </h1>

        <p class="lead reveal-hero" style="--i: 2">
          Kat kat çıtır, el emeği, göz nuru. Her gün taze —
          <strong>saat 13:00’te</strong> fırından vitrine. Dünden kalan tek bir kruvasan bile
          bugün satılmaz.
        </p>

        <div class="ctas reveal-hero" style="--i: 3">
          <a href="#urunler" class="btn btn-green">
            Kruvasanları gör
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href="#konum" class="btn btn-ghost">📍 Uzun Sokak</a>
        </div>

        <div class="proof reveal-hero" style="--i: 4">
          <div class="avatars" aria-hidden="true">
            <span>🍓</span><span>💚</span><span>🍫</span>
          </div>
          <p>
            <strong>Üç favori, tek adres.</strong><br />
            Yenileri için <a :href="INSTAGRAM_URL" target="_blank" rel="noopener">@yesil.bakery</a>
          </p>
        </div>
      </div>

      <div class="art">
        <div class="blob" />
        <svg class="badge" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id="badge-circle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
          </defs>
          <circle cx="100" cy="100" r="98" fill="#17411b" />
          <text font-family="Bricolage Grotesque" font-weight="800" font-size="19" letter-spacing="3" fill="#ecf665">
            <textPath href="#badge-circle">HER GÜN TAZE • SAAT 13:00 • TRABZON • </textPath>
          </text>
          <text x="100" y="116" text-anchor="middle" font-size="44">🥐</text>
        </svg>

        <figure class="photo" :style="artStyle">
          <img
            :src="PHOTOS.hero"
            :srcset="PHOTOS.heroSrcset"
            sizes="(max-width: 960px) 66vw, 440px"
            width="900"
            height="1200"
            alt="Yeşil Bakery dükkanının önünde çilekli, Antep fıstıklı ve çikolatalı kruvasanlar"
            fetchpriority="high"
            decoding="async"
          />
        </figure>

        <img class="ico ico-1 float ico3d" :src="ICONS.heart" alt="" />
        <img class="ico ico-2 float ico3d" :src="ICONS.star" alt="" style="animation-delay: -2s" />
        <img class="ico ico-3 float ico3d" :src="ICONS.clock" alt="" style="animation-delay: -4s" />

        <div class="chip chip-1">🍓 Çilekli</div>
        <div class="chip chip-2">💚 Antep fıstıklı</div>
        <div class="chip chip-3">🍫 Çikolatalı</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 150px 0 80px;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--forest-12) 1.2px, transparent 1.2px);
  background-size: 26px 26px;
  mask-image: radial-gradient(ellipse at 70% 40%, #000 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 70% 40%, #000 20%, transparent 70%);
  pointer-events: none;
}

.grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 40px;
}

.copy {
  display: grid;
  gap: 26px;
  justify-items: start;
}

.hl {
  position: relative;
  display: inline-block;
  color: var(--green);
}

.hl::after {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 0.08em;
  height: 0.28em;
  background: var(--lime);
  z-index: -1;
  border-radius: 6px;
  transform: skew(-8deg) scaleX(0);
  transform-origin: left;
  animation: underline 0.8s 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes underline {
  to {
    transform: skew(-8deg) scaleX(1);
  }
}

.g {
  color: var(--green);
}

.lead strong {
  color: var(--forest);
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.proof {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  color: var(--forest-70);
}

.proof p {
  margin: 0;
  line-height: 1.4;
}

.proof strong,
.proof a {
  color: var(--forest);
  font-weight: 700;
}

.avatars {
  display: flex;
}

.avatars span {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--blush);
  margin-left: -10px;
  font-size: 20px;
  box-shadow: 0 4px 10px -4px var(--forest-12);
}

.avatars span:first-child {
  margin-left: 0;
}

.reveal-hero {
  opacity: 0;
  transform: translateY(28px);
  animation: heroIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  animation-delay: calc(var(--i) * 110ms + 100ms);
}

@keyframes heroIn {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Art */
.art {
  position: relative;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}

/* Masaüstü: fotoğraf alanı yazı bloğunun ortasında değil, üst kısmında dursun */
@media (min-width: 901px) {
  .art {
    align-self: start;
    margin-top: 40px;
  }
}

.blob {
  position: absolute;
  inset: 6%;
  background: var(--lime);
  border-radius: 46% 54% 42% 58% / 52% 44% 56% 48%;
  animation: morph 12s ease-in-out infinite;
  border: 2px solid var(--forest);
  box-shadow: 10px 12px 0 var(--forest);
}

@keyframes morph {
  50% {
    border-radius: 58% 42% 55% 45% / 42% 58% 42% 58%;
  }
}

.photo {
  position: relative;
  width: 66%;
  aspect-ratio: 3 / 4;
  margin: 0;
  border-radius: 28px;
  overflow: hidden;
  border: 3px solid var(--forest);
  box-shadow: 10px 12px 0 var(--forest);
  background: var(--forest);
  transition: transform 0.1s linear;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 0;
  right: 2%;
  width: 26%;
  z-index: 2;
  animation: spin 18s linear infinite;
}

.badge text:last-child {
  animation: spin 18s linear infinite reverse;
  transform-origin: 100px 100px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ico {
  position: absolute;
  width: 18%;
}

.ico-1 {
  left: 0;
  top: 18%;
}
.ico-2 {
  right: 6%;
  bottom: 12%;
  width: 15%;
}
.ico-3 {
  left: 12%;
  bottom: 4%;
  width: 14%;
}

.chip {
  position: absolute;
  z-index: 3;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--white);
  border: 2px solid var(--forest);
  font-weight: 700;
  font-size: 14px;
  box-shadow: 3px 4px 0 var(--forest);
  white-space: nowrap;
}

.chip-1 {
  top: 8%;
  left: 18%;
  transform: rotate(-6deg);
}
.chip-2 {
  top: 48%;
  right: -2%;
  transform: rotate(5deg);
  background: var(--green);
  color: var(--white);
}
.chip-3 {
  bottom: 18%;
  left: 2%;
  transform: rotate(-3deg);
  background: var(--forest);
  color: var(--lime);
}

@media (max-width: 900px) {
  .hero {
    padding-top: 120px;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .art {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .chip {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
