import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Пользовательское соглашение | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Пользовательское соглашение интернет-магазина AutoParts.kz. Условия использования сайта и совершения покупок." 
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
                <span className="text-foreground">Пользовательское соглашение</span>
              </nav>
            </div>
          </div>

          <div className="container py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Пользовательское соглашение</h1>
              <p className="text-muted-foreground mb-8">
                Последнее обновление: 20 декабря 2024 года
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <p className="text-muted-foreground">
                    Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует 
                    отношения между ТОО «AutoParts.kz» (далее — «Продавец») и пользователем 
                    интернет-магазина AutoParts.kz (далее — «Покупатель»).
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Оформляя заказ на сайте, Покупатель подтверждает своё согласие с условиями 
                    настоящего Соглашения.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Предмет соглашения</h2>
                  <p className="text-muted-foreground">
                    Продавец обязуется передать в собственность Покупателя автозапчасти и 
                    сопутствующие товары (далее — «Товар»), а Покупатель обязуется оплатить и 
                    принять Товар на условиях настоящего Соглашения.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Оформление заказа</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Заказ оформляется на сайте, по телефону или в мессенджерах</li>
                    <li>После оформления заказа Покупатель получает подтверждение на email или телефон</li>
                    <li>Заказ считается принятым после подтверждения менеджером</li>
                    <li>Продавец вправе отменить заказ при отсутствии товара на складе</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Цены и оплата</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Цены на товары указаны в тенге и включают НДС</li>
                    <li>Продавец вправе изменять цены без предварительного уведомления</li>
                    <li>Цена фиксируется в момент оформления заказа</li>
                    <li>Доступные способы оплаты: Kaspi Pay, банковская карта, наличные, безналичный расчёт</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Доставка</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Доставка осуществляется курьером, самовывозом или транспортной компанией</li>
                    <li>Сроки доставки указаны приблизительно и могут быть изменены</li>
                    <li>Риск случайной гибели товара переходит к Покупателю с момента передачи товара</li>
                    <li>При получении Покупатель обязан проверить товар на наличие повреждений</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Гарантия и возврат</h2>
                  <p className="text-muted-foreground">
                    Условия гарантии и возврата товара регулируются законодательством Республики 
                    Казахстан и описаны в разделе <a href="/warranty" className="text-primary hover:underline">«Гарантия и возврат»</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Ответственность сторон</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Продавец не несёт ответственности за ненадлежащее использование товара</li>
                    <li>Продавец не несёт ответственности за задержки доставки по вине третьих лиц</li>
                    <li>Покупатель несёт ответственность за достоверность предоставленных данных</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Интеллектуальная собственность</h2>
                  <p className="text-muted-foreground">
                    Все материалы сайта (тексты, изображения, логотипы, дизайн) являются 
                    интеллектуальной собственностью Продавца и защищены законодательством об 
                    авторском праве. Копирование материалов без письменного согласия запрещено.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Разрешение споров</h2>
                  <p className="text-muted-foreground">
                    Все споры, возникающие из настоящего Соглашения, разрешаются путём переговоров. 
                    При невозможности достижения согласия споры рассматриваются в суде по месту 
                    нахождения Продавца в соответствии с законодательством Республики Казахстан.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Изменение условий</h2>
                  <p className="text-muted-foreground">
                    Продавец оставляет за собой право вносить изменения в настоящее Соглашение. 
                    Изменения вступают в силу с момента публикации на сайте. Рекомендуем 
                    периодически проверять актуальную версию Соглашения.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Реквизиты продавца</h2>
                  <div className="text-muted-foreground space-y-1">
                    <p><strong>ТОО «AutoParts.kz»</strong></p>
                    <p>БИН: 123456789012</p>
                    <p>Юридический адрес: г. Алматы, ул. Абая 150</p>
                    <p>Телефон: <a href="tel:+77271234567" className="text-primary hover:underline">+7 (727) 123-45-67</a></p>
                    <p>Email: <a href="mailto:info@autoparts.kz" className="text-primary hover:underline">info@autoparts.kz</a></p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Terms;
