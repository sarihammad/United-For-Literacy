<script lang="ts" setup>
useHead({
  title: 'United for Literacy',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Poppins'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  background-color: var(--white);
  font-family: 'Poppins', Arial, sans-serif;
}

:root {
  --dark-green: #00565a;
  --dark-blue: #093254;
  --green: #3fa947;
  --lime-green: #92c83e;
  --spring-green: #00734f;
  --light-blue: #00bfdf;
  --purple: #73308c;
  --orange: #f36c21;
  --gray: #4d4d4d;
  --black: #2b2b2b;
  --white: #ffffff;
  --font-black: #212427;
}
</style>
