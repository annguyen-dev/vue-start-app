import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialUsers = [
  {
    id: 1,
    name: "user-01",
    age: 24
  },
  {
    id: 2,
    name: "user-02",
    age: 25
  },
  {
    id: 3,
    name: "user-03",
    age: 25
  }
];

export default new Vuex.Store({
  state: {
    users: initialUsers
  },
  actions: {
    addUser({ commit }, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("addUser", payload);
          resolve();
        }, 300);
      });
    }
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
  mutations: {
    addUser(state, { user }) {
      state.users = [...state.users, user];
      console.log(initialUsers);
    }
  },
  modules: {}
});
