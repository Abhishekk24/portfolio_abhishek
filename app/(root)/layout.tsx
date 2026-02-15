import { routesConfig } from "@/config/routes";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { ModeToggle } from "@/components/mode-toggle";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="container flex h-16 md:h-20 items-center justify-between">
                    <MainNav items={routesConfig.mainNav} />
                    <nav className="flex items-center gap-4">
                        <ModeToggle />
                    </nav>
                </div>
            </header>
            <main className="flex-1 pt-16 md:pt-20">{children}</main>
            <SiteFooter />
        </div>
    );
}
