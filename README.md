# HonoX Resume Template

HonoXを使用した職務経歴書Webアプリケーションのテンプレートです。
A resume web application template built with HonoX.

## 機能 / Features

- **静的サイト生成**: Vite + HonoX を使用した高速で軽量なWebサイトを自動生成
  **Static Site Generation**: Auto-generates fast, lightweight websites using Vite + HonoX
- **Markdown管理**: `public/README.md`でテンプレート形式の職務経歴書をMarkdownとして管理・編集可能
  **Markdown-based**: Manage and edit your resume as Markdown in `public/README.md`
- **階層別インタラクティブ表示**: Markdownの見出しレベル（H1-H4）に応じたセクション折り畳み機能
  **Interactive sections**: Collapsible sections based on heading levels (H1-H4)
- **変換拡張機能**: 特定URLに応じてYouTube埋め込み、スライド埋め込み、はてなブログカード、shields.ioバッジの自動変換
  **Embed converters**: Auto-converts YouTube, slide embeds, Hatena blog cards, and shields.io badges
- **マルチフォーマットダウンロード**: Markdown形式とPDF形式での職務経歴書ダウンロード（日本語・英語対応）
  **Multi-format download**: Download your resume as Markdown or PDF in both Japanese and English

## 技術スタック / Tech Stack

- **フレームワーク / Framework**: HonoX
- **ビルドツール / Build Tool**: Vite
- **スタイリング / Styling**: TailwindCSS
- **PDF生成 / PDF Generation**: md-to-pdf
- **デプロイ / Deploy**: GitHub Pages

## デプロイ方法 / Deployment

fork後リポジトリのmainブランチで`public/README.md`の内容を更新しコミットすると、GitHub ActionsによりGitHub Pagesに自動デプロイされます。
After forking, update `public/README.md` on the main branch and commit — GitHub Actions will automatically deploy to GitHub Pages.

デプロイが成功すると、`https://<ユーザー名>.github.io/<リポジトリ名>`のURLより職務経歴書サイトにアクセスできます。
Once deployed, your resume will be available at `https://<username>.github.io/<repository-name>`.

英語版を追加したい場合は、`public/README.en.md`を作成・編集してください。
To add an English version, create and edit `public/README.en.md`.

## ローカル検証手順 / Local Development

ローカル環境で検証したい場合は、以下の手順を実施してください。
To run locally, follow these steps.

1. 事前に以下コマンドでパッケージをインストール / Install dependencies

```bash
npm install
```

2. 以下コマンドでWebサイトをプレビュー表示可能 / Preview the website

```bash
# HTML/CSS/JS生成 / Build
npm run build

# プレビューサーバーの起動 / Start preview server
npm run preview
```

3. 以下コマンドでPDFファイルを生成可能 / Generate PDF files

```bash
# PDF生成（日本語）/ Build PDF (Japanese)
npm run build:pdf:compact

# PDF生成（英語）/ Build PDF (English)
npm run build:pdf:compact:en
```

## テンプレートリポジトリ追従手順 / Syncing with Template Repository

テンプレートリポジトリの更新をfork後も取り込みたい場合は、以下手順を実施してください。
To pull in updates from the template repository after forking:

1. 事前にfork後リポジトリをクローンし移動した後、テンプレートリポジトリをリモートブランチとして追加
   Clone your fork and add the template as an upstream remote.

```bash
git clone <fork後のリポジトリURL>
cd <fork後のリポジトリ>
git remote add upstream https://github.com/tsukuboshi/honox-resume-template.git
```

2. テンプレートリポジトリが更新された際に、以下コマンドでfork後のリポジトリに更新後コミットを取り込み可能
   When the template is updated, sync your fork:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

※fork後リポジトリで`public/README.md`以外のファイルを変更しコミットした後にこの手順を実施すると、コンフリクトが発生する恐れがあるためご注意ください。
*Note: If you have committed changes to files other than `public/README.md`, this may cause merge conflicts.*
