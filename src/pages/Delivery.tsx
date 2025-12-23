import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight,
  Truck,
  MapPin,
  Clock,
  CreditCard,
  Smartphone,
  Banknote,
  Building2,
  Package,
  CheckCircle
} from "lucide-react";

const Delivery = () => {
  return (
    <>
      <Helmet>
        <title>Доставка и оплата | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Способы доставки и оплаты в интернет-магазине AutoParts.kz. Бесплатная доставка от 50 000 ₸." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Breadcrumbs */}
          <div className="bg-muted/30 border-b border-border/50">
            <div className="container py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <a href="/" className="hover:text-primary transition-colors">Главная</a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">Доставка и оплата</span>
              </nav>
            </div>
          </div>

          <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Доставка и оплата</h1>

            {/* Delivery Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Truck className="w-8 h-8 text-primary" />
                Способы доставки
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Курьерская доставка</h3>
                  <p className="text-muted-foreground mb-4">
                    Доставка курьером до двери по Алматы и Астане
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>1-2 рабочих дня</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Стоимость: от 2 500 ₸</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Бесплатно от 50 000 ₸</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
                  <p className="text-muted-foreground mb-4">
                    Забрать заказ из нашего магазина
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Бесплатно</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Готовность в день заказа</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ул. Абая 150, Алматы</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">По Казахстану</h3>
                  <p className="text-muted-foreground mb-4">
                    Доставка транспортной компанией
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>3-7 рабочих дней</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Стоимость: от 3 000 ₸</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Отслеживание посылки</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Время работы пунктов выдачи
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Алматы, ул. Абая 150</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 17:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Астана, пр. Республики 25</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-primary" />
                Способы оплаты
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Kaspi Pay</h3>
                  <p className="text-sm text-muted-foreground">
                    Оплата через приложение Kaspi.kz или Kaspi QR
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Банковская карта</h3>
                  <p className="text-sm text-muted-foreground">
                    Visa, Mastercard, Мир — безопасная онлайн-оплата
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Banknote className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Наличными</h3>
                  <p className="text-sm text-muted-foreground">
                    Оплата при получении курьеру или в пункте выдачи
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Для юр. лиц</h3>
                  <p className="text-sm text-muted-foreground">
                    Безналичный расчёт по счёту для организаций
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Безопасность платежей</h3>
                <p className="text-muted-foreground">
                  Все платежи защищены SSL-шифрованием. Мы не храним данные ваших банковских карт. 
                  Оплата проходит через защищённые платёжные шлюзы.
                </p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Delivery;
