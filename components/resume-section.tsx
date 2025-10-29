"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Brain, Code, Cloud, Settings } from "lucide-react"
import Link from "next/link"

export function ResumeSection() {
  const [activeResume, setActiveResume] = useState("sde")

  const resumeTypes = [
    {
      id: "sde",
      title: "Backend Developer",
      subtitle: "Spring Boot & Microservices",
      description:
        "Comprehensive resume highlighting backend development skills, Spring Boot expertise, microservices architecture, and cloud technologies.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["Spring Boot", "Java", "Microservices", "REST APIs", "PostgreSQL", "AWS"],
      downloadUrl: "/resumes/devanshu-backend-resume.pdf",
      highlights: [
        "Spring Boot Development",
        "Microservices Architecture",
        "Database Design & Management",
        "API Development & Integration",
      ],
    },
    {
      id: "devops",
      title: "Cloud Engineer",
      subtitle: "AWS & Infrastructure",
      description:
        "Cloud-focused resume emphasizing AWS expertise, infrastructure automation, containerization, and DevOps practices.",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      skills: ["AWS", "Docker", "Terraform", "Kubernetes", "CI/CD", "Spring Cloud"],
      downloadUrl: "/resumes/devanshu-cloud-resume.pdf",
      highlights: [
        "AWS Infrastructure",
        "Container Orchestration",
        "Infrastructure as Code",
        "Microservices Deployment",
      ],
    },
    {
      id: "aiml",
      title: "AI Backend Engineer",
      subtitle: "Spring AI & LLM Integration",
      description:
        "Specialized resume focusing on AI/ML integration with Spring AI, LLM implementations, and intelligent backend systems.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: ["Spring AI", "ChatModel", "Embeddings", "RAG", "VectorDB", "LLM"],
      downloadUrl: "/resumes/devanshu-ai-resume.pdf",
      highlights: ["Spring AI Integration", "LLM Implementation", "RAG Modules", "AI-Powered Backends"],
    },
    {
      id: "cloud",
      title: "Full Stack Developer",
      subtitle: "Java & React",
      description:
        "Full-stack specialized resume showcasing Java backend expertise combined with React frontend skills and cloud deployment.",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["Java", "Spring Boot", "React", "Tailwind CSS", "AWS", "Docker"],
      downloadUrl: "/resumes/devanshu-fullstack-resume.pdf",
      highlights: ["Full Stack Development", "Spring Boot Backend", "React Frontend", "Cloud Deployment"],
    },
  ]

  const currentResume = resumeTypes.find((resume) => resume.id === activeResume) || resumeTypes[0]

  return (
    <section id="resume" className="py-20 px-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Specialized Resumes
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tailored resumes for different roles and specializations, highlighting relevant skills and experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Type Selector */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Choose Resume Type</h3>
              {resumeTypes.map((resume, index) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start p-4 rounded-xl transition-all duration-300 ${
                      activeResume === resume.id
                        ? `bg-gradient-to-r ${resume.color} text-white shadow-lg`
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setActiveResume(resume.id)}
                  >
                    <resume.icon className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">{resume.title}</div>
                      <div className="text-xs opacity-80">{resume.subtitle}</div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeResume}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-card border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    {/* Resume Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${currentResume.color} rounded-2xl`}>
                          <currentResume.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{currentResume.title}</h3>
                          <p className="text-blue-400">{currentResume.subtitle}</p>
                        </div>
                      </div>
                      <Button
                        className={`bg-gradient-to-r ${currentResume.color} hover:opacity-90 rounded-xl shadow-lg`}
                        asChild
                      >
                        <Link href={currentResume.downloadUrl} target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{currentResume.description}</p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {currentResume.highlights.map((highlight, index) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-3 glass rounded-xl p-3"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${currentResume.color} rounded-full`} />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Featured Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentResume.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${currentResume.color} text-white border-0`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Resume Preview */}
                    <div className="mt-8 p-4 glass rounded-xl">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-400 text-sm">Resume Preview</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-6 border border-white/10 max-h-96 overflow-y-auto">
                        {/* Resume Content Based on Selected Type */}
                        {activeResume === "devops" && (
                          <div className="space-y-4 text-sm">
                            <div className="text-center border-b border-white/10 pb-4">
                              <h1 className="text-lg font-bold text-white">Devanshu Chatterjee</h1>
                              <p className="text-gray-300">devanshuchatterjee1@gmail.com • +91 7880241669</p>
                              <p className="text-gray-400">LinkedIn • GitHub • HackerRank</p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Summary</h2>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                AI Backend Developer with strong foundation in Spring Boot, AWS, microservices, and
                                cloud infrastructure. Experienced in building scalable backend systems and deploying
                                cloud-native applications.
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Technical Skills</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>
                                  <span className="text-blue-400">Languages:</span> Java, JavaScript, C++, SQL
                                </p>
                                <p>
                                  <span className="text-blue-400">Backend:</span> Spring Boot, Spring Data JPA, Spring
                                  Security, Spring Cloud
                                </p>
                                <p>
                                  <span className="text-blue-400">Cloud:</span> AWS (EC2, S3, RDS, DynamoDB), Docker,
                                  Kubernetes
                                </p>
                                <p>
                                  <span className="text-blue-400">Databases:</span> Oracle Database, JDBC, Hibernate,
                                  SQL
                                </p>
                                <p>
                                  <span className="text-blue-400">AI Framework:</span> Spring AI, ChatModel, Embeddings,
                                  RAG
                                </p>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Key Projects</h2>
                              <div className="space-y-2 text-xs">
                                <div>
                                  <h3 className="font-medium text-gray-200">GroupSync - Music Player Application</h3>
                                  <p className="text-gray-400">
                                    React-based music player with real-time collaboration using WebSocket and Spring
                                    Boot
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-200">
                                    LinkLogic - Collaborative Coding Platform
                                  </h3>
                                  <p className="text-gray-400">
                                    Real-time collaborative coding platform with syntax highlighting and version history
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Certifications</h2>
                              <p className="text-xs text-gray-300">
                                AWS Cloud Practitioner • Azure AI Fundamentals • Wipro TalentNext • GitHub Foundations
                              </p>
                            </div>
                          </div>
                        )}

                        {activeResume === "sde" && (
                          <div className="space-y-4 text-sm">
                            <div className="text-center border-b border-white/10 pb-4">
                              <h1 className="text-lg font-bold text-white">Devanshu Chatterjee</h1>
                              <p className="text-gray-300">devanshuchatterjee1@gmail.com • +91 7880241669</p>
                              <p className="text-gray-400">LinkedIn • GitHub • HackerRank</p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Summary</h2>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                Computer Science graduate specializing in backend development with Spring Boot and
                                microservices. Proven expertise in building scalable systems and cloud-native
                                applications.
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Technical Skills</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>
                                  <span className="text-blue-400">Languages:</span> Java, JavaScript, C++, SQL
                                </p>
                                <p>
                                  <span className="text-blue-400">Backend:</span> Spring Boot, Spring Data JPA, Spring
                                  Security, WebSocket
                                </p>
                                <p>
                                  <span className="text-blue-400">Frontend:</span> ReactJS, Tailwind CSS, HTML/CSS
                                </p>
                                <p>
                                  <span className="text-blue-400">Databases:</span> Oracle Database, JDBC, Hibernate,
                                  SQL
                                </p>
                                <p>
                                  <span className="text-blue-400">Cloud & DevOps:</span> AWS, Docker, Terraform, GitHub
                                </p>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Key Projects</h2>
                              <div className="space-y-2 text-xs">
                                <div>
                                  <h3 className="font-medium text-gray-200">GroupSync - Music Player Application</h3>
                                  <p className="text-gray-400">
                                    React-based music player with real-time room management and WebSocket integration
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-200">
                                    LinkLogic - Collaborative Coding Platform
                                  </h3>
                                  <p className="text-gray-400">
                                    Real-time collaborative coding with syntax highlighting, execution, and version
                                    history
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Education</h2>
                              <p className="text-xs text-gray-300">
                                B.Tech, Computer Science and Business System - GGITS, Jabalpur (CGPA: 8.3/10)
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Achievements</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>• TCS CodeVita Season-11: Global Rank 1502 (Top 1%)</p>
                                <p>• TCS HackQuest Season-9: Cleared National-Level Cybersecurity Challenge</p>
                                <p>
                                  • National Innovation Fest-3.0: 3rd Position with AI-based Legal Document Platform
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {(activeResume === "aiml" || activeResume === "cloud") && (
                          <div className="space-y-4 text-sm">
                            <div className="text-center border-b border-white/10 pb-4">
                              <h1 className="text-lg font-bold text-white">Devanshu Chatterjee</h1>
                              <p className="text-gray-300">devanshuchatterjee1@gmail.com • +91 7880241669</p>
                              <p className="text-gray-400">LinkedIn • GitHub • HackerRank</p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Summary</h2>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                {activeResume === "aiml"
                                  ? "AI Backend Engineer with expertise in Spring AI, LLM integration, and intelligent backend systems. Experience in building AI-powered applications and RAG modules."
                                  : "Cloud Engineer specializing in AWS architecture, microservices deployment, and infrastructure automation. Expert in containerization and cloud-native solutions."}
                              </p>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Technical Skills</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                {activeResume === "aiml" ? (
                                  <>
                                    <p>
                                      <span className="text-blue-400">Languages:</span> Java, JavaScript, Python, SQL
                                    </p>
                                    <p>
                                      <span className="text-blue-400">AI Framework:</span> Spring AI, ChatModel,
                                      Embeddings, RAG, VectorDB
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Backend:</span> Spring Boot, Microservices, REST
                                      APIs
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Cloud:</span> AWS, Docker, Kubernetes
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p>
                                      <span className="text-blue-400">Cloud Platforms:</span> AWS (EC2, S3, RDS,
                                      DynamoDB)
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Infrastructure:</span> Docker, Kubernetes,
                                      Terraform
                                    </p>
                                    <p>
                                      <span className="text-blue-400">Backend:</span> Spring Boot, Spring Cloud,
                                      Microservices
                                    </p>
                                    <p>
                                      <span className="text-blue-400">DevOps:</span> GitHub, CI/CD, Infrastructure as
                                      Code
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Key Achievements</h2>
                              <div className="text-xs text-gray-300 space-y-1">
                                <p>• TCS CodeVita Global Rank 1502 out of 136,000+ participants</p>
                                <p>• National Innovation Fest 3rd Position - AI Legal Document Platform</p>
                                <p>• AWS Cloud Practitioner Certified</p>
                              </div>
                            </div>

                            <div>
                              <h2 className="font-semibold text-white mb-2">Certifications</h2>
                              <p className="text-xs text-gray-300">
                                {activeResume === "aiml"
                                  ? "Azure AI Fundamentals • AWS Cloud Practitioner • Wipro TalentNext • GitHub Foundations"
                                  : "AWS Cloud Practitioner • Azure AI Fundamentals • Wipro TalentNext • GitHub Foundations"}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
