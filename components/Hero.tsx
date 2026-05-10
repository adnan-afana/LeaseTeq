export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold mb-6">
                Premium Car Leasing
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Drive Your Dream<br/>
                <span className="gradient-text">Without the Burden</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg">
                Flexible, affordable car leasing tailored to your lifestyle. No hidden fees, no long-term commitments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Explore Fleet
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>

            <div className="pt-8 border-t border-primary/20 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <p className="text-gray-400">Active Leases</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-gray-400">Car Models</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <p className="text-gray-400">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-3xl flex items-center justify-center">
              <svg className="w-full h-full p-8" viewBox="0 0 400 300" fill="none">
                <rect width="400" height="300" fill="transparent"/>
                <path d="M100 150 L150 100 L250 100 L300 150 L280 180 L120 180 Z" stroke="#00d4ff" strokeWidth="2" fill="#00d4ff" opacity="0.1"/>
                <circle cx="140" cy="190" r="15" stroke="#00d4ff" strokeWidth="2"/>
                <circle cx="260" cy="190" r="15" stroke="#00d4ff" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
