<script setup>
import { computed, ref } from 'vue'
import CroissantArt from './CroissantArt.vue'
import { PRODUCTS, MENU, MENU_CATEGORIES, PRICE_FROM } from '../data'

const total = PRODUCTS.length + MENU.length
const active = ref('all')
const filtered = computed(() =>
  active.value === 'all' ? MENU : MENU.filter((m) => m.category === active.value),
)
const countOf = (id) => (id === 'all' ? MENU.length : MENU.filter((m) => m.category === id).length)
</script>

<template>
  <section id="urunler" class="section products">
    <div class="container">
      <header class="head">
        <span v-reveal class="eyebrow"><span class="dot" />Üç imza, {{ total }} lezzet</span>
        <h2 v-reveal="80" class="title-lg">Hangisi <span class="green">senin</span> tarzın?</h2>
        <p v-reveal="160" class="lead">
          Kruvasan, cup, sepet ya da Bolbol Roll… Hepsi aynı kat kat çıtır hamurdan, hepsi her gün
          13:00’te taze.
        </p>
        <p v-reveal="220" class="price">
          <span class="price-label" aria-hidden="true">🥐</span>
          <strong>{{ PRICE_FROM }} ₺</strong>
          <span>’den başlayan fiyatlarla</span>
        </p>
      </header>

      <div class="cards">
        <article
          v-for="(p, i) in PRODUCTS"
          :key="p.id"
          v-reveal="i * 120"
          class="card"
          :class="p.variant"
        >
          <div class="art">
            <img :src="p.img" :alt="`${p.name} kruvasan`" loading="lazy" />
            <span class="num">0{{ i + 1 }}</span>
            <span class="sticker" aria-hidden="true"><CroissantArt :variant="p.variant" /></span>
          </div>
          <div class="body">
            <p class="tagline">{{ p.emoji }} {{ p.tagline }}</p>
            <h3>{{ p.name }}</h3>
            <p class="desc">{{ p.desc }}</p>
            <ul class="tags">
              <li v-for="t in p.tags" :key="t">{{ t }}</li>
            </ul>
          </div>
        </article>
      </div>

      <div id="menu" class="menu">
        <header class="menu-head">
          <h3 v-reveal class="menu-title">Vitrinde <span class="green">daha neler</span> var?</h3>
          <div v-reveal="80" class="chips" role="tablist" aria-label="Ürün kategorisi">
            <button
              v-for="c in MENU_CATEGORIES"
              :key="c.id"
              type="button"
              role="tab"
              class="chip"
              :class="{ on: active === c.id }"
              :aria-selected="active === c.id"
              @click="active = c.id"
            >
              {{ c.label }} <span class="count">{{ countOf(c.id) }}</span>
            </button>
          </div>
        </header>

        <TransitionGroup tag="ul" name="menu" class="menu-grid">
          <li v-for="m in filtered" :key="m.id" class="item">
            <div class="item-img">
              <img v-if="m.img" :src="m.img" :alt="m.name" loading="lazy" width="800" height="800" />
              <div v-else class="no-photo">
                <CroissantArt variant="chocolate" />
                <span>Fotoğraf yakında</span>
              </div>
            </div>
            <div class="item-body">
              <h4>{{ m.emoji }} {{ m.name }}</h4>
              <p>{{ m.desc }}</p>
              <ul class="tags">
                <li v-for="t in m.tags" :key="t" :class="{ new: t === 'Yeni' }">{{ t }}</li>
              </ul>
            </div>
          </li>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 18px;
  margin-bottom: clamp(40px, 6vw, 72px);
}

.head .lead {
  margin: 0;
}

.price {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0 0;
  padding: 8px 18px 8px 8px;
  border-radius: 999px;
  background: var(--lime);
  border: 2px solid var(--forest);
  box-shadow: 4px 4px 0 var(--forest);
  font-weight: 700;
}

.price-label {
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--forest);
  color: var(--lime);
  font-size: 16px;
  line-height: 1;
}

.price strong {
  font-family: var(--font-display);
  font-size: 26px;
  line-height: 1;
  letter-spacing: -0.02em;
}

.price strong + span {
  margin-left: -8px;
}

.green {
  color: var(--green);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  --card-bg: var(--white);
  --card-fg: var(--forest);
  --tag-bg: var(--blush);
  position: relative;
  background: var(--card-bg);
  color: var(--card-fg);
  border: 2px solid var(--forest);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: 8px 8px 0 var(--forest);
  transition:
    transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 0.9s,
    translate 0.4s;
  overflow: hidden;
}

