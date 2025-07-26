<script setup>
import ProfileComponent from '@/components/ProfileComponent.vue'
import WelcomeComponent from '@/components/WelcomeComponent.vue'
</script>

<template>
  <!-- welcome  -->
  <section class="h-screen lg-bg">
    <div class="flex items-center justify-center w-full pt-5 md:hidden">
      <div class="flex items-center gap-2 text-white">
        <img src="../assets/logo.svg" alt="" class="size-8" />
        <div class="font-extrabold uppercase drop-shadow-xl">Dapur kita</div>
      </div>
    </div>
    <div class="flex items-center justify-center h-full">
      <WelcomeComponent />
    </div>
  </section>

  <!-- profile -->
  <section class="relative pb-10 text-gray-100 bg-neutral-900">
    <div
      class="top-0 -translate-y-full h-[8rem] bg-gradient-to-b from-transparent to-neutral-900"
    ></div>
    <ProfileComponent />
  </section>
</template>

<style scoped>
.transisi {
  position: absolute;
  width: 100%;
  height: 8rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0));
  /* background-color: aquamarine; */
}
.tinggi {
  min-height: 100dvh;
}

.lg-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4)), url('../public/bg-home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
