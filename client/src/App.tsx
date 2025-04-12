import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import LoadingScreen from "@/components/LoadingScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Para asegurar que la animación siempre se muestre cuando refrescamos la página
  // Si deseas que solo se muestre en la primera visita, descomenta el código comentado
  useEffect(() => {
    // Siempre inicia con la animación
    setIsLoading(true);
    
    // Código opcional para solo mostrar la animación en la primera visita de la sesión:
    /*
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
    */
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
