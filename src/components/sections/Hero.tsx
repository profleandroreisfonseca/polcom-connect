import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToObjectives = () => {
    const element = document.getElementById("objetivos");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Comunicação Política Moderna
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-primary">
              Solução Integrada
            </span>
            <br />
            <span className="text-foreground">de Comunicação Política</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Aplicativo personalizado, disparos em massa e serviço técnico especializado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card shadow-card">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Solução Completa</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card shadow-card">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Tecnologia Moderna</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card shadow-card">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Suporte Especializado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToObjectives}
          className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-smooth cursor-pointer animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
