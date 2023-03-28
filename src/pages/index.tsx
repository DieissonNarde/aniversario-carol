import { Home } from '@/templates';
import { Seo } from '@/components';

export default function HomePage() {
  return (
    <>
      <Seo title={'Ana Carolina'} />
      <main>
        <Home />
      </main>
    </>
  );
}
