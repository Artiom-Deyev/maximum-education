<template>
  <div class="form__city" @change="onChange()">
    <h3>Ваш филиал <span class="required">*</span></h3>
    <label for="form__select"></label>
    <select
      name="message"
      id="form__select"
      :disabled="onlineChecked"
      :class="{ active: !onlineChecked }"
      v-model="chosenCity"
      required
    >
      <option value="" hidden disabled selected>
        {{ !onlineChecked ? 'Выберите город' : 'Вы находитесь онлайн' }}
      </option>
      <option
        v-show="!onlineChecked"
        v-for="city in cities"
        :key="city.id"
        :value="city.title"
      >
        {{ !onlineChecked ? city.title : 'Нельзя выбрать' }}
      </option>
      <span>Select something</span>
    </select>

    <div class="form__city-online">
      <input
        class="form__city-label"
        type="checkbox"
        id="online"
        name="message"
        @click="onCheck"
      />
      <label for="online"><p>Онлайн</p></label>
    </div>
    <br />
  </div>
</template>

<script>
import EventService from '../services/EventService.js'

export default {
  name: 'City',
  data() {
    return {
      cities: [],
      onlineChecked: false,
      chosenCity: '',
    }
  },
  methods: {
    onCheck() {
      this.onlineChecked = !this.onlineChecked
    },
    onChange() {
      if (this.chosenCity !== '') {
        this.$store.state.chosenCity = this.chosenCity
        this.$emit('update-city')
      } else if (this.onlineChecked) {
        this.$store.state.chosenCity = 'online'
        this.$emit('update-city')
      }
      console.log(this.$store.state.chosenCity)
    },
  },
  created() {
    EventService.getCities()
      .then((response) => {
        this.cities = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.active {
  background-color: transparent;
  border: 1px solid gray;
}
</style>
