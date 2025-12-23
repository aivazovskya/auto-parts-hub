import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Minus,
  Plus,
  Share2,
  Package
} from "lucide-react";

const product = {
  id: 1,
  name: "Тормозные колодки передние Brembo P85075",
  article: "BP-2234-FR",
  brand: "Brembo",
  price: 18500,
  oldPrice: 22000,
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop",
  ],
  rating: 4.8,
  reviews: 124,
  inStock: true,
  stockCount: 15,
  isOriginal: true,
  description: "Высококачественные тормозные колодки Brembo обеспечивают отличное торможение в любых условиях. Изготовлены из специальной фрикционной смеси, которая гарантирует стабильную работу при высоких температурах.",
  characteristics: [
    { name: "Производитель", value: "Brembo" },
    { name: "Страна производства", value: "Италия" },
    { name: "Артикул", value: "P85075" },
    { name: "OEM номер", value: "1K0698151" },
    { name: "Положение", value: "Передние" },
    { name: "Тип", value: "Дисковые" },
    { name: "Ширина", value: "155.1 мм" },
    { name: "Высота", value: "73.4 мм" },
    { name: "Толщина", value: "20 мм" },
    { name: "С датчиком износа", value: "Да" },
  ],
  compatibility: [
    { brand: "Volkswagen", models: ["Golf VI", "Golf VII", "Passat B7", "Passat B8"] },
    { brand: "Audi", models: ["A3 8P", "A3 8V", "A4 B8", "A4 B9"] },
    { brand: "Skoda", models: ["Octavia A5", "Octavia A7", "Superb II", "Superb III"] },
    { brand: "Seat", models: ["Leon II", "Leon III", "Alhambra II"] },
  ],
};

const analogProducts = [
  {
    id: 2,
    name: "Тормозные колодки TRW GDB1550",
    brand: "TRW",
    price: 12500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 3,
    name: "Тормозные колодки ATE 13.0460-7184.2",
    brand: "ATE",
    price: 14800,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 4,
    name: "Тормозные колодки Ferodo FDB1323",
    brand: "Ferodo",
    price: 11200,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=300&fit=crop",
    rating: 4.4,
    inStock: false,
  },
];

const reviews = [
  {
    id: 1,
    author: "Алексей К.",
    date: "15 декабря 2024",
    rating: 5,
    text: "Отличные колодки! Установил на свой Golf VII, тормозит отлично, никакого скрипа. Качество на высоте, рекомендую.",
    pros: "Качество материалов, тихая работа, отличное торможение",
    cons: "Цена выше аналогов",
  },
  {
    id: 2,
    author: "Марат Т.",
    date: "10 декабря 2024",
    rating: 4,
    text: "Хорошие колодки, поставил на Passat B7. Работают стабильно, износ равномерный. Единственный минус - немного дороговато.",
    pros: "Надежность, долговечность",
    cons: "Высокая цена",
  },
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Helmet>
        <title>{product.name} | AutoParts.kz</title>
        <meta 
          name="description" 
          content={`Купить ${product.name} по цене ${product.price} ₸. ${product.description.slice(0, 120)}...`} 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Breadcrumbs */}
          <div className="bg-muted/30 border-b border-border/50">
            <div className="container py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                <a href="/" className="hover:text-primary transition-colors">Главная</a>
                <ChevronRight className="w-4 h-4" />
                <a href="/catalog" className="hover:text-primary transition-colors">Каталог</a>
                <ChevronRight className="w-4 h-4" />
                <a href="/catalog" className="hover:text-primary transition-colors">Тормозная система</a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground line-clamp-1">{product.name}</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            {/* Product Main Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Images */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isOriginal && (
                    <Badge className="absolute top-4 left-4 bg-primary">Оригинал</Badge>
                  )}
                  {product.oldPrice && (
                    <Badge className="absolute top-4 right-4 bg-destructive">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? "border-primary" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.brand} • Артикул: {product.article}
                    </p>
                    <h1 className="text-2xl lg:text-3xl font-bold">{product.name}</h1>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${star <= product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                      />
                    ))}
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  <a href="#reviews" className="text-sm text-primary hover:underline">
                    {product.reviews} отзывов
                  </a>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <div className="flex items-end gap-4 mb-4">
                    <p className="text-4xl font-bold text-primary">
                      {product.price.toLocaleString()} ₸
                    </p>
                    {product.oldPrice && (
                      <p className="text-xl text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString()} ₸
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <Package className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-medium">
                      В наличии: {product.stockCount} шт.
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button className="flex-1 h-12">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      В корзину
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full h-12">
                    Купить в 1 клик
                  </Button>
                </div>

                {/* Delivery Info */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Truck className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Доставка</p>
                      <p className="text-xs text-muted-foreground">от 1-2 дней</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Гарантия</p>
                      <p className="text-xs text-muted-foreground">12 месяцев</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <RotateCcw className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Возврат</p>
                      <p className="text-xs text-muted-foreground">14 дней</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mb-12">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Описание
                </TabsTrigger>
                <TabsTrigger 
                  value="characteristics"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Характеристики
                </TabsTrigger>
                <TabsTrigger 
                  value="compatibility"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Совместимость
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Отзывы ({product.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="pt-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">{product.description}</p>
                  <h3 className="text-xl font-semibold mt-6 mb-4">Преимущества</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Высокая эффективность торможения в любых условиях</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Низкий уровень шума и вибрации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Увеличенный срок службы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Минимальный износ тормозных дисков</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="characteristics" className="pt-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.characteristics.map((char, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between py-3 px-4 rounded-lg ${idx % 2 === 0 ? "bg-muted/30" : ""}`}
                    >
                      <span className="text-muted-foreground">{char.name}</span>
                      <span className="font-medium">{char.value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="compatibility" className="pt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.compatibility.map((item, idx) => (
                    <div key={idx} className="bg-card border border-border rounded-xl p-4">
                      <h4 className="font-semibold mb-3">{item.brand}</h4>
                      <ul className="space-y-1">
                        {item.models.map((model, mIdx) => (
                          <li key={mIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            {model}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" id="reviews" className="pt-6">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-semibold">{review.author}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-4">{review.text}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-green-500 font-medium">Достоинства: </span>
                          <span className="text-muted-foreground">{review.pros}</span>
                        </div>
                        <div>
                          <span className="text-destructive font-medium">Недостатки: </span>
                          <span className="text-muted-foreground">{review.cons}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Показать все отзывы
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Analogs */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Аналоги</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {analogProducts.map((item) => (
                  <a 
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="relative h-40">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">{item.brand}</p>
                      <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-primary">
                          {item.price.toLocaleString()} ₸
                        </p>
                        <p className={`text-xs ${item.inStock ? "text-green-500" : "text-yellow-500"}`}>
                          {item.inStock ? "В наличии" : "Под заказ"}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Product;
