"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

const projects: Project[] = [
    {
        title: "Portfolio Personal",
        description: "Mi primer proyecto con React y Tailwind CSS.",
        technologies: ["React", "Tailwind CSS", "shadcn/ui"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        title: "Todo App",
        description: "Aplicación de tareas con almacenamiento local.",
        technologies: ["JavaScript", "HTML", "CSS"],
        demoUrl: "#",
        codeUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Proyectos
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-muted-foreground">{project.description}</p>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="bg-muted">
                                            {tech}
                                        </Badge>
                                    ))}
                                </CardContent>
                                <CardFooter className="mt-auto pt-4">
                                    <div className="flex gap-3">
                                        <Button variant="outline" size="sm" asChild>
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex gap-1 items-center"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Demo
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="sm" asChild>
                                            <a
                                                href={project.codeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex gap-1 items-center"
                                            >
                                                <Code className="h-4 w-4" />
                                                Código
                                            </a>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
