---
description: 'この調査の手法です。対象62サイトの選び方、フルページスクリーンショットの撮影、セクションへの分解とタグ付け、定量分析とクラスタリングまでを順に説明します。'
---
# この調査について

## 調査手法

本調査は、以下の手順で実施しました。

### 1. 対象サイトの選定

国内外のB2B SaaSサービスサイトを幅広くリストアップし、トップページが独立して存在するサイトを調査対象としました。グローバルインフラサービス（AWS、Google Cloud等）やサブページのみのサービスは対象外としています。最終的に62サイトの調査を完了しました。

### 2. スクリーンショット撮影

各サイトのトップページに対して、ブラウザの開発者ツールを用いたフルページスクリーンショットを撮影しました。ビューポート幅1280pxを基準とし、ファーストビューおよび各セクション単位のスクリーンショットも個別に記録しています。

### 3. セクション分解とタグ付け

トップページを上からスクロールしながら、視覚的・意味的に独立したまとまり（セクション）ごとに分解しました。各セクションには、その役割を示す「タグ」を付与しています。タグは事前に定義した34種類の分類体系に基づいています。

主なタグの例:
- **hero** - ファーストビュー・メインビジュアル
- **features** - 主要機能の紹介
- **cta** - コンバージョン導線（問い合わせ・資料請求）
- **case-studies** - 導入事例・顧客インタビュー
- **social-proof** - 導入社数・利用者数などの実績数値

### 4. 定量分析

各セクションのページ内出現位置（0.0=先頭、1.0=末尾）を算出し、タグごとの採用率や配置位置の分布を統計的に分析しました。

### 5. クラスタリング分析

各サイトのタグ列（セクションの並び順）をもとにサイト間の類似度を正規化レーベンシュタイン距離で計算し、階層的クラスタリング（平均連結法）を適用して構成パターンを分類しました。

---

## データの読み方

### 採用率

「採用率」は、あるセクションタグを1つ以上持つサイトの割合です。例えば「機能紹介の採用率67.7%」は、62サイト中42サイトが機能紹介セクションを持っていることを意味します。

### ページ内位置

「ページ内位置」は、そのセクションがページ全体のどの位置に配置されているかを0.0（先頭）から1.0（末尾）の範囲で表します。セクション番号を総セクション数で割った値であり、ピクセル位置ではなくセクション順序に基づく比率です。

### 構成パターン

クラスタリングによる構成パターンは、セクションの並び順の類似性に基づく分類です。同じパターンに属するサイトは、似たセクション構成を持つ傾向がありますが、完全に同一ではありません。

---

## 調査対象サイト一覧

以下の62サイト（調査完了分）が本調査の分析対象です。

