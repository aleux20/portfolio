"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

type Skill = {
    name: string;
    level: number;
    proficiency: "Básico" | "Intermedio" | "Avanzado";
};

// Mapeo de habilidades a colores específicos
const skillColors: Record<string, string> = {
    "HTML & CSS": "[&>div]:bg-purple-500",
    JavaScript: "[&>div]:bg-purple-500",
    React: "[&>div]:bg-purple-500",
    "Next.js": "[&>div]:bg-purple-500",
    "Tailwind CSS": "[&>div]:bg-purple-500",
    Git: "[&>div]:bg-purple-500",
};

export default function Skills() {
    const skills: Skill[] = [
        { name: "HTML & CSS", level: 65, proficiency: "Intermedio" },
        { name: "JavaScript", level: 70, proficiency: "Intermedio" },
        { name: "React", level: 50, proficiency: "Básico" },
        { name: "Next.js", level: 45, proficiency: "Básico" },
        { name: "Tailwind CSS", level: 65, proficiency: "Intermedio" },
        { name: "Git", level: 40, proficiency: "Básico" },
    ];

    // Group skills into pairs for grid layout
    const skillPairs = [];
    for (let i = 0; i < skills.length; i += 2) {
        skillPairs.push([skills.slice(i, i + 2)]);
    }

    return (
        <section id="skills" className="py-20 bg-muted/50">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Habilidades Técnicas
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-lg">{skill.name}</h3>
                                        <span className="text-muted-foreground text-sm">
                                            {skill.proficiency}
                                        </span>
                                    </div>
                                    <Progress
                                        value={skill.level}
                                        className={`h-2 ${skillColors[skill.name]}`}
                                    />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
