import { Presente } from '@/templates';
import { Seo } from '@/components';

export default function HomePage() {
  return (
    <>
      <Seo title={'Seu presente'} />
      <main>
        <Presente />
      </main>
    </>
  );
}
