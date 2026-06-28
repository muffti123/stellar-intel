import { Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-12 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-subtle px-4 py-1.5 text-sm font-medium text-accent">
        <Zap className="h-3.5 w-3.5" />
        Stellar Execution Layer
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-text md:text-5xl">
        Where stablecoin transactions
        <br />
        <span className="text-accent">happen on Stellar.</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-secondary-text">
        Stellar Intel is the execution layer for cross-border stablecoin flows — execute USDC
        off-ramps across anchors for Nigeria, Kenya, Ghana, Mexico, and more in one click.
      </p>
    </section>
  );
}
