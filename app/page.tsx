"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Star,
  User,
  Zap,
  Brain,
  Globe,
  Github,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function RiteshPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-indigo-500/20 bg-black/30 backdrop-blur-lg supports-[backdrop-filter]:bg-black/30">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <button
              onClick={() => scrollToSection("hero")}
              className="mr-6 flex items-center space-x-2 text-indigo-300 hover:text-indigo-400 transition-colors"
            >
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Ritesh Kakade
              </span>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <nav className="flex items-center space-x-6">
              {["about", "experience", "projects", "skills", "certifications", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section ? "text-emerald-400" : "text-indigo-300/70 hover:text-indigo-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative container px-4 py-20 md:py-28 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-full animate-particle opacity-20`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`flex flex-col items-center text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative animate-float">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center animate-glow">
              <div className="w-[90px] h-[90px] rounded-full bg-indigo-900 flex items-center justify-center">
                <User className="h-12 w-12 text-emerald-400 animate-pulse-slow" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-wave">
              <span className="text-xs">👋</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl text-indigo-100 font-display animate-fade-in">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-400 bg-clip-text text-transparent animate-gradient font-bold">
                Ritesh Kakade
              </span>
            </h1>
            <div className="mx-auto max-w-[700px] space-y-2 animate-slide-up animation-delay-1000">
              <p className="text-lg text-emerald-300 font-semibold animate-shimmer bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300 bg-clip-text">
                Computer Engineer & AI Coding Expert
              </p>
              <p className="text-base text-indigo-200/80">
                Aspiring computer engineer with expertise in web development, AI/ML, and sign language interpretation.
                Passionate about creating innovative solutions and contributing to cutting-edge projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in animation-delay-2000">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-indigo-100 border-0 transform hover:scale-105 transition-all duration-200 animate-glow"
              onClick={() => scrollToSection("projects")}
            >
              <Star className="mr-2 h-4 w-4 animate-spin-slow" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/20 hover:text-emerald-300 transform hover:scale-105 transition-all duration-200 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4 animate-bounce-slow" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in animation-delay-3000">
            <Button
              variant="ghost"
              size="icon"
              className="text-indigo-300 hover:text-emerald-400 hover:bg-indigo-500/10 transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/ritesh-kakade-6b8514366"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 animate-pulse-slow" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-indigo-300 hover:text-emerald-400 hover:bg-indigo-500/10 transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="mailto:riteshkakade275@gmail.com">
                <Mail className="h-5 w-5 animate-bounce-slow" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-indigo-300 hover:text-emerald-400 hover:bg-indigo-500/10 transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="tel:+919175357169">
                <Phone className="h-5 w-5 animate-pulse-slow animation-delay-1000" />
                <span className="sr-only">Phone</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-indigo-300 hover:text-emerald-400 hover:bg-indigo-500/10 transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="https://github.com/riteshkakade" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 animate-pulse-slow animation-delay-2000" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative container px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-indigo-100">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <Card className="bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-amber-400">
                  <GraduationCap className="h-5 w-5" />
                  <span>Bachelor of Computer Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-indigo-400">
                  <Calendar className="h-5 w-5" />
                  <span>Savitribai Phule Pune University (2021-2024)</span>
                </div>
                <div className="mt-3 text-indigo-200/90 border-l-2 border-indigo-500/30 pl-3">
                  <p>Gained strong foundational knowledge in software development, algorithms, and system design.</p>
                  <p>Specialized in AI/ML applications and web development technologies.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 border-indigo-500/20 backdrop-blur-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-indigo-100 mb-4">Special Skills</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                        <Globe className="h-5 w-5 text-slate-900" />
                      </div>
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <span className="text-emerald-300 font-medium group-hover:text-emerald-200 transition-colors">
                      Sign Language Interpreter (ASL)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse animation-delay-1000">
                        <Brain className="h-5 w-5 text-slate-900" />
                      </div>
                      <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
                    </div>
                    <span className="text-amber-300 font-medium group-hover:text-amber-200 transition-colors">
                      AI & Machine Learning Expert
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse animation-delay-2000">
                        <Zap className="h-5 w-5 text-slate-900" />
                      </div>
                      <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20 animation-delay-2000"></div>
                    </div>
                    <span className="text-indigo-300 font-medium group-hover:text-indigo-200 transition-colors">
                      Full-Stack Web Developer
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative container px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-indigo-100">Work Experience</h2>
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-indigo-500/10 to-transparent border-l-4 border-indigo-500 backdrop-blur-lg hover:bg-indigo-800/20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10">
              <CardContent className="p-4 bg-transparent">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-indigo-100 flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                      AI Coding Expert
                    </h3>
                    <p className="text-emerald-300 font-medium">
                      <Link
                        href="https://outlier.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-200 transition-colors underline decoration-emerald-400/30 hover:decoration-emerald-400"
                      >
                        Outlier AI - Remote
                      </Link>
                    </p>
                  </div>
                  <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-xs">
                    Aug 2024 - Nov 2024
                  </Badge>
                </div>
                <p className="text-indigo-200/80 text-sm">
                  Worked remotely as an AI Coding Expert, contributing to AI-driven coding solutions and optimizing AI
                  models for coding automation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 backdrop-blur-lg hover:bg-emerald-800/20 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10">
              <CardContent className="p-4 bg-transparent">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-indigo-100 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      Web Development Intern
                    </h3>
                    <p className="text-emerald-300 font-medium">
                      <Link
                        href="https://suvenconsultants.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-200 transition-colors underline decoration-emerald-400/30 hover:decoration-emerald-400"
                      >
                        Suven Consultants & Technology Pvt. Ltd.
                      </Link>
                    </p>
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                    Apr 2023 - May 2023
                  </Badge>
                </div>
                <p className="text-indigo-200/80 text-sm">
                  Gained hands-on experience in web development concepts and successfully participated in a
                  performance-assessed program.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative container px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-indigo-100">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI-Powered Memory Chatbot",
                description:
                  "Conversational AI chatbot with session-based memory and context chaining for personalized interactions",
                tech: ["Python", "OpenAI GPT", "LangChain", "Flask", "JavaScript"],
                gradient: "from-purple-500 to-pink-500",
                image: "/images/ai-memory-chatbot.png",
                github: "https://github.com/riteshkakade/ai-memory-chatbot",
                features: [
                  "Session-based memory and context chaining",
                  "OpenAI GPT integration for intelligent responses",
                  "Custom JSON memory for conversation tracking",
                  "Responsive frontend with Flask backend",
                ],
              },
              {
                title: "Code Explainer Pro",
                description:
                  "AI-powered tool that generates natural language explanations of code with visual flowcharts",
                tech: ["Python", "OpenAI GPT", "Mermaid.js", "Flask", "JavaScript"],
                gradient: "from-cyan-500 to-blue-500",
                image: "/images/code-explainer-pro.png",
                github: "https://github.com/riteshkakade/code-explainer-pro",
                features: [
                  "Multi-language code analysis and interpretation",
                  "Mermaid.js flowchart visualization",
                  "GitHub repo import functionality",
                  "Markdown documentation export",
                ],
              },
              {
                title: "Admin Dashboard",
                description: "Comprehensive admin panel with data visualization and user management features",
                tech: ["React", "JavaScript", "CSS"],
                gradient: "from-indigo-500 to-blue-500",
                image: "/images/admin-dashboard.png",
                github: "https://github.com/riteshkakade/admin-dashboard",
              },
              {
                title: "Restaurant Website",
                description: "Modern restaurant website with online ordering and reservation system",
                tech: ["HTML", "CSS", "JavaScript"],
                gradient: "from-emerald-500 to-teal-500",
                image: "/images/restaurant-website.png",
                github: "https://github.com/riteshkakade/restaurant-website",
              },
              {
                title: "E-commerce Application",
                description: "Full-featured e-commerce platform with payment integration",
                tech: ["React", "Bootstrap", "REST APIs"],
                gradient: "from-amber-500 to-orange-500",
                image: "/images/ecommerce-app.png",
                github: "https://github.com/riteshkakade/ecommerce-app",
              },
              {
                title: "Personal Portfolio",
                description: "Responsive portfolio website showcasing projects and skills",
                tech: ["HTML", "CSS", "JavaScript"],
                gradient: "from-blue-500 to-indigo-500",
                image: "/images/portfolio-website.png",
                github: "https://github.com/riteshkakade/portfolio-website",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="h-32 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 400px"
                    quality={90}
                  />
                </div>
                <CardHeader className="bg-transparent pb-3">
                  <CardTitle className="text-indigo-100 group-hover:text-emerald-300 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-indigo-200/70 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="bg-transparent pt-0">
                  {project.features && (
                    <div className="mb-3">
                      <ul className="text-xs text-indigo-300/80 space-y-1">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-400 mr-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-indigo-500/20 text-indigo-200/80 bg-transparent text-xs px-2 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge
                        variant="outline"
                        className="border-indigo-500/20 text-indigo-200/60 bg-transparent text-xs px-2 py-0"
                      >
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-indigo-500/20 text-indigo-200/80 hover:bg-indigo-500/10 hover:text-indigo-100 bg-transparent flex-1"
                      asChild
                    >
                      <Link
                        href={project.github || "https://github.com/riteshkakade"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        View Code
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-emerald-500/20 text-emerald-200/80 hover:bg-emerald-500/10 hover:text-emerald-100 bg-transparent flex-1"
                        asChild
                      >
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative container px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-indigo-100">
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border-indigo-500/20 backdrop-blur-lg hover:scale-105 transition-all duration-300">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-indigo-100 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-indigo-400" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/20 backdrop-blur-lg hover:scale-105 transition-all duration-300">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-indigo-100 flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-emerald-400" />
                  AI & ML
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <div className="flex flex-wrap gap-2">
                  {["OpenAI GPT", "LangChain", "Machine Learning", "Natural Language Processing"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/20 backdrop-blur-lg hover:scale-105 transition-all duration-300">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-indigo-100 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-amber-400" />
                  Web & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <div className="flex flex-wrap gap-2">
                  {["React", "Flask", "HTML/CSS", "Git", "REST APIs"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative container px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-indigo-100">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Deloitte Ireland - Introduction to Deloitte Job Simulation",
                issuer: "Deloitte Ireland | Forage",
                date: "October 2023",
                color: "indigo",
                credentialId: "77vgyDdn3HfGEaZhC",
                link: "https://www.theforage.com/virtual-internships/prototype/YPWCiGNTkr6QxcpEu/Deloitte-Ireland-Technology-Consulting-Virtual-Internship",
              },
              {
                title: "Accenture North America - Data Analytics and Visualization Job Simulation",
                issuer: "Accenture North America | Forage",
                date: "October 2023",
                color: "emerald",
                credentialId: "AGmDF5gBo3S4CLWaC",
                link: "https://www.theforage.com/virtual-internships/prototype/hzmoNKtzvAzXsEqx8/Data-Analytics",
              },
              {
                title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
                issuer: "Tata Group | Forage",
                date: "October 2023",
                color: "amber",
                credentialId: "mKWJDu7yGxroyiQMS",
                link: "https://www.theforage.com/virtual-internships/prototype/MyXvBcppsW2FkNYCX/Data-Visualisation-Empowering-Business-with-Effective-Insights",
              },
              {
                title: "Digital Marketing Fundamentals",
                issuer: "Google",
                date: "December 2020",
                color: "blue",
                credentialId: "N/A",
                link: "https://skillshop.exceedlms.com/student/path/18128-digital-marketing",
              },
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardHeader className="bg-transparent">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <Award className={`h-6 w-6 text-${cert.color}-400`} />
                      <div className="flex-1">
                        <CardTitle className="text-indigo-100 text-lg group-hover:text-emerald-300 transition-colors">
                          <Link
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline decoration-emerald-400/30 hover:decoration-emerald-400"
                          >
                            {cert.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className={`text-${cert.color}-300`}>{cert.issuer}</CardDescription>
                        {cert.credentialId !== "N/A" && (
                          <p className="text-xs text-indigo-400/60 mt-1">Credential ID: {cert.credentialId}</p>
                        )}
                      </div>
                      <ExternalLink
                        className={`h-4 w-4 text-${cert.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                    <Badge
                      className={`bg-${cert.color}-500/20 text-${cert.color}-300 border-${cert.color}-500/30 ml-2`}
                    >
                      {cert.date}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative container px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-indigo-100">Let's Connect</h2>
          <p className="text-indigo-200/80 mb-8 text-lg">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center bg-transparent">
                <Link href="mailto:riteshkakade275@gmail.com" className="block">
                  <Mail className="h-8 w-8 text-indigo-400 mx-auto mb-2 group-hover:text-emerald-400 transition-colors" />
                  <p className="text-indigo-200/80 text-sm group-hover:text-indigo-100 transition-colors">
                    riteshkakade275@gmail.com
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center bg-transparent">
                <Link href="tel:+919175357169" className="block">
                  <Phone className="h-8 w-8 text-emerald-400 mx-auto mb-2 group-hover:text-amber-400 transition-colors" />
                  <p className="text-indigo-200/80 text-sm group-hover:text-indigo-100 transition-colors">
                    +91 9175357169
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center bg-transparent">
                <Link
                  href="https://www.linkedin.com/in/ritesh-kakade-6b8514366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Linkedin className="h-8 w-8 text-amber-400 mx-auto mb-2 group-hover:text-indigo-400 transition-colors" />
                  <p className="text-indigo-200/80 text-sm group-hover:text-indigo-100 transition-colors">
                    Ritesh Kakade
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-indigo-900/30 border-indigo-500/20 backdrop-blur-lg hover:bg-indigo-800/30 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center bg-transparent">
                <Link
                  href="https://github.com/riteshkakade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Github className="h-8 w-8 text-indigo-400 mx-auto mb-2 group-hover:text-emerald-400 transition-colors" />
                  <p className="text-indigo-200/80 text-sm group-hover:text-indigo-100 transition-colors">
                    github.com/riteshkakade
                  </p>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-indigo-100 border-0 transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="mailto:riteshkakade275@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/20 hover:text-emerald-300 transform hover:scale-105 transition-all duration-200 bg-transparent"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/ritesh-kakade-6b8514366"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-500/20 py-8 bg-black/30 backdrop-blur-lg">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-indigo-300/60">© 2024 Ritesh Kakade. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="text-indigo-300/60 hover:text-emerald-400 hover:bg-indigo-500/10"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/ritesh-kakade-6b8514366"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-indigo-300/60 hover:text-emerald-400 hover:bg-indigo-500/10"
                asChild
              >
                <Link href="mailto:riteshkakade275@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-indigo-300/60 hover:text-emerald-400 hover:bg-indigo-500/10"
                asChild
              >
                <Link href="https://github.com/riteshkakade" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
