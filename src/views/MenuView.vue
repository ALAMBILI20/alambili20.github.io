<script setup>
import BuyIcon from '@/components/icons/BuyIcon.vue'
import { useMenuStores } from '@/stores/menuStores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const menuStore = useMenuStores()

const { menu } = storeToRefs(menuStore)
let data = ref(menu.value[0])
const kategoriAktif = ref('Menu Paket Nasi')
const kategori = (namaKategori) => {
  kategoriAktif.value = namaKategori
  const kategoriDitemukan = menu.value.find((item) => item.kategori === namaKategori)
  if (kategoriDitemukan) {
    data.value = kategoriDitemukan
  }
}
</script>

<template>
  <div class="flex text-gray-100 lg:h-screen bg-neutral-900 lg:pt-16">
    <div class="container px-4 pt-10 mx-auto">
      <!-- kategori -->
      <div class="flex items-center gap-5">
        <button
          :class="kategoriAktif === m.kategori ? 'text-teal-400' : ''"
          class="p-3 text-sm rounded-lg bg-neutral-800"
          @click="kategori(m.kategori)"
          v-for="(m, i) in menu"
          :key="i"
        >
          {{ kategoriAktif === m.kategori ? '' : '' }}
          {{ m.kategori }}
        </button>
      </div>

      <!-- menu -->
      <div class="grid gap-5 pb-24 mt-10 lg:grid-cols-4 md:grid-cols-2">
        <div class="relative p-2 rounded-lg bg-neutral-700" v-for="(d, i) in data.items" :key="i">
          <div class="flex flex-shrink-0">
            <img
              :src="d.gambar_url"
              alt=""
              class="w-full rounded-lg shadow-xl shadow-neutral-700 h-72"
            />
          </div>

          <!-- title -->
          <div>
            <h1 class="pt-2 mb-5 text-xl font-bold">{{ d.nama }}</h1>
            <p class="text-gray-400">{{ d.deskripsi }}</p>
          </div>

          <div class="bottom-0 flex items-center justify-between mt-5">
            <div>
              <h3 class="text-lg font-extrabold text-teal-400">Rp.{{ d.harga }}</h3>
            </div>
            <button class="px-3 py-2 bg-teal-500 rounded-lg hover:bg-teal-400">
              <BuyIcon class="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tinggi {
  height: 100dvh;
}
</style>
