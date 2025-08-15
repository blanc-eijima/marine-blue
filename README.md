# マリンブルー - 広島の海洋散骨サービス

広島県の海洋散骨サービス「マリンブルー」の公式ウェブサイトです。

## 🌊 プロジェクト概要

このウェブサイトは、広島県で海洋散骨サービスを提供するマリンブルーの情報サイトです。サービス紹介、料金プラン、アクセス情報、お客様の声などを掲載しています。

## 🛠️ 技術スタック

- **フロントエンド**: React 18
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **開発言語**: JavaScript (JSX)
- **パッケージマネージャー**: npm

## 📁 プロジェクト構成

```
marine blue/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Header.jsx      # ヘッダー
│   │   ├── Hero.jsx        # ヒーローセクション
│   │   ├── About.jsx       # サービス紹介
│   │   ├── Features.jsx    # 特徴・サービス内容
│   │   ├── Plans.jsx       # 料金プラン
│   │   ├── Process.jsx     # サービスの流れ
│   │   ├── Testimonials.jsx # お客様の声
│   │   ├── Access.jsx      # アクセス情報
│   │   └── Footer.jsx      # フッター
│   ├── assets/             # 画像などの静的ファイル
│   ├── App.jsx             # メインアプリケーション
│   ├── main.jsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
├── index.html              # HTMLテンプレート
├── package.json            # 依存関係とスクリプト
├── tailwind.config.js      # Tailwind CSS設定
├── postcss.config.js       # PostCSS設定
└── vite.config.js          # Vite設定
```

## 🚀 セットアップ手順

### 前提条件

- Node.js (推奨バージョン: 16.x以上)
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone https://github.com/[ユーザー名]/marine-blue.git
cd marine-blue
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

開発サーバーが起動すると、`http://localhost:5173` でサイトにアクセスできます。

## 📝 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動（ホットリロード対応）
- `npm run build` - 本番用にビルド
- `npm run preview` - ビルドしたファイルをプレビュー

## 🌐 デプロイ

このプロジェクトは以下のプラットフォームでデプロイできます：

- **GitHub Pages**: 無料でホスティング
- **Vercel**: 高速で簡単なデプロイ
- **Netlify**: 継続的デプロイメントサポート

### GitHub Pagesでのデプロイ

1. GitHub Actionsを使用した自動デプロイが設定されています
2. `main`ブランチへのプッシュで自動的にデプロイされます

## 🔧 開発時の注意事項

- コンポーネントは`src/components/`ディレクトリに配置
- スタイリングはTailwind CSSを使用
- 画像などの静的ファイルは`src/assets/`に配置
- レスポンシブデザインに対応

## 📞 お問い合わせ

プロジェクトに関するご質問やご提案がございましたら、Issueを作成するかプルリクエストをお送りください。

---

© 2024 マリンブルー. All rights reserved.
