import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { open } = useSidebar();

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;
  const label = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton tooltip="Theme">
          <Icon className="size-4" />
          {open && <span>{label}</span>}
        </SidebarMenuButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="right" align="end" sideOffset={8}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="size-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="size-4 mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="size-4 mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
