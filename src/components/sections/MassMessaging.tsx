import { MessageCircle, Monitor, Wifi, Zap } from "lucide-react";

const MassMessaging = () => {
  const infrastructure = [
    {
      icon: Monitor,
      title: "Computador Dedicado",
      specs: "Intel i7, 16GB RAM, SSD 1TB, Monitor 24\", Mouse, Teclado, WiFi, LAN",
    },
    {
      icon: Wifi,
      title: "Internet Estável",
      specs: "Conexão de alta velocidade para operação contínua",
    },
    {
      icon: Zap,
      title: "Nobreak 1.5 kVA",
      specs: "Proteção contra quedas de energia e estabilização",
    },
  ];

  return (
    <section id="disparos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sistema de Disparo em Massa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Instalação e configuração profissional do sistema para envio de mensagens via WhatsApp
            em PC dedicado com Windows 11.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="p-8 rounded-2xl bg-gradient-subtle border border-border shadow-elevated">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Arquitetura do Sistema</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {infrastructure.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="p-6 rounded-xl bg-card shadow-card border border-border h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold mb-3 text-center text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground text-center">{item.specs}</p>
                  </div>
                  {index < infrastructure.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card shadow-card border border-border">
              <h4 className="font-bold mb-3 text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Objetivo
              </h4>
              <p className="text-muted-foreground">
                Garantir envio massivo e profissional de mensagens, mantendo qualidade
                e confiabilidade na comunicação com a base de contatos.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-card border border-border">
              <h4 className="font-bold mb-3 text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Configuração
              </h4>
              <p className="text-muted-foreground">
                Sistema instalado e configurado em ambiente dedicado com Windows 11,
                pronto para operação contínua e escalável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassMessaging;
