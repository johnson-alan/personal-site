// // exports.onCreateWebpackConfig = ({ config, stage }) => {
// //   if (stage === 'build-html') {
// //     config.loader('null', {
// //       test: /scroll-to/,
// //       loader: 'null-loader'
// //     })
// //   }
// // }

// exports.onCreateWebpackConfig = ({ actions, loader }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /scroll-to/,
//           use: `null-loader`,
//         },
//       ],
//     },
//   })
// }
