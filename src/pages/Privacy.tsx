import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Политика конфиденциальности интернет-магазина AutoParts.kz. Информация о сборе, хранении и использовании персональных данных." 
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
                <span className="text-foreground">Политика конфиденциальности</span>
              </nav>
            </div>
          </div>

          <div className="container py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>
              <p className="text-muted-foreground mb-8">
                Последнее обновление: 20 декабря 2024 года
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <p className="text-muted-foreground">
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                    персональных данных пользователей интернет-магазина AutoParts.kz (далее — «Сайт»).
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Использование Сайта означает безоговорочное согласие пользователя с настоящей 
                    Политикой и указанными в ней условиями обработки персональных данных.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Собираемые данные</h2>
                  <p className="text-muted-foreground mb-4">
                    Мы собираем следующие категории персональных данных:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Имя и фамилия</li>
                    <li>Контактный телефон</li>
                    <li>Адрес электронной почты</li>
                    <li>Адрес доставки</li>
                    <li>История заказов</li>
                    <li>Данные об использовании сайта (cookies, IP-адрес)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Цели сбора данных</h2>
                  <p className="text-muted-foreground mb-4">
                    Персональные данные собираются и используются в следующих целях:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Обработка и выполнение заказов</li>
                    <li>Связь с покупателем по вопросам заказа</li>
                    <li>Доставка товаров по указанному адресу</li>
                    <li>Информирование об акциях и специальных предложениях (с согласия пользователя)</li>
                    <li>Улучшение качества обслуживания</li>
                    <li>Статистический анализ посещаемости сайта</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
                  <p className="text-muted-foreground">
                    Мы принимаем все необходимые организационные и технические меры для защиты 
                    персональных данных от несанкционированного доступа, изменения, раскрытия или 
                    уничтожения. Все данные передаются по защищённому протоколу SSL.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
                  <p className="text-muted-foreground">
                    Мы не передаём персональные данные третьим лицам, за исключением случаев:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Передача данных службам доставки для выполнения заказа</li>
                    <li>Передача данных платёжным системам для обработки оплаты</li>
                    <li>По запросу уполномоченных государственных органов</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Файлы cookie</h2>
                  <p className="text-muted-foreground">
                    Сайт использует файлы cookie для улучшения пользовательского опыта, 
                    анализа трафика и персонализации контента. Вы можете отключить cookie в 
                    настройках браузера, однако это может повлиять на функциональность сайта.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Права пользователей</h2>
                  <p className="text-muted-foreground mb-4">
                    Вы имеете право:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Запросить информацию о хранящихся персональных данных</li>
                    <li>Требовать исправления неточных данных</li>
                    <li>Требовать удаления персональных данных</li>
                    <li>Отозвать согласие на обработку данных</li>
                    <li>Отказаться от получения рекламных рассылок</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Срок хранения данных</h2>
                  <p className="text-muted-foreground">
                    Персональные данные хранятся в течение срока, необходимого для достижения 
                    целей обработки, но не менее срока, установленного законодательством 
                    Республики Казахстан для хранения бухгалтерских документов.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Изменения политики</h2>
                  <p className="text-muted-foreground">
                    Мы оставляем за собой право вносить изменения в настоящую Политику 
                    конфиденциальности. Актуальная версия всегда доступна на данной странице. 
                    Рекомендуем периодически проверять обновления.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Контакты</h2>
                  <p className="text-muted-foreground">
                    По вопросам обработки персональных данных обращайтесь:
                  </p>
                  <ul className="text-muted-foreground mt-4 space-y-1">
                    <li>Email: <a href="mailto:privacy@autoparts.kz" className="text-primary hover:underline">privacy@autoparts.kz</a></li>
                    <li>Телефон: <a href="tel:+77271234567" className="text-primary hover:underline">+7 (727) 123-45-67</a></li>
                    <li>Адрес: г. Алматы, ул. Абая 150</li>
                  </ul>
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

export default Privacy;
