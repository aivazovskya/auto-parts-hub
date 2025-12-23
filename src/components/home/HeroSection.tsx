import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Car, FileText, ArrowRight, Shield, Truck, Clock } from "lucide-react";

const HeroSection = () => {
  const [selectedMake, setSelectedMake] = useState("");

  const carMakes = [
    "Toyota", "Lexus", "BMW", "Mercedes-Benz", "Audi", 
    "Volkswagen", "Hyundai", "Kia", "Chevrolet", "Nissan"
  ];

  const models: Record<string, string[]> = {
    "Toyota": ["Camry", "Corolla", "RAV4", "Land Cruiser", "Prado", "Highlander"],
    "Lexus": ["ES", "RX", "LX", "NX", "GX"],
    "BMW": ["3 Series", "5 Series", "X3", "X5", "X7"],
    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
    "Audi": ["A4", "A6", "Q5", "Q7", "Q8"],
    "Hyundai": ["Tucson", "Santa Fe", "Sonata", "Elantra", "Creta"],
    "Kia": ["Sportage", "Sorento", "K5", "Cerato", "Seltos"],
  };

  const years = Array.from({ length: 25 }, (_, i) => (2024 - i).toString());

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-background animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Гарантия качества на все товары</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Автозапчасти для <span className="text-primary">любого авто</span>
            </h1>
            
            <p className="text-lg text-background/70 mb-8 max-w-lg">
              Более 500 000 запчастей в наличии. Оригинальные детали и качественные аналоги с доставкой по всему Казахстану.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: Truck, label: "Доставка 1-3 дня" },
                { icon: Shield, label: "Гарантия до 2 лет" },
                { icon: Clock, label: "Работаем 24/7" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-background/80">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Search form */}
          <div className="animate-scale-in" style={{ animationDelay: '150ms' }}>
            <div className="bg-background rounded-2xl p-6 shadow-intense">
              <Tabs defaultValue="car" className="w-full">
                <TabsList className="w-full mb-6 bg-secondary p-1 rounded-xl">
                  <TabsTrigger value="car" className="flex-1 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-soft">
                    <Car className="h-4 w-4 mr-2" />
                    По авто
                  </TabsTrigger>
                  <TabsTrigger value="vin" className="flex-1 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-soft">
                    <FileText className="h-4 w-4 mr-2" />
                    По VIN
                  </TabsTrigger>
                  <TabsTrigger value="search" className="flex-1 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-soft">
                    <Search className="h-4 w-4 mr-2" />
                    Поиск
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="car" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Select onValueChange={setSelectedMake}>
                      <SelectTrigger className="h-12 rounded-xl border-2">
                        <SelectValue placeholder="Марка" />
                      </SelectTrigger>
                      <SelectContent>
                        {carMakes.map((make) => (
                          <SelectItem key={make} value={make}>{make}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select disabled={!selectedMake}>
                      <SelectTrigger className="h-12 rounded-xl border-2">
                        <SelectValue placeholder="Модель" />
                      </SelectTrigger>
                      <SelectContent>
                        {(models[selectedMake] || []).map((model) => (
                          <SelectItem key={model} value={model}>{model}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl border-2">
                        <SelectValue placeholder="Год выпуска" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="h-12 rounded-xl border-2">
                        <SelectValue placeholder="Двигатель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1.6">1.6L</SelectItem>
                        <SelectItem value="2.0">2.0L</SelectItem>
                        <SelectItem value="2.4">2.4L</SelectItem>
                        <SelectItem value="2.5">2.5L</SelectItem>
                        <SelectItem value="3.0">3.0L</SelectItem>
                        <SelectItem value="3.5">3.5L</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button size="xl" className="w-full rounded-xl">
                    Подобрать запчасти
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </TabsContent>

                <TabsContent value="vin" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Введите VIN-номер автомобиля
                    </label>
                    <Input 
                      placeholder="Например: JTDBR32E140023456" 
                      className="h-12 rounded-xl border-2 uppercase font-mono"
                      maxLength={17}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      VIN состоит из 17 символов и находится в техпаспорте
                    </p>
                  </div>
                  <Button size="xl" className="w-full rounded-xl">
                    Найти запчасти по VIN
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </TabsContent>

                <TabsContent value="search" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Поиск по артикулу или названию
                    </label>
                    <Input 
                      placeholder="Например: 04465-33450 или колодки тормозные" 
                      className="h-12 rounded-xl border-2"
                    />
                  </div>
                  <Button size="xl" className="w-full rounded-xl">
                    Найти
                    <Search className="h-5 w-5 ml-2" />
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
