import { useEffect, useState } from 'react';
import { Button } from './button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl font-bold gradient-text">InnovClinic</div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Benefícios', id: 'benefits' },
              { label: 'Funcionalidades', id: 'features' },
              { label: 'Depoimentos', id: 'testimonials' },
              { label: 'Planos', id: 'pricing' },
              { label: 'Sobre', id: 'about' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">
              Começar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}