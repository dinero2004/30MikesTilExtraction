import Image from "next/image";

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return <Image src={src} alt={alt} fill objectFit="cover" />;
};
