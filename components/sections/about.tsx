"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Sobre Mí
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="max-w-3xl mx-auto shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <p className="text-lg mb-6">
                                Soy un desarrollador web junior entusiasta con un fuerte deseo
                                de aprender y crecer en el mundo del desarrollo web. Mi
                                fascinación por la tecnología y la programación me ha llevado a
                                especializarme en el desarrollo frontend con React y Next.js.
                            </p>
                            <p className="text-lg">
                                Aunque estoy comenzando mi carrera profesional, mi compromiso
                                con el aprendizaje continuo y mi pasión por crear interfaces de
                                usuario intuitivas me impulsan a mejorar constantemente mis
                                habilidades.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
