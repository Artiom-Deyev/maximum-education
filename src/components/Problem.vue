<template>
  <div class="form__problem">
    <h3>Описание проблемы <span class="required">*</span></h3>
    <textarea
      @input="onChange()"
      name="message"
      id=""
      rows="5"
      placeholder="Введите текст"
      required
      v-model="text"
    ></textarea>
  </div>
  <p>{{ answer }}</p>
</template>

<script>
export default {
  name: 'Problem',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onChange() {
      this.$store.state.problemText = this.text
      this.$emit('problem-update')
    },
  },
}
</script>
