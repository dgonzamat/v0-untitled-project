"use client"

import { useState } from "react"
import { ModuleTemplate } from "@/components/module-template"
import { Shield, FileText, CheckCircle, Clock, User, Building } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CotizacionSegurosPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      title: "Identificación del cliente",
      description: "Verificación de identidad y datos personales",
    },
    {
      title: "Análisis de necesidades",
      description: "Evaluación de requerimientos y perfil de riesgo",
    },
    {
      title: "Cotización de productos",
      description: "Presentación de opciones y comparativa",
    },
    {
      title: "Personalización de cobertura",
      description: "Ajuste de coberturas según necesidades específicas",
    },
    {
      title: "Emisión de propuesta",
      description: "Generación de documento formal de propuesta",
    },
  ]

  const benefits = [
    "Reducción del tiempo de cotización de 45 a 5 minutos en promedio",
    "Aumento de la tasa de conversión de cotizaciones a ventas en un 35%",
    "Disminución de errores en la emisión de pólizas en un 98%",
    "Mejora en la satisfacción del cliente con un NPS de +65",
    "Cumplimiento total con la normativa de la CMF para seguros en Chile",
    "Integración con sistemas core de las principales aseguradoras del mercado chileno",
  ]

  const technicalDetails = [
    "Integración con API REST de cotizadores de las principales compañías de seguros",
    "Verificación biométrica de identidad mediante reconocimiento facial",
    "Firma electrónica avanzada conforme a la Ley 19.799",
    "Validación automática de datos con el Registro Civil e Identificación",
    "Cálculo de primas en tiempo real con motor de reglas personalizable",
    "Generación automática de documentos con firma digital incorporada",
  ]

  const implementationSteps = [
    "Análisis de requerimientos y configuración inicial (2 semanas)",
    "Integración con sistemas existentes y APIs de aseguradoras (3 semanas)",
    "Configuración de productos, coberturas y reglas de negocio (2 semanas)",
    "Pruebas de integración y validación de escenarios (2 semanas)",
    "Capacitación de usuarios y puesta en producción (1 semana)",
  ]

  const handleStepChange = (step: number) => {
    setCurrentStep(step)
  }

  const demoContent = (
    <div className="h-full bg-white p-4 flex flex-col">
      <Tabs defaultValue="cotizador" className="flex-1 flex flex-col">
        <TabsList className="mb-4">
          <TabsTrigger value="cotizador">Cotizador</TabsTrigger>
          <TabsTrigger value="cliente">Datos del Cliente</TabsTrigger>
          <TabsTrigger value="comparativa">Comparativa</TabsTrigger>
          <TabsTrigger value="propuesta">Propuesta</TabsTrigger>
        </TabsList>

        <TabsContent value="cotizador" className="flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Seguro de Vida
                </CardTitle>
                <CardDescription>Protección para usted y su familia</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Prima mensual desde:</span>
                    <span className="font-semibold">$12.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Cobertura hasta:</span>
                    <span className="font-semibold">UF 3.000</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Cotizar</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Seguro de Hogar
                </CardTitle>
                <CardDescription>Protección para su vivienda</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Prima mensual desde:</span>
                    <span className="font-semibold">$8.900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Cobertura hasta:</span>
                    <span className="font-semibold">UF 1.500</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Cotizar</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Seguro de Salud
                </CardTitle>
                <CardDescription>Complementario a su Isapre</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Prima mensual desde:</span>
                    <span className="font-semibold">$15.200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Cobertura hasta:</span>
                    <span className="font-semibold">UF 2.000</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Cotizar</Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Cotización Personalizada</CardTitle>
              <CardDescription>Complete los datos para obtener una cotización a su medida</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tipo-seguro">Tipo de Seguro</Label>
                  <Select defaultValue="vida">
                    <SelectTrigger id="tipo-seguro">
                      <SelectValue placeholder="Seleccione tipo de seguro" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vida">Seguro de Vida</SelectItem>
                      <SelectItem value="hogar">Seguro de Hogar</SelectItem>
                      <SelectItem value="salud">Seguro de Salud</SelectItem>
                      <SelectItem value="auto">Seguro Automotriz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cobertura">Cobertura (UF)</Label>
                  <Select defaultValue="1000">
                    <SelectTrigger id="cobertura">
                      <SelectValue placeholder="Seleccione cobertura" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500">UF 500</SelectItem>
                      <SelectItem value="1000">UF 1.000</SelectItem>
                      <SelectItem value="2000">UF 2.000</SelectItem>
                      <SelectItem value="3000">UF 3.000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edad">Edad</Label>
                  <Input id="edad" type="number" placeholder="Ingrese su edad" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comuna">Comuna</Label>
                  <Select defaultValue="santiago">
                    <SelectTrigger id="comuna">
                      <SelectValue placeholder="Seleccione comuna" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="santiago">Santiago</SelectItem>
                      <SelectItem value="providencia">Providencia</SelectItem>
                      <SelectItem value="lascondes">Las Condes</SelectItem>
                      <SelectItem value="vitacura">Vitacura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="mt-6 w-full">Obtener Cotización</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cliente" className="flex-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Datos del Cliente</CardTitle>
              <CardDescription>Información personal del asegurado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rut">RUT</Label>
                  <Input id="rut" placeholder="12.345.678-9" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo</Label>
                  <Input id="nombre" placeholder="Juan Pérez González" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="juan.perez@ejemplo.cl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+56 9 1234 5678" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input id="direccion" placeholder="Av. Providencia 1234, Providencia" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profesion">Profesión</Label>
                  <Input id="profesion" placeholder="Ingeniero Civil" />
                </div>
              </div>

              <Button className="mt-6">Guardar Datos</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparativa" className="flex-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Comparativa de Seguros</CardTitle>
              <CardDescription>Análisis de las mejores opciones para su perfil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Compañía</th>
                      <th className="border p-2 text-left">Plan</th>
                      <th className="border p-2 text-left">Prima Mensual</th>
                      <th className="border p-2 text-left">Cobertura</th>
                      <th className="border p-2 text-left">Deducible</th>
                      <th className="border p-2 text-left">Beneficios</th>
                      <th className="border p-2 text-left">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Seguros Chile</td>
                      <td className="border p-2">Vida Protección Total</td>
                      <td className="border p-2">$12.500</td>
                      <td className="border p-2">UF 1.000</td>
                      <td className="border p-2">UF 1</td>
                      <td className="border p-2">
                        <Badge className="mr-1">Asistencia 24/7</Badge>
                        <Badge>Cobertura internacional</Badge>
                      </td>
                      <td className="border p-2">
                        <Button size="sm">Seleccionar</Button>
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border p-2">Seguros Pacífico</td>
                      <td className="border p-2">Vida Premium</td>
                      <td className="border p-2">$14.200</td>
                      <td className="border p-2">UF 1.500</td>
                      <td className="border p-2">UF 0.5</td>
                      <td className="border p-2">
                        <Badge className="mr-1">Asistencia 24/7</Badge>
                        <Badge className="mr-1">Cobertura internacional</Badge>
                        <Badge>Telemedicina</Badge>
                      </td>
                      <td className="border p-2">
                        <Button size="sm" variant="outline">
                          Seleccionar
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Seguros Andina</td>
                      <td className="border p-2">Vida Esencial</td>
                      <td className="border p-2">$10.800</td>
                      <td className="border p-2">UF 800</td>
                      <td className="border p-2">UF 2</td>
                      <td className="border p-2">
                        <Badge>Asistencia 24/7</Badge>
                      </td>
                      <td className="border p-2">
                        <Button size="sm" variant="outline">
                          Seleccionar
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline">Exportar Comparativa</Button>
                <Button>Continuar con Selección</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="propuesta" className="flex-1">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Propuesta de Seguro</CardTitle>
                <CardDescription>Resumen de la cotización seleccionada</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Válido por 30 días</span>
                </Badge>
                <Badge className="bg-green-600">Mejor oferta</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Seguro de Vida Premium - Seguros Pacífico
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Cliente:</p>
                      <p className="font-medium">Juan Pérez González</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">RUT:</p>
                      <p className="font-medium">12.345.678-9</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prima mensual:</p>
                      <p className="font-medium">$14.200</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Cobertura:</p>
                      <p className="font-medium">UF 1.500</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Deducible:</p>
                      <p className="font-medium">UF 0.5</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Vigencia:</p>
                      <p className="font-medium">1 año (renovable)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Coberturas incluidas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Fallecimiento por cualquier causa (UF 1.500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Invalidez total y permanente 2/3 (UF 1.500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enfermedades graves (UF 500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Asistencia médica telefónica 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cobertura internacional en viajes hasta 90 días</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>Descargar propuesta</span>
                  </Button>
                  <Button className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>Contratar ahora</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  return (
    <ModuleTemplate
      title="Cotización de Seguros"
      description="Sistema de cotización y comparación de seguros para clientes"
      sector="Seguros"
      moduleId="cotizacion-seguros"
      steps={steps}
      duration="5 minutos"
      demoContent={demoContent}
      onStepChange={handleStepChange}
      benefits={benefits}
      technicalDetails={technicalDetails}
      implementationSteps={implementationSteps}
    />
  )
}
