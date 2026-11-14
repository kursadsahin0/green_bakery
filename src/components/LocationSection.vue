<script setup>
import { ADDRESS, MAPS_URL, MAPS_EMBED, PRICE_FROM } from '../data'

const rows = [
  { label: 'Adres', value: ADDRESS },
  { label: 'Taze fırın', value: 'Her gün saat 13:00' },
  { label: 'Kapanış', value: 'Günün ürünleri tükenince' },
  { label: 'Fiyat', value: `${PRICE_FROM} ₺’den başlayan fiyatlarla` },
  { label: 'Yakınında', value: 'Meydan Parkı’ndan birkaç adım' },
]
</script>

<template>
  <section id="konum" class="section location">
    <div class="container grid">
      <div class="info">
        <span v-reveal class="eyebrow"><span class="dot" />Bizi bul</span>
        <h2 v-reveal="80" class="title-lg">
          Uzun Sokak’ta,<br />
          şehrin <span class="green">tam kalbinde</span>.
        </h2>

        <dl v-reveal="160" class="rows">
          <div v-for="r in rows" :key="r.label" class="row">
            <dt>{{ r.label }}</dt>
            <dd>{{ r.value }}</dd>
          </div>
        </dl>

        <a v-reveal="220" :href="MAPS_URL" target="_blank" rel="noopener" class="btn btn-green">
          Yol tarifi al
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>

      <div v-reveal="120" class="map">
        <iframe
          :src="MAPS_EMBED"
          title="Yeşil Bakery konumu - Uzun Sokak, Trabzon"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.info {
  display: grid;
  gap: 28px;
  justify-items: start;
}

.green {
  color: var(--green);
}

.rows {
  width: 100%;
  margin: 0;
  border-top: 1.5px solid var(--forest-12);
}

.row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1.5px solid var(--forest-12);
}

dt {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  padding-top: 2px;
}

dd {
  margin: 0;
  font-weight: 600;
  line-height: 1.45;
}

.map {
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  overflow: hidden;
  border: 1.5px solid var(--forest-12);
  background: var(--white);
}

.map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .row {
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 12px 0;
  }
  .map {
    aspect-ratio: 1;
  }
}
</style>
