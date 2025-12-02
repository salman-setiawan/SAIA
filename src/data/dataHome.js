const DataHome = {
  heroSection: {
    desc: {
      en: 'We help you build a fast and clear website that attracts customers. You get a professional company profile, a conversion-focused landing page, and an easy-to-use online store.',
      id: 'Kami bantu anda punya website yang cepat, jelas, dan siap menarik pelanggan. anda bisa dapat company profile yang profesional, landing page yang fokus pada konversi, dan toko online yang mudah digunakan.',
    },
    cta: [
      { en: 'Consult via Whatsapp', id: 'Konsultasi via Whatsapp' },
      { en: 'See Our Project', id: 'Lihat Proyek Kami' },
    ],
  },

  indicatorSection: [
    {
      indicator: '+10',
      desc: { en: 'Projects Completed', id: 'Project Selesai' },
    },
    {
      indicator: '99%',
      desc: { en: 'Client Satisfaction', id: 'Client Puas' },
    },
    {
      indicator: '95%',
      desc: { en: 'On-Time Delivery', id: 'Proyek Tepat Waktu' },
    },
  ],

  featureSection: {
    head: {
      en: 'What we can design and build',
      id: 'Apa yang bisa kami rancang dan bangun',
    },
    desc: {
      en: 'We create websites and systems that support your business growth.',
      id: 'Kami membuat website dan sistem yang mendukung perkembangan bisnismu.',
    },
    feature: [
      {
        best: { en: 'Best-Selling Product' , id: 'Produk Terlaris' },
        head: { en: 'Landing Page', id: 'Landing Page' },
        desc: { en: 'High converting landing pages designed to attract and convert visitors.', id: 'Landing page yang dirancang untuk menarik perhatian dan meningkatkan konversi.' },
      },
      {
        head: { en: 'Company Profile Website', id: 'Website Company Profile' },
        desc: { en: 'Professional websites that strengthen your brand and credibility.', id: 'Website profesional yang memperkuat branding dan kredibilitas bisnis anda.' },
      },
      {
        head: { en: 'Online Store', id: 'Toko Online' },
        desc: { en: 'Ecommerce websites with essential features for selling and scaling.', id: 'Website toko online dengan fitur penting untuk jualan dan berkembang.' },
      },
      {
        head: { en: 'Custom Web App', id: 'Aplikasi Web Kustom' },
        desc: { en: 'We can help you build any web or app idea beyond our standard product features. You bring the concept. We develop it to fit your needs.', id: 'Kami siap membantu mewujudkan web atau aplikasi di luar fitur standar produk kami. anda bawa idenya. Kami kembangkan sampai sesuai kebutuhan anda.' },
      },
    ],
  },
  
  aboutSection: {
    head: {
      en: 'Who we are',
      id: 'Siapa kami',
    },
    desc: [
      {
        en: 'We are a team of marketers, designers, and developers with experience helping businesses go digital and scale their growth.',
        id: 'Kami adalah tim berisi marketer, designer, dan developer yang berpengalaman membantu bisnis masuk ke dunia digital dan meningkatkan skala pertumbuhan.',
      },
      {
        en: 'With us you will get solutions that match your business needs. The three points below highlight the key reasons why you should work with us.',
        id: 'Bersama kami anda akan mendapatkan solusi yang relevan dengan kebutuhan bisnis anda. Tiga poin di bawah menunjukkan alasan kuat kenapa anda harus bekerja sama dengan kami.',
      }, 
    ],
    benefit: [
      {
        icon: 'verified',
        head: { en: 'Guaranteed Quality', id: 'Kualitas Terjamin' },
        desc: { en: 'Your website is built with professional standards. Fast, mobile friendly, and SEO optimized.', id: 'Website anda akan dirancang dengan standar profesional. Cepat, mobile-friendly, dan SEO-ready.' },
      },
      {
        icon: 'edit_note',
        head: { en: 'Free Copywriting', id: 'Copywriting Gratis' },
        desc: { en: 'We help you write compelling content that improves conversions.', id: 'Desain menarik saja tidak cukup. Kami bantu siapkan copywriting yang meyakinkan dan mampu meningkatkan konversi.' },
      },
      {
        icon: 'support_agent',
        head: { en: 'Full Support', id: 'Dukungan Penuh' },
        desc: { en: 'We stay available to assist you even after development is complete.', id: 'Bingung atau ada kendala? Kami selalu siap bantu bahkan setelah website selesai dikerjakan.' },
      },
    ],
  },

  clientflowSection: {
    head: {
      en: 'Here’s how to get started',
      id: 'Cara kerjanya seperti ini',
    },
    cta: {
      en: 'Choose a Plan Right Now', id: 'Pilih Rencana Sekarang Juga',
    },
    url: '/pricing',
    flow: [
      {
        head: { en: 'Choose a Plan', id: 'Pilih Rencana' },
        desc: { en: 'You pick the plan that fits your needs and project goals.', id: 'anda memilih paket yang cocok dengan kebutuhan dan tujuan bisnis anda.' },
        xlClassName: 'lg:top-12 lg:left-16', // Contoh: posisi kiri atas
      },
      {
        head: { en: 'Payment', id: 'Pembayaran' },
        desc: { en: 'Make payment via Online to start the project.', id: 'Lakukan pembayaran secara Online untuk memulai proyek.' },
        xlClassName: 'lg:top-104 lg:left-40', // Contoh: posisi kanan dengan offset
      },
      {
        head: { en: 'Onboarding and Brief', id: 'Onboarding dan Brief' },
        desc: { en: 'You fill in a simple brief. We understand your goals, users, and project scope.', id: 'anda mengisi brief singkat. Kami memahami tujuan, target user, dan ruang lingkup proyek anda.' },
        xlClassName: 'lg:top-33 lg:left-132', // Contoh: posisi tengah kiri
      },
      {
        head: { en: 'Design and Revision', id: 'Desain dan Revisi' },
        desc: { en: 'Our team will create the UI/UX design. You review and refine it until it matches your expectations.', id: 'Tim kami akan membuat desain UI/UX. anda meninjau dan memberikan feedback sesuai kebutuhan anda.' },
        xlClassName: 'lg:top-8 lg:left-248', // Contoh: posisi kanan bawah
      },
      {
        head: { en: 'Development and Deployment.', id: 'Pengembangan dan Deployment.' },
        desc: { en: 'Our team builds the product according to the final design into a ready-to-use and functional product.', id: 'Tim kami membangun produk sesuai desain final menjadi produk siap pakai dan berfungsi.' },
        xlClassName: ' lg:top-98 lg:left-274', // Contoh: posisi bawah kiri
      },
      {
        head: { en: 'Project Complete', id: 'Proyek Selesai' },
        desc: { en: 'The project is complete once everything meets your approval.', id: 'Proyek selesai setelah semuanya memenuhi persetujuan anda.' },
        xlClassName: 'lg:top-28 lg:left-374', // Contoh: posisi kanan bawah
      },
    ],
  }, 

  ctaSection: {
    head: {
      en: 'Ready to Build a Professional Website for Your Business?',
      id: 'Siap Bikin Website Profesional untuk Bisnismu?',
    },
    desc: {
      en: 'We help you create a convincing, fast, and ready-to-sell website. Company profile, landing page, or online store. All done easily.',
      id: 'Kami siap bantu anda punya website yang tampil meyakinkan, cepat, dan siap promosi. Mulai dari company profile, landing page, sampai toko online semua bisa anda dapatkan dengan mudah dan tanpa ribet.',
    },
    cta: [
      { en: 'Contact Us via Whatsapp', id: 'Hubungi Kami via Whatsapp' },
    ],
  },
}

export default DataHome;
