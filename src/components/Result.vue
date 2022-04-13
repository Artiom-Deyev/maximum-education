<template>
  <div class="main wrapper">
    <p>
      Результат вашего запроса: <span>{{ text || 'ошибка' }}</span>
    </p>
    <hr />
    <div class="back" @click="onClick()">Вернуться назад</div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      text: this.$store.state.requestText,
    }
  },
  methods: {
    onClick() {
      this.$emit('return-back')
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  margin-right: auto;
  margin-left: auto;
  /* max-width: 960px; */
  padding-right: 10px;
  padding-left: 10px;
}

.main {
  position: absolute;
  background-color: white;
  display: flex;
  font-size: 36px;
  box-shadow: 10px 10px 15px #000000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  border: 1px solid black;
  padding-top: 50px;
  top: 160px;
  left: 0px;
}

.back {
  padding: 10px 8px;
  background-color: orange;
  color: gray;
  border-radius: 5%;
  cursor: pointer;
}

.main p {
  font-size: 36px;
}

.main span {
  font-weight: 800;
}
</style>
