import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Filter, 
  Grid3X3, 
  List,
  ChevronRight,
  SlidersHorizontal,
  X
} from "lucide-react";

const categories = [
  { id: 1, name: "Двигатель и компоненты", count: 15420 },
  { id: 2, name: "Тормозная система", count: 8340 },
  { id: 3, name: "Подвеска и рулевое", count: 12180 },
  { id: 4, name: "Фильтры", count: 5620 },
  { id: 5, name: "Электрика", count: 9870 },
  { id: 6, name: "Кузовные детали", count: 7430 },
  { id: 7, name: "Масла и жидкости", count: 3210 },
  { id: 8, name: "Освещение", count: 4560 },
];

const brands = [
  "Bosch", "Denso", "NGK", "Mann-Filter", "Sachs", 
  "TRW", "Brembo", "Valeo", "Continental", "SKF"
];

const carBrands = [
  "Toyota", "BMW", "Mercedes-Benz", "Volkswagen", "Audi",
  "Honda", "Nissan", "Hyundai", "Kia", "Lexus"
];

const products = [
  {
    id: 1,
    name: "Тормозные колодки передние",
    article: "BP-2234-FR",
    brand: "Brembo",
    price: 18500,
    oldPrice: 22000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isOriginal: true,
  },
  {
    id: 2,
    name: "Масляный фильтр",
    article: "OF-1122-MAN",
    brand: "Mann-Filter",
    price: 3200,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isOriginal: false,
  },
  {
    id: 3,
    name: "Свечи зажигания (комплект 4 шт)",
    article: "SP-4455-NGK",
    brand: "NGK",
    price: 12800,
    oldPrice: 15000,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 256,
    inStock: true,
    isOriginal: true,
  },
  {
    id: 4,
    name: "Амортизатор задний",
    article: "AM-7788-SAC",
    brand: "Sachs",
    price: 45000,
    oldPrice: 52000,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 67,
    inStock: false,
    isOriginal: true,
  },
  {
    id: 5,
    name: "Ремень ГРМ",
    article: "TB-3344-CON",
    brand: "Continental",
    price: 8900,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 143,
    inStock: true,
    isOriginal: false,
  },
  {
    id: 6,
    name: "Воздушный фильтр",
    article: "AF-5566-BOS",
    brand: "Bosch",
    price: 4500,
    oldPrice: 5200,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    isOriginal: false,
  },
  {
    id: 7,
    name: "Тормозной диск передний",
    article: "BD-8899-TRW",
    brand: "TRW",
    price: 28000,
    oldPrice: 32000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 178,
    inStock: true,
    isOriginal: true,
  },
  {
    id: 8,
    name: "Подшипник ступицы",
    article: "WB-1234-SKF",
    brand: "SKF",
    price: 15600,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isOriginal: true,
  },
];

const Catalog = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Helmet>
        <title>Каталог автозапчастей | AutoParts.kz</title>
        <meta 
          name="description" 
          content="Каталог автозапчастей с фильтрацией по марке авто, модели, году выпуска и производителю. Более 500 000 запчастей в наличии." 
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
                <span className="text-foreground">Каталог</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Каталог автозапчастей</h1>
                <p className="text-muted-foreground">Найдено 45 280 товаров</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Фильтры
                </Button>
                
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">Сначала дешевле</SelectItem>
                    <SelectItem value="price-desc">Сначала дороже</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="new">Новинки</SelectItem>
                  </SelectContent>
                </Select>

                <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-1">
                  <Button 
                    variant={viewMode === "grid" ? "secondary" : "ghost"} 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "secondary" : "ghost"} 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              {/* Filters Sidebar */}
              <aside className={`
                ${showFilters ? 'fixed inset-0 z-50 bg-background p-6 overflow-auto' : 'hidden'} 
                lg:block lg:static lg:w-64 lg:flex-shrink-0
              `}>
                {showFilters && (
                  <div className="flex items-center justify-between mb-6 lg:hidden">
                    <h2 className="text-lg font-semibold">Фильтры</h2>
                    <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-3">Категории</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <a 
                          key={cat.id} 
                          href="#" 
                          className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                        >
                          <span>{cat.name}</span>
                          <span className="text-muted-foreground">{cat.count.toLocaleString()}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-3">Цена, ₸</h3>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100000}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex items-center gap-2">
                        <Input 
                          type="number" 
                          value={priceRange[0]} 
                          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                          className="h-9"
                        />
                        <span className="text-muted-foreground">—</span>
                        <Input 
                          type="number" 
                          value={priceRange[1]} 
                          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                          className="h-9"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Car Brand */}
                  <div>
                    <h3 className="font-semibold mb-3">Марка авто</h3>
                    <div className="space-y-2 max-h-40 overflow-auto">
                      {carBrands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
                          <Checkbox />
                          <span>{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Manufacturer */}
                  <div>
                    <h3 className="font-semibold mb-3">Производитель</h3>
                    <div className="space-y-2 max-h-40 overflow-auto">
                      {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
                          <Checkbox />
                          <span>{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-semibold mb-3">Наличие</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox />
                        <span>В наличии</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox />
                        <span>Под заказ</span>
                      </label>
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <h3 className="font-semibold mb-3">Тип</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox />
                        <span>Оригинал</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox />
                        <span>Аналог</span>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Сбросить фильтры
                  </Button>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
                  {products.map((product) => (
                    <a 
                      key={product.id} 
                      href={`/product/${product.id}`}
                      className={`
                        group bg-card border border-border rounded-xl overflow-hidden 
                        hover:border-primary/50 hover:shadow-lg transition-all duration-300
                        ${viewMode === "list" ? "flex" : ""}
                      `}
                    >
                      <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className={`w-full object-cover ${viewMode === "list" ? "h-full" : "h-48"}`}
                        />
                        {product.oldPrice && (
                          <Badge className="absolute top-2 left-2 bg-destructive">
                            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                          </Badge>
                        )}
                        {product.isOriginal && (
                          <Badge className="absolute top-2 right-2 bg-primary">
                            Оригинал
                          </Badge>
                        )}
                        <button className="absolute bottom-2 right-2 p-2 bg-background/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-4 flex-1">
                        <p className="text-xs text-muted-foreground mb-1">
                          {product.brand} • {product.article}
                        </p>
                        <h3 className="font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({product.reviews} отзывов)
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-bold text-primary">
                              {product.price.toLocaleString()} ₸
                            </p>
                            {product.oldPrice && (
                              <p className="text-sm text-muted-foreground line-through">
                                {product.oldPrice.toLocaleString()} ₸
                              </p>
                            )}
                          </div>
                          <Button size="icon" className="h-9 w-9">
                            <ShoppingCart className="w-4 h-4" />
                          </Button>
                        </div>

                        <p className={`text-xs mt-2 ${product.inStock ? "text-green-500" : "text-yellow-500"}`}>
                          {product.inStock ? "В наличии" : "Под заказ 3-5 дней"}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button variant="outline" disabled>Назад</Button>
                  <Button variant="secondary">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">4</Button>
                  <span className="px-2">...</span>
                  <Button variant="outline">24</Button>
                  <Button variant="outline">Вперёд</Button>
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

export default Catalog;
