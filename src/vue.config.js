// // // 在这里配置一些路径，之后会与nodemoules的公共配置进行合并
// // exports.modules={
    
// //     configureWebpack:{

// //         // 使用resolve配置路径
// //         resolve:{
// //             // extension:[],//配置文件名的后缀不书写,默认配置了,这里不用配

// //             // 别名,
// //             alias:{
// //                 // '@':'src'  @别名已经默认配置了 =src
// //                 'assets':'@/assets',
// //                 'network':'@/network',
// //                 'components':'@/components',
// //                 'views':'@/views',
// //                 // 'store':'@/store', store也不需要,this.$store可以拿到
// //                 'common':'@common'
// //                 // router先不用配,只在app引用

// //             }
// //         }
// //     }

// // }


module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components':'@/components',
          'content':'@components/content',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
  
  