<template>
  <main class="bottom-0 z-20 w-full pt-10 pb-16 text-gray-100 bg-teal-700">
    <section class="px-4">
      <!-- AppName & Logo -->
      <div class="flex items-center justify-center w-full pt-5">
        <div class="flex items-center gap-2 text-white">
          <img src="../../assets/logo.svg" alt="" class="size-8 md:size-11" />
          <div class="font-extrabold uppercase lg:text-3xl drop-shadow-xl">Dapur kita</div>
        </div>
      </div>

      <!-- Copy -->
      <div class="flex items-center justify-center w-full pt-5">
        <div class="text-sm text-white">
          &copy; {{ new Date().getFullYear() }} Dapur Kita. All rights reserved.
        </div>
      </div>
    </section>
  </main>
</template>
