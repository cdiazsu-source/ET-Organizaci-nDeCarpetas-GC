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
 {s:'ET',k:'et',n:5,name:'Estrategias Tecnológicas',desc:'Difusión, página web, Semana UIFCE, extensión solidaria, microtalleres y proyectos de estudio.',
  tree:`1. ET - Consentimiento
  1.1. ET - Autorizaciones Editables
  1.2. ET - Consentimientos Firmados PDF
2. ET - Difusión
  2.1. ET - Cronograma
  2.2. ET - Protocolo de Difusión
  2.3. ET - Línea de Cursos Libres
  2.4. ET - Imagen Institucional
  2.5. ET - Piezas Fondo de Pantalla
  2.6. ET - Historias
  2.7. ET - Decoración UIFCE
  2.8. ET - Boletines y Noticias UIFCE
  2.9. ET - Reels
  2.10. ET - Fotos UIFCE
  2.11. ET - Stand de Difusión UIFCE
3. ET - Página Web
  3.1. ET - Blog UIFCE
  3.2. ET - Micrositio
4. ET - Semana UIFCE
  4.1. ET - Hackatón
5. ET - Extensión Solidaria
6. ET - Microtalleres
  6.1. ET - Manual de Microtalleres
  6.n. ET - [Nombre del Microtaller]
7. ET - Proyectos de Estudio
  7.n. ET - [Nombre del Proyecto]
8. ET - Informe de Gestión
  8.1. ET - Power BI`,
  procs:[['1. Consentimiento','Autorizaciones de uso de imagen, editables y firmadas en PDF.','o'],['2. Difusión','Cronograma, protocolos, piezas, historias, reels, fotos, boletines y stand.','o'],['3. Página Web','Blog y micrositio de la UIFCE.','o'],['4. Semana UIFCE','Propuestas, presupuesto, anexos y una carpeta por evento.','s'],['5. Extensión Solidaria','Propuesta de extensión solidaria y sus anexos.','s'],['6. Microtalleres','Manual y una carpeta por microtaller dictado.','o'],['7. Proyectos de Estudio','Una carpeta por proyecto de estudio.','o'],['8. Informe de Gestión','Datos de Power BI, informe y presentación.','o']],
  files:['Lista de monitores y plantilla de autorización en 1. Consentimiento.','Enlaces de difusión en 2. Difusión; diagnóstico web en 3. Página Web.','Control de microtalleres y formatos de inscripción en 6. Microtalleres.']},
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
  files:['Planeación, bitácora de cursos y registro de proyectos virtualizados en 1. Planeación y Gestión.','Guiones, plantillas, enlaces y videos en la etapa correspondiente de cada proyecto.']}
];
