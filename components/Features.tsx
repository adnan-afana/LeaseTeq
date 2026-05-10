export default function Features() {
  const features = [
    {
      title: "Flexible Terms",
      description: "Choose lease terms from 12 to 60 months that fit your lifestyle",
      icon: "📅"
    },
    {
      title: "All-Inclusive",
      description: "Insurance, maintenance, and roadside assistance all included",
      icon: "🛡️"
    },
    {
      title: "Latest Models",
      description: "Drive the newest cars with the latest technology and safety features",
      icon: "⚡"
    },
    {
      title: "Easy Swap",
      description: "Upgrade to a different model anytime during your lease period",
      icon: "🔄"
    },
    {
      title: "No Surprises",
      description: "Fixed monthly payments with transparent pricing, zero hidden fees",
      icon: "💰"
    },
    {
      title: "24/7 Support",
      description: "Around the clock customer support and emergency assistance",
      icon: "📞"
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">LeaseTeq</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience hassle-free car leasing with benefits designed for modern drivers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-gradient-to-br from-secondary to-dark border border-primary/20 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
