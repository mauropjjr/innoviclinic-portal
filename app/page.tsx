"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock2 as Clock24, FileText, MessageSquare, Users, Zap, Building2, HeartPulse, Globe, Rocket, Check, Bell, Phone } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative hero-pattern pt-32 pb-40">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm mb-6 text-white">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Tecnologia para Clínicas
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
              Atendimento 24h, agendamentos automáticos e prontuário médico customizável
              </h1>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Otimize sua clínica com tecnologia inteligente que combina agilidade, personalização e eficiência para atender todas as especialidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 hover-card-animation bg-white text-blue-600 hover:bg-white/90">
                  Assista ao vídeo e veja como funciona! <span className="ml-2">➡️</span>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 hover-card-animation border-white/20 text-white hover:bg-white/10">
                  Agende uma demo
                </Button>
              </div>
              <div className="macbook-container">
                <Image
                  src="https://technext.github.io/beam/imgs/macbook.png"
                  alt="Sistema em ação"
                  width={1200}
                  height={750}
                  className="macbook-image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section-padding bg-muted/50 relative overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock24 className="w-10 h-10 text-primary" />,
                  title: "Agendamentos 24h",
                  description: "Receba agendamentos 24h por dia, mesmo fora do horário comercial",
                },
                {
                  icon: <MessageSquare className="w-10 h-10 text-primary" />,
                  title: "Chatbots Autônomos",
                  description: "Otimize o atendimento, reduza a carga de trabalho da equipe e aumente a satisfação dos pacientes",
                },
                {
                  icon: <Phone className="w-10 h-10 text-primary" />,
                  title: "Integração WhatsApp",
                  description: "Comunicação direta e eficiente com seus pacientes",
                },
                {
                  icon: <Bell className="w-10 h-10 text-primary" />,
                  title: "Lembretes Automáticos",
                  description: "Garanta que os pacientes não percam consultas com lembretes automáticos",
                },
                {
                  icon: <Globe className="w-10 h-10 text-primary" />,
                  title: "Presença Online",
                  description: "Divulgue sua clínica e conquiste novos pacientes com uma landing page personalizada",
                },
                {
                  icon: <Rocket className="w-10 h-10 text-primary" />,
                  title: "Mais Agilidade",
                  description: "Informações e consultas rápidas e acessíveis para seus pacientes",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover-card-animation bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Funcionalidades Principais</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa para gerenciar sua clínica de forma eficiente
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "Chatbots Autônomos",
                  description: "Agendamentos, cancelamentos e reagendamentos automáticos com IA avançada",
                },
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "Integração WhatsApp",
                  description: "Comunicação direta, lembretes automáticos e respostas rápidas para perguntas frequentes",
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Prontuário Personalizado",
                  description: "Adaptável a diversas especialidades como medicina, odontologia, nutrição, estética e mais",
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Agenda Integrada",
                  description: "Controle completo sobre horários e compromissos com sincronização em tempo real",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-6 hover-card-animation p-6 rounded-xl hover:bg-muted/50">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">O que nossos clientes dizem</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Histórias de sucesso de clínicas que transformaram seu atendimento
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote: "Desde que começamos a usar o sistema, nunca foi tão fácil manter nossa agenda organizada!",
                  author: "Dra. Maria Silva",
                  role: "Clínica Saúde Integral",
                },
                {
                  quote: "O chatbot no WhatsApp é incrível! Nossos pacientes amam a praticidade.",
                  author: "Dr. João Santos",
                  role: "Centro Médico Bem-Estar",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-lg hover-card-animation bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Planos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Escolha o plano ideal para sua clínica
              </p>
            </div>
            <Tabs defaultValue="monthly" className="max-w-5xl mx-auto">
              <TabsList className="grid w-[400px] grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="monthly">Mensal</TabsTrigger>
                <TabsTrigger value="yearly">Anual</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Básico",
                      price: "R$ 197",
                      description: "Para clínicas pequenas",
                      features: [
                        "Agendamentos online",
                        "Chatbot sequencial",
                        "Landing page personalizada",
                        "Suporte por email"
                      ],
                    },
                    {
                      name: "Avançado",
                      price: "R$ 297",
                      description: "Mais recursos para sua clínica",
                      features: [
                        "Chatbot com IA",
                        "Integração WhatsApp",
                        "Lembretes automáticos",
                        "Suporte prioritário"
                      ],
                      popular: true,
                    },
                    {
                      name: "Premium",
                      price: "R$ 497",
                      description: "Para clínicas de grande porte",
                      features: [
                        "Todas as funcionalidades",
                        "Suporte técnico prioritário",
                        "API personalizada",
                        "Treinamento exclusivo"
                      ],
                    },
                  ].map((plan, index) => (
                    <Card key={index} className={`relative border-2 hover:border-primary transition-colors hover-card-animation ${plan.popular ? 'border-primary' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Mais popular
                        </div>
                      )}
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">/mês</span>
                        </div>
                        <p className="text-muted-foreground mb-6">{plan.description}</p>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          Começar agora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Básico",
                      price: "R$ 1.970",
                      description: "Para clínicas pequenas",
                      features: [
                        "Agendamentos online",
                        "Chatbot sequencial",
                        "Landing page personalizada",
                        "Suporte por email",
                        "2 meses grátis"
                      ],
                    },
                    {
                      name: "Avançado",
                      price: "R$ 2.970",
                      description: "Mais recursos para sua clínica",
                      features: [
                        "Chatbot com IA",
                        "Integração WhatsApp",
                        "Lembretes automáticos",
                        "Suporte prioritário",
                        "2 meses grátis"
                      ],
                      popular: true,
                    },
                    {
                      name: "Premium",
                      price: "R$ 4.970",
                      description: "Para clínicas de grande porte",
                      features: [
                        "Todas as funcionalidades",
                        "Suporte técnico prioritário",
                        "API personalizada",
                        "Treinamento exclusivo",
                        "2 meses grátis"
                      ],
                    },
                  ].map((plan, index) => (
                    <Card key={index} className={`relative border-2 hover:border-primary transition-colors hover-card-animation ${plan.popular ? 'border-primary' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Mais popular
                        </div>
                      )}
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">/ano</span>
                        </div>
                        <p className="text-muted-foreground mb-6">{plan.description}</p>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          Começar agora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Perguntas Frequentes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre nossa solução
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Como é feita a configuração da integração com WhatsApp?",
                  answer: "A configuração é feita em poucos passos, diretamente no painel de administração do sistema.",
                },
                {
                  question: "Os lembretes de consultas podem ser personalizados?",
                  answer: "Sim, você pode ajustar o texto e os horários para envio dos lembretes.",
                },
                {
                  question: "O software funciona em dispositivos móveis?",
                  answer: "Sim, é totalmente responsivo e compatível com celulares e tablets.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover-card-animation">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforme o atendimento da sua clínica hoje mesmo!
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Sua clínica, mais eficiente e acessível: atendimento 24h, agendamentos automáticos e prontuários personalizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2 hover-card-animation">
                  Comece agora <span className="ml-2">➡️</span>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 hover-card-animation border-white/20 hover:bg-white/10">
                  Fale com um especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}