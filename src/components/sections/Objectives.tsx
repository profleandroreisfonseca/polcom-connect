import { Smartphone, MessageSquare, Wrench } from "lucide-react";

const Objectives = () => {
  const objectives = [
    {
      icon: Smartphone,
      title: "Aplicativo de Coleta",
      description: "Desenvolver aplicativo para Android e iOS com coleta autorizada de contatos telefônicos",
    },
    {
      icon: MessageSquare,
      title: "Disparos em Massa",
      description: "Instalar e configurar sistema profissional de envio de mensagens via WhatsApp",
    },
    {
      icon: Wrench,
      title: "Serviço Técnico",
      description: "Contratar suporte especializado para manutenção e operação contínua do sistema",
    },
  ];

  return (
    <section id="objetivos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Objetivos da Solução
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criar uma solução integrada de comunicação política para fortalecer e ampliar a base de contatos,
            transformando o relacionamento com o eleitorado através de tecnologia moderna e autorizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-smooth border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <objective.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{objective.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
