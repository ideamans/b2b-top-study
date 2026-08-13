import { defineConfig } from "vitepress";
import { withMachineReadability } from "vitepress-machine-readability";
// @ts-ignore ビルド済みの単一ファイル（services/knowledge が配布元）
import { buildKnowledgePackage } from "./knowledge-indexer.mjs";

const SITE_URL = "https://b2b-top.whitepapers.ideamans.com";
const SITE_TITLE = "B2Bトップページ研究";
const SITE_DESCRIPTION =
  "62のB2B SaaSサービスサイトのトップページ構成を横断分析。セクション配置パターン、採用率、スクリーンショット付き実例集。";

// ナレッジのファセット。下の sidebar のグループ名と揃えている
const SECTION_TITLES: Record<string, string> = {
  patterns: "構成パターン（類型）",
  sections: "セクション別ガイド",
  hero: "ヒーロー深掘り",
};

export default defineConfig(
  withMachineReadability({
  mpa: true,
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  // リポジトリのREADMEは開発者向けの内部文書。除外しないと
  // /README.html として公開され、検索結果にも出てしまう。
  srcExclude: ["README.md"],

  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["link", { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" }],
    [
      // ナレッジ基盤の検索UI。MPAなのでVueのハンドラは使えず素のJSで動く。
      // 本体（InstantSearch）は検索を始めた人だけが読む遅延ロード。
      //
      // 挿し込み先はテーマが検索窓を置く枠（search: false でも残る）。
      // 元の位置をそのまま引き継ぐので、スマホではハンバーガーの左に出る。
      "script",
      {
        src: "/knowledge-search.js",
        defer: "",
        "data-set": "b2b-top",
        "data-label": "この調査を検索",
        "data-mount": ".VPNavBarSearch",
      },
    ],
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

    socialLinks: [
      { icon: "github", link: "https://github.com/ideamans/b2b-top-study" },
    ],

    outline: { level: [2, 3], label: "目次" },
    lastUpdated: { text: "最終更新" },
    docFooter: { prev: "前のページ", next: "次のページ" },

    // テーマ内蔵の local search は **MPA では動かない**。
    // mpa: true はクライアントJSを一切配信しないので、検索ボタンだけが
    // 描かれて押しても何も起きない状態になる（実際そうなっていた）。
    // ナレッジ基盤の検索UI（素のJSで動く）に置き換えている。
    search: false,
  },

  async buildEnd(siteConfig) {
    // ナレッジパッケージ。deploy.sh が knowledge.ideamans.com へ送る。
    const pkg = await buildKnowledgePackage(siteConfig, {
      id: "b2b-top",
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      origin: SITE_URL,
      include: "**/*.md",
      out: "knowledge/b2b-top.zip",
      outline: { group_by: "directory" },
      search: { facets: ["category_labels", "category_path"] },
      map: (page: any) => {
        const fm = page.frontmatter ?? {};
        const section = page.url.replace(/^\//, "").split("/")[0] ?? "";
        const label = SECTION_TITLES[section];

        return {
          // overview / flow / about は frontmatter に title が無く、
          // 見出しがそのままページ名になっている
          title: fm.title ?? fm.hero?.name ?? page.firstHeading,
          // トップは layout: home で本文を持たず、hero に紹介文がある
          summary: fm.description ?? fm.hero?.tagline,
          category_path: section ? [section] : [],
          category_labels: label ? [label] : [],
        };
      },
    });
    console.log(
      `[knowledge] ${pkg.out} (${pkg.documents}件 / ${(pkg.bytes / 1024).toFixed(1)}KB / ${pkg.generation})`,
    );
  },
},
  // 検索エンジンとAIから読める状態にする
  {
    hostname: SITE_URL,
    // 版下は plans/artboard の B2bTopBoard.vue
    defaultImage: "/ogp.png",
    organization: {
      name: "アイデアマンズ株式会社",
      url: "https://www.ideamans.com/",
    },
    markdownSource: true,
    lint: "warn",
  },
));
