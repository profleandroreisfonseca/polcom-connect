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
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="block text-white drop-shadow-2xl">
              SOLUÇÃO INTEGRADA
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              DE COMUNICAÇÃO POLÍTICA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Aplicativo personalizado, disparos em massa e serviço técnico especializado
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-sm shadow-lg shadow-blue-500/20">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50"></div>
              <span className="text-base font-semibold text-white">Solução Completa</span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 backdrop-blur-sm shadow-lg shadow-emerald-500/20">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-base font-semibold text-white">Tecnologia Moderna</span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm shadow-lg shadow-cyan-500/20">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
              <span className="text-base font-semibold text-white">Suporte Especializado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToObjectives}
          className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-smooth cursor-pointer animate-bounce shadow-lg shadow-blue-500/50"
        >
          <ArrowDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
