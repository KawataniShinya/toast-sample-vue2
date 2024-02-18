<!-- src/components/ExampleComponent.vue -->
<template>
  <div>
    <button @click="showToast">Show Toast</button>
  </div>
</template>

<script>
export default {
  methods: {
    showToast() {
      this.$toasted.show(
        'This is a toast message!', {
          type: 'error',
        }
      );
    },
  },
};
</script>

<style>
.toasted-container {
  /* トーストエリア全体の位置調整 */
  margin-bottom: -20px; /* 20px下げる */
  margin-right: -10px; /* 10px右寄せ */
  max-width: 50%; /* 画面の半分に設定 */
}

.toasted-container .toasted {
  /* 各トーストの調整 */
  min-height: 60px !important;
  padding-right: 45px !important; /* アイコンの分だけ右を空ける(アイコンをabsoluteにしたための調整) */
}

/* エラータイプのトーストに適用するスタイル */
.toasted.error {
  background-color: #FF367F !important; /* 任意の背景色を指定 */
  color: #ffffff; /* 任意のテキスト色を指定 */
}

.white-icon {
  color: white !important;
}

.large-icon {
  font-size: 24px !important;
}

.toasted-container .icon {
  /* メッセージが長文で自動改行されない場合、アイコンが追い出されてしまうためabsoluteに設定し、表示位置を固定。 */
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  margin-right: 10px
}
</style>
