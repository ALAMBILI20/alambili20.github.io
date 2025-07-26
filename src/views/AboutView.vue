<template>
  <main class="text-gray-100 sm:h-screen bg-neutral-900 lg:pt-16">
    <!-- Kontainer Utama -->
    <div class="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="w-full max-w-6xl mx-auto">
        <div
          class="overflow-hidden border shadow-2xl bg-neutral-950/50 backdrop-blur-sm border-neutral-800 rounded-2xl shadow-black/20"
        >
          <div class="grid items-center md:grid-cols-2">
            <!-- Bagian Cerita Tentang Kami -->
            <div class="p-8 lg:p-12">
              <h2 class="mb-4 text-3xl font-bold text-white">Cerita Dapur Kami</h2>
              <p class="max-w-md mb-8 text-neutral-300">
                Berawal dari kecintaan pada resep warisan keluarga, dapur kami lahir untuk berbagi
                cita rasa otentik dengan sentuhan modern. Setiap hidangan adalah cerita dari hati.
              </p>

              <div class="pt-6 space-y-6 border-t border-neutral-800">
                <!-- Filosofi Kami -->
                <div class="flex items-start space-x-4">
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                      />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Filosofi Kami</h3>
                    <p class="text-neutral-400">
                      Kami percaya bahwa makanan enak berasal dari bahan-bahan segar berkualitas
                      terbaik, dimasak dengan penuh gairah dan perhatian terhadap detail.
                    </p>
                  </div>
                </div>

                <!-- Chef Utama -->
                <div class="flex items-start space-x-4">
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Chef Utama Kami</h3>
                    <p class="text-neutral-400">
                      Dipimpin oleh Chef Budi, seorang ahli kuliner dengan pengalaman lebih dari 15
                      tahun dalam menyajikan masakan tradisional Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bagian Gambar -->
            <div class="flex flex-col justify-center h-full p-8 lg:p-12">
              <div
                class="w-full overflow-hidden shadow-lg aspect-w-4 aspect-h-3 rounded-xl shadow-black/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                  alt="Hidangan lezat yang disajikan di atas meja"
                  class="object-cover w-full h-full"
                  onerror="this.onerror=null;this.src='https://placehold.co/600x450/262626/FFFFFF?text=Dapur+Kami';"
                />
              </div>
              <p class="mt-4 text-sm italic text-center text-neutral-500">
                Setiap piring adalah kanvas kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
