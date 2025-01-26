'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, FileText, MessageCircle, CheckCircle,ChevronUp, Notebook as Robot,  Bell, Menu, X, Brain } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'planos', label: 'Planos' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Robot className="w-8 h-8 text-primary" />
              <span className="ml-2 font-bold text-xl">InnoviAgent</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Header */}
      <header className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-r from-primary to-primary/90">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="object-cover w-full h-full opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Automatize Sua Clínica com Facilidade e Eficiência!
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Agendamentos, comunicação e gestão em um único lugar, integrado ao WhatsApp e pensado para você.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Robot className="w-4 h-4" /> Fale com Nosso Assistente Virtual
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                Agende uma Demonstração
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-muted scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Por que Escolher o InnoviAgent?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-10 h-10 text-primary" />,
                title: 'Automação de Agendamentos',
                description: 'Reduza o tempo gasto em tarefas manuais.',
              },
              {
                icon: <MessageCircle className="w-10 h-10 text-primary" />,
                title: 'Integração com WhatsApp',
                description: 'Comunicação prática e direta com seus pacientes.',
              },
              {
                icon: <FileText className="w-10 h-10 text-primary" />,
                title: 'Gestão de Prontuários',
                description: 'Tudo organizado e acessível com segurança.',
              },
              {
                icon: <Bell className="w-10 h-10 text-primary" />,
                title: 'Lembretes Automáticos',
                description: 'Reduza faltas e otimize a agenda.',
              },
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-24 bg-background scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tudo o Que Você Precisa em Um Só Lugar</h2>
            <p className="text-lg text-muted-foreground">Simplifique sua rotina com nossas funcionalidades</p>
          </div>
          <div className="space-y-24">
            {[
              {
                title: 'Dashboard Intuitivo',
                description: 'Acompanhe os indicadores mais importantes da sua clínica em uma única tela. Tenha acesso a métricas como quantidade de agendamentos, cancelamentos, consultas realizadas e muito mais. O layout é moderno e fácil de usar, proporcionando uma visão clara e prática do desempenho do seu negócio.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
                icon: <Brain className="w-8 h-8" />,
              },
              {
                title: 'Agenda Online Integrada',
                description: 'Organize seus compromissos com facilidade em uma agenda online que pode ser integrada ao Google Calendar. A ferramenta permite gerenciar agendamentos, reagendamentos e cancelamentos, tudo em tempo real. Economize tempo com notificações automáticas e sincronização entre dispositivos.',
                image: 'https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&q=80&w=1000',
                icon: <Calendar className="w-8 h-8" />,
              },
              {
                title: 'Prontuário e Histórico do Paciente Personalizável',
                description: 'Registre e acompanhe o progresso de cada paciente com um prontuário que se adapta às necessidades específicas do profissional de saúde. Adicione campos personalizados, acompanhe diagnósticos anteriores e visualize rapidamente o histórico do paciente, tudo em um só lugar.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
                icon: <FileText className="w-8 h-8" />,
              },
              {
                title: 'Assistente Virtual via Chatbot e WhatsApp',
                description: 'Automatize interações com os pacientes por meio de um assistente virtual inteligente. Ele responde a perguntas, realiza agendamentos e envia lembretes de consultas. Além disso, no painel do sistema, você pode acompanhar todas as conversas realizadas pelo chatbot, garantindo controle e transparência na comunicação.',
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
                icon: <MessageCircle className="w-8 h-8" />,
              },
            ].map((feature, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-block p-3 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-muted scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Escolha o Plano Ideal para Sua Clínica</h2>
          <div className="flex justify-center items-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Mensal</span>
            <Button
              variant="outline"
              size="sm"
              className={`relative ${isAnnual ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="absolute -top-12 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                Economize até 20%
              </span>
              {isAnnual ? 'Anual' : 'Mensal'}
            </Button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Anual</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Start',
                price: isAnnual ? 'R$ 89' : 'R$ 99',
                period: isAnnual ? '/mês' : '/mês',
                description: 'Ideal para profissionais autônomos',
                features: [
                  'Até 100 pacientes',
                  'Agenda online',
                  'Prontuário básico',
                  'Lembretes via WhatsApp',
                  'Suporte por email',
                ],
                cta: 'Começar Agora',
                popular: false,
              },
              {
                title: 'Standard',
                price: isAnnual ? 'R$ 179' : 'R$ 199',
                period: isAnnual ? '/mês' : '/mês',
                description: 'Perfeito para clínicas em crescimento',
                features: [
                  'Até 500 pacientes',
                  'Agenda online avançada',
                  'Prontuário completo',
                  'Comunicação multicanal',
                  'Relatórios básicos',
                  'Suporte prioritário',
                  'Treinamento da equipe',
                ],
                cta: 'Escolher Standard',
                popular: true,
              },
              {
                title: 'Professional',
                price: isAnnual ? 'R$ 269' : 'R$ 299',
                period: isAnnual ? '/mês' : '/mês',
                description: 'Para clínicas de alto desempenho',
                features: [
                  'Pacientes ilimitados',
                  'Múltiplas unidades',
                  'Prontuário personalizado',
                  'API disponível',
                  'Relatórios avançados',
                  'Suporte 24/7 VIP',
                  'Treinamento completo',
                  'Gestor de conta dedicado',
                ],
                cta: 'Escolher Professional',
                popular: false,
              },
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                  {isAnnual && (
                    <div className="text-sm text-primary mt-2">
                      Economize {plan.title === 'Start' ? '10%' : plan.title === 'Standard' ? '15%' : '20%'} no plano anual
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-background scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dra. Maria Silva',
                role: 'Clínica Geral',
                content: 'O InnoviAgent revolucionou minha clínica. Reduzi em 70% o tempo gasto com tarefas administrativas.',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
                metric: '70% mais eficiência',
              },
              {
                name: 'Dr. João Santos',
                role: 'Cardiologista',
                content: 'A integração com WhatsApp é fantástica. Minhas faltas reduziram drasticamente.',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
                metric: '90% menos faltas',
              },
              {
                name: 'Dra. Ana Costa',
                role: 'Pediatra',
                content: 'Sistema intuitivo e completo. Minha equipe se adaptou rapidamente.',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
                metric: '100% satisfeita',
              },
              {
                name: 'Dr. Carlos Mendes',
                role: 'Ortopedista',
                content: 'Os relatórios automáticos me ajudam a tomar decisões mais precisas para minha clínica.',
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200',
                metric: '50% mais lucro',
              },
              {
                name: 'Dra. Patricia Lima',
                role: 'Dermatologista',
                content: 'O suporte é excepcional. Sempre resolvem minhas dúvidas rapidamente.',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
                metric: 'Suporte 5 estrelas',
              },
              {
                name: 'Dra. Fernanda Oliveira',
                role: 'Nutricionista',
                content: 'A função de múltiplas unidades do plano Professional revolucionou a gestão da minha rede de clínicas. Consigo acompanhar tudo em tempo real.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
                metric: '300% mais produtividade',
              },
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm inline-block">
                  {testimonial.metric}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: 'O sistema é seguro para armazenar dados dos pacientes?',
                answer: 'Sim, utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados e de seus pacientes estão protegidos com os mais altos padrões de segurança.',
              },
              {
                question: 'Posso cancelar a assinatura a qualquer momento?',
                answer: 'Sim, você pode cancelar sua assinatura quando quiser, sem multas ou taxas adicionais. No plano mensal, o cancelamento vale para o próximo ciclo de cobrança.',
              },
              {
                question: 'Quanto tempo leva para implementar o sistema?',
                answer: 'A implementação é rápida e pode ser feita em até 24 horas. Nossa equipe oferece treinamento completo para você e sua equipe se adaptarem rapidamente.',
              },
              {
                question: 'Como funciona a integração com o WhatsApp?',
                answer: 'A integração é simples e automática. Após a configuração inicial, o sistema enviará automaticamente lembretes de consultas, confirmações e outras comunicações importantes para seus pacientes.',
              },
              {
                question: 'O sistema funciona em tablets e celulares?',
                answer: 'Sim, o InnoviAgent é 100% responsivo e funciona perfeitamente em qualquer dispositivo: computadores, tablets e smartphones.',
              },
              {
                question: 'Vocês oferecem suporte técnico?',
                answer: 'Sim, oferecemos suporte técnico 24/7 por chat, email e telefone. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou necessidade.',
              },
              {
                question: 'Posso personalizar o sistema para minha especialidade?',
                answer: 'Sim, o sistema é altamente personalizável e pode ser adaptado para diferentes especialidades médicas, com campos e funcionalidades específicas.',
              },
              {
                question: 'Como são feitos os backups dos dados?',
                answer: 'Realizamos backups automáticos diários e mantemos múltiplas cópias em servidores seguros. Seus dados estão sempre protegidos e disponíveis.',
              },
              {
                question: 'O sistema emite nota fiscal?',
                answer: 'Sim, o sistema está integrado com os principais sistemas de emissão de nota fiscal eletrônica e pode automatizar todo o processo de faturamento.',
              },
              {
                question: 'Existe um limite de pacientes ou usuários?',
                answer: 'Não há limite de pacientes cadastrados. Quanto aos usuários do sistema, isso depende do seu plano, mas podemos personalizar de acordo com sua necessidade.',
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Nossa História
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Produto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p>© 2024 InnoviAgent. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-lg gap-2"
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        >
          <MessageCircle className="w-5 h-5" />
          Fale Conosco
        </Button>
      </div>
    </div>
  );
}