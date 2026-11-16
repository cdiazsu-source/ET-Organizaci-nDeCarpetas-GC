/* Estructura oficial por área (Guía de Nomenclatura UIFCE, referencia 2026-II) */
window.AREAS=[
 {s:'CO',k:'co',n:1,name:'Coordinación',desc:'Área administrativa y operativa de la Unidad: actividades generales, contratación, empalmes, gestión en SAP, reuniones de coordinación y soporte.',
  tree:`1. CO - Actividades Generales
  1.1. CO - Inducción
  1.2. CO - Permisos
  1.n. CO - [Responsable o Actividad]
2. CO - Contratación
  2.1. CO - REAS, Anexos y Ampliaciones
  2.2. CO - Radicación de Documentos
    2.2.1. CO - Anexos
    2.2.2. CO - Respuestas
  2.3. CO - Solicitudes Presupuestales
    2.3.1. CO - Editables
    2.3.2. CO - No Editables
3. CO - Empalmes
4. CO - SAP
5. CO - Notas de Reunión
6. CO - Formulario de Soporte`,
  procs:[['1. Actividades Generales','Inducción, permisos y carpetas por responsable o actividad.','o'],['2. Contratación','REAs, anexos y ampliaciones; radicación y respuestas; solicitudes presupuestales.','o'],['3. Empalmes','Documentos de entrega y recibo de cargos.','o'],['4. SAP','Soportes de trámites gestionados en SAP.','o'],['5. Notas de Reunión','Actas y notas de las reuniones de coordinación.','o'],['6. Formulario de Soporte','Formulario, hoja de respuestas y carpeta automática.','o']],
  files:['Matrices y hojas de seguimiento de un proceso (por ejemplo, contratación) en el nivel de su carpeta de proceso, no dentro del caso de una persona.']},
 {s:'AA',k:'aa',n:2,name:'Apoyos Académicos',desc:'Capacitaciones y apoyos académicos. El material se organiza por tipo de recurso y, dentro de cada tipo, por herramienta: Access, Canva, Excel, NVivo, Odoo, QGIS, SAP, Siigo, Tableau, Power BI, entre otras.',
  tree:`1. AA - Actividades del Área
2. AA - Material
  2.1. AA - Grabaciones
    2.1.n. AA - Grabaciones [Herramienta]
  2.2. AA - Material Generado
    2.2.n. AA - Material [Herramienta]
3. AA - Listas de Participación
  3.n. AA - Participación [Herramienta]
4. AA - Encuestas de Satisfacción
5. AA - Proyectos del Área
  5.n. AA - [Nombre del Proyecto]
    5.n.n. AA - [Producto: Diapositivas, Guías...]
6. AA - Informe de Gestión`,
  procs:[['1. Actividades del Área','Planeación y actividades generales del área.','o'],['2. Material','Grabaciones y material generado, por herramienta.','o'],['3. Listas de Participación','Listas y matrices de participantes por herramienta o curso.','o'],['4. Encuestas de Satisfacción','Formularios de satisfacción y sus respuestas.','o'],['5. Proyectos del Área','Una carpeta por proyecto, con subcarpetas por producto.','s'],['6. Informe de Gestión','Informe, bases y tablero del semestre.','o']],
  files:['Hoja consolidada de participación en 3. Listas de Participación.','Hojas de respuestas junto a su formulario en 4. Encuestas de Satisfacción.']},
 {s:'CL',k:'cl',n:3,name:'Cursos Libres',desc:'Planea, lanza, certifica y evalúa los cursos libres. Es el área con más niveles: cada semestre tiene varios lanzamientos y cada lanzamiento agrupa cursos con la misma estructura interna.',
  tree:`1. CL - Planeación
2. CL - Lanzamiento de Cursos Libres
  2.1. CL - Primer Lanzamiento
    2.1.1. CL - Material Primer Lanzamiento
      2.1.1.n. CL - [Nombre del Curso]
        2.1.1.n.1. CL - Grabaciones [Curso]
        2.1.1.n.2. CL - Material [Curso]
        2.1.1.n.3. CL - Notas y Asistencia [Curso]
        2.1.1.n.4. CL - Sugerencias [Curso]
    2.1.2. CL - Formularios Primer Lanzamiento
      2.1.2.n. CL - [Grupo de formularios]
    2.1.3. CL - Informes de Retroalimentación
    2.1.4. CL - Exámenes de Nivelación
      2.1.4.n. CL - Suficiencia [Curso]
  2.2. CL - Segundo Lanzamiento
  2.3. CL - Lanzamiento Especial
  2.4. CL - Plantillas Base de Cursos
    2.4.n. CL - Plantilla [Curso]
  2.5. CL - Documentos
  2.6. CL - Moodle
  2.7. CL - Revisión de Pruebas de Suficiencia
    2.7.1. CL - Solucionarios
    2.7.2. CL - Exámenes Revisados
  2.8. CL - Comunicaciones y Propuestas
3. CL - Certificados
4. CL - Comité de Cursos Libres
  4.n. CL - Comité [Curso o Tema]
5. CL - Banco de Talleres
  5.n. CL - Talleres [Curso]
    5.n.n. CL - Talleres [Curso] [Semestre de la edición]
6. CL - Actividades Máster
7. CL - Banco de Preguntas Moodle
8. CL - Integración con Asignaturas FCE
9. CL - Informe de Gestión`,
  procs:[['1. Planeación','Planeación general de cursos libres del semestre.','o'],['2. Lanzamiento de Cursos Libres','Una carpeta por lanzamiento y carpetas transversales: plantillas, documentos, Moodle, revisión de pruebas y comunicaciones.','o'],['2.n. [Tipo] Lanzamiento','Material por curso, formularios, retroalimentación y exámenes de nivelación.','l'],['3. Certificados','Certificados de los participantes del semestre.','o'],['4. Comité de Cursos Libres','Revisión de propuestas, por curso o tema.','o'],['5. Banco de Talleres','Talleres por curso y por semestre de la edición.','o'],['6. Actividades Máster','Actividades y entregables del monitor máster.','o'],['7. Banco de Preguntas Moodle','Bancos de preguntas exportados o en construcción.','s'],['8. Integración con Asignaturas FCE','Cursos complementarios articulados con materias.','s'],['9. Informe de Gestión','Bases consolidadas, tendencias, informe y presentación.','o']],
  files:['Notas y asistencia general y QR de encuesta de feedback en la carpeta de material de cada lanzamiento.','En Formularios: inscripción, satisfacción y feedback, cada uno con su hoja de respuestas.','En cada Suficiencia [Curso]: examen, respuestas y solucionario.']},
 {s:'DS',k:'ds',n:4,name:'Desarrollo',desc:'Herramientas, aplicativos, el micrositio de la Unidad, pruebas de selección de monitores de desarrollo y empalmes técnicos.',
  tree:`1. DS - Pruebas de Selección
2. DS - Empalme
  2.1. DS - Aplicativos
    2.1.1. DS - Accesos
    2.1.2. DS - Despliegue
    2.1.3. DS - Prácticas y Pasantías
3. DS - Micrositio
4. DS - Documentación Técnica
5. DS - Informe de Gestión
  5.1. DS - Datos Power BI`,
  procs:[['1. Pruebas de Selección','Pruebas y convocatorias (junior y máster) y sus resultados.','o'],['2. Empalme','Accesos, despliegue, prácticas y pasantías de los aplicativos.','o'],['3. Micrositio','Maqueta, formulario y datos de exmonitores.','o'],['4. Documentación Técnica','Manuales, notebooks, bases de datos y automatizaciones.','o'],['5. Informe de Gestión','Datos para Power BI, tablero, informe y presentación.','o']],
  files:['Bitácoras o inventarios generales en 4. Documentación Técnica.','DS - Dashboard Desarrollo - 2026-2 en 5. Informe de Gestión.']},
 {s:'ET',k:'et',n:5,name:'Estrategias Tecnológicas',desc:'Planeación del equipo y cuatro líneas de trabajo: articulación interna con las demás áreas, comunicación, eventos y vinculación, y gestión interna.',
  tree:`1. ET - Planeación y Gestión
  1.1. ET - Planeación del Semestre
  1.2. ET - Cronograma
  1.3. ET - Actas de Reunión
  1.4. ET - Equipo y Empalme {r}
  1.5. ET - Presupuesto
  1.6. ET - Protocolos y Lineamientos
2. ET - Articulación Interna
  2.1. ET - Articulación con Apoyos Académicos
    2.1.1. ET - Cartelera Física
    2.1.2. ET - Video Apoyos Académicos a Docentes
    2.1.3. ET - Página de Oferta Permanente
  2.2. ET - Articulación con Cursos Libres
    2.2.1. ET - Línea Gráfica
    2.2.2. ET - Piezas Primer Lanzamiento
    2.2.3. ET - Piezas Segundo Lanzamiento Halloween
    2.2.4. ET - Piezas Lanzamiento Especial
    2.2.5. ET - Video del Aplicativo
    2.2.6. ET - Sitio Estático de Oferta Permanente
    2.2.7. ET - Página de Oferta Permanente
  2.3. ET - Articulación con Desarrollo
    2.3.1. ET - Tarjetas de Solicitudes UIFCE
  2.4. ET - Articulación con Virtualización
    2.4.1. ET - Plantillas Articulate y Genially
    2.4.2. ET - Póster Encuesta de Automatización
  2.5. ET - Articulación con Coordinación
    2.5.1. ET - Infografía de Puntualidad
    2.5.2. ET - Plantillas de Presentación PowerPoint
  2.6. ET - Articulación Transversal
    2.6.1. ET - Acompañamiento Interárea
3. ET - Comunicación
  3.1. ET - Producción de Contenido
    3.1.1. ET - Logo UIFCE Vectorial
    3.1.2. ET - Uifcito Reutilizable
    3.1.3. ET - Biblioteca de Videos del Equipo
    3.1.4. ET - Piezas Gráficas y Material Audiovisual
    3.1.5. ET - Hacks Informáticos
    3.1.6. ET - Point of Purchase
    3.1.7. ET - Campaña Programación de Salones
    3.1.8. ET - Video Tutorial Programación de Salones
  3.2. ET - Carteleras y Pantallas
    3.2.1. ET - Carteleras UIFCE
    3.2.2. ET - Cápsulas de Tecnología
    3.2.3. ET - Señalética de Salas
  3.3. ET - Canales Digitales
    3.3.1. ET - Micrositio
    3.3.2. ET - Micrositio Ex Monitores
    3.3.3. ET - Micrositio Equipo de Trabajo
    3.3.4. ET - Blog UIFCE
    3.3.5. ET - Boletín Digital
    3.3.6. ET - LinkedIn
    3.3.7. ET - Instagram
    3.3.8. ET - TikTok
    3.3.9. ET - YouTube
    3.3.10. ET - Correo Institucional de Redes
4. ET - Eventos y Vinculación
  4.1. ET - Eventos y Formación
    4.1.1. ET - Semana UIFCE
    4.1.2. ET - Hackatón Bizagi
    4.1.3. ET - Microtalleres
      4.1.3.1. ET - Microtaller Lógica de Programación
    4.1.4. ET - Conferencia Transformación Digital
    4.1.5. ET - Feria de Servicios UNAL
    4.1.6. ET - Página de Oferta Permanente
  4.2. ET - Alianzas y Comunidad
    4.2.1. ET - Red Ejecutiva
    4.2.2. ET - Tracker de Egresados
    4.2.3. ET - Red de Aliados Académicos
    4.2.4. ET - Extensión Solidaria
    4.2.5. ET - Divulgación a Primeros Semestres
5. ET - Gestión Interna
  5.1. ET - Documentación y Memoria
    5.1.1. ET - Diagnóstico DOFA
    5.1.2. ET - Memorias 2026-2S
    5.1.3. ET - Memoria Audiovisual del Equipo
    5.1.4. ET - Propuesta de Reorganización del Drive
    5.1.5. ET - Repositorio Documental Permanente
  5.2. ET - Normativa y Cumplimiento
    5.2.1. ET - Términos y Condiciones
    5.2.2. ET - Consentimiento de Imagen
      5.2.2.1. ET - Autorizaciones Editables
      5.2.2.2. ET - Consentimientos Firmados PDF {r}
  5.3. ET - Mejora de Procesos
    5.3.1. ET - ET en Marcha
    5.3.2. ET - Seguimiento de Gastos
    5.3.3. ET - Canal de WhatsApp Business
    5.3.4. ET - Experiencia NFC
    5.3.5. ET - Repositorio de Material con IA
6. ET - Informe de Gestión
  6.1. ET - Power BI`,
  procs:[['1. Planeación y Gestión','Carpeta de gestión del equipo: planeación, cronograma, actas, equipo y empalme, presupuesto y protocolos.','o'],['2. Articulación Interna','Línea 1. Una carpeta por área con la que se trabaja, más acompañamiento transversal.','o'],['3. Comunicación','Línea 2. Producción de contenido, carteleras y pantallas, y canales digitales.','o'],['4. Eventos y Vinculación','Línea 3. Semana UIFCE, microtalleres, conferencias, ferias, alianzas y comunidad.','o'],['5. Gestión Interna','Línea 4. Documentación y memoria, normativa y consentimientos, y mejora de procesos.','o'],['6. Informe de Gestión','Datos de Power BI, informe y presentación.','o']],
  files:['Equipo y Empalme y Consentimientos Firmados PDF tienen acceso restringido.','Cronograma y protocolos de difusión en 1. Planeación y Gestión.','Control de microtalleres y formatos de inscripción en 4.1.3. Microtalleres.'],
  note:'Estrategias Tecnológicas mantiene aparte un repositorio con la línea gráfica de la UIFCE en la carpeta <b>Pack UIFCE</b>.'},
 {s:'GC',k:'gc',n:6,name:'Gestión del Conocimiento',desc:'Repositorio, capacitación interna de monitores, gestión documental, observatorio, backup semestral y política de manejo de información. Además vela por que todas las áreas cumplan esta guía.',
  tree:`1. GC - Planeación
  1.1. GC - Actividades Junior
  1.2. GC - Presentaciones Quincenales
2. GC - Definición de Conocimientos
  2.1. GC - Encuesta Inicial
  2.2. GC - Encuesta Intermedia
  2.3. GC - Encuesta Final
3. GC - Capacitación Interna
  3.1. GC - Material
    3.1.n. GC - Material [Herramienta]
  3.2. GC - Certificados
    3.2.1. GC - Certificados Monitores
    3.2.2. GC - Envío de Correos
  3.3. GC - Grabaciones
    3.3.n. GC - Grabaciones [Herramienta]
4. GC - Gestión Documental
  4.1. GC - Oficios
5. GC - Observatorio
6. GC - Sesiones GC
  6.n. GC - Grupo [n]
    6.n.1. GC - Certificados Grupo [n]
    6.n.2. GC - Ejercicios Grupo [n]
    6.n.3. GC - Entregables Grupo [n]
7. GC - Repositorio
8. GC - Backup
9. GC - Blog UIFCE
10. GC - Política de Manejo de Información
  10.1. GC - Compromisos de Confidencialidad Editables
  10.2. GC - Compromisos de Confidencialidad PDF
11. GC - EPT
  11.1. GC - Documentación de Actividades
12. GC - Informe de Gestión`,
  procs:[['1. Planeación','Planeación semestral, actividades junior y presentaciones quincenales.','o'],['2. Definición de Conocimientos','Encuestas inicial, intermedia y final.','o'],['3. Capacitación Interna','Material, certificados y grabaciones por herramienta.','o'],['4. Gestión Documental','Oficios, seguimiento y optimización documental.','o'],['5. Observatorio','Dashboard, resultados, estrategia y protocolo.','o'],['6. Sesiones GC','Una carpeta por grupo de sesiones.','o'],['7. Repositorio','Gestión y diagnóstico del repositorio.','o'],['8. Backup','Registros y soportes del backup semestral.','o'],['9. Blog UIFCE','Contenidos del blog a cargo de GC.','s'],['10. Política de Manejo de Información','Políticas y guías vigentes, compromisos de confidencialidad.','o'],['11. EPT','Documentación de actividades del EPT.','s'],['12. Informe de Gestión','Informe, bases y presentación del semestre.','o']],
  files:['Hoja de planeación semestral en 1. Planeación.','Hoja de cursos y entregables en 6. Sesiones GC.','Si una herramienta necesita más divisiones, se crean como 3.1.n.1., 3.1.n.2.']},
 {s:'VT',k:'vt',n:7,name:'Virtualización',desc:'Virtualiza cursos, actualiza los ya virtualizados, crea cursos desde cero y atiende apoyos. Sus proyectos de actualización comparten una misma estructura de seis etapas.',
  tree:`1. VT - Planeación y Gestión
  1.1. VT - Avance
  1.2. VT - Presentaciones
2. VT - Capacitación Inicial
  2.n. VT - Capacitación [Nombre del Monitor]
3. VT - Actualización
  3.1. VT - Matriz de Revisión y Aprobación
  3.2. VT - Excel Básico
    3.2.1. VT - Insumos y Estructura
    3.2.2. VT - Guion y Apoyos
    3.2.3. VT - Recursos
      3.2.3.1. VT - Imágenes
      3.2.3.2. VT - Audio
      3.2.3.3. VT - Videos
      3.2.3.4. VT - Documentos
    3.2.4. VT - Producción y Revisión
      3.2.4.1. VT - Introducción
      3.2.4.n. VT - Lección [n]
    3.2.5. VT - Entrega y Cierre
    3.2.6. VT - Histórico
4. VT - Cursos desde Cero
  4.n. VT - [Nombre del Curso]
5. VT - Apoyos y Solicitudes
  5.n. VT - Apoyo [Nombre o Herramienta]
6. VT - Gestión de Flujo de Trabajo
  6.1. VT - Gestión de Articulate
  6.2. VT - Gestión de Genially
  6.3. VT - Guionización
7. VT - Exploración de Chatbot
8. VT - Exploración de Nuevos Cursos
9. VT - Proyectos de Estudio Junior
  9.n. VT - [Nombre del Proyecto o Monitor]
10. VT - Informe de Gestión`,
  procs:[['1. Planeación y Gestión','Planeación, avances y presentaciones.','o'],['2. Capacitación Inicial','Una carpeta por monitor en capacitación.','o'],['3. Actualización','Matriz de revisión y una carpeta por curso con seis etapas.','o'],['4. Cursos desde Cero','Una carpeta por curso nuevo.','s'],['5. Apoyos y Solicitudes','Una carpeta por apoyo o solicitud atendida.','s'],['6. Gestión de Flujo de Trabajo','Plantillas de Articulate, Genially y guionización.','o'],['7. Exploración de Chatbot','Pruebas y documentación del chatbot.','s'],['8. Exploración de Nuevos Cursos','Posibles cursos a virtualizar.','s'],['9. Proyectos de Estudio Junior','Una carpeta por proyecto o monitor junior.','o'],['10. Informe de Gestión','Matriz preliminar, informe y productos finales.','o']],
  files:['Planeación, bitácora de cursos y registro de proyectos virtualizados en 1. Planeación y Gestión.','Guiones, plantillas, enlaces y videos en la etapa correspondiente de cada proyecto.'],
  note:'Virtualización mantiene aparte un repositorio con los OVA de los cursos en la carpeta <b>Virtualización Académica</b>.'}
];
