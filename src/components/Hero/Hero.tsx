import { Button } from '../UI';
import { gradientClasses } from '../../utils/gradient';

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:px-8 lg:py-12">
        <div>
          <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-[48px] lg:text-[48px]">
            Build Your Ideal{' '}
            <br />
            <span className={`${gradientClasses.text}`}>Development </span>
            <span className={`${gradientClasses.text}`}> Stack</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-base leading-6 text-gray-600 lg:text-lg lg:leading-7">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden lg:block" /> compare them side by side, and put together the stack that fits your
            <br className="hidden lg:block" /> next project.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-10">
            <Button variant="primary" size="md" className="min-w-[170px] rounded-full px-6 text-sm font-semibold">
              Explore Technologies <span aria-hidden="true">→</span>
            </Button>
            <Button variant="outline" size="md" className="min-w-[130px] rounded-full border-transparent bg-white px-0 text-sm font-semibold text-gray-950 shadow-none hover:bg-transparent">
              Learn More
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[360px] lg:mx-0 lg:max-w-none">
          <img
            src="/banner-stack.png"
            alt="Technology stack visualization"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
