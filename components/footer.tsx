export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t py-6 md:py-8">
            <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
                <p className="text-sm text-muted-foreground">
                    © {year} Portfolio Personal. Todos los derechos reservados.
                </p>
                <p className="text-sm text-muted-foreground">
                    Desarrollado con Next.js y Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
