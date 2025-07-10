import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
 <section className="pt-32 pb-16 bg-[#DDE3ED]">
  <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-10">
    <HeroText />
    <HeroImage />
  </div>
</section>

  );
}
