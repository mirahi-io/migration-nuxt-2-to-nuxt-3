<template>
  <div>
    <h1>Plugin Example</h1>
    <p><code>vue-notifications</code> is available anywhere once registered, click the button below to show an alert</p>
    <br>
    <button @click="showNotification">Show Notification</button>
  </div>
</template>

<script setup lang="ts">
import {useNotification} from "@kyvg/vue3-notification";

const { notify } = useNotification()

function showNotification(){
  notify({
    title: 'Demo Notification',
    text: 'This is an example of a plugin being registered',
    type: 'success'
  });
}

</script>
