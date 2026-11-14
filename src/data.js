export const INSTAGRAM_URL = 'https://www.instagram.com/yesil.bakery/'
export const ADDRESS = 'Uzun Sokak No:10/B · Ortahisar / Trabzon'
// Google Haritalar kaydı: "Yeşil Bakery, Kemerkaya, Uzun Sk. No:10/B" · 41.0050447, 39.7295085
// MAPS_URL → "Yol tarifi al": telefonda Google Haritalar'ı doğrudan dükkana yol tarifiyle açar
export const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Ye%C5%9Fil%20Bakery%2C%20Uzun%20Sk.%20No%3A10%2FB%2C%20Ortahisar%2FTrabzon'
export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Ye%C5%9Fil%20Bakery%2C%20Uzun%20Sk.%20No%3A10%2FB%2C%20Ortahisar%2FTrabzon&ll=41.0050447,39.7295085&z=17&hl=tr&output=embed'
export const BAKE_HOUR = 13 // her gün 13:00 taze fırın
export const PRICE_FROM = 250 // ₺, en düşük ürün fiyatı

// Google yorumları — SADECE Google Haritalar'daki gerçek yorumlar buraya yazılır.
// rating/count boşken (null) puan rozeti gizlenir; REVIEWS boşken bölüm "Google'da yorum yap" kartı gösterir.
// Kayıt: { name, stars (bilinmiyorsa yazma → yıldız satırı gizlenir), date, text }
// Metinler Google'daki yorumlardan kısa alıntıdır; tamamı GOOGLE.url'de.
export const GOOGLE = {
  rating: 4.2, // Google Haritalar, 14 Kasım 2026
  count: 113,
  url: 'https://maps.google.com/?cid=6870060247599163166', // Google Haritalar'daki Yeşil Bakery işletme sayfası
}
export const REVIEWS = [
  {
    name: 'Yerel Rehber',
    date: 'Ekim 2026',
    text: '“Kruvasanı dışı çıtır, içi yumuşacık ve inanılmaz tazeydi.”',
  },
  {
    name: 'İrem G.',
    date: 'Ekim 2026',
    text: '“Ben Antep fıstıklı olanı denedim ve lezzetini beğendim.”',
  },
]

// 3dicons.co — açık kaynak (CC0) 3D ikonlar, public/icons içinde
export const ICONS = {
  heart: '/icons/heart.webp',
  star: '/icons/star.webp',
  clock: '/icons/clock.webp',
  medal: '/icons/medal.webp',
  thumb: '/icons/thumb.webp',
  calendar: '/icons/calendar.webp',
  megaphone: '/icons/megaphone.webp',
}

// Ürünler @yesil.bakery Instagram gönderilerinden (28 Eylül 2026); açıklamalar gönderi metinlerinden.
// İlk üçü "imza" kartlarda büyük gösterilir, gerisi menü ızgarasında.
export const PRODUCTS = [
  {
    id: 'cilekli',
    name: 'Çilekli',
    emoji: '🍓',
    variant: 'strawberry',
    img: '/images/foto/cilekli.jpg',
    tagline: 'Kruvasanın en cömert hali',
    desc: 'Ortadan ikiye açtık, bol krema ve taze çilekle doldurduk. Hem göze hem damağa.',
    tags: ['Meyveli', 'Kremalı'],
  },
  {
    id: 'antep',
    name: 'Antep Fıstıklı',
    emoji: '💚',
    variant: 'pistachio',
    img: '/images/foto/fistikli.jpg',
    tagline: 'Adımıza en çok yakışan lezzet',
    desc: 'Antep fıstığı sosu, bol krema ve fıstık parçaları. Yeşil Bakery’nin imza lezzeti.',
    tags: ['İmza lezzet', 'Fıstıklı'],
  },
  {
    id: 'cikolatali',
    name: 'Çikolatalı',
    emoji: '🍫',
    variant: 'chocolate',
    img: '/images/foto/cikolatali.jpg',
    tagline: 'Çikolata krizine birebir',
    desc: 'Akışkan çikolata, kakaolu bisküvi ve krema… Daha fazlası mümkün değil.',
    tags: ['Bol dolgulu', 'Bisküvili'],
  },
]

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Tümü' },
  { id: 'kruvasan', label: 'Kruvasan' },
  { id: 'cup', label: 'Cup & Sepet' },
  { id: 'rulo', label: 'Rulo' },
]

