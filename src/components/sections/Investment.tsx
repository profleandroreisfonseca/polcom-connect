import { Banknote, Calendar, TrendingUp } from "lucide-react";

const Investment = () => {
  return (
    <section id="investimento" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Investimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estrutura transparente de investimento para implementação completa da solução
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Development Investment */}
          <div className="p-8 rounded-2xl bg-gradient-subtle border border-border shadow-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Banknote className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Desenvolvimento</h3>
                <p className="text-sm text-muted-foreground">Aplicativo Android e iOS</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-2">R$ 18.000,00</div>
              <div className="text-sm text-muted-foreground">Valor único dividido em 3 parcelas</div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">Parcela 1</span>
                  <span className="text-lg font-bold text-primary">R$ 3.000,00</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>No aceite (desenvolvimento do MVP)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">Parcela 2</span>
                  <span className="text-lg font-bold text-primary">R$ 7.500,00</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Após 15 dias do aceite</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">Parcela 3</span>
                  <span className="text-lg font-bold text-primary">R$ 7.500,00</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Após 30 dias do aceite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Services */}
          <div className="p-8 rounded-2xl bg-gradient-subtle border border-border shadow-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Serviços Mensais</h3>
                <p className="text-sm text-muted-foreground">Operação e suporte contínuo</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-accent mb-2">R$ 10.000,00</div>
              <div className="text-sm text-muted-foreground">Por mês</div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-foreground mb-1">Disparo em Massa</div>
                    <div className="text-sm text-muted-foreground">
                      Sistema profissional de envio via WhatsApp
                    </div>
                  </div>
                  <div className="text-xl font-bold text-accent">R$ 3.500</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-foreground mb-1">Serviço Técnico Especializado</div>
                    <div className="text-sm text-muted-foreground">
                      Suporte completo, monitoramento e manutenção
                    </div>
                  </div>
                  <div className="text-xl font-bold text-accent">R$ 6.500</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Cobrança inicia 30 dias após entrega do aplicativo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="p-8 rounded-2xl bg-card shadow-elevated border border-primary/20">
            <h3 className="text-xl font-bold mb-6 text-center text-foreground">Resumo do Investimento</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Investimento Inicial</div>
                <div className="text-2xl font-bold text-foreground">R$ 18.000</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Custo Mensal</div>
                <div className="text-2xl font-bold text-foreground">R$ 10.000</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Prazo de Entrega</div>
                <div className="text-2xl font-bold text-foreground">45 dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
