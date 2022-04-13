<template>
  <div class="form__upload">
    <h3>Загрузка документов</h3>
    <p>
      Приложите пожалуйста полноэкранный скриншот.
      <br />
      Это поможет быстрее решить проблему
    </p>
    <p>
      <input
        type="file"
        accept="/*"
        name="message"
        ref="file"
        @change="handleFileUpload()"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      file: null,
    }
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0]
      this.$store.state.file = this.file
    },
  },
}
</script>
