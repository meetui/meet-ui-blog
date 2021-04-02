export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meet-ui 与众不同的UI',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      {name: 'google',value:'notranslate'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vue' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'view-design/dist/styles/iview.css',
    '@assets/css/index.less'
  ],
  plugins: [
    '@/plugins/view-ui',
    '@/plugins/method'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  buildModules: [
  ],
  modules: [
    // '@nuxtjs/style-resources'
  ],

  build: {
  }
}
