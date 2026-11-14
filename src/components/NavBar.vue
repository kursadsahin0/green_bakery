<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { INSTAGRAM_URL } from '../data'

const scrolled = ref(false)
const open = ref(false)

const links = [
  { href: '#urunler', label: 'Kruvasanlar' },
  { href: '#hikaye', label: 'Hikayemiz' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#konum', label: 'Konum' },
]

const onScroll = () => (scrolled.value = window.scrollY > 24)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav-wrap" :class="{ scrolled, open }">
    <nav class="nav" aria-label="Ana menü">
      <a href="#top" class="brand" @click="open = false">
        <img class="mark" src="/brand/logo.png" alt="" width="40" height="40" />
        <span class="word">yeşil<em>bakery</em></span>
      </a>

      <ul class="links">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href">{{ l.label }}</a>
        </li>
      </ul>

      <div class="right">
        <span class="live"><span class="pulse" />Her gün 13:00</span>
        <a class="btn btn-lime nav-cta" :href="INSTAGRAM_URL" target="_blank" rel="noopener">Takip et</a>
        <button class="burger" type="button" :aria-expanded="open" aria-label="Menüyü aç/kapat" @click="open = !open">
          <span /><span />
        </button>
      </div>
    </nav>

    <Transition name="drop">
      <div v-if="open" class="mobile">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
        <a class="btn btn-lime" :href="INSTAGRAM_URL" target="_blank" rel="noopener">Instagram’da takip et</a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: fixed;
  inset: 16px 0 auto;
  z-index: 50;
  padding: 0 var(--gutter);
  pointer-events: none;
}

.nav {
  pointer-events: auto;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 10px 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px) saturate(1.4);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  border: 1.5px solid var(--forest-12);
  /* yazı rengi ve zemin aynı anda değişsin; yoksa geçişte açık yazı beyaz zeminde kaybolur */
  transition:
    max-width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s;
}

.scrolled .nav {
  max-width: 960px;
  background: rgba(23, 65, 27, 0.92);
  color: var(--blush);
  border-color: transparent;
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.03em;
}

.mark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 1.5px solid var(--forest-12);
  object-fit: cover;
  flex: none;
}

.word em {
  font-style: normal;
  font-weight: 400;
  margin-left: 2px;
  opacity: 0.7;
}

.scrolled .word em {
  opacity: 0.9;
}

.links {
  display: flex;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.links a {
  display: block;
  padding: 8px 14px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: background 0.2s;
}

.links a:hover {
  background: var(--lime);
  color: var(--forest);
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.live {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
}

.pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse 1.8s infinite;
}

.scrolled .pulse {
  background: var(--lime);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(15, 162, 65, 0.6);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(15, 162, 65, 0);
  }
}

.nav-cta {
  padding: 10px 20px;
  font-size: 15px;
  box-shadow: none;
}

.nav-cta:hover {
  box-shadow: none;
}

.burger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--lime);
  cursor: pointer;
  position: relative;
}

.burger span {
  position: absolute;
  left: 13px;
  right: 13px;
  height: 2px;
  background: var(--forest);
  transition: transform 0.3s;
}

.burger span:first-child {
  top: 18px;
}
.burger span:last-child {
  top: 25px;
}
.open .burger span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}
.open .burger span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.mobile {
  pointer-events: auto;
  margin: 10px auto 0;
  max-width: 960px;
  background: var(--forest);
  color: var(--blush);
  border-radius: 28px;
  padding: 16px;
  display: grid;
  gap: 4px;
  box-shadow: var(--shadow);
}

.mobile a:not(.btn) {
  padding: 14px 16px;
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  text-decoration: none;
  border-radius: 16px;
}

.mobile a:not(.btn):hover {
  background: rgba(236, 246, 101, 0.12);
}

.mobile .btn {
  margin-top: 8px;
  box-shadow: none;
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 0.25s,
    transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

@media (max-width: 900px) {
  .links,
  .live {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav-cta {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
