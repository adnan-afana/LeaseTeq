export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse & Select",
      description: "Explore our fleet of 50+ vehicles and select the perfect car for your needs"
    },
    {
      number: "02",
      title: "Customize Your Lease",
      description: "Choose your lease term, color, and additional features to personalize your experience"
    },
    {
      number: "03",
      title: "Quick Approval",
      description: "Complete our simple online application - most approvals within 24 hours"
    },
    {
      number: "04",
      title: "Drive Home",
      description: "Pick up your car or have it delivered to your doorstep and start driving"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How <span className="gradient-text">LeaseTeq</span> Works
          </h2>
          <p className="text-xl text-gray-400">
            Get behind the wheel in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
