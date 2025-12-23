import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight,
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  Eye,
  RefreshCcw,
  Truck,
  CheckCircle2,
  Clock,
  XCircle,
  Trash2
} from "lucide-react";

const orders = [
  {
    id: "ORD-2024-1234",
    date: "20 декабря 2024",
    status: "delivered",
    statusText: "Доставлен",
    total: 40200,
    items: [
      { name: "Тормозные колодки Brembo P85075", quantity: 2, price: 18500 },
      { name: "Масляный фильтр Mann-Filter", quantity: 1, price: 3200 },
    ],
  },
  {
    id: "ORD-2024-1235",
    date: "18 декабря 2024",
    status: "shipping",
    statusText: "В пути",
    total: 45000,
    items: [
      { name: "Амортизатор задний Sachs", quantity: 1, price: 45000 },
    ],
  },
  {
    id: "ORD-2024-1236",
    date: "15 декабря 2024",
    status: "processing",
    statusText: "В обработке",
    total: 12800,
    items: [
      { name: "Свечи зажигания NGK (комплект)", quantity: 1, price: 12800 },
    ],
  },
];

const favorites = [
  {
    id: 1,
    name: "Ремень ГРМ Continental CT1028",
    brand: "Continental",
    price: 8900,
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=150&h=150&fit=crop",
    inStock: true,
  },
  {
    id: 2,
    name: "Подшипник ступицы SKF VKBA 3648",
    brand: "SKF",
    price: 15600,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=150&h=150&fit=crop",
    inStock: true,
  },
  {
    id: 3,
    name: "Стойка стабилизатора TRW JTS7519",
    brand: "TRW",
    price: 6800,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
    inStock: false,
  },
];

const addresses = [
  {
    id: 1,
    name: "Дом",
    address: "г. Алматы, ул. Абая 150, кв. 45",
    isDefault: true,
  },
  {
    id: 2,
    name: "Работа",
    address: "г. Алматы, пр. Достык 89, офис 312",
    isDefault: false,
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case "shipping":
      return <Truck className="w-5 h-5 text-blue-500" />;
    case "processing":
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case "cancelled":
      return <XCircle className="w-5 h-5 text-destructive" />;
    default:
      return <Clock className="w-5 h-5 text-muted-foreground" />;
  }
};

const Account = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <>
      <Helmet>
        <title>Личный кабинет | AutoParts.kz</title>
        <meta name="description" content="Личный кабинет пользователя AutoParts.kz" />
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
                <span className="text-foreground">Личный кабинет</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="bg-card border border-border rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Александр Иванов</p>
                      <p className="text-sm text-muted-foreground">+7 (777) 123-45-67</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center">
                    Постоянный клиент
                  </Badge>
                </div>

                <nav className="bg-card border border-border rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeTab === "orders" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    <span>Мои заказы</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab("favorites")}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeTab === "favorites" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Избранное</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab("addresses")}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeTab === "addresses" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Адреса доставки</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeTab === "settings" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Настройки</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-destructive hover:bg-destructive/10 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span>Выйти</span>
                  </button>
                </nav>
              </aside>

              {/* Content */}
              <div className="flex-1">
                {/* Orders */}
                {activeTab === "orders" && (
                  <div>
                    <h1 className="text-2xl font-bold mb-6">Мои заказы</h1>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="bg-card border border-border rounded-xl p-6">
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                              <p className="font-semibold">{order.id}</p>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(order.status)}
                              <span className="font-medium">{order.statusText}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">
                                  {item.name} × {item.quantity}
                                </span>
                                <span>{(item.price * item.quantity).toLocaleString()} ₸</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <p className="font-semibold">
                              Итого: <span className="text-primary">{order.total.toLocaleString()} ₸</span>
                            </p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-2" />
                                Подробнее
                              </Button>
                              <Button variant="outline" size="sm">
                                <RefreshCcw className="w-4 h-4 mr-2" />
                                Повторить
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Favorites */}
                {activeTab === "favorites" && (
                  <div>
                    <h1 className="text-2xl font-bold mb-6">Избранное</h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {favorites.map((item) => (
                        <div key={item.id} className="bg-card border border-border rounded-xl overflow-hidden">
                          <div className="relative h-40">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            <button className="absolute top-2 right-2 p-2 bg-background/80 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="p-4">
                            <p className="text-xs text-muted-foreground mb-1">{item.brand}</p>
                            <h3 className="font-medium mb-2 line-clamp-2">{item.name}</h3>
                            <div className="flex items-center justify-between">
                              <p className="text-lg font-bold text-primary">
                                {item.price.toLocaleString()} ₸
                              </p>
                              <p className={`text-xs ${item.inStock ? "text-green-500" : "text-yellow-500"}`}>
                                {item.inStock ? "В наличии" : "Под заказ"}
                              </p>
                            </div>
                            <Button className="w-full mt-4" size="sm">
                              В корзину
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Addresses */}
                {activeTab === "addresses" && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-2xl font-bold">Адреса доставки</h1>
                      <Button>Добавить адрес</Button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {addresses.map((addr) => (
                        <div 
                          key={addr.id} 
                          className={`bg-card border rounded-xl p-4 ${
                            addr.isDefault ? "border-primary" : "border-border"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-primary" />
                              <span className="font-medium">{addr.name}</span>
                            </div>
                            {addr.isDefault && (
                              <Badge>По умолчанию</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{addr.address}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Изменить</Button>
                            {!addr.isDefault && (
                              <Button variant="ghost" size="sm">Удалить</Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Settings */}
                {activeTab === "settings" && (
                  <div>
                    <h1 className="text-2xl font-bold mb-6">Настройки</h1>
                    <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Имя</Label>
                          <Input id="firstName" defaultValue="Александр" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Фамилия</Label>
                          <Input id="lastName" defaultValue="Иванов" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="settingsPhone">Телефон</Label>
                          <Input id="settingsPhone" defaultValue="+7 (777) 123-45-67" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="settingsEmail">Email</Label>
                          <Input id="settingsEmail" type="email" defaultValue="alex@example.com" className="mt-1" />
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <h3 className="font-semibold mb-4">Сменить пароль</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="currentPassword">Текущий пароль</Label>
                            <Input id="currentPassword" type="password" className="mt-1" />
                          </div>
                          <div></div>
                          <div>
                            <Label htmlFor="newPassword">Новый пароль</Label>
                            <Input id="newPassword" type="password" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                            <Input id="confirmPassword" type="password" className="mt-1" />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-4">
                        <Button variant="outline">Отмена</Button>
                        <Button>Сохранить изменения</Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Account;
