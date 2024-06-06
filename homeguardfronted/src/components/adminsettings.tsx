import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Label } from "@/components/ui/label"
 
import {
  ArrowUpRight,
  CircleUser,
  Car,
  Menu,
  Package2,
  OctagonPause,
  Sofa,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export const Adminsettings: React.FC = () => {
  const navigate = useNavigate();

  const settings= () => {
    navigate('/adminsettings');
  };
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link to="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link to="/admindashboard" className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link to="/adminentradas" className="text-muted-foreground transition-colors hover:text-foreground">
              Entradas
            </Link>
            <Link to="/adminresidencias" className="text-muted-foreground transition-colors hover:text-foreground">
              Residencias
            </Link>
            <Link to="/adminvigilantes" className="text-muted-foreground transition-colors hover:text-foreground">
              Vigilantes
            </Link>
            <Link to="/adminvigilantes" className="text-muted-foreground transition-colors hover:text-foreground">
              Terminales
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link to="#" className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link to="/admindashboard" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link to="/adminentradas" className="text-muted-foreground hover:text-foreground">
                  Entradas
                </Link>
                <Link to="/adminresidencias" className="text-muted-foreground hover:text-foreground">
                  Residencias
                </Link>
                <Link to="/adminvigilantes" className="text-muted-foreground hover:text-foreground">
                  Vigilantes
                </Link>
                <Link to="/adminvigilantes" className="text-muted-foreground hover:text-foreground">
                  Terminales
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <div className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Label className="text-l text-muted-foreground">Colonia HLVS  </Label>
                <Label className="text-2xl font-bold">  HomeGuard</Label>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={settings}>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto max-w-lg">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                    <CardTitle>Ajustes de Usuario</CardTitle>
                    <CardDescription>
                    Así es como te verán los demás en el sitio.
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <form>
                    <div className="grid gap-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="first-name">Nombre de usuario</Label>
                        <Input id="first-name" placeholder="Max" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        />
                    </div>
                    </div>
                    </form>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
      </div>
    );
  };
  
  export default Adminsettings;

  