import brand1 from '@assets/images/brand1.png';
import brand2 from '@assets/images/brand2.png';
import brand3 from '@assets/images/brand3.png';
import brand4 from '@assets/images/brand4.png';
import brand5 from '@assets/images/brand5.png';
import brand6 from '@assets/images/brand6.png';
import brand7 from '@assets/images/brand7.png';
import brand8 from '@assets/images/brand8.png';
import brand9 from '@assets/images/brand9.png';
import brand10 from '@assets/images/brand10.png';
import brand11 from '@assets/images/brand11.png';
import brand12 from '@assets/images/brand12.png';
import brand13 from '@assets/images/brand13.png';
import brand14 from '@assets/images/brand14.png';
import brand15 from '@assets/images/brand15.png';
import brand16 from '@assets/images/brand16.png';
import socialMedia1 from '@assets/icons/social media1.png';
import socialMedia2 from '@assets/icons/social media2.png';
import socialMedia3 from '@assets/icons/social media3.png';
import socialMedia4 from '@assets/icons/social media4.png';
import socialMedia5 from '@assets/icons/social media5.png';
import socialMedia6 from '@assets/icons/social media6.png';
import socialMedia7 from '@assets/icons/social media7.png';
import socialMedia8 from '@assets/icons/social media8.png';
import tweets1 from '@assets/images/tweet 1.png';
import tweets2 from '@assets/images/tweet 2.png';
import tweets3 from '@assets/images/tweet 3.png';
import logoDark from '@assets/icons/logo dark.png';
import logoPrimary from '@assets/icons/Logo color.png';

export const ASSETS = {
    logoDark,
    logoPrimary,
}

export const BRANDS  = {
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
    brand13,
    brand14,
    brand15,
    brand16,
} as const;

export const SOCIAL_MEDIA_PLATFORMS = {
    socialMedia1,
    socialMedia2,
    socialMedia3,
    socialMedia4,
    socialMedia5,
    socialMedia6,
    socialMedia7,
    socialMedia8,
}

export const TWEETS = {
    tweets1,
    tweets2,
    tweets3,
}

export type BrandKey = keyof typeof BRANDS;
export type SocialMediaKey = keyof typeof SOCIAL_MEDIA_PLATFORMS;
export type TweetsKey = keyof typeof TWEETS;
export type AssetsKey = keyof typeof ASSETS;