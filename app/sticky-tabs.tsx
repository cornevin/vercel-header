"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropsWithChildren } from "react";
import useScrollPosition from "@react-hook/window-scroll";

export const StickyTabs: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollY = useScrollPosition(60);

  return (
    <Tabs defaultValue="overview">
      <div className="sticky bg-white inset-0 top-0 shadow-sm">
        <div className=" py-2">
          <TabsList
            style={{
              transform: `translateX(${Math.min(scrollY, 50)}px)`,
            }}
          >
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="integrations">Integegrations</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>
      </div>

      <div>
        <TabsContent value="overview">{children}</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </div>
    </Tabs>
  );
};
