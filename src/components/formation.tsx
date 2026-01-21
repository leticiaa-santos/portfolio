"use client"

import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

import {
  GraduationCap,
  Laptop,
  MonitorSmartphone,
  ChevronDown,
} from "lucide-react"
import { Badge } from "./ui/badge"

const iconMap = {
  graduation: GraduationCap,
  technical: Laptop,
  technicalschool: MonitorSmartphone,
} as const

type FormationType = keyof typeof iconMap

type FormationDetails = {
  activities: string[]
  technologies: string[]
  projects?: string[]
}

type FormationItem = {
  type: FormationType
  formation: string
  status: string
  time: string
  certification: string
  instituition: string
  details: FormationDetails
}

export function Formation() {
  const [openRow, setOpenRow] = useState<number | null>(null)

  const formations: FormationItem[] = [
    {
      type: "graduation",
      formation: "Graduação em Tecnologia da Informação",
      status: "Em andamento",
      time: "2024 - 2027",
      certification: "Bacharelado",
      instituition: "UNIVESP",
      details: {
        activities: [
          "Criação de aplicações web do zero.",
          "Desenvolvimento de APIs REST.",
          "Criação de algoritmos e programas orientados a objetos"
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Python",
          "Java",
          "C",
          "Git",
          "GitHub"
        ],
      }
    },
    {
      type: "technical",
      formation: "Curso Técnico em Desenvolvimento de Sistemas",
      status: "Concluído",
      time: "2024 - 2025",
      certification: "Curso técnico",
      instituition: "SENAI",
      details: {
        activities: [
          "Criação de aplicações web do zero.",
          "Desenvolvimento de APIs REST.",
          "Versionamento e trabalho colaborativo.",
          "Criação de banco de dados usando MySQL",
          "Aprendizado básico sobre IoT",
          "Criação de aplicações mobile",
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Python",
          "SQL",
          "React",
          "C++",
          "Flutter",
          "Git",
          "GitHub",
        ],
        projects: [
          "Sistema de cadastro de usuários.",
          "Projetos integrando front-end, back-end com IoT.",
          "Maquete simulando cidade inteligente aplicando IoT",
          "Criação de aplicativos mobile",
        ]
      }
    },
    {
      type: "technicalschool",
      formation: "Técnico em Desenvolvimento de Sistemas",
      status: "Concluído",
      time: "2021 - 2023",
      certification: "Curso técnico",
      instituition: "ETEC",
      details: {
        activities: [
          "Criação de aplicações web do zero.",
          "Criação de banco de dados",
          "Criação de aplicações mobile",
          "Utilização do sistema operacional Linux",
          "Versionamento e trabalho colaborativo.",
          "Curso adicional de IoT"
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "SQL",
          "C#",
          "C++",
          "React Native",
          "Git",
          "GitHub",
        ],
        projects: [
          "Sistema de gerenciamento para o grêmio escolar",
        ]
      }
    },
  ]

  return (
    <div id="formation" className="px-4">
      <p className="text-center mt-20 font-bold text-6xl mb-20">
        Formation
      </p>

      <div className="max-w-5xl mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]" />
              <TableHead>Formação</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Período</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Instituição</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {formations.map((formation, index) => {
              const Icon = iconMap[formation.type]
              const isOpen = openRow === index

              return (
                <>
                  {/* Linha principal */}
                  <TableRow
                    key={index}
                    className="hover:bg-muted/50 cursor-pointer"
                    onClick={() =>
                      setOpenRow(isOpen ? null : index)
                    }
                  >
                    <TableCell className="text-center">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </TableCell>

                    <TableCell className="font-medium">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center p-2 rounded-md bg-muted">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        {formation.formation}
                      </div>
                    </TableCell>

                    <TableCell>{formation.status}</TableCell>
                    <TableCell>{formation.time}</TableCell>
                    <TableCell>{formation.certification}</TableCell>
                    <TableCell>{formation.instituition}</TableCell>
                  </TableRow>

                  {/* Linha expandida */}
                  {isOpen && (
                    <TableRow>
                      <TableCell colSpan={6} className="p-0">
                        <div className="p-6 bg-muted/30 space-y-6 text-sm">

                          {/* Atividades */}
                          <section>
                            <h4 className="font-semibold mb-2">Atividades</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {formation.details.activities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </section>

                          {/* Tecnologias */}
                          <section>
                            <h4 className="font-semibold mb-2">Tecnologias</h4>
                            <div className="flex flex-wrap gap-2">
                              {formation.details.technologies.map((tech, i) => (
                                <Badge variant="outline" key={i}>
                                  <span>
                                    {tech}
                                  </span>
                                </Badge>
                                
                              ))}
                            </div>
                          </section>

                          {/* Projetos (opcional) */}
                          {formation.details.projects && (
                            <section>
                              <h4 className="font-semibold mb-2">Projetos</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {formation.details.projects.map((project, i) => (
                                  <li key={i}>{project}</li>
                                ))}
                              </ul>
                            </section>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
