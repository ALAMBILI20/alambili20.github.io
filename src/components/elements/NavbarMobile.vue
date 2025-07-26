<script setup>
import { useRoute } from 'vue-router'
import HomeIcon from '../icons/HomeIcon.vue'
import { computed } from 'vue'
import MenuMakananIcon from '../icons/MenuMakananIcon.vue'
import KontakIcon from '../icons/KontakIcon.vue'
import AboutIcons from '../icons/AboutIcons.vue'
const route = useRoute()
const root = computed(() => route.name)
</script>

<template>
  <main
    class="fixed bottom-0 z-20 flex flex-col items-center justify-center w-full h-20 px-3 bg-white backdrop-blur-lg lg:hidden"
  >
    <nav class="grid w-full grid-cols-4 gap-2">
      <!-- home -->
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'beranda' }"
          class="flex items-center justify-center p-2 w-fit rounded-xl"
          :class="root === 'beranda' ? 'bg-black/10' : ''"
        >
          <HomeIcon
            class="size-7"
            :class="root === 'beranda' ? 'text-teal-400' : 'text-gray-800'"
          />
        </router-link>
      </div>

      <!-- menu -->
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'menu' }"
          class="flex items-center justify-center p-2 w-fit rounded-xl"
          :class="root === 'menu' ? 'bg-black/10 ' : ''"
        >
          <MenuMakananIcon
            class="size-7"
            :class="root === 'menu' ? 'text-teal-400' : 'text-gray-800'"
          />
        </router-link>
      </div>

      <!-- about -->
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'about' }"
          class="flex items-center justify-center p-2 w-fit rounded-xl"
          :class="root === 'about' ? 'bg-black/10' : ''"
        >
          <AboutIcons
            class="size-7"
            :class="root === 'about' ? 'text-teal-400' : 'text-gray-800'"
          />
        </router-link>
      </div>

      <!-- kontak -->
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'contack' }"
          class="flex items-center justify-center p-2 w-fit rounded-xl"
          :class="root === 'contack' ? 'bg-black/10' : ''"
        >
          <KontakIcon
            class="size-7"
            :class="root === 'contack' ? 'text-teal-400' : 'text-gray-800'"
          />
        </router-link>
      </div>
    </nav>
  </main>
</template>
