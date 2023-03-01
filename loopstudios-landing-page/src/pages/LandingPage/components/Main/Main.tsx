import interactiveVRImage from "../../../../assets/image-interactive.jpg";
import MaxWidthWrapper from "../../../../components/MaxWidthWrapper";

function Main() {
  return (
    <main className="isolate grid gap-24">
      <section className="min-h-[650px] bg-black/40 bg-hero-mobile bg-cover bg-no-repeat px-6 bg-blend-darken md:bg-hero-desktop md:bg-center">
        <MaxWidthWrapper>
          <div className="flex h-full flex-col justify-center">
            <h1 className="border-2 border-white px-6 pt-6 pb-3 font-heading text-[40px] font-light uppercase leading-[38px] text-white sm:px-9 sm:pt-10 sm:pb-6 sm:text-6xl md:max-w-[40rem]">
              Immersive experiences that deliver
            </h1>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative px-6 text-center">
        <MaxWidthWrapper>
          <div className="flex flex-col lg:flex-row lg:items-end">
            <img src={interactiveVRImage} alt="Man using a VR headset" />
            <div className="mx-auto flex max-w-[17rem] flex-col gap-4 bg-white text-center sm:max-w-none lg:absolute lg:right-[164px] lg:-bottom-[1px] lg:top-[37%] lg:max-w-[34.375rem] lg:pt-[6.67%] lg:pl-[6.67%] lg:text-left">
              <h2 className="mt-12 font-heading text-3xl font-light uppercase lg:mt-0 lg:text-5xl">
                The leader in interactive VR
              </h2>
              <p className="font-body text-base opacity-50">
                Founded in 2011, Loopstudios has been producing world-className
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="px-6 text-center lg:text-left">
        <MaxWidthWrapper>
          <div className="relative flex flex-col">
            <h2 className="font-heading text-3xl font-light uppercase lg:text-5xl">
              Our creations
            </h2>
            <button className="order-last mt-8 self-center border border-black py-3.5 px-9 font-body text-sm uppercase tracking-[0.35em] transition-colors hover:bg-black hover:text-white lg:absolute lg:top-0 lg:right-0 lg:mt-0">
              See all
            </button>
            <div className="mt-12 grid gap-6 md:grid-cols-4 lg:mt-20 lg:gap-[30px]">
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-deep-earth-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-deep-earth-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  Deep <span className="block">earth</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-night-arcade-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-night-arcade-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  Night <span className="block">arcade</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-soccer-team-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-soccer-team-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  Soccer <span className="block">team VR</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-grid-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-grid-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  The <span className="block">grid</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-from-above-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-from-above-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  From up <span className="block">above VR</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-pocket-borealis-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-pocket-borealis-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  Pocket <span className="block">borealis</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-curiosity-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-curiosity-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  The <span className="block">curiosity</span>
                </h3>
              </div>
              <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-fisheye-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-fisheye-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                  Make it <span className="block">fisheye</span>
                </h3>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}

export default Main;
