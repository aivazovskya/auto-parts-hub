import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight,
  Shield,
  RotateCcw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileText,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Warranty = () => {
  return (
    <>
      <Helmet>
        <title>Гарантия и возврат | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Условия гарантии и возврата товаров в AutoParts.kz. Гарантия на все товары до 24 месяцев." 
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
                <span className="text-foreground">Гарантия и возврат</span>
              </nav>
            </div>
          </div>

          <div className="container py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Гарантия и возврат</h1>

            {/* Warranty Section */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Гарантия на товары</h2>
                  <p className="text-muted-foreground">Мы гарантируем качество всей продукции</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-5xl font-bold text-primary mb-2">12</p>
                  <p className="text-lg font-medium">месяцев</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Стандартная гарантия на все товары
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-5xl font-bold text-primary mb-2">24</p>
                  <p className="text-lg font-medium">месяца</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Расширенная гарантия на оригинальные запчасти
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-5xl font-bold text-primary mb-2">100%</p>
                  <p className="text-lg font-medium">совместимость</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    При подборе по VIN-номеру
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Гарантия распространяется на:</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Заводские дефекты материалов",
                    "Производственный брак",
                    "Несоответствие заявленным характеристикам",
                    "Ошибку при подборе по VIN",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Return Section */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <RotateCcw className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Условия возврата</h2>
                  <p className="text-muted-foreground">14 дней на возврат товара надлежащего качества</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-green-500/30 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                    Возврат возможен, если:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Товар не был в употреблении",
                      "Сохранены товарный вид и упаковка",
                      "Есть чек или иной документ о покупке",
                      "Не истекло 14 дней с момента покупки",
                      "Товар не входит в перечень невозвратных",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card border border-destructive/30 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-destructive">
                    <XCircle className="w-5 h-5" />
                    Не подлежат возврату:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Товары, изготовленные на заказ",
                      "Электротехнические товары с нарушенной упаковкой",
                      "Масла и технические жидкости",
                      "Товары со следами установки или эксплуатации",
                      "Товары без оригинальной упаковки",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* How to return */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Как оформить возврат</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Свяжитесь с нами", desc: "Позвоните или напишите в поддержку" },
                  { step: 2, title: "Получите подтверждение", desc: "Мы проверим возможность возврата" },
                  { step: 3, title: "Отправьте товар", desc: "Привезите в пункт выдачи или отправьте" },
                  { step: 4, title: "Получите деньги", desc: "Возврат в течение 10 рабочих дней" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Info */}
            <section className="mb-16">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Важная информация</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• При возврате товара надлежащего качества расходы на доставку несёт покупатель</li>
                      <li>• При возврате бракованного товара мы компенсируем стоимость доставки</li>
                      <li>• Для гарантийного обращения сохраняйте чек и упаковку</li>
                      <li>• Гарантия не распространяется на естественный износ деталей</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Есть вопросы по гарантии?</h2>
                <p className="text-muted-foreground mb-6">
                  Наши специалисты помогут разобраться в условиях гарантии и возврата
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button>
                    <Phone className="w-4 h-4 mr-2" />
                    +7 (727) 123-45-67
                  </Button>
                  <Button variant="outline">
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Warranty;
