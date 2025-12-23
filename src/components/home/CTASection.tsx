import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Не можете найти нужную запчасть?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Оставьте заявку, и наши специалисты бесплатно подберут запчасть для вашего автомобиля в течение 30 минут.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +7 700 123 45 67
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-primary-foreground rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Быстрая заявка</h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Номер телефона" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Марка и модель авто" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Какую запчасть ищете?" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <Button size="lg" className="w-full rounded-xl">
                  Отправить заявку
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
