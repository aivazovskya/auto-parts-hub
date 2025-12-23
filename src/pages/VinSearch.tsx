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
  Search,
  FileText,
  CheckCircle,
  Clock,
  Send,
  HelpCircle,
  Car,
  Shield
} from "lucide-react";

const VinSearch = () => {
  const [vin, setVin] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Подбор по VIN | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Подбор автозапчастей по VIN-номеру. Гарантия 100% совместимости. Бесплатная консультация специалиста." 
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
                <span className="text-foreground">Подбор по VIN</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Подбор запчастей по VIN
                </h1>
                <p className="text-lg text-muted-foreground">
                  Введите VIN-номер вашего автомобиля, и мы подберём все необходимые запчасти с гарантией 100% совместимости
                </p>
              </div>

              {!isSubmitted ? (
                <div className="max-w-2xl mx-auto">
                  <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
                    <div className="mb-6">
                      <Label htmlFor="vin" className="text-base font-semibold mb-2 block">
                        VIN-номер автомобиля
                      </Label>
                      <div className="relative">
                        <Input 
                          id="vin"
                          value={vin}
                          onChange={(e) => setVin(e.target.value.toUpperCase())}
                          placeholder="Например: WVWZZZ3CZWE123456"
                          className="h-14 text-lg uppercase font-mono tracking-wider pr-12"
                          maxLength={17}
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        VIN состоит из 17 символов и указан в ПТС, СТС или на кузове автомобиля
                      </p>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="parts" className="text-base font-semibold mb-2 block">
                        Какие запчасти вам нужны?
                      </Label>
                      <Textarea 
                        id="parts"
                        placeholder="Опишите, какие запчасти вам нужны. Например: тормозные колодки передние, масляный фильтр, свечи зажигания"
                        rows={4}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="vinName">Ваше имя</Label>
                        <Input id="vinName" placeholder="Введите имя" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="vinPhone">Телефон</Label>
                        <Input id="vinPhone" placeholder="+7 (___) ___-__-__" className="mt-1" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full h-14 text-lg" disabled={vin.length < 17}>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить запрос
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Запрос отправлен!</h2>
                    <p className="text-muted-foreground mb-6">
                      Наш специалист свяжется с вами в течение 15 минут с подборкой запчастей для вашего автомобиля
                    </p>
                    <div className="bg-muted/30 rounded-lg p-4 mb-6">
                      <p className="text-sm text-muted-foreground">VIN-номер</p>
                      <p className="font-mono text-lg">{vin}</p>
                    </div>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Новый запрос
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* How it works */}
          <section className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: FileText, title: "Отправьте VIN", desc: "Укажите VIN-номер вашего автомобиля и нужные запчасти" },
                  { icon: Search, title: "Мы подберём", desc: "Наши специалисты найдут подходящие запчасти" },
                  { icon: Clock, title: "15 минут", desc: "Ответ в течение 15 минут в рабочее время" },
                  { icon: CheckCircle, title: "Гарантия 100%", desc: "Гарантия совместимости с вашим автомобилем" },
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 mt-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  { 
                    q: "Где найти VIN-номер?", 
                    a: "VIN-номер указан в ПТС, СТС, на шильдике под лобовым стеклом, на стойке водительской двери или в моторном отсеке." 
                  },
                  { 
                    q: "Сколько времени занимает подбор?", 
                    a: "В среднем подбор занимает 15-30 минут. В сложных случаях может потребоваться до 2 часов." 
                  },
                  { 
                    q: "Что если запчасти не подойдут?", 
                    a: "При подборе по VIN мы гарантируем 100% совместимость. Если по нашей ошибке запчасть не подошла — вернём деньги или заменим." 
                  },
                  { 
                    q: "Можно ли подобрать аналоги?", 
                    a: "Да, мы предложим оригинальные запчасти и качественные аналоги от проверенных производителей на выбор." 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-2">{item.q}</h3>
                        <p className="text-muted-foreground">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">500 000+ запчастей</h3>
                  <p className="text-muted-foreground">
                    Огромный каталог запчастей для всех марок автомобилей
                  </p>
                </div>
                <div className="text-center p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                  <p className="text-muted-foreground">
                    Только проверенные поставщики и оригинальные запчасти
                  </p>
                </div>
                <div className="text-center p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Быстрый ответ</h3>
                  <p className="text-muted-foreground">
                    Ответ на заявку в течение 15 минут в рабочее время
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VinSearch;
