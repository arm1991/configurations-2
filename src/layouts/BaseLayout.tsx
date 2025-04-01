import Header from '@/components/Header';

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default BaseLayout;
