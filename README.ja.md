# Point Atlas Fiveview

文字・ロゴ・画像の輪郭を、上・手前・右・奥・左の5方向へ割り当てるローカル制作ツールです。実験的なOSSで、作者コードはMITライセンスです。実機AR・iPhone・長時間の熱性能は未検証です。

原作品の入口、認識画像、保存済みターゲット、固定字形、色覚による別読みの処理を含めず、このフォルダーだけで再構築できます。サンプルの文字と認識画像はコードから生成します。

## インストールせず試す

**[HTTPSデモを開く](https://42libft.github.io/point-atlas-fiveview/)** →「サンプルを試す」で、明るい背景と黒い点の五方向サンプルを表示します。方向ボタンで形を確かめ、自分の文字・ロゴへ変更し、JSONに保存できます。開くだけではカメラは起動しません。

**[v0.1.1の配布ページ](https://github.com/42libft/point-atlas-fiveview/releases/tag/v0.1.1)** にソースZIP、ビルド済みweb ZIP、`SHA256SUMS.txt` があります。実験的なpre-releaseです。

web ZIPはNode.jsなしで使えます。展開して、インストール済みのPython 3で配信します。

```sh
cd point-atlas-fiveview-web
python3 -m http.server 8000 --bind 127.0.0.1
```

`http://127.0.0.1:8000/` を開きます。フォルダー内のファイルを一式保持してください。HTMLのダブルクリックには対応しません。localhostはサーバーを動かした端末自身を指すため、別のスマートフォンではHTTPSデモを使ってください。

## 再構築

Node.js 22以上とnpmを用意します。固定バージョンと完全な解決情報は `package.json` と `package-lock.json` にあります。ネイティブ依存のインストールスクリプトは実行しません。

GitHubから取得して実行します。ソースZIPを新規展開した場合は、依存取得前に `node tools/audit-generic-source.mjs --strict` も実行できます。strictはGit情報も拒否します。通常モードはcloneのGit情報と作業用出力を読み飛ばします。

```sh
git clone https://github.com/42libft/point-atlas-fiveview.git
cd point-atlas-fiveview
node tools/audit-generic-source.mjs
mkdir -p .cache
touch .cache/npm-userconfig .cache/npm-globalconfig
npm ci --ignore-scripts --no-audit --no-fund --cache .cache/npm --userconfig .cache/npm-userconfig --globalconfig .cache/npm-globalconfig --registry https://registry.npmjs.org
npm run verify
npm run preview -- --port 4186
```

使い方とデモの入口は `http://127.0.0.1:4186/`、制作画面は `http://127.0.0.1:4186/atlas.html`、AR画面は `http://127.0.0.1:4186/atlas-ar.html` です。アプリはビルド済みの静的ファイルだけで動きます。Viteの `base: './'` によりサブディレクトリにも配置できます。配信対象は `dist/` だけです。カメラ利用にはHTTPSまたはlocalhostが必要です。

`verify` は汎用unit tests、監査の拒否ケース、TypeScript、Viteビルド、ソースと配信物の混入監査を実行します。今回の実測と未検証範囲は [検証記録](docs/VERIFICATION.md) に記載しています。

## 使い方

1. 5方向の欄へ短い文字を入力するか、PNG・JPEG・WebPを選びます。画像の暗い部分・明るい部分・透明以外をしきい値で輪郭化します。
2. 「入力を反映」を押し、方向ボタン・ドラッグ・ホイールで形を確認します。銀河、形を変える、固定した器、投影の交差の4方式を選べます。
3. 点数、奥行き、読み始める角度、背景と色を調整します。銀河では輪郭の読取方法、周辺点の残し方、横4方向を上方35°から読む設定も使えます。
4. 「プロジェクト保存」で輪郭マスクと設定をJSONへ保存し、「開く」で復元します。原画像は保存せず、正規化した輪郭とラベルを保存します。JSONを共有するときはラベルも確認してください。
5. 「AR出力」でAR画面へ移ります。自分の認識画像を選ぶか「自作ターゲットを使う」を押します。「認識画像を保存」でPNGを保存し、印刷または別画面へ表示します。「ターゲットを生成」で同じ画像を解析し、`.mind` を保存できます。PNGは生成と同じ長辺最大720pxに正規化します。
6. HTTPSまたはlocalhostで「ARを始める」を押します。「終了」は許可待ち中でも押せます。カメラなしの姿勢確認では座標変換を確認できます。

文字・画像の処理、ターゲット生成、描画は端末内で行います。入力を送信する解析APIやAPIキーはありません。依存取得には最初の `npm ci` でネットワークが必要です。カメラ許可はARを開始するときにブラウザーから求められます。制作画面からAR画面への受け渡しにはブラウザーの保存領域を使います。

## 制限

- 文字入力は40文字までですが、短い単語・太い輪郭向けです。細線、孤立点、密な日本語、長文、写真由来の輪郭は欠けたり読めなくなったりします。警告がないことも可読性の保証にはなりません。
- 画像は8MB・3200万画素以内、輪郭は256×256です。フルカラー画像の再現とSVG直接入力には対応しません。文字は同梱のIBM Plex Sans JP Boldを使い、含まれない字形はブラウザーのフォールバックに依存します。
- 点数は4096 / 12000 / 28672。固定した器の実点数は五面への配分により上限以下になります。点群のPLY保存は固定した器と投影の交差の形状のみで、五方向の情報はJSONに残します。
- 正反対から見た固定形状は鏡像関係になるため、独立した五画像の全てが投影の交差で成立するとは限りません。中間方向では複数の情報が混ざり、下方向は上方向へフォールバックします。
- MindAR画像追跡は認識画像を見続ける方式です。横や奥へ回り込むほど認識面が斜めになり、追跡が切れる場合があります。幾何角の表示は追跡成功率ではありません。
- 実機iPhone、実紙、実際に五方向へ回り込むAR、長時間の熱・性能は未検証です。CPU、合成fixture、headlessブラウザーの検査と区別してください。
- MindAR内部資源の後始末は1.2.5へ限定した実装です。Compilerにページ内の取消ボタンはありません。停止するにはページを再読込し、保存済みJSONとターゲットを読み戻します。合成カメラによる拒否・遅延許可・追跡消失と復帰・描画コンテキスト喪失は別途検査しています。端末メモリ不足やTensorFlow内部障害からの完全復旧は未検証です。日本語フォントとCompilerのbundleが大きいため初回読込も大きくなります。

## ライセンスと配布

作者コードは[MIT](LICENSE)です。第三者依存と同梱フォントにはそれぞれのライセンスが適用されます。[THIRD_PARTY_NOTICES](public/THIRD_PARTY_NOTICES.txt) と `public/licenses/` を参照してください。利用者の入力素材の権利は利用者が確認してください。

ビルドした `dist/` は `licenses/` と告知を含めて静的配信します。サブディレクトリにも配置できます。カメラ利用にはHTTPSまたはlocalhostが必要です。[今後の検証項目](docs/RELEASE_CHECKLIST.md)には、実機や長時間動作などの未検証範囲を記載しています。

`python3 tools/package-release.py` はソースとビルドを監査して、バージョン付きのソースZIP・web ZIP・SHA-256一覧を `.cache/release/` に作ります。公開操作は行いません。

ソースZIPを作る場合は `python3 tools/package-source.py` を実行します。`tools/source-policy.json` のファイルだけを格納し、Git履歴、cache、node_modules、dist、OS属性を除外します。生成先は `.cache/point-atlas-fiveview-source.zip` です。Python 3.9以上が必要です。`package.json` の `private: true` はnpmへの誤公開を防ぐ設定で、MITでの利用を制限しません。
