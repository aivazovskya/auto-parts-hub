import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";

const Contacts = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Контакты | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Контакты интернет-магазина AutoParts.kz. Телефон, адрес, время работы. Свяжитесь с нами любым удобным способом." 
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
                <span className="text-foreground">Контакты</span>
              </nav>
            </div>
          </div>

          <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+77271234567" className="text-primary hover:underline text-lg">
                        +7 (727) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Бесплатный звонок по Казахстану
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <a href="https://wa.me/77771234567" className="text-primary hover:underline text-lg">
                        +7 (777) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Отвечаем в течение 5 минут
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@autoparts.kz" className="text-primary hover:underline text-lg">
                        info@autoparts.kz
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Для заказов и общих вопросов
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Время работы</p>
                      <p className="text-lg">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-lg">Сб: 10:00 - 17:00</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Воскресенье — выходной
                      </p>
                    </div>
                  </div>
                </div>

                {/* Addresses */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Наши адреса</h3>
                  <div className="space-y-4">
                    <div className="bg-card border border-border rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Алматы (главный офис)</p>
                          <p className="text-muted-foreground">ул. Абая 150, БЦ "Алматы Тауэр", 1 этаж</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Ориентир: рядом с ТРЦ Mega Center
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold">Астана</p>
                          <p className="text-muted-foreground">пр. Республики 25, ТЦ "Керуен", 0 этаж</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Вход со стороны парковки
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-2">Напишите нам</h2>
                  <p className="text-muted-foreground mb-6">
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </p>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactName">Имя *</Label>
                          <Input id="contactName" placeholder="Ваше имя" className="mt-1" required />
                        </div>
                        <div>
                          <Label htmlFor="contactPhone">Телефон *</Label>
                          <Input id="contactPhone" placeholder="+7 (___) ___-__-__" className="mt-1" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="contactEmail">Email</Label>
                        <Input id="contactEmail" type="email" placeholder="example@mail.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="contactSubject">Тема обращения</Label>
                        <Input id="contactSubject" placeholder="О чём хотите спросить?" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="contactMessage">Сообщение *</Label>
                        <Textarea 
                          id="contactMessage" 
                          placeholder="Опишите ваш вопрос или проблему подробнее"
                          rows={5}
                          className="mt-1"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full h-12">
                        <Send className="w-5 h-5 mr-2" />
                        Отправить сообщение
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
                      <p className="text-muted-foreground mb-4">
                        Мы свяжемся с вами в ближайшее время
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Отправить ещё
                      </Button>
                    </div>
                  )}
                </div>

                {/* Quick Links */}
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/77771234567" 
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 hover:bg-green-500/20 transition-colors"
                  >
                    <MessageCircle className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Быстрый ответ</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+77271234567" 
                    className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center gap-3 hover:bg-primary/20 transition-colors"
                  >
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-semibold">Позвонить</p>
                      <p className="text-sm text-muted-foreground">Бесплатно по КЗ</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12">
              <div className="bg-muted/50 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Здесь будет карта с нашими офисами</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contacts;
