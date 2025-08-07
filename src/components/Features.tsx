const Features = () => {
  const features = [
    "Modern UI with Tailwind CSS",
    "Accessible components",
    "TypeScript support",
  ];

  return (
    <section className="py-16 px-6">
      <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg text-center shadow-sm"
          >
            <h4 className="font-semibold text-lg">{feature}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;