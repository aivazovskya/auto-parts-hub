const brands = [
  { name: "Toyota", logo: "T" },
  { name: "Lexus", logo: "L" },
  { name: "BMW", logo: "B" },
  { name: "Mercedes", logo: "M" },
  { name: "Audi", logo: "A" },
  { name: "VW", logo: "V" },
  { name: "Hyundai", logo: "H" },
  { name: "Kia", logo: "K" },
  { name: "Nissan", logo: "N" },
  { name: "Honda", logo: "H" },
  { name: "Mazda", logo: "M" },
  { name: "Chevrolet", logo: "C" },
];

const BrandsSection = () => {
  return (
    <section className="py-16 lg:py-20 border-y border-border">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Запчасти для всех марок</h2>
          <p className="text-muted-foreground">Работаем с ведущими производителями</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="group aspect-square rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary flex items-center justify-center cursor-pointer transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              title={brand.name}
            >
              <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
