import { Button } from "@/components/ui/button";
import { ArrowRight, Percent, Gift } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-10 text-primary-foreground animate-slide-up">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/20 text-sm font-medium mb-4">
                <Percent className="h-4 w-4" />
                Акция
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Скидка 15% на тормозные колодки
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                При покупке комплекта передних и задних тормозных колодок. Акция действует до конца месяца.
              </p>
              <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Перейти в каталог
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          </div>

          {/* Promo 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 p-8 lg:p-10 text-background animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/20 text-sm font-medium mb-4">
                <Gift className="h-4 w-4" />
                Бонус
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Бесплатная доставка от 50 000 ₸
              </h3>
              <p className="text-background/80 mb-6 max-w-md">
                Доставим ваш заказ бесплатно в любой город Казахстана при заказе от 50 000 тенге.
              </p>
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-background/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
