import { Settings, Shield, RefreshCw, BarChart, Cloud, FileText } from "lucide-react";

const TechnicalService = () => {
  const services = [
    {
      icon: Cloud,
      title: "Configuração de Servidor",
      description: "Setup e gerenciamento de servidor em nuvem com armazenamento seguro",
    },
    {
      icon: BarChart,
      title: "Dashboard e Relatórios",
      description: "Desenvolvimento e manutenção de painéis de controle e histórico",
    },
    {
      icon: FileText,
      title: "Documentação Legal",
      description: "Hospedagem de Política de Privacidade e Termos de Uso",
    },
    {
      icon: RefreshCw,
      title: "Atualizações Regulares",
      description: "Melhorias de segurança, compatibilidade e funcionalidades",
    },
    {
      icon: Settings,
      title: "Monitoramento 24/7",
      description: "Supervisão contínua para garantir operação ininterrupta",
    },
    {
      icon: Shield,
      title: "Segurança e Conformidade",
      description: "Proteção de dados e adequação às normas legais",
    },
  ];

  return (
    <section id="servico" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Serviço Técnico Especializado
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Suporte técnico completo para instalação, configuração, operação e manutenção
            de todo o ecossistema de comunicação política.
          </p>
        </div>

        {/* Objective and Justification */}
        <div className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card shadow-card border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Objetivo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fornecer suporte técnico completo e especializado garantindo que aplicativo,
              sistema de disparos e servidores funcionem de maneira integrada, segura e contínua.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-card shadow-card border border-accent/20">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Justificativa</h3>
            <p className="text-muted-foreground leading-relaxed">
              Essencial para manter estabilidade, segurança e continuidade do sistema.
              Sem ele, o ecossistema poderia apresentar falhas comprometendo a comunicação.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Serviços Incluídos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-elevated hover:border-primary/30 transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-bold mb-6 text-center text-foreground">
              Garantias do Serviço Técnico
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Garantido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoramento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Conformidade Legal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalService;
