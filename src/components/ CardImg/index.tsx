import Image from 'next/image';
import { DivImg } from './styles';

interface CardImgProps {
  image: string;
}

export function CardImg({ image }: CardImgProps) {
  return (
    <DivImg>
      <Image src={image} alt="Imagem de gato" layout="fill" className={'image'} />
    </DivImg>
  );
}
