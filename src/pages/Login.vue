<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axiosSetup from '../util/axios-setup.js';

import { urlDecodeObjectValues } from '../util/misc.js';

const router = useRouter();
const currentRoute = useRoute();

const loginInfo = ref({
  email: '',
  otp: ''
});

const login = async () => {
  try {
    const token = await axiosSetup
      .post('/auth/login', {
        email: loginInfo.value.email,
        token: loginInfo.value.otp
      })
      .then(res => res.data);

    localStorage.setItem('authToken', token);
    axiosSetup.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const routeParams = urlDecodeObjectValues(currentRoute.query);
    const navResult = router.push(routeParams);
    if (navResult) {
      console.error('Provided destination route is invalid');
    }
  } catch (err) {
    console.error(err.response.data);
    return false;
  }
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input
        type="email"
        placeholder="Email"
        v-model.trim="loginInfo.email"
        autocomplete="username"
        required
      />
      <input type="tel" placeholder="OTP Code" v-model="loginInfo.otp" required />
      <button type="submit">Sign In</button>
    </form>
  </main>
</template>

<style lang="css" scoped>
main {
  width: 25rem;
  margin: 3rem auto;
}

h1 {
  width: min-content;
  font-size: 2rem;
  font-family: var(--sans-serif-title);
  border-left: 10px var(--main-color) solid;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  margin: auto;
}

input {
  color: var(--white);
  border: none;
  border: 1px solid var(--gray);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}

button {
  color: var(--gray);
  border: none;
  font-size: 1rem;
  font-family: var(--sans-serif-regular);
  cursor: pointer;
  border: 1px solid var(--gray);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition-duration: 200ms;
}

button:hover {
  border-color: var(--white);
  color: var(--white);
}
</style>
