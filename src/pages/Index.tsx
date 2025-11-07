import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const { toast } = useToast();

  const services = [
    {
      icon: 'Wrench',
      title: 'Установка оборудования',
      description: 'Профессиональная установка дополнительного оборудования любой сложности',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Calendar',
      title: 'Бронирование авто',
      description: 'Защита кузова премиальными материалами с гарантией качества',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Lightbulb',
      title: 'Тюнинг оптики',
      description: 'Восстановление и улучшение характеристик автомобильной оптики',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Детейлинг',
      description: 'Комплексная профессиональная чистка и защита автомобиля',
      price: 'от 15 000 ₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/ed419ae8-8220-44f2-a392-2512e01fa7f2/files/1c29fb86-ab7c-4e81-95a0-04c91463759f.jpg',
      title: 'Премиум детейлинг',
      description: 'Mercedes-Benz S-Class'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ed419ae8-8220-44f2-a392-2512e01fa7f2/files/0cb5592b-1475-49e1-bac0-8f30715f0165.jpg',
      title: 'Тюнинг оптики',
      description: 'BMW 7 Series'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ed419ae8-8220-44f2-a392-2512e01fa7f2/files/d433ad5e-40d9-4c1e-9dbb-69768ff681f6.jpg',
      title: 'Детейлинг салона',
      description: 'Audi A8'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">AutoLux</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-accent transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-accent transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="bg-accent hover:bg-accent/90 text-primary">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Премиальный сервис
              <span className="block text-accent mt-2">для вашего автомобиля</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный уход и обслуживание автомобилей премиум-класса с гарантией качества
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('booking')} className="bg-accent hover:bg-accent/90 text-primary text-lg px-8">
                Записаться на сервис
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для обслуживания вашего автомобиля
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-accent">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b last:border-0">
                      <div>
                        <h4 className="font-semibold">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <span className="text-lg font-semibold text-accent whitespace-nowrap ml-4">{service.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-center">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Точная стоимость рассчитывается индивидуально после осмотра автомобиля
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры наших работ с премиальными автомобилями
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Онлайн запись</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку и мы свяжемся с вами для подтверждения записи
          </p>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Желаемая дата</Label>
                  <Input 
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Дополнительная информация..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground text-sm">г. Москва, ул. Примерная, д. 123</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground text-sm">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Режим работы</h3>
                <p className="text-muted-foreground text-sm">Пн-Вс: 9:00 - 21:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 AutoLux. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
