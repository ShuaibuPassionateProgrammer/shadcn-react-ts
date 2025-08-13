import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Welcome to MyBrand</h2>
      <p className="text-lg mb-6 text-muted-foreground">Build beautiful apps effortlessly with ShadCN + React + TS.</p>
      <Button size="lg" asChild>
        <Link to={"#"}>Get Started</Link>
      </Button>
    </section>
  );
};

export default Hero;