<template>
  <div class="users">
    <div v-for="user in users" v-bind:key="user.id" class="users_usr">
      <span class="user_usr--id">{{ user.id }}</span>
      <span class="user_usr--name">{{ user.name }}</span>
      <span class="user_usr--age">{{ user.age }}</span>
    </div>
    <div class="users_form">
      <button
        v-bind:disabled="submitting"
        class="users_form--submit"
        v-on:click="createUser"
      >
        {{ submitting ? "submitting..." : "Add User" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  data() {
    return {
      submitting: false,
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    fakeUser() {
      return {
        id: Date.now(),
        name: "fake_user",
        age: 29,
      };
    },
    ...mapActions(['addUser']),
     createUser: async function() {
      this.submitting= true
      await this.addUser({user: this.fakeUser()})
      this.submitting = false
    },
  },
};
</script>

<style lang="scss" scoped>
.users {
  display: block;
  border: 1px solid gray;
  min-width: 500px;
  &_usr {
    display: flex;
    justify-content: space-evenly;
    > span {
      flex-basis: 33.3%;
    }
  }
}</style
>>
