import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Clock
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Получайте лучшие предложения</h3>
              <p className="text-background/70">Подпишитесь на рассылку и получите скидку 10% на первый заказ</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 min-w-[280px]"
              />
              <Button className="shrink-0">
                <Send className="h-4 w-4 mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <span className="font-bold text-xl">AutoParts</span>
                <span className="text-primary font-bold text-xl">.kz</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6">
              Крупнейший интернет-магазин автозапчастей в Казахстане. Оригинальные запчасти и качественные аналоги для любых марок авто.
            </p>
            <div className="space-y-3">
              <a href="tel:+77001234567" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                +7 700 123 45 67
              </a>
              <a href="mailto:info@autoparts.kz" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                info@autoparts.kz
              </a>
              <div className="flex items-center gap-3 text-background/80">
                <Clock className="h-5 w-5" />
                Пн-Вс: 9:00 - 21:00
              </div>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-bold text-lg mb-6">Каталог</h4>
            <ul className="space-y-3">
              {["Двигатель и компоненты", "Тормозная система", "Подвеска", "Электрика", "Кузовные детали", "Фильтры", "Масла и жидкости", "Аксессуары"].map((item) => (
                <li key={item}>
                  <Link to="/catalog" className="text-background/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Покупателям</h4>
            <ul className="space-y-3">
              {[
                { label: "Доставка и оплата", href: "/delivery" },
                { label: "Гарантия и возврат", href: "/warranty" },
                { label: "Подбор по VIN", href: "/vin" },
                { label: "Как сделать заказ", href: "/how-to-order" },
                { label: "Для юридических лиц", href: "/b2b" },
                { label: "Отзывы", href: "/reviews" },
                { label: "Блог", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-background/70 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-lg mb-6">Пункты выдачи</h4>
            <div className="space-y-4">
              {[
                { city: "Алматы", address: "ул. Абая, 150" },
                { city: "Астана", address: "пр. Республики, 89" },
                { city: "Шымкент", address: "ул. Тауке хана, 45" },
              ].map((point) => (
                <div key={point.city} className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{point.city}</p>
                    <p className="text-background/70 text-sm">{point.address}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-4">Способы оплаты</h4>
              <div className="flex flex-wrap gap-2">
                {["Kaspi", "Visa", "MC", "Apple Pay"].map((method) => (
                  <div 
                    key={method}
                    className="px-3 py-2 bg-background/10 rounded-lg text-sm font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© {currentYear} AutoParts.kz — Все права защищены</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-background transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-background transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
