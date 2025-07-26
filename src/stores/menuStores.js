import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStores = defineStore('menu', () => {
  const menu = ref([
    {
      kategori: 'Menu Paket Nasi',
      items: [
        {
          nama: 'Paket Ayam Penyet Sambal Ijo',
          deskripsi:
            'Ayam goreng empuk yang dipenyet dan disajikan dengan sambal ijo pedas yang segar dan nasi putih hangat.',
          harga: 29000,
          gambar_url:
            'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5f7f4cb5-e3ee-4e46-ad01-9298006454d2_Go-Biz_20210808_122539.jpeg',
        },
        {
          nama: 'Nasi Ayam Geprek Puedes',
          deskripsi:
            'Ayam krispi yang digeprek dengan sambal bawang super pedas, disajikan dengan nasi dan lalapan segar.',
          harga: 22000,
          gambar_url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png',
        },
        {
          nama: 'Nasi Nila Goreng',
          deskripsi:
            'Ikan nila segar yang digoreng garing sempurna, ditemani nasi putih, lalapan, dan sambal bawang yang khas.',
          harga: 24000,
          gambar_url:
            'https://siopen.hulusungaiselatankab.go.id/storage/merchant/products/2022/09/07/39573770009061193ca418ee96e20868.jpg',
        },
        {
          nama: 'Nasi Padang Rendang',
          deskripsi:
            'Potongan daging sapi empuk yang dimasak lama dengan bumbu rempah kaya rasa hingga mengering. Sebuah mahakarya kuliner.',
          harga: 25000,
          gambar_url:
            'https://s3-id-jkt-1.kilatstorage.id/tepi/item/37735e42-43a3-4222-b597-a053c3006bea_original.webp',
        },
      ],
    },
    {
      kategori: 'Aneka Nasi & Mie Goreng',
      items: [
        {
          nama: 'Nasi Goreng Seafood',
          deskripsi:
            'Nasi goreng klasik dengan campuran udang, cumi, dan bakso ikan yang melimpah, dimasak dengan bumbu spesial.',
          harga: 27000,
          gambar_url:
            'https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/10/Resep-Nasgor-Seafood.jpg?fit=1536%2C1920&ssl=1',
        },
        {
          nama: 'Kwetiaw Goreng Seafood',
          deskripsi:
            'Kwetiaw kenyal yang digoreng dengan bumbu gurih, ditambah udang segar, cumi, sayuran, dan telur orak-arik.',
          harga: 26000,
          gambar_url:
            'https://www.masakapahariini.com/wp-content/uploads/2020/09/kwetiau-goreng-seafood.jpg',
        },
      ],
    },
    {
      kategori: 'Mie & Bakso',
      items: [
        {
          nama: 'Mie Ayam Bakso Sapi',
          deskripsi:
            'Perpaduan sempurna antara mie kenyal dengan topping ayam bumbu manis dan bakso sapi asli yang lezat.',
          harga: 25000,
          gambar_url: 'https://www.rumahmesin.com/wp-content/uploads/2019/10/mie-ayam-bakso.png',
        },
        {
          nama: 'Bakso Kliwon Asli Daging Sapi',
          deskripsi:
            'Semangkuk bakso dengan kuah kaldu sapi bening yang gurih, diisi 4 butir bakso sapi dan irisan daging melimpah.',
          harga: 25000,
          gambar_url:
            'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e339d173-9e78-4eb2-b70e-a839ec195586_e8642279-0387-45b4-a7fe-fe5cc62e5785.jpg',
        },
      ],
    },
    {
      kategori: 'Minuman Segar',
      items: [
        {
          nama: 'Es Teler Jawara',
          deskripsi:
            'Minuman dingin berisi potongan nangka, alpukat, kelapa muda, dan jelly yang disiram dengan santan dan sirup manis.',
          harga: 16000,
          gambar_url:
            'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/3c6b91b5-86af-49cd-b8de-25e06e8883b4_Go-Biz_20250411_180000.jpeg',
        },
        {
          nama: 'Capucino Cincau',
          deskripsi:
            'Kopi cappuccino dingin yang dikocok hingga berbusa, dipadukan dengan kenyalnya cincau hitam. Segar dan unik!',
          harga: 9000,
          gambar_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EQm66rrRXCqWdsopfidDBhYqScdJSV7jzw&s',
        },
      ],
    },
  ])

  return {
    menu,
  }
})
