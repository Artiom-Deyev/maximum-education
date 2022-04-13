import { createStore } from "vuex";


export default createStore({
  state: {
    chosenCity: "",
    problemType: "",
    problemText: "",
    file: null,
    requestText: "",
  },
  mutations: {
    SUBMIT_FILE(state) {
      let formData = new FormData();
      formData.append('file', state.file);
      fetch('https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/send-form', {
        method: 'POST',
        body: JSON.stringify({
          'Ваш филиал': state.chosenCity,
          'Тема обращения': state.problemType,
          'Описание проблемы': state.problemText,
          'Загрузка документов': formData || null
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => state.requestText = json)
        .catch(error => alert(error))      
    }
  },
  actions: {},
  modules: {},
});
