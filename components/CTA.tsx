export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Ready to Drive Your Dream?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of happy drivers. Get your perfect car today with flexible terms and transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              Start Your Journey
            </button>
            <button className="btn-secondary text-lg">
              Schedule a Test Drive
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            Get instant approval • No credit card required • Same day delivery available
          </p>
        </div>
      </div>
    </section>
  );
}
