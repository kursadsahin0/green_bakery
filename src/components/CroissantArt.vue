<script setup>
import { useId } from 'vue'

defineProps({
  variant: { type: String, default: 'plain' }, // plain | strawberry | pistachio | chocolate
})

const uid = useId()
const g = (name) => `${uid}-${name}`

// Kruvasan dilimleri: [cx, cy, rx, ry, açı]
const lobes = [
  [36, 96, 15, 23, -62],
  [164, 96, 15, 23, 62],
  [64, 80, 25, 33, -36],
  [136, 80, 25, 33, 36],
  [100, 72, 35, 43, 0],
]
</script>

<template>
  <svg class="croissant" viewBox="0 0 200 150" role="img" :aria-label="`${variant} kruvasan illüstrasyonu`">
    <defs>
      <radialGradient :id="g('dough')" cx="45%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#ffd98a" />
        <stop offset="55%" stop-color="#eaa64a" />
        <stop offset="100%" stop-color="#b8692a" />
      </radialGradient>
      <linearGradient :id="g('shine')" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fff" stop-opacity=".55" />
        <stop offset="100%" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
    </defs>

    <ellipse cx="100" cy="136" rx="78" ry="8" fill="#17411b" opacity=".14" />

    <g v-for="(l, i) in lobes" :key="i" :transform="`rotate(${l[4]} ${l[0]} ${l[1]})`">
      <ellipse :cx="l[0]" :cy="l[1]" :rx="l[2]" :ry="l[3]" :fill="`url(#${g('dough')})`" stroke="#9a5420" stroke-width="1.5" />
      <path
        :d="`M ${l[0] - l[2] * 0.85} ${l[1] - l[3] * 0.25} Q ${l[0]} ${l[1] - l[3] * 0.05} ${l[0] + l[2] * 0.85} ${l[1] - l[3] * 0.25}`"
        fill="none" stroke="#9a5420" stroke-width="1.6" stroke-linecap="round" opacity=".55"
      />
      <path
        :d="`M ${l[0] - l[2] * 0.75} ${l[1] + l[3] * 0.3} Q ${l[0]} ${l[1] + l[3] * 0.5} ${l[0] + l[2] * 0.75} ${l[1] + l[3] * 0.3}`"
        fill="none" stroke="#9a5420" stroke-width="1.6" stroke-linecap="round" opacity=".45"
      />
      <ellipse :cx="l[0] - l[2] * 0.2" :cy="l[1] - l[3] * 0.55" :rx="l[2] * 0.45" :ry="l[3] * 0.18" :fill="`url(#${g('shine')})`" />
    </g>

    <!-- Çikolata -->
    <g v-if="variant === 'chocolate'">
      <path d="M58 52 C 72 40, 86 48, 100 38 S 128 44, 142 52 L 140 60 C 126 54, 114 62, 100 50 S 72 62, 60 60 Z" fill="#4a2414" />
      <path d="M44 74 l10 -8 l8 12 l10 -14 l10 12 l9 -14 l9 12 l10 -14 l9 12 l10 -12 l9 14 l8 -10"
        fill="none" stroke="#3a1a0d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="80" cy="44" r="3" fill="#7a3f22" />
      <circle cx="120" cy="46" r="2.5" fill="#7a3f22" />
    </g>

    <!-- Antep fıstığı -->
    <g v-if="variant === 'pistachio'">
      <path d="M56 54 C 70 38, 86 46, 100 34 S 130 42, 144 54 C 132 62, 118 56, 100 60 S 68 64, 56 54 Z" fill="#7fbf3f" stroke="#17411b" stroke-width="1.5" />
      <g fill="#0fa241">
        <ellipse cx="76" cy="48" rx="4" ry="2.6" transform="rotate(-20 76 48)" />
        <ellipse cx="92" cy="42" rx="4" ry="2.6" transform="rotate(30 92 42)" />
        <ellipse cx="110" cy="44" rx="4" ry="2.6" transform="rotate(-40 110 44)" />
        <ellipse cx="126" cy="50" rx="4" ry="2.6" transform="rotate(15 126 50)" />
        <ellipse cx="100" cy="52" rx="3.4" ry="2.2" transform="rotate(60 100 52)" />
      </g>
      <g fill="#ecf665">
        <circle cx="84" cy="52" r="1.6" />
        <circle cx="118" cy="40" r="1.6" />
        <circle cx="104" cy="44" r="1.3" />
      </g>
    </g>

    <!-- Çilek -->
    <g v-if="variant === 'strawberry'">
      <path d="M56 56 C 70 42, 86 50, 100 40 S 130 46, 144 56 C 130 64, 116 58, 100 62 S 70 66, 56 56 Z" fill="#fff6f6" stroke="#f3c2c2" stroke-width="1.5" />
      <g v-for="(s, i) in [[74, 44, -20], [100, 34, 0], [126, 44, 22]]" :key="i" :transform="`rotate(${s[2]} ${s[0]} ${s[1]})`">
        <path :d="`M ${s[0]} ${s[1] + 14} C ${s[0] - 12} ${s[1] + 4}, ${s[0] - 10} ${s[1] - 8}, ${s[0]} ${s[1] - 6} C ${s[0] + 10} ${s[1] - 8}, ${s[0] + 12} ${s[1] + 4}, ${s[0]} ${s[1] + 14} Z`" fill="#e5383b" />
        <path :d="`M ${s[0] - 6} ${s[1] - 7} L ${s[0]} ${s[1] - 3} L ${s[0] + 6} ${s[1] - 7} L ${s[0]} ${s[1] - 11} Z`" fill="#0fa241" />
        <circle :cx="s[0] - 3" :cy="s[1] + 1" r=".9" fill="#ffd6d6" />
        <circle :cx="s[0] + 3" :cy="s[1] + 4" r=".9" fill="#ffd6d6" />
        <circle :cx="s[0]" :cy="s[1] + 8" r=".9" fill="#ffd6d6" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.croissant {
  width: 100%;
  height: auto;
  overflow: visible;
}
</style>
