<template>
  <label class="form__radio" for="name" @change="onChange" required>
    <h3>Тема обращения <span class="required">*</span></h3>

    <p>
      <label class="form__radio-label"
        >Недоволен качеством услуг
        <input
          type="radio"
          value="quality"
          name="radio"
          class="input__radio"
          v-model="problem"
        />
        <span class="checkmark"></span>
      </label>
    </p>

    <p>
      <label class="form__radio-label"
        >Расторжение договора
        <input
          type="radio"
          name="radio"
          value="contract-failure"
          class="input__radio"
          v-model="problem"
        />
        <span class="checkmark"></span>
      </label>
    </p>

    <p>
      <label class="form__radio-label"
        >Не приходит письмо активации на почту
        <input
          type="radio"
          value="mail-failure"
          name="radio"
          class="input__radio"
          v-model="problem"
        />
        <span class="checkmark"></span>
      </label>
    </p>

    <p>
      <label class="form__radio-label"
        >Не работает личный кабинет
        <input
          type="radio"
          value="profile"
          name="radio"
          class="input__radio"
          v-model="problem"
        />
        <span class="checkmark"></span>
      </label>
    </p>

    <input
      type="text"
      class="form__radio-text"
      placeholder="Другое"
      name="radio"
      v-model="other"
    />
  </label>
</template>

<script>
export default {
  name: 'FormRadio',
  data() {
    return {
      problem: '',
      other: '',
      checked: true,
    }
  },
  methods: {
    onChange() {
      if (this.problem !== '') {
        this.$store.state.problemType = this.problem
        this.other = ''
        this.$emit('update-topic')
      } else if (this.other !== '') {
        this.problem = ''
        this.$store.state.problemType = this.other
        this.$emit('update-topic')
      }
    },
  },
}
</script>