| サービス名 | URL |
|-----------|-----|
| Money Forward クラウド | [biz.moneyforward.com](https://biz.moneyforward.com) |
| freee | [www.freee.co.jp](https://www.freee.co.jp) |
| Sansan | [www.sansan.com](https://www.sansan.com) |
| Mazrica Sales | [product-senses.mazrica.com](https://product-senses.mazrica.com) |
| b→dash | [bdash-marketing.com](https://bdash-marketing.com) |
| SmartHR | [smarthr.jp](https://smarthr.jp) |
| KING OF TIME | [www.kingtime.jp](https://www.kingtime.jp) |
| jinjer | [hcm-jinjer.com](https://hcm-jinjer.com) |
| COMPANY | [www.works-hi.co.jp/products/hr](https://www.works-hi.co.jp/products/hr) |
| HRBrain | [www.hrbrain.jp](https://www.hrbrain.jp) |
| HRMOS | [hrmos.co](https://hrmos.co) |
| Chatwork | [go.chatwork.com/ja](https://go.chatwork.com/ja) |
| Salesforce | [www.salesforce.com/jp](https://www.salesforce.com/jp) |
| Kintone | [kintone.com](https://kintone.com) |
| 弥生会計オンライン | [www.yayoi-kk.co.jp/products/account-ol](https://www.yayoi-kk.co.jp/products/account-ol/) |
| バクラク | [bakuraku.jp](https://bakuraku.jp) |
| TOKIUM | [www.keihi.com](https://www.keihi.com) |
| Bill One | [bill-one.com](https://bill-one.com) |
| カオナビ | [www.kaonavi.jp](https://www.kaonavi.jp) |
| ジョブカン勤怠管理 | [jobcan.ne.jp](https://jobcan.ne.jp) |
| Talent Palette | [www.talent-palette.com](https://www.talent-palette.com) |
| HubSpot | [www.hubspot.jp](https://www.hubspot.jp) |
| eセールスマネージャー | [www.e-sales.jp](https://www.e-sales.jp) |
| SATORI | [satori.marketing](https://satori.marketing) |
| BowNow | [bow-now.jp](https://bow-now.jp) |
| KARTE | [karte.io](https://karte.io) |
| Adobe Marketo | [business.adobe.com/jp/products/marketo](https://business.adobe.com/jp/products/marketo) |
| Slack | [slack.com/intl/ja-jp](https://slack.com/intl/ja-jp) |
| LINE WORKS | [line.worksmobile.com/jp](https://line.worksmobile.com/jp) |
| Talknote | [talknote.com](https://talknote.com) |
| Microsoft Teams | [www.microsoft.com/ja-jp/microsoft-teams](https://www.microsoft.com/ja-jp/microsoft-teams) |
| Backlog | [backlog.com/ja](https://backlog.com/ja) |
| Asana | [asana.com/ja](https://asana.com/ja) |
| Jira | [www.atlassian.com/ja/software/jira](https://www.atlassian.com/ja/software/jira) |
| ClickUp | [clickup.com](https://clickup.com) |
| desknet's NEO | [www.desknets.com](https://www.desknets.com) |
| サイボウズ Office | [office.cybozu.co.jp](https://office.cybozu.co.jp) |
| クラウドサイン | [www.cloudsign.jp](https://www.cloudsign.jp) |
| DocuSign | [www.docusign.jp](https://www.docusign.jp) |
| GMOサイン | [www.gmosign.com](https://www.gmosign.com) |
| LegalForce | [legalforce-cloud.com](https://legalforce-cloud.com) |
| ContractS CLM | [www.contracts.co.jp](https://www.contracts.co.jp) |
| 楽楽精算 | [www.rakurakuseisan.jp](https://www.rakurakuseisan.jp) |
| invox受取請求書 | [invox.jp](https://invox.jp) |
| PCAクラウド | [pca.jp/cloud](https://pca.jp/cloud) |
| Sales Marker | [sales-marker.jp](https://sales-marker.jp) |
| Musubu | [musubu.in](https://musubu.in) |
| MiiTel | [miitel.com](https://miitel.com) |
| Helpfeel | [helpfeel.com](https://helpfeel.com) |
| openpage | [openpage.jp](https://openpage.jp) |
| STUDIO | [studio.design](https://studio.design) |
| ペライチ | [peraichi.com](https://peraichi.com) |
| microCMS | [microcms.io](https://microcms.io) |
| Movable Type | [www.movabletype.jp](https://www.movabletype.jp) |
| カイポケ | [www.kaipoke.biz](https://www.kaipoke.biz) |
| ANDPAD | [andpad.jp](https://andpad.jp) |
| カミナシ | [kaminashi.jp](https://kaminashi.jp) |
| スマレジ | [smaregi.jp](https://smaregi.jp) |
| Airレジ | [airregi.jp](https://airregi.jp) |
| rakumo | [rakumo.com](https://rakumo.com) |
| トヨクモ | [www.toyokumo.co.jp](https://www.toyokumo.co.jp) |
| CollaboFlow | [www.collabo-style.co.jp](https://www.collabo-style.co.jp) |
| kickflow | [kickflow.com](https://kickflow.com) |
| ferret One | [ferret-one.com](https://ferret-one.com) |
| SHANON | [www.shanon.co.jp](https://www.shanon.co.jp) |
| Scrapbox | [scrapbox.io](https://scrapbox.io) |
| esa | [esa.io](https://esa.io) |
| Kibela | [kibe.la](https://kibe.la) |

---

## 注意事項

- **調査時点の情報です。** 各サイトのトップページは随時更新されるため、本調査の内容と現在のサイト構成が異なる場合があります。
- **セクション分類は判断を含みます。** セクションの境界やタグの付与には一定の判断が伴います。同じコンテンツでも、文脈によって異なるタグが付与される場合があります。
- **採用率は「正解」を示すものではありません。** 採用率が高いセクションが必ず必要というわけではなく、採用率が低いセクションに価値がないわけでもありません。自社のサービス特性やマーケティング戦略に応じた判断が重要です。
- **対象は主にB2B SaaSサービスサイトです。** コーポレートサイトやECサイトなど、他の種類のWebサイトには直接適用できない場合があります。

---

## クレジット

本調査は、Claude Code と chrome-devtools MCP（Model Context Protocol）を活用した自動調査により実施しました。スクリーンショットの撮影、セクション分解、タグ付け、統計分析、レポート生成の各工程でAIによる支援を受けています。
