# portfolio-ghpages

GitHub Pages 向けの静的ポートフォリオサイトです。

## 1. ローカル確認

```bash
cd /Users/masaya07/MyApps/portfolio-ghpages
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いて確認してください。

## 2. GitHub リポジトリ作成

用途に応じて以下のどちらかを選びます。

- ユーザーサイト: `YOUR_GITHUB_ID.github.io`
- プロジェクトサイト: 任意のリポジトリ名（例: `portfolio-ghpages`）

## 3. 初回 push

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin git@github.com:YOUR_GITHUB_ID/YOUR_REPO.git
git push -u origin main
```

## 4. GitHub Pages 有効化

- GitHub の対象リポジトリで `Settings` -> `Pages`
- `Build and deployment` の `Source` を `Deploy from a branch` に設定
- `Branch` は `main` / `/(root)` を選択し保存

## 5. 公開 URL

- ユーザーサイト: `https://YOUR_GITHUB_ID.github.io/`
- プロジェクトサイト: `https://YOUR_GITHUB_ID.github.io/YOUR_REPO/`

## カスタマイズ箇所

- プロフィール文: `index.html`
- アプリ情報: `index.html` の `#projects`
- 配色やフォント: `styles.css`
- フッター年表示: `script.js`
