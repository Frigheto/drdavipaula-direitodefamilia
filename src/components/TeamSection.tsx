import { Heart, Scale, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada caso é tratado com empatia e atenção individual, reconhecendo que por trás de cada processo existe uma família.",
  },
  {
    icon: Scale,
    title: "Expertise Jurídica",
    description: "Especialização dedicada ao Direito de Família garante profundo conhecimento técnico para defender seus interesses.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Clara",
    description: "Você será informado sobre cada etapa do seu processo, sem juridiquês, de forma direta e transparente.",
  },
  {
    icon: Star,
    title: "Compromisso com Resultados",
    description: "Atuação estratégica e comprometida com o melhor desfecho possível para você e sua família.",
  },
];

const TeamSection = () => {
  return (
    <section id="sobre" className="relative py-20 px-6 md:px-12 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Por que nos escolher?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um escritório que une técnica jurídica com sensibilidade humana para cuidar do que mais importa: sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-primary/20 bg-card/80 hover:border-primary/50 transition-all duration-300 hover:bg-card"
                style={{ background: "linear-gradient(135deg, hsl(var(--card)), hsl(var(--primary) / 0.04))" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center flex-shrink-0 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300"
                    style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.15)" }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg transition-all duration-300"
            style={{ boxShadow: "0 0 22px hsl(var(--primary) / 0.35)" }}
            onClick={() => window.open('https://wa.me/5587991098958?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
          >
            Agendar Consulta
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
