<template>
  <div class="flex">
    <div class="container flex flex-col items-center justify-center px-3 mx-auto text-center">
      <h1
        class="text-4xl font-extrabold text-white uppercase drop-shadow-md md:text-7xl lg:text-8xl"
      >
        Selamat Datang
      </h1>
      <h1
        class="text-4xl font-extrabold text-white uppercase drop-shadow-md md:text-7xl lg:text-8xl"
      >
        di <span class="text-teal-300">Dapur Kita</span>
      </h1>
      <p class="mt-4 text-sm text-white text- md:text-2xl">
        Nikmati berbagai hidangan lezat yang kami tawarkan dengan rasa yang menggugah selera anda.
      </p>

      <!-- button -->
      <router-link
        to="/menu"
        class="px-6 py-2 mt-6 text-gray-100 transition-colors bg-teal-400 rounded-full hover:bg-teal-500"
      >
        Lihat Menu
      </router-link>
    </div>
  </div>
</template>
