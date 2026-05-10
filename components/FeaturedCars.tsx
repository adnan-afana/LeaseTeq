export default function FeaturedCars() {
  const cars = [
    {
      name: "Tesla Model 3",
      category: "Electric Sedan",
      price: "$349/mo",
      specs: ["287 mi range", "4.2s 0-60", "Autopilot"],
      badge: "Electric"
    },
    {
      name: "BMW i7",
      category: "Luxury Electric",
      price: "$699/mo",
      specs: ["372 mi range", "4.6s 0-60", "5G Connected"],
      badge: "Premium"
    },
    {
      name: "Honda Civic",
      category: "Compact Sedan",
      price: "$279/mo",
      specs: ["580 mi range", "8.3s 0-60", "Apple CarPlay"],
      badge: "Popular"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Vehicles</span>
          </h2>
          <p className="text-xl text-gray-400">
            Explore our most popular lease options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-b from-secondary to-dark border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 group-hover:from-primary/20 group-hover:to-primary/20 transition-all"></div>
                <svg className="w-32 h-32 text-primary/40 group-hover:text-primary/60 transition-colors" viewBox="0 0 100 60" fill="currentColor">
                  <path d="M20 30 L30 20 L70 20 L80 30 L75 40 L25 40 Z"/>
                  <circle cx="30" cy="42" r="3"/>
                  <circle cx="70" cy="42" r="3"/>
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-sm text-gray-400">{car.category}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                    {car.badge}
                  </span>
                </div>

                <div className="mb-6 pt-4 border-t border-primary/20">
                  <p className="text-2xl font-bold text-primary mb-4">{car.price}</p>
                  <ul className="space-y-2">
                    {car.specs.map((spec, sidx) => (
                      <li key={sidx} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="text-primary">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full btn-secondary text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Browse All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}
