import { Heart, Users, DollarSign, FileText, Home, Baby, Shield, AlertTriangle, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Heart,
    title: "Divórcio e Separação",
    description: "Dissolução do casamento de forma consensual ou litigiosa, com proteção dos seus direitos.",
    items: ["Divórcio consensual", "Divórcio litigioso", "Separação de bens", "Partilha de patrimônio"],
    featured: true,
  },
  {
    id: 2,
    icon: Users,
    title: "Guarda de Filhos",
    description: "Definição da guarda unilateral ou compartilhada sempre no melhor interesse da criança.",
    items: ["Guarda compartilhada", "Guarda unilateral", "Regulamentação de visitas", "Alteração de guarda"],
    featured: true,
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Pensão Alimentícia",
    description: "Fixação, revisão e execução de alimentos para filhos, cônjuges e parentes.",
    items: ["Fixação de alimentos", "Revisão de pensão", "Execução de alimentos", "Alimentos gravídicos"],
    featured: true,
  },
  {
    id: 4,
    icon: FileText,
    title: "Inventário e Partilha",
    description: "Processamento do inventário extrajudicial ou judicial e partilha de bens do espólio.",
    items: ["Inventário extrajudicial", "Inventário judicial", "Partilha amigável", "Arrolamento de bens"],
  },
  {
    id: 5,
    icon: Home,
    title: "União Estável",
    description: "Reconhecimento, dissolução e regularização de direitos decorrentes da união estável.",
    items: ["Reconhecimento judicial", "Dissolução de união", "Contrato de convivência", "Partilha de bens"],
  },
  {
    id: 6,
    icon: Baby,
    title: "Adoção",
    description: "Assessoria jurídica completa em todo o processo de adoção nacional.",
    items: ["Habilitação para adoção", "Processo judicial", "Adoção intuitu personae", "Regularização"],
  },
  {
    id: 7,
    icon: Shield,
    title: "Violência Doméstica",
    description: "Medidas protetivas de urgência e defesa integral das vítimas de violência doméstica.",
    items: ["Medidas protetivas", "Boletim de ocorrência", "Acompanhamento processual", "Orientação jurídica"],
  },
  {
    id: 8,
    icon: AlertTriangle,
    title: "Alienação Parental",
    description: "Identificação e combate à alienação parental para proteção do vínculo afetivo da criança.",
    items: ["Identificação de alienação", "Ação judicial", "Perícia psicossocial", "Proteção da criança"],
  },
];

const MentorsSection = () => {
  return (
    <section id="areas-de-atuacao" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 150% 100% at 50% 0%, hsl(var(--primary) / 0.10) 0%, hsl(var(--accent) / 0.06) 40%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute -right-40 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -left-40 bottom-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center scroll-animate">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.30), 0 0 40px hsl(var(--accent) / 0.20)" }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{ textShadow: "0 0 32px hsl(var(--primary) / 0.20)" }}
            >
              Áreas de Atuação
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atuação especializada em todas as questões do Direito de Família, com comprometimento, ética e dedicação ao seu caso.
          </p>
        </div>

        <div id="servicos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative scroll-animate-fast"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div
                  className={`absolute -inset-2 rounded-3xl blur-2xl transition-all duration-500 group-hover:scale-110 ${service.featured ? 'opacity-60 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary) / 0.18), hsl(var(--accent) / 0.14), hsl(var(--primary) / 0.10))",
                    animation: "glow-pulse 3s ease-in-out infinite",
                  }}
                />
                <div
                  className={`absolute -inset-1 rounded-2xl blur-xl transition-all duration-500 ${service.featured ? 'opacity-50 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-75'}`}
                  style={{ background: "linear-gradient(to top, hsl(var(--primary) / 0.10), transparent, hsl(var(--accent) / 0.10))" }}
                />

                <div
                  className={`relative h-full p-8 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 group-hover:bg-background/90 ${service.featured ? 'border-2 border-primary/50' : 'border border-primary/20 bg-card/90'} group-hover:border-primary/70`}
                  style={{
                    background: service.featured
                      ? "linear-gradient(135deg, hsl(var(--primary) / 0.10), hsl(var(--accent) / 0.06))"
                      : "hsl(var(--card) / 0.9)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.10) 25%, transparent 50%, hsl(var(--accent) / 0.08) 75%, transparent 100%)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-5 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300 relative"
                      style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.18), inset 0 0 20px hsl(var(--primary) / 0.10)" }}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                      <Icon className="w-7 h-7 text-primary relative z-10 group-hover:drop-shadow-lg transition-all" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 group-hover:text-foreground/80 transition-colors">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors flex items-start">
                          <span className="text-primary mr-3 font-bold group-hover:text-accent transition-colors">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => window.open('https://wa.me/5587991098958?text=Olá! Gostaria de saber mais sobre ' + service.title, '_blank')}
                      className="w-full py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      Saiba mais
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: "0 0 16px hsl(var(--primary) / 0.35)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: blur(20px); opacity: 0; }
          50% { filter: blur(30px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default MentorsSection;
