
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <div className="text-2xl font-bold">
          {/* Placeholder for logo */}
          <span className="font-black tracking-tighter">FAFAFEST</span>
        </div>
        <Button variant="default" className="bg-black hover:bg-gray-800 text-white">
          <Ticket className="mr-2 h-4 w-4" /> Buy Tickets
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
