//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx,  } = require('./with-nx.js');


const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
    styledComponents: true,
    
  },
};

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withNx(nextConfig);

module.exports = withPWA(nextConfig);

