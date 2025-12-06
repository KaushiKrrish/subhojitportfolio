const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
            SM
          </div>
          <span className="text-xl font-semibold text-foreground">Subhojit Mohanty</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
