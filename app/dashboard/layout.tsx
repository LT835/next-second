import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 将SideNav组件导入布局中，将会成为此文件所有组件页面中固定的左侧栏
    // 好处：使用布局，在导航时，只有组件页面更新，布局不会重新呈现，称为部分渲染
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}