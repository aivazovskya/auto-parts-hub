import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronRight,
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
  Tag,
  Truck,
  Shield
} from "lucide-react";

const initialCartItems = [
  {
    id: 1,
    name: "Тормозные колодки передние Brembo P85075",
    article: "BP-2234-FR",
    brand: "Brembo",
    price: 18500,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
    inStock: true,
  },
  {
    id: 2,
    name: "Масляный фильтр Mann-Filter HU 7008 z",
    article: "OF-1122-MAN",
    brand: "Mann-Filter",
    price: 3200,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=150&h=150&fit=crop",
    inStock: true,
  },
  {
    id: 3,
    name: "Свечи зажигания NGK Iridium (комплект 4 шт)",
    article: "SP-4455-NGK",
    brand: "NGK",
    price: 12800,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=150&h=150&fit=crop",
    inStock: true,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const deliveryFee = subtotal > 50000 ? 0 : 2500;
  const total = subtotal - discount + deliveryFee;

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "auto10") {
      setPromoApplied(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Корзина | AutoParts.kz</title>
        </Helmet>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center py-16">
              <ShoppingCart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="text-2xl font-bold mb-2">Корзина пуста</h1>
              <p className="text-muted-foreground mb-6">
                Добавьте товары из каталога, чтобы оформить заказ
              </p>
              <Button asChild>
                <a href="/catalog">Перейти в каталог</a>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Корзина ({cartItems.length}) | AutoParts.kz</title>
        <meta name="description" content="Корзина покупок AutoParts.kz" />
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
                <span className="text-foreground">Корзина</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">Корзина</h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-card border border-border rounded-xl p-4 flex gap-4"
                  >
                    <a href={`/product/${item.id}`} className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </a>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            {item.brand} • {item.article}
                          </p>
                          <a 
                            href={`/product/${item.id}`}
                            className="font-medium hover:text-primary transition-colors line-clamp-2"
                          >
                            {item.name}
                          </a>
                          <p className="text-xs text-green-500 mt-1">В наличии</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-10 text-center font-medium">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-lg font-bold text-primary">
                          {(item.price * item.quantity).toLocaleString()} ₸
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-4">
                  <h2 className="text-lg font-semibold mb-4">Ваш заказ</h2>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyPromo}
                        disabled={promoApplied || !promoCode}
                      >
                        <Tag className="w-4 h-4" />
                      </Button>
                    </div>
                    {promoApplied && (
                      <p className="text-sm text-green-500 mt-2">
                        Промокод применён: скидка 10%
                      </p>
                    )}
                  </div>

                  {/* Summary */}
                  <div className="space-y-3 border-t border-border pt-4 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.)
                      </span>
                      <span>{subtotal.toLocaleString()} ₸</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-500">Скидка</span>
                        <span className="text-green-500">-{discount.toLocaleString()} ₸</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Доставка</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-green-500">Бесплатно</span>
                        ) : (
                          `${deliveryFee.toLocaleString()} ₸`
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end mb-6">
                    <span className="text-lg font-semibold">Итого</span>
                    <span className="text-2xl font-bold text-primary">
                      {total.toLocaleString()} ₸
                    </span>
                  </div>

                  <Button asChild className="w-full h-12 mb-4">
                    <a href="/checkout">Оформить заказ</a>
                  </Button>

                  {subtotal < 50000 && (
                    <p className="text-xs text-muted-foreground text-center">
                      До бесплатной доставки: {(50000 - subtotal).toLocaleString()} ₸
                    </p>
                  )}

                  {/* Benefits */}
                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Truck className="w-5 h-5 text-primary" />
                      <span>Бесплатная доставка от 50 000 ₸</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Гарантия на все товары</span>
                    </div>
                  </div>
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

export default Cart;
