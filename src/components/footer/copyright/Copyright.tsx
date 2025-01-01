import Image from "next/image";
import kiaLogo from "@public/logo/kia-logo.svg";
import { MediaType } from "@hooks/useMedia";

const logoHeight: Record<MediaType, number> = {
  loading: 0,
  mobile: 32,
  tablet: 48,
  pc: 56,
};

function Copyright({ media }: { media: MediaType }) {
  return (
    <section>
      <Image src={kiaLogo} alt="kia-logo" height={logoHeight[media]} />
      <p style={{ display: "block", marginLeft: 0 }}>
        © 2023 KIA CORP. All Rights Reserved.
      </p>
    </section>
  );
}

export default Copyright;
