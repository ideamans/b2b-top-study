import DefaultTheme from 'vitepress/theme'

import './style.css'

/**
 * 既定テーマそのまま。CSS を足すためだけに置いている。
 *
 * 検索ウィジェットは Vue 側では挿さない。`mpa: true` でクライアントJSを
 * 配信しないため、挿し込みは `/knowledge-search.js`（素のJS）が
 * `data-mount` で行う（config.mts の head を参照）。
 */
export default DefaultTheme
