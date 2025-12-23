import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Phone,
  MapPin,
  Heart
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const categories = [
    "Двигатель",
    "Тормозная система",
    "Подвеска",
    "Электрика",
    "Кузов",
    "Фильтры",
    "Масла",
    "Аксессуары"
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-foreground text-background py-2 text-sm">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+77001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+7 700 123 45 67</span>
            </a>
            <span className="hidden md:flex items-center gap-2 text-background/70">
              <MapPin className="h-4 w-4" />
              Алматы, Астана, Шымкент
            </span>
          </div>
          <div className="flex items-center gap-4 text-background/70">
            <span className="hidden sm:block">Доставка по всему Казахстану</span>
            <span className="font-medium text-primary">Пн-Вс: 9:00 - 21:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="glass border-b border-border/50">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl">AutoParts</span>
                <span className="text-primary font-bold text-xl">.kz</span>
              </div>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Поиск по артикулу, названию или VIN..." 
                  className="w-full pl-12 pr-4 h-12 rounded-xl border-2 border-border focus:border-primary bg-secondary/50"
                />
                <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg">
                  Найти
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-4">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Поиск запчастей..." 
                className="w-full pl-12 pr-4 h-11 rounded-xl border-2 border-border focus:border-primary bg-secondary/50"
              />
            </div>
          </div>
        </div>

        {/* Categories nav */}
        <nav className="hidden md:block border-t border-border/50">
          <div className="container">
            <ul className="flex items-center gap-1 py-2 overflow-x-auto">
              <li>
                <Button variant="ghost" size="sm" className="font-medium text-primary">
                  <Menu className="h-4 w-4 mr-2" />
                  Каталог
                </Button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    {cat}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[120px] bg-background z-40 animate-fade-in">
          <div className="container py-6">
            <nav className="space-y-2">
              {categories.map((cat) => (
                <Button 
                  key={cat} 
                  variant="ghost" 
                  className="w-full justify-start text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat}
                </Button>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-border space-y-4">
              <Button className="w-full" size="lg">
                <User className="mr-2 h-5 w-5" />
                Войти в аккаунт
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
