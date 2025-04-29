"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-20 md:py-28 flex flex-col items-center justify-center text-center">
            <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 pb-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Desarrollador Web Junior
            </motion.h1>

            <motion.p
                className="text-muted-foreground max-w-[600px] mx-auto text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Apasionado por crear experiencias web modernas y aprender nuevas
                tecnologías
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Button asChild className="group" size="lg">
                    <a href="#projects">
                        Ver Proyectos
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>

                <Button variant="outline" size="lg">
                    <a href="#contact">Contactar</a>
                </Button>
            </motion.div>
        </section>
    );
}
