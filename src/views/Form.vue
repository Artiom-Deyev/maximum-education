<template>
  <h1 class="header wrapper">Форма подачи заявки в отдел сервиса и качества</h1>

  <form class="form wrapper">
    <City @update-city="updateCity()" />
    <FormRadio @update-topic="updateTopic()" />
    <Problem @problem-update="updateProblem()" />
    <Upload />
    <Result v-show="result" @return-back="closeResult()" />

    <router-link to="/">
      <button
        class="form__btn"
        type="submit"
        value="message"
        :class="{ active: !buttonStatus }"
        :disabled="buttonStatus"
        @click="onClick()"
      >
        ОТПРАВИТЬ
      </button>
    </router-link>
  </form>
</template>

<script>
import City from '@/components/City.vue'
import FormRadio from '@/components/FormRadio.vue'
import Problem from '@/components/Problem.vue'
import Upload from '@/components/Upload.vue'
import Result from '@/components/Result.vue'

export default {
  name: 'Form',
  components: { City, FormRadio, Problem, Upload, Result },
  data() {
    return {
      cityFilled: false,
      topicFilled: false,
      problemFilled: false,
      result: false,
    }
  },
  methods: {
    onClick() {
      this.$store.commit('SUBMIT_FILE')
      this.result = true
    },
    updateCity() {
      this.cityFilled = true
    },
    updateTopic() {
      this.topicFilled = true
    },
    updateProblem() {
      this.problemFilled = true
    },
    closeResult() {
      this.result = false
    },
  },
  computed: {
    buttonStatus: function () {
      if (this.cityFilled && this.topicFilled && this.problemFilled) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  height: 100vh;
  margin: 0;
}

.wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
}

.header {
  padding: 0;
}

.required {
  color: red;
}

.form {
  border: 1px solid grey;
  padding: 25px;
  position: relative;
}

.form h3 {
  color: grey;
  font-weight: 300;
}

.form p {
  color: grey;
  font-weight: 300;
  font-size: 14px;
}

.form__city {
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
}

.form__city select {
  background-color: lightgray;
  background-image: url('/img/arrow-down.png') right white;
  background-repeat: no-repeat;
  border: 1px solid var(--select-border);
  color: grey;
  padding: 0.25em 0.25em;
  width: 25%;
  height: 30px;
  font-weight: 300;
  cursor: pointer;
  line-height: inherit;
  outline: none;
}

.form__city-online {
  display: flex;
  flex-direction: row;
  padding-right: 20px;
}

.form__city-label:checked,
.form__city-label:not(:checked) {
  position: absolute;
  left: -9999px;
}

.form__city-label:checked + label,
.form__city-label:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 28px;
  line-height: 20px;
  cursor: pointer;
}

.form__city-label:checked + label:before,
.form__city-label:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0px;
  top: 14px;
  width: 18px;
  height: 18px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  border-radius: 2px;
}

.form__city-label:checked + label:after,
.form__city-label:not(:checked) + label:after {
  content: '';
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  left: 3px;
  top: 17px;
  width: 10px;
  height: 5px;
  border-radius: 1px;
  border-left: 4px solid black;
  border-bottom: 4px solid black;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.form__city-label:not(checked) + label:after {
  opacity: 0;
}

.form__city-label:checked + label:after {
  opacity: 1;
}

.form__radio {
  margin-bottom: 40px;
}

.form__radio-label {
  display: block;
  position: relative;
  padding-left: 35px;
  padding-bottom: 10px;
  margin-bottom: 11px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.form__radio-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.form__radio-label input:checked ~ .checkmark:after {
  display: block;
}

.form__radio-label .checkmark:after {
  top: 4px;
  left: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: black;
}

.form__radio-text {
  padding: 6px;
}

.form__problem {
  margin-bottom: 40px;
  margin-top: 30px;
}

.form__problem textarea {
  width: 100%;
  place-content: inherit;
  resize: none;
  margin-bottom: 0;
}

.form__btn {
  padding: 8px;
  border: none;
  background-color: #adb5bd;
}

.active {
  background-color: orange;
}

.form__upload {
  margin-bottom: 40px;
}

.form__btn p {
  color: white;
  font-weight: 500;
  margin: 0;
  padding: 4px 10px 4px 10px;
}

@media (max-width: 975px) {
  .wrapper {
    margin-right: 14px;
    margin-left: 14px;
  }
}
</style>
