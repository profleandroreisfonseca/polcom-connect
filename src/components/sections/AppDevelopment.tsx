import { Shield, Lock, CheckCircle, Link as LinkIcon, Server, Database, Calendar } from "lucide-react";

const AppDevelopment = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Interface Moderna",
      description: "Tela inicial intuitiva com botão de salvamento de contatos",
    },
    {
      icon: Shield,
      title: "Avisos Transparentes",
      description: "Explicação clara antes de solicitar acesso aos contatos",
    },
    {
      icon: Lock,
      title: "Envio Seguro",
      description: "Transmissão criptografada (HTTPS) dos dados para o servidor",
    },
    {
      icon: CheckCircle,
      title: "Confirmação do Usuário",
      description: "Validação explícita antes do envio de qualquer informação",
    },
    {
      icon: CheckCircle,
      title: "Feedback Claro",
      description: "Mensagens de sucesso ou erro após cada operação",
    },
    {
      icon: LinkIcon,
      title: "Documentação Completa",
      description: "Links para Política de Privacidade e Termos de Uso",
    },
  ];

  const infrastructure = [
    {
      icon: Server,
      title: "Servidor em Nuvem",
      description: "Armazenamento seguro com criptografia e HTTPS",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Organização protegida com autenticação e backups",
    },
    {
      icon: Lock,
      title: "Certificados SSL",
      description: "Transmissão segura e conformidade com as lojas",
    },
  ];

  const timeline = [
    { milestone: "MVP Android para Testes", days: "10 dias" },
    { milestone: "Servidor e Armazenamento", days: "2 dias" },
    { milestone: "Painel Dashboard", days: "2 dias" },
    { milestone: "Política e Termos", days: "1 dia" },
    { milestone: "App Android Final (.apk)", days: "15 dias" },
    { milestone: "App iPhone Final (.ipa)", days: "15 dias" },
  ];

  return (
    <section id="aplicativo" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Desenvolvimento do Aplicativo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Canal legítimo e autorizado de coleta de contatos, transformando o app em ferramenta
            de organização de base e relacionamento com o eleitorado.
          </p>
        </div>

        {/* Justificativa */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-card shadow-elevated border-2 border-accent/40">
          <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent-foreground" />
            </div>
            Justificativa
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span>Base de contatos voluntária, com consentimento do usuário</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span>Organização de base real, atualizada e autorizada</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span>Preparação para futuras campanhas e comunicação oficial</span>
            </li>
          </ul>
        </div>

        {/* Funcionalidades */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Funcionalidades Principais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card shadow-elevated border-2 border-secondary/40 hover:border-secondary hover:scale-105 transition-smooth"
              >
                <feature.icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold mb-2 text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infraestrutura */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Infraestrutura Necessária</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {infrastructure.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card shadow-elevated border-2 border-primary/50 hover:border-primary hover:scale-105 transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Cronograma de Entregas</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-3 top-2 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/50">
                    <Calendar className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div className="p-6 rounded-xl bg-card shadow-elevated border-2 border-border hover:border-primary/40 transition-smooth">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="font-bold text-foreground">{item.milestone}</h4>
                      <span className="text-sm font-medium text-primary">{item.days}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-primary border-2 border-primary shadow-lg shadow-primary/50">
              <span className="text-xl font-bold text-primary-foreground">Total Estimado: 45 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