.card.in:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: 12px 16px 0 var(--forest);
}

.card.strawberry {
  --card-bg: var(--white);
}

.card.pistachio {
  --card-bg: var(--green);
  --card-fg: var(--white);
  --tag-bg: rgba(255, 255, 255, 0.18);
}

.card.chocolate {
  --card-bg: var(--forest);
  --card-fg: var(--blush);
  --tag-bg: rgba(236, 246, 101, 0.16);
}

.num {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--lime);
  color: var(--forest);
  border: 2px solid var(--forest);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 14px;
  line-height: 1;
}

.art {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 22px;
  border: 2px solid var(--forest);
  background: var(--forest);
}

.art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.card:hover .art img {
  transform: scale(1.07);
}

.sticker {
  position: absolute;
  right: 10px;
  bottom: 8px;
  width: 92px;
  padding: 10px 8px 4px;
  border-radius: 50%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  background: var(--blush);
  border: 2px solid var(--forest);
  transform: rotate(-10deg);
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.card:hover .sticker {
  transform: rotate(8deg) scale(1.08);
}

.tagline {
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 14px;
  opacity: 0.85;
}

h3 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
}

.chocolate h3 {
  color: var(--lime);
}

.desc {
  margin: 0 0 18px;
  opacity: 0.85;
  font-size: 16px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tags li {
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--tag-bg);
  font-size: 13px;
  font-weight: 700;
}

.menu {
  margin-top: clamp(64px, 9vw, 112px);
}

.menu-head {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.menu-title {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  margin: 0;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px 9px 16px;
  border-radius: 999px;
  border: 2px solid var(--forest);
  background: var(--white);
  color: var(--forest);
  font: inherit;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}

.chip:hover {
  transform: translateY(-2px);
  box-shadow: 3px 3px 0 var(--forest);
}

.chip.on {
  background: var(--forest);
  color: var(--lime);
}

.chip .count {
  min-width: 22px;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--blush);
  color: var(--forest);
  font-size: 12px;
  text-align: center;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  flex-direction: column;
  background: var(--white);
  color: var(--forest);
  border: 2px solid var(--forest);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 5px 5px 0 var(--forest);
  transition:
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 8px 10px 0 var(--forest);
}

.item-img {
  aspect-ratio: 1;
  overflow: hidden;
  border-bottom: 2px solid var(--forest);
  background: #f6dcc4;
}

.item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.no-photo {
  height: 100%;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  padding: 20%;
  background: radial-gradient(circle at 50% 45%, #fbe7d3, #f1cfae);
}

.no-photo span {
  font-size: 13px;
  font-weight: 700;
  opacity: 0.6;
}

.item:hover .item-img img {
  transform: scale(1.06);
}

.item-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px 18px;
  flex: 1;
}

.item h4 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 800;
  line-height: 1.15;
}

.item p {
  margin: 0;
  font-size: 14.5px;
  opacity: 0.8;
  flex: 1;
}

.item .tags {
  margin-top: 4px;
}

.item .tags li {
  background: var(--blush);
  font-size: 12px;
  padding: 5px 10px;
}

.item .tags li.new {
  background: var(--lime);
  border: 1.5px solid var(--forest);
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: scale(0.94);
}

.menu-leave-active {
  position: absolute;
  visibility: hidden;
}

.menu-move {
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .menu-enter-active,
  .menu-leave-active,
  .menu-move {
    transition: none;
  }
}

/* Telefonda menü iki sütun: kartlar küçülür, açıklama 2 satıra kısalır */
@media (max-width: 640px) {
  .menu-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .item {
    border-radius: 16px;
    box-shadow: 3px 3px 0 var(--forest);
  }

  .item:hover {
    transform: none;
    box-shadow: 3px 3px 0 var(--forest);
  }

  .item-body {
    gap: 6px;
    padding: 10px 12px 12px;
  }

  .item h4 {
    font-size: 15.5px;
  }

  .item p {
    font-size: 12.5px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: none;
  }

  .item .tags {
    margin-top: auto;
  }

  .item .tags li {
    font-size: 10.5px;
    padding: 3px 8px;
  }

  .item .tags li:nth-child(n + 2) {
    display: none;
  }

  .menu-head {
    margin-bottom: 18px;
  }

  .chip {
    padding: 7px 10px 7px 12px;
    font-size: 13px;
  }
}

@media (max-width: 960px) {
  .cards {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }
}
</style>
