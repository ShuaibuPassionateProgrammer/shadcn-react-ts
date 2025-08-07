import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-sm border-t text-muted-foreground">
      &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
    </footer>
  );
}

export default Footer;