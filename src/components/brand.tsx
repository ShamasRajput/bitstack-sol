import Image from "next/image";
import logo from "../../public/assets/bitstack-logo.png";

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src={logo}
      alt="Bitstack Solutions"
      className="brand-image"
      sizes="(max-width: 820px) 180px, 216px"
      priority={priority}
    />
  );
}
