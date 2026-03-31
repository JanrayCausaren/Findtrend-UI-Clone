import { SOCIAL_MEDIA_PLATFORMS, type SocialMediaKey } from "@core/config/constant/assets_string";
import { cn } from "@utils/cn";

type SocialMediaProps = {
  name: SocialMediaKey;
  className?: string;
};

const SocialMediaLogo = ({ name, className }: SocialMediaProps) => {
  return <img src={SOCIAL_MEDIA_PLATFORMS[name]} alt={name} className={cn("", className)} />;
};

export default SocialMediaLogo;