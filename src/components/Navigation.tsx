
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Activity, 
  Upload, 
  BarChart3, 
  Info, 
  Settings,
  Menu,
  Shield,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/", icon: Home, current: true },
    { name: "Live Monitor", href: "/monitor", icon: Activity, badge: "LIVE" },
    { name: "Upload Audio", href: "/upload", icon: Upload },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "About", href: "/about", icon: Info },
    { name: "Admin", href: "/admin", icon: Settings, badge: "PRO" },
  ];

  const NavItem = ({ item, mobile = false }: { item: typeof navItems[0], mobile?: boolean }) => (
    <motion.a
      href={item.href}
      whileHover={{ scale: 1.05, x: mobile ? 5 : 0 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200
        ${item.current 
          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30' 
          : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
        }
        ${mobile ? 'w-full justify-start' : ''}
      `}
    >
      <item.icon className="h-5 w-5" />
      <span className={mobile ? 'text-base' : 'text-sm font-medium'}>{item.name}</span>
      {item.badge && (
        <Badge className={`
          text-xs px-1.5 py-0.5 
          ${item.badge === 'LIVE' 
            ? 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse' 
            : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
          }
        `}>
          {item.badge}
        </Badge>
      )}
    </motion.a>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 blur opacity-30" />
                <div className="relative p-2 rounded-lg bg-slate-800 border border-cyan-500/30">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">CrimeSound AI</div>
                <div className="text-xs text-gray-400">Detection System</div>
              </div>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavItem item={item} />
                </motion.div>
              ))}
            </div>

            {/* Status Indicator */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-medium">SYSTEM ONLINE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 rounded bg-gradient-to-r from-cyan-400 to-purple-600 blur opacity-30" />
              <div className="relative p-1.5 rounded bg-slate-800 border border-cyan-500/30">
                <Shield className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <span className="text-sm font-bold text-white">CrimeSound AI</span>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-slate-900 border-slate-700">
              <div className="py-6">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 blur opacity-30" />
                      <div className="relative p-2 rounded-lg bg-slate-800 border border-cyan-500/30">
                        <Shield className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">CrimeSound AI</div>
                      <div className="text-xs text-gray-400">Detection System</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 w-fit">
                    <Zap className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400 font-medium">SYSTEM ONLINE</span>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <NavItem item={item} mobile />
                    </motion.div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
