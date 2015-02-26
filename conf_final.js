exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec_final.js'],
  capabilities: {
    browserName: 'chrome'
  },
jasmineNodeOpts: {
    defaultTimeoutInterval: 1000000
},
};
