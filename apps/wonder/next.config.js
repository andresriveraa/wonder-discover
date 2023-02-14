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

module.exports = withNx(nextConfig);
