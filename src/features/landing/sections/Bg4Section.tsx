import Heading from "@components/Heading";
import SocialMediaLogo from "@components/SocialMediaLogo";
import {
  SOCIAL_MEDIA_PLATFORMS,
  TWEETS,
  type SocialMediaKey,
} from "@core/config/constant/assets_string";

type Props = {};

const Bg4Section = (_props: Props) => {
  return (
    <>
      <section className="bg-brand-neutral-10">
        <div className="px-4">
          <div className="brand_container_1160 py-35 text-center">
            <div>
              <div>
                <Heading className="text-brand-neutral-1000 font-bold font-display text-6xl pb-20">
                  All platform connect to Findtrend
                </Heading>
                <ul className="flex gap-6 flex-row-reverse pb-19.5">
                  {Object.keys(SOCIAL_MEDIA_PLATFORMS).map((key) => (
                    <li key={key} className="p-8 bg-brand-neutral-0 rounded-lg">
                      <SocialMediaLogo
                        className="max-w-15 max-h-15"
                        name={key as SocialMediaKey}
                      ></SocialMediaLogo>
                    </li>
                  ))}
                </ul>
                <div className="max-w-200 mx-auto">
                  <ul className="tweets flex flex-col gap-10 pb-20">
                    <li>
                      <img src={TWEETS.tweets1} alt="tweets1" />
                    </li>
                    <li>
                      <img src={TWEETS.tweets2} alt="tweets1" />
                    </li>
                    <li>
                      <img src={TWEETS.tweets3} alt="tweets1" />
                    </li>
                  </ul>
                  <button className="bg-brand-neutral-1000 text-brand-neutral-0 rounded-full px-8 py-4 font-bold font-display">
                    View more trend
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bg4Section;
