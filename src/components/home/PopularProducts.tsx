import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  article: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  inStock: boolean;
  isOriginal: boolean;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Колодки тормозные передние",
    article: "04465-33450",
    brand: "Toyota",
    price: 15900,
    oldPrice: 18500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    inStock: true,
    isOriginal: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Фильтр масляный",
    article: "90915-YZZD4",
    brand: "Toyota",
    price: 2450,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    inStock: true,
    isOriginal: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "Амортизатор передний",
    article: "48510-80574",
    brand: "Kayaba",
    price: 28500,
    oldPrice: 32000,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    inStock: true,
    isOriginal: false,
    rating: 4.7
  },
  {
    id: 4,
    name: "Свечи зажигания комплект",
    article: "90919-01253",
    brand: "Denso",
    price: 8900,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    inStock: true,
    isOriginal: false,
    rating: 4.6
  },
  {
    id: 5,
    name: "Ремень ГРМ",
    article: "13568-09131",
    brand: "Gates",
    price: 12400,
    oldPrice: 14500,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop",
    inStock: false,
    isOriginal: false,
    rating: 4.5
  },
  {
    id: 6,
    name: "Радиатор охлаждения",
    article: "16400-28630",
    brand: "Nissens",
    price: 45900,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
    inStock: true,
    isOriginal: false,
    rating: 4.8
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₸';
};

const PopularProducts = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">Популярные товары</h2>
            <p className="text-muted-foreground">Самые востребованные запчасти</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Все товары
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-strong transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isOriginal && (
                    <Badge className="bg-primary text-primary-foreground">
                      Оригинал
                    </Badge>
                  )}
                  {product.oldPrice && (
                    <Badge variant="secondary" className="bg-red-500 text-white border-0">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                {/* Favorite button */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                  <Heart className="h-5 w-5" />
                </button>

                {/* Stock status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-lg font-semibold">Под заказ</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary">{product.brand}</span>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-sm text-muted-foreground font-mono">{product.article}</span>
                </div>

                <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-muted'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>

                {/* Price and actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                    </div>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>
                  <Button size="icon" className="rounded-xl h-12 w-12">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" size="lg">
            Все товары
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
