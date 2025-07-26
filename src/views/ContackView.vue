<template>
  <main class="text-gray-100 bg-neutral-900">
    <!-- Kontainer Utama -->
    <div class="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="w-full max-w-6xl mx-auto">
        <div
          class="overflow-hidden border shadow-2xl bg-neutral-950/50 backdrop-blur-sm border-neutral-800 rounded-2xl shadow-black/20"
        >
          <div class="grid md:grid-cols-2">
            <!-- Bagian Informasi Kontak -->
            <div class="p-8 lg:p-12 bg-neutral-800/30">
              <h2 class="mb-4 text-3xl font-bold text-white">Hubungi Kami</h2>
              <p class="max-w-md mb-8 text-neutral-300">
                Punya pertanyaan atau ingin bekerja sama? Isi formulir di samping atau hubungi kami
                melalui detail di bawah ini.
              </p>

              <div class="space-y-6">
                <!-- Info Alamat -->
                <div class="flex items-start space-x-4">
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-teal-400 rounded-lg bg-teal-600/20"
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
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Alamat</h3>
                    <p class="text-neutral-400">
                      Jl. Ngringin No. 22, Sleman, 55281, Yogyakarta, Indonesia
                    </p>
                  </div>
                </div>

                <!-- Info Email -->
                <div class="flex items-start space-x-4">
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-teal-400 rounded-lg bg-teal-600/20"
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Email</h3>
                    <p class="transition-colors text-neutral-400 hover:text-teal-400">
                      <a href="mailto:kontak@perusahaan.com">dapur@kita.com</a>
                    </p>
                  </div>
                </div>

                <!-- Info Telepon -->
                <div class="flex items-start space-x-4">
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-teal-400 rounded-lg bg-teal-600/20"
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
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Telepon</h3>
                    <p class="transition-colors text-neutral-400 hover:text-teal-400">
                      <a href="tel:+622123456789">+62 21 2345 6789</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bagian Formulir Kontak -->
            <div class="p-8 lg:p-12">
              <h2 class="mb-6 text-2xl font-bold text-white">Kirim Pesan</h2>
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-neutral-300"
                    >Nama Lengkap</label
                  >
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    required
                    class="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-neutral-300"
                    >Alamat Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    placeholder="anda@email.com"
                    required
                    class="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-neutral-300"
                    >Subjek</label
                  >
                  <input
                    type="text"
                    id="subject"
                    placeholder="Perihal pesan Anda"
                    required
                    class="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label for="message" class="block mb-2 text-sm font-medium text-neutral-300"
                    >Pesan</label
                  >
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tuliskan pesan Anda di sini..."
                    required
                    class="w-full px-4 py-3 text-white transition-all border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full px-6 py-3 font-semibold text-white transition-all transform bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
