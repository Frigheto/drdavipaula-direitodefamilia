import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactCard = ({ icon: Icon, title, value, link, isEmail = false }: {
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
  isEmail?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isEmail) {
      window.location.href = `mailto:${value}`;
    } else if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative p-6 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--accent) / 0.06) 100%)",
        border: "1px solid hsl(var(--primary) / 0.25)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      <div
        className="absolute -inset-1 rounded-2xl blur-xl"
        style={{
          background: "linear-gradient(to bottom right, hsl(var(--primary) / 0.28), hsl(var(--accent) / 0.20), hsl(var(--primary) / 0.15))",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 500ms ease-in-out",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08))",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to top, hsl(var(--primary) / 0.10), transparent)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            style={{
              boxShadow: isHovered
                ? "0 0 20px hsl(var(--primary) / 0.40), inset 0 0 15px hsl(var(--primary) / 0.18)"
                : "0 0 10px hsl(var(--primary) / 0.15)",
              transition: "all 300ms ease-in-out",
            }}
          >
            <Icon
              className="w-5 h-5 text-white transition-all duration-300"
              style={{ transform: isHovered ? "scale(1.2)" : "scale(1)" }}
            />
          </div>
          <h3
            className="font-semibold transition-colors duration-300"
            style={{ color: isHovered ? "hsl(var(--primary))" : "inherit" }}
          >
            {title}
          </h3>
        </div>
        <p className="font-semibold text-muted-foreground">{value}</p>
        {title === "Localização" && (
          <p className="text-xs mt-2 text-muted-foreground opacity-80">
            Rua Coronel Amorim, Galeria Romana, nº. 225, 1º Andar, sala nº 11<br />Centro, Petrolina – PE. CEP: 56302-320
          </p>
        )}
      </div>
    </div>
  );
};

const FinalSection = () => {
  return (
    <section id="contato" className="relative py-20 px-6 md:px-12 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Entre em contato para agendar uma consulta. Vamos analisar seu caso com atenção e oferecer a melhor solução jurídica para sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold flex items-center gap-2"
              onClick={() => window.open('https://wa.me/5587991098958?text=Olá! Gostaria de marcar uma consulta.', '_blank')}
            >
              <Send className="w-5 h-5" />
              Marcar Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold"
              onClick={() => window.open('https://wa.me/5587991098958?text=Olá! Gostaria de tirar uma dúvida.', '_blank')}
            >
              Enviar Mensagem
            </Button>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard
            icon={Phone}
            title="WhatsApp"
            value="(87) 9 9109-8958"
            link="https://wa.me/5587991098958"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value="davimarcula.adv@gmail.com"
            link="mailto:davimarcula.adv@gmail.com"
            isEmail={true}
          />
          <ContactCard
            icon={MapPin}
            title="Localização"
            value="Petrolina/PE"
            link="https://maps.google.com/?q=Rua+Coronel+Amorim,+Galeria+Romana,+225,+Centro,+Petrolina,+PE,+56302-320"
          />
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sobre o Escritório</h4>
              <p className="text-sm text-muted-foreground">
                Advocacia especializada em Direito de Família e Sucessões, com atuação humanizada e comprometida com os seus direitos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                {["Início", "Sobre", "Áreas de Atuação", "Contato"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Instagram", url: "https://www.instagram.com/davimarcula.adv/" },
                ].map((social) => (
                  <li key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>© 2026 Dr. Davi Marcula — Advocacia e Consultoria Jurídica. Todos os direitos reservados.</p>
            <p className="mt-2">OAB registrado · Direito de Família e Sucessões</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
