import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b">
      <h1 className="text-xl font-bold">MyBrand</h1>
      <nav className="space-x-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Contact</Button>
      </nav>
    </header>
  );
}
export default Navbar;