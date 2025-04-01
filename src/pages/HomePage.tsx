import UserManagement from '@/components/UserMenagement';
import BaseLayout from '@/layouts/BaseLayout';

function HomePage() {
  return (
    <BaseLayout>
      <UserManagement />
    </BaseLayout>
  );
}

export default HomePage;
