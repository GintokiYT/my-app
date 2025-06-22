"use client"
import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import {
  Code2,
  Wrench,
  Globe,
  Smartphone,
  Database,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
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

  const NavLinks = ({ mobile = false, onLinkClick = () => {} }) => (
    <>
      <button
        onClick={() => {
          scrollToSection("servicios")
          onLinkClick()
        }}
        className={`text-sm font-medium hover:text-orange-600 transition-colors ${mobile ? "block py-2 text-left" : ""}`}
      >
        Servicios
      </button>
      <button
        onClick={() => {
          scrollToSection("nosotros")
          onLinkClick()
        }}
        className={`text-sm font-medium hover:text-orange-600 transition-colors ${mobile ? "block py-2 text-left" : ""}`}
      >
        Nosotros
      </button>
      <button
        onClick={() => {
          scrollToSection("portfolio")
          onLinkClick()
        }}
        className={`text-sm font-medium hover:text-orange-600 transition-colors ${mobile ? "block py-2 text-left" : ""}`}
      >
        Portfolio
      </button>
      <button
        onClick={() => {
          scrollToSection("contacto")
          onLinkClick()
        }}
        className={`text-sm font-medium hover:text-orange-600 transition-colors ${mobile ? "block py-2 text-left" : ""}`}
      >
        Contacto
      </button>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        className={`px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        }`}
      >
        <Link className="flex items-center justify-center" href="/">
          <Code2 className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">DevSolutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks mobile={true} onLinkClick={() => {}} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section con animaciones */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 animate-bounce-subtle">
                    Desarrollo de Software Profesional
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 animate-fade-in-up animation-delay-200">
                    Transformamos tus ideas en
                    <span className="text-orange-600"> software potente</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in-up animation-delay-400">
                    Desarrollamos software a medida, mantenemos tus aplicaciones y creamos landing pages que convierten.
                    Tu socio tecnológico de confianza para hacer crecer tu negocio.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up animation-delay-600">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
                    onClick={() => scrollToSection("contacto")}
                  >
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-orange-200 text-orange-700 hover:bg-orange-50 transform hover:scale-105 transition-all duration-200"
                    onClick={() => scrollToSection("portfolio")}
                  >
                    Ver Portfolio
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg blur-3xl opacity-30 animate-pulse-slow"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                    height="400"
                    alt="Desarrollo de Software"
                    className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section con animaciones */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <Code2 className="h-12 w-12 text-orange-600 mb-4 animate-bounce-subtle" />
                  <CardTitle className="text-gray-900">Software a Medida</CardTitle>
                  <CardDescription>
                    Desarrollamos aplicaciones personalizadas que se adaptan perfectamente a tus necesidades específicas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Aplicaciones web y móviles
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sistemas de gestión (ERP, CRM)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      APIs y microservicios
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-orange-600 mb-4 animate-bounce-subtle animation-delay-200" />
                  <CardTitle className="text-gray-900">Mantenimiento</CardTitle>
                  <CardDescription>
                    Mantenemos tu software actualizado, seguro y funcionando al máximo rendimiento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Actualizaciones y mejoras
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Soporte técnico 24/7
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Monitoreo y optimización
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
                <CardHeader>
                  <Globe className="h-12 w-12 text-orange-600 mb-4 animate-bounce-subtle animation-delay-400" />
                  <CardTitle className="text-gray-900">Landing Pages</CardTitle>
                  <CardDescription>
                    Creamos páginas web que convierten visitantes en clientes y potencian tu presencia online
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Diseño responsive y moderno
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Optimización SEO
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Integración con analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Tecnologías que Dominamos
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Trabajamos con las tecnologías más modernas y confiables del mercado
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 p-4 animate-fade-in-up animation-delay-200 hover:scale-105 transition-transform duration-200">
                <Database className="h-12 w-12 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Bases de Datos</h3>
                <p className="text-sm text-gray-600 text-center">MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 animate-fade-in-up animation-delay-400 hover:scale-105 transition-transform duration-200">
                <Smartphone className="h-12 w-12 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Mobile</h3>
                <p className="text-sm text-gray-600 text-center">React Native, Flutter</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 animate-fade-in-up animation-delay-600 hover:scale-105 transition-transform duration-200">
                <Globe className="h-12 w-12 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Frontend</h3>
                <p className="text-sm text-gray-600 text-center">React, Vue.js, Angular</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 animate-fade-in-up animation-delay-800 hover:scale-105 transition-transform duration-200">
                <Shield className="h-12 w-12 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Backend</h3>
                <p className="text-sm text-gray-600 text-center">Node.js, Python, PHP</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-left">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Sobre Nosotros</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Tu Socio Tecnológico de Confianza
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas que impulsen el
                    crecimiento de tu negocio. Con años de experiencia en el sector, nos especializamos en entender tus
                    necesidades y convertirlas en software potente y eficiente.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-200">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">+50 Proyectos Completados</span>
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-400">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Soporte 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-600">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Metodologías Ágiles</span>
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up animation-delay-800">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Garantía de Calidad</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in-right">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Nuestro Equipo"
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Nuestros Proyectos Destacados
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Algunos ejemplos de nuestro trabajo y los resultados que hemos logrado para nuestros clientes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900">Sistema ERP Personalizado</CardTitle>
                  <CardDescription>
                    Desarrollo completo de sistema de gestión empresarial para empresa manufacturera
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900">E-commerce Avanzado</CardTitle>
                  <CardDescription>
                    Plataforma de comercio electrónico con integración de pagos y gestión de inventario
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-gray-900">App Móvil Corporativa</CardTitle>
                  <CardDescription>
                    Aplicación móvil para gestión de equipos de trabajo y comunicación interna
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Push Notifications</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Lo que Dicen Nuestros Clientes
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  La satisfacción de nuestros clientes es nuestra mejor carta de presentación
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-900">Excelente Trabajo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "El equipo de DevSolutions transformó completamente nuestro proceso de ventas con un CRM a medida.
                    Aumentamos nuestra productividad en un 40%."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-orange-600">MR</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">María Rodríguez</p>
                      <p className="text-xs text-gray-500">CEO, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-900">Muy Profesionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Desarrollaron nuestra landing page y el resultado superó nuestras expectativas. Las conversiones
                    aumentaron un 60% en el primer mes."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-orange-600">CL</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Carlos López</p>
                      <p className="text-xs text-gray-500">Director, StartupXYZ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-900">Soporte Excepcional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "No solo desarrollaron nuestro software, sino que el mantenimiento y soporte continuo ha sido
                    excepcional. Siempre disponibles cuando los necesitamos."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-orange-600">AG</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Ana García</p>
                      <p className="text-xs text-gray-500">CTO, InnovaTech</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  ¿Listo para Comenzar tu Proyecto?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Cuéntanos sobre tu idea y te ayudaremos a convertirla en realidad
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 animate-fade-in-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Hablemos de tu Proyecto</h3>
                  <p className="text-gray-600">
                    Estamos aquí para escucharte y brindarte la mejor solución tecnológica para tu negocio.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">contacto@devsolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Ciudad, País</span>
                  </div>
                </div>
              </div>
              <Card className="border-orange-100 animate-fade-in-right">
                <CardHeader>
                  <CardTitle className="text-gray-900">Solicita tu Cotización Gratuita</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Empresa</label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Tipo de Proyecto</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Software a Medida</option>
                      <option>Landing Page</option>
                      <option>Mantenimiento</option>
                      <option>Consultoría</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Mensaje</label>
                    <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-200">
                    Enviar Solicitud
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-bounce-subtle"
          onClick={() =>
            window.open(
              "https://wa.me/934369928?text=Hola, me interesa conocer más sobre sus servicios de desarrollo de software",
              "_blank",
            )
          }
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-orange-600" />
          <span className="font-semibold text-gray-900">DevSolutions</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-4">© 2024 DevSolutions. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
