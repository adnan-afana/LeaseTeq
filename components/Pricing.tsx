export default function Pricing() {
  const plans = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for daily commuters",
      features: [
        "Compact & Sedan models",
        "12-month minimum lease",
        "Basic insurance",
        "Monthly maintenance",
        "24/7 roadside assist"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      price: "$599",
      period: "/month",
      description: "Our most popular choice",
      features: [
        "Any model from our fleet",
        "Flexible 12-60 month terms",
        "Comprehensive insurance",
        "Full maintenance included",
        "Free upgrades & swaps",
        "Priority support"
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "$999",
      period: "/month",
      description: "Luxury & performance vehicles",
      features: [
        "Luxury & sports models",
        "Custom lease terms",
        "Premium insurance package",
        "Concierge service",
        "Unlimited swaps",
        "Personal driver option"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400">
            All-inclusive pricing with no hidden fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary shadow-xl shadow-primary/30 md:scale-105"
                  : "bg-secondary border border-primary/20 hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold rounded-full">
                  POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <button className={`w-full mb-8 py-3 rounded-lg font-bold transition-all ${
                plan.highlighted
                  ? "btn-primary"
                  : "btn-secondary"
              }`}>
                Get Started
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
