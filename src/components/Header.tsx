import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = ["Início", "Áreas de Atuação", "Sobre"];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav
        className="card-glass px-6 py-3 flex items-center justify-between"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.18), hsl(var(--accent) / 0.14))",
          boxShadow: "0 12px 30px hsl(var(--foreground) / 0.08), inset 0 1px 0 hsl(var(--primary) / 0.25)",
          borderColor: "hsl(var(--border))",
          backdropFilter: "blur(16px)",
          border: "1px solid hsl(var(--primary) / 0.2)",
          borderRadius: "9999px",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-white"
            style={{
              boxShadow: "0 0 20px hsl(var(--primary) / 0.35)",
            }}
          >
            <img
              src="/images/logo-davi.png"
              alt="Logo Davi Marcula"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-0">
            <span className="text-xs font-medium text-muted-foreground">Dr. Davi Marcula</span>
            <span className="font-heading text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Advocacia
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <Button
          variant="outline"
          className="bg-transparent border-primary/50 hover:bg-primary/10 text-foreground rounded-full px-6"
          onClick={() => window.open('https://wa.me/5587991098958?text=Olá! Gostaria de analisar meu caso.', '_blank')}
        >
          Fale Conosco
        </Button>
      </nav>
    </header>
  );
};

export default Header;
