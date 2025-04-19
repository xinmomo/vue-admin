// https://vitejs.dev/config/
import { defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// 引入 svg 需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// mock 插件提供方法
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig(({ command }) => {
  // 获取各种环境下的对应的变量
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        enable: command === 'serve', // 保证开发阶段可以使用 mock 接口      }),
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") // 修正为绝对路径
      }
    },
    // scss 全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        }
    },
  }}
});
    