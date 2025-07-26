<script setup lang="ts"></script>

<template>
  <main
    class="fixed top-0 left-0 z-50 items-center hidden w-full h-16 text-gray-100 lg:flex bg-black/25 backdrop-blur-lg"
  >
    <div class="container flex justify-between px-3 mx-auto">
      <!-- logo -->
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img src="../../assets/logo.svg" alt="Logo" class="w-8 h-8 mr-2" />
          <span class="text-lg font-semibold">Daput Kita</span>
        </div>
      </div>

      <!-- menu -->
      <div class="flex items-center gap-10 text-gray-100">
        <router-link :to="{ name: 'beranda' }" class="font-bold" active-class="text-teal-400"
          >Home</router-link
        >
        <router-link :to="{ name: 'menu' }" class="font-bold" active-class="text-teal-400"
          >Menu</router-link
        >
        <router-link :to="{ name: 'about' }" class="font-bold" active-class="text-teal-400"
          >About</router-link
        >
        <router-link :to="{ name: 'contack' }" class="font-bold" active-class="text-teal-400"
          >Contack</router-link
        >
      </div>
    </div>
  </main>
</template>
