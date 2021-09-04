//解决跨域问题

// module.exports = {
//     devServer: {
//         proxy: {
//             '/api/testcase/': {
//                 target: 'http://www.zerotwo.love', //接口域名
//                 changeOrigin: true,             //是否跨域
//                 ws: true,                       //是否代理 websockets
//                 secure: false,                   //是否https接口
//                 pathRewrite: {                  //路径重置
//                     '^/api': ''
//                 }
//             }
//         }
//     }
// };

module.exports = {
    devServer: {
        proxy: {
            '/ipa': {
                target: 'http://www.zerotwo.love:80', // 你请求的第三方接口
                changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {  // 路径重写，
                    '^/ipa': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.wpbom.com这个地址的时候直接写成/Api即可。
                }
            }
        }
    }
}