import { BRANDS,  type BrandKey,} from "@core/config/constant/assets_string";
import { cn } from "@utils/cn";

type Props = {
  name: BrandKey;
  className?: string;
};

const BrandLogo = ({ name, className }: Props) => {
  return <img src={BRANDS[name]} alt={name} className={cn("", className)} />;
};

export default BrandLogo;


