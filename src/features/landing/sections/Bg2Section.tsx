import Heading from "@components/Heading";
import Text from "@components/Text";

type Props = {};

const Bg2Section = (_props: Props) => {
  return (
    <div className="py-35 bg-brand-primary">
      <div className="brand_container">
        <div className="text-center">
          <div className="flex flex-col items-center">
            <Heading className="font-bold text-brand-neutral-1000 text-6xl">
              Open new tabs is sh*t
            </Heading>
            <Heading className="font-extrabold text-brand-neutral-1000 text-7xl tracking-tight">
              Open new tabs is sh*t
            </Heading>
            <div className="relative z-0 pb-15">
              <div className="bg-brand-neutral-0 rounded-xl py-15 px-20">
                <div className="bg-brand-neutral-1000 py-6.5 px-6">
                  <div>
                    <Text className="text-brand-neutral-0">
                      Findtrend - Elon Musk
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute  -left-6 top-12.5 -translate-x-full">
                <div className="inline-flex items-end flex-col gap-2">
                  <div className="-rotate-100">
                    <svg
                      width="29"
                      height="35"
                      viewBox="0 0 29 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_23_115)">
                        <path
                          d="M0 0.616851C1.43121 -0.319768 2.86244 -0.0239941 4.1456 0.419668C5.92228 1.06051 7.6496 1.89854 9.22887 2.88445C16.3849 7.61685 20.6786 14.3704 22.4552 22.7013C22.8994 24.8211 23.0475 27.0394 23.3436 29.4549C25.3177 28.3211 26.3541 26.1028 28.3282 24.8211C28.5749 25.807 28.0814 26.4478 27.6866 26.9901C26.058 29.2084 24.38 31.4267 22.6527 33.5957C21.8137 34.6309 21.1721 34.7295 20.2838 33.8422C18.4084 32.0182 17.2733 29.7999 16.9278 27.2366C16.9278 27.138 17.0759 26.9901 17.2733 26.7436C19.3954 27.2858 18.9019 29.9971 20.7279 30.983C21.5176 27.5816 20.9253 24.3281 20.037 21.1732C19.0993 17.8704 17.8655 14.7154 15.8914 11.9056C13.9667 9.14502 11.5484 6.92671 8.88339 4.85628C6.26773 2.73657 3.3066 1.40558 0 0.616851Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23_115">
                          <rect width="28.3944" height="34.4457" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <Text className="max-w-[10ch] rotate-6 text-sm text-brand-neutral-1000 font-semibold">
                    You just need one tab now
                  </Text>
                </div>
              </div>
              <div className="absolute  -right-6 top-12.5 translate-x-full">
                <div className="inline-flex items-start flex-col gap-2">
                  <Text className="max-w-[10ch] rotate-6 text-sm text-brand-neutral-1000 font-semibold">
                    solution for discover a trend
                  </Text>
                  <div className="rotate-107">
                    <svg
                      width="29"
                      height="35"
                      viewBox="0 0 29 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_23_115)">
                        <path
                          d="M0 0.616851C1.43121 -0.319768 2.86244 -0.0239941 4.1456 0.419668C5.92228 1.06051 7.6496 1.89854 9.22887 2.88445C16.3849 7.61685 20.6786 14.3704 22.4552 22.7013C22.8994 24.8211 23.0475 27.0394 23.3436 29.4549C25.3177 28.3211 26.3541 26.1028 28.3282 24.8211C28.5749 25.807 28.0814 26.4478 27.6866 26.9901C26.058 29.2084 24.38 31.4267 22.6527 33.5957C21.8137 34.6309 21.1721 34.7295 20.2838 33.8422C18.4084 32.0182 17.2733 29.7999 16.9278 27.2366C16.9278 27.138 17.0759 26.9901 17.2733 26.7436C19.3954 27.2858 18.9019 29.9971 20.7279 30.983C21.5176 27.5816 20.9253 24.3281 20.037 21.1732C19.0993 17.8704 17.8655 14.7154 15.8914 11.9056C13.9667 9.14502 11.5484 6.92671 8.88339 4.85628C6.26773 2.73657 3.3066 1.40558 0 0.616851Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23_115">
                          <rect width="28.3944" height="34.4457" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* <div className="absolute bg-brand-neutral-0 rounded-xl p-10 w-[120%] h-[120%] -top-4 -left-4"></div> */}
            </div>
            <Text className="text-brand-neutral-1000 max-w-165">
              A solution for your browser tabs and don’t make your device get
              slower over time. Get ease and faster to discover a trend with
              just one tab.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bg2Section;
