<script setup>
import { INSTAGRAM_URL, MAPS_URL, ADDRESS } from '../data'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand-col">
          <img class="logo" src="/brand/logo.png" alt="Yeşil Bakery logosu" width="96" height="96" loading="lazy" />
          <p class="slogan">Kat kat mutluluk,<br />her gün <span>13:00</span>’te.</p>
          <a :href="INSTAGRAM_URL" target="_blank" rel="noopener" class="btn btn-lime">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            @yesil.bakery
          </a>
        </div>

        <nav class="col menu" aria-label="Alt menü">
          <h4>Menü</h4>
          <a href="#urunler">Kruvasanlar</a>
          <a href="#tazelik">Tazelik</a>
          <a href="#hikaye">Hikayemiz</a>
          <a href="#yorumlar">Yorumlar</a>
          <a href="#konum">Konum</a>
        </nav>

        <div class="col flavors">
          <h4>Kruvasanlar</h4>
          <span>🍓 Çilekli</span>
          <span>💚 Antep fıstıklı</span>
          <span>🍫 Çikolatalı</span>
          <a href="#menu">🌀 Bolbol Roll ve 12 lezzet daha</a>
        </div>

        <div class="col visit">
          <h4>Ziyaret</h4>
          <a :href="MAPS_URL" target="_blank" rel="noopener">{{ ADDRESS }}</a>
          <span>Taze fırın 13:00 · Ürünler tükenene kadar açığız</span>
        </div>
      </div>

      <div class="bottom">
        <span>© {{ year }} Yeşil Bakery · Trabzon</span>
        <a href="#top" class="up">Yukarı çık ↑</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--forest);
  color: var(--blush);
  border-radius: clamp(32px, 5vw, 64px) clamp(32px, 5vw, 64px) 0 0;
  padding-top: clamp(64px, 8vw, 110px);
  overflow: hidden;
}

.top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 40px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(255, 239, 239, 0.15);
}

.brand-col {
  display: grid;
  gap: 24px;
  justify-items: start;
  align-content: start;
}

.logo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--lime);
  object-fit: cover;
}

.slogan {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(30px, 3.2vw, 42px);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.slogan span {
  color: var(--lime);
}

.btn-lime {
  box-shadow: none;
  border-color: var(--lime);
}

.btn-lime:hover {
  box-shadow: none;
}

.col {
  display: grid;
  gap: 10px;
  align-content: start;
}

h4 {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 6px;
}

.col a,
.col span {
  text-decoration: none;
  opacity: 0.8;
  font-weight: 500;
  transition:
    opacity 0.2s,
    color 0.2s;
}

.col a:hover {
  opacity: 1;
  color: var(--lime);
}

.bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 0 40px;
  font-size: 14px;
  opacity: 0.7;
}

.up {
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 900px) {
  .top {
    grid-template-columns: 1fr 1fr;
  }
  .brand-col {
    grid-column: 1 / -1;
  }
}

/* Mobil: logo + slogan yan yana, küçük Instagram düğmesi; footer menüsü gizli (üstteki ☰ menüde zaten var) */
@media (max-width: 640px) {
  .footer {
    padding-top: 32px;
    border-radius: 28px 28px 0 0;
  }
  .top {
    grid-template-columns: 1fr;
    gap: 22px;
    padding-bottom: 22px;
  }
  .brand-col {
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 14px 14px;
  }
  .logo {
    width: 60px;
    height: 60px;
    border-width: 2px;
  }
  .slogan {
    font-size: 22px;
  }
  .brand-col .btn {
    grid-column: 1 / -1;
    padding: 9px 16px;
    font-size: 14px;
  }
  .brand-col .btn svg {
    width: 16px;
    height: 16px;
  }
  .flavors,
  .menu {
    display: none;
  }
  .visit {
    gap: 4px;
    font-size: 14px;
  }
  .visit h4 {
    margin-bottom: 2px;
  }
  .bottom {
    padding: 14px 0 22px;
    font-size: 12.5px;
  }
}
</style>
