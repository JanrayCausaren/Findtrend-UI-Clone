import BrandLogo from "@components/BrandLogo";
import Heading from "@components/Heading";
import { BRANDS, type BrandKey } from "@core/config/constant/assets_string";

type Props = {};

const Bg3Section = (_props: Props) => {
  return (
    <>
      <section className="">
        <div className="px-4">
          <div className="max-w-290 mx-auto py-35">
            <div>
              <Heading className="text-brand-neutral-1000 text-6xl font-display font-bold">
                Findtrend helps you to increase your productivity and reduce
                your computer'smemory load,{" "}
                <span className="text-neutral-400">
                  {" "}
                  an application that can fulfill your daily browsing needs.
                </span>
              </Heading>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4">
          <div className="max-w-290 mx-auto py-35 text-center">
            <div>
              <Heading className="text-brand-neutral-1000 text-6xl font-display font-bold pb-20">
                Findtrend make +1000 Startup grow
              </Heading>
              <ul className="grid grid-cols-4 grid-rows-[120px_120px_120px] gap-x-8 gap-y-8">
                {Object.keys(BRANDS).map((key) => (
                  <li
                    key={key}
                    className="flex justify-center  bg-neutral-100 rounded-lg py-10 px-9.5"
                  >
                    
                    <BrandLogo  
                      key={key}
                      name={key as BrandKey}
                      className="object-center object-contain"
                    ></BrandLogo>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bg3Section;
