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
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <button
              onClick={() => scrollToSection("hero")}
              className="mr-6 flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
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
                    activeSection === section ? "text-emerald-600" : "text-slate-600 hover:text-slate-900"
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
      <section id="hero" className="relative container px-4 py-20 md:py-28">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <User className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-xs">👋</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent font-bold">
                Ritesh Kakade
              </span>
            </h1>
            <div className="mx-auto max-w-[700px] space-y-2">
              <p className="text-lg text-emerald-700 font-semibold">Computer Engineer & AI Coding Expert</p>
              <p className="text-base text-slate-600">
                Aspiring computer engineer with expertise in web development, AI/ML, and sign language interpretation.
                Passionate about creating innovative solutions and contributing to cutting-edge projects.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white"
              onClick={() => scrollToSection("projects")}
            >
              <Star className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/ritesh-kakade-6b8514366"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
              asChild
            >
              <Link href="mailto:riteshkakade275@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
              asChild
            >
              <Link href="tel:+919175357169">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
              asChild
            >
              <Link href="https://github.com/ritesh275" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative container px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-slate-900">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <Card className="bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-amber-600">
                  <GraduationCap className="h-5 w-5" />
                  <span>Bachelor of Computer Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-indigo-600">
                  <Calendar className="h-5 w-5" />
                  <span>Savitribai Phule Pune University (2021-2024)</span>
                </div>
                <div className="mt-3 text-slate-700 border-l-2 border-indigo-200 pl-3">
                  <p>Gained strong foundational knowledge in software development, algorithms, and system design.</p>
                  <p>Specialized in AI/ML applications and web development technologies.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-emerald-50 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Special Skills</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-emerald-700 font-medium">Sign Language Interpreter (ASL)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-amber-700 font-medium">AI & Machine Learning Expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-indigo-700 font-medium">Full-Stack Web Developer</span>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-slate-900">Work Experience</h2>
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-indigo-50 to-transparent border-l-4 border-indigo-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      AI Coding Expert
                    </h3>
                    <p className="text-emerald-700 font-medium">
                      <Link
                        href="https://outlier.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-800 transition-colors underline decoration-emerald-400/30 hover:decoration-emerald-600"
                      >
                        Outlier AI - Remote
                      </Link>
                    </p>
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 text-xs">Aug 2024 - Present</Badge>
                </div>
                <p className="text-slate-600 text-sm">
                  Worked remotely as an AI Coding Expert, contributing to AI-driven coding solutions and optimizing AI
                  models for coding automation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Frontend Developer Intern
                    </h3>
                    <p className="text-emerald-700 font-medium">
                      <Link
                        href="https://suvenconsultants.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-800 transition-colors underline decoration-emerald-400/30 hover:decoration-emerald-600"
                      >
                        Suven Consultants & Technology Pvt. Ltd.
                      </Link>
                    </p>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-xs">
                    Apr 2023 - May 2023
                  </Badge>
                </div>
                <p className="text-slate-600 text-sm">
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
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-slate-900">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI-Powered Memory Chatbot",
                description:
                  "Conversational AI chatbot with session-based memory and context chaining for personalized interactions",
                tech: ["Python", "OpenAI GPT", "LangChain", "Flask", "JavaScript"],
                gradient: "from-purple-500 to-pink-500",
                image: "/images/ai-memory-chatbot.png",
                features: [
                  "Session-based memory and context chaining",
                  "OpenAI GPT integration for intelligent responses",
                ],
              },
              {
                title: "Code Explainer Pro",
                description:
                  "AI-powered tool that generates natural language explanations of code with visual flowcharts",
                tech: ["Python", "OpenAI GPT", "Mermaid.js", "Flask", "JavaScript"],
                gradient: "from-cyan-500 to-blue-500",
                image: "/images/code-explainer-pro.png",
                features: ["Multi-language code analysis and interpretation", "Mermaid.js flowchart visualization"],
              },
              {
                title: "Admin Dashboard",
                description: "Comprehensive admin panel with data visualization and user management features",
                tech: ["React", "JavaScript", "CSS"],
                gradient: "from-indigo-500 to-blue-500",
                image: "/images/admin-dashboard.png",
                features: ["Data visualization dashboards", "User management and authentication"],
              },
              {
                title: "Restaurant Website",
                description: "Modern restaurant website with online ordering and reservation system",
                tech: ["HTML", "CSS", "JavaScript"],
                gradient: "from-emerald-500 to-teal-500",
                image: "/images/restaurant-website.png",
                features: ["Online menu and ordering system", "Table reservation functionality"],
              },
              {
                title: "E-commerce Application",
                description: "Full-featured e-commerce platform with payment integration",
                tech: ["React", "Bootstrap", "REST APIs"],
                gradient: "from-amber-500 to-orange-500",
                image: "/images/ecommerce-app.png",
                features: ["Product catalog and shopping cart", "Secure payment gateway integration"],
              },
              {
                title: "Personal Portfolio",
                description: "Responsive portfolio website showcasing projects and skills",
                tech: ["HTML", "CSS", "JavaScript"],
                gradient: "from-blue-500 to-indigo-500",
                image: "/images/portfolio-website.png",
                features: ["Project showcase with detailed descriptions", "Skills and experience highlights"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="h-32 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-900 group-hover:text-emerald-700 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <ul className="text-xs text-slate-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-emerald-600 mr-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-200 text-slate-600 text-xs px-2 py-0">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="border-slate-200 text-slate-500 text-xs px-2 py-0">
                        +{project.tech.length - 3}
                      </Badge>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-slate-900">
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-indigo-600" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-emerald-600" />
                  AI & ML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI GPT", "LangChain", "Machine Learning", "Natural Language Processing"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-amber-600" />
                  Web & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Flask", "HTML/CSS", "Git", "REST APIs"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200 transition-colors"
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
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center text-slate-900">Certifications</h2>
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
                className="bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <Award className={`h-6 w-6 text-${cert.color}-600`} />
                      <div className="flex-1">
                        <CardTitle className="text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                          <Link
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline decoration-emerald-400/30 hover:decoration-emerald-600"
                          >
                            {cert.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className={`text-${cert.color}-700`}>{cert.issuer}</CardDescription>
                        {cert.credentialId !== "N/A" && (
                          <p className="text-xs text-slate-500 mt-1">Credential ID: {cert.credentialId}</p>
                        )}
                      </div>
                      <ExternalLink
                        className={`h-4 w-4 text-${cert.color}-600 opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                    <Badge className={`bg-${cert.color}-100 text-${cert.color}-700 border-${cert.color}-200 ml-2`}>
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-slate-900">Let's Connect</h2>
          <p className="text-slate-600 mb-8 text-lg">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6 text-center">
                <Link href="mailto:riteshkakade275@gmail.com" className="block">
                  <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-2 group-hover:text-emerald-600 transition-colors" />
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">
                    riteshkakade275@gmail.com
                  </p>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6 text-center">
                <Link href="tel:+919175357169" className="block">
                  <Phone className="h-8 w-8 text-emerald-600 mx-auto mb-2 group-hover:text-amber-600 transition-colors" />
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">+91 9175357169</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6 text-center">
                <Link
                  href="https://www.linkedin.com/in/ritesh-kakade-6b8514366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Linkedin className="h-8 w-8 text-amber-600 mx-auto mb-2 group-hover:text-indigo-600 transition-colors" />
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">Ritesh Kakade</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-slate-200 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6 text-center">
                <Link href="https://github.com/ritesh275" target="_blank" rel="noopener noreferrer" className="block">
                  <Github className="h-8 w-8 text-indigo-600 mx-auto mb-2 group-hover:text-emerald-600 transition-colors" />
                  <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">
                    github.com/ritesh275
                  </p>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white"
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
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 bg-transparent"
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
      <footer className="border-t border-slate-200 py-8 bg-white/80 backdrop-blur-lg">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">© 2024 Ritesh Kakade. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
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
                className="text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
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
                className="text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
                asChild
              >
                <Link href="https://github.com/ritesh275" target="_blank" rel="noopener noreferrer">
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
