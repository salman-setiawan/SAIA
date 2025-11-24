const DataPricing = {
  heroSection: {
    title: {
      en: 'Clear Packages for Real Results',
      id: 'Paket yang Jelas untuk Hasil yang Nyata',
    },
    desc: {
      en: 'Explore the available options and choose the plan that matches your business needs. Each package is built with transparent scope, timelines, and value so you know exactly what you’re paying for.',
      id: 'Lihat opsi yang tersedia dan pilih paket yang sesuai dengan kebutuhan bisnismu. Setiap paket sudah dirancang dengan ruang lingkup, waktu pengerjaan, dan nilai yang transparan supaya kamu langsung tahu apa yang kamu dapatkan.',
    },
    cta: [
      { en: 'Consult via Whatsapp', id: 'Konsultasi via Whatsapp' },
      { en: 'See Our Project', id: 'Lihat Proyek Kami' },
    ],
  },

  pricingSection: {
    head: { en: 'Our Pricing', id: 'Harga Layanan' },
    services: [
      {
        id: 3,
        label: { en: 'Landing Page', id: 'Landing Page' },
        packages: [
          {
            package: 1,
            name: { en: 'Budget Package', id: 'Paket Hemat' },
            price: 'Rp 499.000',
            desc: {
              en: 'Essential landing page for quick promotions with clean layout and fast delivery.',
              id: 'Landing page hemat untuk kebutuhan promosi cepat dengan layout rapi dan pengerjaan singkat.'
            },
            benefit: [
              { key: 'page', en: 'Ready Templates Landing Page', id: 'Landing Page Template Siap Pakai', available: true },
              { key: 'section', en: 'Sections limit', id: 'Jumlah section', detail: 'Max 3', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'custom_color', en: 'Custom color', id: 'Custom warna', available: true },
              { key: 'custom_font', en: 'Custom font', id: 'Custom font', available: false },
              { key: 'custom_layout', en: 'Custom layout', id: 'Custom layout', available: false },
              { key: 'premium_ui', en: 'Premium Interface Design', id: 'Premium Interface Design', available: false },
              { key: 'delivery', en: 'Delivery time', id: 'Waktu pengerjaan', detail: '2 days', available: true },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '2x Max', available: true },
              { key: 'hosting', en: 'Free Hosting', id: 'Free Hosting', detail: 'Netlify / Vercel', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          },
    
          {
            package: 2,
            deal: { en: 'Best Deal' , id: 'Penawaran Terbaik' },
            name: { en: 'Regular Package', id: 'Paket Reguler' },
            price: 'Rp 1.500.000',
            desc: {
              en: 'Flexible landing page with custom colors, layout, design, and integrated CTA for better conversions.',
              id: 'Landing page fleksibel dengan kustom warna, layout, desain Figma, dan integrasi CTA yang siap meningkatkan konversi.'
            },
            benefit: [
              { key: 'page', en: 'Ready Templates Landing Page', id: 'Landing Page Template Siap Pakai', available: true },
              { key: 'section', en: 'Sections limit', id: 'Jumlah section', detail: 'Max 7', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'custom_color', en: 'Custom color', id: 'Custom warna', available: true },
              { key: 'custom_font', en: 'Custom font', id: 'Custom font', available: true },
              { key: 'custom_layout', en: 'Custom layout', id: 'Custom layout', available: true },
              { key: 'premium_ui', en: 'Premium Interface Design', id: 'Premium Interface Design', available: false },
              { key: 'delivery', en: 'Delivery time', id: 'Waktu pengerjaan', detail: '3–7 days', available: true },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '5x Max', available: true },
              { key: 'hosting', en: 'Free Hosting', id: 'Free Hosting', detail: 'Netlify / Vercel', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          },
    
          {
            package: 3,
            name: { en: 'Special Package', id: 'Paket Spesial' },
            price: { en: 'Contact Us', id: 'Hubungi Kami' },
            desc: {
              en: 'Premium high-conversion landing page built from scratch with full customization, advanced animation, and professional copywriting.',
              id: 'Landing page premium konversi tinggi yang dibuat full kustom sesuka hatimu dari nol dengan desain yang premium.'
            },
            benefit: [
              { key: 'page', en: 'Full-custom landing page', id: 'Kustmoisasi Penuh Landing page', available: true },
              { key: 'section', en: 'Sections limit', id: 'Jumlah section', detail: 'Unlimited', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'custom_color', en: 'Custom color', id: 'Custom warna', available: true },
              { key: 'custom_font', en: 'Custom font', id: 'Custom font', available: true },
              { key: 'custom_layout', en: 'Custom layout', id: 'Custom layout', available: true },
              { key: 'premium_ui', en: 'Premium Interface Design', id: 'Premium Interface Design', available: true },
              { key: 'delivery', en: 'Delivery time', id: 'Waktu pengerjaan', detail: '7–14 days', available: true },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: 'Unlimited', available: true },
              { key: 'hosting', en: 'Premium Hosting', id: 'Premium Hosting', detail: 'Hostinger', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          }
        ]
      },
      {
        id: 4,
        label: { en: 'Company Profile Web', id: 'Web Company Profile' },
        packages: [
          {
            package: 1,
            name: { en: 'Budget Package', id: 'Paket Hemat' },
            price: 'Rp 3.500.000',
            desc: {
              en: 'Simple company profile for small businesses needing a clean, functional online presence.',
              id: 'Company profile sederhana untuk bisnis kecil yang membutuhkan kehadiran online yang rapi dan fungsional.'
            },
            benefit: [
              { key: 'pages', en: 'Pages', id: 'Jumlah halaman', detail: '3 pages', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'figma_design', en: 'Figma design', id: 'Desain Figma', available: false },
              { key: 'copywriting', en: 'Professional copywriting', id: 'Copywriting profesional', available: false },
              { key: 'cta', en: 'CTA integration', id: 'Integrasi CTA', available: false },
              { key: 'google_maps', en: 'Google Maps embed', id: 'Google Maps embed', available: true },
              { key: 'form_basic', en: 'Basic forms', id: 'Form basic', available: false },
              { key: 'form_advanced', en: 'Advanced forms', id: 'Advanced form', available: false },
              { key: 'admin_simple', en: 'Simple admin panel', id: 'Admin panel sederhana', available: false },
              { key: 'admin_custom', en: 'Custom admin panel', id: 'Admin custom', available: false },
              { key: 'multilang', en: 'Multi-language', id: 'Multi-language', available: false },
              { key: 'uiux_custom', en: 'Custom UI/UX', id: 'UI/UX custom', available: false },
              { key: 'brand_guideline', en: 'Brand guideline', id: 'Brand guideline', available: false },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '2 major', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          },
    
          {
            package: 2,
            name: { en: 'Regular Package', id: 'Paket Reguler' },
            price: 'Rp 5.500.000',
            desc: {
              en: 'Professional company profile with clean design, clear messaging, and a simple admin panel.',
              id: 'Company profile profesional dengan desain rapi, pesan yang jelas, dan admin panel sederhana.'
            },
            benefit: [
              { key: 'pages', detail: '3–6 pages', en: 'Pages', id: 'Jumlah halaman', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'figma_design', en: 'Figma design', id: 'Desain Figma', available: true },
              { key: 'copywriting', en: 'Professional copywriting', id: 'Copywriting profesional', available: true },
              { key: 'cta', en: 'CTA integration', id: 'Integrasi CTA', available: true },
              { key: 'google_maps', en: 'Google Maps embed', id: 'Google Maps embed', available: true },
              { key: 'form_basic', en: 'Basic forms', id: 'Form basic', available: true },
              { key: 'form_advanced', en: 'Advanced forms', id: 'Advanced form', available: false },
              { key: 'admin_simple', en: 'Simple admin panel', id: 'Admin panel sederhana', available: true },
              { key: 'admin_custom', en: 'Custom admin panel', id: 'Admin custom', available: false },
              { key: 'multilang', en: 'Multi-language', id: 'Multi-language', available: false },
              { key: 'uiux_custom', en: 'Custom UI/UX', id: 'UI/UX custom', available: false },
              { key: 'brand_guideline', en: 'Brand guideline', id: 'Brand guideline', available: false },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '3 major', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          },
    
          {
            package: 3,
            name: { en: 'Special Package', id: 'Paket Spesial' },
            price: { en: 'Contact Us', id: 'Hubungi Kami' },
            desc: {
              en: 'Premium company profile with custom UI/UX, advanced forms, multi-language, and full brand integration.',
              id: 'Company profile premium dengan UI/UX custom, form lanjutan, multi-language, dan integrasi brand penuh.'
            },
            benefit: [
              { key: 'pages', en: 'Pages', id: 'Jumlah halaman', detail: 'Unlimited', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'figma_design', en: 'Full UI/UX Figma', id: 'Desain UI/UX Figma', available: true },
              { key: 'copywriting', en: 'Professional copywriting', id: 'Copywriting profesional', available: true },
              { key: 'cta', en: 'CTA integration', id: 'Integrasi CTA', available: true },
              { key: 'google_maps', en: 'Google Maps embed', id: 'Google Maps embed', available: true },
              { key: 'form_basic', en: 'Basic forms', id: 'Form basic', available: true },
              { key: 'form_advanced', en: 'Advanced forms', id: 'Advanced form', available: true },
              { key: 'admin_simple', en: 'Simple admin panel', id: 'Admin panel sederhana', available: false },
              { key: 'admin_custom', en: 'Custom admin panel', id: 'Admin custom', available: true },
              { key: 'multilang', en: 'Multi-language', id: 'Multi-language', available: true },
              { key: 'uiux_custom', en: 'Custom UI/UX', id: 'UI/UX custom', available: true },
              { key: 'brand_guideline', en: 'Brand guideline', id: 'Brand guideline', available: true },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '5 major', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          }
        ]
      },
      {
        id: 1,
        label: { en: 'Online Store', id: 'Toko Online' },
        packages: [
          {
            package: 1,
            name: { en: 'Regular Package', id: 'Paket Reguler' },
            price: 'Rp 4.500.000 – Rp 6.500.000',
            desc: {
              en: 'Starter online store for small catalogs with simple cart and WhatsApp-based checkout.',
              id: 'Toko online dasar untuk katalog kecil dengan keranjang sederhana dan checkout via WhatsApp.'
            },
            benefit: [
              { key: 'product_limit', en: 'Product limit', id: 'Jumlah produk', detail: '20–30', available: true },
              { key: 'product_category', en: 'Product categories', id: 'Kategori produk', available: true },
              { key: 'product_page', en: 'Product page', id: 'Halaman produk', available: true },
              { key: 'variant', en: 'Product variants', id: 'Varian produk', available: false },
              { key: 'cart', en: 'Cart system', id: 'Keranjang', available: true, detail: 'Simple cart' },
              { key: 'checkout', en: 'Checkout system', id: 'Checkout', available: false },
              { key: 'payment_gateway', en: 'Payment gateway', id: 'Payment gateway', available: false },
              { key: 'order_management', en: 'Order management', id: 'Kelola order', available: false },
              { key: 'whatsapp_order', en: 'WhatsApp auto-order', id: 'Order via WhatsApp', available: true },
              { key: 'stock', en: 'Stock management', id: 'Manajemen stok', available: false },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'dashboard_basic', en: 'Basic dashboard', id: 'Dashboard basic', available: true },
              { key: 'dashboard_full', en: 'Full admin dashboard', id: 'Dashboard full', available: false },
              { key: 'custom_ui', en: 'Custom UI Design', id: 'Custom UI Design', available: false },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '2 major', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          },
          {
            package: 2,
            name: { en: 'Special Package', id: 'Paket Spesial' },
            price: { en: 'Contact Us', id: 'Hubungi Kami' },
            desc: {
              en: 'Advanced online store with payment gateway, full admin dashboard, product variants, and complete checkout flow.',
              id: 'Toko online lanjutan dengan payment gateway, dashboard admin lengkap, varian produk, dan checkout komplit.'
            },
            benefit: [
              { key: 'product_limit', en: 'Product limit', id: 'Jumlah produk', detail: 'Unlimited', available: true },
              { key: 'product_category', en: 'Product categories', id: 'Kategori produk', available: true },
              { key: 'product_page', en: 'Product page', id: 'Halaman produk', available: true },
              { key: 'variant', en: 'Product variants', id: 'Varian produk', available: true },
              { key: 'cart', en: 'Cart system', id: 'Keranjang', available: true },
              { key: 'checkout', en: 'Checkout system', id: 'Checkout', available: true },
              { key: 'payment_gateway', en: 'Payment gateway', id: 'Payment gateway', detail: 'Midtrans', available: true },
              { key: 'order_management', en: 'Order management', id: 'Kelola order', available: true },
              { key: 'whatsapp_order', en: 'WhatsApp auto-order', id: 'Order via WhatsApp', available: true },
              { key: 'stock', en: 'Stock management', id: 'Manajemen stok', available: true },
              { key: 'responsive', en: 'Responsive design', id: 'Desain responsif', available: true },
              { key: 'dashboard_basic', en: 'Basic dashboard', id: 'Dashboard basic', available: false },
              { key: 'dashboard_full', en: 'Full admin dashboard', id: 'Dashboard full', available: true },
              { key: 'custom_ui', en: 'Custom UI Design', id: 'Custom UI Design', available: true },
              { key: 'revision', en: 'Revisions', id: 'Revisi', detail: '3 major', available: true }
            ],
            cta: { en: 'Order Now', id: 'Order Sekarang' }
          }
        ]
      },
    ]    
  }, 


}

export default DataPricing