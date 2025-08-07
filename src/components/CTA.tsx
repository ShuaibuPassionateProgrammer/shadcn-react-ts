import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 text-center bg-primary text-primary-foreground">
      <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
      <p className="mb-6">Join hundreds of developers building beautiful UIs faster.</p>
      <Button variant="secondary" size="lg">Sign Up Now</Button>
    </section>
  );
};

export default CTA;