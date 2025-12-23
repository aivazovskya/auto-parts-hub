import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Алексей К.",
    city: "Алматы",
    rating: 5,
    text: "Заказываю запчасти уже третий год. Всегда оригинальные детали, быстрая доставка. Рекомендую!",
    date: "15 декабря 2024"
  },
  {
    id: 2,
    name: "Марат А.",
    city: "Астана",
    rating: 5,
    text: "Помогли подобрать запчасти по VIN за 10 минут. Всё подошло идеально. Спасибо за профессионализм!",
    date: "10 декабря 2024"
  },
  {
    id: 3,
    name: "Динара С.",
    city: "Шымкент",
    rating: 5,
    text: "Отличный магазин! Цены ниже чем у конкурентов, а качество на высоте. Буду заказывать ещё.",
    date: "5 декабря 2024"
  },
  {
    id: 4,
    name: "Сергей В.",
    city: "Караганда",
    rating: 4,
    text: "Хороший выбор аналогов. Доставка в регион заняла 2 дня. Всё пришло в целости.",
    date: "1 декабря 2024"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground text-lg">
            Более 50 000 довольных покупателей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.city}</p>
                </div>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
