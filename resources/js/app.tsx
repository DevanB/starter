import { createInertiaApp } from "@inertiajs/react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { initializeTheme } from "@/hooks/use-appearance";
import AppLayout from "@/layouts/app-layout";
import AuthLayout from "@/layouts/auth-layout";
import SettingsLayout from "@/layouts/settings/layout";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  layout: (name) => {
    switch (true) {
      case name === "welcome": {
        return null;
      }
      case name.startsWith("auth/"): {
        return AuthLayout;
      }
      case name.startsWith("settings/"):
      case name.startsWith("teams/"): {
        return [AppLayout, SettingsLayout];
      }
      default: {
        return AppLayout;
      }
    }
  },
  progress: {
    color: "#4B5563",
  },
  strictMode: true,
  title: (title) => (title ? `${title} - ${appName}` : appName),
  withApp(app) {
    return <TooltipProvider delayDuration={0}>{app}</TooltipProvider>;
  },
});

// This will set light / dark mode on load...
initializeTheme();
