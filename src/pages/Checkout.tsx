import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ChevronRight,
  Truck,
  MapPin,
  CreditCard,
  Banknote,
  Building2,
  Smartphone,
  Shield,
  Check
} from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Тормозные колодки передние Brembo P85075",
    price: 18500,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Масляный фильтр Mann-Filter HU 7008 z",
    price: 3200,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=100&h=100&fit=crop",
  },
];

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("courier");
  const [paymentMethod, setPaymentMethod] = useState("kaspi");
  const [agreed, setAgreed] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === "pickup" ? 0 : 2500;
  const total = subtotal + deliveryFee;

  return (
    <>
      <Helmet>
        <title>Оформление заказа | AutoParts.kz</title>
        <meta name="description" content="Оформление заказа в интернет-магазине AutoParts.kz" />
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
                <a href="/cart" className="hover:text-primary transition-colors">Корзина</a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">Оформление заказа</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Info */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">1</span>
                    Контактные данные
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Введите имя" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="surname">Фамилия *</Label>
                      <Input id="surname" placeholder="Введите фамилию" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.com" className="mt-1" />
                    </div>
                  </div>
                </div>

                {/* Delivery */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">2</span>
                    Способ доставки
                  </h2>
                  
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-3">
                    <label className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      deliveryMethod === "courier" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="courier" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Truck className="w-5 h-5 text-primary" />
                          <span className="font-medium">Курьерская доставка</span>
                        </div>
                        <p className="text-sm text-muted-foreground">1-2 рабочих дня по Алматы и Астане</p>
                        <p className="text-sm font-medium text-primary mt-1">2 500 ₸</p>
                      </div>
                    </label>

                    <label className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      deliveryMethod === "pickup" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="pickup" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span className="font-medium">Самовывоз</span>
                        </div>
                        <p className="text-sm text-muted-foreground">ул. Абая 150, Алматы (Пн-Сб: 9:00-19:00)</p>
                        <p className="text-sm font-medium text-green-500 mt-1">Бесплатно</p>
                      </div>
                    </label>

                    <label className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      deliveryMethod === "transport" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="transport" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Truck className="w-5 h-5 text-primary" />
                          <span className="font-medium">Транспортная компания</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Доставка по всему Казахстану за 3-7 дней</p>
                        <p className="text-sm font-medium text-primary mt-1">От 3 000 ₸</p>
                      </div>
                    </label>
                  </RadioGroup>

                  {deliveryMethod === "courier" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="city">Город *</Label>
                        <Input id="city" placeholder="Алматы" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="address">Адрес доставки *</Label>
                        <Input id="address" placeholder="ул. Примерная, д. 1, кв. 1" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="comment">Комментарий к заказу</Label>
                        <Textarea 
                          id="comment" 
                          placeholder="Код домофона, удобное время доставки и т.д."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">3</span>
                    Способ оплаты
                  </h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <label className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "kaspi" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="kaspi" />
                      <Smartphone className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <span className="font-medium">Kaspi Pay / Kaspi QR</span>
                        <p className="text-sm text-muted-foreground">Оплата через Kaspi.kz</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="card" />
                      <CreditCard className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <span className="font-medium">Банковская карта</span>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, Мир</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "cash" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="cash" />
                      <Banknote className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <span className="font-medium">Наличными при получении</span>
                        <p className="text-sm text-muted-foreground">Оплата курьеру или в пункте выдачи</p>
                      </div>
                    </label>

                    <label className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "invoice" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}>
                      <RadioGroupItem value="invoice" />
                      <Building2 className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <span className="font-medium">Безналичный расчёт</span>
                        <p className="text-sm text-muted-foreground">Для юридических лиц по счёту</p>
                      </div>
                    </label>
                  </RadioGroup>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-4">
                  <h2 className="text-lg font-semibold mb-4">Ваш заказ</h2>

                  {/* Items */}
                  <div className="space-y-3 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm line-clamp-2">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity} × {item.price.toLocaleString()} ₸
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="/cart" className="text-sm text-primary hover:underline">
                    Редактировать корзину
                  </a>

                  {/* Summary */}
                  <div className="space-y-3 border-t border-border pt-4 mt-4 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Товары</span>
                      <span>{subtotal.toLocaleString()} ₸</span>
                    </div>
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

                  <label className="flex items-start gap-3 mb-4 cursor-pointer">
                    <Checkbox 
                      checked={agreed} 
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      Я согласен с{" "}
                      <a href="/terms" className="text-primary hover:underline">условиями использования</a>
                      {" "}и{" "}
                      <a href="/privacy" className="text-primary hover:underline">политикой конфиденциальности</a>
                    </span>
                  </label>

                  <Button className="w-full h-12" disabled={!agreed}>
                    <Check className="w-5 h-5 mr-2" />
                    Подтвердить заказ
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Безопасная оплата</span>
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

export default Checkout;
