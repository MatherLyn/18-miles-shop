const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',    
        style: true,
      }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }), 
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#C65624' },
    }),
);
