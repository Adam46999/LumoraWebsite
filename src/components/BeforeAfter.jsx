import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function BeforeAfter() {
  return (
    <section className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-6">قبل / بعد</h2>
      <BeforeAfterSlider
        before="/images/before.jpg"
        after="/images/after.jpg"
        width={600}
        height={400}
      />
    </section>
  );
}

export default BeforeAfter;
