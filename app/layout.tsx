// 此文件为根布局，添加到更布局中的任何UI全部页面进行共享
// 导入css文件样式,所有文件中写的css样式都可以实现了
import '@/app/ui/global.css'
// 导入整个文件中要使用的字体
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
