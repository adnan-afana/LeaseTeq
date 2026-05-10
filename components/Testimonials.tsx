export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "LeaseTeq made it so easy to get a new car without the hassle of buying. The all-inclusive pricing is fantastic!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      content: "I love being able to swap my car whenever I want. The customer service is exceptional and responsive.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Consultant",
      content: "Finally, a car leasing service that understands what modern drivers need. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">5000+ Drivers</span>
          </h2>
          <p className="text-xl text-gray-400">
            See what our customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-secondary border border-primary/20 rounded-2xl hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

              <div className="pt-4 border-t border-primary/20">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
