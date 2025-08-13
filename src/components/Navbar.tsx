import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-6 border-b">
            <h1 className="text-xl font-bold">Passionate Programmer</h1>
            <nav className="space-x-4">
                <Button variant="ghost" asChild>
                    <Link to={"/"}>Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link to={"/features"}>Features</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link to={"/cta"}>Contact</Link>
                </Button>
            </nav>
        </header>
    );
};

export default Navbar;