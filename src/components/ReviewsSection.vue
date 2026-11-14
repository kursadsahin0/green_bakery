<script setup>
import { GOOGLE, REVIEWS } from '../data'

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toLocaleUpperCase('tr')
</script>

<template>
  <section id="yorumlar" class="section reviews">
    <div class="container">
      <header class="head">
        <div>
          <span v-reveal class="eyebrow"><span class="dot" />Google yorumları</span>
          <h2 v-reveal="80" class="title-lg">Tadanlar <span class="green">ne diyor?</span></h2>
        </div>

        <a
          v-if="GOOGLE.rating"
          v-reveal="160"
          :href="GOOGLE.url"
          target="_blank"
          rel="noopener"
          class="score"
          :aria-label="`Google puanı ${GOOGLE.rating} / 5`"
        >
          <span class="g" aria-hidden="true">G</span>
          <strong>{{ GOOGLE.rating.toLocaleString('tr-TR', { minimumFractionDigits: 1 }) }}</strong>
          <span class="stars rated" aria-hidden="true" :style="{ '--fill': `${(GOOGLE.rating / 5) * 100}%` }">★★★★★</span>
          <span v-if="GOOGLE.count" class="count">{{ GOOGLE.count }} yorum</span>
        </a>
      </header>

      <ul v-if="REVIEWS.length" class="grid">
        <li v-for="(r, i) in REVIEWS" :key="r.name + i" v-reveal="(i % 3) * 100" class="review">
          <div class="who">
            <span class="avatar" aria-hidden="true">{{ initials(r.name) }}</span>
            <div>
              <strong>{{ r.name }}</strong>
              <span v-if="r.date" class="date">{{ r.date }}</span>
            </div>
            <span class="g small" aria-label="Google yorumu">G</span>
          </div>
          <p v-if="r.stars" class="stars" :aria-label="`${r.stars} yıldız`">
            <span v-for="n in 5" :key="n" :class="{ off: n > r.stars }">★</span>
          </p>
          <p class="text">{{ r.text }}</p>
        </li>
      </ul>

      <div v-reveal="200" class="cta" :class="{ solo: !REVIEWS.length }">
        <p>
          <strong>{{ REVIEWS.length ? 'Hepsini Google’da oku.' : 'Kruvasanımızı tattın mı?' }}</strong>
          {{ REVIEWS.length ? 'Sen de tattıysan bir yorum bırak.' : 'Google’da yorumunu bırak, sıradaki misafirimize yol göstersin.' }}
        </p>
        <a :href="GOOGLE.url" target="_blank" rel="noopener" class="btn btn-lime">
          Google’da {{ REVIEWS.length ? 'tüm yorumlar' : 'yorum yap' }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: clamp(32px, 5vw, 56px);
}

.head .title-lg {
  margin-top: 16px;
}

.green {
  color: var(--green);
}

.g {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--forest);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 17px;
  color: #4285f4;
  flex: none;
}

.g.small {
  width: 26px;
  height: 26px;
  font-size: 13px;
  margin-left: auto;
}

.score {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px 10px 10px;
  border-radius: 999px;
  background: var(--lime);
  color: var(--forest);
  border: 2px solid var(--forest);
  box-shadow: 4px 4px 0 var(--forest);
  text-decoration: none;
  font-weight: 700;
}

.score strong {
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1;
}

.stars {
  color: #f5a623;
  letter-spacing: 1px;
}

.stars.rated {
  background: linear-gradient(90deg, #f5a623 var(--fill), var(--forest-12) var(--fill));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stars .off {
  color: var(--forest-12);
}

.count {
  font-size: 14px;
  opacity: 0.75;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
}

.review {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px;
  background: var(--white);
  border: 2px solid var(--forest);
  border-radius: var(--radius-md);
  box-shadow: 5px 5px 0 var(--forest);
}

.who {
  display: flex;
  align-items: center;
  gap: 12px;
}

.who strong {
  display: block;
  font-size: 16px;
}

.date {
  font-size: 13px;
  opacity: 0.6;
}

.avatar {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--green);
  color: var(--white);
  font-weight: 800;
  flex: none;
}

.review .stars {
  margin: 0;
  font-size: 18px;
}

.text {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.35;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 26px;
  border-radius: var(--radius-md);
  background: var(--forest);
  color: var(--blush);
}

.cta.solo {
  padding: clamp(26px, 4vw, 40px);
}

.cta p {
  margin: 0;
  max-width: 560px;
}

.cta strong {
  color: var(--lime);
  font-family: var(--font-display);
  font-size: 22px;
  display: block;
  margin-bottom: 4px;
}
</style>
