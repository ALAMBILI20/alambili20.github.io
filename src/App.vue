<script setup>
import FooterMobile from './components/elements/FooterMobile.vue'
import NavbarDesktop from './components/elements/NavbarDesktop.vue'
import NavbarMobile from './components/elements/NavbarMobile.vue'
</script>

<template>
  <NavbarDesktop />
  <main class="overflow-y-auto bg-black max-lg:pb-16 tinggi-konten">
    <RouterView />
    <FooterMobile />
  </main>
  <NavbarMobile />
</template>

<style>
.tinggi-konten {
  min-height: 100dvh;
}
</style>
