type Props = {};

const HeroSection = (_props: Props) => {
  return (
    <>
      <section className="hero__section bg-neutral-1000 h-screen">
        <div className="brand_container mx-auto pt-25">
          <div className="text-center">
            <div className="wrapper">
              <div className="pb-23.5">
                <div className="flex flex-col gap-6 items-center pb-10">
                  <h1 className="font-display text-6xl font-extrabold max-w-[15ch]">
                    Minimize your tabs. Find your trends
                  </h1>
                  <p className="max-w-165">
                    Don’t let your computer memories consumes all of those
                    browser tabs. Findtrend let you gathers all of your favorite
                    website into one place.
                  </p>
                </div>
                <button className="px-8 py-4 rounded-full bg-primary text-neutral-1000 font-bold">Get Started 🔥</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
