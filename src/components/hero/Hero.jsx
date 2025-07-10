import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section id="home" className="bg-[#F3F4F6] pt-24 pb-16">

      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-10">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
