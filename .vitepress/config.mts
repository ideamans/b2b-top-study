import { defineConfig } from "vitepress";

export default defineConfig({
  mpa: true,
  title: "B2Bトップページ研究",
  description:
    "62のB2B SaaSサービスサイトのトップページ構成を横断分析。セクション配置パターン、採用率、スクリーンショット付き実例集。",
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["link", { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" }],
  ],
  themeConfig: {
    nav: [
      { text: "トップ", link: "/" },
      { text: "調査概要", link: "/overview" },
      { text: "構成パターン", link: "/patterns/" },
      { text: "セクション別", link: "/sections/" },
    ],

    sidebar: [
      {
        text: "はじめに",
        items: [
          { text: "この調査について", link: "/overview" },
          { text: "典型的なページ構成の流れ", link: "/flow" },
          { text: "調査手法・対象サイト", link: "/about" },
        ],
      },
      {
        text: "構成パターン（類型）",
        items: [
          { text: "パターン一覧", link: "/patterns/" },
          { text: "王道フルスペック型", link: "/patterns/full-spec" },
          { text: "網羅フルコース型", link: "/patterns/full-course" },
          { text: "実績訴求・多機能型", link: "/patterns/trust-first" },
          { text: "価値提案・CTA直行型", link: "/patterns/value-cta" },
          { text: "料金・比較検討促進型", link: "/patterns/pricing-compare" },
          {
            text: "コミュニティ・ブランド型",
            link: "/patterns/community-brand",
          },
        ],
      },
      {
        text: "セクション別ガイド",
        collapsed: false,
        items: [
          { text: "セクション一覧・採用率", link: "/sections/" },
          {
            text: "メインコンテンツ",
            collapsed: false,
            items: [
              { text: "ヒーローエリア", link: "/sections/hero" },
              { text: "サービス概要", link: "/sections/service-overview" },
              { text: "価値訴求", link: "/sections/value-proposition" },
              { text: "課題解決", link: "/sections/problem-solution" },
              { text: "機能紹介", link: "/sections/features" },
              { text: "選ばれる理由", link: "/sections/why-chosen" },
              { text: "料金プラン", link: "/sections/pricing" },
              { text: "活用シーン", link: "/sections/use-cases" },
              { text: "製品ラインナップ", link: "/sections/product-lineup" },
            ],
          },
          {
            text: "信頼・実績",
            collapsed: false,
            items: [
              { text: "導入実績・数値", link: "/sections/social-proof" },
              { text: "導入企業ロゴ", link: "/sections/client-logos" },
              { text: "導入事例", link: "/sections/case-studies" },
              { text: "お客様の声", link: "/sections/testimonials" },
            ],
          },
          {
            text: "導入支援・サポート",
            collapsed: false,
            items: [
              { text: "サポート体制", link: "/sections/support" },
              { text: "導入の流れ", link: "/sections/onboarding-flow" },
              { text: "よくある質問", link: "/sections/faq" },
            ],
          },
          {
            text: "コンテンツ・CTA",
            collapsed: false,
            items: [
              { text: "CTA（問い合わせ導線）", link: "/sections/cta" },
              { text: "お役立ち資料", link: "/sections/resources" },
              { text: "お知らせ", link: "/sections/news" },
              { text: "セミナー・イベント", link: "/sections/seminar" },
            ],
          },
        ],
      },
      {
        text: "ヒーロー深掘り",
        items: [
          { text: "ヒーロー分析", link: "/hero/" },
          { text: "キャッチコピーのパターン", link: "/hero/catchcopy" },
        ],
      },
    ],

    outline: { level: [2, 3], label: "目次" },
    lastUpdated: { text: "最終更新" },
    docFooter: { prev: "前のページ", next: "次のページ" },
    search: { provider: "local" },
  },
});
