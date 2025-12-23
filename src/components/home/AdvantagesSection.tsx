import { Shield, Truck, Clock, Headphones, RotateCcw, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Продаём только оригинальные запчасти и сертифицированные аналоги от проверенных производителей"
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Доставка по Алматы за 2 часа. По Казахстану — от 1 до 3 дней"
  },
  {
    icon: Clock,
    title: "Работаем 24/7",
    description: "Принимаем заказы круглосуточно. Консультации с 9:00 до 21:00"
  },
  {
    icon: Headphones,
    title: "Экспертная поддержка",
    description: "Поможем подобрать запчасть по VIN или марке авто. Бесплатные консультации"
  },
  {
    icon: RotateCcw,
    title: "Простой возврат",
    description: "Возврат товара в течение 14 дней без лишних вопросов"
  },
  {
    icon: CreditCard,
    title: "Удобная оплата",
    description: "Kaspi Pay, банковские карты, рассрочка. Для юрлиц — безнал и отсрочка"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Более 10 лет на рынке автозапчастей Казахстана
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className="p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <advantage.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-background/70 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-background/10">
          {[
            { value: "500 000+", label: "Запчастей в каталоге" },
            { value: "50 000+", label: "Довольных клиентов" },
            { value: "10+", label: "Лет на рынке" },
            { value: "99%", label: "Положительных отзывов" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-background/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
