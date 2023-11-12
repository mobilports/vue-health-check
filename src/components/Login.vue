<template lang="html">
  <div class="flex justify-center">
    <form class="bg-white flex flex-col p-2 w-96 shadow-2xl" @submit.prevent="onSubmit()">
      <label for="email" class="p-2 text-left">Email address</label>
      <input type="text" class="border-2 p-4" id="email" name="email" v-model="formData.email">

      <!-- <p v-if="formData.email" class="mt-1 text-right text-red">
        This field is required
      </p> -->

      <label for="password" class="p-2 text-left">Password</label>
      <input type="password" class="border-2 p-4" id="password" name="password" v-model="formData.password">

      <!-- <p v-if="formData.password" class="mt-1 text-right text-red">
        This field is required
      </p> -->

      <button type="submit" class="bg-green mt-4 p-4 color-white font-medium uppercase">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import { LS_TOKEN_KEY, LS_TOKEN_VALUE } from './../constants/storage';

const formData = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(rules, formData);

const onSubmit = () => {
  if (v$.value.$invalid) {
    return;
  }

  login();
}

const login = () => {
  localStorage.setItem(LS_TOKEN_KEY, LS_TOKEN_VALUE);
  window.location.hash = '/dashboard';
}

</script>