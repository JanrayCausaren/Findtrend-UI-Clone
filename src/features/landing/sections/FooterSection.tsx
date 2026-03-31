import { ASSETS } from "@core/config/constant/assets_string";

type Props = {};

const FooterSection = (_props: Props) => {
  return (
    <>
      <section className="footer_section py-8">
        <div className="px-12">
          <div className="">
            <div className=" flex justify-between items-center">
              <a href="" className="max-w-42.5"><img src={ASSETS.logoDark} alt="" /></a>
              <nav>
                <ul className="flex gap-10 text-brand-neutral-1000">
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
