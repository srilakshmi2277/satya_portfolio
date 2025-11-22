const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Satyanarayana Rudra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
