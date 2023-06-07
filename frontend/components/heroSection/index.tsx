// HeroSection.tsx
import Image from "next/image";
import mankinInvestImage from "../../assets/images/mankinInvest.png";
import { HeroContainer, CenteredImage, Filter, BottomImage } from "./styles";
import knowMore from "../../assets/images/knowMore.png";
import useWindowWidth from "../../service/hooks/useWindowWidth";
import { size } from "../../contants/breakpoints";

const HeroSection: React.FC = () => {
  const isMobile = useWindowWidth() <= parseInt(size.md);

  const mankinInvestImageWidth = isMobile ? 1500 : 900;

  return (
    <HeroContainer style={{ backgroundImage: `url(/lighthouse.jpg)` }}>
      <Filter />

      <CenteredImage>
        <Image
          src={mankinInvestImage}
          alt="Mankin Invest Image"
          width={mankinInvestImageWidth}
        />
      </CenteredImage>

      <BottomImage>
        <Image src={knowMore} alt="Mankin Invest Image" />
      </BottomImage>
    </HeroContainer>
  );
};

export default HeroSection;
