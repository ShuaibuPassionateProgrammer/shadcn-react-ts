import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 text-center bg-primary text-primary-foreground">
      <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
      <p className="mb-6">Join hundreds of developers building beautiful UIs faster.</p>
      <Button asChild variant="secondary" size="lg">
        <Link to="/signup">Sign Up Now</Link>
      </Button>
    </section>
  );
};

export default CTA;