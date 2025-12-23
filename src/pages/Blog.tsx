import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Как выбрать тормозные колодки: полное руководство",
    excerpt: "Разбираемся в типах тормозных колодок, их преимуществах и недостатках. Рекомендации по выбору для разных условий эксплуатации.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Советы",
    date: "20 декабря 2024",
    readTime: "8 мин",
    featured: true,
  },
  {
    id: 2,
    title: "Замена масла: когда и как часто нужно менять",
    excerpt: "Всё о сроках замены моторного масла, выборе правильной вязкости и производителей. Разбираем популярные мифы.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    category: "Обслуживание",
    date: "18 декабря 2024",
    readTime: "6 мин",
    featured: false,
  },
  {
    id: 3,
    title: "Подготовка автомобиля к зиме: чек-лист",
    excerpt: "Полный список работ для подготовки автомобиля к зимнему сезону. Что проверить и заменить, чтобы избежать проблем.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    category: "Сезонное",
    date: "15 декабря 2024",
    readTime: "10 мин",
    featured: false,
  },
  {
    id: 4,
    title: "Оригинал vs Аналог: что выбрать?",
    excerpt: "Сравниваем оригинальные запчасти и качественные аналоги. В каких случаях можно сэкономить, а когда лучше не рисковать.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop",
    category: "Советы",
    date: "12 декабря 2024",
    readTime: "7 мин",
    featured: false,
  },
  {
    id: 5,
    title: "Как расшифровать VIN-номер автомобиля",
    excerpt: "Подробная инструкция по расшифровке VIN-кода. Узнайте всю историю автомобиля по 17 символам.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&h=400&fit=crop",
    category: "Инструкции",
    date: "10 декабря 2024",
    readTime: "5 мин",
    featured: false,
  },
  {
    id: 6,
    title: "Топ-10 ошибок при самостоятельном ремонте",
    excerpt: "Разбираем типичные ошибки автовладельцев при самостоятельном ремонте и обслуживании. Как их избежать.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Советы",
    date: "8 декабря 2024",
    readTime: "9 мин",
    featured: false,
  },
];

const categories = [
  { name: "Все статьи", count: 24 },
  { name: "Советы", count: 10 },
  { name: "Обслуживание", count: 6 },
  { name: "Инструкции", count: 5 },
  { name: "Сезонное", count: 3 },
];

const Blog = () => {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <>
      <Helmet>
        <title>Блог | AutoParts.kz — Статьи об автозапчастях и обслуживании</title>
        <meta 
          name="description" 
          content="Полезные статьи об автозапчастях, обслуживании автомобиля и ремонте. Советы экспертов AutoParts.kz." 
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
                <span className="text-foreground">Блог</span>
              </nav>
            </div>
          </div>

          <div className="container py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl font-bold mb-2">Блог AutoParts.kz</h1>
                <p className="text-muted-foreground">
                  Полезные статьи об автозапчастях и обслуживании автомобиля
                </p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Поиск статей..." className="pl-10" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Featured Article */}
                {featuredArticle && (
                  <a 
                    href={`/blog/${featuredArticle.id}`}
                    className="group block bg-card border border-border rounded-2xl overflow-hidden mb-8 hover:border-primary/50 transition-colors"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="h-64 md:h-auto">
                        <img 
                          src={featuredArticle.image} 
                          alt={featuredArticle.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <Badge className="w-fit mb-4">{featuredArticle.category}</Badge>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {featuredArticle.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredArticle.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredArticle.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                )}

                {/* Articles Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {regularArticles.map((article) => (
                    <a 
                      key={article.id}
                      href={`/blog/${article.id}`}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                    >
                      <div className="h-48">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <Badge variant="secondary" className="mb-3">{article.category}</Badge>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                  <Button variant="secondary">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0">
                {/* Categories */}
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <h3 className="font-semibold mb-4">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <a 
                        key={cat.name}
                        href="#"
                        className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
                      >
                        <span>{cat.name}</span>
                        <span className="text-muted-foreground">{cat.count}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Popular Articles */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Популярные статьи</h3>
                  <div className="space-y-4">
                    {articles.slice(0, 3).map((article) => (
                      <a 
                        key={article.id}
                        href={`/blog/${article.id}`}
                        className="block group"
                      >
                        <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {article.date}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Subscribe */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                  <h3 className="font-semibold mb-2">Подпишитесь на рассылку</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Получайте полезные статьи и акции
                  </p>
                  <Input placeholder="Email" className="mb-2" />
                  <Button className="w-full">Подписаться</Button>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
