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
        services: 'services.html',
        serviceConvectors: 'service-convectors.html',
        serviceSplitSystems: 'service-split-systems.html',
        serviceVrfSystems: 'service-vrf-systems.html',
        serviceConditioners: 'service-conditioners.html',
        servicePumps: 'service-pumps.html',
        serviceChillers: 'service-chillers.html',
      },
    },
  },
};