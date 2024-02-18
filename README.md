# toast-sample-vue2

## Over View
Vue.jsでトーストを表示するサンプル。<br>
アイコンにはFontawesomeを利用。<br>

## Environment
- Vue2

## Libraries
- vue-toasted
- fontawesome-free

## How to use
### Project setup
```shell
% docker run -d -it --rm --name my_node_test -p 8080:8080 -v $(pwd):/usr/src/app --workdir /usr/src/app node:20.11.1
% docker exec -it my_node_test /bin/bash
# cd toast-sample-vue2
# yarn install
```
※ プロンプト記号`%`はdockerホスト、`#`はコンテナ上を示す。

### Compiles and hot-reloads for development
```shell
# yarn serve
```

### Browser access
```
http://localhost:8080/
```

## Stop Container
```shell
(Ctrl + C)
# exit
% docker stop my_node_test
```

## How to Create The Project
Vue2開発環境を簡易的に構築するための備忘録。<br>
このプロジェクトで利用するライブラリをインストールする手順も含む。

### Vue環境のセットアップ
```shell
% docker run -d -it --rm --name my_node_test -p 8080:8080 -v $(pwd):/usr/src/app --workdir /usr/src/app node:20.11.1
% docker exec -it my_node_test /bin/bash
# yarn global add @vue/cli
```

### Vue2プロジェクトの作成
```shell
# vue create toast-sample-vue2
```
```
? Please pick a preset: 
  Default ([Vue 3] babel, eslint) 
❯ Default ([Vue 2] babel, eslint) 
  Manually select features 

? Pick the package manager to use when installing dependencies: (Use arrow keys)
❯ Use Yarn 
  Use NPM 
```

### ライブラリの追加
```shell
# cd toast-sample-vue2
# yarn add vue-toasted
# yarn add @fortawesome/fontawesome-free
```

### インストール
上記ライブラリ追加と同時に実行される。追加しない場合は手動実行。
```shell
# yarn install
```

### 起動とブラウザアクセス
```shell
# yarn serve
```
```
http://localhost:8080/
```

### 停止
```shell
(Ctrl + C)
# exit
% docker stop my_node_test
```