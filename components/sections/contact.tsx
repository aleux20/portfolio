"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { LiaLinkedin } from "react-icons/lia";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/50">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Contacto
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="max-w-2xl mx-auto shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">¡Hablemos!</CardTitle>
                            <CardDescription>
                                Estoy interesado en oportunidades de desarrollo frontend. Si
                                tienes alguna pregunta o quieres colaborar, no dudes en
                                contactarme.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button variant="outline" className="gap-2" asChild>
                                    <a href="hansalejandroca@gmail.com">
                                        <Mail className="h-4 w-4" />
                                        Email
                                    </a>
                                </Button>

                                <Button variant="outline" className="gap-2" asChild>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiGithub className="h-4 w-4" />
                                        GitHub
                                    </a>
                                </Button>

                                <Button variant="outline" className="gap-2" asChild>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LiaLinkedin className="h-4 w-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
