import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ChevronRight,
  Users,
  Package,
  Truck,
  Award,
  Target,
  Heart,
  Clock,
  CheckCircle
} from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>О компании | AutoParts.kz</title>
        <meta 
          name="description" 
          content="AutoParts.kz — крупнейший интернет-магазин автозапчастей в Казахстане. Более 10 лет на рынке, 500 000+ товаров, доставка по всей стране." 
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
                <span className="text-foreground">О компании</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
            <div className="container">
              <div className="max-w-3xl">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Мы помогаем вашему автомобилю работать идеально
                </h1>
                <p className="text-xl text-muted-foreground">
                  AutoParts.kz — это команда профессионалов, которые более 10 лет занимаются поставкой качественных автозапчастей по всему Казахстану.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Clock, value: "10+", label: "лет на рынке" },
                  { icon: Package, value: "500 000+", label: "товаров в каталоге" },
                  { icon: Users, value: "100 000+", label: "довольных клиентов" },
                  { icon: Truck, value: "50 000+", label: "заказов в год" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Наша история</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      AutoParts.kz начал свою деятельность в 2014 году как небольшой магазин автозапчастей в Алматы. 
                      С первого дня мы поставили перед собой цель — сделать покупку запчастей простой и удобной для каждого автовладельца.
                    </p>
                    <p>
                      Сегодня мы — один из крупнейших интернет-магазинов автозапчастей в Казахстане. 
                      Наш каталог насчитывает более 500 000 наименований от ведущих мировых производителей.
                    </p>
                    <p>
                      Мы гордимся тем, что нам доверяют не только частные автовладельцы, 
                      но и крупные автосервисы, таксопарки и корпоративные клиенты по всей стране.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop" 
                    alt="Склад автозапчастей"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
                    alt="Автозапчасти"
                    className="rounded-xl w-full h-48 object-cover mt-8"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop" 
                    alt="Автомобиль"
                    className="rounded-xl w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400&h=300&fit=crop" 
                    alt="Сервис"
                    className="rounded-xl w-full h-48 object-cover mt-8"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
                  <p className="text-muted-foreground">
                    Сделать обслуживание автомобиля доступным и простым для каждого. 
                    Мы стремимся предоставить нашим клиентам лучший выбор запчастей 
                    по справедливым ценам с быстрой доставкой по всему Казахстану.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Наши ценности</h2>
                  <ul className="space-y-3">
                    {[
                      "Качество — работаем только с проверенными поставщиками",
                      "Честность — прозрачные цены без скрытых наценок",
                      "Забота — индивидуальный подход к каждому клиенту",
                      "Развитие — постоянно совершенствуем сервис",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    icon: Package, 
                    title: "Огромный выбор", 
                    desc: "Более 500 000 запчастей для всех марок автомобилей" 
                  },
                  { 
                    icon: Award, 
                    title: "Гарантия качества", 
                    desc: "Работаем только с официальными поставщиками" 
                  },
                  { 
                    icon: Truck, 
                    title: "Быстрая доставка", 
                    desc: "Доставка по Алматы за 1-2 дня, по Казахстану за 3-7 дней" 
                  },
                  { 
                    icon: Users, 
                    title: "Экспертная поддержка", 
                    desc: "Поможем подобрать запчасти по VIN-номеру" 
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-4">Наши партнёры</h2>
              <p className="text-center text-muted-foreground mb-12">
                Мы работаем напрямую с ведущими производителями автозапчастей
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                {["Bosch", "Denso", "Mann-Filter", "Brembo", "SKF", "Continental"].map((brand) => (
                  <div 
                    key={brand} 
                    className="bg-muted/30 rounded-xl p-6 flex items-center justify-center h-20"
                  >
                    <span className="font-bold text-muted-foreground">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
