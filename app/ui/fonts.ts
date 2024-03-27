// 保留整个文件中使用的字体，优化效果
// 它会在构建时下载字体文件，并将它们与其他静态资产一起托管。这意味着当用户访问您的应用程序时，不会有额外的字体网络请求，这会影响性能。
import { Inter,Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight:['400','700'],
    subsets:['latin'], // 减小字体文件的大小并提高性能
})