import { LayoutSideContent, Bell, Envelope, Gear, House, Magnifier, Person, Xmark } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          type="button"
        >
          <item.icon className="size-5 shrink-0" />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-zinc-950 p-4 lg:block">
        {navContent}
      </aside>

      {/* Mobile trigger + drawer */}
      <div className="lg:hidden">
        <Drawer>
          <Button
            variant="bordered"
            className="fixed left-4 top-4 z-50 gap-2 rounded-lg border-white/10 bg-zinc-950 text-zinc-300"
          >
            <LayoutSideContent className="size-5" />
            Menu
          </Button>

          <Drawer.Backdrop className="bg-black/60">
            <Drawer.Content placement="left" className="w-72 max-w-[80%]">
              <Drawer.Dialog className="flex h-full flex-col bg-zinc-950">
                <Drawer.Header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <Drawer.Heading className="text-base font-semibold text-white">
                    Navigation
                  </Drawer.Heading>
                  <Drawer.CloseTrigger className="text-zinc-400 hover:text-white">
                    <Xmark className="size-5" />
                  </Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body className="p-4">{navContent}</Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}