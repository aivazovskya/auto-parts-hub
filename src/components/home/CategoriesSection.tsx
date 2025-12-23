import { 
  Cog, 
  Disc3, 
  CarFront, 
  Zap, 
  Paintbrush,
  Filter,
  Droplets,
  Wrench
} from "lucide-react";

const categories = [
  { 
    icon: Cog, 
    name: "Двигатель", 
    count: "45 000+",
    color: "bg-red-500/10 text-red-500"
  },
  { 
    icon: Disc3, 
    name: "Тормозная система", 
    count: "28 000+",
    color: "bg-blue-500/10 text-blue-500"
  },
  { 
    icon: CarFront, 
    name: "Подвеска", 
    count: "35 000+",
    color: "bg-green-500/10 text-green-500"
  },
  { 
    icon: Zap, 
    name: "Электрика", 
    count: "22 000+",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  { 
    icon: Paintbrush, 
    name: "Кузов", 
    count: "18 000+",
    color: "bg-purple-500/10 text-purple-500"
  },
  { 
    icon: Filter, 
    name: "Фильтры", 
    count: "15 000+",
    color: "bg-cyan-500/10 text-cyan-500"
  },
  { 
    icon: Droplets, 
    name: "Масла и жидкости", 
    count: "8 000+",
    color: "bg-orange-500/10 text-orange-500"
  },
  { 
    icon: Wrench, 
    name: "Аксессуары", 
    count: "12 000+",
    color: "bg-pink-500/10 text-pink-500"
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Каталог запчастей</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более 500 000 наименований от проверенных производителей
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-strong transition-all duration-300 cursor-pointer hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.count} товаров
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
