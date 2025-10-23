const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Alex Rivera. Built with React & Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
