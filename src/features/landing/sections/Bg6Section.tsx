import Heading from "@components/Heading";

type Props = {};

const Bg6Section = (_props: Props) => {
  return (
    <>
      <section className="py-35 bg-brand-primary">
        <div className="px-4">
            <div className="brand_container_1160">
                <div className="text-center">
                    <Heading className="text-7xl text-brand-neutral-1000 font-bold pb-10">Join us on email for <span className="text-brand-primary-strong block"> more trending topics</span></Heading>
                    <button className="bg-brand-neutral-1000 text-brand-neutral-0 font-bold font-display rounded-full px-8 text-lg py-4">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Bg6Section;
