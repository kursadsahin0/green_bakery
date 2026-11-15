# Yeşil Bakery

Trabzon'daki Yeşil Bakery kruvasan dükkanı için tek sayfalık tanıtım sitesi. Ürünleri, dükkanın hikâyesini, Google yorumlarını ve konumu tek sayfada sunar.

**Canlı:** https://yesilbakery.netlify.app

## Özellikler

- **Ürünler:** Kruvasan ve rulo çeşitleri, fiyat bilgisiyle
- **Tazelik bölümü:** Günlük fırın saati
- **Google yorumları:** Puan rozeti ve seçilmiş yorumlar
- **Konum:** Gömülü Google Haritalar ve tek dokunuşla yol tarifi
- **Kaydırma animasyonları:** IntersectionObserver ile özel `v-reveal` direktifi
- **Paylaşım önizlemesi:** WhatsApp, Instagram ve Facebook için Open Graph etiketleri
- Responsive, mobil öncelikli tasarım

## Teknolojiler

- Vue 3
- Vite
- CSS

## Kurulum

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # production build
```

Yayındaki adres `.env` içindeki `VITE_SITE_URL` ile ayarlanır (link önizleme görseli için).
