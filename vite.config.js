export default {
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        portfolio: 'portfolio.html',
        portfolioItem: 'portfolio-item.html',
        contacts: 'contacts.html',
        about: 'about.html',
      },
    },
  },
};