export const MENU = [
  {
    id: 'bolbol-roll',
    name: 'Bolbol Roll',
    emoji: '🌀',
    category: 'rulo',
    img: '/images/foto/bolbol-roll.jpg',
    desc: 'Çilek soslu rulo kruvasan: her katmanı ayrı ayrı hissedilir, üstünde krema ve çilek sosu.',
    tags: ['Yeni', 'Çilekli'],
  },
  {
    id: 'findik-fistik-rulo',
    name: 'Fındık Fıstık Rulo',
    emoji: '🌰',
    category: 'rulo',
    img: '/images/foto/findik-fistik-rulo.jpg',
    desc: 'Çikolatalı rulo kruvasan, çıtır fındık ve Antep fıstığı parçalarıyla kaplı.',
    tags: ['Yeni', 'Fındıklı'],
  },
  {
    id: 'pembe-cilekli',
    name: 'Pembe Çilekli',
    emoji: '💗',
    category: 'kruvasan',
    img: '/images/foto/pembe-cilekli.jpg',
    desc: 'Pembe krema, taze çilek ve çikolata sosu. Hem en fotojenik hem en lezzetli olanı.',
    tags: ['Çilekli', 'Çikolatalı'],
  },
  {
    id: 'cilek-tacli',
    name: 'Çilek Taçlı',
    emoji: '👑',
    category: 'kruvasan',
    img: '/images/foto/cilek-tacli.jpg',
    desc: 'Kat kat çıtır hamurun üstünde bol krema ve parlak çilekler.',
    tags: ['Çilekli', 'Kremalı'],
  },
  {
    id: 'lotus',
    name: 'Lotus',
    emoji: '🤎',
    category: 'kruvasan',
    img: '/images/foto/lotus.jpg',
    desc: 'Lotus krema, sıcak çikolata sosu ve bisküvi kırıkları. Tatlı düşkünlerine özel.',
    tags: ['Karamel', 'Çikolatalı'],
  },
  {
    id: 'karamel-biskuvili',
    name: 'Karamel Bisküvili',
    emoji: '🍪',
    category: 'kruvasan',
    img: '/images/foto/karamel-biskuvili.jpg',
    desc: 'Karamel bisküvi kırıkları, bol krema ve altın renginde çıtır kruvasan.',
    tags: ['Karamel', 'Kremalı'],
  },
  {
    id: 'cikolata-talasli',
    name: 'Çikolata Talaşlı',
    emoji: '🎉',
    category: 'kruvasan',
    img: '/images/foto/cikolata-talasli.jpg',
    desc: 'Bol çikolata talaşı, ipeksi krema ve beyaz çikolata dekoru. Kutlamaların küçük yıldızı.',
    tags: ['Çikolatalı', 'Kutlama'],
  },
  {
    id: 'kup-kruvasan',
    name: 'Çikolata Kaplamalı Küp',
    emoji: '🧊',
    category: 'kruvasan',
    img: '/images/foto/kup-kruvasan.jpg',
    desc: 'Kat kat kruvasan hamuru küp şeklinde; üstünden akan çikolata ve fıstık dokunuşuyla.',
    tags: ['Yeni', 'Çikolatalı'],
  },
  {
    id: 'cilekli-cup',
    name: 'Çilekli Cup',
    emoji: '🍓',
    category: 'cup',
    img: '/images/foto/cilekli-cup.jpg',
    desc: 'Kabarık krema, taze çilek dilimleri ve çilek sosu. Göz ziyafeti, damak ziyafeti.',
    tags: ['Çilekli', 'Kremalı'],
  },
  {
    id: 'yaban-mersinli-cup',
    name: 'Yaban Mersinli Cup',
    emoji: '🫐',
    category: 'cup',
    img: '/images/foto/yaban-mersinli-cup.jpg',
    desc: 'Yaban mersini ve meyve sosuyla hafif, ferah bir lezzet. Tatlı ama yormayan.',
    tags: ['Meyveli', 'Hafif'],
  },
  {
    id: 'orman-meyveli',
    name: 'Orman Meyveli',
    emoji: '🍒',
    category: 'cup',
    img: '/images/foto/orman-meyveli.jpg',
    desc: 'Çilek, orman meyvesi sosu ve krema bir arada. Meyveli tatlı sevenlerin favorisi.',
    tags: ['Meyveli', 'Çilekli'],
  },
  {
    id: 'cikolatali-cilekli-sepet',
    name: 'Çikolatalı Çilekli Sepet',
    emoji: '🧺',
    category: 'cup',
    img: '/images/foto/cikolatali-cilekli-sepet.jpg',
    desc: 'Çikolata ile çileğin klasik uyumu, kruvasan sepetinde buluştu. Paylaşmak zor.',
    tags: ['Çikolatalı', 'Çilekli'],
  },
  {
    id: 'oreolu-kruvasan',
    name: 'Oreolu Kruvasan',
    emoji: '🍪',
    category: 'cup',
    img: '/images/foto/oreolu-kruvasan.jpg',
    desc: 'Çıtır kruvasan sepeti, içi yumuşacık krema, üstü Oreo bisküvi ve çikolata.',
    tags: ['Oreolu', 'Çikolatalı'],
  },
]

// Görseller: public/images/foto
// hero.jpg → @yesil.bakery Instagram gönderisi
// ürün fotoğrafları → @yesil.bakery Instagram gönderileri (800×800 kırpılmış)
// el-emegi.jpg (Bolbol Roll) ve vitrin.jpg (Çilek Taçlı) → aynı gönderilerden dikey kırpım
export const PHOTOS = {
  // dükkan önünde üç favori — hero.jpg (1448px) asıl dosya; sayfa küçültülmüş sürümleri kullanır
  hero: '/images/foto/hero-900.jpg',
  heroSrcset:
    '/images/foto/hero-600.webp 600w, /images/foto/hero-900.webp 900w, /images/foto/hero-1200.webp 1200w',
  handmade: '/images/foto/el-emegi.jpg', // Bolbol Roll, kat kat rulo
  inside: '/images/foto/vitrin.jpg', // Çilek Taçlı kruvasan
}
