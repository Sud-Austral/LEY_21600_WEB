const mockDataResponse = { /* ... (Mismo objeto de datos de la versión anterior) ... */
      leyesRelacionadas : {},
      titulos: [
        { "id": 1, "numero": "I", "nombre": "DISPOSICIONES GENERALES", "orden": 1 },
        { "id": 2, "numero": "II", "nombre": "DEL SERVICIO DE BIODIVERSIDAD Y ÁREAS PROTEGIDAS", "orden": 2 },
        { "id": 3, "numero": "III", "nombre": "INSTRUMENTOS DE CONSERVACIÓN DE LA BIODIVERSIDAD", "orden": 3 },
        { "id": 4, "numero": "IV", "nombre": "DEL SISTEMA NACIONAL DE ÁREAS PROTEGIDAS", "orden": 4 },
        { "id": 5, "numero": "V", "nombre": "DE LA FISCALIZACIÓN, INFRACCIONES, SANCIONES Y RECLAMACIONES", "orden": 5 },
        { "id": 6, "numero": "VI", "nombre": "MODIFICACIONES A DIVERSOS CUERPOS LEGALES", "orden": 6 },
        { "id": 99, "numero": "TRANSITORIAS", "nombre": "DISPOSICIONES TRANSITORIAS", "orden": 99 }
        ],
      parrafos: [
        { "id": 1, "titulo_id": 1, "numero": "", "nombre": "Disposiciones Generales", "orden": 1 },
        { "id": 2, "titulo_id": 2, "numero": "1°", "nombre": "Normas generales", "orden": 1 },
        { "id": 3, "titulo_id": 2, "numero": "2°", "nombre": "De la organización del Servicio", "orden": 2 },
        { "id": 4, "titulo_id": 2, "numero": "3°", "nombre": "Del patrimonio", "orden": 3 },
        { "id": 5, "titulo_id": 2, "numero": "4°", "nombre": "Del régimen del personal", "orden": 4 },
        { "id": 6, "titulo_id": 3, "numero": "1°", "nombre": "Disposiciones generales", "orden": 1 },
        { "id": 7, "titulo_id": 3, "numero": "2°", "nombre": "Sistema de información y monitoreo de la biodiversidad", "orden": 2 },
        { "id": 8, "titulo_id": 3, "numero": "3°", "nombre": "Planificación para la conservación de la biodiversidad", "orden": 3 },
        { "id": 9, "titulo_id": 3, "numero": "4°", "nombre": "Instrumentos para la conservación de ecosistemas", "orden": 4 },
        { "id": 10, "titulo_id": 3, "numero": "5°", "nombre": "Instrumentos para la protección y manejo sustentable de humedales", "orden": 5 },
        { "id": 11, "titulo_id": 3, "numero": "6°", "nombre": "Instrumentos para la conservación de especies y su variabilidad genética", "orden": 6 },
        { "id": 12, "titulo_id": 3, "numero": "7°", "nombre": "Fondo Nacional de la Biodiversidad", "orden": 7 },
        { "id": 13, "titulo_id": 3, "numero": "8°", "nombre": "Instrumentos económicos de conservación de la biodiversidad", "orden": 8 },
        { "id": 14, "titulo_id": 4, "numero": "1°", "nombre": "Del Sistema Nacional de Áreas Protegidas", "orden": 1 },
        { "id": 15, "titulo_id": 4, "numero": "2°", "nombre": "Categorías de áreas protegidas", "orden": 2 },
        { "id": 16, "titulo_id": 4, "numero": "3°", "nombre": "De la creación y modificación de las áreas protegidas del Estado", "orden": 3 },
        { "id": 17, "titulo_id": 4, "numero": "4°", "nombre": "De la administración de las áreas protegidas del Estado", "orden": 4 },
        { "id": 18, "titulo_id": 4, "numero": "5°", "nombre": "Planes de manejo de áreas protegidas", "orden": 5 },
        { "id": 19, "titulo_id": 4, "numero": "6°", "nombre": "De las funciones y atribuciones de los guardaparques dentro de las áreas protegidas del Estado", "orden": 6 },
        { "id": 20, "titulo_id": 4, "numero": "7°", "nombre": "De las concesiones y permisos en áreas protegidas del Estado", "orden": 7 },
        { "id": 21, "titulo_id": 4, "numero": "8°", "nombre": "Áreas protegidas privadas", "orden": 8 },
        { "id": 22, "titulo_id": 4, "numero": "9°", "nombre": "Disposiciones comunes a las áreas protegidas", "orden": 9 },
        { "id": 23, "titulo_id": 5, "numero": "1°", "nombre": "De la fiscalización", "orden": 1 },
        { "id": 24, "titulo_id": 5, "numero": "2°", "nombre": "De las infracciones", "orden": 2 },
        { "id": 25, "titulo_id": 5, "numero": "3°", "nombre": "De las sanciones", "orden": 3 },
        { "id": 26, "titulo_id": 5, "numero": "4°", "nombre": "Actos previos al procedimiento sancionatorio", "orden": 4 },
        { "id": 27, "titulo_id": 5, "numero": "5°", "nombre": "Del procedimiento sancionador", "orden": 5 },
        { "id": 28, "titulo_id": 5, "numero": "6°", "nombre": "De las reclamaciones", "orden": 6 },
        { "id": 29, "titulo_id": 5, "numero": "7°", "nombre": "Normas generales", "orden": 7 },
        { "id": 30, "titulo_id": 6, "numero": "", "nombre": "Modificaciones a diversos cuerpos legales", "orden": 1 },
        { "id": 31, "titulo_id": 99, "numero": "", "nombre": "Disposiciones Transitorias", "orden": 1 }
        ],
      articulos: [
                    {
                        "id": 1,
                        "parrafo_id": 1,
                        "numero": "1°",
                        "nombre": "Objeto",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "La presente ley tiene por objeto la conservación de la diversidad biológica y la protección del patrimonio natural del país, a través de la preservación, restauración y uso sustentable de genes, especies y ecosistemas. No se incluyen dentro del objeto la sanidad vegetal y animal ni la prevención y combate de incendios forestales, materias que se rigen por las respectivas normas legales. La presente ley contempla, entre otras medidas que se detallan, la conservación in situ y ex situ, la preservación y uso sustentable de genes, especies y ecosistemas y la restauración. Sin perjuicio de lo establecido en los incisos anteriores, las acciones que tengan por objeto la sanidad vegetal y animal y la prevención y combate de incendios forestales deberán tener en consideración y priorizar el debido resguardo de la diversidad biológica."
                    },
                    {
                        "id": 2,
                        "parrafo_id": 1,
                        "numero": "2°",
                        "nombre": "Principios",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Las políticas, planes, programas, normas, acciones y actos administrativos que se dicten o ejecuten, en el marco de la presente ley, para la protección y conservación de la biodiversidad, se regirán por los siguientes principios: a) Principio de coordinación: la implementación de instrumentos de conservación de la biodiversidad y de los servicios ecosistémicos deberá realizarse de manera coordinada entre los distintos órganos competentes. b) Principio de jerarquía: los impactos significativos sobre la biodiversidad deberán ser evitados, mitigados, reparados y, en último término, compensados. c) Principio de no regresión: los actos administrativos no admitirán modificaciones que signifiquen una disminución en los niveles de protección de la biodiversidad alcanzados previamente. d) Principio participativo: es deber del Estado contar con los mecanismos que permitan la participación de toda persona y las comunidades en la conservación de la biodiversidad, tanto a nivel nacional, como regional y local. El Servicio promoverá la participación ciudadana en materias como la generación de información, la educación y la gestión de las áreas protegidas, entre otras. e) Principio de precaución: cuando haya un riesgo o peligro de daño grave o irreversible de diversidad biológica, la falta de certeza científica no deberá utilizarse como razón para postergar la adopción de medidas para evitar dichos riesgos o peligros o impedir los efectos adversos. f) Principio de prevención: todas las medidas destinadas al cumplimiento del objeto de esta ley deberán propender a evitar efectos perjudiciales para la biodiversidad del país. g) Principio de responsabilidad: quien cause daño a la biodiversidad o a uno o más de sus componentes será responsable del mismo en conformidad a la ley. h) Principio de sustentabilidad: el cumplimiento del objeto de esta ley exige un uso sostenible y equitativo de genes, especies y ecosistemas, para el bienestar de las generaciones presentes y futuras. i) Principio de información: es deber del Estado facilitar y promover el acceso a la información sobre biodiversidad del país y, especialmente, el conocimiento sobre los servicios ecosistémicos y su valoración. j) Principio de valoración de los servicios ecosistémicos: el proceso de toma de decisiones para la conservación de la biodiversidad deberá considerar la identificación y valoración de los servicios ecosistémicos y, cuando sea posible, su cuantificación."
                    },
                    {
                        "id": 3,
                        "parrafo_id": 1,
                        "numero": "3°",
                        "nombre": "Definiciones",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Para los efectos de esta ley, se entenderá por: 1) Área degradada: ecosistema o parte de él cuyos elementos físicos, químicos o biológicos han sido alterados de manera significativa con pérdida de biodiversidad, o presenta alteración de su funcionamiento, estructura o composición, causados por actividades o perturbaciones antropogénicas que son frecuentes o severas, de acuerdo al procedimiento de declaración que establezca el reglamento a que se refiere el artículo 32. 2) Área protegida: espacio geográfico específico y delimitado, reconocido mediante decreto supremo del Ministerio del Medio Ambiente, con la finalidad de asegurar, en el presente y a largo plazo, la preservación y conservación de la biodiversidad del país, así como la protección del patrimonio natural, cultural y del valor paisajístico contenidos en dicho espacio. 3) Área protegida del Estado: área protegida creada en espacios de propiedad fiscal o en bienes nacionales de uso público, incluyendo la zona económica exclusiva. 4) Área protegida privada: área protegida creada en espacios de propiedad privada y reconocida por el Estado conforme a las disposiciones de la presente ley. 5) Biodiversidad o diversidad biológica: la variedad de los organismos vivos que forman parte de todos los ecosistemas terrestres y acuáticos. Incluye la diversidad dentro de una misma especie, entre especies y entre ecosistemas y sus interacciones. 6) Conservación de la biodiversidad: conjunto de políticas, estrategias, planes, programas y acciones destinadas a la mantención de la estructura, composición y función de los ecosistemas mediante la protección, preservación, restauración, o uso sustentable de uno o más componentes de la diversidad biológica. 7) Conservación in situ: la conservación de los componentes de la biodiversidad biológica en sus hábitats naturales. 8) Conservación ex situ: la conservación de los componentes de la biodiversidad biológica fuera de sus hábitats naturales. 9) Corredor biológico: un espacio que conecta paisajes, ecosistemas y hábitats, facilitando el desplazamiento de las poblaciones y el flujo genético de las mismas, que permite asegurar el mantenimiento de la biodiversidad y procesos ecológicos y evolutivos y evitar la fragmentación de hábitats. 10) Diversidad genética: variación en la composición genética de los individuos dentro de una población, entre poblaciones de una misma especie o entre especies diferentes. 11) Ecosistema: complejo dinámico de comunidades vegetales, animales y de microorganismos y su medio no viviente que interactúan como una unidad funcional. 12) Ecosistema amenazado: ecosistema que presenta riesgos que pueden producir disminución en su extensión o cambios en su composición, estructura o función, conforme al procedimiento de clasificación según el estado de conservación a que se refiere el artículo 30. 13) Especie endémica: especie nativa que se distribuye únicamente en un territorio o un área geográfica determinada y que no habita naturalmente en otro lugar. 14) Especie exótica: una especie, subespecie o taxón inferior, que se encuentra fuera de su distribución natural, incluyendo cualquier parte de ella, tales como gametos, semillas, huevos o propágulos de tales especies, que pueden sobrevivir y reproducirse. 15) Especie exótica invasora: especie exótica cuyo establecimiento o expansión amenaza ecosistemas, hábitats o especies, por ser capaz de producir daño a uno o más componentes del ecosistema. 16) Especie nativa: especie que se encuentra dentro de su rango de distribución natural, histórica o actual, de acuerdo con su potencial de dispersión natural. 17) Hábitat: lugar o tipo de ambiente en el que vive naturalmente un organismo o una población. Comprende las condiciones presentes en una zona determinada que permiten presencia, supervivencia y reproducción de un organismo o población. 18) Humedal: extensiones de marismas, pantanos y turberas, o superficies cubiertas de aguas, sean éstas de régimen natural o artificial, permanentes o temporales, estancadas o corrientes, dulces, salobres o saladas, incluidas las extensiones de agua marina cuya profundidad en marea baja no exceda los seis metros. 19) Paisaje de conservación: área que posee un patrimonio natural y valores culturales y paisajísticos asociados de especial interés regional o local para su conservación y que, en el marco de un acuerdo promovido por uno o más municipios, es gestionado a través de un acuerdo de adhesión voluntaria entre los miembros de la comunidad local. 20) Plan de manejo: instrumento de gestión ambiental basado en la mejor evidencia posible, que establece metas, principios, objetivos, criterios, medidas, plazos y responsabilidades para la gestión adaptativa de la biodiversidad. 21) Plan de manejo para la conservación: plan de manejo destinado a preservar, evitar la degradación, restaurar o favorecer el uso sustentable de un ecosistema amenazado al que se refiere el artículo 31. 22) Plan de manejo de áreas protegidas: plan de manejo destinado a resguardar el patrimonio natural de las áreas protegidas. 23) Plan de recuperación, conservación y gestión de especies: plan de manejo destinado a mejorar el estado de conservación de una o más especies clasificadas de conformidad a lo establecido en el artículo 37 de la ley N° 19.300. 24) Plan de restauración ecológica: plan de manejo destinado a reponer o reparar un área degradada a una calidad similar a la que tenía con anterioridad a su pérdida, disminución o menoscabo. 25) Plan de prevención, control y erradicación de especies exóticas invasoras: instrumento de gestión destinado a evitar, prevenir el ingreso, detener la propagación o erradicar especies exóticas invasoras. 26) Preservación: cuidado y mantención de las condiciones de no intervención de la diversidad biológica, de manera que sea posible su evolución y desarrollo natural. 27) Recurso genético: es el material genético de valor real o potencial. 28) Reserva de la biósfera: área de ecosistemas terrestres, costeros o marinos, o una combinación de los mismos, reconocida internacionalmente en el marco del Programa del Hombre y la Biósfera de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura, UNESCO, como parte de la Red Mundial de Reservas de la Biósfera. 29) Servicio: el Servicio de Biodiversidad y Áreas Protegidas. 30) Servicios ecosistémicos: contribución directa o indirecta de los ecosistemas al bienestar humano. 31) Sitio prioritario: área de valor ecológico, terrestre o acuática, marina o continental identificado por su aporte a la representatividad ecosistémica, su singularidad ecológica o por constituir hábitats de especies amenazadas, priorizada para la conservación de su biodiversidad por el Servicio. 32) Uso sustentable: utilización de componentes de la biodiversidad de un modo y a un ritmo que no ocasione la disminución a largo plazo de la diversidad biológica, con lo cual se mantienen las posibilidades de ésta de satisfacer las necesidades y las aspiraciones de las generaciones actuales y futuras. 33) Zona de amortiguación: espacio ubicado en torno a un área protegida, debidamente delimitada de acuerdo a criterios científico-técnicos, cuyo uso podría ser parcialmente restringido en virtud de lo que establezcan los instrumentos de ordenamiento territorial pertinentes, destinado a absorber potenciales impactos negativos y fomentar efectos positivos de actividades para la conservación de tal área. 34) Turismo ambientalmente responsable: aquel que se desarrolla en una modalidad de bajo impacto sobre el entorno natural y sociocultural, con respeto de los objetivos de la categoría del área protegida respectiva, su plan de manejo, el respectivo programa de uso público y las comunidades locales y comunidades indígenas que integran su territorio."
                    },
                    {
                        "id": 4,
                        "parrafo_id": 2,
                        "numero": "4°",
                        "nombre": "Servicio de Biodiversidad y Áreas Protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Créase el Servicio de Biodiversidad y Áreas Protegidas, cuyo objeto será la conservación de la biodiversidad del país, a través de la gestión para la preservación, restauración y uso sustentable de genes, especies y ecosistemas. El Servicio será funcionalmente descentralizado, contará con personalidad jurídica y patrimonio propio, y estará sujeto a la supervigilancia del Presidente de la República a través del Ministerio del Medio Ambiente. Se desconcentrará territorialmente a través de direcciones regionales y, en caso de ser necesario, de oficinas provinciales o locales. El Servicio estará afecto al Sistema de Alta Dirección Pública establecido en el Título VI de la ley Nº 19.882, que regula nueva política de personal a los funcionarios públicos que indica."
                    },
                    {
                        "id": 5,
                        "parrafo_id": 2,
                        "numero": "5°",
                        "nombre": "Funciones y atribuciones",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Serán funciones y atribuciones del Servicio: a) Ejecutar las políticas, planes y programas dictados en conformidad a la letra i) del artículo 70 de la ley N° 19.300. b) Gestionar el Sistema Nacional de Áreas Protegidas, administrar las áreas protegidas del Estado y supervisar la administración de las áreas protegidas privadas, en conformidad al Título IV, así como fiscalizar las actividades que se realicen en ellas, en conformidad al Título V. c) Promover, coordinar, implementar, elaborar y realizar estudios y programas de investigación conducentes, entre otros, a conocer la biodiversidad y su estado, los servicios ecosistémicos que provee, las amenazas que la afectan, su vulnerabilidad al cambio climático y las acciones prioritarias para su conservación. d) Promover, diseñar e implementar redes de monitoreo de la biodiversidad y administrar un sistema de información de la biodiversidad, en conformidad al Párrafo 2° del Título III. e) Elaborar, ejecutar y coordinar la implementación, así como velar y fiscalizar el cumplimiento de los planes de recuperación, conservación y gestión de especies; los planes de prevención, control y erradicación de especies exóticas invasoras; los planes de manejo para la conservación; y los planes de restauración ecológica, en conformidad a los Párrafos 4° y 6° del Título III. Todo lo anterior es sin perjuicio de la normativa especial vigente en materia de sanidad vegetal y animal. Además, deberán suscribirse los convenios de encomendamientos de funciones cuando corresponda. Proteger y promover la conservación de los polinizadores nativos. f) Apoyar técnicamente, y coordinar la conservación de especies fuera de sus hábitats y genes con bancos de germoplasma, jardines botánicos, conservatorios botánicos y centros de reproducción de fauna nativa, entre otros, a fin de contribuir con la gestión para la conservación de la biodiversidad. g) Proponer al Servicio Agrícola y Ganadero criterios para el uso e internación de plaguicidas, fertilizantes y sustancias químicas, a fin de resguardar la biodiversidad. h) Promover, apoyar y ejecutar acciones de educación, sensibilización, información, capacitación y comunicación sobre el valor de la biodiversidad, sus amenazas y su relación con el cambio climático. i) Pronunciarse sobre los impactos de los proyectos o actividades sobre la biodiversidad, incluyendo las condiciones o medidas para mitigar, restaurar o compensar esos impactos, en el marco del sistema de evaluación de impacto ambiental. j) Administrar el Fondo Nacional de la Biodiversidad. k) Otorgar o reconocer certificados a actividades, prácticas o sitios, por su contribución a la conservación de la biodiversidad y la provisión de servicios ecosistémicos, en conformidad al artículo 51. l) Aplicar y fiscalizar normas sobre protección, rescate, rehabilitación, reinserción, observación y monitoreo de fauna nativa terrestre y acuática de especies nativas de mamíferos, anfibios, reptiles y aves, sin perjuicio de las normas sobre descarte y captura incidental contenidas en la ley Nº 18.892, General de Pesca y Acuicultura, cuyo texto refundido, coordinado y sistematizado fue establecido por el decreto supremo Nº 430, del Ministerio de Economía, Fomento y Reconstrucción, promulgado el año 1991 y publicado el año 1992, sus reglamentos y las medidas de administración adoptadas conforme a dichas normas, y sin perjuicio de las normas establecidas en el Título IV de la Ley sobre Caza. m) Fiscalizar la aplicación de la ley Nº 18.892, General de Pesca y Acuicultura, cuyo texto refundido, coordinado y sistematizado fue establecido por el decreto supremo Nº 430, del Ministerio de Economía, Fomento y Reconstrucción, promulgado el año 1991 y publicado el año 1992, sus reglamentos y las medidas de administración pesquera en las áreas protegidas. n) Participar en la definición de criterios para el otorgamiento de autorizaciones de repoblación o siembra de especies hidrobiológicas; pronunciarse respecto de la identificación de las áreas susceptibles de ser declaradas preferenciales; fiscalizar la aplicación de la Ley sobre Pesca Recreativa, todas ellas en las áreas protegidas. ñ) Autorizar la caza o captura en áreas que forman parte del Sistema Nacional de Áreas Protegidas y fiscalizar el cumplimiento de la Ley sobre Caza en tales áreas. o) Fiscalizar el cumplimiento de la Ley sobre Recuperación del Bosque Nativo y Fomento Forestal en las áreas que forman parte del Sistema Nacional de Áreas Protegidas. p) Realizar publicaciones científicas o de divulgación, pudiendo percibir el producto que se obtenga de su venta. q) Celebrar convenios con organismos e instituciones públicas y privadas, para colaborar en materias de su competencia. r) Integrar y participar en la formación y constitución de personas jurídicas de derecho privado, sin fines de lucro, a que se refiere el Título XXXIII del Libro Primero del Código Civil, cuya finalidad fundamental sea la conservación de la biodiversidad. Del mismo modo, el Servicio está facultado para participar en la disolución y liquidación de las entidades de que forme parte, con arreglo a sus estatutos. El Servicio, mediante resolución, nombrará a uno o más representantes, los que estarán facultados para participar en los órganos de dirección y de administración que contemplen los estatutos de las personas jurídicas que se constituyan en virtud de lo dispuesto en esta disposición. s) Proponer mejoras a la regulación relativa a las autorizaciones aplicables al Sistema Nacional de Áreas Protegidas, y acompañar el diagnóstico y medidas para su perfeccionamiento normativo y su adecuada implementación, conforme a los principios de esta ley y los criterios definidos en el Título VII de la Ley Marco de Autorizaciones Sectoriales. El diagnóstico y las propuestas resultantes relativas al otorgamiento de autorizaciones serán presentadas ante la Oficina de Autorizaciones Sectoriales e Inversión. t) Registrar profesionales y entidades técnicas reconocidas para que, a requerimiento de quien solicite una autorización de su competencia, informe al Servicio sobre el análisis de cumplimiento de una o más condiciones o requisitos técnicos exigidos normativamente para su otorgamiento, los que no tendrán carácter vinculante. El registro que disponga para estos efectos deberá mantenerse actualizado y publicado en su respectivo sitio web. Las características específicas de los profesionales y entidades técnicas reconocidas, así como los requisitos y procedimientos para ser incorporadas al registro por el Servicio, serán establecidos a través de un reglamento expedido por el Ministerio del Medio Ambiente, de acuerdo con lo dispuesto en el Título IV Párrafo 2° de la Ley Marco de Autorizaciones Sectoriales. u) Las demás que establezcan las leyes."
                    },
                    {
                        "id": 6,
                        "parrafo_id": 3,
                        "numero": "6°",
                        "nombre": "Administración y dirección superior",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "La administración y dirección superior del Servicio estará a cargo de un Director Nacional, quien será el Jefe Superior del Servicio y tendrá su representación legal. El Director Nacional será designado mediante el Sistema de Alta Dirección Pública, regulado en la ley Nº 19.882. Un reglamento expedido a través del Ministerio del Medio Ambiente determinará la organización interna del Servicio de Biodiversidad y Áreas Protegidas y las denominaciones y funciones que correspondan a cada una de sus unidades, de acuerdo a lo dispuesto en la ley N° 18.575, orgánica constitucional de Bases Generales de la Administración del Estado, cuyo texto refundido, coordinado y sistematizado ha sido fijado mediante el decreto con fuerza de ley Nº 1, del Ministerio Secretaría General de la Presidencia, promulgado el año 2000 y publicado el año 2001."
                    },
                    {
                        "id": 7,
                        "parrafo_id": 3,
                        "numero": "7°",
                        "nombre": "Atribuciones y funciones del Director Nacional",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Corresponderá al Director Nacional: a) Designar y contratar personal, y poner término a sus servicios por resolución fundada, de acuerdo con la legislación vigente. b) Representar judicial y extrajudicialmente al Servicio. c) Representar al Servicio ante organizaciones nacionales e internacionales cuyas funciones y/o competencias se relacionen directamente con el objeto del mismo. d) Delegar en funcionarios de la institución las funciones y atribuciones que estime conveniente de conformidad a la ley, con excepción de aquellas establecidas en las letras a) y g) del presente artículo. e) Coordinar las funciones del Servicio con otros servicios públicos con competencia ambiental. f) Ejecutar los actos y celebrar los contratos que sean necesarios o conducentes a la obtención de los objetivos del Servicio, ya sea con personas naturales o jurídicas, nacionales o extranjeras, de derecho público o privado. En ejercicio de esta atribución podrá contratar a profesionales y entidades técnicamente idóneas con el objeto de contar con asesoría o apoyo para la sistematización y análisis de información contenida en solicitudes de autorizaciones de su competencia, conforme a lo establecido en el Título IV Párrafo 1° de la Ley Marco de Autorizaciones Sectoriales y la demás normativa aplicable. g) Crear y presidir comités o subcomités, para que desarrollen estudios, análisis o resuelvan consultas, con el fin de dar cumplimiento al objeto del Servicio. h) Ejercer las demás funciones que le encomiende la ley."
                    },
                    {
                        "id": 8,
                        "parrafo_id": 3,
                        "numero": "8°",
                        "nombre": "Direcciones Regionales",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El Servicio de Biodiversidad y Áreas Protegidas se desconcentrará territorialmente a través de Direcciones Regionales del Servicio de Biodiversidad y Áreas Protegidas. En cada región del país habrá un Director Regional, quien estará afecto al segundo nivel jerárquico del Sistema de Alta Dirección Pública de la ley N° 19.882."
                    },
                    {
                        "id": 9,
                        "parrafo_id": 3,
                        "numero": "9°",
                        "nombre": "Comité Científico Asesor",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Créase un Comité Científico como un organismo asesor y de consulta en las materias científicas y técnicas necesarias para el adecuado ejercicio de las funciones y atribuciones del Servicio. El Comité tendrá carácter paritario y estará integrado por nueve miembros que serán representantes de instituciones académicas, científicas y de investigación, dedicadas al conocimiento o conservación de la biodiversidad, tanto terrestre como acuática, marina y continental. Al menos seis de sus integrantes deberán desempeñarse en regiones distintas a la Metropolitana de Santiago, para lo que se deberá tener en consideración la representación de las distintas zonas geográficas del país, incluyendo las zonas extremas y los territorios especiales. Los integrantes del Comité cumplirán sus funciones ad honorem, deberán respetar el principio de probidad en el ejercicio de su cargo, durarán tres años en él y podrán ser designados por nuevos períodos. La renovación de los consejeros será por parcialidades. Los integrantes del Comité deberán inhabilitarse de intervenir en los asuntos que se sometieren a su conocimiento, en caso que incurran personalmente en alguno de los motivos de abstención contemplados en el artículo 12 de la ley N° 19.880, que establece bases de los procedimientos administrativos que rigen los actos de los órganos de la Administración del Estado. Será causal de remoción del cargo el haber intervenido en aquellos asuntos respecto de los cuales debieran haberse inhabilitado. Un reglamento dictado por el Ministerio del Medio Ambiente fijará las normas para la conformación del comité, las causales de inhabilidad e incompatibilidad para integrarlo, su funcionamiento y toma de decisiones."
                    },
                    {
                        "id": 10,
                        "parrafo_id": 4,
                        "numero": "10°",
                        "nombre": "Patrimonio del Servicio",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El patrimonio del Servicio estará formado por: a) Los recursos que se le asignen anualmente en la Ley de Presupuestos del Sector Público; b) Los bienes muebles e inmuebles, corporales o incorporales, que se le transfieran o adquiera a cualquier título; c) Las donaciones, herencias y legados que reciba, las que estarán exentas del trámite de la insinuación a que se refiere el artículo 1401 del Código Civil y del impuesto a las herencias, asignaciones y donaciones establecido en la ley N° 16.271, de Impuesto a las Herencias, Asignaciones y Donaciones; d) Los aportes de cooperación internacional que reciba para el desarrollo de sus actividades; e) Los ingresos propios que obtenga por las tarifas que cobre por el acceso a las áreas protegidas del Estado y por las concesiones y permisos que en ellas se otorguen, y f) El producto de la venta de bienes que realice y otros ingresos propios que perciba en el ejercicio de sus funciones. El Servicio estará sujeto a las normas del decreto ley N° 1.263, orgánico de Administración Financiera del Estado, del Ministerio de Hacienda, de 1975, y sus disposiciones complementarias."
                    },
                    {
                        "id": 11,
                        "parrafo_id": 5,
                        "numero": "11°",
                        "nombre": "Régimen laboral",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El personal se regirá por las normas del Código del Trabajo, por las disposiciones del decreto ley N° 249, del Ministerio de Hacienda, promulgado el año 1973 y publicado el año 1974, que fija escala única de sueldos para el personal que señala, y las especiales de la presente ley."
                    },
                    {
                        "id": 12,
                        "parrafo_id": 5,
                        "numero": "12°",
                        "nombre": "Distribución de la jornada laboral",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Los trabajadores que, por razones del buen funcionamiento del Servicio, deban cumplir funciones en lugares apartados de centros urbanos, o zonas que impliquen riesgo o aislamiento, y aquellos que deban cumplir funciones de riesgo, podrán regirse por una jornada de trabajo diferente a la indicada en el artículo 21 del citado decreto ley N° 249, de 1974, en lo relativo a la distribución horaria. Una resolución dictada por el Director Nacional del Servicio regulará la distribución de la jornada diaria y semanal, considerando debidamente el descanso compensatorio de los días festivos y feriados. Además, los trabajadores señalados en el inciso anterior podrán pactar una jornada bisemanal de trabajo en las condiciones indicadas en el artículo 39 del Código del Trabajo."
                    },
                    {
                        "id": 13,
                        "parrafo_id": 5,
                        "numero": "13°",
                        "nombre": "Normas de probidad",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El personal del Servicio estará sujeto a las normas de probidad y los deberes y prohibiciones establecidos en el Título III del decreto con fuerza de ley N° 1, del Ministerio Secretaría General de la Presidencia, promulgado el año 2000 y publicado el año 2001, que fija el texto refundido, coordinado y sistematizado de la ley N° 18.575, orgánica constitucional de Bases Generales de la Administración del Estado, y en el Título II de la ley N° 20.880, sobre Probidad en la Función Pública y Prevención de los Conflictos de Intereses. Asimismo, estará sujeto a responsabilidad administrativa, sin perjuicio de la responsabilidad civil o penal que pudiere afectarle por los actos realizados en el ejercicio de sus funciones. Le serán también aplicables las normas contenidas en los artículos 61, 90, 90 A, 90 B, 91 y 92 del decreto con fuerza de ley N° 29, del Ministerio de Hacienda, promulgado el año 2004 y publicado el año 2005, que fija el texto refundido, coordinado y sistematizado de la ley N° 18.834, sobre Estatuto Administrativo."
                    },
                    {
                        "id": 14,
                        "parrafo_id": 5,
                        "numero": "14°",
                        "nombre": "Del ingreso al Servicio",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El personal del Servicio se seleccionará mediante concurso público. Por resolución fundada del Director Nacional, se podrán utilizar concursos internos de promoción, los que, en todo caso, deberán garantizar la debida transparencia y objetividad, basándose en la evaluación de los méritos e idoneidad del postulante. Excepcionalmente, podrá contratarse trabajadores a plazo fijo, obra o faena, sin requerir de concurso público, especialmente para trabajar en áreas protegidas. Al Director Nacional, o a quien éste le delegue facultades, de conformidad al inciso final del artículo 41 del decreto con fuerza de ley N° 1, del Ministerio Secretaría General de la Presidencia, promulgado el año 2000 y publicado el año 2001, que fija el texto refundido, coordinado y sistematizado de la ley N° 18.575, orgánica constitucional de Bases Generales de la Administración del Estado, le corresponderá suscribir los contratos de trabajo del personal seleccionado conforme a los incisos anteriores, los que deberán ser aprobados por resolución."
                    },
                    {
                        "id": 15,
                        "parrafo_id": 5,
                        "numero": "15°",
                        "nombre": "Del sistema de evaluación",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "El personal del Servicio estará sujeto a un sistema de evaluación de desempeño conforme a las reglas y criterios que al efecto determine un reglamento expedido por el Ministerio del Medio Ambiente, el que, además, deberá ser suscrito por el Ministro de Hacienda. Las evaluaciones servirán de base para la selección del personal a capacitar, el desarrollo de la carrera funcionaria, la remoción o el término del contrato de trabajo en su caso."
                    },
                    {
                        "id": 16,
                        "parrafo_id": 5,
                        "numero": "16°",
                        "nombre": "De la destinación y la subrogación",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "El Director Nacional del Servicio, sin perjuicio de lo que establezca el contrato, tendrá la facultad para aplicar las normas relativas a las destinaciones, que serán fundadas y siempre que no produzcan menoscabo al trabajador, comisiones de servicio y cometidos funcionarios de los artículos 73 a 78 del decreto con fuerza de ley N° 29, del Ministerio de Hacienda, promulgado el año 2004 y publicado el año 2005, que fija el texto refundido, coordinado y sistematizado de la ley N° 18.834, sobre Estatuto Administrativo. Para estos efectos, los viáticos se pagarán conforme al decreto con fuerza de ley N° 262, del Ministerio de Hacienda, de 1977, y al decreto supremo N° 1, del Ministerio de Hacienda, de 1991, o el texto que lo reemplace. Igualmente podrán, en los casos que fuere procedente, aplicarse las normas relativas a subrogación contempladas en el Párrafo 4 del Título III del citado decreto con fuerza de ley N° 29, del Ministerio de Hacienda, promulgado el año 2004 y publicado el año 2005."
                    },
                    {
                        "id": 17,
                        "parrafo_id": 5,
                        "numero": "17°",
                        "nombre": "Capacitación",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "Para efectos de la adecuada aplicación de las normas sobre capacitación, previstas en los artículos 179 y siguientes del Código del Trabajo, el Director Nacional aprobará anualmente mediante resolución, los programas destinados a la capacitación y perfeccionamiento del personal del Servicio, los que, en todo caso, deberán ajustarse a los recursos que para estos efectos contemple la Ley de Presupuestos del Sector Público. Las capacitaciones y perfeccionamientos serán considerados para el desarrollo de la carrera funcionaria."
                    },
                    {
                        "id": 18,
                        "parrafo_id": 5,
                        "numero": "18°",
                        "nombre": "Del Servicio de Bienestar",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "El personal del Servicio tendrá derecho a afiliarse a servicios de bienestar, en los casos y condiciones que establezcan sus estatutos. El Servicio efectuará los aportes de bienestar respecto de cada funcionario, sin sobrepasar el máximo legal de los mismos. El personal traspasado desde la Corporación Nacional Forestal o de su sucesor legal, y del Ministerio del Medio Ambiente, al Servicio de Biodiversidad y Áreas Protegidas, en virtud de lo establecido en el numeral tercero y noveno del artículo primero transitorio, mantendrán su derecho a estar afiliados en el servicio de bienestar de la Corporación Nacional Forestal o de su sucesor legal o del Ministerio del Medio Ambiente, según corresponda. El Servicio efectuará los aportes de bienestar a la Corporación Nacional Forestal o a su sucesor legal o al Ministerio del Medio Ambiente, según corresponda, respecto de cada funcionario o funcionaria señalado en este artículo, sin sobrepasar el máximo legal de ellos."
                    },
                    {
                        "id": 19,
                        "parrafo_id": 5,
                        "numero": "19°",
                        "nombre": "De la responsabilidad disciplinaria",
                        "tipo_articulo": "permanente",
                        "orden": 9,
                        "texto_completo": "La responsabilidad disciplinaria del personal del Servicio por los actos realizados en el ejercicio de sus funciones podrá hacerse efectiva por la autoridad respectiva, de acuerdo al procedimiento establecido en los artículos 126 y siguientes del decreto con fuerza de ley N° 29, del Ministerio de Hacienda, promulgado el año 2004 y publicado el año 2005, que fija el texto refundido, coordinado y sistematizado de la ley N° 18.834, sobre Estatuto Administrativo. Dicho procedimiento será aplicable sea que se trate de infracciones a cualquiera de los cuerpos legales de carácter público o a las disposiciones del Código del Trabajo, aplicables al personal, sin perjuicio de las acciones, reclamos y recursos que los trabajadores puedan ejercer ante la Contraloría General de la República y ante los tribunales de justicia."
                    },
                    {
                        "id": 20,
                        "parrafo_id": 5,
                        "numero": "20°",
                        "nombre": "De las infracciones cometidas por el personal y sus sanciones",
                        "tipo_articulo": "permanente",
                        "orden": 10,
                        "texto_completo": "Las infracciones de los deberes y prohibiciones establecidos en el Título III de la ley N° 18.575, orgánica constitucional de Bases Generales de la Administración del Estado o en el respectivo contrato de trabajo en que incurra el personal del Servicio serán sancionadas con alguna de las siguientes medidas: a) Censura. b) Multa. c) Suspensión del empleo desde treinta días a tres meses, y d) Remoción. Las medidas disciplinarias mencionadas en las letras a), b) y c) precedentes se aplicarán tomando en cuenta la gravedad de la falta cometida, la eventual reiteración de la conducta, así como las circunstancias atenuantes y agravantes que arroje el mérito de los antecedentes, de conformidad a lo dispuesto en los artículos 121 y siguientes del decreto con fuerza de ley N° 29, del Ministerio de Hacienda, promulgado el año 2004 y publicado el año 2005, que fija el texto refundido, coordinado y sistematizado de la ley N° 18.834, sobre Estatuto Administrativo. La suspensión consiste en la privación temporal del empleo con goce de un cincuenta a un setenta por ciento de las remuneraciones y sin poder hacer uso de los derechos y prerrogativas inherentes al cargo. La remoción es la decisión de la autoridad facultada para contratar, de poner término a la relación laboral del afectado. La remoción procederá toda vez que los hechos constitutivos de la infracción vulneren gravemente el principio de probidad y cuando se incurra en alguna de las circunstancias previstas en el artículo 160 del Código del Trabajo. Las infracciones a la ley N° 20.880, sobre Probidad en la Función Pública y Prevención de los Conflictos de Intereses, serán sancionadas de acuerdo a las reglas establecidas en dicha ley."
                    },
                    {
                        "id": 21,
                        "parrafo_id": 5,
                        "numero": "21°",
                        "nombre": "Del término de la relación laboral",
                        "tipo_articulo": "permanente",
                        "orden": 11,
                        "texto_completo": "La relación laboral terminará por aplicación de alguna de las causales previstas en los artículos 159, 160 y 161 del Código del Trabajo. Para el caso del inciso final del artículo anterior, la relación laboral concluirá por aplicación de la causal prevista en el artículo 160, número 1, letra a), del Código del Trabajo. Para el caso de evaluación deficiente de su desempeño, se podrá aplicar la causal del artículo 160, número 7, del mismo cuerpo legal. Tratándose de la causal a que se refiere el artículo 161 del Código del Trabajo, su procedencia será determinada por el Director Nacional del Servicio, o a quien éste le delegue funciones, y deberá ser siempre fundada en razones vinculadas al buen, oportuno y eficiente funcionamiento del Servicio. No se podrá pactar el pago de indemnizaciones por causas distintas a las indicadas en los artículos 161, 162 y 163 del Código del Trabajo, y en ningún caso se podrá alterar el monto que entregue la base de cálculo dispuesta en dichas normas."
                    },
                    {
                        "id": 22,
                        "parrafo_id": 5,
                        "numero": "22°",
                        "nombre": "Del reglamento de concursos y promoción",
                        "tipo_articulo": "permanente",
                        "orden": 12,
                        "texto_completo": "Un reglamento dictado por el Ministerio del Medio Ambiente contendrá las normas complementarias orientadas a asegurar la objetividad, transparencia, no discriminación, calidad técnica y operación de los concursos para el ingreso, para la promoción y para cualquiera otra finalidad con que éstos se realicen."
                    },
                    {
                        "id": 23,
                        "parrafo_id": 6,
                        "numero": "23°",
                        "nombre": "Instrumentos de conservación de la biodiversidad",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "A fin de cumplir con su objeto, tanto dentro como fuera de las áreas protegidas, el Servicio estará facultado para diseñar, implementar y dar seguimiento a la aplicación de los instrumentos de conservación de la biodiversidad que señala este Título. El Servicio acogerá todos los instrumentos de conservación de la biodiversidad, incluido el Sistema Nacional de Áreas Protegidas, bajo un enfoque ecosistémico en el territorio nacional."
                    },
                    {
                        "id": 24,
                        "parrafo_id": 7,
                        "numero": "24°",
                        "nombre": "Sistema de Información de la Biodiversidad",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Servicio elaborará y administrará un sistema de información de la biodiversidad, el que almacenará y manejará datos de observación sobre ecosistemas y especies; información georreferenciada sobre su entorno abiótico, acuático y terrestre; imágenes espaciales; servicios ecosistémicos; áreas protegidas, ecosistemas amenazados, áreas degradadas, sitios prioritarios; y toda otra información relevante para la gestión de la conservación de la biodiversidad. Este sistema contendrá los inventarios de ecosistemas terrestres, marinos, acuáticos continentales, incluidos los humedales y glaciares; de especies y su variabilidad genética. Dichos inventarios serán elaborados por el Servicio, el que deberá considerar la información que le proporcionen los servicios públicos con competencia en manejo de recursos naturales. La información contenida en este sistema será de acceso público, y deberá asegurar la interoperabilidad y evitar la duplicidad con aquélla contenida en el Sistema Nacional de Información Ambiental, establecido en el artículo 31 ter de la ley N° 19.300. El Servicio podrá, fundadamente, mantener en reserva información relativa a la distribución de especies, cuya publicidad, comunicación o conocimiento sea susceptible de poner en riesgo su conservación o de sus poblaciones."
                    },
                    {
                        "id": 25,
                        "parrafo_id": 7,
                        "numero": "25°",
                        "nombre": "Monitoreo de la biodiversidad",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El Servicio definirá e implementará uno o más programas de monitoreo de los ecosistemas terrestres y acuáticos, marinos y continentales, así como de las especies y su variabilidad genética. El monitoreo tendrá por objeto generar información sistemática sobre la biodiversidad en sus distintos niveles, su estado, servicios ecosistémicos, entre otros, a escalas nacional, regional y local. Para tal efecto, el Servicio procurará que, a través del monitoreo, se genere información para el Sistema de Información de la Biodiversidad a que se refiere el artículo 24. El monitoreo se hará en consistencia con el conocimiento científico, lo que deberá considerar el conocimiento tradicional de comunidades indígenas y locales, y en base a los protocolos que elaborará el Servicio. El monitoreo podrá ser realizado directamente por el Servicio, o bien encomendarse por éste a otros órganos de la Administración del Estado. El Servicio podrá, asimismo, celebrar convenios con instituciones académicas o científicas calificadas para la realización de monitoreos, así como incluir datos que aporten terceros, los que serán validados de acuerdo a protocolos que dicte el mismo Servicio."
                    },
                    {
                        "id": 26,
                        "parrafo_id": 7,
                        "numero": "26°",
                        "nombre": "Requerimiento de información",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El Servicio podrá requerir a otros órganos de la Administración del Estado la información necesaria para elaborar y mantener el Sistema de Información de la Biodiversidad. El Servicio podrá requerir información a privados cuando ésta hubiere sido generada a partir de fondos públicos."
                    },
                    {
                        "id": 27,
                        "parrafo_id": 7,
                        "numero": "27°",
                        "nombre": "Informes sobre el estado de la biodiversidad",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El Servicio colaborará con el Ministerio del Medio Ambiente en la elaboración del informe cuatrienal y el reporte anual referidos en la letra ñ) del artículo 70 de la ley N° 19.300, en lo que respecta a la biodiversidad."
                    },
                    {
                        "id": 28,
                        "parrafo_id": 8,
                        "numero": "28°",
                        "nombre": "Planificación ecológica",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Con el objetivo de definir prioridades de conservación de la biodiversidad, el Ministerio del Medio Ambiente elaborará, periódicamente, una planificación ecológica del país, que incluirá: a) La identificación de los sitios prioritarios en el país, sobre la base de los inventarios de ecosistemas terrestres y acuáticos, la clasificación de ecosistemas y las cuencas hidrográficas del país. Para efectuar dicha identificación, el Servicio podrá utilizar como referencia el Anexo I del Convenio sobre la Diversidad Biológica. b) La identificación de los usos del territorio, en base a la normativa vigente. c) La identificación de los procesos y categorías de actividades que tengan, o sea probable que tengan, efectos perjudiciales en la conservación de la biodiversidad en relación a determinadas áreas. d) Buenas prácticas para la conservación de la biodiversidad, que puedan ser implementadas en atención a los distintos tipos de uso del territorio. e) Otros antecedentes que proponga el Comité Científico Asesor. La planificación ecológica deberá ser considerada para la elaboración y/o actualización de instrumentos de ordenamiento territorial a que se refiere el inciso segundo del artículo 7° bis de la ley N° 19.300."
                    },
                    {
                        "id": 29,
                        "parrafo_id": 8,
                        "numero": "29°",
                        "nombre": "Sitios prioritarios",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Los sitios prioritarios que el Ministerio identifique en el marco de la planificación ecológica serán categorizados como tales bajo criterios técnico-científicos. El Servicio mantendrá un registro espacial actualizado de los sitios prioritarios del país, en el marco del sistema de información referido en el artículo 24. Los sitios prioritarios podrán ser objeto de uno o más instrumentos para la conservación de la biodiversidad establecidos en la presente ley. El Ministerio del Medio Ambiente determinará mediante decreto supremo los sitios prioritarios. Un reglamento dictado por el Ministerio establecerá el procedimiento y los criterios para la declaración de un sitio prioritario, los que deberán contemplar la participación de las comunidades científicas, locales e indígenas y de autoridades locales, regionales y nacionales. El reglamento, además, definirá qué se entiende por cambios significativos en las características ecológicas del sitio, que darán lugar a la infracción establecida en el literal a) del artículo 116. En todo caso, se entenderá que las conductas referidas en el artículo señalado producen cambios significativos en las características ecológicas del sitio cuando se alteren las condiciones que hacen posible la presencia y desarrollo de las especies y ecosistemas."
                    },
                    {
                        "id": 30,
                        "parrafo_id": 9,
                        "numero": "30°",
                        "nombre": "Clasificación de ecosistemas según estado de conservación",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Servicio evaluará y propondrá al Ministerio del Medio Ambiente una clasificación de los ecosistemas del país según su estado de conservación, sobre la base de antecedentes científico-técnicos. Un reglamento dictado por el Ministerio del Medio Ambiente establecerá las categorías y el procedimiento para clasificar los ecosistemas según estado de conservación, debiendo incluir una o más categorías de amenaza. Para tal efecto se utilizarán como referentes el pronunciamiento del Comité Científico Asesor y recomendaciones de organismos internacionales que dicten pautas en la materia, tal como la Unión Internacional para la Conservación de la Naturaleza. El procedimiento de clasificación contemplará el pronunciamiento del Consejo de Ministros para la Sustentabilidad y el Cambio Climático."
                    },
                    {
                        "id": 31,
                        "parrafo_id": 9,
                        "numero": "31°",
                        "nombre": "Planes de manejo para la conservación de ecosistemas amenazados",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El Servicio elaborará planes de manejo para ecosistemas amenazados o parte de ellos. Dichos planes serán de cumplimiento obligatorio para los servicios públicos competentes y deberán establecer requisitos para la elaboración de planes de manejo de recursos naturales o para el otorgamiento de permisos sectoriales; establecer condiciones o exigencias al uso del suelo, a la aplicación de sustancias químicas, a la alteración de sistemas fluviales, lagos y humedales, al uso de aguas subterráneas o a la explotación de especies; así como realizar acciones de restauración o implementar otros instrumentos de conservación de la biodiversidad, a fin de asegurar la conservación del ecosistema amenazado. La aplicación de estos planes podrá afectar proyectos o actividades que cuenten con Resolución de Calificación Ambiental, en cuyo caso deberán someterse al procedimiento contemplado en el artículo 25 quinquies de la ley Nº 19.300, si resultara aplicable. En caso que el plan de manejo para la conservación contemple acciones recaídas en recursos naturales renovables regulados por la Ley sobre Recuperación del Bosque Nativo y Fomento Forestal o la Ley General de Pesca y Acuicultura, el Servicio deberá trabajar conjuntamente con el servicio público sectorial competente, a fin de asegurar una adecuada coordinación tanto en la elaboración como en la implementación y fiscalización del plan. Un reglamento dictado por el Ministerio del Medio Ambiente regulará el contenido y el procedimiento para la dictación de los planes. Dicho procedimiento deberá contemplar el trabajo conjunto con los órganos públicos con competencia en la materia objeto del plan, y la publicación de dichos planes en la página web del Servicio y en un medio de difusión regional del territorio en que se aplique."
                    },
                    {
                        "id": 32,
                        "parrafo_id": 9,
                        "numero": "32°",
                        "nombre": "Áreas Degradadas",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Sin perjuicio de la clasificación a que se refiere el artículo 30, el Servicio, mediante resolución, podrá declarar áreas determinadas como áreas degradadas, a fin de recuperar su estructura, composición y funciones. Un reglamento dictado por el Ministerio del Medio Ambiente y suscrito también por el Ministro de Agricultura y el Ministro de Economía, Fomento y Turismo establecerá los criterios científico- técnicos y el procedimiento para la identificación de tales áreas."
                    },
                    {
                        "id": 33,
                        "parrafo_id": 9,
                        "numero": "33°",
                        "nombre": "Planes de restauración ecológica",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El Servicio elaborará planes para la restauración ecológica de las áreas determinadas que hayan sido declaradas como áreas degradadas. Los planes de restauración ecológica contendrán las medidas o acciones que se llevarán a cabo para restaurar, las que podrán ser activas o pasivas; las metas y objetivos de restauración; la ubicación de los ecosistemas que serán objeto de la restauración; sus componentes degradados; las amenazas causantes de la degradación y las exigencias para eliminarlas o limitarlas; el plazo estimado para su implementación, y el diseño del monitoreo y medidas de seguimiento, incluyendo indicadores de efectividad de las medidas o acciones, y una estimación de los costos asociados, en un marco de manejo adaptativo. En caso que el plan de restauración ecológica recaiga sobre recursos naturales renovables regulados por la Ley sobre Recuperación del Bosque Nativo y Fomento Forestal o la Ley General de Pesca y Acuicultura, el Servicio deberá trabajar conjuntamente con el servicio público sectorial competente, a fin de asegurar una adecuada coordinación tanto en la elaboración como en la implementación y fiscalización del plan. El procedimiento para la dictación de los planes de restauración ecológica que recaigan fuera de las áreas protegidas del Estado deberá contemplar la participación de la comunidad local, de las municipalidades y de gobiernos regionales, así como de los órganos públicos competentes y la publicación de dichos planes en la página web del Servicio y en un medio de difusión nacional y regional del territorio en que se aplique. Corresponderá al Servicio ejecutar los planes de restauración ecológica. Cuando los planes contemplen medidas o acciones de otros órganos públicos, el Servicio coordinará con éstos su implementación. En caso que el plan de restauración recaiga en predios de propiedad privada, se requerirá el consentimiento y participación de los respectivos propietarios."
                    },
                    {
                        "id": 34,
                        "parrafo_id": 9,
                        "numero": "34°",
                        "nombre": "Iniciativas privadas de conservación marina",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "El Servicio prestará apoyo técnico a iniciativas que se desarrollen en ecosistemas marinos, costeros e islas oceánicas que sean objeto de concesión o destinación por parte del Ministerio de Defensa Nacional y que en sus respectivos instrumentos de manejo se establezca la conservación de la biodiversidad como objetivo. Dicho apoyo se podrá otorgar tanto en la elaboración como en la implementación de tales instrumentos de manejo, de acuerdo a su disponibilidad presupuestaria."
                    },
                    {
                        "id": 35,
                        "parrafo_id": 9,
                        "numero": "35°",
                        "nombre": "Paisajes de conservación",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "Las municipalidades, de manera individual o asociada, podrán solicitar al Servicio el reconocimiento de un paisaje de conservación. Para ello deberán acompañar un informe técnico que dé cuenta de los valores naturales, culturales y paisajísticos asociados, la forma de gestión y las cartas de consentimiento de quienes adscriban al paisaje de conservación. El reconocimiento de un paisaje de conservación se efectuará a través de una resolución del Servicio. Reconocido un paisaje de conservación, el o los municipios responsables de su gestión deberán elaborar una propuesta de plan de manejo del mismo, el que será aprobado mediante resolución del Servicio. En dicho plan se establecerán los lineamientos para la gestión sustentable del área por parte de quienes adscriban al paisaje de conservación. En aquellos casos en que la municipalidad no tenga los recursos necesarios tanto financieros como de capital humano para el informe técnico y para la elaboración del plan de manejo, podrá solicitar al Servicio que designe a un funcionario para que acompañe a la municipalidad en el proceso de reconocimiento de un paisaje de conservación o en la elaboración del respectivo plan de manejo."
                    },
                    {
                        "id": 36,
                        "parrafo_id": 9,
                        "numero": "36°",
                        "nombre": "Reservas de la biósfera",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "El Servicio promoverá, cuando corresponda, el uso sustentable de los recursos naturales y la utilización de los instrumentos de conservación de la biodiversidad en las reservas de la biósfera declaradas en el marco del Programa del Hombre y la Biósfera, de UNESCO, a fin de conservar la biodiversidad y mejorar el bienestar social y económico de las comunidades que en ellas habitan. Para esto elaborará un plan de gestión, que tendrá que ser actualizado cada cinco años, en el que se establecerán las medidas e instrumentos a aplicar. El Servicio podrá conformar uno o más comités de gestión, integrados tanto por representantes de organizaciones públicas como de organizaciones de la comunidad existentes al interior de la reserva de la biósfera, que colaboren con la elaboración y el monitoreo del cumplimiento del plan de gestión. Cuando la zona núcleo de una reserva de la biósfera constituya un área protegida, el Servicio procurará integrar el manejo de dicha área con la gestión local de la reserva. El Servicio otorgará, asimismo, asesoramiento técnico en estas áreas en conformidad a los objetivos planteados por el Programa del Hombre y la Biósfera."
                    },
                    {
                        "id": 37,
                        "parrafo_id": 9,
                        "numero": "37°",
                        "nombre": "Humedales de importancia internacional o sitios Ramsar",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "Los sitios declarados en el marco de la Convención relativa a los Humedales de Importancia Internacional especialmente como Hábitat de Aves Acuáticas o sitios Ramsar, serán acogidos a una de las categorías de protección establecidas en el artículo 56, mediante un decreto supremo dictado por el Ministerio del Medio Ambiente, y bastará para ello un informe técnico del Servicio que indique la categoría correspondiente. En caso que el sitio Ramsar sea de propiedad privada, se requerirá el consentimiento del propietario para proceder a su afectación como área protegida privada. El Servicio promoverá la conservación y el uso sustentable de los humedales de importancia internacional o sitios Ramsar, y considerará la dimensión ecológica, económica y social, de manera de contribuir a la protección del patrimonio ambiental nacional, regional y local, y al bienestar de las comunidades locales."
                    },
                    {
                        "id": 38,
                        "parrafo_id": 9,
                        "numero": "38°",
                        "nombre": "Compensaciones de biodiversidad",
                        "tipo_articulo": "permanente",
                        "orden": 9,
                        "texto_completo": "El Ministerio dictará un reglamento que definirá criterios y estándares a efectos de determinar, en el marco de la evaluación ambiental de proyectos y actividades, si las medidas de compensación propuestas resultan apropiadas para hacerse cargo de los efectos, características o circunstancias establecidos en el artículo 11 de la ley N° 19.300, los que deberán cumplir con las reglas para la compensación de la biodiversidad adecuada, que se señalan en los incisos siguientes. Las medidas de compensación de biodiversidad consistirán en acciones de restauración ecológica. Excepcionalmente las medidas de compensación podrán consistir en acciones de preservación, cuando se dé cumplimiento al criterio de adicionalidad, demostrando que la biodiversidad preservada se encuentra amenazada. Serán apropiadas aquellas medidas de compensación que sean aplicadas de conformidad al principio de jerarquía y que den cuenta, al menos, de una pérdida neta cero y preferiblemente una ganancia neta de biodiversidad, de acuerdo a criterios de equivalencia y adicionalidad, que aseguren resultados medibles. La equivalencia estará dada por equivalencia en los atributos de composición, estructura y función en los distintos niveles de organización de la biodiversidad de los elementos impactados y compensados. Las medidas de compensación sólo podrán recaer en impactos residuales o remanentes, una vez que se han establecido medidas para evitar, minimizar o reparar los impactos. No se podrán establecer medidas de compensación cuando la afectación recaiga en componentes, estructuras o funciones de la biodiversidad con características de irreemplazabilidad o vulnerabilidad. En el mismo reglamento, el Servicio propondrá los criterios y estándares sobre estudios de línea base en biodiversidad y determinación de impactos residuales; criterios de equivalencia y adicionalidad para compensaciones de biodiversidad; límites de la compensación y protocolos para el monitoreo de tales compensaciones. El Servicio promoverá, además, la coordinación entre las medidas de compensación de diversos proyectos o actividades, con el objetivo de obtener ganancias en biodiversidad eficientes, eficaces y permanentes."
                    },
                    {
                        "id": 39,
                        "parrafo_id": 10,
                        "numero": "39°",
                        "nombre": "Inventario de humedales",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Servicio llevará un inventario nacional de los humedales del país, en el marco del sistema de información referido en el artículo 24. Dicho inventario contendrá, al menos, localización georreferenciada, límites del cuerpo de agua y de su cuenca hidrográfica expresados en coordenadas, superficie y tipo de humedal. Este inventario deberá sujetarse a lo dispuesto en el inciso segundo del citado artículo 24."
                    },
                    {
                        "id": 40,
                        "parrafo_id": 10,
                        "numero": "40°",
                        "nombre": "Criterios para el uso sustentable de humedales",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El Servicio establecerá criterios indicativos para el uso sustentable de humedales, a fin de resguardar sus características ecológicas, su composición, estructura y funcionamiento y mantener el régimen hidrológico, tanto superficial como subterráneo. Los humedales deberán asimismo ser reconocidos en los instrumentos de ordenamiento territorial señalados en el inciso segundo del artículo 7° bis de la ley N° 19.300."
                    },
                    {
                        "id": 41,
                        "parrafo_id": 10,
                        "numero": "41°",
                        "nombre": "Permiso para la alteración física de humedales",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Se prohíbe la alteración física de los humedales que constituyan sitios prioritarios. Toda alteración física de otros humedales inventariados requerirá un permiso previo del Servicio. Se entenderá por alteración física la extracción de caudales, extracción de áridos, alteración de la barra terminal, alteración de la vegetación azonal hídrica y ripariana, extracción de cubierta vegetal de turberas, modificación de la superficie de humedales urbanos, entre otros similares. Dicho permiso tendrá por objeto asegurar que la alteración física no modifique de manera permanente la estructura y funciones del humedal."
                    },
                    {
                        "id": 42,
                        "parrafo_id": 11,
                        "numero": "42°",
                        "nombre": "Planes de recuperación, conservación y gestión de especies",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Servicio elaborará planes de recuperación, conservación y gestión de las especies que hayan sido clasificadas en alguna categoría de conservación, de conformidad con el artículo 37 de la ley Nº 19.300. Un reglamento dictado por el Ministerio del Medio Ambiente establecerá las categorías a las que se aplicarán los planes y su contenido, así como el procedimiento para su dictación."
                    },
                    {
                        "id": 43,
                        "parrafo_id": 11,
                        "numero": "43°",
                        "nombre": "Contenido del plan",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El plan de recuperación, conservación o gestión de especies considerará, entre otros, a lo menos: 1) El diagnóstico del estado de la especie. 2) La determinación de su hábitat. 3) La determinación de las amenazas reales o probables de que es objeto. 4) Las acciones de recuperación, conservación o gestión. 5) Un plan de metas medibles."
                    },
                    {
                        "id": 44,
                        "parrafo_id": 11,
                        "numero": "44°",
                        "nombre": "Monumentos naturales para la protección de especies",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El Ministerio del Medio Ambiente, en consulta al Ministerio de Agricultura o al Ministerio de Economía, Fomento y Turismo, según corresponda, podrá declarar como monumento natural a una o más especies o especímenes de plantas, algas, hongos, líquenes o animales silvestres, entre otros, con base en su interés estético o a su valor histórico o científico. Se prohíbe intimidar, capturar, extraer, maltratar, herir, dar muerte, pescar, cazar, cortar, arrancar, extraer, mutilar o descepar toda especie declarada monumento natural. El Servicio podrá, excepcionalmente, autorizar las actividades anteriores para fines de investigación científica o inspección gubernamental."
                    },
                    {
                        "id": 45,
                        "parrafo_id": 11,
                        "numero": "45°",
                        "nombre": "Prevención, control y erradicación de especies exóticas y exóticas invasoras",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Sin perjuicio de la normativa especial vigente en materia de sanidad vegetal y animal, y siempre que no se trate de poblaciones o especímenes actualmente en cultivo o crianza, el Servicio podrá: a) Proponer al Ministerio del Medio Ambiente la nómina de especies calificadas como especies exóticas invasoras, estén o no asilvestradas en el país, en base a fundamentos técnico-científicos y acorde con el procedimiento que sea definido para ello. b) Elaborar y ejecutar planes de prevención, control y erradicación de especies exóticas invasoras definidas en la nómina señalada en la letra anterior. Toda persona estará obligada a facilitar las acciones o medidas que contemplen dichos planes. En ejecución de dichos planes, el Servicio estará facultado para ingresar a inmuebles públicos o privados y registrar naves, aeronaves, vehículos, personas, animales, bolsos, cajas, envases o embalajes. Para el cumplimiento de lo anterior, en caso de ser necesario y mediante resolución fundada del Servicio, se podrá solicitar el auxilio de la fuerza pública. Un reglamento del Ministerio del Medio Ambiente señalará la forma y condiciones en que se realizará el ingreso a inmuebles públicos o privados, así como el contenido mínimo que deberán contener los planes. En la elaboración de tales planes se consultará a los órganos de la Administración del Estado competentes. c) Ejecutar acciones de control y erradicación que se requieran con urgencia para evitar la propagación de especies exóticas invasoras que puedan afectar irreparablemente ecosistemas o especies endémicas o nativas y sus hábitats, previo aviso y en coordinación con otros órganos de la Administración del Estado. d) Fomentar y ejecutar acciones de educación, sensibilización, información, capacitación y comunicación sobre la materia. e) Autorizar o denegar la pesca, la colecta, la captura y la caza de las especies exóticas, así como la recolección de sus partes o derivados, dentro de las áreas protegidas. f) Pescar, colectar, cazar y capturar especies exóticas dentro de las áreas que conforman el Sistema Nacional de Áreas Protegidas, con fines de control o erradicación, así como intervenir sus nidos, madrigueras, áreas de descanso, dormideros y sitios reproductivos. g) Definir, en conjunto con el Servicio Agrícola y Ganadero o la Subsecretaría de Pesca y Acuicultura, según corresponda, zonas del país que sean vulnerables frente al riesgo de una o más especies exóticas invasoras definidas en la nómina señalada en el literal a) del presente artículo, en función de lo cual podrá prohibir o regular el ingreso de tales especies a dicho territorio. Para tal efecto, el Servicio podrá establecer barreras de bioseguridad en cualquier parte del territorio nacional y estará facultado para decomisar y destruir todo aquel organismo que haya sido declarado previamente como especie invasora respecto del área en cuestión. h) Autorizar o denegar, en conjunto con el Servicio Agrícola y Ganadero o la Subsecretaría de Pesca y Acuicultura, según corresponda, la internación de especies exóticas al país que sean calificadas como invasoras o de riesgo para la biodiversidad. i) Autorizar o denegar el transporte o traslado de una o más especies exóticas invasoras definidas en la nómina señalada en el literal a) del presente artículo a zonas que hubiesen sido o sean declaradas como vulnerables a dichas especies. j) Definir los criterios de análisis de riesgo de daño a la biodiversidad, los que deberán ser aplicados por el Servicio Agrícola y Ganadero o la Subsecretaría de Pesca y Acuicultura, según corresponda, previo a autorizar la internación de especies exóticas al país."
                    },
                    {
                        "id": 46,
                        "parrafo_id": 12,
                        "numero": "46°",
                        "nombre": "Fondo Nacional de la Biodiversidad",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Créase el Fondo Nacional de la Biodiversidad, destinado a financiar proyectos de conservación, principalmente fuera de las áreas protegidas del Estado, tales como actividades de investigación, capacitación, monitoreo, restauración, control de amenazas, acciones de conservación de especies fuera de sus hábitats y ecosistemas, prácticas productivas sustentables, entre otras actividades de gestión privada para la conservación de la biodiversidad y la mantención o recuperación de servicios ecosistémicos."
                    },
                    {
                        "id": 47,
                        "parrafo_id": 12,
                        "numero": "47°",
                        "nombre": "Beneficiarios",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Podrán beneficiarse del Fondo las personas naturales y las personas jurídicas sin fines de lucro."
                    },
                    {
                        "id": 48,
                        "parrafo_id": 12,
                        "numero": "48°",
                        "nombre": "Administración",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El Fondo será administrado por el Servicio y su funcionamiento será regulado mediante resolución. El Servicio podrá establecer líneas de financiamiento, de acuerdo a las prioridades de conservación."
                    },
                    {
                        "id": 49,
                        "parrafo_id": 12,
                        "numero": "49°",
                        "nombre": "Patrimonio",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El Fondo Nacional de la Biodiversidad estará formado por: a) Las donaciones, herencias y legados que reciba, las que estarán exentas del trámite de la insinuación a que se refiere el artículo 1401 del Código Civil y del impuesto a las herencias, asignaciones y donaciones establecido en la ley N° 16.271, de Impuesto a las Herencias, Asignaciones y Donaciones. b) Recursos destinados para este efecto, en la Ley de Presupuestos del Sector Público. c) Recursos que se le asignen en otras leyes. d) Cualquier otro aporte proveniente de entidades públicas o privadas, nacionales o extranjeras, a cualquier título."
                    },
                    {
                        "id": 50,
                        "parrafo_id": 13,
                        "numero": "50°",
                        "nombre": "Prácticas sustentables",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Con el objeto de conservar la biodiversidad, el Servicio promoverá la incorporación de prácticas sustentables, incluyendo aquellas de conservación de biodiversidad de comunidades locales y pueblos indígenas, en procesos y actividades productivas, a través de: a) La certificación y ecoetiquetado. b) La promoción de contratos de retribución por servicios ecosistémicos. c) La proposición de criterios ambientales para ser incorporados en subsidios y subvenciones sectoriales. d) La promoción de acuerdos de producción limpia, los cuales se regirán por lo establecido en el Artículo Décimo de la ley N° 20.416, que fija normas especiales para las empresas de menor tamaño. Dichas prácticas serán promovidas especialmente en sitios prioritarios, zonas de amortiguación, paisajes de conservación, áreas adscritas a derecho real de conservación, áreas importantes para la conservación de aves, y áreas claves para la biodiversidad y reservas de la biósfera."
                    },
                    {
                        "id": 51,
                        "parrafo_id": 13,
                        "numero": "51°",
                        "nombre": "Sistema de Certificación de Biodiversidad y Servicios Ecosistémicos",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Créase el Sistema de Certificación de Biodiversidad y Servicios Ecosistémicos, destinado a certificar, o reconocer certificados, a actividades, prácticas o sitios, por su contribución a la conservación de la biodiversidad y a la mantención o recuperación de servicios ecosistémicos. El sistema de certificación será administrado por el Servicio y se regirá por lo dispuesto en un reglamento dictado por el Ministerio del Medio Ambiente. Dicho reglamento regulará el ámbito de aplicación del sistema de certificación, el procedimiento de certificación y los requisitos para constituirse en entidad certificadora. La certificación será de carácter voluntario y podrán solicitarla personas naturales o jurídicas, a nivel individual o colectivo. La certificación podrá implicar obligaciones de hacer o no hacer, cuyo incumplimiento provocará la pérdida de la certificación."
                    },
                    {
                        "id": 52,
                        "parrafo_id": 13,
                        "numero": "52°",
                        "nombre": "Contrato de retribución por servicios ecosistémicos",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El contrato de retribución por servicios ecosistémicos es una convención en virtud de la cual una parte se obliga a preservar, restaurar o hacer uso sustentable de los ecosistemas, con el fin de mantener o recuperar los servicios ecosistémicos que dichos espacios proveen, a cambio de una contraprestación. El contrato se perfeccionará por escrito y contendrá los derechos y obligaciones de las partes. El Servicio llevará un registro de los contratos que cumplan con los criterios y contenidos mínimos que establecerá un reglamento."
                    },
                    {
                        "id": 53,
                        "parrafo_id": 14,
                        "numero": "53°",
                        "nombre": "Sistema Nacional de Áreas Protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Créase el Sistema Nacional de Áreas Protegidas, en adelante 'el Sistema', constituido por el conjunto de áreas protegidas, del Estado y privadas, terrestres y acuáticas, marinas, continentales e insulares. El Servicio gestionará el Sistema de manera eficaz, integral y equitativa, bajo diversas categorías de protección, considerando mecanismos de participación ciudadana, así como estrategias e instrumentos de gestión y de financiamiento, para contribuir al cumplimiento de los objetivos de conservación de la biodiversidad y del patrimonio natural y cultural del país vinculado a ésta."
                    },
                    {
                        "id": 54,
                        "parrafo_id": 14,
                        "numero": "54°",
                        "nombre": "Objetivos del Sistema",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El Sistema tendrá los siguientes objetivos: a) Asegurar de manera efectiva la conservación permanente de la biodiversidad y del patrimonio natural, paisajístico y cultural asociado a las áreas que lo conformen, incluyendo aquellos elementos relevantes para la identidad regional o local. b) Asegurar la conservación de una muestra representativa de los ecosistemas terrestres, acuáticos continentales, insulares y marinos, las especies y su diversidad genética. c) Mantener o recuperar los servicios ecosistémicos de las áreas protegidas. d) Integrar en planes, políticas e instrumentos de desarrollo nacional, regional y local, los servicios ecosistémicos de las áreas protegidas, así como vincular éstas con los instrumentos de ordenamiento territorial, asegurando la gestión sustentable de la biodiversidad y recursos naturales. e) Reconocer y facilitar las actividades educacionales, recreacionales, turísticas y culturales; facilitar el desarrollo de la investigación científica; y reconocer los valores de las áreas protegidas, de manera consistente con sus respectivos objetos de protección. f) Integrar y conectar los procesos ecológicos que se producen en el país a través de corredores biológicos, zonas de amortiguación y otros instrumentos de conservación. g) Promover la participación de las personas, comunidades locales y comunidades indígenas en la conservación y gestión de las áreas protegidas, especialmente aquellas que se encuentran aledañas o al interior de las mismas. h) Respetar, preservar y mantener los conocimientos, las innovaciones y las prácticas de las comunidades indígenas y locales que entrañen estilos tradicionales de vida pertinentes para la conservación y la utilización sostenible de los componentes de la diversidad biológica. i) Promover la generación de conocimiento, monitoreo y pronóstico de las relaciones entre biodiversidad y cambio climático, a fin de implementar oportunamente medidas de conservación y permitir la adaptación y mitigación de los efectos del cambio climático, dentro y fuera de las áreas protegidas."
                    },
                    {
                        "id": 55,
                        "parrafo_id": 14,
                        "numero": "55°",
                        "nombre": "Gestión del Sistema",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "La gestión y supervisión del Sistema Nacional de Áreas Protegidas corresponderá al Servicio. El Servicio elaborará un plan estratégico para el cumplimiento de los objetivos del Sistema, el que contendrá, al menos, lo siguiente: a) Revisión y actualización de la planificación del Sistema, incluyendo prioridades de creación, ampliación y cambios de categorías de áreas protegidas; estado de avance en el cumplimiento de metas y objetivos; y definición de los ajustes normativos necesarios para la adecuada gestión del Sistema. b) Programa de financiamiento del Sistema de acuerdo a lo que disponga la Ley de Presupuestos del Sector Público. c) Programa de fortalecimiento de capacidades. d) Programa de información, interpretación y sensibilización. e) Programa de priorización y planificación del turismo, el cual se realizará en conjunto con la Subsecretaría de Turismo. f) Programa de cooperación internacional. g) Mecanismos de seguimiento y evaluación de los programas. h) Programa de participación y vinculación comunitaria y de pueblos originarios. Con el fin de apoyar la gestión del Sistema, el Servicio podrá crear, a nivel regional, comités público-privados, de carácter consultivos, conformados por autoridades regionales, locales y jefes de servicios públicos; propietarios o administradores de áreas protegidas privadas; representantes del sector académico y de organizaciones no gubernamentales; representantes de comunidades locales e indígenas; y representantes del sector productivo. Un reglamento dictado por el Ministerio del Medio Ambiente regulará el número mínimo de integrantes, su forma de designación, y demás normas necesarias para su adecuado funcionamiento."
                    },
                    {
                        "id": 56,
                        "parrafo_id": 15,
                        "numero": "56°",
                        "nombre": "Categorías de áreas protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Sistema Nacional de Áreas Protegidas comprenderá las siguientes categorías de protección: a) Reserva de Región Virgen; b) Parque Nacional; c) Monumento Natural; d) Reserva Nacional; e) Área de Conservación de Múltiples Usos; f) Área de Conservación de Pueblos Indígenas."
                    },
                    {
                        "id": 57,
                        "parrafo_id": 15,
                        "numero": "57°",
                        "nombre": "Reserva de Región Virgen",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Denomínase Reserva de Región Virgen un área terrestre, acuática, marina, insular o continental, cualquiera sea su tamaño, en la que existen condiciones primitivas naturales, no perturbada significativamente por actividades humanas, reservada para preservar la biodiversidad, así como los rasgos geológicos o geomorfológicos y la integridad ecológica. El objetivo de esta categoría es la preservación estricta de la integridad ecológica, los rasgos naturales, la continuidad de los procesos evolutivos y la mantención de los servicios ecosistémicos que proveen. Se prohíbe en esta área la explotación de recursos naturales con fines comerciales, y no podrá efectuarse ningún tipo de actividad, salvo aquellas que se autoricen con propósitos de investigación científica, conforme al artículo 79 y siguientes."
                    },
                    {
                        "id": 58,
                        "parrafo_id": 15,
                        "numero": "58°",
                        "nombre": "Parque Nacional",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Denomínase Parque Nacional un área terrestre, acuática, marina, insular o continental, generalmente amplia, en la que existen diversos ambientes únicos o representativos del patrimonio natural del país, no alterados significativamente por la acción humana, y en que la biodiversidad o las formaciones geológicas son de especial interés educativo, científico o recreativo. El objetivo de esta categoría es la preservación del patrimonio natural junto a su valor escénico o cultural asociado, la continuidad de los procesos evolutivos y de las funciones ecológicas, junto con las poblaciones de especies y ecosistemas característicos del área. Se prohíbe en esta área la explotación de recursos naturales con fines comerciales. En los parques nacionales conformados exclusivamente por ecosistemas marinos, no podrá efectuarse ningún tipo de actividad, salvo aquellas que se autoricen con propósitos de investigación científica, educación o turismo de baja escala, conforme al artículo 79 y siguientes."
                    },
                    {
                        "id": 59,
                        "parrafo_id": 15,
                        "numero": "59°",
                        "nombre": "Monumento Natural",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Denomínase Monumento Natural un área terrestre, acuática, marina, insular o continental, generalmente reducida en extensión, caracterizada por la presencia de componentes naturales específicos, relevantes para la biodiversidad, o formaciones naturales de valor excepcional. El objetivo de esta categoría es la preservación de un componente específico de la biodiversidad o de elementos o sitios de especial interés geológico, paisajístico, educativo o científico, y los hábitats asociados a dichos elementos. Se prohíbe en esta área la explotación de recursos naturales con fines comerciales."
                    },
                    {
                        "id": 60,
                        "parrafo_id": 15,
                        "numero": "60°",
                        "nombre": "Reserva Nacional",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "Denomínase Reserva Nacional un área terrestre, acuática, marina, insular o continental, cualquiera sea su tamaño, en la que existen comunidades biológicas, especies nativas, hábitats y sitios de reproducción relevantes para la protección de determinadas especies y ecosistemas en condiciones predominantemente naturales que son relevantes para la educación, ciencia y turismo. El objetivo de esta categoría es la conservación de las comunidades biológicas, especies y hábitats, a través de una gestión activa para la recuperación, mantención y provisión de servicios ecosistémicos. En esta área podrán desarrollarse actividades de uso sustentable, siempre que no pongan en riesgo los servicios ecosistémicos que esta área provee."
                    },
                    {
                        "id": 61,
                        "parrafo_id": 15,
                        "numero": "61°",
                        "nombre": "Área de Conservación de Múltiples Usos",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "Denomínese Área de Conservación de Múltiples Usos un área terrestre, acuática, marina, insular o continental, cualquiera sea su tamaño, caracterizada por una interacción tradicional entre los seres humanos y la naturaleza, relevante para la conservación de la biodiversidad. El objetivo de esta categoría es asegurar el uso sustentable de recursos naturales y los servicios ecosistémicos, a través de un manejo integrado del área. En esta área podrán desarrollarse distintas actividades de uso sustentable, siempre que no pongan en riesgo los servicios ecosistémicos que esta área provee."
                    },
                    {
                        "id": 62,
                        "parrafo_id": 15,
                        "numero": "62°",
                        "nombre": "Área de Conservación de Pueblos Indígenas",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "Denomínase Área de Conservación de Pueblos Indígenas un área ubicada en tierras indígenas o en espacios costeros marinos de pueblos originarios, en los que existen especies nativas, hábitats y ecosistemas naturales terrestres o acuáticos, relevantes para la conservación de la biodiversidad local, regional o nacional y que son voluntariamente destinadas y administradas para lograr la conservación de la biodiversidad a largo plazo, así como la protección del patrimonio natural. El objetivo de esta categoría es la conservación de hábitats, especies, servicios ecosistémicos, y valores culturales asociados, así como los conocimientos locales y prácticas tradicionales relacionadas directamente con el uso de los recursos naturales en el área, siempre que sean compatibles con los objetivos de conservación de la misma. En esta área podrán desarrollarse distintas actividades de usos ancestrales o consuetudinarios, así como actividades de uso sustentable, siempre que no pongan en riesgo los servicios ecosistémicos que esta área provee."
                    },
                    {
                        "id": 63,
                        "parrafo_id": 15,
                        "numero": "63°",
                        "nombre": "Proyectos o actividades al interior de las áreas protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "Todo proyecto o actividad que, conforme a la legislación respectiva, se pretenda desarrollar dentro de los límites de un área protegida, deberá respetar la categoría y el objeto de protección del área y ser compatible con su plan de manejo. Para los efectos de esta ley, se entenderá por explotación de recursos naturales con fines comerciales las actividades de extracción de recursos naturales, como asimismo actividades o infraestructura industrial."
                    },
                    {
                        "id": 64,
                        "parrafo_id": 16,
                        "numero": "64°",
                        "nombre": "Creación de las áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Las áreas protegidas del Estado, en cualquiera de sus categorías, se crearán mediante decreto supremo del Ministerio del Medio Ambiente. Este decreto deberá contar con la firma del Ministro de Bienes Nacionales cuando recaiga, en todo o parte, sobre inmuebles fiscales, y con la firma del Ministro de Defensa Nacional, cuando recaiga, en todo o parte, sobre áreas que se encuentran bajo su control a través de la Subsecretaría para las Fuerzas Armadas. El decreto que crea el área protegida deberá contener, a lo menos, la categoría de protección, la superficie, la ubicación y el o los objetos de protección, y deberá adjuntar una cartografía que establezca los límites del área expresados en coordenadas. Se entenderá por objetos de protección del área, las especies, los ecosistemas, los servicios ecosistémicos o funciones o procesos ecológicos que se pretende proteger a través de la creación del área."
                    },
                    {
                        "id": 65,
                        "parrafo_id": 16,
                        "numero": "65°",
                        "nombre": "Procedimiento para la creación de las áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Las áreas protegidas podrán crearse de oficio o a solicitud de una persona o una comunidad interesada. La creación de áreas protegidas a solicitud de persona o comunidad interesada requerirá de la presentación de los antecedentes que justifiquen la protección, según lo establecido en el reglamento. El Servicio evaluará tales antecedentes en su mérito y resolverá fundadamente la admisibilidad de la solicitud. La creación de un área protegida requerirá, en todo caso, de la elaboración, por parte del Servicio, de un informe técnico que contenga las consideraciones científicas y culturales asociadas a la biodiversidad que justifican la creación del área protegida como la categoría propuesta o la implementación de otras medidas o planes para dicha área. Además, cuando la creación de un área protegida recayere en tierras indígenas o adyacentes a las mismas, se requerirá de la elaboración de un informe de los aspectos culturales, con incidencia directa en la conservación ambiental. Cuando el área se sitúe, en todo o parte, en inmuebles fiscales, se requerirá un informe previo sobre la situación de dominio, tenencia y usos al Ministerio de Bienes Nacionales. Igual informe se solicitará al Ministerio de Defensa Nacional cuando el área se sitúe, en todo o parte, en inmuebles fiscales destinados o adquiridos por organismos, servicios o instituciones del sector defensa o de bienes nacionales de uso público que se encuentren bajo el control de dicho Ministerio. Asimismo, se solicitará informe a los órganos sectoriales pertinentes para identificar las actividades que se desarrollan o se han planificado desarrollar en el área respectiva. Un reglamento dictado por el Ministerio del Medio Ambiente establecerá el procedimiento y requisitos para la creación, modificación y desafectación de las áreas protegidas, el que deberá incluir una etapa de participación ciudadana, de consulta a los gobiernos regionales y municipalidades pertinentes, así como de consulta a Organizaciones Representativas de Pueblos Indígenas susceptibles de ser afectadas directamente, de conformidad con el Convenio Nº 169 de la Organización Internacional del Trabajo y demás disposiciones aplicables. Dicho procedimiento deberá, asimismo, contemplar el pronunciamiento favorable del Consejo de Ministros para la Sustentabilidad y el Cambio Climático en su finalización."
                    },
                    {
                        "id": 66,
                        "parrafo_id": 16,
                        "numero": "66°",
                        "nombre": "Modificación y desafectación de las áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "La superficie de un área protegida, su categoría de protección, sus límites u objeto de protección sólo podrán modificar en conformidad al procedimiento señalado en el artículo anterior, previo informe favorable del Comité Científico Asesor, contemplado en el artículo 9°. Las áreas protegidas que se creen sólo perderán su calidad de tal en virtud de un decreto supremo fundado, dictado conforme a lo dispuesto en este Párrafo. En todo caso, la modificación o desafectación de un área protegida será excepcional y no podrá significar un detrimento a los objetivos del Sistema. Con todo, se deberá mantener la superficie y representatividad ecológica del Sistema. En caso de ser necesario introducir ajustes en los límites de las áreas protegidas existentes, esta circunstancia no constituirá modificación o desafectación de estas áreas. Dicho ajuste deberá fundarse en correcciones de tipo cartográficas. Lo dispuesto en los incisos primero y segundo no será aplicable a los parques nacionales ni a las reservas de región virgen, los que sólo podrán ser modificados o desafectados a través de una ley."
                    },
                    {
                        "id": 67,
                        "parrafo_id": 17,
                        "numero": "67°",
                        "nombre": "Administración",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "La administración de las áreas protegidas del Estado corresponderá al Servicio. La administración comprenderá, entre otras acciones, la elaboración, aprobación e implementación del respectivo plan de manejo y plan de uso público, el otorgamiento de los permisos, concesiones y cesiones de uso y suscripción de los convenios de gestión. Se entenderá por plan de uso público, el instrumento destinado a planificar y mejorar la calidad de atención del público, en el ámbito del turismo, la educación y la investigación científica, en forma compatible con el plan de manejo del área protegida."
                    },
                    {
                        "id": 68,
                        "parrafo_id": 17,
                        "numero": "68°",
                        "nombre": "Participación en la gestión de las áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Para la gestión de las áreas protegidas del Estado, el Servicio podrá celebrar convenios de gestión con autoridades u organizaciones locales, asociaciones o comunidades indígenas a que se refiere la ley N° 19.253, que establece normas sobre protección, fomento y desarrollo de los indígenas, y crea la Corporación Nacional de Desarrollo Indígena, u otras organizaciones. El Servicio determinará, mediante resolución fundada, la procedencia de la celebración de estos convenios si ello resultare más conveniente para la realización de sus funciones, teniendo en consideración las características del área protegida, su contexto territorial y la presencia de organizaciones locales o comunidades indígenas a que se refiere la ley N° 19.253. Tales convenios podrán referirse, entre otras materias, a la gestión de las áreas; prevención de contingencias y control de emergencias; capacitación; asesoría técnica; ejecución de programas, proyectos y acciones de desarrollo comunitario y aprovechamiento sustentable de recursos; financiamiento y mecanismos para su aplicación. Los convenios deberán contener, al menos, disposiciones referidas a la estructura de gestión, la que en todo caso será integrada por un representante del Servicio designado por el Director Nacional; sus normas de funcionamiento; los derechos y obligaciones de cada parte en la gestión del área protegida, incluyendo las acciones objeto del convenio; las reglas especiales para la elaboración del plan de manejo; los beneficios e incentivos para las partes; requerimientos de reporte e indicadores de eficacia del manejo; efectos en caso de incumplimiento; reglas para la solución de controversias, y su duración, la que no podrá exceder de cinco años renovables, previa evaluación fundada del Director Regional del Servicio."
                    },
                    {
                        "id": 69,
                        "parrafo_id": 17,
                        "numero": "69°",
                        "nombre": "Administrador de área protegida del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Las áreas protegidas del Estado contarán con un administrador, que será un funcionario del Servicio, responsable de la dirección y administración de una o más áreas. Corresponderá al administrador: a) Dar cumplimiento al plan de manejo del área. b) Supervisar y evaluar el desempeño de los guardaparques y demás personal a su cargo. c) Aplicar las medidas provisionales previstas en esta ley que sean de su competencia. d) Aprobar planes de trabajo para la administración del área. e) Informar al Director Regional del Servicio de las acciones de administración de las áreas, de conformidad con las directrices establecidas por el Servicio. f) Reportar al Director Regional respectivo cualquier evento de relevancia que ocurra al interior del área a su cargo. g) Denunciar a la autoridad competente hechos que pudiesen constituir infracciones a las leyes, que ocurran al interior del área a su cargo. h) Solicitar la intervención del personal de la Armada, Carabineros y Policía de Investigaciones, dentro del ámbito de sus respectivas atribuciones. i) Supervisar las concesiones, cesiones de uso y permisos en áreas protegidas. j) Cumplir las demás funciones que se le encomienden."
                    },
                    {
                        "id": 70,
                        "parrafo_id": 17,
                        "numero": "70°",
                        "nombre": "Tarifa",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El Servicio estará facultado para fijar las tarifas por el ingreso a las áreas protegidas que administre y por los servicios que se presten en ellas, pudiendo reducir o eximir mediante resolución fundada de dicho pago. La fijación de tarifas de ingreso deberá considerar, entre otros criterios, los siguientes: escalas diferenciadas basadas en la residencia; rango etario; tipo y calidad de las instalaciones y servicios existentes para el uso público. Estarán exentas del pago de tarifas aquellas personas pertenecientes a comunidades indígenas que ingresen a las áreas protegidas en ejercicio de usos o costumbres ancestrales, previamente definidas y declaradas admisibles en el respectivo plan de manejo o decreto de creación, que sean compatibles con los objetos de protección del área. También estarán exentos de pago de tarifa los estudiantes de establecimientos educacionales que se encuentren realizando actividades asociadas a la educación ambiental y los miembros de la Asociación de Guías y Scouts de Chile. Los recursos percibidos por este concepto se considerarán ingresos propios del Servicio."
                    },
                    {
                        "id": 71,
                        "parrafo_id": 18,
                        "numero": "71°",
                        "nombre": "Planes de manejo de áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Toda área protegida deberá contar con un plan de manejo, de carácter obligatorio, el que deberá considerar los objetos de protección y ser consistente con la categoría. El plan de manejo constituirá el marco regulatorio del área protegida, tanto para su adecuada gestión como para la definición de actividades permitidas y prohibidas en su interior. Los planes de manejo podrán dividirse en varios programas que traten funciones específicas, tales como conservación, uso público, uso sostenible, investigación científica, monitoreo, educación, aspectos regulatorios, administración y coordinación."
                    },
                    {
                        "id": 72,
                        "parrafo_id": 18,
                        "numero": "72°",
                        "nombre": "Contenidos de un plan de manejo",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Todo plan de manejo de un área protegida del Estado deberá contener, al menos, lo siguiente: a) El objeto u objetos de protección. b) El diagnóstico de presiones y amenazas sobre el o los objetos y las estrategias de manejo para mitigarlas o suprimirlas. c) El plan de monitoreo y seguimiento, con metas medibles e indicadores de seguimiento. d) Los antecedentes jurídicos del área, la normativa general del área y las normas específicas de las diferentes zonas de uso. e) La zonificación. f) La definición de la zona de amortiguación, cuando corresponda. g) Los usos o costumbres ancestrales desarrollados al interior y en las inmediaciones del área protegida. h) Las actividades compatibles e incompatibles con el área. i) Un plan de prevención y contingencia contra incendios, si corresponde."
                    },
                    {
                        "id": 73,
                        "parrafo_id": 18,
                        "numero": "73°",
                        "nombre": "Aprobación del plan de manejo",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El plan de manejo será elaborado por el Servicio, el que aprobará mediante resolución. El plazo para dictar dicho plan será de dos años desde la creación del área respectiva, y deberá revisarse al menos cada cinco años. El cumplimiento de esta disposición deberá incorporarse al respectivo convenio de desempeño que suscriba el Director Nacional del Servicio."
                    },
                    {
                        "id": 74,
                        "parrafo_id": 18,
                        "numero": "74°",
                        "nombre": "Reglamento para la elaboración y revisión de planes de manejo",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Un reglamento expedido por el Ministerio del Medio Ambiente establecerá el procedimiento para la elaboración de los planes de manejo de áreas protegidas, así como los contenidos específicos según categoría. Dicho procedimiento deberá contemplar la participación de las comunidades, incluyendo a las Organizaciones Representativas de los Pueblos Indígenas, existentes al interior y aledañas al área protegida, de los gobiernos regionales y municipalidades pertinentes. Para el caso de áreas protegidas que contemplen la gestión sostenible o recuperación de especies hidrobiológicas de interés comercial, se deberá consultar a la Subsecretaría de Pesca y Acuicultura sobre el programa respectivo. Asimismo, respecto de las áreas protegidas donde sea factible desarrollar turismo, se deberá consultar a la Subsecretaría de Turismo sobre el programa de uso público."
                    },
                    {
                        "id": 75,
                        "parrafo_id": 19,
                        "numero": "75°",
                        "nombre": "Cuerpo de guardaparques para áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Servicio contará con un cuerpo de guardaparques, que será la autoridad competente para el manejo y fiscalización de las áreas protegidas del Estado."
                    },
                    {
                        "id": 76,
                        "parrafo_id": 19,
                        "numero": "76°",
                        "nombre": "Funciones y atribuciones de los guardaparques",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Los guardaparques deberán velar por la conservación de la biodiversidad en las áreas protegidas del Estado. A los guardaparques corresponderá: a) Apoyar el proceso de elaboración del plan de manejo y plan de uso público del área, así como su aplicación. b) Instruir y exigir a los visitantes el cumplimiento de las normas, usos y restricciones establecidas en la ley y en el respectivo plan de manejo. c) Monitorear el estado de la biodiversidad del área y de sus componentes, así como registrar datos. d) Informar y educar a los visitantes y a la comunidad local acerca de los valores ecológicos, patrimoniales, culturales y paisajísticos del área y los servicios ecosistémicos que ella provee. e) Gestionar las acciones de mantención sobre los bienes que no sean objeto de una concesión. f) Controlar y fiscalizar las actividades que se desarrollen al interior del área, en lo pertinente. g) Controlar y fiscalizar el adecuado cumplimiento de las obligaciones de concesionarios, cesionarios de uso y titulares de permisos o convenios de gestión que operen al interior del área. h) Entregar copia del acta de fiscalización a presuntos infractores. i) Desarrollar acciones de vinculación con la comunidad local para facilitar el acceso a los beneficios de las áreas protegidas. j) Cumplir las demás funciones que se les encomienden dentro del ámbito de su competencia."
                    },
                    {
                        "id": 77,
                        "parrafo_id": 19,
                        "numero": "77°",
                        "nombre": "Funciones de fiscalización",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Corresponderá al Director Nacional del Servicio designar a los guardaparques que cumplirán funciones de fiscalización a que se refieren las letras f), g) y h) del artículo anterior, en las áreas protegidas del Estado. Sólo podrán cumplir funciones de fiscalización aquellos guardaparques que cumplan con los siguientes requisitos: a) Contar con licencia de enseñanza media. b) Haberse desempeñado, a lo menos, por dos años como guardaparque. c) Haber aprobado los cursos de formación y capacitación que disponga el Servicio. Los guardaparques podrán ejercer sus funciones de fiscalización en áreas protegidas privadas, previo requerimiento fundado de su administrador al Director Regional del Servicio."
                    },
                    {
                        "id": 78,
                        "parrafo_id": 19,
                        "numero": "78°",
                        "nombre": "Formación y capacitación de los guardaparques",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El Servicio contará con programas de formación y capacitación para guardaparques, conforme a las necesidades determinadas por el Servicio, dando especial énfasis a las capacitaciones con pertinencia cultural. Para ello considerará la cosmovisión de los pueblos originarios del territorio. El Servicio podrá reconocer cursos o programas de capacitación distintos de aquéllos señalados en el inciso anterior que hubiesen sido aprobados por guardaparques."
                    },
                    {
                        "id": 79,
                        "parrafo_id": 20,
                        "numero": "79°",
                        "nombre": "Concesiones en áreas protegidas del Estado",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "En beneficio de los objetivos del Sistema, el Servicio podrá otorgar concesiones en áreas protegidas situadas en bienes fiscales sólo para actividades de investigación científica, educación o turismo que requieran la instalación de infraestructura y tengan una duración mayor a un año. En aquellas áreas protegidas situadas en bienes que se encuentren bajo el control del Ministerio de Defensa Nacional a través de la Subsecretaría para las Fuerzas Armadas, el Servicio podrá ceder el uso para actividades de investigación científica, educación o turismo que requieran la instalación de infraestructura permanente y tengan una duración mayor a un año, previo informe de la Subsecretaría referida. Sólo podrán ser objeto de concesiones aquellas áreas protegidas que cuenten con plan de manejo. Las concesiones en áreas protegidas no podrán exceder de treinta años. Las reglas establecidas en la presente ley para las concesiones serán igualmente aplicables a las cesiones de uso."
                    },
                    {
                        "id": 80,
                        "parrafo_id": 20,
                        "numero": "80°",
                        "nombre": "Criterios para el otorgamiento de concesiones",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "En el otorgamiento de concesiones se tendrán en consideración los siguientes criterios: a) Deberán considerar la categoría y objeto de protección del área respectiva, y ajustarse a los planes de manejo. b) Deberán evaluar la procedencia de la consulta previa de conformidad con el Convenio N° 169 de la Organización Internacional del Trabajo, así como promover la participación de las comunidades locales e indígenas a que se refiere la ley N° 19.253, confiriendo prioridad, cuando corresponda, en el objeto de la concesión y sus beneficios. c) Deberán respetar los lugares en que se desarrollen usos o costumbres ancestrales de los pueblos indígenas que se ubiquen al interior de la concesión y que hayan sido previamente reconocidos en el decreto de creación del área o en su respectivo plan de manejo. d) En el caso de las concesiones de turismo deberán, además, desarrollarse bajo la modalidad de un turismo accesible universalmente, ambientalmente responsable, de bajo impacto sobre el entorno natural y sociocultural, y ajustadas al respectivo programa de uso público. e) En el caso de las concesiones de investigación científica deberán, además, colaborar como instrumento de apoyo y soporte científico en el proceso de toma de decisiones para la gestión y logro de los objetivos de protección definidos para las áreas protegidas, tales como las investigaciones orientadas a cubrir vacíos de información sobre biodiversidad, y aquéllas que apunten a la identificación de amenazas. Los resultados de las investigaciones realizadas deberán ser difundidos en los establecimientos educacionales aledaños a las áreas protegidas en que se sitúa la concesión. f) En el caso de las concesiones de educación deberán, además, promover programas y mecanismos a través de los cuales la comunidad tome conciencia del valor de la biodiversidad y en particular del rol de las áreas protegidas en la conservación, así como la difusión del conocimiento y capacitación en conservación de la biodiversidad. Además, deberán promover el conocimiento de la cosmovisión indígena, si la concesión se ubica en tierras indígenas."
                    },
                    {
                        "id": 81,
                        "parrafo_id": 20,
                        "numero": "81°",
                        "nombre": "Comité Técnico",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Créase un Comité Técnico, de carácter consultivo, para apoyar el proceso de otorgamiento de concesiones. Dicho Comité estará integrado por: a) El Director Nacional del Servicio, quien lo presidirá; b) Un representante del Ministerio del Medio Ambiente; c) Un representante de la Subsecretaría de Turismo; d) Un representante del Ministerio de Educación; e) Un representante del Ministerio de Ciencia, Tecnología, Conocimiento e Innovación; f) Un representante del Ministerio de las Culturas, las Artes y el Patrimonio; g) Un representante del Ministerio de Desarrollo Social y Familia, y h) Un representante del Ministerio de Bienes Nacionales. Además, para cada caso particular, deberá convocarse a: a) Un representante del consejo regional, elegido por el mismo organismo, y b) Un representante de la municipalidad en la que se encuentre la concesión. Corresponderán al Comité las siguientes funciones: a) Participar en los procesos de otorgamiento de concesiones. b) Proponer la renta concesional."
                    },
                    {
                        "id": 82,
                        "parrafo_id": 20,
                        "numero": "82°",
                        "nombre": "Fijación y distribución de la renta concesional",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "La renta concesional será fijada por el Servicio, en base a los siguientes criterios: a) Renta bruta anual del servicio o actividad a concesionar. b) Monto de la inversión a ejecutar en el área protegida. c) Evaluación de la factibilidad económica del proyecto a concesionar, considerando, entre otros, el plazo de la concesión. Las rentas percibidas por concesiones otorgadas en áreas protegidas del Estado se destinarán, entre otros, a la gestión del Sistema Nacional de Áreas Protegidas y al monitoreo del área de la concesión."
                    },
                    {
                        "id": 83,
                        "parrafo_id": 20,
                        "numero": "83°",
                        "nombre": "Concesiones a título gratuito",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "En casos excepcionales, y por razones fundadas, el Servicio podrá otorgar concesiones de investigación científica o de educación a título gratuito, en favor de municipalidades, organismos estatales que tengan patrimonio distinto del Fisco, o en que el Estado tenga aportes de capital, participación o representación, y personas jurídicas privadas sin fines de lucro. En este caso, no le será aplicable lo señalado en el artículo 88. Las concesiones otorgadas a título gratuito podrán extinguirse por la sola voluntad del Servicio, cuando a su juicio existan razones fundadas para ello."
                    },
                    {
                        "id": 84,
                        "parrafo_id": 20,
                        "numero": "84°",
                        "nombre": "Concesionario",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "El Servicio sólo podrá otorgar concesiones sobre áreas protegidas del Estado a personas jurídicas. En el caso de concesiones de turismo, el concesionario deberá actuar bajo un rol único tributario exclusivo para el desarrollo de la concesión."
                    },
                    {
                        "id": 85,
                        "parrafo_id": 20,
                        "numero": "85°",
                        "nombre": "Procedimiento para el otorgamiento de concesión",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "Las concesiones podrán otorgarse a través de licitación pública o privada, con excepción de las concesiones turísticas que siempre requerirán licitación pública. Excepcionalmente podrán otorgarse directamente, siempre que sean gratuitas y en casos debidamente fundados. Un reglamento dictado por el Ministerio del Medio Ambiente regulará el procedimiento y requisitos para el otorgamiento de concesiones en áreas protegidas del Estado, según lo dispuesto en los artículos siguientes."
                    },
                    {
                        "id": 86,
                        "parrafo_id": 20,
                        "numero": "86°",
                        "nombre": "Bases de licitación",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "Corresponderá al Servicio llevar a cabo el proceso de licitación, para lo que confeccionará las bases para el llamado. Tales bases deberán ajustarse a la categoría, objeto de protección y al respectivo plan de manejo del área, y podrán contemplar restricciones a la actividad a concesionar."
                    },
                    {
                        "id": 87,
                        "parrafo_id": 20,
                        "numero": "87°",
                        "nombre": "Adjudicación de la concesión",
                        "tipo_articulo": "permanente",
                        "orden": 9,
                        "texto_completo": "La adjudicación de la concesión se efectuará mediante resolución del Servicio, cuyo extracto deberá publicarse en el Diario Oficial. Para que la adjudicación de la concesión se entienda perfeccionada, el adjudicatario deberá suscribir con el Servicio el correspondiente contrato de concesión, el cual deberá constar en escritura pública. Asimismo, copia de la escritura pública referida será remitida al Ministerio de Bienes Nacionales para su registro de conformidad con lo dispuesto por el artículo 5° del decreto ley Nº 1.939, del Ministerio de Tierras y Colonización, de 1977. En el caso de las cesiones que otorgue el Servicio en áreas que se encuentran bajo el control del Ministerio de Defensa Nacional a través de la Subsecretaría para las Fuerzas Armadas, copia de la escritura pública referida será remitida a dicha Subsecretaría, la que dictará una resolución que individualizará las coordenadas geográficas de la cesión de uso, entendiéndose otorgada la concesión marítima, para todos los efectos."
                    },
                    {
                        "id": 88,
                        "parrafo_id": 20,
                        "numero": "88°",
                        "nombre": "Transferencia de la concesión",
                        "tipo_articulo": "permanente",
                        "orden": 10,
                        "texto_completo": "El concesionario podrá transferir la concesión. La transferencia de la concesión deberá ser total, comprendiendo todos los derechos y obligaciones que emanen del contrato de concesión. El Servicio aprobará la transferencia de la concesión, previa certificación que la transferencia es total y el adquirente cumpla con todos los requisitos y condiciones exigidos al primer concesionario, sin perjuicio de las exigencias señaladas en el respectivo reglamento, y llevará un registro de transferencias. Cualquier acto en contravención a lo dispuesto en el inciso anterior será nulo."
                    },
                    {
                        "id": 89,
                        "parrafo_id": 20,
                        "numero": "89°",
                        "nombre": "Extinción de la concesión",
                        "tipo_articulo": "permanente",
                        "orden": 11,
                        "texto_completo": "La concesión se extingue por la concurrencia de alguna de las siguientes causales: a) Vencimiento del plazo. b) Mutuo acuerdo entre las partes. c) Pérdida por parte del concesionario de los requisitos o condiciones exigidos para obtener la concesión. d) Incumplimiento de las obligaciones del concesionario, en conformidad al procedimiento sancionatorio. e) Ocurrencia de algún hecho o circunstancia que haga imposible el objeto de la concesión. f) Cancelación o extinción de la personalidad jurídica del concesionario. g) Las demás causales que se estipulen en las bases de licitación. La verificación de las causales establecidas en este artículo será declarada por el Servicio, mediante resolución fundada."
                    },
                    {
                        "id": 90,
                        "parrafo_id": 20,
                        "numero": "90°",
                        "nombre": "Mejoras",
                        "tipo_articulo": "permanente",
                        "orden": 12,
                        "texto_completo": "A falta de estipulación en contrario, todo lo edificado y plantado por el concesionario en el inmueble fiscal y todas las mejoras que le hubiere efectuado pasarán a dominio del Fisco, sin indemnización alguna, una vez extinguida la concesión."
                    },
                    {
                        "id": 91,
                        "parrafo_id": 20,
                        "numero": "91°",
                        "nombre": "Otros permisos o autorizaciones",
                        "tipo_articulo": "permanente",
                        "orden": 13,
                        "texto_completo": "La adjudicación de la concesión no liberará al concesionario de la obligación de obtener todos los permisos o autorizaciones que, conforme a la legislación vigente, sean necesarios para el desarrollo del proyecto."
                    },
                    {
                        "id": 92,
                        "parrafo_id": 20,
                        "numero": "92°",
                        "nombre": "Concesiones sectoriales",
                        "tipo_articulo": "permanente",
                        "orden": 14,
                        "texto_completo": "Las concesiones destinadas a fines distintos a los establecidos en el artículo 83 y que recaigan en áreas protegidas se regirán por sus leyes respectivas. No obstante, para el otorgamiento de concesiones se requerirá que el área cuente con un plan de manejo y que la respectiva actividad sea compatible con los objetivos de la categoría, el objeto de protección y el referido plan de manejo del área. Para tal efecto, el órgano competente requerirá del informe favorable del Servicio."
                    },
                    {
                        "id": 93,
                        "parrafo_id": 20,
                        "numero": "93°",
                        "nombre": "Prohibición de concesiones sectoriales",
                        "tipo_articulo": "permanente",
                        "orden": 15,
                        "texto_completo": "No obstante lo señalado en el artículo anterior, quedarán prohibidas las concesiones sectoriales necesarias para el desarrollo de las actividades de explotación de recursos naturales con fines comerciales definidas en el inciso segundo del artículo 63, en las reservas de región virgen, parques nacionales y monumentos naturales."
                    },
                    {
                        "id": 94,
                        "parrafo_id": 20,
                        "numero": "94°",
                        "nombre": "Permiso",
                        "tipo_articulo": "permanente",
                        "orden": 16,
                        "texto_completo": "Toda actividad de carácter transitorio o que no requiera la instalación de infraestructura permanente, que se pretenda desarrollar en un área protegida del Estado y que no sea de aquéllas referidas en el artículo 10 de la ley N° 19.300, deberá contar con un permiso del Servicio. Con todo, no requerirán del permiso anterior las actividades que sean exceptuadas expresamente en el plan de manejo del área o en el decreto de creación de la misma. Dicho permiso sólo será otorgado en caso que la actividad se ajuste a la categoría, al objeto de protección y al plan de manejo del área, y su duración no podrá exceder el plazo de un año, renovable a solicitud del interesado. El Servicio podrá establecer obligaciones o condiciones al otorgar un permiso, a fin de garantizar lo dispuesto en el inciso anterior. Asimismo, el Servicio podrá requerir una retribución monetaria o no monetaria por el otorgamiento de un permiso, cuando éste recaiga en una actividad con fines comerciales. Un reglamento dictado por el Ministerio del Medio Ambiente regulará el procedimiento para la solicitud y otorgamiento de permisos, así como los criterios para fijar la retribución."
                    },
                    {
                        "id": 95,
                        "parrafo_id": 20,
                        "numero": "95°",
                        "nombre": "Acceso a recursos genéticos",
                        "tipo_articulo": "permanente",
                        "orden": 17,
                        "texto_completo": "Sin perjuicio del permiso referido en el artículo anterior, el Servicio deberá regular las condiciones de acceso a recursos genéticos en áreas protegidas del Estado, así como los beneficios que se deriven de su utilización, a través de convenios con los solicitantes."
                    },
                    {
                        "id": 96,
                        "parrafo_id": 20,
                        "numero": "96°",
                        "nombre": "Fiscalización de la concesión o permiso",
                        "tipo_articulo": "permanente",
                        "orden": 18,
                        "texto_completo": "El Servicio tendrá la atribución de verificar, fiscalizar y exigir el cumplimiento de todas las obligaciones establecidas en el contrato de concesión o del permiso, sin perjuicio de las demás atribuciones que le correspondan de conformidad a la ley."
                    },
                    {
                        "id": 97,
                        "parrafo_id": 21,
                        "numero": "97°",
                        "nombre": "Áreas protegidas privadas",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Las áreas protegidas privadas formarán parte del Sistema Nacional de Áreas Protegidas, contribuyendo con ello a la conservación de la biodiversidad del país. Tales áreas deberán acogerse a alguna de las categorías establecidas en el artículo 56, según corresponda. Un reglamento dictado por el Ministerio del Medio Ambiente regulará el procedimiento, los plazos, las condiciones y los requisitos para la creación, modificación y desafectación de las áreas protegidas privadas, transferencias de dominio, obligaciones del propietario y administrador, así como para optar a los beneficios que se establezcan en la ley. Sin perjuicio de lo anterior, se seguirá lo dispuesto en los artículos siguientes."
                    },
                    {
                        "id": 98,
                        "parrafo_id": 21,
                        "numero": "98°",
                        "nombre": "Solicitud de creación",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El procedimiento para la creación de un área protegida privada se iniciará mediante una solicitud voluntaria que presentará el o los propietarios del área ante el Director Regional del Servicio del lugar en que se sitúe el área respectiva, de acuerdo al siguiente procedimiento: 1. Una vez presentada la solicitud, el Director Regional verificará que ésta reúna la siguiente información sobre el área: a) Ubicación y superficie, incluidos sus límites expresados en coordenadas. b) Propiedad del inmueble, con indicación de los datos de inscripción en el Conservador de Bienes Raíces respectivo. c) Características ecológicas y ambientales del área. d) Categoría de protección propuesta. e) Objetos de protección. f) Lineamientos generales de manejo. g) Administrador del área. h) Antecedentes técnicos que justifiquen su incorporación al Sistema. 2. Si la solicitud no reúne los requisitos señalados en el número precedente, se requerirá al solicitante para que subsane la falta, indicando que, si así no lo hiciere, se le tendrá por desistido de su petición y se concluirá el procedimiento, sin necesidad de dictar una resolución posterior. 3. Admitida a trámite la solicitud, junto con notificar al interesado, el Director Regional remitirá el expediente al Director Nacional del Servicio para su análisis y elaboración de un informe técnico que contenga las consideraciones científicas y su opinión sobre la necesidad de acoger o rechazar la solicitud. 4. El Servicio remitirá los antecedentes al Ministerio del Medio Ambiente para su pronunciamiento. Si a juicio del Ministerio la solicitud no reúne el mérito suficiente para crear un área protegida privada, se lo comunicará así al solicitante, expresando los fundamentos que respaldan dicha decisión."
                    },
                    {
                        "id": 99,
                        "parrafo_id": 21,
                        "numero": "99°",
                        "nombre": "Creación de las áreas protegidas privadas",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "La creación de las áreas protegidas privadas se realizará a través de un decreto supremo que dictará el Ministerio del Medio Ambiente, previo análisis de fondo de los antecedentes recibidos. Dicho decreto deberá contener, a lo menos, la categoría de protección, la superficie, la ubicación y el o los objetos de protección, así como una cartografía adjunta que establezca los límites expresados en coordenadas. El propietario deberá reducir el decreto supremo a escritura pública e inscribirla en el Registro de Hipotecas y Gravámenes del Conservador de Bienes Raíces correspondiente y anotarla al margen de la inscripción de dominio respectiva."
                    },
                    {
                        "id": 100,
                        "parrafo_id": 21,
                        "numero": "100°",
                        "nombre": "Modificación y desafectación",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "La modificación y desafectación de las áreas protegidas privadas se regirán por lo dispuesto en el artículo 97. Adicionalmente, en caso de desafectación, el propietario del área protegida privada deberá restituir la totalidad de los beneficios obtenidos en virtud de lo dispuesto en las letras a) y b) del artículo 105. Con todo, los parques nacionales y las reservas de región virgen en predios privados sólo podrán ser modificados o desafectados a través de una ley."
                    },
                    {
                        "id": 101,
                        "parrafo_id": 21,
                        "numero": "101°",
                        "nombre": "Transferencia de dominio",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "La transferencia de dominio de un área protegida privada no alterará de forma alguna su carácter de tal y su regulación aplicable. Todo acto o contrato que dé lugar a tal transferencia deberá así señalarlo expresamente. Los conservadores de bienes raíces no inscribirán aquellos actos o contratos que sirvan de título para la transferencia de dominio que no se ajusten a lo señalado. Asimismo, los actos o contratos que contravengan dicha regla serán absolutamente nulos. El propietario de un área protegida privada deberá informar al Servicio sobre la transferencia de su dominio a un tercero."
                    },
                    {
                        "id": 102,
                        "parrafo_id": 21,
                        "numero": "102°",
                        "nombre": "Administración y supervisión",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "Las áreas protegidas privadas serán administradas por sus propietarios o por las personas naturales o jurídicas que éstos designen al efecto. La supervisión de dicha administración y manejo por los administradores corresponderá al Servicio. Para tal efecto, podrá requerirles los antecedentes o documentos que estime necesarios para verificar que las actividades de manejo que se desarrollen en su interior cumplan con los objetivos del área y con el plan de manejo. Con el mismo objeto, los fiscalizadores designados por el Servicio podrán ingresar a las áreas protegidas privadas y realizar en ellas labores de inspección. Todo cambio de administrador de un área protegida privada requerirá ser informado al Servicio. En todo caso, el propietario será solidariamente responsable por los actos del administrador."
                    },
                    {
                        "id": 103,
                        "parrafo_id": 21,
                        "numero": "103°",
                        "nombre": "Planes de manejo",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "Los planes de manejo de las áreas protegidas privadas serán elaborados por sus propietarios o las organizaciones que administren el área o por quienes ellos designen, y aprobados mediante resolución del Servicio. Con todo, tales planes de manejo contendrán, a lo menos, lo dispuesto en el artículo 72 y se regirán por el reglamento establecido en el artículo 97."
                    },
                    {
                        "id": 104,
                        "parrafo_id": 21,
                        "numero": "104°",
                        "nombre": "Apoyo técnico",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "El Servicio podrá prestar apoyo técnico a los administradores acorde a las distintas categorías de áreas protegidas privadas. En este marco, elaborará un formato tipo de plan de manejo de área protegida y desarrollará programas y talleres de capacitación en administración y manejo de aquellas áreas. El Servicio podrá asimismo desarrollar o fomentar programas de cooperación con instituciones públicas o privadas para la realización de actividades específicas en las áreas protegidas privadas, que sean complementarias a los objetivos establecidos en el plan de manejo."
                    },
                    {
                        "id": 105,
                        "parrafo_id": 21,
                        "numero": "105°",
                        "nombre": "Incentivos",
                        "tipo_articulo": "permanente",
                        "orden": 9,
                        "texto_completo": "Las áreas protegidas privadas gozarán de los siguientes beneficios para incentivar su creación y administración: a) Exención del impuesto territorial, en tanto cumplan con el plan de manejo del área. b) Exención del impuesto a la herencia. c) Participación gratuita en los programas de formación y capacitación para guardaparques, según disponibilidad presupuestaria. d) Bonificaciones en la postulación al Fondo Nacional de la Biodiversidad. e) Exención de pago de los derechos arancelarios que correspondan a los notarios, conservadores de bienes raíces y archiveros."
                    },
                    {
                        "id": 106,
                        "parrafo_id": 22,
                        "numero": "106°",
                        "nombre": "Integración de las áreas protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Formarán parte de las áreas protegidas, el suelo, subsuelo y fondo marino, las porciones de mar, terrenos de playa, playas de mar, glaciares, embalses, ríos o tramos de éstos, lagos, lagunas, estuarios, y otros humedales situados dentro de su perímetro."
                    },
                    {
                        "id": 107,
                        "parrafo_id": 22,
                        "numero": "107°",
                        "nombre": "Áreas libres de organismos genéticamente modificados",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Las áreas protegidas del Sistema Nacional de Áreas Protegidas serán declaradas áreas libres de organismos genéticamente modificados, según lo establece la letra r) del artículo 10 de la ley N° 19.300."
                    },
                    {
                        "id": 108,
                        "parrafo_id": 22,
                        "numero": "108°",
                        "nombre": "Prohibiciones en áreas protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Se prohíbe a toda persona ajena a la administración del área protegida: a) Remover o extraer tierra de hoja, turba, leña, rocas, arena o ripio. b) Intimidar, alimentar, cazar, pescar, capturar, extraer, maltratar, herir o dar muerte a ejemplares de la fauna nativa. c) Destruir nidos, lugares de aposentamiento, reproducción o crianza, o ejecutar acciones que interfieran o impidan el cumplimiento del ciclo de reproducción de las especies nativas. d) Cortar o descepar ejemplares de plantas, algas, hongos o líquenes. e) Recolectar huevos, semillas, flores o frutos. f) Introducir ejemplares de especies nativas o exóticas y especies transgénicas, polen, semillas o propágulos transgénicos. g) Introducir ganado u otros animales domésticos. h) Provocar contaminación acústica, lumínica o atmosférica. i) Liberar, vaciar o depositar residuos en lugares no habilitados para el efecto. j) Liberar, vaciar o depositar sustancias peligrosas en los sistemas hídricos o en el suelo. k) Alterar las condiciones de un área protegida o de los componentes propios de ésta mediante ocupación, aradura, corta, arranque u otras acciones semejantes. l) Alterar, remover, rayar, destruir o extraer piezas u otros elementos con significación para las comunidades indígenas que habitan en las áreas protegidas. m) Alterar, remover, rayar, destruir o extraer piezas u otros elementos con significación histórica o arqueológica. n) Interrumpir, bloquear, alterar o drenar cuerpos o cursos de agua, incluyendo humedales. ñ) Rayar, destruir o remover señalética e infografía, e instalar carteles de publicidad. o) Causar deterioro en las instalaciones o patrimonio natural existente en el área. p) Usar o portar armas. q) Pernoctar, comer, encender fuego, instalar campamentos, estacionar, fondear o transitar en lugares o sitios que no se encuentren habilitados o autorizados para ello. r) Ingresar a las áreas protegidas sin haber pagado el derecho a ingreso, si corresponde. s) Movilizarse en vehículos motorizados o no motorizados en lugares que no estén establecidos para estos fines. t) Volar drones. Estas prohibiciones no se aplicarán a quienes cuenten con el permiso establecido en el artículo 94, ni a quienes ejecuten proyectos o actividades al interior del área, en conformidad a la legislación aplicable."
                    },
                    {
                        "id": 109,
                        "parrafo_id": 23,
                        "numero": "109°",
                        "nombre": "Alcance de la fiscalización",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El Servicio fiscalizará el cumplimiento de los planes de manejo de las áreas protegidas, de las obligaciones de los propietarios y administradores de las áreas protegidas privadas, de las obligaciones establecidas en los contratos de concesión, de los permisos otorgados en las áreas protegidas y, en general, de todas las actividades que se desarrollen en éstas. Asimismo, el Servicio fiscalizará el cumplimiento de los planes de manejo para la conservación; planes de restauración ecológica, y planes de prevención, control y erradicación de especies exóticas y especies exóticas invasoras, sin perjuicio de la normativa especial vigente en materia de sanidad vegetal y animal. Para lo dispuesto en este inciso, deberá suscribir previamente con el Servicio Agrícola y Ganadero o con el Servicio Nacional de Pesca y Acuicultura, cuando corresponda, un convenio de encomendamiento de dichas funciones. Además, le corresponderá ejecutar aquellas labores que se le encomienden en virtud de los programas o subprogramas de fiscalización establecidos por la Superintendencia del Medio Ambiente, en conformidad a lo señalado en el Título II del artículo segundo de la ley Nº 20.417."
                    },
                    {
                        "id": 110,
                        "parrafo_id": 24,
                        "numero": "110°",
                        "nombre": "Ministros de fe",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Los funcionarios que cumplan funciones de fiscalización tendrán la calidad de ministros de fe respecto de los hechos constitutivos de infracciones a la presente ley, siempre que se constaten en el ejercicio de sus funciones y que consten en la respectiva acta de fiscalización. Los hechos establecidos por dichos ministros de fe constituirán presunción legal de haberse cometido la infracción."
                    },
                    {
                        "id": 111,
                        "parrafo_id": 24,
                        "numero": "111°",
                        "nombre": "Convenios de encomendamiento de funciones de fiscalización",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El Servicio podrá realizar funciones de fiscalización fuera de las áreas protegidas en virtud de un convenio de encomendamiento con el servicio público competente. Dichos convenios deberán señalar las tareas que se deberán realizar, así como la asignación de recursos para llevar a cabo tales funciones."
                    },
                    {
                        "id": 112,
                        "parrafo_id": 24,
                        "numero": "112°",
                        "nombre": "Alcance de las infracciones",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Las sanciones que corresponda aplicar por infracción a las disposiciones de esta ley serán sin perjuicio de la responsabilidad civil o penal que pueda afectar al infractor."
                    },
                    {
                        "id": 113,
                        "parrafo_id": 24,
                        "numero": "113°",
                        "nombre": "Responsabilidad solidaria",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Si ante la ocurrencia de una o más infracciones, fuese posible constatar la participación de más de una persona y no fuese posible determinar el grado de participación específico, la responsabilidad será solidaria."
                    },
                    {
                        "id": 114,
                        "parrafo_id": 24,
                        "numero": "114°",
                        "nombre": "Potestad sancionadora",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "Las infracciones a la presente ley serán sancionadas administrativamente por el Servicio."
                    },
                    {
                        "id": 115,
                        "parrafo_id": 24,
                        "numero": "115°",
                        "nombre": "Infracciones en las áreas protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "En las áreas protegidas constituirán infracciones: a) Contravenir las prohibiciones establecidas en el artículo 108. b) Contravenir lo dispuesto en los planes de manejo de áreas protegidas. c) Contravenir las obligaciones establecidas en los contratos de concesión a que se refiere esta ley. d) Realizar actividades sin contar con el permiso a que se refiere el artículo 94, cuando lo requiriese, o contravenir las condiciones establecidas para su otorgamiento. e) Contravenir las obligaciones que conlleva ser propietario o administrador de un área protegida privada. f) Impedir u obstaculizar las labores de fiscalización de los funcionarios habilitados por esta ley para ejercer tales funciones. g) Entregar información falsa u ocultar cualquier antecedente relevante con el fin de encubrir una infracción. No se considerará infracción aquella conducta que, no obstante su tipificación en este artículo, haya sido realizada en el marco de aquellos usos o costumbres ancestrales de comunidades indígenas reconocidas en el decreto de creación de la respectiva área o en el plan de manejo de la misma, o en aplicación de normativa especial en materia de sanidad vegetal y animal, en tanto no constituya un menoscabo a la conservación de la diversidad biológica y a la protección del patrimonio natural del país, como tampoco en el contexto del combate de incendios forestales."
                    },
                    {
                        "id": 116,
                        "parrafo_id": 24,
                        "numero": "116°",
                        "nombre": "Infracciones fuera de las áreas protegidas",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "Fuera de las áreas protegidas constituirán infracciones: a) En los sitios prioritarios: extraer tierra de hoja o turba; capturar, herir o dar muerte a ejemplares de la fauna nativa; destruir nidos, lugares de aposentamiento, reproducción o crianza, o ejecutar acciones que interfieran o impidan el cumplimiento del ciclo de reproducción de las especies nativas, cortar o extraer ejemplares de especies nativas de plantas, algas, hongos o líquenes; cuando tales acciones produzcan cambios significativos en las características ecológicas del sitio. La significancia de tales cambios será determinada en el reglamento a que se refiere el artículo 29. Estas infracciones no procederán respecto de quienes ejecuten proyectos o actividades al interior del sitio prioritario en conformidad a la legislación aplicable o a una resolución de calificación ambiental favorable. b) Incumplir los compromisos asumidos en un plan de restauración ecológica. c) Incumplir las medidas contenidas en un plan de prevención, control y erradicación de especies exóticas invasoras. d) Alterar físicamente un humedal en contravención a lo dispuesto en el artículo 41. e) Contravenir las prohibiciones establecidas en el artículo 44, relativo a monumentos naturales para la protección de especies. f) Usar, para fines distintos a los dispuestos en esta ley, el sistema de certificación establecido en el artículo 51. g) Impedir deliberadamente la fiscalización, encubriendo una infracción o evitando el ejercicio de atribuciones de fiscalización. No se considerará infracción aquella conducta realizada en el marco de aquellos usos o costumbres ancestrales de comunidades indígenas reconocidas en el acto administrativo que establezca alguno de los instrumentos de esta ley, en tanto no constituya un menoscabo a la conservación de la biodiversidad y a la protección del patrimonio natural del país, así como en aplicación de normativa especial en materia de sanidad vegetal y animal y de prevención y combate de incendios forestales."
                    },
                    {
                        "id": 117,
                        "parrafo_id": 24,
                        "numero": "117°",
                        "nombre": "Concurso de infracciones",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "Si una conducta constituye al mismo tiempo infracción administrativa de conformidad a ésta y otra ley, se aplicará el procedimiento y sanciones establecidos en aquel cuerpo legal que imponga una sanción de mayor entidad. La regla anterior no se aplicará cuando la infracción constituya un incumplimiento de una resolución de calificación ambiental. En tal caso, la Superintendencia del Medio Ambiente será el único órgano competente para sancionar."
                    },
                    {
                        "id": 118,
                        "parrafo_id": 24,
                        "numero": "118°",
                        "nombre": "Categorías de infracciones",
                        "tipo_articulo": "permanente",
                        "orden": 9,
                        "texto_completo": "Las infracciones a la presente ley se considerarán gravísimas, graves o leves. 1. Constituirán infracciones gravísimas, los hechos, actos u omisiones que: a) Hayan causado daño ambiental, no susceptible de reponer en sus propiedades básicas; b) Hayan afectado gravemente los servicios ecosistémicos, o c) Impidan u obstaculicen deliberadamente el cumplimiento de determinado plan de manejo. 2. Constituirán infracciones graves, los hechos, actos u omisiones que: a) Hayan causado daño ambiental, susceptible de reponer en sus propiedades básicas; b) Hayan afectado el área, sin comprometer gravemente los servicios ecosistémicos que ésta provee, o c) Afecten negativamente el cumplimiento del plan de manejo de un área protegida. 3. Constituirán infracciones leves, los hechos, actos, u omisiones que contravengan cualquier precepto o medida obligatoria y que no constituyan infracción gravísima o grave, de acuerdo con lo previsto en los números anteriores."
                    },
                    {
                        "id": 119,
                        "parrafo_id": 24,
                        "numero": "119°",
                        "nombre": "Prescripción",
                        "tipo_articulo": "permanente",
                        "orden": 10,
                        "texto_completo": "Las infracciones previstas en esta ley prescribirán a los tres años contados desde su comisión o desde la manifestación evidente de sus efectos, en el caso de las infracciones que hayan causado daño ambiental. En ambos casos, el plazo se interrumpirá con la notificación de la formulación de cargos por los hechos constitutivos de las infracciones."
                    },
                    {
                        "id": 120,
                        "parrafo_id": 25,
                        "numero": "120°",
                        "nombre": "Sanciones",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Las infracciones a esta ley podrán ser objeto de alguna de las siguientes sanciones: 1. En el caso de las infracciones gravísimas: a) Multa de hasta 15.000 unidades tributarias mensuales. b) Restitución total de los beneficios obtenidos como área protegida privada en virtud de lo dispuesto en las letras a), b) y c) del artículo 105. c) Extinción o caducidad de la concesión o permiso, según corresponda, sin derecho a indemnización alguna. d) Prohibición temporal de ingreso a las áreas protegidas, entre cinco y quince años. 2. En el caso de las infracciones graves: a) Multa de hasta 10.000 unidades tributarias mensuales. b) Restitución parcial de los beneficios obtenidos como área protegida privada en virtud de lo dispuesto en las letras a), b) y c) del artículo 105. c) Suspensión de la concesión o permiso, que no podrá superar la mitad del tiempo otorgado al efecto. d) Prohibición temporal de ingreso a las áreas protegidas, entre cinco y diez años. 3. En el caso de las infracciones leves: a) Multa de hasta 1.000 unidades tributarias mensuales. b) Prestación de servicios en beneficio de un área protegida, si el infractor consiente en ello. La sanción específica se determinará fundadamente, apreciando los siguientes criterios o elementos: a) Gravedad y consecuencias del hecho o importancia del peligro ocasionado. b) El número de personas cuya salud pudo afectarse por la infracción. c) El beneficio económico obtenido con motivo de la infracción. d) Capacidad económica del infractor. e) Colaboración que el infractor preste al Servicio antes o durante la investigación. f) Intencionalidad en la comisión de la infracción. g) Grado de participación en el hecho, acción u omisión constitutiva de la infracción. h) Conducta anterior del infractor. i) Reparación del daño o realización de medidas correctivas o subsanación de la infracción. j) Categoría del área protegida y zonificación del lugar donde se cometió la infracción, si corresponde. k) Características de vulnerabilidad, irremplazabilidad y endemismo de la especie o ecosistema afectado. l) Todo otro criterio que, a juicio fundado del Servicio, sea relevante para la determinación de la sanción. Sin perjuicio de la aplicación de las multas, se podrá aplicar la sanción de decomiso de los elementos o insumos que hubieren servido para cometer la infracción y los productos resultantes de ella, y determinar el destino de tales especies."
                    },
                    {
                        "id": 121,
                        "parrafo_id": 25,
                        "numero": "121°",
                        "nombre": "Pago de multa",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El monto de las multas impuestas por el Servicio será a beneficio fiscal y deberá ser pagado en la Tesorería General de la República, dentro del plazo de diez días, contado desde la fecha de notificación de la resolución respectiva, sin perjuicio de lo dispuesto en el artículo 134. Las resoluciones del Servicio que apliquen multa tendrán mérito ejecutivo."
                    },
                    {
                        "id": 122,
                        "parrafo_id": 26,
                        "numero": "122°",
                        "nombre": "Acta de fiscalización",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Los fiscalizadores que constaten hechos que pudiesen constituir infracciones reguladas en esta ley levantarán un acta de fiscalización en la que describirán de manera objetiva y detallada tales hechos e identificarán al o los presuntos infractores, con expresa indicación de su domicilio. Con el solo mérito de esta acta podrá iniciarse el procedimiento administrativo sancionador."
                    },
                    {
                        "id": 123,
                        "parrafo_id": 26,
                        "numero": "123°",
                        "nombre": "Denuncias",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Cualquier persona podrá denunciar las infracciones que trata esta ley. Las denuncias deberán ser formuladas por escrito al Servicio, señalando lugar y fecha de presentación, y la individualización completa del denunciante, quien deberá suscribirla personalmente o por su mandatario o representante habilitado. Asimismo, deberán contener una descripción de los hechos concretos que se estiman constitutivos de infracción, precisando lugar y fecha de su comisión y, de ser posible, identificando al presunto infractor."
                    },
                    {
                        "id": 124,
                        "parrafo_id": 26,
                        "numero": "124°",
                        "nombre": "Admisión del acta o denuncia",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "El procedimiento sancionatorio podrá iniciarse por la comunicación escrita del funcionario fiscalizador al Director Regional del Servicio de la respectiva acta de fiscalización o por denuncia de cualquier persona formulada de conformidad al artículo anterior. Con todo, la denuncia sólo dará origen a la instrucción del procedimiento sancionador, si ésta, a juicio del Servicio, está revestida de seriedad y tiene mérito suficiente. En caso contrario, se podrá disponer la realización de acciones de fiscalización sobre el presunto infractor. Si el Servicio estimase que carece de seriedad o mérito, se dispondrá el archivo de la misma por resolución fundada, notificando de ello al denunciante."
                    },
                    {
                        "id": 125,
                        "parrafo_id": 26,
                        "numero": "125°",
                        "nombre": "Medidas provisionales",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Constatado por un fiscalizador uno o más hechos que pudiesen constituir infracciones reguladas en esta ley, éste podrá solicitar al Director Regional que ordene las siguientes medidas provisionales: a) Medidas de corrección, seguridad o control de los impactos derivados de la infracción; b) Retención temporal o traslado de los elementos, insumos, productos o vehículos, o la inmovilización de éstos; c) Aposición de sellos sobre bienes muebles o inmuebles; d) Clausura temporal, parcial o total, de las instalaciones; e) Suspensión del funcionamiento de las instalaciones; f) Incautación de los elementos o insumos que hubieren servido para cometer la infracción y los productos resultantes de ella, y g) Prohibición temporal de ingreso a las áreas protegidas. Las medidas a las que se refiere este artículo sólo podrán ser adoptadas cuando fueren absolutamente indispensables para asegurar la adecuada instrucción del procedimiento sancionador, con el objeto de evitar daño inminente al objeto de protección del área protegida, o cuando una demora en su aplicación pudiese significar una pérdida, disminución o menoscabo de uno o más componentes de la biodiversidad. Tales medidas serán esencialmente temporales y deberán ser proporcionales al tipo de infracción. En el caso de las medidas provisionales señaladas en las letras d) y e), el Servicio deberá obtener la autorización previa del Tribunal Ambiental respectivo. La autorización deberá obtenerse por la vía más expedita posible, siendo admisible, incluso, la otorgada vía telefónica, de alguno de sus ministros, según la regla de turno que se determine mediante auto acordado, que deberá contemplar a un titular y a un suplente. El afectado por las medidas previamente señaladas podrá reclamar de la resolución del Director Regional dentro de un plazo de quince días desde su notificación, ante el Tribunal Ambiental del lugar en que dichas medidas debieren surtir efectos."
                    },
                    {
                        "id": 126,
                        "parrafo_id": 26,
                        "numero": "126°",
                        "nombre": "Cese de las medidas provisionales",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "Las medidas provisionales sólo durarán mientras subsistiere la necesidad de su aplicación, para lo cual el Director Regional deberá confirmar, modificar o levantar las medidas provisionales al momento de la iniciación del procedimiento sancionatorio. En todo caso, las medidas provisionales quedarán sin efecto si no se inicia el procedimiento en el plazo establecido en el artículo 129 o cuando la decisión de iniciación no contenga un pronunciamiento expreso acerca de las mismas. Las medidas provisionales podrán ser alzadas o modificadas durante la tramitación del procedimiento, de oficio o a petición de algún interesado mediante solicitud fundada ante el Director Regional del Servicio. Las medidas de que trata este artículo se extinguirán con la resolución administrativa que ponga fin al procedimiento correspondiente."
                    },
                    {
                        "id": 127,
                        "parrafo_id": 26,
                        "numero": "127°",
                        "nombre": "Medidas correctivas",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "Frente a infracciones flagrantes, y sin perjuicio del procedimiento sancionatorio que se instruya para establecer la responsabilidad y las sanciones que correspondan, el Servicio podrá ordenar el restablecimiento de la legalidad requiriendo el cumplimiento del instrumento o norma infringida dentro de un plazo prudencial que no exceda los cinco días corridos."
                    },
                    {
                        "id": 128,
                        "parrafo_id": 26,
                        "numero": "128°",
                        "nombre": "Incumplimientos menores",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "El Servicio podrá determinar, en consideración a la entidad del hecho, incumplimientos menores que darán lugar a disconformidades. Formulada por escrito una disconformidad, deberá ser subsanada en un plazo que no podrá exceder de diez días corridos. Vencido el plazo, si subsiste la disconformidad, se cursará la infracción, conforme al procedimiento del Párrafo siguiente, y si ha sido subsanada, no se cursará la infracción. Las disconformidades sólo podrán formularse respecto de procedimientos, incumplimiento de plazos u otras faltas menores que no configuren infracciones gravísimas o graves."
                    },
                    {
                        "id": 129,
                        "parrafo_id": 27,
                        "numero": "129°",
                        "nombre": "Inicio de instrucción del procedimiento",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "El acta de fiscalización y/o la denuncia, en su caso, se pondrán en conocimiento del Director Regional quien, en el plazo máximo de diez días, deberá dar inicio a la instrucción del procedimiento sancionador y designará a un funcionario para que instruya el proceso. La instrucción del procedimiento sancionatorio se iniciará mediante resolución que contendrá una formulación precisa de los cargos, y se pronunciará sobre las medidas provisionales impuestas, en orden a mantenerlas, modificarlas o revocarlas. La formulación de cargos señalará una descripción clara y precisa de los hechos que se estiman constitutivos de infracción y la fecha de su comisión, si se conociere, la norma, instrumento, medidas o condiciones eventualmente infringidas y la disposición que establece la infracción. Esta resolución se notificará al infractor, si es habido o se conociere, por carta certificada, confiriéndole un plazo máximo de quince días para formular sus descargos, acompañar sus medios de prueba y ofrecer aquellos que no puedan ser acompañados en dicho acto. El infractor podrá solicitar que, en lo sucesivo, las notificaciones se practiquen por correo electrónico, caso en el cual sólo se le notificará por esa vía. Si el infractor tuviese su domicilio en una región distinta de aquélla en que se hubiese denunciado la infracción, podrá presentar sus descargos y medios probatorios en la Dirección Regional del Servicio correspondiente a su domicilio. En el evento que el infractor no sea habido o no se conociere su paradero, se publicará un extracto con la formulación de cargos en un diario de circulación nacional o regional, apercibiendo expresamente al infractor de tenerlo por rebelde para todos los efectos legales si no se presentare en el plazo de diez días."
                    },
                    {
                        "id": 130,
                        "parrafo_id": 27,
                        "numero": "130°",
                        "nombre": "Examen de los antecedentes",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Recibidos los descargos o vencido el plazo otorgado para ello, el instructor examinará el mérito de los antecedentes y podrá ordenar la realización de las pericias e inspecciones que sean pertinentes y la recepción de los demás medios probatorios que procedan. La práctica de todas estas diligencias deberá llevarse a efecto en un plazo que no podrá ser superior a treinta días."
                    },
                    {
                        "id": 131,
                        "parrafo_id": 27,
                        "numero": "131°",
                        "nombre": "Medios de prueba",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Los hechos investigados y las responsabilidades de los infractores podrán acreditarse por cualquier medio de prueba admisible en derecho, los que se apreciarán conforme a las reglas de la sana crítica. Se presume legalmente la veracidad de los hechos constatados por los fiscalizadores y que consten en el acta de fiscalización respectiva, sin perjuicio de los demás medios de prueba que se aporten o se generen en el proceso."
                    },
                    {
                        "id": 132,
                        "parrafo_id": 27,
                        "numero": "132°",
                        "nombre": "Expediente",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El instructor deberá dejar constancia de todo lo obrado en un expediente, escrito o electrónico, en el que se asentarán los documentos presentados, con expresión de la fecha y hora de su recepción, respetando su orden de ingreso. Asimismo, se incorporarán las actuaciones, los documentos y las resoluciones que se dicten en este procedimiento, y las notificaciones y comunicaciones a que éstas den lugar, con expresión de la fecha y hora de su envío, en estricto orden de ocurrencia o egreso."
                    },
                    {
                        "id": 133,
                        "parrafo_id": 27,
                        "numero": "133°",
                        "nombre": "Informe del instructor y resolución sobre la sanción",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "Vencido el plazo a que se refiere el artículo 130, el instructor evacuará un informe, remitiendo los antecedentes al Director Regional del Servicio, para que resuelva. Dicho informe deberá contener la individualización del o de los infractores, la relación de los hechos investigados, la forma como se ha llegado a comprobarlos, y la proposición de las sanciones que estimere procedente aplicar o de la absolución de uno o más infractores. Si fuere procedente, la autoridad competente para resolver, podrá devolver los antecedentes al instructor, dentro del plazo máximo de diez días, para que practique las diligencias que estime necesarias para resolver la materia sometida a su decisión o para que corrija vicios de procedimiento, fijando un plazo para tales efectos que no podrá exceder a diez días. Una vez evacuado o corregido el informe dentro del plazo señalado en el inciso anterior, el Director Regional del Servicio resolverá en el plazo de diez días, dictando al efecto una resolución fundada en la cual absolverá al presunto infractor o aplicará la sanción en su caso. Dicha resolución se notificará a través de carta certificada al afectado en su domicilio o a su apoderado, si lo tuviere, a menos que haya solicitado que las notificaciones se realizaran a través de correo electrónico, caso en el cual se le notificará sólo por esta vía."
                    },
                    {
                        "id": 134,
                        "parrafo_id": 28,
                        "numero": "134°",
                        "nombre": "Reclamación",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Los siguientes actos administrativos podrán ser reclamados ante los Tribunales Ambientales, en el marco de lo dispuesto en el número 11) del artículo 17 de la ley N° 20.600: a) Resolución del Director Regional del Servicio que imponga una o más sanciones, que desestime una denuncia o archive un procedimiento. b) Resolución del Servicio que apruebe un plan de manejo para la conservación, un plan de restauración ecológica o un plan de prevención, control y erradicación de especies exóticas y exóticas invasoras. c) Decreto supremo que cree, modifique o desafecte un área protegida. d) Resolución que apruebe o modifique un plan de manejo de un área protegida. e) Resolución que otorgue, modifique o renueve una concesión en un área protegida del Estado o autorice su transferencia. f) Resolución del Servicio que autorice o deniegue un permiso para realizar una actividad transitoria, o que no requiera la instalación de infraestructura permanente, en un área protegida del Estado. g) Decreto supremo que determine los sitios prioritarios. Lo anterior es sin perjuicio de los recursos administrativos que procedan, de acuerdo a las reglas generales."
                    },
                    {
                        "id": 135,
                        "parrafo_id": 28,
                        "numero": "135°",
                        "nombre": "Competencia",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Será competente para conocer la reclamación, dependiendo del acto administrativo señalado en el artículo anterior: a) En el caso de la letra a), el Tribunal Ambiental del lugar en que se haya originado la infracción. b) En el caso de las letras b) y g), el Tribunal Ambiental del lugar donde se aplique el instrumento contenido en el respectivo acto administrativo. c) En el caso de las letras c), d), e), así como f), en este último caso cuando se autorice un permiso, cualquier persona que considere que se infringe la ley, su reglamento o los objetivos del instrumento. d) En el caso de la letra f), cuando se deniegue un permiso, la persona directamente afectada."
                    },
                    {
                        "id": 136,
                        "parrafo_id": 28,
                        "numero": "136°",
                        "nombre": "Legitimación activa",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Son titulares de la reclamación referida, dependiendo del literal del artículo 134 de que se trate: a) En el caso de la letra a), la persona sancionada y el denunciante. b) En el caso de las letras b) y g), cualquier persona que considere que el instrumento no se ajusta a la ley o su reglamento y le causa perjuicio. c) En el caso de las letras c), d), e), así como f), en este último caso cuando se autorice un permiso, cualquier persona que considere que se infringe la ley, su reglamento o los objetivos del instrumento. d) En el caso de la letra f), cuando se deniegue un permiso, la persona directamente afectada."
                    },
                    {
                        "id": 137,
                        "parrafo_id": 28,
                        "numero": "137°",
                        "nombre": "Plazo",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "El plazo para interponer la reclamación será de treinta días hábiles, contado desde la fecha de la notificación de la respectiva resolución o publicación del decreto."
                    },
                    {
                        "id": 138,
                        "parrafo_id": 28,
                        "numero": "138°",
                        "nombre": "Procedimiento",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "El procedimiento de reclamación se regirá por lo dispuesto en el Párrafo 2° del Título III de la ley N° 20.600."
                    },
                    {
                        "id": 139,
                        "parrafo_id": 28,
                        "numero": "139°",
                        "nombre": "Recursos contra la resolución del Tribunal Ambiental",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "En contra de las resoluciones pronunciadas por el Tribunal Ambiental sólo procederá el recurso de apelación cuando sean de aquéllas que declaran la inadmisibilidad de la reclamación, las que reciben la causa a prueba y las que pongan término al proceso o hagan imposible su tramitación. Dicho recurso deberá ser interpuesto en el plazo de diez días contado desde la notificación de la resolución respectiva, y será conocido por la Corte de Apelaciones en cuyo territorio jurisdiccional tenga asiento el Tribunal Ambiental que haya dictado la resolución apelada. En contra de la sentencia definitiva procederán los recursos de casación en el fondo, de acuerdo con lo dispuesto en el artículo 767 del Código de Procedimiento Civil, y en la forma, de acuerdo con el inciso cuarto del artículo 26 de la ley N° 20.600, que crea los Tribunales Ambientales. El recurso de casación deberá interponerse ante el Tribunal Ambiental que dictó la resolución recurrida para ante la Corte Suprema y tendrá preferencia para su vista y fallo. Para tales efectos, los plazos y procedimientos para el conocimiento del recurso de casación se ajustarán a lo dispuesto en el Código de Procedimiento Civil. No será aplicable para estos efectos lo dispuesto en los artículos 769 y 775 del mismo Código."
                    },
                    {
                        "id": 140,
                        "parrafo_id": 29,
                        "numero": "140°",
                        "nombre": "Registro público de sanciones",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Sea que la sanción haya sido aplicada por el Servicio, éste deberá consignar las sanciones aplicadas en un registro público en el cual se señalarán el nombre, apellidos, denominación o razón social, de las personas naturales o jurídicas responsables y la naturaleza de las infracciones y sanciones. Este registro deberá publicarse en el sitio electrónico del Servicio. En caso que se imponga como sanción la prohibición temporal de ingreso a las áreas protegidas, el Director Nacional deberá informar oportunamente de ello a la administración de cada unidad. Un reglamento dictado por el Ministerio del Medio Ambiente determinará la forma y modo en que deberá elaborarse el precitado registro, la actualización del mismo, así como cualquier otro aspecto que sea relevante incluir para el adecuado acceso y publicidad de las sanciones impuestas."
                    },
                    {
                        "id": 141,
                        "parrafo_id": 29,
                        "numero": "141°",
                        "nombre": "Plan de corrección",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "El presunto infractor podrá presentar voluntariamente ante el Servicio, una propuesta de plan de corrección de la pérdida o degradación causada por el hecho infraccional en la biodiversidad. Cuando el origen de la infracción haya dado competencia al Servicio, el plan de corrección se presentará ante éste. El Director Nacional deberá emitir un informe de la infracción cometida y los efectos ocasionados y remitirlo junto con el plan propuesto al Ministerio del Medio Ambiente para su aprobación. Desde la aprobación del plan de corrección y mientras no esté concluida su ejecución, el plazo de prescripción del artículo 119 se suspenderá. Si existe daño ambiental y el infractor no presenta voluntariamente un plan de corrección o no se ejecuta éste de manera satisfactoria, se deberá ejercer la acción por daño ambiental ante el Tribunal Ambiental. La totalidad de los costos en que se incurra para la implementación del plan debidamente aprobado será de cargo del infractor. Sin perjuicio de ello, podrán transferirse al patrimonio del Servicio los fondos que se requieran para acciones que le corresponda ejecutar a éste conforme al plan. Un reglamento establecerá el procedimiento que regirá la presentación y aprobación del plan de corrección, así como los contenidos mínimos de éste y los mecanismos de seguimiento de su ejecución."
                    },
                    {
                        "id": 142,
                        "parrafo_id": 29,
                        "numero": "142°",
                        "nombre": "Regla supletoria",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "En todo lo no previsto por la presente ley, se aplicará supletoriamente la ley N° 19.880."
                    },
                    {
                        "id": 143,
                        "parrafo_id": 30,
                        "numero": "143°",
                        "nombre": "Ley N° 18.362",
                        "tipo_articulo": "permanente",
                        "orden": 1,
                        "texto_completo": "Derógase la ley Nº 18.362, que crea un Sistema Nacional de Áreas Silvestres Protegidas del Estado."
                    },
                    {
                        "id": 144,
                        "parrafo_id": 30,
                        "numero": "144°",
                        "nombre": "Ley N° 19.300",
                        "tipo_articulo": "permanente",
                        "orden": 2,
                        "texto_completo": "Modifícase la ley Nº 19.300, sobre Bases Generales del Medio Ambiente, de la siguiente manera: 1) Reemplázase la letra p) del artículo 10, por la siguiente: 'p) Ejecución de obras, programas o actividades en áreas que formen parte del Sistema Nacional de Áreas Protegidas, humedales urbanos y en otras áreas colocadas bajo protección oficial, en los casos en que la legislación respectiva lo permita;'. 2) Reemplázase el artículo 34, por el siguiente: 'Artículo 34.- El Estado administrará un Sistema Nacional de Áreas Protegidas, con objeto de asegurar la conservación de la biodiversidad y la protección del patrimonio natural. La administración del Sistema Nacional de Áreas Protegidas corresponderá al Servicio de Biodiversidad y Áreas Protegidas.'. 3) Modifícase el artículo 35 de la siguiente forma: a) Reemplázase el inciso primero, por el siguiente: 'Artículo 35.- Con el mismo propósito señalado en el artículo precedente, el Estado fomentará e incentivará la creación de áreas protegidas de propiedad privada, las que formarán parte del Sistema Nacional de Áreas Protegidas.'. b) Elimínase, en el inciso segundo, la expresión 'silvestres'. c) Reemplázanse los incisos tercero y cuarto, por el siguiente: 'La creación, desafectación y regulación de estas áreas se regirá por lo dispuesto en la Ley que crea el Servicio de Biodiversidad y Áreas Protegidas.'. 4) Reemplázase el artículo 37, por el siguiente: 'Artículo 37.- El Ministerio del Medio Ambiente clasificará las especies de plantas, algas, hongos y animales nativos, sobre la base de antecedentes científico-técnicos, y según su estado de conservación, en las categorías recomendadas para tales efectos por la Unión Internacional para la Conservación de la Naturaleza (UICN) u otro organismo internacional que dicte pautas en estas materias. Para tal efecto, el Servicio de Biodiversidad y Áreas Protegidas formulará una propuesta de clasificación al Ministerio del Medio Ambiente. Un reglamento dictado por el Ministerio del Medio Ambiente fijará el procedimiento de tal clasificación. De conformidad a dichas clasificaciones, el Servicio de Biodiversidad y Áreas Protegidas deberá aprobar planes de recuperación, conservación y gestión de especies, de acuerdo a lo dispuesto en la Ley que crea el Servicio de Biodiversidad y Áreas Protegidas.'. 5) Modifícase el artículo 42 del modo que sigue: a) Reemplázase, en el inciso primero, la expresión 'El Ministerio del Medio Ambiente' por 'El Servicio de Biodiversidad y Áreas Protegidas', y la locución 'la presentación y' por 'el'. b) Agrégase, en el inciso final, a continuación de la expresión 'aplicará a', lo siguiente: 'los planes de manejo de áreas protegidas ni a'. 6) Modifícase el artículo 64 en los siguientes términos: a) Sustitúyese la coma que sigue a la palabra 'Descontaminación', por la conjunción copulativa 'y'. b) Elimínase la frase ', así como de los planes de manejo establecidos en la presente ley, cuando correspondan,'. 7) Modifícase el artículo 70 de la siguiente manera: a) Reemplázase la letra b), por la siguiente: 'b) Proponer políticas, planes, programas, normas y supervigilar el Sistema Nacional de Áreas Protegidas.'. b) Derógase la letra c). c) Reemplázase, en la letra i), la expresión 'la flora, la fauna,', por la siguiente: 'las plantas, algas, hongos y animales silvestres,'. d) Reemplázase la letra j), por la siguiente: 'j) Elaborar y ejecutar estudios y programas de investigación de su competencia.'. 8) Modifícase el artículo 71 de la siguiente forma: a) Incorpórase, en el inciso primero, luego de la expresión 'de Desarrollo Social y Familia;', la siguiente: 'de Bienes Nacionales;'. b) Reemplázase la letra c), por la siguiente: 'c) Pronunciarse sobre las propuestas de creación de áreas protegidas del Estado que efectúe el Ministerio del Medio Ambiente.'."
                    },
                    {
                        "id": 145,
                        "parrafo_id": 30,
                        "numero": "145°",
                        "nombre": "Ley N° 20.417",
                        "tipo_articulo": "permanente",
                        "orden": 3,
                        "texto_completo": "Modifícase el artículo segundo de la ley N° 20.417, que crea la Superintendencia del Medio Ambiente y fija su ley orgánica, en los términos que siguen: 1) Elimínase, en el inciso primero del artículo 2°, la frase 'y de los Planes de Manejo, cuando corresponda,'. 2) Modifícase el artículo 3° de la siguiente manera: a) Elimínase, en la letra c), la frase 'y de los Planes de Manejo, cuando procedan,'. b) Elimínase, en la letra m), la expresión 'Manejo,'. 3) Suprímese, en el artículo 35, la letra i)."
                    },
                    {
                        "id": 146,
                        "parrafo_id": 30,
                        "numero": "146°",
                        "nombre": "Decreto ley N° 1.939",
                        "tipo_articulo": "permanente",
                        "orden": 4,
                        "texto_completo": "Introdúcense las siguientes modificaciones en el decreto ley Nº 1.939, del Ministerio de Tierras y Colonización, de 1977, que establece normas sobre adquisición, administración y disposición de bienes del Estado: 1) Derógase el artículo 15. 2) Reemplázase el artículo 21, por el siguiente: 'Artículo 21.- Los predios que hubieren sido declarados como áreas protegidas del Estado, conforme a la legislación respectiva, no podrán ser destinados a otro objeto ni perderán esa calidad sino en la forma establecida en la Ley que crea el Servicio de Biodiversidad y Áreas Protegidas.'."
                    },
                    {
                        "id": 147,
                        "parrafo_id": 30,
                        "numero": "147°",
                        "nombre": "Ley N° 18.892",
                        "tipo_articulo": "permanente",
                        "orden": 5,
                        "texto_completo": "Modifícase la ley Nº 18.892, General de Pesca y Acuicultura, cuyo texto refundido, coordinado y sistematizado fue establecido por el decreto supremo Nº 430, del Ministerio de Economía, Fomento y Reconstrucción, promulgado el año 1991 y publicado el año 1992, en la siguiente forma: 1) Reemplázase, en el número 42 del artículo 2°, la palabra 'marina', por la expresión 'de interés pesquero'. 2) Efectúanse, en el artículo 3º, las enmiendas que siguen: a) Derógase la letra d). b) Sustitúyese, en la letra e), la frase 'Reservas Marinas, mediante decreto del Ministerio del Medio Ambiente', por la siguiente: 'Reservas de interés pesquero'. 3) Incorpórase, en el artículo 122, un inciso tercero, nuevo, pasando el actual inciso tercero a ser cuarto y así sucesivamente, del siguiente tenor: 'Asimismo, los funcionarios del Servicio de Biodiversidad y Áreas Protegidas podrán ejecutar acciones de fiscalización del cumplimiento de la presente ley en las áreas protegidas, los sitios prioritarios, los ecosistemas amenazados y las áreas degradadas, previo convenio de encomendamiento de funciones celebrado con el Servicio Nacional de Pesca y Acuicultura. En el ejercicio de dicha atribución, tendrán la calidad de ministros de fe.'. 4) Agrégase, en el párrafo primero del número 1) del artículo 125, la siguiente oración final: 'Los funcionarios del Servicio de Biodiversidad y Áreas Protegidas que cuenten con facultades de fiscalización deberán denunciar las infracciones a la presente ley de que tomen conocimiento en el ejercicio de sus atribuciones.'. 5) Derógase el artículo 159."
                    },
                    {
                        "id": 148,
                        "parrafo_id": 30,
                        "numero": "148°",
                        "nombre": "Ley N° 20.256",
                        "tipo_articulo": "permanente",
                        "orden": 6,
                        "texto_completo": "Modifícase la ley Nº 20.256, que establece normas sobre Pesca Recreativa, de la siguiente manera: 1) Agrégase, en el artículo 7º, el siguiente inciso quinto: 'No serán susceptibles de pesca recreativa las especies que hayan sido clasificadas en peligro crítico, en peligro o vulnerables, de acuerdo con el artículo 37 de la ley Nº 19.300.'. 2) Agrégase, en el inciso primero del artículo 11, después de la palabra 'Ministerio', la siguiente frase: ', que llevará además la firma del Ministro del Medio Ambiente,'. 3) Incorpórase, en el inciso primero del artículo 13, a continuación de la expresión 'a las autoridades públicas que, de acuerdo a sus competencias, deban emitir un pronunciamiento,', la frase 'al Servicio de Biodiversidad y Áreas Protegidas'. 4) Agrégase, en el inciso quinto del artículo 25, a continuación de la frase 'a los funcionarios del Servicio', la expresión 'y del Servicio de Biodiversidad y Áreas Protegidas,'. 5) Reemplázase, en el artículo 37, la palabra 'marinas', las dos veces que aparece, por la expresión 'de interés pesquero'. 6) Sustitúyese el artículo 38, por el siguiente: 'Artículo 38.- Áreas protegidas. La pesca recreativa en las áreas protegidas deberá ser compatible con la categoría del área, su objeto específico de protección y ajustarse al respectivo plan de manejo del área.'. 7) Derógase el inciso cuarto del artículo 39. 8) Intercálase, en el artículo 42, a continuación de la letra c), la siguiente letra d), nueva, adecuándose la ordenación correlativa de los demás literales: 'd) El Director Regional del Servicio de Biodiversidad y Áreas Protegidas;'. 9) Modifícase el artículo 46, de la siguiente forma: a) Agrégase, en el inciso primero, después de la palabra 'Servicio', la frase ', del Servicio de Biodiversidad y Áreas Protegidas, en este caso de acuerdo al convenio de encomendamiento de funciones de fiscalización respectivo,'. b) Elimínase, en el inciso tercero, la expresión 'y los guardaparques señalados en el Sistema Nacional de Áreas Silvestres Protegidas por el Estado (SNASPE)'. 10) Suprímense, en el artículo 47, las siguientes expresiones: 'y guardaparques'; 'y guardaparques señalados en el Sistema Nacional de Áreas Silvestres Protegidas por el Estado (SNASPE)', y 'o en las áreas silvestres protegidas, según corresponda,'."
                    },
                    {
                        "id": 149,
                        "parrafo_id": 30,
                        "numero": "149°",
                        "nombre": "Ley N° 4.601",
                        "tipo_articulo": "permanente",
                        "orden": 7,
                        "texto_completo": "Modifícase la ley N° 4.601, sobre Caza, cuyo texto fue sustituido por el Artículo Primero de la ley Nº 19.473, de la siguiente manera: 1) Modifícase el artículo 2º del modo que sigue: a) Reemplázase, en la letra g), la frase 'comprendido en los listados de especies declaradas en peligro de extinción, vulnerables, raras o escasamente conocidas', por la siguiente: 'clasificado en alguna categoría de conservación en conformidad al artículo 37 de la ley Nº 19.300'. b) Deróganse las letras k), l), m) y n), pasando la actual letra ñ) a ser letra k). 2) Reemplázase, en el inciso primero del artículo 3º, la frase 'en peligro de extinción, vulnerables, raras y escasamente conocidas', por la siguiente: 'en peligro crítico, en peligro, vulnerable, casi amenazada o datos insuficientes'. 3) Modifícase el artículo 7º de la siguiente forma: a) Reemplázase el inciso primero, por el siguiente: 'Artículo 7°.- Se prohíbe la caza o la captura en áreas que formen parte del Sistema Nacional de Áreas Protegidas, áreas que constituyen reservas de la biósfera conforme al Programa del Hombre y la Biósfera de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura, áreas prohibidas de caza, zonas urbanas, líneas de ferrocarriles, aeropuertos, en y desde caminos públicos, en lugares de interés científico y de aposentamiento de aves guaníferas o aves migratorias protegidas bajo el Convenio sobre la Conservación de Especies Migratorias de la Fauna Salvaje, en Sitios Prioritarios para la Conservación y en Corredores Biológicos.'. b) Efectúanse, en el inciso segundo, las siguientes enmiendas: i. Intercálase, a continuación de la expresión 'inciso precedente', la frase 'que no sean áreas protegidas'. ii. Reemplázase la oración final que señala: 'En estos casos, deberá contarse, además, con el permiso de la autoridad que tenga a su cargo la administración del área silvestre protegida.', por la siguiente: 'En las áreas protegidas, dicha competencia será del Servicio de Biodiversidad y Áreas Protegidas.'. 4) Reemplázase, en el inciso primero del artículo 22, la frase 'en peligro de extinción, vulnerables, raras o escasamente conocidas', por la que sigue: 'clasificadas en alguna categoría de conservación en conformidad al artículo 37 de la ley Nº 19.300'. 5) Incorpórase, en el inciso primero del artículo 25, luego de la expresión 'Servicio Agrícola y Ganadero', la siguiente: ', en conjunto con el Servicio de Biodiversidad y Áreas Protegidas'. 6) Incorpórase, en el artículo 28, a continuación de la palabra 'reglamento', lo siguiente: ', sin perjuicio de las atribuciones de fiscalización del Servicio de Biodiversidad y Áreas Protegidas, en este caso de acuerdo al convenio de encomendamiento de funciones de fiscalización respectivo, en las áreas que forman parte del Sistema Nacional de Áreas Protegidas, así como en sitios prioritarios, ecosistemas amenazados y áreas degradadas'. 7) Modifícase el artículo 39 del modo que sigue: a) Elimínase, en el inciso primero, la palabra 'Silvestres'. b) Derógase el inciso segundo."
                    },
                    {
                        "id": 150,
                        "parrafo_id": 30,
                        "numero": "150°",
                        "nombre": "Ley N° 20.283",
                        "tipo_articulo": "permanente",
                        "orden": 8,
                        "texto_completo": "Modifícase la ley Nº 20.283, sobre Recuperación del Bosque Nativo y Fomento Forestal, de la siguiente manera: 1) Efectúanse, en el número 4) del artículo 2°, las siguientes enmiendas: a) Reemplázase, en el párrafo primero, la locución 'las categorías de en 'peligro de extinción', 'vulnerables', 'raras', 'insuficientemente conocidas' o 'fuera de peligro';', por la frase: 'las categorías definidas en conformidad al artículo 37 de la ley N° 19.300;'. b) Reemplázase el párrafo segundo, por el siguiente: 'Se considerarán, en todo caso, incluidos en esta definición, los bosques comprendidos en áreas que formen parte del Sistema Nacional de Áreas Protegidas.'. 2) Agrégase, en el artículo 15, después de la expresión 'ley N° 19.300', la frase 'y en la Ley que crea el Servicio de Biodiversidad y Áreas Protegidas'. 3) Reemplázase, en el artículo 16, la frase 'el Ministerio de Agricultura hubiere definido oficialmente' por 'se hubieren definido en conformidad a la Ley que crea el Servicio de Biodiversidad y Áreas Protegidas'. 4) Modifícase el artículo 19 en los siguientes términos: a) Reemplázase, en el inciso primero, la expresión 'las categorías de 'en peligro de extinción', 'vulnerables', 'raras', 'insuficientemente conocidas' o 'fuera de peligro',', por la frase: 'las categorías en peligro crítico, en peligro, vulnerable, casi amenazada y datos insuficientes,'. b) Sustitúyese el inciso tercero, por el siguiente: 'Para autorizar las intervenciones a que se refiere el inciso anterior, se requerirá del informe favorable del Servicio de Biodiversidad y Áreas Protegidas, en el sentido que la intervención no amenaza la continuidad de la especie a nivel de la cuenca.'. 5) Modifícase el artículo 33, de la siguiente forma: a) Elimínase, en la letra f), la palabra 'Silvestres'. b) Reemplázase la letra h), por la siguiente: 'h) El Director Nacional del Servicio de Biodiversidad y Áreas Protegidas;'. 6) Agrégase, en el artículo 46, el siguiente inciso segundo, nuevo, pasando los actuales incisos segundo, tercero y cuarto a ser incisos tercero, cuarto y quinto, respectivamente: 'Los funcionarios del Servicio de Biodiversidad y Áreas Protegidas que cuenten con facultades de fiscalización estarán asimismo facultados para denunciar las infracciones a la presente ley de que tomen conocimiento en el ejercicio de sus atribuciones.'. 7) Modifícase el artículo 47 de la siguiente forma: a) Agrégase, en el inciso primero, a continuación de la expresión 'por la Corporación', la frase 'o por el Servicio de Biodiversidad y Áreas Protegidas, en este caso de acuerdo al convenio de encomendamiento de funciones de fiscalización respectivo,'. b) Agrégase, en el inciso segundo, a continuación de la expresión 'de la Corporación', la frase 'o del Servicio de Biodiversidad y Áreas Protegidas, en este caso de acuerdo al convenio de encomendamiento de funciones de fiscalización respectivo,'. c) Agrégase, en el inciso tercero, a continuación de la expresión 'la Corporación', la frase 'o el Servicio de Biodiversidad y Áreas Protegidas, en este caso de acuerdo al convenio de encomendamiento de funciones de fiscalización respectivo,'."
                    },
                    {
                        "id": 151,
                        "parrafo_id": 30,
                        "numero": "151°",
                        "nombre": "Ley de Bosques",
                        "tipo_articulo": "permanente",
                        "orden": 9,
                        "texto_completo": "Modifícase el decreto supremo N° 4.363, del Ministerio de Tierras y Colonización, de 1931, que aprueba texto definitivo de la Ley de Bosques, de la siguiente manera: 1) Efectúanse, en el artículo 10, las siguientes enmiendas: a) Elimínase, en el inciso primero, la expresión 'y parques nacionales de turismo'. b) Reemplázanse, en el inciso segundo, la expresión 'los Parques Nacionales y', las dos veces que aparece, por 'las', y la locución 'esos Parques y' por 'esas'. 2) Elimínase, en el artículo 11, la expresión 'y los parques nacionales de turismo'."
                    },
                    {
                        "id": 152,
                        "parrafo_id": 30,
                        "numero": "152°",
                        "nombre": "Ley N° 17.288",
                        "tipo_articulo": "permanente",
                        "orden": 10,
                        "texto_completo": "Modifícase la ley Nº 17.288, sobre monumentos nacionales; modifica las leyes N° 16.617 y 16.719; y deroga el decreto ley N° 651, de 17 de octubre de 1925, de la siguiente manera: 1) Reemplázase, en el artículo 1°, la frase 'antropo-arqueológicos, paleontológicos o de formación natural', por la siguiente: 'antropo-arqueológicos o paleontológicos', y elimínase la expresión 'los santuarios de la naturaleza;'. 2) Reemplázase, en la denominación del Título VII, la expresión 'los Santuarios de la Naturaleza e', por la palabra 'las'. 3) Derógase el artículo 31°."
                    },
                    {
                        "id": 153,
                        "parrafo_id": 30,
                        "numero": "153°",
                        "nombre": "Ley N° 20.423",
                        "tipo_articulo": "permanente",
                        "orden": 11,
                        "texto_completo": "Modifícase la ley Nº 20.423, del Sistema Institucional para el Desarrollo del Turismo, en los siguientes términos: 1) Reemplázase el número 6) del inciso segundo del artículo 7°, por el siguiente: '6) El Ministro del Medio Ambiente.'. 2) Derógase el número 8) del artículo 8°. 3) Sustitúyese el artículo 18, por el siguiente: 'Artículo 18.- Sólo se podrán desarrollar actividades turísticas en áreas protegidas cuando sean compatibles con su objeto y se ajusten al respectivo plan de manejo del área. Las concesiones de servicios turísticos en áreas protegidas se regirán por lo dispuesto en la Ley que crea el Servicio de Biodiversidad y Áreas Protegidas.'. 4) Deróganse los artículos 19 a 21."
                    },
                    {
                        "id": 154,
                        "parrafo_id": 30,
                        "numero": "154°",
                        "nombre": "Código de Minería",
                        "tipo_articulo": "permanente",
                        "orden": 12,
                        "texto_completo": "Suprímese el numeral 2° del artículo 17 del Código de Minería."
                    },
                    {
                        "id": 155,
                        "parrafo_id": 31,
                        "numero": "primero",
                        "nombre": "Facultades del Presidente",
                        "tipo_articulo": "transitorio",
                        "orden": 1,
                        "texto_completo": "Facúltase al Presidente de la República para que, dentro del plazo de un año contado desde la fecha de publicación de la presente ley, mediante uno o más decretos con fuerza de ley expedidos por intermedio del Ministerio del Medio Ambiente, suscritos por el Ministro de Hacienda y por el Ministro de Agricultura, establezca las normas necesarias para: 1) Fijar los grados mínimos y máximos de la escala única de remuneraciones del decreto ley N° 249, del Ministerio de Hacienda, promulgado el año 1973 y publicado el año 1974, que fija escala única de sueldos para el personal que señala, para cada uno de los estamentos del Servicio, y para el personal que cumple funciones como guardaparque en dicho Servicio. 2) Fijar la planta de personal de Directivos del Servicio, pudiendo al efecto fijar el número de cargos, los requisitos para el desempeño de los mismos, sus denominaciones, los cargos que se encuentren afectos al Título VI de la ley N° 19.882, y el grado de la escala única de remuneraciones del citado decreto ley N° 249, de 1974, asignado a cada uno de esos cargos. 3) Ordenar el traspaso al Servicio, sin solución de continuidad, de todo el personal de la Corporación Nacional Forestal, o de su sucesor legal, que preste servicios exclusivamente para la administración y gestión de las áreas silvestres protegidas, fijando el plazo en que se llevará a cabo este proceso, el cual deberá ocurrir dentro del tercer año contado desde la entrada en funcionamiento del Servicio. En cambio, la individualización del personal traspasado se llevará a cabo por decretos, expedidos bajo la fórmula 'Por orden del Presidente de la República', por intermedio del Ministerio del Medio Ambiente, el cual señalará la época en que se hará efectivo el traspaso de acuerdo a lo indicado anteriormente. 4) El pago de los beneficios indemnizatorios al personal traspasado se entenderá postergado por causa que otorgue derecho a percibirlo. En tal caso la indemnización se determinará computando el tiempo servido en la Corporación Nacional Forestal. Además, se computará el tiempo trabajado en el Servicio que crea la presente ley. 5) El uso de las facultades señaladas en el numeral 3) quedará sujeto a las siguientes restricciones respecto del personal que afecte: a) No podrá tener como consecuencia ni podrá ser considerado como causal de término de servicios, supresión de cargos, cese de funciones o término de la relación laboral del personal traspasado. b) No podrá significar pérdida del empleo, disminución de remuneraciones o modifición de derechos previsionales del personal traspasado. Tampoco podrá importar cambio de la residencia habitual de los funcionarios fuera de la región en que estén prestando servicios, salvo con su consentimiento. c) Cualquier diferencia de remuneraciones deberá ser pagada por planilla suplementaria, la que se absorberá por los futuros mejoramientos de remuneraciones que correspondan a los funcionarios, excepto los derivados de reajustes generales que se otorguen a los trabajadores del sector público. Dicha planilla mantendrá la misma imponibilidad que aquella de las remuneraciones que compensa. Además, a la planilla suplementaria se le aplicará el reajuste general antes indicado. d) El personal traspasado conservará la asignación de antigüedad que tenga reconocida, como también el tiempo computable para dicho reconocimiento. 6) Determinar la fecha de entrada en vigencia de la planta que fije. Igualmente fijará la dotación máxima de personal del Servicio. También establecerá la fecha en que dicho Servicio entrará en funcionamiento. 7) Traspasar los recursos y bienes que correspondan de la Corporación Nacional Forestal al Servicio, que tengan relación con Áreas Silvestres Protegidas del Estado. 8) A los funcionarios que sean traspasados desde la Corporación Nacional Forestal al Servicio, de conformidad a lo establecido en el numeral 3) de este artículo, no les será aplicable lo dispuesto en el artículo 16 de la presente ley, debiendo regirse en dichas materias por las normas que se encontraban vigentes en la mencionada Corporación al momento del traspaso. Sin perjuicio de lo anterior, los señalados trabajadores podrán someterse de manera voluntaria e irrevocable a la regulación de dicho artículo, de lo que se deberá dejar constancia en el respectivo contrato de trabajo. 9) Ordenar el traspaso, sin solución de continuidad, de 28 funcionarios a contrata desde la Subsecretaría del Medio Ambiente que presten servicios para la administración y gestión de las áreas protegidas, al Servicio de Biodiversidad y Áreas Protegidas, fijando la forma en que se realizará dicho traspaso al estatuto laboral que rige a dicho Servicio, y el plazo en que se llevará a cabo este proceso. El uso de esta facultad quedará sujeto a lo señalado en el numeral 5). La individualización del personal traspasado se realizará a través de decretos expedidos bajo la fórmula 'Por orden del Presidente de la República', por intermedio del Ministerio del Medio Ambiente, el que señalará la época en que se hará efectivo el traspaso de acuerdo a lo indicado anteriormente. A contar de la fecha del traspaso señalada en el inciso anterior, la dotación máxima de personal de la Subsecretaría del Medio Ambiente se disminuirá en 21 funcionarios y, a su vez, se incrementará en 28 funcionarios la dotación máxima de personal del Servicio de Biodiversidad y Áreas Protegidas. Conjuntamente, con el traspaso del personal se traspasarán los recursos presupuestarios que se liberen por este hecho. Además, podrá establecer las normas necesarias para la aplicación del régimen laboral del Servicio al personal traspasado. También, en el ejercicio de esta facultad, podrá determinar las normas complementarias a las remuneraciones del personal del Servicio y aquellas normas transitorias para la aplicación de las remuneraciones variables. Adicionalmente, establecerá en la dotación máxima de personal el número máximo de trabajadores que podrá ocupar cada estamento y grado correspondiente de la escala única de remuneraciones del mencionado decreto ley N° 249, de 1974. Asimismo, podrá establecer las indemnizaciones a que tendrán derecho en el caso de cese de funciones de los trabajadores que hubieren ingresado al Servicio en virtud de las disposiciones del Título VI de la ley N° 19.882."
                    },
                    {
                        "id": 156,
                        "parrafo_id": 31,
                        "numero": "segundo",
                        "nombre": "Primer presupuesto",
                        "tipo_articulo": "transitorio",
                        "orden": 2,
                        "texto_completo": "El Presidente de la República, por decreto expedido por el Ministerio de Hacienda, conformará el primer presupuesto del Servicio de Biodiversidad y Áreas Protegidas, y transferirá a éste los fondos de las entidades que traspasan personal o bienes, necesarios para que se cumplan sus funciones, pudiendo al efecto crear, suprimir o modificar las partidas, capítulos, asignaciones, ítem y glosas presupuestarias que sean pertinentes."
                    },
                    {
                        "id": 157,
                        "parrafo_id": 31,
                        "numero": "tercero",
                        "nombre": "Financiamiento",
                        "tipo_articulo": "transitorio",
                        "orden": 3,
                        "texto_completo": "El mayor gasto fiscal que represente la aplicación de la presente ley durante su primer año de vigencia se financiará con cargo a las reasignaciones presupuestarias efectuadas desde la partida presupuestaria del Ministerio del Medio Ambiente y, en lo que faltare, con cargo a la partida presupuestaria Tesoro Público. En los años siguientes se financiará con cargo a los recursos que se establezcan en las respectivas leyes de presupuestos del sector público."
                    },
                    {
                        "id": 158,
                        "parrafo_id": 31,
                        "numero": "cuarto",
                        "nombre": "Áreas protegidas existentes",
                        "tipo_articulo": "transitorio",
                        "orden": 4,
                        "texto_completo": "Se entenderá que forman parte del Sistema Nacional de Áreas Protegidas que establece la presente ley los parques marinos, parques nacionales, parques nacionales de turismo, monumentos naturales, reservas marinas, reservas nacionales, reservas forestales, santuarios de la naturaleza, áreas marinas y costeras protegidas, bienes nacionales protegidos y humedales de importancia internacional o sitios Ramsar creados hasta la fecha de publicación de la presente ley. Mientras no se proceda a una modificación de acuerdo al artículo 66 o al artículo transitorio siguiente, las áreas protegidas existentes se regirán por lo siguiente: a) A las reservas de región virgen aplicará la categoría de Reserva de Región Virgen. b) A los parques marinos, parques nacionales y parques nacionales de turismo aplicará la categoría de Parque Nacional. c) A los monumentos naturales aplicará la categoría de Monumento Natural. d) A las reservas marinas, reservas nacionales y a las reservas forestales aplicará la categoría de Reserva Nacional. e) A las áreas marinas y costeras protegidas aplicará la categoría de Área de Conservación de Múltiples Usos. f) A los sitios Ramsar o humedales de importancia internacional que no se encuentren dentro de los deslindes de otra área protegida, el Servicio propondrá al Ministerio del Medio Ambiente la categoría aplicable a fin de que este último lo declare como tal. Tratándose de aquellos sitios Ramsar o humedales de importancia internacional que se encuentren dentro de los deslindes de otra área protegida, se entenderá que éstos forman parte de dicha área y, por lo tanto, tienen la misma categoría de protección. En caso que el sitio Ramsar o humedal de importancia internacional sea de propiedad privada, se requerirá el consentimiento del propietario para proceder a su afectación como área protegida. g) En el caso de los bienes nacionales protegidos, se estará a lo dispuesto en sus respectivos decretos de creación. h) En el caso de los santuarios de la naturaleza, lo dispuesto en el artículo 152 sólo comenzará a regir una vez concluido el proceso de reclasificación, manteniéndose plenamente vigentes los elementos de protección establecidos para dicha categoría durante el plazo señalado en el artículo siguiente."
                    },
                    {
                        "id": 159,
                        "parrafo_id": 31,
                        "numero": "quinto",
                        "nombre": "Reclasificación de áreas",
                        "tipo_articulo": "transitorio",
                        "orden": 5,
                        "texto_completo": "Las reservas marinas, los santuarios de la naturaleza y los bienes nacionales protegidos existentes a la fecha de publicación de la presente ley deberán someterse a un proceso de homologación a las categorías de protección, de acuerdo a las reglas siguientes: a) En el caso de las reservas marinas, el Ministerio del Medio Ambiente en conjunto con el Ministerio de Economía, Fomento y Turismo, previo informe del Servicio y de la Subsecretaría de Pesca y Acuicultura, determinarán si corresponde su denominación como Reserva de Interés Pesquero o como Reserva Nacional. b) En el caso de los santuarios de la naturaleza, el Ministerio del Medio Ambiente, previo informe del Servicio, deberá determinar a qué categoría deben adscribirse. En caso que el área sea de propiedad privada, se requerirá el consentimiento del propietario para definir su reclasificación. Si concluido el plazo establecido en el inciso segundo no se obtuviere el consentimiento del propietario, el Ministerio del Medio Ambiente determinará a qué categoría deberá adscribirse, la cual deberá basarse en el decreto supremo de creación del respectivo santuario de la naturaleza, en su objeto de protección y en el plan de manejo. El Servicio elaborará un informe que contendrá dicha información, que servirá de base para el pronunciamiento del Ministerio. c) En el caso de bienes nacionales protegidos, el Ministerio del Medio Ambiente, previo informe del Servicio, deberá determinar, en conjunto con el Ministerio de Bienes Nacionales, la categoría de protección aplicable, si corresponde. El plazo para la reclasificación señalada será de cinco años contado desde la entrada en funcionamiento del Servicio. La reclasificación u homologación en ningún caso reducirá el grado de protección, jerarquía o superficie de un área protegida."
                    },
                    {
                        "id": 160,
                        "parrafo_id": 31,
                        "numero": "sexto",
                        "nombre": "Concesiones preexistentes",
                        "tipo_articulo": "transitorio",
                        "orden": 6,
                        "texto_completo": "Las concesiones o contratos que se hubieren otorgado o adjudicado antes de la creación de un área protegida en espacios comprendidos en ellas de acuerdo con esta ley continuarán vigentes al interior de éstas, hasta el momento que se efectúe su relocalización, a menos que caigan en incumplimiento de las normas especiales que las rige y se produzca con ello la caducidad de la concesión o término del contrato. La misma regla se aplicará a los contratos que hubiere celebrado la Corporación Nacional Forestal sobre terrenos comprendidos en áreas silvestres protegidas bajo su administración, en conformidad con el inciso segundo del artículo 10 del decreto supremo Nº 4.363, del Ministerio de Tierras y Colonización, de 1931, que aprueba el texto definitivo de la Ley de Bosques, que se encuentren en vigor a la fecha de entrada en vigencia de la presente ley. Para los efectos del inciso anterior se entenderá al Servicio de Biodiversidad y Áreas Protegidas como sucesor legal de la Corporación Nacional Forestal. La creación de un área protegida tampoco obstará el desarrollo de aquellas actividades que, al interior de esta área, contaren con una resolución de calificación ambiental favorable."
                    },
                    {
                        "id": 161,
                        "parrafo_id": 31,
                        "numero": "séptimo",
                        "nombre": "Acuerdos con pueblos originarios",
                        "tipo_articulo": "transitorio",
                        "orden": 7,
                        "texto_completo": "Los actos, contratos y convenios otorgados o celebrados con comunidades, corporaciones u otras formas de representación del pueblo Rapa Nui a la fecha de la publicación de la presente ley, relacionados con la administración y gestión de las áreas protegidas, mantendrán su vigencia de conformidad lo dispone el artículo sexto transitorio de esta ley, así como la colaboración de la Comisión de Desarrollo de Isla de Pascua en la administración del Parque Nacional de Isla de Pascua, conforme dispone el artículo 67 de la ley N° 19.253. Asimismo, colaborará en aquellas áreas protegidas actuales o que se puedan crear con posterioridad."
                    },
                    {
                        "id": 162,
                        "parrafo_id": 31,
                        "numero": "octavo",
                        "nombre": "Sitios prioritarios existentes",
                        "tipo_articulo": "transitorio",
                        "orden": 8,
                        "texto_completo": "Los sitios prioritarios para la conservación identificados en la Estrategia Nacional de Biodiversidad y en las Estrategias Regionales de Biodiversidad mantendrán sus efectos legales vigentes con anterioridad a la publicación de la presente ley. El Ministerio del Medio Ambiente, dentro del plazo de cinco años contado desde la publicación señalada, dictará un decreto supremo para determinar los mencionados sitios prioritarios que pasarán a regirse por los efectos de la presente ley."
                    },
                    {
                        "id": 163,
                        "parrafo_id": 31,
                        "numero": "noveno",
                        "nombre": "Vigencia gradual de funciones",
                        "tipo_articulo": "transitorio",
                        "orden": 9,
                        "texto_completo": "Las funciones y atribuciones del Servicio establecidas en la letra b) del artículo 5° entrarán en vigencia dentro del tercer año, contado desde la entrada en funcionamiento del Servicio, lo que será determinado por uno o más decretos, expedidos bajo la fórmula 'Por orden del Presidente de la República', por intermedio del Ministerio del Medio Ambiente, el cual señalará la época en que se hará efectiva, la que deberá necesariamente corresponder con el traspaso del personal al Servicio al que se refiere numeral 3) del artículo primero transitorio, cuando recaigan en áreas protegidas del Estado de las categorías Parque Nacional, Reserva Nacional y Monumento Natural."
                    },
                    {
                        "id": 164,
                        "parrafo_id": 31,
                        "numero": "décimo",
                        "nombre": "Relocalización de concesiones de acuicultura",
                        "tipo_articulo": "transitorio",
                        "orden": 10,
                        "texto_completo": "En los casos en que el área protegida comprenda sectores en que se encuentren ubicadas concesiones de acuicultura, el titular de la misma podrá relocalizar su concesión conforme a la ley N° 20.434 y a la ley N° 21.183, según sea el caso, gozando de preferencia frente a otras solicitudes de concesión o relocalización, salvo respecto de las preferencias establecidas en la citada ley. Dicha preferencia regirá aun cuando no exista suspensión de otorgamiento de concesiones de acuicultura en las regiones de Los Lagos y de Aysén."
                    },
                    {
                        "id": 165,
                        "parrafo_id": 31,
                        "numero": "undécimo",
                        "nombre": "Excepción para guardaparques",
                        "tipo_articulo": "transitorio",
                        "orden": 11,
                        "texto_completo": "Estarán exentos del requisito establecido en la letra a) del inciso segundo del artículo 77 los guardaparques que hubieren sido traspasados desde la Corporación Nacional Forestal, o de su sucesor legal, al Servicio de Biodiversidad y Áreas Protegidas."
                    },
                    {
                        "id": 166,
                        "parrafo_id": 31,
                        "numero": "duodécimo",
                        "nombre": "Plazo para reglamentos",
                        "tipo_articulo": "transitorio",
                        "orden": 12,
                        "texto_completo": "Los reglamentos referidos en esta ley deberán dictarse dentro del plazo de dos años contado desde su publicación. En el procedimiento de elaboración de los reglamentos referidos en los artículos 15 y 22, el Ministerio del Medio Ambiente deberá contemplar una etapa de participación de los trabajadores referidos en el artículo primero transitorio. Con todo, el reglamento referido en el artículo 22 considerará en la realización de los concursos públicos de ingreso al Servicio la experiencia laboral en materias de biodiversidad."
                    },
                    {
                        "id": 167,
                        "parrafo_id": 31,
                        "numero": "décimo tercero",
                        "nombre": "Primer director nacional",
                        "tipo_articulo": "transitorio",
                        "orden": 13,
                        "texto_completo": "El Presidente de la República, a partir de la publicación de esta ley y sin sujetarse a lo dispuesto en el título VI de la ley N° 19.882, podrá nombrar al primer director nacional del Servicio de Biodiversidad y Áreas Protegidas, quien asumirá de inmediato y desarrollará sus funciones en tanto se efectúe el proceso de selección pertinente que establece la señalada ley para los cargos del Sistema de Alta Dirección Pública. En el acto de nombramiento, el Presidente de la República fijará la remuneración y la asignación de alta dirección pública que le corresponderá al director, siempre que no se encuentre vigente la respectiva planta de personal. En tanto no entre en funcionamiento el Servicio de Biodiversidad y Áreas Protegidas, la remuneración del director nacional se financiará con cargo al presupuesto del Ministerio del Medio Ambiente."
                    }
                    ],
      categorias: [
        { "id": 1, "nombre": "Procedimientos Administrativos", "tipo": "procedimiento", "color": "#3b82f6", "grupo": "Acción y Procedimiento" },
        { "id": 2, "nombre": "Permisos y Autorizaciones", "tipo": "procedimiento", "color": "#06b6d4", "grupo": "Acción y Procedimiento" },
        { "id": 3, "nombre": "Fiscalización y Sanciones", "tipo": "procedimiento", "color": "#ef4444", "grupo": "Acción y Procedimiento" },
        { "id": 4, "nombre": "Participación Ciudadana", "tipo": "procedimiento", "color": "#8b5cf6", "grupo": "Acción y Procedimiento" },
        { "id": 5, "nombre": "Servicio de Biodiversidad (SBAP)", "tipo": "actor", "color": "#10b981", "grupo": "Actores e Instituciones" },
        { "id": 6, "nombre": "Ministerio del Medio Ambiente", "tipo": "actor", "color": "#f59e0b", "grupo": "Actores e Instituciones" },
        { "id": 7, "nombre": "SAG", "tipo": "actor", "color": "#84cc16", "grupo": "Actores e Instituciones" },
        { "id": 8, "nombre": "Comités y Consejos Asesores", "tipo": "actor", "color": "#f97316", "grupo": "Actores e Instituciones" },
        { "id": 9, "nombre": "Instrumentos de Ordenamiento Territorial", "tipo": "conceptual", "color": "#6366f1", "grupo": "Conceptual y Espacial" },
        { "id": 10, "nombre": "Relación con Otras Normas", "tipo": "conceptual", "color": "#ec4899", "grupo": "Conceptual y Espacial" },
        { "id": 11, "nombre": "Financiamiento y Fondos", "tipo": "economico", "color": "#14b8a6", "grupo": "Económico y Social" },
        { "id": 12, "nombre": "Valoración de Servicios Ecosistémicos", "tipo": "economico", "color": "#a855f7", "grupo": "Económico y Social" },
        { "id": 13, "nombre": "Responsabilidad y Reparación", "tipo": "economico", "color": "#f43f5e", "grupo": "Económico y Social" },
        { "id": 14, "nombre": "Disposiciones Transitorias", "tipo": "estructural", "color": "#64748b", "grupo": "Estructural" },
        { "id": 15, "nombre": "Exenciones y Exclusiones", "tipo": "estructural", "color": "#78716c", "grupo": "Estructural" },
        { "id": 16, "nombre": "Definiciones", "tipo": "funcional", "color": "#0ea5e9", "grupo": "Funcional" }
        ],
      articulos_categorias:[{"articulo_id":1,"categoria_id":15},{"articulo_id":1,"categoria_id":5},{"articulo_id":1,"categoria_id":16},{"articulo_id":2,"categoria_id":4},{"articulo_id":2,"categoria_id":5},{"articulo_id":2,"categoria_id":12},{"articulo_id":3,"categoria_id":16},{"articulo_id":3,"categoria_id":5},{"articulo_id":3,"categoria_id":9},{"articulo_id":4,"categoria_id":1},{"articulo_id":4,"categoria_id":5},{"articulo_id":4,"categoria_id":16},{"articulo_id":5,"categoria_id":2},{"articulo_id":5,"categoria_id":5},{"articulo_id":5,"categoria_id":9},{"articulo_id":5,"categoria_id":12},{"articulo_id":6,"categoria_id":1},{"articulo_id":6,"categoria_id":5},{"articulo_id":6,"categoria_id":9},{"articulo_id":6,"categoria_id":16},{"articulo_id":7,"categoria_id":1},{"articulo_id":7,"categoria_id":5},{"articulo_id":7,"categoria_id":3},{"articulo_id":8,"categoria_id":1},{"articulo_id":8,"categoria_id":5},{"articulo_id":8,"categoria_id":9},{"articulo_id":8,"categoria_id":11},{"articulo_id":9,"categoria_id":4},{"articulo_id":9,"categoria_id":5},{"articulo_id":9,"categoria_id":13},{"articulo_id":9,"categoria_id":8},{"articulo_id":10,"categoria_id":14},{"articulo_id":10,"categoria_id":5},{"articulo_id":10,"categoria_id":11},{"articulo_id":11,"categoria_id":1},{"articulo_id":11,"categoria_id":5},{"articulo_id":11,"categoria_id":13},{"articulo_id":12,"categoria_id":1},{"articulo_id":12,"categoria_id":5},{"articulo_id":12,"categoria_id":13},{"articulo_id":13,"categoria_id":1},{"articulo_id":13,"categoria_id":5},{"articulo_id":13,"categoria_id":3},{"articulo_id":14,"categoria_id":1},{"articulo_id":14,"categoria_id":5},{"articulo_id":14,"categoria_id":2},{"articulo_id":15,"categoria_id":1},{"articulo_id":15,"categoria_id":5},{"articulo_id":15,"categoria_id":3},{"articulo_id":16,"categoria_id":1},{"articulo_id":16,"categoria_id":5},{"articulo_id":16,"categoria_id":13},{"articulo_id":17,"categoria_id":1},{"articulo_id":17,"categoria_id":5},{"articulo_id":17,"categoria_id":13},{"articulo_id":18,"categoria_id":1},{"articulo_id":18,"categoria_id":5},{"articulo_id":18,"categoria_id":11},{"articulo_id":19,"categoria_id":3},{"articulo_id":19,"categoria_id":5},{"articulo_id":19,"categoria_id":1},{"articulo_id":20,"categoria_id":3},{"articulo_id":20,"categoria_id":5},{"articulo_id":20,"categoria_id":1},{"articulo_id":21,"categoria_id":1},{"articulo_id":21,"categoria_id":5},{"articulo_id":21,"categoria_id":13},{"articulo_id":22,"categoria_id":1},{"articulo_id":22,"categoria_id":5},{"articulo_id":22,"categoria_id":13},{"articulo_id":23,"categoria_id":1},{"articulo_id":23,"categoria_id":5},{"articulo_id":23,"categoria_id":9},{"articulo_id":24,"categoria_id":1},{"articulo_id":24,"categoria_id":5},{"articulo_id":24,"categoria_id":9},{"articulo_id":25,"categoria_id":1},{"articulo_id":25,"categoria_id":5},{"articulo_id":25,"categoria_id":9},{"articulo_id":26,"categoria_id":1},{"articulo_id":26,"categoria_id":5},{"articulo_id":26,"categoria_id":9},{"articulo_id":27,"categoria_id":1},{"articulo_id":27,"categoria_id":5},{"articulo_id":27,"categoria_id":9},{"articulo_id":28,"categoria_id":1},{"articulo_id":28,"categoria_id":5},{"articulo_id":28,"categoria_id":9},{"articulo_id":29,"categoria_id":1},{"articulo_id":29,"categoria_id":5},{"articulo_id":29,"categoria_id":9},{"articulo_id":30,"categoria_id":1},{"articulo_id":30,"categoria_id":5},{"articulo_id":30,"categoria_id":9},{"articulo_id":31,"categoria_id":1},{"articulo_id":31,"categoria_id":5},{"articulo_id":31,"categoria_id":9},{"articulo_id":32,"categoria_id":1},{"articulo_id":32,"categoria_id":5},{"articulo_id":32,"categoria_id":9},{"articulo_id":33,"categoria_id":1},{"articulo_id":33,"categoria_id":5},{"articulo_id":33,"categoria_id":9},{"articulo_id":34,"categoria_id":4},{"articulo_id":34,"categoria_id":5},{"articulo_id":34,"categoria_id":11},{"articulo_id":35,"categoria_id":1},{"articulo_id":35,"categoria_id":5},{"articulo_id":35,"categoria_id":9},{"articulo_id":36,"categoria_id":1},{"articulo_id":36,"categoria_id":5},{"articulo_id":36,"categoria_id":9},{"articulo_id":37,"categoria_id":1},{"articulo_id":37,"categoria_id":5},{"articulo_id":37,"categoria_id":9},{"articulo_id":38,"categoria_id":13},{"articulo_id":38,"categoria_id":5},{"articulo_id":38,"categoria_id":1},{"articulo_id":39,"categoria_id":1},{"articulo_id":39,"categoria_id":5},{"articulo_id":39,"categoria_id":9},{"articulo_id":40,"categoria_id":1},{"articulo_id":40,"categoria_id":5},{"articulo_id":40,"categoria_id":9},{"articulo_id":41,"categoria_id":2},{"articulo_id":41,"categoria_id":5},{"articulo_id":41,"categoria_id":9},{"articulo_id":42,"categoria_id":1},{"articulo_id":42,"categoria_id":5},{"articulo_id":42,"categoria_id":9},{"articulo_id":43,"categoria_id":1},{"articulo_id":43,"categoria_id":5},{"articulo_id":43,"categoria_id":9},{"articulo_id":44,"categoria_id":2},{"articulo_id":44,"categoria_id":5},{"articulo_id":44,"categoria_id":9},{"articulo_id":45,"categoria_id":3},{"articulo_id":45,"categoria_id":5},{"articulo_id":45,"categoria_id":1},{"articulo_id":46,"categoria_id":11},{"articulo_id":46,"categoria_id":5},{"articulo_id":46,"categoria_id":4},{"articulo_id":47,"categoria_id":11},{"articulo_id":47,"categoria_id":5},{"articulo_id":47,"categoria_id":4},{"articulo_id":48,"categoria_id":11},{"articulo_id":48,"categoria_id":5},{"articulo_id":48,"categoria_id":1},{"articulo_id":49,"categoria_id":11},{"articulo_id":49,"categoria_id":5},{"articulo_id":49,"categoria_id":1},{"articulo_id":50,"categoria_id":12},{"articulo_id":50,"categoria_id":5},{"articulo_id":50,"categoria_id":1},{"articulo_id":51,"categoria_id":2},{"articulo_id":51,"categoria_id":5},{"articulo_id":51,"categoria_id":16},{"articulo_id":52,"categoria_id":12},{"articulo_id":52,"categoria_id":5},{"articulo_id":52,"categoria_id":1},{"articulo_id":53,"categoria_id":5},{"articulo_id":53,"categoria_id":9},{"articulo_id":53,"categoria_id":1},{"articulo_id":54,"categoria_id":5},{"articulo_id":54,"categoria_id":9},{"articulo_id":54,"categoria_id":1},{"articulo_id":55,"categoria_id":5},{"articulo_id":55,"categoria_id":9},{"articulo_id":55,"categoria_id":1},{"articulo_id":56,"categoria_id":9},{"articulo_id":56,"categoria_id":5},{"articulo_id":56,"categoria_id":1},{"articulo_id":57,"categoria_id":9},{"articulo_id":57,"categoria_id":5},{"articulo_id":57,"categoria_id":1},{"articulo_id":58,"categoria_id":9},{"articulo_id":58,"categoria_id":5},{"articulo_id":58,"categoria_id":1},{"articulo_id":59,"categoria_id":9},{"articulo_id":59,"categoria_id":5},{"articulo_id":59,"categoria_id":1},{"articulo_id":60,"categoria_id":9},{"articulo_id":60,"categoria_id":5},{"articulo_id":60,"categoria_id":1},{"articulo_id":61,"categoria_id":9},{"articulo_id":61,"categoria_id":5},{"articulo_id":61,"categoria_id":1},{"articulo_id":62,"categoria_id":9},{"articulo_id":62,"categoria_id":5},{"articulo_id":62,"categoria_id":1},{"articulo_id":63,"categoria_id":2},{"articulo_id":63,"categoria_id":5},{"articulo_id":63,"categoria_id":9},{"articulo_id":64,"categoria_id":5},{"articulo_id":64,"categoria_id":9},{"articulo_id":64,"categoria_id":1},{"articulo_id":65,"categoria_id":5},{"articulo_id":65,"categoria_id":9},{"articulo_id":65,"categoria_id":4},{"articulo_id":66,"categoria_id":5},{"articulo_id":66,"categoria_id":9},{"articulo_id":66,"categoria_id":1},{"articulo_id":67,"categoria_id":5},{"articulo_id":67,"categoria_id":9},{"articulo_id":67,"categoria_id":1},{"articulo_id":68,"categoria_id":5},{"articulo_id":68,"categoria_id":4},{"articulo_id":68,"categoria_id":1},{"articulo_id":69,"categoria_id":5},{"articulo_id":69,"categoria_id":9},{"articulo_id":69,"categoria_id":2},{"articulo_id":70,"categoria_id":11},{"articulo_id":70,"categoria_id":5},{"articulo_id":70,"categoria_id":4},{"articulo_id":71,"categoria_id":9},{"articulo_id":71,"categoria_id":5},{"articulo_id":71,"categoria_id":1},{"articulo_id":72,"categoria_id":9},{"articulo_id":72,"categoria_id":5},{"articulo_id":72,"categoria_id":16},{"articulo_id":73,"categoria_id":5},{"articulo_id":73,"categoria_id":9},{"articulo_id":73,"categoria_id":1},{"articulo_id":74,"categoria_id":5},{"articulo_id":74,"categoria_id":9},{"articulo_id":74,"categoria_id":4},{"articulo_id":75,"categoria_id":5},{"articulo_id":75,"categoria_id":9},{"articulo_id":75,"categoria_id":3},{"articulo_id":76,"categoria_id":5},{"articulo_id":76,"categoria_id":9},{"articulo_id":76,"categoria_id":3},{"articulo_id":77,"categoria_id":5},{"articulo_id":77,"categoria_id":9},{"articulo_id":77,"categoria_id":2},{"articulo_id":78,"categoria_id":5},{"articulo_id":78,"categoria_id":9},{"articulo_id":78,"categoria_id":1},{"articulo_id":79,"categoria_id":2},{"articulo_id":79,"categoria_id":5},{"articulo_id":79,"categoria_id":9},{"articulo_id":80,"categoria_id":2},{"articulo_id":80,"categoria_id":5},{"articulo_id":80,"categoria_id":9},{"articulo_id":81,"categoria_id":8},{"articulo_id":81,"categoria_id":5},{"articulo_id":81,"categoria_id":9},{"articulo_id":82,"categoria_id":11},{"articulo_id":82,"categoria_id":5},{"articulo_id":82,"categoria_id":1},{"articulo_id":83,"categoria_id":2},{"articulo_id":83,"categoria_id":5},{"articulo_id":83,"categoria_id":9},{"articulo_id":84,"categoria_id":2},{"articulo_id":84,"categoria_id":5},{"articulo_id":84,"categoria_id":9},{"articulo_id":85,"categoria_id":2},{"articulo_id":85,"categoria_id":5},{"articulo_id":85,"categoria_id":9},{"articulo_id":86,"categoria_id":2},{"articulo_id":86,"categoria_id":5},{"articulo_id":86,"categoria_id":9},{"articulo_id":87,"categoria_id":2},{"articulo_id":87,"categoria_id":5},{"articulo_id":87,"categoria_id":9},{"articulo_id":88,"categoria_id":2},{"articulo_id":88,"categoria_id":5},{"articulo_id":88,"categoria_id":9},{"articulo_id":89,"categoria_id":2},{"articulo_id":89,"categoria_id":5},{"articulo_id":89,"categoria_id":9},{"articulo_id":90,"categoria_id":2},{"articulo_id":90,"categoria_id":5},{"articulo_id":90,"categoria_id":13},{"articulo_id":91,"categoria_id":2},{"articulo_id":91,"categoria_id":5},{"articulo_id":91,"categoria_id":10},{"articulo_id":92,"categoria_id":2},{"articulo_id":92,"categoria_id":5},{"articulo_id":92,"categoria_id":9},{"articulo_id":93,"categoria_id":2},{"articulo_id":93,"categoria_id":5},{"articulo_id":93,"categoria_id":15},{"articulo_id":94,"categoria_id":2},{"articulo_id":94,"categoria_id":5},{"articulo_id":94,"categoria_id":9},{"articulo_id":95,"categoria_id":2},{"articulo_id":95,"categoria_id":5},{"articulo_id":95,"categoria_id":9},{"articulo_id":96,"categoria_id":3},{"articulo_id":96,"categoria_id":5},{"articulo_id":96,"categoria_id":9},{"articulo_id":97,"categoria_id":5},{"articulo_id":97,"categoria_id":9},{"articulo_id":97,"categoria_id":4},{"articulo_id":98,"categoria_id":2},{"articulo_id":98,"categoria_id":5},{"articulo_id":98,"categoria_id":9},{"articulo_id":99,"categoria_id":5},{"articulo_id":99,"categoria_id":9},{"articulo_id":99,"categoria_id":6},{"articulo_id":100,"categoria_id":5},{"articulo_id":100,"categoria_id":9},{"articulo_id":100,"categoria_id":1},{"articulo_id":101,"categoria_id":5},{"articulo_id":101,"categoria_id":9},{"articulo_id":101,"categoria_id":1},{"articulo_id":102,"categoria_id":5},{"articulo_id":102,"categoria_id":9},{"articulo_id":102,"categoria_id":3},{"articulo_id":103,"categoria_id":5},{"articulo_id":103,"categoria_id":9},{"articulo_id":103,"categoria_id":1},{"articulo_id":104,"categoria_id":5},{"articulo_id":104,"categoria_id":9},{"articulo_id":104,"categoria_id":1},{"articulo_id":105,"categoria_id":11},{"articulo_id":105,"categoria_id":5},{"articulo_id":105,"categoria_id":1},{"articulo_id":106,"categoria_id":9},{"articulo_id":106,"categoria_id":5},{"articulo_id":106,"categoria_id":1},{"articulo_id":107,"categoria_id":15},{"articulo_id":107,"categoria_id":5},{"articulo_id":107,"categoria_id":9},{"articulo_id":108,"categoria_id":3},{"articulo_id":108,"categoria_id":5},{"articulo_id":108,"categoria_id":9},{"articulo_id":109,"categoria_id":3},{"articulo_id":109,"categoria_id":5},{"articulo_id":109,"categoria_id":1},{"articulo_id":110,"categoria_id":3},{"articulo_id":110,"categoria_id":5},{"articulo_id":110,"categoria_id":1},{"articulo_id":111,"categoria_id":3},{"articulo_id":111,"categoria_id":5},{"articulo_id":111,"categoria_id":1},{"articulo_id":112,"categoria_id":3},{"articulo_id":112,"categoria_id":5},{"articulo_id":112,"categoria_id":1},{"articulo_id":113,"categoria_id":3},{"articulo_id":113,"categoria_id":5},{"articulo_id":113,"categoria_id":1},{"articulo_id":114,"categoria_id":3},{"articulo_id":114,"categoria_id":5},{"articulo_id":114,"categoria_id":1},{"articulo_id":115,"categoria_id":3},{"articulo_id":115,"categoria_id":5},{"articulo_id":115,"categoria_id":1},{"articulo_id":116,"categoria_id":3},{"articulo_id":116,"categoria_id":5},{"articulo_id":116,"categoria_id":1},{"articulo_id":117,"categoria_id":3},{"articulo_id":117,"categoria_id":5},{"articulo_id":117,"categoria_id":1},{"articulo_id":118,"categoria_id":3},{"articulo_id":118,"categoria_id":5},{"articulo_id":118,"categoria_id":1},{"articulo_id":119,"categoria_id":3},{"articulo_id":119,"categoria_id":5},{"articulo_id":119,"categoria_id":1},{"articulo_id":120,"categoria_id":3},{"articulo_id":120,"categoria_id":5},{"articulo_id":120,"categoria_id":1},{"articulo_id":121,"categoria_id":3},{"articulo_id":121,"categoria_id":5},{"articulo_id":121,"categoria_id":1},{"articulo_id":122,"categoria_id":3},{"articulo_id":122,"categoria_id":5},{"articulo_id":122,"categoria_id":1},{"articulo_id":123,"categoria_id":3},{"articulo_id":123,"categoria_id":5},{"articulo_id":123,"categoria_id":1},{"articulo_id":124,"categoria_id":3},{"articulo_id":124,"categoria_id":5},{"articulo_id":124,"categoria_id":1},{"articulo_id":125,"categoria_id":3},{"articulo_id":125,"categoria_id":5},{"articulo_id":125,"categoria_id":1},{"articulo_id":126,"categoria_id":3},{"articulo_id":126,"categoria_id":5},{"articulo_id":126,"categoria_id":1},{"articulo_id":127,"categoria_id":3},{"articulo_id":127,"categoria_id":5},{"articulo_id":127,"categoria_id":1},{"articulo_id":128,"categoria_id":3},{"articulo_id":128,"categoria_id":5},{"articulo_id":128,"categoria_id":1},{"articulo_id":129,"categoria_id":3},{"articulo_id":129,"categoria_id":5},{"articulo_id":129,"categoria_id":1},{"articulo_id":130,"categoria_id":3},{"articulo_id":130,"categoria_id":5},{"articulo_id":130,"categoria_id":1},{"articulo_id":131,"categoria_id":3},{"articulo_id":131,"categoria_id":5},{"articulo_id":131,"categoria_id":1},{"articulo_id":132,"categoria_id":3},{"articulo_id":132,"categoria_id":5},{"articulo_id":132,"categoria_id":1},{"articulo_id":133,"categoria_id":3},{"articulo_id":133,"categoria_id":5},{"articulo_id":133,"categoria_id":1},{"articulo_id":134,"categoria_id":3},{"articulo_id":134,"categoria_id":5},{"articulo_id":134,"categoria_id":1},{"articulo_id":135,"categoria_id":3},{"articulo_id":135,"categoria_id":5},{"articulo_id":135,"categoria_id":1},{"articulo_id":136,"categoria_id":3},{"articulo_id":136,"categoria_id":5},{"articulo_id":136,"categoria_id":1},{"articulo_id":137,"categoria_id":3},{"articulo_id":137,"categoria_id":5},{"articulo_id":137,"categoria_id":1},{"articulo_id":138,"categoria_id":3},{"articulo_id":138,"categoria_id":5},{"articulo_id":138,"categoria_id":1},{"articulo_id":139,"categoria_id":3},{"articulo_id":139,"categoria_id":5},{"articulo_id":139,"categoria_id":1},{"articulo_id":140,"categoria_id":3},{"articulo_id":140,"categoria_id":5},{"articulo_id":140,"categoria_id":1},{"articulo_id":141,"categoria_id":13},{"articulo_id":141,"categoria_id":5},{"articulo_id":141,"categoria_id":1},{"articulo_id":142,"categoria_id":3},{"articulo_id":142,"categoria_id":5},{"articulo_id":142,"categoria_id":1},{"articulo_id":143,"categoria_id":10},{"articulo_id":143,"categoria_id":5},{"articulo_id":143,"categoria_id":1},{"articulo_id":144,"categoria_id":10},{"articulo_id":144,"categoria_id":5},{"articulo_id":144,"categoria_id":2},{"articulo_id":145,"categoria_id":10},{"articulo_id":145,"categoria_id":5},{"articulo_id":145,"categoria_id":1},{"articulo_id":146,"categoria_id":10},{"articulo_id":146,"categoria_id":5},{"articulo_id":146,"categoria_id":1},{"articulo_id":147,"categoria_id":10},{"articulo_id":147,"categoria_id":5},{"articulo_id":147,"categoria_id":1},{"articulo_id":148,"categoria_id":10},{"articulo_id":148,"categoria_id":5},{"articulo_id":148,"categoria_id":1},{"articulo_id":149,"categoria_id":10},{"articulo_id":149,"categoria_id":5},{"articulo_id":149,"categoria_id":1},{"articulo_id":150,"categoria_id":10},{"articulo_id":150,"categoria_id":5},{"articulo_id":150,"categoria_id":1},{"articulo_id":151,"categoria_id":10},{"articulo_id":151,"categoria_id":5},{"articulo_id":151,"categoria_id":1},{"articulo_id":152,"categoria_id":10},{"articulo_id":152,"categoria_id":5},{"articulo_id":152,"categoria_id":1},{"articulo_id":153,"categoria_id":10},{"articulo_id":153,"categoria_id":5},{"articulo_id":153,"categoria_id":1},{"articulo_id":154,"categoria_id":10},{"articulo_id":154,"categoria_id":5},{"articulo_id":154,"categoria_id":1},{"articulo_id":155,"categoria_id":14},{"articulo_id":155,"categoria_id":5},{"articulo_id":155,"categoria_id":1},{"articulo_id":156,"categoria_id":14},{"articulo_id":156,"categoria_id":5},{"articulo_id":156,"categoria_id":1},{"articulo_id":157,"categoria_id":14},{"articulo_id":157,"categoria_id":5},{"articulo_id":157,"categoria_id":1},{"articulo_id":158,"categoria_id":14},{"articulo_id":158,"categoria_id":5},{"articulo_id":158,"categoria_id":1},{"articulo_id":159,"categoria_id":14},{"articulo_id":159,"categoria_id":5},{"articulo_id":159,"categoria_id":1},{"articulo_id":160,"categoria_id":14},{"articulo_id":160,"categoria_id":5},{"articulo_id":160,"categoria_id":1},{"articulo_id":161,"categoria_id":14},{"articulo_id":161,"categoria_id":5},{"articulo_id":161,"categoria_id":1},{"articulo_id":162,"categoria_id":14},{"articulo_id":162,"categoria_id":5},{"articulo_id":162,"categoria_id":1},{"articulo_id":163,"categoria_id":14},{"articulo_id":163,"categoria_id":5},{"articulo_id":163,"categoria_id":1},{"articulo_id":164,"categoria_id":14},{"articulo_id":164,"categoria_id":5},{"articulo_id":164,"categoria_id":1},{"articulo_id":165,"categoria_id":14},{"articulo_id":165,"categoria_id":5},{"articulo_id":165,"categoria_id":1},{"articulo_id":166,"categoria_id":14},{"articulo_id":166,"categoria_id":5},{"articulo_id":166,"categoria_id":1},{"articulo_id":167,"categoria_id":14},{"articulo_id":167,"categoria_id":5},{"articulo_id":167,"categoria_id":1}] ,
      definiciones: [
                    {
                        "id": 1,
                        "articulo_id": 3,
                        "numero": "1)",
                        "termino": "Área degradada",
                        "definicion": "ecosistema o parte de él cuyos elementos físicos, químicos o biológicos han sido alterados de manera significativa con pérdida de biodiversidad, o presenta alteración de su funcionamiento, estructura o composición, causados por actividades o perturbaciones antropogénicas que son frecuentes o severas, de acuerdo al procedimiento de declaración que establezca el reglamento a que se refiere el artículo 32."
                    },
                    {
                        "id": 2,
                        "articulo_id": 3,
                        "numero": "2)",
                        "termino": "Área protegida",
                        "definicion": "espacio geográfico específico y delimitado, reconocido mediante decreto supremo del Ministerio del Medio Ambiente, con la finalidad de asegurar, en el presente y a largo plazo, la preservación y conservación de la biodiversidad del país, así como la protección del patrimonio natural, cultural y del valor paisajístico contenidos en dicho espacio."
                    },
                    {
                        "id": 3,
                        "articulo_id": 3,
                        "numero": "3)",
                        "termino": "Área protegida del Estado",
                        "definicion": "área protegida creada en espacios de propiedad fiscal o en bienes nacionales de uso público, incluyendo la zona económica exclusiva."
                    },
                    {
                        "id": 4,
                        "articulo_id": 3,
                        "numero": "4)",
                        "termino": "Área protegida privada",
                        "definicion": "área protegida creada en espacios de propiedad privada y reconocida por el Estado conforme a las disposiciones de la presente ley."
                    },
                    {
                        "id": 5,
                        "articulo_id": 3,
                        "numero": "5)",
                        "termino": "Biodiversidad o diversidad biológica",
                        "definicion": "la variedad de los organismos vivos que forman parte de todos los ecosistemas terrestres y acuáticos. Incluye la diversidad dentro de una misma especie, entre especies y entre ecosistemas y sus interacciones."
                    },
                    {
                        "id": 6,
                        "articulo_id": 3,
                        "numero": "6)",
                        "termino": "Conservación de la biodiversidad",
                        "definicion": "conjunto de políticas, estrategias, planes, programas y acciones destinadas a la mantención de la estructura, composición y función de los ecosistemas mediante la protección, preservación, restauración, o uso sustentable de uno o más componentes de la diversidad biológica."
                    },
                    {
                        "id": 7,
                        "articulo_id": 3,
                        "numero": "7)",
                        "termino": "Conservación in situ",
                        "definicion": "la conservación de los componentes de la biodiversidad biológica en sus hábitats naturales."
                    },
                    {
                        "id": 8,
                        "articulo_id": 3,
                        "numero": "8)",
                        "termino": "Conservación ex situ",
                        "definicion": "la conservación de los componentes de la biodiversidad biológica fuera de sus hábitats naturales."
                    },
                    {
                        "id": 9,
                        "articulo_id": 3,
                        "numero": "9)",
                        "termino": "Corredor biológico",
                        "definicion": "un espacio que conecta paisajes, ecosistemas y hábitats, facilitando el desplazamiento de las poblaciones y el flujo genético de las mismas, que permite asegurar el mantenimiento de la biodiversidad y procesos ecológicos y evolutivos y evitar la fragmentación de hábitats."
                    },
                    {
                        "id": 10,
                        "articulo_id": 3,
                        "numero": "10)",
                        "termino": "Diversidad genética",
                        "definicion": "variación en la composición genética de los individuos dentro de una población, entre poblaciones de una misma especie o entre especies diferentes."
                    },
                    {
                        "id": 11,
                        "articulo_id": 3,
                        "numero": "11)",
                        "termino": "Ecosistema",
                        "definicion": "complejo dinámico de comunidades vegetales, animales y de microorganismos y su medio no viviente que interactúan como una unidad funcional."
                    },
                    {
                        "id": 12,
                        "articulo_id": 3,
                        "numero": "12)",
                        "termino": "Ecosistema amenazado",
                        "definicion": "ecosistema que presenta riesgos que pueden producir disminución en su extensión o cambios en su composición, estructura o función, conforme al procedimiento de clasificación según el estado de conservación a que se refiere el artículo 30."
                    },
                    {
                        "id": 13,
                        "articulo_id": 3,
                        "numero": "13)",
                        "termino": "Especie endémica",
                        "definicion": "especie nativa que se distribuye únicamente en un territorio o un área geográfica determinada y que no habita naturalmente en otro lugar."
                    },
                    {
                        "id": 14,
                        "articulo_id": 3,
                        "numero": "14)",
                        "termino": "Especie exótica",
                        "definicion": "una especie, subespecie o taxón inferior, que se encuentra fuera de su distribución natural, incluyendo cualquier parte de ella, tales como gametos, semillas, huevos o propágulos de tales especies, que pueden sobrevivir y reproducirse."
                    },
                    {
                        "id": 15,
                        "articulo_id": 3,
                        "numero": "15)",
                        "termino": "Especie exótica invasora",
                        "definicion": "especie exótica cuyo establecimiento o expansión amenaza ecosistemas, hábitats o especies, por ser capaz de producir daño a uno o más componentes del ecosistema."
                    },
                    {
                        "id": 16,
                        "articulo_id": 3,
                        "numero": "16)",
                        "termino": "Especie nativa",
                        "definicion": "especie que se encuentra dentro de su rango de distribución natural, histórica o actual, de acuerdo con su potencial de dispersión natural."
                    },
                    {
                        "id": 17,
                        "articulo_id": 3,
                        "numero": "17)",
                        "termino": "Hábitat",
                        "definicion": "lugar o tipo de ambiente en el que vive naturalmente un organismo o una población. Comprende las condiciones presentes en una zona determinada que permiten presencia, supervivencia y reproducción de un organismo o población."
                    },
                    {
                        "id": 18,
                        "articulo_id": 3,
                        "numero": "18)",
                        "termino": "Humedal",
                        "definicion": "extensiones de marismas, pantanos y turberas, o superficies cubiertas de aguas, sean éstas de régimen natural o artificial, permanentes o temporales, estancadas o corrientes, dulces, salobres o saladas, incluidas las extensiones de agua marina cuya profundidad en marea baja no exceda los seis metros."
                    },
                    {
                        "id": 19,
                        "articulo_id": 3,
                        "numero": "19)",
                        "termino": "Paisaje de conservación",
                        "definicion": "área que posee un patrimonio natural y valores culturales y paisajísticos asociados de especial interés regional o local para su conservación y que, en el marco de un acuerdo promovido por uno o más municipios, es gestionado a través de un acuerdo de adhesión voluntaria entre los miembros de la comunidad local."
                    },
                    {
                        "id": 20,
                        "articulo_id": 3,
                        "numero": "20)",
                        "termino": "Plan de manejo",
                        "definicion": "instrumento de gestión ambiental basado en la mejor evidencia posible, que establece metas, principios, objetivos, criterios, medidas, plazos y responsabilidades para la gestión adaptativa de la biodiversidad."
                    },
                    {
                        "id": 21,
                        "articulo_id": 3,
                        "numero": "21)",
                        "termino": "Plan de manejo para la conservación",
                        "definicion": "plan de manejo destinado a preservar, evitar la degradación, restaurar o favorecer el uso sustentable de un ecosistema amenazado al que se refiere el artículo 31."
                    },
                    {
                        "id": 22,
                        "articulo_id": 3,
                        "numero": "22)",
                        "termino": "Plan de manejo de áreas protegidas",
                        "definicion": "plan de manejo destinado a resguardar el patrimonio natural de las áreas protegidas."
                    },
                    {
                        "id": 23,
                        "articulo_id": 3,
                        "numero": "23)",
                        "termino": "Plan de recuperación, conservación y gestión de especies",
                        "definicion": "plan de manejo destinado a mejorar el estado de conservación de una o más especies clasificadas de conformidad a lo establecido en el artículo 37 de la ley N° 19.300."
                    },
                    {
                        "id": 24,
                        "articulo_id": 3,
                        "numero": "24)",
                        "termino": "Plan de restauración ecológica",
                        "definicion": "plan de manejo destinado a reponer o reparar un área degradada a una calidad similar a la que tenía con anterioridad a su pérdida, disminución o menoscabo."
                    },
                    {
                        "id": 25,
                        "articulo_id": 3,
                        "numero": "25)",
                        "termino": "Plan de prevención, control y erradicación de especies exóticas invasoras",
                        "definicion": "instrumento de gestión destinado a evitar, prevenir el ingreso, detener la propagación o erradicar especies exóticas invasoras."
                    },
                    {
                        "id": 26,
                        "articulo_id": 3,
                        "numero": "26)",
                        "termino": "Preservación",
                        "definicion": "cuidado y mantención de las condiciones de no intervención de la diversidad biológica, de manera que sea posible su evolución y desarrollo natural."
                    },
                    {
                        "id": 27,
                        "articulo_id": 3,
                        "numero": "27)",
                        "termino": "Recurso genético",
                        "definicion": "es el material genético de valor real o potencial."
                    },
                    {
                        "id": 28,
                        "articulo_id": 3,
                        "numero": "28)",
                        "termino": "Reserva de la biósfera",
                        "definicion": "área de ecosistemas terrestres, costeros o marinos, o una combinación de los mismos, reconocida internacionalmente en el marco del Programa del Hombre y la Biósfera de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura, UNESCO, como parte de la Red Mundial de Reservas de la Biósfera."
                    },
                    {
                        "id": 29,
                        "articulo_id": 3,
                        "numero": "29)",
                        "termino": "Servicio",
                        "definicion": "el Servicio de Biodiversidad y Áreas Protegidas."
                    },
                    {
                        "id": 30,
                        "articulo_id": 3,
                        "numero": "30)",
                        "termino": "Servicios ecosistémicos",
                        "definicion": "contribución directa o indirecta de los ecosistemas al bienestar humano."
                    },
                    {
                        "id": 31,
                        "articulo_id": 3,
                        "numero": "31)",
                        "termino": "Sitio prioritario",
                        "definicion": "área de valor ecológico, terrestre o acuática, marina o continental identificado por su aporte a la representatividad ecosistémica, su singularidad ecológica o por constituir hábitats de especies amenazadas, priorizada para la conservación de su biodiversidad por el Servicio."
                    },
                    {
                        "id": 32,
                        "articulo_id": 3,
                        "numero": "32)",
                        "termino": "Uso sustentable",
                        "definicion": "utilización de componentes de la biodiversidad de un modo y a un ritmo que no ocasione la disminución a largo plazo de la diversidad biológica, con lo cual se mantienen las posibilidades de ésta de satisfacer las necesidades y las aspiraciones de las generaciones actuales y futuras."
                    },
                    {
                        "id": 33,
                        "articulo_id": 3,
                        "numero": "33)",
                        "termino": "Zona de amortiguación",
                        "definicion": "espacio ubicado en torno a un área protegida, debidamente delimitada de acuerdo a criterios científico-técnicos, cuyo uso podría ser parcialmente restringido en virtud de lo que establezcan los instrumentos de ordenamiento territorial pertinentes, destinado a absorber potenciales impactos negativos y fomentar efectos positivos de actividades para la conservación de tal área."
                    },
                    {
                        "id": 34,
                        "articulo_id": 3,
                        "numero": "34)",
                        "termino": "Turismo ambientalmente responsable",
                        "definicion": "aquel que se desarrolla en una modalidad de bajo impacto sobre el entorno natural y sociocultural, con respeto de los objetivos de la categoría del área protegida respectiva, su plan de manejo, el respectivo programa de uso público y las comunidades locales y comunidades indígenas que integran su territorio."
                    }
                    
                    ],
       definicionesAlt:[{
                        "id": 35,
                        "articulo_id": 3,
                        "numero": "35)",
                        "termino": "Marismas",
                        "definicion": " humedales costeros o cercanos a ríos que se inundan periódicamente con agua, generalmente salobre, y están dominadas por pastos, juncos y otras plantas herbáceas, no por árboles."
                    },
  // Conceptos nuevos (excluyendo los 35 ya existentes en mockDataResponse.definiciones)
  {"id": 36, "articulo_id": 1, "termino": "Objeto de la Ley", "definicion": "La ley tiene por objeto la conservación de la biodiversidad y la protección del patrimonio natural de Chile mediante preservación, restauración y uso sustentable de genes, especies y ecosistemas."},
  {"id": 37, "articulo_id": 2, "termino": "Principios Rectores", "definicion": "Establece 10 principios fundamentales que guían todas las acciones bajo esta ley, destacando el Principio de Jerarquía (evitar-mitigar-reparar-compensar) y el Principio de Precaución."},
  {"id": 38, "articulo_id": 4, "termino": "Creación del Servicio", "definicion": "Créase el Servicio de Biodiversidad y Áreas Protegidas (SBAP) como organismo descentralizado con personalidad jurídica y patrimonio propio, sujeto a supervigilancia del Presidente a través del Ministerio del Medio Ambiente."},
  {"id": 39, "articulo_id": 5, "termino": "Funciones y Atribuciones", "definicion": "El SBAP tiene 21 funciones principales, incluyendo gestión del SNAP, elaboración de planes de recuperación, restauración ecológica y fiscalización de actividades en áreas protegidas."},
  {"id": 40, "articulo_id": 6, "termino": "Dirección Superior", "definicion": "La administración del SBAP estará a cargo de un Director Nacional designado mediante el Sistema de Alta Dirección Pública (ley 19.882). Un reglamento determinará la organización interna del Servicio."},
  {"id": 41, "articulo_id": 7, "termino": "Atribuciones del Director", "definicion": "Al Director Nacional corresponde designar personal, representar al SBAP, delegar funciones y crear comités asesores, entre otras atribuciones."},
  {"id": 42, "articulo_id": 8, "termino": "Direcciones Regionales", "definicion": "El SBAP se desconcentrará territorialmente mediante Direcciones Regionales. Cada región tendrá un Director Regional afecto al Sistema de Alta Dirección Pública."},
  {"id": 43, "articulo_id": 9, "termino": "Comité Científico Asesor", "definicion": "Créase un Comité Científico Asesor de 9 miembros integrados por representantes de instituciones académicas y científicas, con al menos 6 integrantes fuera de la Región Metropolitana."},
  {"id": 44, "articulo_id": 10, "termino": "Patrimonio del Servicio", "definicion": "El patrimonio del SBAP se conforma por asignaciones presupuestarias, bienes transferidos, donaciones (exentas de impuestos) e ingresos por tarifas y concesiones en áreas protegidas."},
  {"id": 45, "articulo_id": 11, "termino": "Régimen Laboral", "definicion": "El personal se regirá por el Código del Trabajo y disposiciones especiales, aplicando el decreto ley 249 de 1973 (escala única de sueldos)."},
  {"id": 46, "articulo_id": 12, "termino": "Distribución de Jornada", "definicion": "Trabajadores en zonas apartadas o de riesgo podrán tener jornadas especiales reguladas por el Director Nacional mediante resolución, con posibilidad de jornada bisemanal."},
  {"id": 47, "articulo_id": 13, "termino": "Normas de Probidad", "definicion": "El personal está sujeto a normas de probidad administrativa (leyes 18.575 y 20.880), con responsabilidad administrativa, civil y penal por actos en ejercicio de funciones."},
  {"id": 48, "articulo_id": 14, "termino": "Ingreso al Servicio", "definicion": "El personal se seleccionará mediante concurso público, con excepciones para contratos a plazo fijo en áreas protegidas. Los contratos serán suscritos por el Director Nacional."},
  {"id": 49, "articulo_id": 15, "termino": "Sistema de Evaluación", "definicion": "El personal estará sujeto a un sistema de evaluación de desempeño reglamentado por el Ministerio del Medio Ambiente, que servirá para capacitación, desarrollo de carrera y remoción."},
  {"id": 50, "articulo_id": 16, "termino": "Destinación y Subrogación", "definicion": "El Director Nacional podrá aplicar normas de destinación y subrogación según el Estatuto Administrativo, con viáticos pagaderos según normativa específica."},
  {"id": 51, "articulo_id": 17, "termino": "Capacitación", "definicion": "El Director Nacional aprobará anualmente programas de capacitación ajustados a recursos de la Ley de Presupuestos, considerados para desarrollo de carrera funcionaria."},
  {"id": 52, "articulo_id": 18, "termino": "Servicio de Bienestar", "definicion": "El personal tiene derecho a afiliarse a servicios de bienestar. Personal traspasado mantiene derecho a afiliación en servicio de origen con aportes respectivos."},
  {"id": 53, "articulo_id": 19, "termino": "Responsabilidad Disciplinaria", "definicion": "La responsabilidad disciplinaria se hará efectiva según procedimiento del Estatuto Administrativo, aplicable a infracciones a leyes públicas o Código del Trabajo."},
  {"id": 54, "articulo_id": 20, "termino": "Infracciones y Sanciones", "definicion": "Sanciones por infracciones a deberes y prohibiciones: Censura, Multa, Suspensión (30 días a 3 meses) y Remoción (por vulneración grave de probidad)."},
  {"id": 55, "articulo_id": 21, "termino": "Término de Relación Laboral", "definicion": "Termina por causales del Código del Trabajo. Evaluación deficiente: causal de artículo 160 número 7. Director Nacional fundamentará terminación por buen funcionamiento."},
  {"id": 56, "articulo_id": 22, "termino": "Reglamento de Concursos", "definicion": "Un reglamento del Ministerio del Medio Ambiente regulará objetividad, transparencia y no discriminación en concursos de ingreso y promoción."},
  {"id": 57, "articulo_id": 23, "termino": "Instrumentos de Conservación", "definicion": "El SBAP diseñará, implementará y dará seguimiento a instrumentos de conservación, incluyendo el SNAP bajo un enfoque ecosistémico en todo el territorio."},
  {"id": 58, "articulo_id": 24, "termino": "Sistema de Información", "definicion": "El SBAP administrará un Sistema de Información de la Biodiversidad con inventarios de ecosistemas, especies y datos georreferenciados, de acceso público con excepciones para especies en riesgo."},
  {"id": 59, "articulo_id": 25, "termino": "Monitoreo de Biodiversidad", "definicion": "El SBAP implementará programas de monitoreo de ecosistemas y especies, considerando conocimiento científico y tradicional de comunidades indígenas, pudiendo encomendar a instituciones académicas."},
  {"id": 60, "articulo_id": 26, "termino": "Requerimiento de Información", "definicion": "El SBAP podrá requerir información a órganos de la Administración del Estado y a privados (si generada con fondos públicos)."},
  {"id": 61, "articulo_id": 27, "termino": "Informes sobre Biodiversidad", "definicion": "El SBAP colaborará con el Ministerio del Medio Ambiente en la elaboración del informe cuatrienal y reporte anual sobre biodiversidad."},
  {"id": 62, "articulo_id": 28, "termino": "Planificación Ecológica", "definicion": "El Ministerio del Medio Ambiente elaborará planificación ecológica con identificación de sitios prioritarios, usos del territorio, procesos con efectos perjudiciales y buenas prácticas para conservación."},
  {"id": 63, "articulo_id": 29, "termino": "Sitios Prioritarios", "definicion": "Los sitios prioritarios serán categorizados con criterios técnico-científicos. El SBAP mantendrá un registro espacial actualizado. Declaración mediante decreto supremo del Ministerio del Medio Ambiente."},
  {"id": 64, "articulo_id": 30, "termino": "Clasificación de Ecosistemas", "definicion": "El SBAP evaluará y propondrá clasificación de ecosistemas según estado de conservación. Un reglamento establecerá categorías y procedimiento, considerando pronunciamiento del Comité Científico Asesor y UICN."},
  {"id": 65, "articulo_id": 31, "termino": "Planes de Manejo para Ecosistemas", "definicion": "El SBAP elaborará planes de manejo para ecosistemas amenazados, de cumplimiento obligatorio para servicios públicos. Podrán afectar proyectos con RCA (procedimiento artículo 25 quinquies)."},
  {"id": 66, "articulo_id": 32, "termino": "Áreas Degradadas", "definicion": "El SBAP podrá declarar áreas degradadas mediante resolución. Un reglamento establecerá criterios científico-técnicos para identificación."},
  {"id": 67, "articulo_id": 33, "termino": "Planes de Restauración", "definicion": "El SBAP elaborará planes de restauración ecológica para áreas degradadas, con medidas, metas, ubicación y monitoreo. Requerirán participación de comunidad local y órganos públicos."},
  {"id": 68, "articulo_id": 34, "termino": "Iniciativas Privadas de Conservación", "definicion": "El SBAP prestará apoyo técnico a iniciativas en ecosistemas marinos para concesiones o destinaciones por Ministerio de Defensa Nacional con objetivos de conservación."},
  {"id": 69, "articulo_id": 35, "termino": "Paisajes de Conservación", "definicion": "Las municipalidades podrán solicitar reconocimiento de paisajes de conservación con informe técnico sobre valores naturales, culturales y paisajísticos. Reconocido mediante resolución del SBAP con plan de manejo aprobado."},
  {"id": 70, "articulo_id": 36, "termino": "Reservas de la Biósfera", "definicion": "El SBAP promoverá uso sustentable en reservas de la biósfera (UNESCO). Elaborará planes de gestión actualizados cada 5 años y podrá conformar comités de gestión con representantes públicos y comunitarios."},
  {"id": 71, "articulo_id": 37, "termino": "Humedales Ramsar", "definicion": "Los sitios Ramsar serán acogidos a categorías de protección mediante decreto supremo. Requiere informe técnico del SBAP y consentimiento del propietario si es privado."},
  {"id": 72, "articulo_id": 38, "termino": "Compensaciones de Biodiversidad", "definicion": "Un reglamento definirá criterios para compensaciones en evaluación ambiental. Medidas consistirán en acciones de restauración ecológica. Excepcionalmente: preservación con criterio de adicionalidad."},
  {"id": 73, "articulo_id": 39, "termino": "Inventario de Humedales", "definicion": "El SBAP llevará un inventario nacional de humedales con localización georreferenciada, límites, superficie y tipo."},
  {"id": 74, "articulo_id": 40, "termino": "Criterios para Humedales", "definicion": "El SBAP establecerá criterios para uso sustentable de humedales para resguardar características ecológicas y régimen hidrológico. Deberán ser reconocidos en instrumentos de ordenamiento territorial."},
  {"id": 75, "articulo_id": 41, "termino": "Permiso para Alteración", "definicion": "Prohibición de alteración física de humedales que constituyan sitios prioritarios. Otros humedales inventariados requieren permiso previo del SBAP para evitar modificaciones permanentes de estructura y funciones."},
  {"id": 76, "articulo_id": 42, "termino": "Planes de Recuperación de Especies", "definicion": "El SBAP elaborará planes de recuperación, conservación y gestión de especies clasificadas. Un reglamento establecerá categorías aplicables y contenido de los planes."},
  {"id": 77, "articulo_id": 43, "termino": "Contenido de Planes de Especies", "definicion": "Los planes considerarán diagnóstico del estado de la especie, determinación de hábitat y amenazas, acciones de recuperación y metas medibles."},
  {"id": 78, "articulo_id": 44, "termino": "Monumentos Naturales", "definicion": "El Ministerio del Medio Ambiente podrá declarar monumentos naturales a especies. Prohibición de intimidar, capturar, extraer o dañar especies declaradas, con excepciones para investigación científica."},
  {"id": 79, "articulo_id": 45, "termino": "Especies Exóticas Invasoras", "definicion": "El SBAP podrá proponer nómina de especies exóticas invasoras, elaborar planes de prevención y control, ejecutar acciones urgentes y establecer barreras de bioseguridad."},
  {"id": 80, "articulo_id": 46, "termino": "Fondo Nacional de Biodiversidad", "definicion": "Créase el Fondo Nacional de la Biodiversidad destinado a financiar proyectos de conservación fuera de áreas protegidas, incluyendo investigación, capacitación y restauración."},
  {"id": 81, "articulo_id": 47, "termino": "Beneficiarios del Fondo", "definicion": "Podrán beneficiarse personas naturales y personas jurídicas sin fines de lucro."},
  {"id": 82, "articulo_id": 48, "termino": "Administración del Fondo", "definicion": "El Fondo será administrado por el SBAP. Su funcionamiento se regulará mediante resolución y podrá establecer líneas de financiamiento según prioridades."},
  {"id": 83, "articulo_id": 49, "termino": "Patrimonio del Fondo", "definicion": "El Fondo se conformará por donaciones, herencias y legados (exentos de impuestos), recursos de Ley de Presupuestos y aportes de entidades públicas o privadas."},
  {"id": 84, "articulo_id": 50, "termino": "Prácticas Sustentables", "definicion": "El SBAP promoverá prácticas sustentables mediante certificación, contratos de retribución por servicios ecosistémicos, criterios ambientales para subsidios y acuerdos de producción limpia."},
  {"id": 85, "articulo_id": 51, "termino": "Sistema de Certificación", "definicion": "Créase el Sistema de Certificación de Biodiversidad y Servicios Ecosistémicos para certificar actividades, prácticas o sitios por su contribución a la conservación. Administrado por el SBAP y reglamentado por el Ministerio del Medio Ambiente."},
  {"id": 86, "articulo_id": 52, "termino": "Contratos de Retribución", "definicion": "El contrato de retribución obliga a preservar o restaurar ecosistemas a cambio de una contraprestación por servicios ecosistémicos mantenidos. El SBAP llevará un registro de contratos que cumplan criterios mínimos."},
  {"id": 87, "articulo_id": 53, "termino": "Sistema Nacional de Áreas Protegidas", "definicion": "Créase el Sistema Nacional de Áreas Protegidas (SNAP) constituido por áreas protegidas estatales y privadas, terrestres y acuáticas. Gestionado por el SBAP para conservar biodiversidad y patrimonio natural."},
  {"id": 88, "articulo_id": 54, "termino": "Objetivos del SNAP", "definicion": "El SNAP tiene 9 objetivos, entre ellos asegurar conservación permanente de biodiversidad, mantener servicios ecosistémicos, integrar áreas en planes de desarrollo y promover participación ciudadana."},
  {"id": 89, "articulo_id": 55, "termino": "Gestión del SNAP", "definicion": "La gestión del SNAP corresponde al SBAP. Elaborará un plan estratégico con revisión de planificación, programa de financiamiento, fortalecimiento de capacidades y participación comunitaria."},
  {"id": 90, "articulo_id": 56, "termino": "Categorías de Áreas Protegidas", "definicion": "El SNAP comprende 6 categorías: Reserva de Región Virgen, Parque Nacional, Monumento Natural, Reserva Nacional, Área de Conservación de Múltiples Usos y Área de Conservación de Pueblos Indígenas."},
  {"id": 91, "articulo_id": 57, "termino": "Reserva de Región Virgen", "definicion": "Área con condiciones primitivas naturales, no perturbadas. Objetivo: preservación estricta de integridad ecológica. Prohibición de explotación comercial de recursos."},
  {"id": 92, "articulo_id": 58, "termino": "Parque Nacional", "definicion": "Área con diversos ambientes únicos o representativos. Objetivo: preservación del patrimonio natural con valor escénico. Prohibición de explotación comercial de recursos."},
  {"id": 93, "articulo_id": 59, "termino": "Monumento Natural", "definicion": "Área reducida con componentes naturales específicos relevantes. Objetivo: preservación de elementos de valor excepcional. Prohibición de explotación comercial de recursos."},
  {"id": 94, "articulo_id": 60, "termino": "Reserva Nacional", "definicion": "Área con comunidades biológicas relevantes para protección de especies. Objetivo: conservación mediante gestión activa. Permite actividades de uso sustentable sin poner en riesgo servicios ecosistémicos."},
  {"id": 95, "articulo_id": 61, "termino": "Área de Múltiples Usos", "definicion": "Área con interacción tradicional entre humanos y naturaleza. Objetivo: asegurar uso sustentable mediante manejo integrado. Permite diversas actividades de uso sustentable."},
  {"id": 96, "articulo_id": 62, "termino": "Área de Pueblos Indígenas", "definicion": "Área en tierras indígenas o espacios costeros de pueblos originarios. Objetivo: conservación de hábitats, especies y valores culturales asociados. Permite usos ancestrales y actividades sustentables."},
  {"id": 97, "articulo_id": 63, "termino": "Proyectos en Áreas Protegidas", "definicion": "Todo proyecto en áreas protegidas debe respetar la categoría y objeto de protección, ser compatible con el plan de manejo y excluir explotación de recursos con fines comerciales."},
  {"id": 98, "articulo_id": 64, "termino": "Creación de Áreas Protegidas", "definicion": "Las áreas protegidas del Estado se crean mediante decreto supremo del MMA, con firma de Ministros de Bienes Nacionales y Defensa (según corresponda). El decreto debe contener categoría, superficie, ubicación y objetos de protección."},
  {"id": 99, "articulo_id": 65, "termino": "Procedimiento de Creación", "definicion": "Las áreas pueden crearse de oficio o a solicitud de personas/comunidades. Requiere informe técnico del SBAP y consulta a comunidades indígenas. Un reglamento establecerá procedimiento con participación ciudadana."},
  {"id": 100, "articulo_id": 66, "termino": "Modificación y Desafectación", "definicion": "La modificación o desafectación requiere procedimiento similar a creación, informe favorable del Comité Científico Asesor y es excepcional sin detrimento a objetivos del SNAP. Parques Nacionales y Reservas de Región Virgen solo por ley."},
  {"id": 101, "articulo_id": 67, "termino": "Administración de Áreas", "definicion": "La administración de áreas protegidas del Estado corresponde al SBAP, incluyendo elaboración e implementación de planes de manejo, uso público, otorgamiento de permisos, concesiones y convenios de gestión."},
  {"id": 102, "articulo_id": 68, "termino": "Participación en Gestión", "definicion": "El SBAP podrá celebrar convenios de gestión con autoridades u organizaciones locales y comunidades indígenas. Los convenios contendrán estructura, derechos, obligaciones y beneficios."},
  {"id": 103, "articulo_id": 69, "termino": "Administrador de Área", "definicion": "Cada área protegida contará con un administrador (funcionario del SBAP) responsable de dar cumplimiento al plan de manejo, supervisar personal, aplicar medidas y reportar eventos relevantes."},
  {"id": 104, "articulo_id": 70, "termino": "Tarifas de Ingreso", "definicion": "El SBAP fijará tarifas por ingreso a áreas protegidas y servicios, considerando residencia, edad, tipo y calidad de instalaciones. Exenciones para comunidades indígenas en usos ancestrales, estudiantes y guías/scouts."},
  {"id": 105, "articulo_id": 71, "termino": "Planes de Manejo", "definicion": "Toda área protegida debe contar con plan de manejo obligatorio que constituye marco regulatorio para gestión y actividades permitidas. Podrá dividirse en programas específicos (conservación, uso público, etc.)."},
  {"id": 106, "articulo_id": 72, "termino": "Contenido de Planes de Manejo", "definicion": "Los planes deben contener objeto(s) de protección, diagnóstico de presiones y amenazas, plan de monitoreo con metas e indicadores, zonificación y definición de zona de amortiguación."},
  {"id": 107, "articulo_id": 73, "termino": "Aprobación de Planes", "definicion": "El plan de manejo será elaborado y aprobado por el SBAP mediante resolución. Plazo máximo: 2 años desde creación del área. Revisión al menos cada 5 años."},
  {"id": 108, "articulo_id": 74, "termino": "Reglamento de Planes", "definicion": "Un reglamento del MMA establecerá procedimiento para elaboración de planes, contenidos específicos por categoría, participación de comunidades e indígenas, y consulta a Subsecretarías de Pesca y Turismo."},
  {"id": 109, "articulo_id": 75, "termino": "Cuerpo de Guardaparques", "definicion": "El SBAP contará con un cuerpo de guardaparques como autoridad competente para manejo y fiscalización de áreas protegidas del Estado."},
  {"id": 110, "articulo_id": 76, "termino": "Funciones de Guardaparques", "definicion": "Corresponde a los guardaparques apoyar elaboración y aplicación de planes, instruir y exigir cumplimiento de normas, monitorear biodiversidad, educar a visitantes y comunidad local."},
  {"id": 111, "articulo_id": 77, "termino": "Funciones de Fiscalización", "definicion": "El Director Nacional designará guardaparques para funciones de fiscalización que cumplan requisitos: licencia enseñanza media, 2 años como guardaparque y cursos de formación. Podrán ejercer funciones en áreas privadas previo requerimiento."},
  {"id": 112, "articulo_id": 78, "termino": "Formación de Guardaparques", "definicion": "El SBAP tendrá programas de formación y capacitación para guardaparques considerando cosmovisión de pueblos originarios. Podrá reconocer cursos o programas distintos a los del SBAP."},
  {"id": 113, "articulo_id": 79, "termino": "Concesiones en Áreas", "definicion": "El SBAP podrá otorgar concesiones solo para investigación científica, educación o turismo (que requiera infraestructura permanente). Duración máxima: 30 años."},
  {"id": 114, "articulo_id": 80, "termino": "Criterios para Concesiones", "definicion": "En otorgamiento se considerará categoría y objeto de protección del área, consulta a pueblos indígenas (Convenio 169), respeto a usos ancestrales y turismo ambientalmente responsable y accesible."},
  {"id": 115, "articulo_id": 81, "termino": "Comité Técnico", "definicion": "Créase un Comité Técnico consultivo para otorgamiento de concesiones, integrado por Director Nacional (presidente) y representantes de MMA, Turismo, Educación, Ciencias, Culturas, Desarrollo Social y Bienes Nacionales."},
  {"id": 116, "articulo_id": 82, "termino": "Renta Concesional", "definicion": "La renta será fijada por el SBAP según renta bruta anual del servicio, monto de inversión y factibilidad económica. Destino: gestión del SNAP y monitoreo."},
  {"id": 117, "articulo_id": 83, "termino": "Concesiones Gratuitas", "definicion": "Excepcionalmente, el SBAP podrá otorgar concesiones gratuitas para investigación científica o educación a favor de municipalidades, organismos estatales o entidades sin fines de lucro. Podrán extinguirse por voluntad del SBAP."},
  {"id": 118, "articulo_id": 84, "termino": "Concesionario", "definicion": "El SBAP solo otorgará concesiones a personas jurídicas. Para concesiones turísticas: rol único tributario exclusivo."},
  {"id": 119, "articulo_id": 85, "termino": "Procedimiento de Otorgamiento", "definicion": "Las concesiones se otorgarán mediante licitación pública (obligatoria para turismo), licitación privada o directamente (solo gratuitas y fundadas)."},
  {"id": 120, "articulo_id": 86, "termino": "Bases de Licitación", "definicion": "Corresponde al SBAP confeccionar bases de licitación que deberán ajustarse a categoría, objeto de protección y plan de manejo del área, pudiendo contemplar restricciones a la actividad."},
  {"id": 121, "articulo_id": 87, "termino": "Adjudicación", "definicion": "La adjudicación se efectuará mediante resolución del SBAP. Requiere suscripción de contrato en escritura pública y remisión de copia a Ministerio de Bienes Nacionales o Defensa."},
  {"id": 122, "articulo_id": 88, "termino": "Transferencia de Concesión", "definicion": "El concesionario podrá transferir la concesión totalmente con aprobación del SBAP y cumplimiento de requisitos. El SBAP llevará un registro de transferencias."},
  {"id": 123, "articulo_id": 89, "termino": "Extinción de Concesión", "definicion": "Causales de extinción: vencimiento de plazo, mutuo acuerdo, pérdida de requisitos, incumplimiento de obligaciones, imposibilidad de objeto o cancelación de personalidad jurídica."},
  {"id": 124, "articulo_id": 90, "termino": "Mejoras", "definicion": "A falta de estipulación contrario, todo lo edificado y plantado por el concesionario pasará a dominio del Fisco sin indemnización una vez extinguida la concesión."},
  {"id": 125, "articulo_id": 91, "termino": "Otros Permisos", "definicion": "La adjudicación de concesión no libera de obtener otros permisos necesarios para el desarrollo del proyecto según legislación vigente."},
  {"id": 126, "articulo_id": 92, "termino": "Concesiones Sectoriales", "definicion": "Concesiones para fines distintos requieren área con plan de manejo, actividad compatible con categoría y objeto, e informe favorable del SBAP."},
  {"id": 127, "articulo_id": 93, "termino": "Prohibición de Concesiones", "definicion": "Prohibición de concesiones sectoriales para explotación comercial en Reservas de Región Virgen, Parques Nacionales y Monumentos Naturales."},
  {"id": 128, "articulo_id": 94, "termino": "Permiso para Actividades", "definicion": "Actividades transitorias o sin infraestructura requieren permiso del SBAP. Duración máxima: 1 año (renovable). El SBAP podrá establecer obligaciones o retribuciones."},
  {"id": 129, "articulo_id": 95, "termino": "Acceso a Recursos Genéticos", "definicion": "El SBAP regulará condiciones de acceso a recursos genéticos en áreas protegidas mediante convenios con solicitantes que establezcan beneficios derivados."},
  {"id": 130, "articulo_id": 96, "termino": "Fiscalización de Concesiones", "definicion": "El SBAP verificará y exigirá cumplimiento de obligaciones en contratos de concesión o permisos."},
  {"id": 131, "articulo_id": 97, "termino": "Áreas Protegidas Privadas", "definicion": "Las áreas protegidas privadas forman parte del SNAP y deben acogerse a alguna de las 6 categorías establecidas. Un reglamento regulará procedimiento de creación, modificación y desafectación."},
  {"id": 132, "articulo_id": 98, "termino": "Solicitud de Creación", "definicion": "Procedimiento se inicia con solicitud voluntaria del propietario al Director Regional con información sobre ubicación, propiedad, características ecológicas, categoría propuesta y objetos de protección."},
  {"id": 133, "articulo_id": 99, "termino": "Creación de Áreas Privadas", "definicion": "La creación se realiza mediante decreto supremo del MMA. El propietario debe reducir el decreto a escritura pública e inscribirlo."},
  {"id": 134, "articulo_id": 100, "termino": "Modificación y Desafectación", "definicion": "Se regirá por reglamento del artículo 97. En desafectación: restitución total de beneficios obtenidos. Parques Nacionales y Reservas de Región Virgen solo por ley."},
  {"id": 135, "articulo_id": 101, "termino": "Transferencia de Dominio", "definicion": "La transferencia no altera el carácter de área protegida. El acto debe señalarlo expresamente bajo nulidad si no lo hace. El propietario debe informar al SBAP sobre transferencia."},
  {"id": 136, "articulo_id": 102, "termino": "Administración y Supervisión", "definicion": "Las áreas privadas serán administradas por propietarios o designados. La supervisión corresponde al SBAP, que podrá requerir antecedentes y fiscalizadores podrán ingresar para inspección."},
  {"id": 137, "articulo_id": 103, "termino": "Planes de Manejo Privados", "definicion": "Los planes serán elaborados por propietarios u organizaciones y aprobados por el SBAP. Deberán contener lo dispuesto en artículo 72 y reglamento del artículo 97."},
  {"id": 138, "articulo_id": 104, "termino": "Apoyo Técnico", "definicion": "El SBAP podrá prestar apoyo técnico a administradores, elaborando formato tipo de plan de manejo y programas de capacitación. Fomentará cooperación con instituciones públicas o privadas."},
  {"id": 139, "articulo_id": 105, "termino": "Incentivos para Áreas Privadas", "definicion": "Las áreas protegidas privadas gozarán de exención del impuesto territorial (mientras cumplan plan de manejo), exención del impuesto a la herencia, participación gratuita en capacitación y bonificaciones en Fondo Nacional."},
  {"id": 140, "articulo_id": 106, "termino": "Integración de Áreas", "definicion": "Forman parte de las áreas protegidas: suelo, subsuelo, fondo marino, porciones de mar, terrenos de playa, glaciares, ríos, lagos, lagunas, estuarios y humedales dentro de su perímetro."},
  {"id": 141, "articulo_id": 107, "termino": "Áreas Libres de Transgénicos", "definicion": "Las áreas protegidas del SNAP serán declaradas áreas libres de organismos genéticamente modificados."},
  {"id": 142, "articulo_id": 108, "termino": "Prohibiciones en Áreas", "definicion": "Prohibiciones para toda persona ajena a la administración: remover tierra/turba/rocas, intimidar/capturar fauna nativa, destruir nidos, cortar flora nativa, introducir especies exóticas/transgénicas, entre otras."},
  {"id": 143, "articulo_id": 109, "termino": "Alcance de la Fiscalización", "definicion": "El SBAP fiscalizará cumplimiento de planes de manejo, obligaciones de propietarios/administradores, contratos de concesión/permisos, y planes de restauración/control de especies invasoras."},
  {"id": 144, "articulo_id": 110, "termino": "Ministros de Fe", "definicion": "Los fiscalizadores tendrán calidad de ministros de fe respecto de hechos constitutivos de infracciones. Los hechos establecidos constituyen presunción legal de infracción."},
  {"id": 145, "articulo_id": 111, "termino": "Convenios de Fiscalización", "definicion": "El SBAP podrá realizar funciones de fiscalización fuera de áreas mediante convenios de encomendamiento con servicio competente. Los convenios señalarán tareas y asignación de recursos."},
  {"id": 146, "articulo_id": 112, "termino": "Alcance de Infracciones", "definicion": "Las sanciones son sin perjuicio de responsabilidad civil o penal."},
  {"id": 147, "articulo_id": 113, "termino": "Responsabilidad Solidaria", "definicion": "Si no es posible determinar grado de participación, la responsabilidad será solidaria."},
  {"id": 148, "articulo_id": 114, "termino": "Potestad Sancionadora", "definicion": "Las infracciones serán sancionadas administrativamente por el SBAP."},
  {"id": 149, "articulo_id": 115, "termino": "Infracciones en Áreas", "definicion": "Constituyen infracciones: contravenir prohibiciones del artículo 108, incumplir planes de manejo, incumplir obligaciones de concesiones, realizar actividades sin permiso requerido, entre otras."},
  {"id": 150, "articulo_id": 116, "termino": "Infracciones Fuera de Áreas", "definicion": "Constituyen infracciones: alterar significativamente características ecológicas en sitios prioritarios, incumplir planes de restauración, alterar físicamente humedales sin permiso, contravenir prohibiciones sobre monumentos naturales."},
  {"id": 151, "articulo_id": 117, "termino": "Concurso de Infracciones", "definicion": "Si una conducta constituye infracción en esta y otra ley, se aplica la de mayor entidad. Excepción: infracciones a RCA (competencia exclusiva de Superintendencia del Medio Ambiente)."},
  {"id": 152, "articulo_id": 118, "termino": "Categorías de Infracciones", "definicion": "Infracciones gravísimas: daño ambiental irreparable o afectación grave de servicios ecosistémicos. Graves: daño reparable o afectación sin compromiso grave. Leves: contravenciones no incluidas en anteriores."},
  {"id": 153, "articulo_id": 119, "termino": "Prescripción", "definicion": "Las infracciones prescriben a los 3 años desde su comisión o manifestación de efectos. Se interrumpe con notificación de formulación de cargos."},
  {"id": 154, "articulo_id": 120, "termino": "Sanciones", "definicion": "Para gravísimas: multa hasta 15.000 UTM, restitución de beneficios, extinción de concesión, prohibición de ingreso 5-15 años. Para graves: multa hasta 10.000 UTM, restitución parcial, suspensión de concesión, prohibición 5-10 años. Para leves: multa hasta 1.000 UTM, prestación de servicios."},
  {"id": 155, "articulo_id": 121, "termino": "Pago de Multa", "definicion": "Las multas se pagan en Tesorería General de la República dentro de 10 días. Las resoluciones tienen mérito ejecutivo."},
  {"id": 156, "articulo_id": 122, "termino": "Acta de Fiscalización", "definicion": "Los fiscalizadores levantarán acta de fiscalización describiendo hechos objetivamente. Con el acta podrá iniciarse procedimiento sancionador."},
  {"id": 157, "articulo_id": 123, "termino": "Denuncias", "definicion": "Cualquier persona podrá denunciar infracciones por escrito al SBAP con individualización del denunciante, descripción de hechos, lugar, fecha y presunto infractor."},
  {"id": 158, "articulo_id": 124, "termino": "Admisión del Acta o Denuncia", "definicion": "El procedimiento se inicia con comunicación del fiscalizador al Director Regional o denuncia (si tiene seriedad y mérito suficiente). En caso contrario, se realiza fiscalización o se archiva."},
  {"id": 159, "articulo_id": 125, "termino": "Medidas Provisionales", "definicion": "El fiscalizador podrá solicitar medidas provisionales al Director Regional: medidas de corrección/seguridad, retención de elementos/vehículos, aposición de sellos, clausura temporal de instalaciones, entre otras."},
  {"id": 160, "articulo_id": 126, "termino": "Cese de Medidas Provisionales", "definicion": "Las medidas durarán mientras subsista la necesidad. El Director Regional deberá confirmar, modificar o levantar al inicio del procedimiento. Podrán alzarse durante tramitación."},
  {"id": 161, "articulo_id": 127, "termino": "Medidas Correctivas", "definicion": "Frente a infracciones flagrantes, el SBAP podrá ordenar restablecimiento de legalidad en plazo máximo 5 días."},
  {"id": 162, "articulo_id": 128, "termino": "Incumplimientos Menores", "definicion": "El SBAP podrá determinar disconformidades para incumplimientos menores. Deben subsanarse en máximo 10 días. Si no se subsana, se cursa infracción."},
  {"id": 163, "articulo_id": 129, "termino": "Inicio de Procedimiento", "definicion": "El Director Regional dará inicio a la instrucción mediante resolución con formulación de cargos. Plazo para descargos: 15 días. Si infractor no es habido, se publica extracto en diario."},
  {"id": 164, "articulo_id": 130, "termino": "Examen de Antecedentes", "definicion": "Recibidos los descargos, el instructor examinará mérito y ordenará diligencias probatorias. Plazo máximo: 30 días."},
  {"id": 165, "articulo_id": 131, "termino": "Medios de Prueba", "definicion": "Los hechos podrán acreditarse por cualquier medio de prueba admisible. Se presume veracidad de hechos constatados por fiscalizadores en acta."},
  {"id": 166, "articulo_id": 132, "termino": "Expediente", "definicion": "El instructor dejará constancia de todo lo obrado en expediente (escrito o electrónico) con orden de ingreso de documentos y actuaciones."},
  {"id": 167, "articulo_id": 133, "termino": "Informe y Resolución", "definicion": "El instructor evacuará informe con individualización de infractores, hechos investigados y propuesta de sanción. El Director Regional resolverá en 10 días mediante resolución fundada."},
  {"id": 168, "articulo_id": 134, "termino": "Reclamación", "definicion": "Podrán reclamarse ante Tribunales Ambientales: resoluciones que impongan sanciones, aprueben planes de manejo/restauración, decretos que creen/modifiquen/desafecten áreas, resoluciones que otorguen/denieguen concesiones/permisos."},
  {"id": 169, "articulo_id": 135, "termino": "Competencia", "definicion": "Competencia del Tribunal Ambiental según acto reclamado: sanciones (lugar de infracción), planes (lugar de aplicación), concesiones/permisos (cualquier persona afectada o directamente afectada)."},
  {"id": 170, "articulo_id": 136, "termino": "Legitimación Activa", "definicion": "Tienen legitimación para reclamar: para sanciones (persona sancionada y denunciante), para planes (cualquier persona perjudicada), para concesiones/permisos (cualquier persona o directamente afectada)."},
  {"id": 171, "articulo_id": 137, "termino": "Plazo para Reclamar", "definicion": "Plazo para interponer reclamación: 30 días hábiles desde notificación o publicación."},
  {"id": 172, "articulo_id": 138, "termino": "Procedimiento de Reclamación", "definicion": "Se regirá por el Párrafo 2° del Título III de la ley 20.600 (Tribunales Ambientales)."},
  {"id": 173, "articulo_id": 139, "termino": "Recursos contra Resolución", "definicion": "Contra resoluciones del Tribunal Ambiental procede apelación (para inadmisibilidad, recepción a prueba, término de proceso) y casación en el fondo (contra sentencia definitiva)."},
  {"id": 174, "articulo_id": 140, "termino": "Registro de Sanciones", "definicion": "El SBAP mantendrá un registro público de sanciones aplicadas con nombre de responsables, naturaleza de infracciones y sanciones. Se publicará en sitio electrónico del SBAP."},
  {"id": 175, "articulo_id": 141, "termino": "Plan de Corrección", "definicion": "El presunto infractor podrá presentar voluntariamente un plan de corrección. Desde aprobación, se suspende prescripción de artículo 119. Costos de implementación serán cargo del infractor."},
  {"id": 176, "articulo_id": 142, "termino": "Regla Supletoria", "definicion": "En lo no previsto, se aplica supletoriamente la ley 19.880 (procedimientos administrativos)."},
  {"id": 177, "articulo_id": 143, "termino": "Derogación Ley 18.362", "definicion": "Derógase la ley 18.362 que creaba el Sistema Nacional de Áreas Silvestres Protegidas del Estado."},
  {"id": 178, "articulo_id": 144, "termino": "Modificaciones a Ley 19.300", "definicion": "Modificaciones a Ley de Bases Generales del Medio Ambiente: reemplaza letra p) artículo 10 (ejecución de obras en áreas protegidas), reemplaza artículo 34 (administración del SNAP por SBAP), modifica artículo 35 (fomento a áreas privadas), reemplaza artículo 37 (clasificación de especies)."},
  {"id": 179, "articulo_id": 145, "termino": "Modificaciones a Ley 20.417", "definicion": "Modificaciones a Ley de Superintendencia del Medio Ambiente: elimina referencias a planes de manejo en fiscalización y letra i) artículo 35 (atribuciones sobre planes de manejo)."},
  {"id": 180, "articulo_id": 146, "termino": "Modificaciones a DL 1.939", "definicion": "Modificaciones a Decreto Ley 1.939 (bienes del Estado): deroga artículo 15 y reemplaza artículo 21 (destino de áreas protegidas)."},
  {"id": 181, "articulo_id": 147, "termino": "Modificaciones a Ley 18.892", "definicion": "Modificaciones a Ley General de Pesca y Acuicultura: reemplaza 'marina' por 'de interés pesquero', elimina referencias a 'Reservas Marinas', incorpora fiscalización por SBAP mediante convenio."},
  {"id": 182, "articulo_id": 148, "termino": "Modificaciones a Ley 20.256", "definicion": "Modificaciones a Ley de Pesca Recreativa: prohíbe pesca recreativa de especies en peligro, incorpora participación del SBAP en comités, modifica normas sobre áreas protegidas."},
  {"id": 183, "articulo_id": 149, "termino": "Modificaciones a Ley 4.601", "definicion": "Modificaciones a Ley de Caza: actualiza categorías de conservación de especies, incorpora SBAP en fiscalización y comités, modifica normas sobre áreas protegidas."},
  {"id": 184, "articulo_id": 150, "termino": "Modificaciones a Ley 20.283", "definicion": "Modificaciones a Ley de Bosque Nativo: actualiza categorías de conservación, incorpora informe favorable del SBAP para intervenciones, agrega al Director Nacional del SBAP en comités."},
  {"id": 185, "articulo_id": 151, "termino": "Modificaciones a Ley de Bosques", "definicion": "Modificaciones a Decreto Ley 4.363 (Ley de Bosques de 1931): elimina referencias a 'parques nacionales de turismo'."},
  {"id": 186, "articulo_id": 152, "termino": "Modificaciones a Ley 17.288", "definicion": "Modificaciones a Ley de Monumentos Nacionales: elimina 'santuarios de la naturaleza' de definiciones y deroga artículo 31 (santuarios de la naturaleza)."},
  {"id": 187, "articulo_id": 153, "termino": "Modificaciones a Ley 20.423", "definicion": "Modificaciones a Ley de Turismo: incorpora Ministro del Medio Ambiente en comité, deroga artículos sobre concesiones en áreas silvestres, establece que turismo en áreas protegidas debe ser compatible."},
  {"id": 188, "articulo_id": 154, "termino": "Modificaciones a Código de Minería", "definicion": "Suprímese el numeral 2° del artículo 17 del Código de Minería (referente a áreas silvestres protegidas)."},
  {"id": 189, "articulo_id": 155, "termino": "Facultades del Presidente", "definicion": "Facúltase al Presidente para dictar decretos con fuerza de ley dentro de 1 año: fijar grados de remuneraciones del SBAP, fijar planta de personal de directivos, ordenar traspaso de personal desde CONAF, determinar fecha de entrada en vigencia."},
  {"id": 190, "articulo_id": 156, "termino": "Primer Presupuesto", "definicion": "El Presidente conformará el primer presupuesto del SBAP mediante decreto, transfiriendo fondos de entidades que traspasan personal o bienes."},
  {"id": 191, "articulo_id": 157, "termino": "Financiamiento", "definicion": "El mayor gasto fiscal del primer año se financiará con reasignaciones desde Ministerio del Medio Ambiente y partida Tesoro Público. Años siguientes: con recursos de Ley de Presupuestos."},
  {"id": 192, "articulo_id": 158, "termino": "Áreas Protegidas Existentes", "definicion": "Se entienden incorporadas al SNAP las áreas protegidas existentes: parques marinos/nacionales, monumentos naturales, reservas marinas/nacionales/forestales, santuarios de la naturaleza, bienes nacionales protegidos, humedales Ramsar."},
  {"id": 193, "articulo_id": 159, "termino": "Reclasificación de Áreas", "definicion": "Las áreas existentes deberán someterse a proceso de homologación a nuevas categorías: reservas marinas (a Reserva de Interés Pesquero o Reserva Nacional), santuarios de la naturaleza (a categoría correspondiente), bienes nacionales protegidos (a categoría aplicable)."},
  {"id": 194, "articulo_id": 160, "termino": "Concesiones Preexistentes", "definicion": "Las concesiones otorgadas antes de crear un área protegida continuarán vigentes hasta relocalización. Aplica también a contratos de CONAF en áreas silvestres."},
  {"id": 195, "articulo_id": 161, "termino": "Acuerdos con Pueblos Originarios", "definicion": "Los actos y contratos con pueblo Rapa Nui mantendrán vigencia. Colaboración de Comisión de Desarrollo de Isla de Pascua en administración de Parque Nacional."},
  {"id": 196, "articulo_id": 162, "termino": "Sitios Prioritarios Existentes", "definicion": "Los sitios prioritarios identificados en estrategias de biodiversidad mantendrán vigencia. El MMA dictará decreto supremo para determinarlos dentro de 5 años."},
  {"id": 197, "articulo_id": 163, "termino": "Vigencia Gradual de Funciones", "definicion": "Las funciones del SBAP en letra b) artículo 5° entrarán en vigencia dentro del tercer año desde funcionamiento. Aplica para áreas protegidas estatales de categorías Parque Nacional, Reserva Nacional y Monumento Natural."},
  {"id": 198, "articulo_id": 164, "termino": "Relocalización de Concesiones", "definicion": "Titulares de concesiones de acuicultura en áreas protegidas podrán relocalizar con preferencia, incluso si no hay suspensión de otorgamiento en regiones de Los Lagos y Aysén."},
  {"id": 199, "articulo_id": 165, "termino": "Excepción para Guardaparques", "definicion": "Estarán exentos del requisito de licencia enseñanza media los guardaparques traspasados desde CONAF."},
  {"id": 200, "articulo_id": 166, "termino": "Plazo para Reglamentos", "definicion": "Los reglamentos referidos en la ley deberán dictarse dentro de 2 años desde publicación. En elaboración de reglamentos de artículos 15 y 22 se contemplará participación de trabajadores traspasados."}
],
        articleSummaries: {
  1: { 
    title: "Objeto de la Ley", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La ley tiene por objeto la <strong>conservación de la biodiversidad</strong> y la protección del patrimonio natural de Chile.</li><li>Se enfoca en tres estrategias clave: <strong>preservación</strong>, <strong>restauración</strong> y <strong>uso sustentable</strong> de genes, especies y ecosistemas.</li><li>Excluye materias como sanidad vegetal/animal y prevención de incendios forestales.</li></ul>` 
  },
  2: { 
    title: "Principios Rectores", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Establece <strong>10 principios fundamentales</strong> que guían todas las acciones bajo esta ley.</li><li>Destacan el <strong>Principio de Jerarquía</strong> (evitar-mitigar-reparar-compensar) y el <strong>Principio de Precaución</strong>.</li><li>Promueve participación ciudadana, responsabilidad y coordinación entre organismos.</li></ul>` 
  },
  3: { 
    title: "Definiciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Define <strong>34 términos clave</strong> para la aplicación de la ley.</li><li>Incluye conceptos fundamentales como: biodiversidad, ecosistema, área protegida, conservación in situ/ex situ.</li><li>Establece definiciones para especies nativas, exóticas, invasoras y servicios ecosistémicos.</li></ul>` 
  },
  4: { 
    title: "Creación del Servicio", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Créase el <strong>Servicio de Biodiversidad y Áreas Protegidas</strong> (SBAP).</li><li>Organismo descentralizado con <strong>personalidad jurídica</strong> y patrimonio propio.</li><li>Sujeto a supervigilancia del Presidente a través del Ministerio del Medio Ambiente.</li></ul>` 
  },
  5: { 
    title: "Funciones y Atribuciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP tiene <strong>21 funciones principales</strong>, entre ellas:</li><li>Gestionar el Sistema Nacional de Áreas Protegidas (SNAP)</li><li>Elaborar planes de recuperación y restauración ecológica</li><li>Fiscalizar actividades en áreas protegidas</li><li>Coordinar con otros organismos públicos</li></ul>` 
  },
  6: { 
    title: "Dirección Superior", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La administración del SBAP estará a cargo de un <strong>Director Nacional</strong>.</li><li>Designado mediante el Sistema de Alta Dirección Pública (ley 19.882).</li><li>Un reglamento determinará la organización interna del Servicio.</li></ul>` 
  },
  7: { 
    title: "Atribuciones del Director", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Al Director Nacional corresponde:</li><li>Designar y contratar personal</li><li>Representar judicial y extrajudicialmente al SBAP</li><li>Delegar funciones (excepto designación de personal)</li><li>Crear comités asesores</li></ul>` 
  },
  8: { 
    title: "Direcciones Regionales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP se desconcentrará territorialmente mediante <strong>Direcciones Regionales</strong>.</li><li>Cada región tendrá un Director Regional afecto al Sistema de Alta Dirección Pública.</li></ul>` 
  },
  9: { 
    title: "Comité Científico Asesor", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Créase un <strong>Comité Científico Asesor</strong> de 9 miembros.</li><li>Integrado por representantes de instituciones académicas y científicas.</li><li>Al menos 6 integrantes deben desempeñarse fuera de la Región Metropolitana.</li></ul>` 
  },
  10: { 
    title: "Patrimonio del Servicio", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El patrimonio del SBAP se conforma por:</li><li>Asignaciones presupuestarias anuales</li><li>Bienes muebles e inmuebles transferidos</li><li>Donaciones, herencias y legados (exentos de impuestos)</li><li>Ingresos por tarifas y concesiones en áreas protegidas</li></ul>` 
  },
  11: { 
    title: "Régimen Laboral", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El personal se regirá por el <strong>Código del Trabajo</strong> y disposiciones especiales.</li><li>Aplica el decreto ley 249 de 1973 (escala única de sueldos).</li></ul>` 
  },
  12: { 
    title: "Distribución de Jornada", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Trabajadores en zonas apartadas o de riesgo podrán tener <strong>jornadas especiales</strong>.</li><li>El Director Nacional regulará la distribución horaria mediante resolución.</li><li>Posibilidad de jornada bisemanal (artículo 39 Código del Trabajo).</li></ul>` 
  },
  13: { 
    title: "Normas de Probidad", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El personal está sujeto a normas de <strong>probidad administrativa</strong>.</li><li>Aplican leyes 18.575 (Bases Generales) y 20.880 (Probidad Pública).</li><li>Responsabilidad administrativa, civil y penal por actos en ejercicio de funciones.</li></ul>` 
  },
  14: { 
    title: "Ingreso al Servicio", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El personal se seleccionará mediante <strong>concurso público</strong>.</li><li>Excepcionalmente: contratos a plazo fijo para áreas protegidas.</li><li>Los contratos serán suscritos por el Director Nacional o su delegado.</li></ul>` 
  },
  15: { 
    title: "Sistema de Evaluación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El personal estará sujeto a un <strong>sistema de evaluación de desempeño</strong>.</li><li>Reglamentado por el Ministerio del Medio Ambiente (con firma de Ministro de Hacienda).</li><li>Las evaluaciones servirán para capacitación, desarrollo de carrera y remoción.</li></ul>` 
  },
  16: { 
    title: "Destinación y Subrogación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Director Nacional podrá aplicar normas de <strong>destinación</strong> y <strong>subrogación</strong>.</li><li>Aplican artículos del Estatuto Administrativo (decreto con fuerza de ley 29).</li><li>Viáticos pagaderos según normativa específica.</li></ul>` 
  },
  17: { 
    title: "Capacitación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Director Nacional aprobará anualmente <strong>programas de capacitación</strong>.</li><li>Deben ajustarse a recursos de la Ley de Presupuestos.</li><li>Las capacitaciones serán consideradas para desarrollo de carrera funcionaria.</li></ul>` 
  },
  18: { 
    title: "Servicio de Bienestar", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El personal tiene derecho a afiliarse a <strong>servicios de bienestar</strong>.</li><li>Personal traspasado mantiene derecho a afiliación en servicio de origen.</li><li>El SBAP efectuará aportes respectivos sin superar máximo legal.</li></ul>` 
  },
  19: { 
    title: "Responsabilidad Disciplinaria", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La responsabilidad disciplinaria se hará efectiva según <strong>procedimiento del Estatuto Administrativo</strong>.</li><li>Aplica a infracciones a leyes públicas o al Código del Trabajo.</li><li>Procedimientos ante Contraloría y tribunales de justicia.</li></ul>` 
  },
  20: { 
    title: "Infracciones y Sanciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Sanciones por infracciones a deberes y prohibiciones:</li><li><strong>Censura</strong></li><li><strong>Multa</strong></li><li><strong>Suspensión</strong> (30 días a 3 meses)</li><li><strong>Remoción</strong> (por vulneración grave de probidad)</li></ul>` 
  },
  21: { 
    title: "Término de Relación Laboral", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Termina por causales del Código del Trabajo (artículos 159, 160, 161).</li><li>Evaluación deficiente: causal de artículo 160 número 7.</li><li>Director Nacional fundamentará terminación por buen funcionamiento del SBAP.</li></ul>` 
  },
  22: { 
    title: "Reglamento de Concursos", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Un reglamento del Ministerio del Medio Ambiente regulará:</li><li>Objetividad, transparencia y no discriminación en concursos</li><li>Operación de concursos de ingreso y promoción</li></ul>` 
  },
  23: { 
    title: "Instrumentos de Conservación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP diseñará, implementará y dará seguimiento a <strong>instrumentos de conservación</strong>.</li><li>Incluye el SNAP bajo un <strong>enfoque ecosistémico</strong> en todo el territorio.</li></ul>` 
  },
  24: { 
    title: "Sistema de Información", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP administrará un <strong>Sistema de Información de la Biodiversidad</strong>.</li><li>Contendrá inventarios de ecosistemas, especies y datos georreferenciados.</li><li>Información de acceso público, con excepciones para especies en riesgo.</li></ul>` 
  },
  25: { 
    title: "Monitoreo de Biodiversidad", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP implementará <strong>programas de monitoreo</strong> de ecosistemas y especies.</li><li>Considerará conocimiento científico y tradicional de comunidades indígenas.</li><li>Podrá encomendar monitoreos a instituciones académicas calificadas.</li></ul>` 
  },
  26: { 
    title: "Requerimiento de Información", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá requerir información a:</li><li>Órganos de la Administración del Estado</li><li>Privados (si generada con fondos públicos)</li></ul>` 
  },
  27: { 
    title: "Informes sobre Biodiversidad", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP colaborará con el Ministerio del Medio Ambiente en:</li><li>Informe cuatrienal sobre biodiversidad</li><li>Reporte anual</li></ul>` 
  },
  28: { 
    title: "Planificación Ecológica", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Ministerio del Medio Ambiente elaborará <strong>planificación ecológica</strong> que incluirá:</li><li>Identificación de sitios prioritarios</li><li>Usos del territorio</li><li>Procesos con efectos perjudiciales</li><li>Buenas prácticas para conservación</li></ul>` 
  },
  29: { 
    title: "Sitios Prioritarios", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los sitios prioritarios serán categorizados con <strong>criterios técnico-científicos</strong>.</li><li>El SBAP mantendrá un registro espacial actualizado.</li><li>Declaración mediante decreto supremo del Ministerio del Medio Ambiente.</li></ul>` 
  },
  30: { 
    title: "Clasificación de Ecosistemas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP evaluará y propondrá <strong>clasificación de ecosistemas</strong> según estado de conservación.</li><li>Un reglamento establecerá categorías y procedimiento.</li><li>Considerará pronunciamiento del Comité Científico Asesor y UICN.</li></ul>` 
  },
  31: { 
    title: "Planes de Manejo para Ecosistemas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP elaborará <strong>planes de manejo para ecosistemas amenazados</strong>.</li><li>Serán de cumplimiento obligatorio para servicios públicos competentes.</li><li>Podrán afectar proyectos con RCA (procedimiento artículo 25 quinquies).</li></ul>` 
  },
  32: { 
    title: "Áreas Degradadas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá declarar <strong>áreas degradadas</strong> mediante resolución.</li><li>Un reglamento establecerá criterios científico-técnicos para identificación.</li></ul>` 
  },
  33: { 
    title: "Planes de Restauración", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP elaborará <strong>planes de restauración ecológica</strong> para áreas degradadas.</li><li>Contendrán medidas, metas, ubicación, componentes degradados y amenazas.</li><li>Requerirán participación de comunidad local y órganos públicos.</li></ul>` 
  },
  34: { 
    title: "Iniciativas Privadas de Conservación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP prestará <strong>apoyo técnico</strong> a iniciativas en ecosistemas marinos.</li><li>Para concesiones o destinaciones por Ministerio de Defensa Nacional.</li><li>Con objetivos de conservación en instrumentos de manejo.</li></ul>` 
  },
  35: { 
    title: "Paisajes de Conservación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las municipalidades podrán solicitar <strong>reconocimiento de paisajes de conservación</strong>.</li><li>Requieren informe técnico sobre valores naturales, culturales y paisajísticos.</li><li>Reconocido mediante resolución del SBAP con plan de manejo aprobado.</li></ul>` 
  },
  36: { 
    title: "Reservas de la Biósfera", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP promoverá <strong>uso sustentable</strong> en reservas de la biósfera (UNESCO).</li><li>Elaborará planes de gestión actualizados cada 5 años.</li><li>Podrá conformar comités de gestión con representantes públicos y comunitarios.</li></ul>` 
  },
  37: { 
    title: "Humedales Ramsar", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los sitios Ramsar serán acogidos a <strong>categorías de protección</strong> mediante decreto supremo.</li><li>Requiere informe técnico del SBAP y consentimiento del propietario si es privado.</li></ul>` 
  },
  38: { 
    title: "Compensaciones de Biodiversidad", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Un reglamento definirá <strong>criterios para compensaciones</strong> en evaluación ambiental.</li><li>Medidas consistirán en acciones de restauración ecológica.</li><li>Excepcionalmente: preservación con criterio de adicionalidad.</li></ul>` 
  },
  39: { 
    title: "Inventario de Humedales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP llevará un <strong>inventario nacional de humedales</strong>.</li><li>Contendrá localización georreferenciada, límites, superficie y tipo.</li></ul>` 
  },
  40: { 
    title: "Criterios para Humedales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP establecerá <strong>criterios para uso sustentable de humedales</strong>.</li><li>Para resguardar características ecológicas y régimen hidrológico.</li><li>Deberán ser reconocidos en instrumentos de ordenamiento territorial.</li></ul>` 
  },
  41: { 
    title: "Permiso para Alteración", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li><strong>Prohibición</strong> de alteración física de humedales que constituyan sitios prioritarios.</li><li>Otros humedales inventariados requieren <strong>permiso previo</strong> del SBAP.</li><li>El permiso busca evitar modificaciones permanentes de estructura y funciones.</li></ul>` 
  },
  42: { 
    title: "Planes de Recuperación de Especies", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP elaborará <strong>planes de recuperación, conservación y gestión</strong> de especies clasificadas.</li><li>Un reglamento establecerá categorías aplicables y contenido de los planes.</li></ul>` 
  },
  43: { 
    title: "Contenido de Planes de Especies", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los planes considerarán:</li><li>Diagnóstico del estado de la especie</li><li>Determinación de hábitat y amenazas</li><li>Acciones de recuperación y metas medibles</li></ul>` 
  },
  44: { 
    title: "Monumentos Naturales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Ministerio del Medio Ambiente podrá declarar <strong>monumentos naturales</strong> a especies.</li><li><strong>Prohibición</strong> de intimidar, capturar, extraer o dañar especies declaradas.</li><li>Excepción: autorizaciones para investigación científica.</li></ul>` 
  },
  45: { 
    title: "Especies Exóticas Invasoras", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá:</li><li>Proponer nómina de especies exóticas invasoras</li><li>Elaborar y ejecutar planes de prevención y control</li><li>Ejecutar acciones urgentes de control y erradicación</li><li>Establecer barreras de bioseguridad</li></ul>` 
  },
  46: { 
    title: "Fondo Nacional de Biodiversidad", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Créase el <strong>Fondo Nacional de la Biodiversidad</strong>.</li><li>Destinado a financiar proyectos de conservación fuera de áreas protegidas.</li><li>Incluye investigación, capacitación, restauración y prácticas productivas.</li></ul>` 
  },
  47: { 
    title: "Beneficiarios del Fondo", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Podrán beneficiarse:</li><li>Personas naturales</li><li>Personas jurídicas sin fines de lucro</li></ul>` 
  },
  48: { 
    title: "Administración del Fondo", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Fondo será administrado por el <strong>SBAP</strong>.</li><li>Su funcionamiento se regulará mediante resolución.</li><li>Podrá establecer líneas de financiamiento según prioridades.</li></ul>` 
  },
  49: { 
    title: "Patrimonio del Fondo", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Fondo se conformará por:</li><li>Donaciones, herencias y legados (exentos de impuestos)</li><li>Recursos de Ley de Presupuestos</li><li>Aportes de entidades públicas o privadas</li></ul>` 
  },
  50: { 
    title: "Prácticas Sustentables", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP promoverá <strong>prácticas sustentables</strong> mediante:</li><li>Certificación y ecoetiquetado</li><li>Contratos de retribución por servicios ecosistémicos</li><li>Criterios ambientales para subsidios</li><li>Acuerdos de producción limpia</li></ul>` 
  },
  51: { 
    title: "Sistema de Certificación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Créase el <strong>Sistema de Certificación de Biodiversidad</strong> y Servicios Ecosistémicos.</li><li>Para certificar actividades, prácticas o sitios por su contribución a la conservación.</li><li>Administrado por el SBAP y reglamentado por el Ministerio del Medio Ambiente.</li></ul>` 
  },
  52: { 
    title: "Contratos de Retribución", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El <strong>contrato de retribución</strong> obliga a preservar o restaurar ecosistemas.</li><li>A cambio de una contraprestación por servicios ecosistémicos mantenidos.</li><li>El SBAP llevará un registro de contratos que cumplan criterios mínimos.</li></ul>` 
  },
  53: { 
    title: "Sistema Nacional de Áreas Protegidas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Créase el <strong>Sistema Nacional de Áreas Protegidas</strong> (SNAP).</li><li>Constituido por áreas protegidas estatales y privadas, terrestres y acuáticas.</li><li>Gestionado por el SBAP para conservar biodiversidad y patrimonio natural.</li></ul>` 
  },
  54: { 
    title: "Objetivos del SNAP", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SNAP tiene <strong>9 objetivos</strong>, entre ellos:</li><li>Asegurar conservación permanente de biodiversidad</li><li>Mantener servicios ecosistémicos</li><li>Integrar áreas en planes de desarrollo</li><li>Promover participación ciudadana</li></ul>` 
  },
  55: { 
    title: "Gestión del SNAP", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La gestión del SNAP corresponde al <strong>SBAP</strong>.</li><li>Elaborará un plan estratégico con:</li><li>Revisión y actualización de planificación</li><li>Programa de financiamiento</li><li>Programa de fortalecimiento de capacidades</li></ul>` 
  },
  56: { 
    title: "Categorías de Áreas Protegidas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SNAP comprende <strong>6 categorías</strong> de protección:</li><li>Reserva de Región Virgen</li><li>Parque Nacional</li><li>Monumento Natural</li><li>Reserva Nacional</li><li>Área de Conservación de Múltiples Usos</li><li>Área de Conservación de Pueblos Indígenas</li></ul>` 
  },
  57: { 
    title: "Reserva de Región Virgen", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Área con <strong>condiciones primitivas naturales</strong>, no perturbadas.</li><li>Objetivo: preservación estricta de integridad ecológica.</li><li><strong>Prohibición</strong> de explotación comercial de recursos.</li></ul>` 
  },
  58: { 
    title: "Parque Nacional", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Área con <strong>diversos ambientes únicos o representativos</strong>.</li><li>Objetivo: preservación del patrimonio natural con valor escénico.</li><li><strong>Prohibición</strong> de explotación comercial de recursos.</li></ul>` 
  },
  59: { 
    title: "Monumento Natural", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Área <strong>reducida</strong> con componentes naturales específicos relevantes.</li><li>Objetivo: preservación de elementos de valor excepcional.</li><li><strong>Prohibición</strong> de explotación comercial de recursos.</li></ul>` 
  },
  60: { 
    title: "Reserva Nacional", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Área con <strong>comunidades biológicas relevantes</strong> para protección de especies.</li><li>Objetivo: conservación mediante gestión activa.</li><li>Permite actividades de uso sustentable sin poner en riesgo servicios ecosistémicos.</li></ul>` 
  },
  61: { 
    title: "Área de Múltiples Usos", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Área con <strong>interacción tradicional entre humanos y naturaleza</strong>.</li><li>Objetivo: asegurar uso sustentable mediante manejo integrado.</li><li>Permite diversas actividades de uso sustentable.</li></ul>` 
  },
  62: { 
    title: "Área de Pueblos Indígenas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Área en <strong>tierras indígenas o espacios costeros</strong> de pueblos originarios.</li><li>Objetivo: conservación de hábitats, especies y valores culturales asociados.</li><li>Permite usos ancestrales y actividades sustentables.</li></ul>` 
  },
  63: { 
    title: "Proyectos en Áreas Protegidas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Todo proyecto en áreas protegidas debe:</li><li>Respetar la categoría y objeto de protección</li><li>Ser compatible con el plan de manejo</li><li>Excluye explotación de recursos con fines comerciales</li></ul>` 
  },
  64: { 
    title: "Creación de Áreas Protegidas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas protegidas del Estado se crean mediante <strong>decreto supremo</strong> del MMA.</li><li>Requiere firma de Ministros de Bienes Nacionales y Defensa (según corresponda).</li><li>El decreto debe contener categoría, superficie, ubicación y objetos de protección.</li></ul>` 
  },
  65: { 
    title: "Procedimiento de Creación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas pueden crearse <strong>de oficio o a solicitud</strong> de personas/comunidades.</li><li>Requiere informe técnico del SBAP y consulta a comunidades indígenas.</li><li>Un reglamento establecerá procedimiento con participación ciudadana.</li></ul>` 
  },
  66: { 
    title: "Modificación y Desafectación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La modificación o desafectación requiere:</li><li>Procedimiento similar a creación</li><li>Informe favorable del Comité Científico Asesor</li><li>Excepcional y sin detrimento a objetivos del SNAP</li><li><strong>Parques Nacionales y Reservas de Región Virgen</strong> solo por ley</li></ul>` 
  },
  67: { 
    title: "Administración de Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La administración de áreas protegidas del Estado corresponde al <strong>SBAP</strong>.</li><li>Incluye elaboración e implementación de planes de manejo y uso público.</li><li>Otorgamiento de permisos, concesiones y convenios de gestión.</li></ul>` 
  },
  68: { 
    title: "Participación en Gestión", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá celebrar <strong>convenios de gestión</strong> con:</li><li>Autoridades u organizaciones locales</li><li>Asociaciones o comunidades indígenas</li><li>Los convenios contendrán estructura, derechos, obligaciones y beneficios.</li></ul>` 
  },
  69: { 
    title: "Administrador de Área", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Cada área protegida contará con un <strong>administrador</strong> (funcionario del SBAP).</li><li>Funciones: dar cumplimiento al plan de manejo, supervisar personal, aplicar medidas.</li><li>Reportar eventos relevantes y denunciar infracciones.</li></ul>` 
  },
  70: { 
    title: "Tarifas de Ingreso", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP fijará <strong>tarifas por ingreso</strong> a áreas protegidas y servicios.</li><li>Criterios: residencia, edad, tipo y calidad de instalaciones.</li><li><strong>Exenciones</strong>: comunidades indígenas en usos ancestrales, estudiantes, guías y scouts.</li></ul>` 
  },
  71: { 
    title: "Planes de Manejo", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Toda área protegida debe contar con <strong>plan de manejo obligatorio</strong>.</li><li>Constituye marco regulatorio para gestión y actividades permitidas.</li><li>Podrá dividirse en programas específicos (conservación, uso público, etc.).</li></ul>` 
  },
  72: { 
    title: "Contenido de Planes de Manejo", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los planes deben contener:</li><li>Objeto(s) de protección</li><li>Diagnóstico de presiones y amenazas</li><li>Plan de monitoreo con metas e indicadores</li><li>Zonificación y definición de zona de amortiguación</li></ul>` 
  },
  73: { 
    title: "Aprobación de Planes", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El plan de manejo será <strong>elaborado y aprobado por el SBAP</strong> mediante resolución.</li><li>Plazo máximo: 2 años desde creación del área.</li><li>Revisión al menos cada 5 años.</li></ul>` 
  },
  74: { 
    title: "Reglamento de Planes", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Un reglamento del MMA establecerá:</li><li>Procedimiento para elaboración de planes</li><li>Contenidos específicos por categoría</li><li>Participación de comunidades e indígenas</li><li>Consulta a Subsecretarías de Pesca y Turismo</li></ul>` 
  },
  75: { 
    title: "Cuerpo de Guardaparques", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP contará con un <strong>cuerpo de guardaparques</strong>.</li><li>Serán la autoridad competente para manejo y fiscalización de áreas.</li></ul>` 
  },
  76: { 
    title: "Funciones de Guardaparques", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Corresponde a los guardaparques:</li><li>Apoyar elaboración y aplicación de planes</li><li>Instruir y exigir cumplimiento de normas</li><li>Monitorear estado de biodiversidad</li><li>Educar a visitantes y comunidad local</li></ul>` 
  },
  77: { 
    title: "Funciones de Fiscalización", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Director Nacional designará guardaparques para funciones de <strong>fiscalización</strong>.</li><li>Requisitos: licencia enseñanza media, 2 años como guardaparque, cursos de formación.</li><li>Podrán ejercer funciones en áreas privadas previo requerimiento.</li></ul>` 
  },
  78: { 
    title: "Formación de Guardaparques", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP tendrá <strong>programas de formación y capacitación</strong> para guardaparques.</li><li>Considerará cosmovisión de pueblos originarios del territorio.</li><li>Podrá reconocer cursos o programas distintos a los del SBAP.</li></ul>` 
  },
  79: { 
    title: "Concesiones en Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá otorgar <strong>concesiones</strong> solo para:</li><li>Investigación científica</li><li>Educación</li><li>Turismo (que requiera infraestructura permanente)</li><li>Duración máxima: 30 años</li></ul>` 
  },
  80: { 
    title: "Criterios para Concesiones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>En otorgamiento se considerará:</li><li>Categoría y objeto de protección del área</li><li>Consulta a pueblos indígenas (Convenio 169)</li><li>Respeto a usos ancestrales</li><li>Turismo ambientalmente responsable y accesible</li></ul>` 
  },
  81: { 
    title: "Comité Técnico", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Créase un <strong>Comité Técnico consultivo</strong> para otorgamiento de concesiones.</li><li>Integrado por: Director Nacional (presidente), representantes de MMA, Turismo, Educación, Ciencias, Culturas, Desarrollo Social y Bienes Nacionales.</li></ul>` 
  },
  82: { 
    title: "Renta Concesional", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La renta será fijada por el SBAP según:</li><li>Renta bruta anual del servicio</li><li>Monto de inversión a ejecutar</li><li>Factibilidad económica del proyecto</li><li>Destino: gestión del SNAP y monitoreo</li></ul>` 
  },
  83: { 
    title: "Concesiones Gratuitas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Excepcionalmente, el SBAP podrá otorgar concesiones <strong>gratuitas</strong> para:</li><li>Investigación científica o educación</li><li>A favor de municipalidades, organismos estatales o entidades sin fines de lucro</li><li>Podrán extinguirse por voluntad del SBAP</li></ul>` 
  },
  84: { 
    title: "Concesionario", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP solo otorgará concesiones a <strong>personas jurídicas</strong>.</li><li>Para concesiones turísticas: rol único tributario exclusivo.</li></ul>` 
  },
  85: { 
    title: "Procedimiento de Otorgamiento", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las concesiones se otorgarán mediante:</li><li><strong>Licitación pública</strong> (obligatoria para turismo)</li><li>Licitación privada</li><li>Directamente (solo gratuitas y fundadas)</li></ul>` 
  },
  86: { 
    title: "Bases de Licitación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Corresponde al SBAP confeccionar <strong>bases de licitación</strong>.</li><li>Deberán ajustarse a categoría, objeto de protección y plan de manejo.</li><li>Podrán contemplar restricciones a la actividad.</li></ul>` 
  },
  87: { 
    title: "Adjudicación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La adjudicación se efectuará mediante <strong>resolución del SBAP</strong>.</li><li>Requiere suscripción de contrato en escritura pública.</li><li>Remisión de copia a Ministerio de Bienes Nacionales o Defensa.</li></ul>` 
  },
  88: { 
    title: "Transferencia de Concesión", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El concesionario podrá <strong>transferir la concesión</strong> totalmente.</li><li>Requiere aprobación del SBAP y cumplimiento de requisitos.</li><li>El SBAP llevará un registro de transferencias.</li></ul>` 
  },
  89: { 
    title: "Extinción de Concesión", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Causales de extinción:</li><li>Vencimiento de plazo</li><li>Mutuo acuerdo</li><li>Pérdida de requisitos</li><li>Incumplimiento de obligaciones</li><li>Imposibilidad de objeto</li></ul>` 
  },
  90: { 
    title: "Mejoras", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>A falta de estipulación contrario, todo lo edificado y plantado por el concesionario pasará a <strong>dominio del Fisco</strong> sin indemnización.</li></ul>` 
  },
  91: { 
    title: "Otros Permisos", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La adjudicación de concesión <strong>no libera</strong> de obtener otros permisos necesarios.</li></ul>` 
  },
  92: { 
    title: "Concesiones Sectoriales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Concesiones para fines distintos requieren:</li><li>Área con plan de manejo</li><li>Actividad compatible con categoría y objeto</li><li>Informe favorable del SBAP</li></ul>` 
  },
  93: { 
    title: "Prohibición de Concesiones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li><strong>Prohibición</strong> de concesiones sectoriales para explotación comercial en:</li><li>Reservas de Región Virgen</li><li>Parques Nacionales</li><li>Monumentos Naturales</li></ul>` 
  },
  94: { 
    title: "Permiso para Actividades", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Actividades transitorias o sin infraestructura requieren <strong>permiso del SBAP</strong>.</li><li>Duración máxima: 1 año (renovable)</li><li>El SBAP podrá establecer obligaciones o retribuciones.</li></ul>` 
  },
  95: { 
    title: "Acceso a Recursos Genéticos", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP regulará <strong>condiciones de acceso a recursos genéticos</strong> en áreas protegidas.</li><li>Mediante convenios con solicitantes que establezcan beneficios derivados.</li></ul>` 
  },
  96: { 
    title: "Fiscalización de Concesiones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP verificará y exigirá <strong>cumplimiento de obligaciones</strong> en contratos de concesión o permisos.</li></ul>` 
  },
  97: { 
    title: "Áreas Protegidas Privadas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas protegidas privadas forman parte del <strong>SNAP</strong>.</li><li>Deben acogerse a alguna de las 6 categorías establecidas.</li><li>Un reglamento regulará procedimiento de creación, modificación y desafectación.</li></ul>` 
  },
  98: { 
    title: "Solicitud de Creación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Procedimiento se inicia con <strong>solicitud voluntaria</strong> del propietario al Director Regional.</li><li>Requiere información sobre ubicación, propiedad, características ecológicas, categoría propuesta y objetos de protección.</li></ul>` 
  },
  99: { 
    title: "Creación de Áreas Privadas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La creación se realiza mediante <strong>decreto supremo del MMA</strong>.</li><li>El propietario debe reducir el decreto a escritura pública e inscribirlo.</li></ul>` 
  },
  100: { 
    title: "Modificación y Desafectación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Se regirá por reglamento del artículo 97.</li><li>En desafectación: restitución total de beneficios obtenidos.</li><li><strong>Parques Nacionales y Reservas de Región Virgen</strong> solo por ley.</li></ul>` 
  },
  101: { 
    title: "Transferencia de Dominio", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>La transferencia <strong>no altera</strong> el carácter de área protegida.</li><li>El acto debe señalarlo expresamente bajo nulidad si no lo hace.</li><li>El propietario debe informar al SBAP sobre transferencia.</li></ul>` 
  },
  102: { 
    title: "Administración y Supervisión", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas privadas serán administradas por <strong>propietarios o designados</strong>.</li><li>La supervisión corresponde al SBAP, que podrá requerir antecedentes.</li><li>Fiscalizadores podrán ingresar para inspección.</li></ul>` 
  },
  103: { 
    title: "Planes de Manejo Privados", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los planes serán elaborados por <strong>propietarios u organizaciones</strong> y aprobados por el SBAP.</li><li>Deberán contener lo dispuesto en artículo 72 y reglamento del artículo 97.</li></ul>` 
  },
  104: { 
    title: "Apoyo Técnico", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá prestar <strong>apoyo técnico</strong> a administradores.</li><li>Elaborará formato tipo de plan de manejo y programas de capacitación.</li><li>Fomentará cooperación con instituciones públicas o privadas.</li></ul>` 
  },
  105: { 
    title: "Incentivos para Áreas Privadas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas protegidas privadas gozarán de:</li><li><strong>Exención del impuesto territorial</strong> (mientras cumplan plan de manejo)</li><li>Exención del impuesto a la herencia</li><li>Participación gratuita en capacitación de guardaparques</li><li>Bonificaciones en Fondo Nacional de Biodiversidad</li></ul>` 
  },
  106: { 
    title: "Integración de Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Forman parte de las áreas protegidas:</li><li>Suelo, subsuelo y fondo marino</li><li>Porciones de mar, terrenos de playa, glaciares, ríos, lagos, lagunas, estuarios y humedales</li></ul>` 
  },
  107: { 
    title: "Áreas Libres de Transgénicos", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas protegidas del SNAP serán declaradas <strong>áreas libres de organismos genéticamente modificados</strong>.</li></ul>` 
  },
  108: { 
    title: "Prohibiciones en Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li><strong>Prohibiciones</strong> para toda persona ajena a la administración:</li><li>Remover o extraer tierra, turba, rocas, arena</li><li>Intimidar, cazar, capturar, extraer fauna nativa</li><li>Destruir nidos o lugares de reproducción</li><li>Cortar o extraer flora nativa</li><li>Introducir especies exóticas o transgénicas</li></ul>` 
  },
  109: { 
    title: "Alcance de la Fiscalización", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP fiscalizará:</li><li>Cumplimiento de planes de manejo</li><li>Obligaciones de propietarios y administradores</li><li>Contratos de concesión y permisos</li><li>Planes de restauración y control de especies invasoras</li></ul>` 
  },
  110: { 
    title: "Ministros de Fe", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los fiscalizadores tendrán calidad de <strong>ministros de fe</strong> respecto de hechos constitutivos de infracciones.</li><li>Los hechos establecidos constituyen presunción legal de infracción.</li></ul>` 
  },
  111: { 
    title: "Convenios de Fiscalización", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá realizar funciones de fiscalización fuera de áreas mediante <strong>convenios de encomendamiento</strong> con servicio competente.</li><li>Los convenios señalarán tareas y asignación de recursos.</li></ul>` 
  },
  112: { 
    title: "Alcance de Infracciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las sanciones son <strong>sin perjuicio</strong> de responsabilidad civil o penal.</li></ul>` 
  },
  113: { 
    title: "Responsabilidad Solidaria", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Si no es posible determinar grado de participación, la responsabilidad será <strong>solidaria</strong>.</li></ul>` 
  },
  114: { 
    title: "Potestad Sancionadora", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las infracciones serán sancionadas <strong>administrativamente por el SBAP</strong>.</li></ul>` 
  },
  115: { 
    title: "Infracciones en Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Constituyen infracciones:</li><li>Contravenir prohibiciones del artículo 108</li><li>Incumplir planes de manejo</li><li>Incumplir obligaciones de concesiones</li><li>Realizar actividades sin permiso requerido</li></ul>` 
  },
  116: { 
    title: "Infracciones Fuera de Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Constituyen infracciones:</li><li>En sitios prioritarios: alterar significativamente características ecológicas</li><li>Incumplir planes de restauración</li><li>Alterar físicamente humedales sin permiso</li><li>Contravenir prohibiciones sobre monumentos naturales</li></ul>` 
  },
  117: { 
    title: "Concurso de Infracciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Si una conducta constituye infracción en esta y otra ley, se aplica la de <strong>mayor entidad</strong>.</li><li>Excepción: infracciones a RCA (competencia exclusiva de Superintendencia del Medio Ambiente).</li></ul>` 
  },
  118: { 
    title: "Categorías de Infracciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Infracciones <strong>gravísimas</strong>: daño ambiental irreparable, afectación grave de servicios ecosistémicos.</li><li>Infracciones <strong>graves</strong>: daño reparable, afectación sin compromiso grave.</li><li>Infracciones <strong>leves</strong>: contravenciones no incluidas en anteriores.</li></ul>` 
  },
  119: { 
    title: "Prescripción", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las infracciones prescriben a los <strong>3 años</strong> desde su comisión o manifestación de efectos.</li><li>Se interrumpe con notificación de formulación de cargos.</li></ul>` 
  },
  120: { 
    title: "Sanciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Para infracciones <strong>gravísimas</strong>: multa hasta 15.000 UTM, restitución de beneficios, extinción de concesión, prohibición de ingreso 5-15 años.</li><li>Para <strong>graves</strong>: multa hasta 10.000 UTM, restitución parcial, suspensión de concesión, prohibición 5-10 años.</li><li>Para <strong>leves</strong>: multa hasta 1.000 UTM, prestación de servicios.</li></ul>` 
  },
  121: { 
    title: "Pago de Multa", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las multas se pagan en <strong>Tesorería General de la República</strong> dentro de 10 días.</li><li>Las resoluciones tienen mérito ejecutivo.</li></ul>` 
  },
  122: { 
    title: "Acta de Fiscalización", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los fiscalizadores levantarán <strong>acta de fiscalización</strong> describiendo hechos objetivamente.</li><li>Con el acta podrá iniciarse procedimiento sancionador.</li></ul>` 
  },
  123: { 
    title: "Denuncias", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Cualquier persona podrá <strong>denunciar infracciones</strong> por escrito al SBAP.</li><li>Debe contener: individualización del denunciante, descripción de hechos, lugar, fecha y presunto infractor.</li></ul>` 
  },
  124: { 
    title: "Admisión del Acta o Denuncia", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El procedimiento se inicia con:</li><li>Comunicación del fiscalizador al Director Regional</li><li>Denuncia (si tiene seriedad y mérito suficiente)</li><li>En caso contrario, se realiza fiscalización o se archiva.</li></ul>` 
  },
  125: { 
    title: "Medidas Provisionales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El fiscalizador podrá solicitar <strong>medidas provisionales</strong> al Director Regional:</li><li>Medidas de corrección o seguridad</li><li>Retención de elementos o inmovilización de vehículos</li><li>Aposición de sellos</li><li>Clausura temporal de instalaciones</li></ul>` 
  },
  126: { 
    title: "Cese de Medidas Provisionales", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las medidas durarán mientras subsista la necesidad.</li><li>El Director Regional deberá confirmar, modificar o levantar al inicio del procedimiento.</li><li>Podrán alzarse durante tramitación.</li></ul>` 
  },
  127: { 
    title: "Medidas Correctivas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Frente a infracciones flagrantes, el SBAP podrá ordenar <strong>restablecimiento de legalidad</strong> en plazo máximo 5 días.</li></ul>` 
  },
  128: { 
    title: "Incumplimientos Menores", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP podrá determinar <strong>disconformidades</strong> para incumplimientos menores.</li><li>Deben subsanarse en máximo 10 días.</li><li>Si no se subsana, se cursa infracción.</li></ul>` 
  },
  129: { 
    title: "Inicio de Procedimiento", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Director Regional dará inicio a la instrucción mediante <strong>resolución con formulación de cargos</strong>.</li><li>Plazo para descargos: 15 días.</li><li>Si infractor no es habido, se publica extracto en diario.</li></ul>` 
  },
  130: { 
    title: "Examen de Antecedentes", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Recibidos los descargos, el instructor examinará mérito y ordenará <strong>diligencias probatorias</strong>.</li><li>Plazo máximo: 30 días.</li></ul>` 
  },
  131: { 
    title: "Medios de Prueba", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los hechos podrán acreditarse por <strong>cualquier medio de prueba</strong> admisible.</li><li>Se presume veracidad de hechos constatados por fiscalizadores en acta.</li></ul>` 
  },
  132: { 
    title: "Expediente", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El instructor dejará constancia de todo lo obrado en <strong>expediente</strong> (escrito o electrónico).</li><li>Con orden de ingreso de documentos y actuaciones.</li></ul>` 
  },
  133: { 
    title: "Informe y Resolución", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El instructor evacuará <strong>informe</strong> con individualización de infractores, hechos investigados y propuesta de sanción.</li><li>El Director Regional resolverá en 10 días mediante resolución fundada.</li></ul>` 
  },
  134: { 
    title: "Reclamación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Podrán reclamarse ante <strong>Tribunales Ambientales</strong>:</li><li>Resoluciones que impongan sanciones</li><li>Resoluciones que aprueben planes de manejo o restauración</li><li>Decretos que creen, modifiquen o desafecten áreas</li><li>Resoluciones que otorguen o denieguen concesiones/permisos</li></ul>` 
  },
  135: { 
    title: "Competencia", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Competencia del Tribunal Ambiental según acto reclamado:</li><li>Sanciones: lugar donde se originó infracción</li><li>Planes: lugar donde se aplica el instrumento</li><li>Concesiones/permisos: cualquier persona afectada</li></ul>` 
  },
  136: { 
    title: "Legitimación Activa", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Tienen legitimación para reclamar:</li><li>Para sanciones: persona sancionada y denunciante</li><li>Para planes: cualquier persona perjudicada</li><li>Para concesiones/permisos: cualquier persona o directamente afectada</li></ul>` 
  },
  137: { 
    title: "Plazo para Reclamar", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Plazo para interponer reclamación: <strong>30 días hábiles</strong> desde notificación o publicación.</li></ul>` 
  },
  138: { 
    title: "Procedimiento de Reclamación", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Se regirá por el <strong>Párrafo 2° del Título III de la ley 20.600</strong> (Tribunales Ambientales).</li></ul>` 
  },
  139: { 
    title: "Recursos contra Resolución", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Contra resoluciones del Tribunal Ambiental procede:</li><li><strong>Apelación</strong> (para inadmisibilidad, recepción a prueba, término de proceso)</li><li><strong>Casación en el fondo</strong> (contra sentencia definitiva)</li></ul>` 
  },
  140: { 
    title: "Registro de Sanciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El SBAP mantendrá un <strong>registro público</strong> de sanciones aplicadas.</li><li>Contendrá nombre de responsables, naturaleza de infracciones y sanciones.</li><li>Se publicará en sitio electrónico del SBAP.</li></ul>` 
  },
  141: { 
    title: "Plan de Corrección", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El presunto infractor podrá presentar <strong>voluntariamente</strong> un plan de corrección.</li><li>Desde aprobación, se suspende prescripción de artículo 119.</li><li>Costos de implementación serán cargo del infractor.</li></ul>` 
  },
  142: { 
    title: "Regla Supletoria", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>En lo no previsto, se aplica <strong>supletoriamente la ley 19.880</strong> (procedimientos administrativos).</li></ul>` 
  },
  143: { 
    title: "Derogación Ley 18.362", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li><strong>Derógase la ley 18.362</strong> que creaba el Sistema Nacional de Áreas Silvestres Protegidas del Estado.</li></ul>` 
  },
  144: { 
    title: "Modificaciones a Ley 19.300", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Bases Generales del Medio Ambiente</strong>:</li><li>Reemplaza letra p) artículo 10 (ejecución de obras en áreas protegidas)</li><li>Reemplaza artículo 34 (administración del SNAP por SBAP)</li><li>Modifica artículo 35 (fomento a áreas protegidas privadas)</li><li>Reemplaza artículo 37 (clasificación de especies y planes de recuperación)</li></ul>` 
  },
  145: { 
    title: "Modificaciones a Ley 20.417", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Superintendencia del Medio Ambiente</strong>:</li><li>Elimina referencias a planes de manejo en fiscalización</li><li>Elimina letra i) artículo 35 (atribuciones sobre planes de manejo)</li></ul>` 
  },
  146: { 
    title: "Modificaciones a DL 1.939", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Decreto Ley 1.939</strong> (bienes del Estado):</li><li>Deroga artículo 15</li><li>Reemplaza artículo 21 (destino de áreas protegidas)</li></ul>` 
  },
  147: { 
    title: "Modificaciones a Ley 18.892", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley General de Pesca y Acuicultura</strong>:</li><li>Reemplaza "marina" por "de interés pesquero"</li><li>Elimina referencias a "Reservas Marinas"</li><li>Incorpora fiscalización por SBAP mediante convenio</li></ul>` 
  },
  148: { 
    title: "Modificaciones a Ley 20.256", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Pesca Recreativa</strong>:</li><li>Prohíbe pesca recreativa de especies en peligro</li><li>Incorpora participación del SBAP en comités</li><li>Modifica normas sobre áreas protegidas</li></ul>` 
  },
  149: { 
    title: "Modificaciones a Ley 4.601", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Caza</strong>:</li><li>Actualiza categorías de conservación de especies</li><li>Incorpora SBAP en fiscalización y comités</li><li>Modifica normas sobre áreas protegidas</li></ul>` 
  },
  150: { 
    title: "Modificaciones a Ley 20.283", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Bosque Nativo</strong>:</li><li>Actualiza categorías de conservación</li><li>Incorpora informe favorable del SBAP para intervenciones</li><li>Agrega al Director Nacional del SBAP en comités</li></ul>` 
  },
  151: { 
    title: "Modificaciones a Ley de Bosques", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Decreto Ley 4.363</strong> (Ley de Bosques de 1931):</li><li>Elimina referencias a "parques nacionales de turismo"</li></ul>` 
  },
  152: { 
    title: "Modificaciones a Ley 17.288", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Monumentos Nacionales</strong>:</li><li>Elimina "santuarios de la naturaleza" de definiciones</li><li>Deroga artículo 31 (santuarios de la naturaleza)</li></ul>` 
  },
  153: { 
    title: "Modificaciones a Ley 20.423", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Modificaciones a <strong>Ley de Turismo</strong>:</li><li>Incorpora Ministro del Medio Ambiente en comité</li><li>Deroga artículos sobre concesiones en áreas silvestres</li><li>Establece que turismo en áreas protegidas debe ser compatible</li></ul>` 
  },
  154: { 
    title: "Modificaciones a Código de Minería", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li><strong>Suprímese el numeral 2° del artículo 17</strong> del Código de Minería (referente a áreas silvestres protegidas).</li></ul>` 
  },
  155: { 
    title: "Facultades del Presidente", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Facúltase al Presidente para dictar <strong>decretos con fuerza de ley</strong> dentro de 1 año:</li><li>Fijar grados de remuneraciones del SBAP</li><li>Fijar planta de personal de directivos</li><li>Ordenar traspaso de personal desde CONAF</li><li>Determinar fecha de entrada en vigencia del SBAP</li></ul>` 
  },
  156: { 
    title: "Primer Presupuesto", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Presidente conformará el <strong>primer presupuesto del SBAP</strong> mediante decreto.</li><li>Transferirá fondos de entidades que traspasan personal o bienes.</li></ul>` 
  },
  157: { 
    title: "Financiamiento", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El mayor gasto fiscal del primer año se financiará con:</li><li>Reasignaciones desde Ministerio del Medio Ambiente</li><li>Partida Tesoro Público (lo que falte)</li><li>Años siguientes: con recursos de Ley de Presupuestos</li></ul>` 
  },
  158: { 
    title: "Áreas Protegidas Existentes", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Se entienden incorporadas al SNAP las áreas protegidas existentes:</li><li>Parques marinos, nacionales, monumentos naturales</li><li>Reservas marinas, nacionales, forestales</li><li>Santuarios de la naturaleza, bienes nacionales protegidos</li><li>Humedales Ramsar</li></ul>` 
  },
  159: { 
    title: "Reclasificación de Áreas", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las áreas existentes deberán someterse a <strong>proceso de homologación</strong> a nuevas categorías:</li><li>Reservas marinas: a Reserva de Interés Pesquero o Reserva Nacional</li><li>Santuarios de la naturaleza: a categoría correspondiente</li><li>Bienes nacionales protegidos: a categoría aplicable</li></ul>` 
  },
  160: { 
    title: "Concesiones Preexistentes", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las concesiones otorgadas antes de crear un área protegida <strong>continuarán vigentes</strong> hasta relocalización.</li><li>Aplica también a contratos de CONAF en áreas silvestres.</li></ul>` 
  },
  161: { 
    title: "Acuerdos con Pueblos Originarios", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los actos y contratos con <strong>pueblo Rapa Nui</strong> mantendrán vigencia.</li><li>Colaboración de Comisión de Desarrollo de Isla de Pascua en administración de Parque Nacional.</li></ul>` 
  },
  162: { 
    title: "Sitios Prioritarios Existentes", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los sitios prioritarios identificados en estrategias de biodiversidad <strong>mantendrán vigencia</strong>.</li><li>El MMA dictará decreto supremo para determinarlos dentro de 5 años.</li></ul>` 
  },
  163: { 
    title: "Vigencia Gradual de Funciones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Las funciones del SBAP en letra b) artículo 5° entrarán en vigencia dentro del <strong>tercer año</strong> desde funcionamiento.</li><li>Aplica para áreas protegidas estatales de categorías Parque Nacional, Reserva Nacional y Monumento Natural.</li></ul>` 
  },
  164: { 
    title: "Relocalización de Concesiones", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Titulares de concesiones de acuicultura en áreas protegidas podrán <strong>relocalizar</strong> con preferencia.</li><li>Aplica incluso si no hay suspensión de otorgamiento en regiones de Los Lagos y Aysén.</li></ul>` 
  },
  165: { 
    title: "Excepción para Guardaparques", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Estarán exentos del requisito de licencia enseñanza media los guardaparques <strong>traspasados desde CONAF</strong>.</li></ul>` 
  },
  166: { 
    title: "Plazo para Reglamentos", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>Los reglamentos referidos en la ley deberán dictarse dentro de <strong>2 años</strong> desde publicación.</li><li>En elaboración de reglamentos de artículos 15 y 22 se contemplará participación de trabajadores traspasados.</li></ul>` 
  },
  167: { 
    title: "Primer Director Nacional", 
    summary: `<ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"><li>El Presidente podrá nombrar al <strong>primer director nacional</strong> sin sujetarse a Sistema de Alta Dirección Pública.</li><li>Mientras no entre en funcionamiento el SBAP, su remuneración se financiará con presupuesto del MMA.</li></ul>` 
  }
}
    };


const semanticMap = {
  "salmon": {
        explanation: "Entendí que buscas información sobre salmones. Te mostré resultados sobre 'acuicultura' y especies exóticas.",
        keywords: ["salmón", "acuicultura", "piscicultura", "especie exótica", "cultivo de peces"],
        articleIds: [3, 5, 6] 
      },
      "dañado": {
        explanation: "Entendí que buscas información sobre áreas dañadas. Te mostré resultados sobre 'áreas degradadas' y 'restauración ecológica'.",
        keywords: ["degradado", "restauración", "daño", "deterioro", "recuperación"],
        articleIds: [3, 32, 33]
      },
      "especie invasora": {
        explanation: "Entendí tu consulta sobre especies foráneas. Te mostré resultados sobre 'especies exóticas', 'especies exóticas invasoras' y los planes de control.",
        keywords: ["especie exótica", "especie exótica invasora", "planes de prevención, control y erradicación"],
        articleIds: [3, 5]
      },
      "humedal": {
        explanation: "Buscaste la definición y relevancia de los humedales. Te mostré la definición oficial y artículos relacionados.",
        keywords: ["humedal", "servicios ecosistémicos"],
        articleIds: [3, 2]
      },
      "parque nacional": {
        explanation: "Entendí que buscas información sobre parques nacionales y áreas protegidas. Te mostré resultados sobre el 'Sistema Nacional de Áreas Protegidas'.",
        keywords: ["parque nacional", "área protegida", "sistema nacional de áreas protegidas"],
        articleIds: [4, 5, 23]
      },
      "turismo": {
        explanation: "Entendí que buscas información sobre turismo en áreas naturales. Te mostré resultados sobre 'turismo ambientalmente responsable'.",
        keywords: ["turismo ambientalmente responsable", "uso sustentable"],
        articleIds: [3, 34]
      },
      "investigación": {
        explanation: "Entendí que buscas información sobre investigación científica. Te mostré resultados sobre las funciones del Servicio de Biodiversidad.",
        keywords: ["investigación científica", "monitoreo", "servicio de biodiversidad"],
        articleIds: [4, 5]
      },
      "proyecto inmobiliario": {
        explanation: "Entendí que buscas información sobre proyectos de construcción. Te mostré resultados sobre el 'Principio de Jerarquía' y evaluación de impacto.",
        keywords: ["principio de jerarquía", "impacto significativo", "evaluación ambiental"],
        articleIds: [2, 9]
      },
      "conservación": {
        explanation: "Entendí que buscas información sobre conservación de la biodiversidad. Te mostré resultados sobre el objeto de la ley y los principios.",
        keywords: ["conservación", "biodiversidad", "patrimonio natural"],
        articleIds: [1, 2]
      },
      "restauración": {
        explanation: "Entendí que buscas información sobre restauración ecológica. Te mostré resultados sobre los planes de restauración.",
        keywords: ["restauración ecológica", "planes de restauración", "áreas degradadas"],
        articleIds: [3, 32, 33]
      },
  // 1. CONCEPTOS FUNDAMENTALES
  "biodiversidad": {
    explanation: "Variedad de organismos vivos en todos los ecosistemas. Incluye diversidad genética, de especies y de ecosistemas.",
    keywords: ["diversidad biológica", "ecosistemas", "genes", "especies", "interacciones ecológicas"],
    articleIds: [1, 3, 23]
  },
  "conservación in situ": {
    explanation: "Conservación de componentes de la biodiversidad en sus hábitats naturales.",
    keywords: ["hábitat natural", "procción en origen", "ecosistemas nativos"],
    articleIds: [3, 23]
  },
  "conservación ex situ": {
    explanation: "Conservación de componentes de la biodiversidad fuera de sus hábitats naturales.",
    keywords: ["jardines botánicos", "bancos de germoplasma", "centros de reproducción"],
    articleIds: [3, 5, 23]
  },
  "servicios ecosistémicos": {
    explanation: "Contribución directa o indirecta de los ecosistemas al bienestar humano.",
    keywords: ["beneficios ecosistémicos", "servicios ambientales", "funciones ecológicas"],
    articleIds: [2, 3, 24, 28]
  },
  "uso sustentable": {
    explanation: "Utilización de componentes de la biodiversidad que no disminuya su capacidad a largo plazo.",
    keywords: ["manejo sostenible", "explotación responsable", "recursos renovables"],
    articleIds: [1, 3, 50]
  },
  
  // 2. PRINCIPIOS DE LA LEY
  "principio de coordinación": {
    explanation: "Implementación coordinada de instrumentos de conservación entre órganos competentes.",
    keywords: ["trabajo interinstitucional", "gestión conjunta", "coordinación administrativa"],
    articleIds: [2]
  },
  "principio de jerarquía": {
    explanation: "Evitar, mitigar, reparar y compensar impactos significativos sobre la biodiversidad.",
    keywords: ["jerarquía de mitigación", "impactos ambientales", "compensación ecológica"],
    articleIds: [2, 38]
  },
  "principio de no regresión": {
    explanation: "Prohibición de modificaciones que disminuyan niveles de protección previamente alcanzados.",
    keywords: ["protección ambiental", "estándares mínimos", "retroceso ecológico"],
    articleIds: [2]
  },
  "principio participativo": {
    explanation: "Deber del Estado de garantizar participación ciudadana en conservación de biodiversidad.",
    keywords: ["participación ciudadana", "inclusión social", "gestión compartida"],
    articleIds: [2, 54]
  },
  "principio de precaución": {
    explanation: "Adoptar medidas ante riesgos de daño grave o irreversible, incluso con incertidumbre científica.",
    keywords: ["enfoque preventivo", "incertidumbre científica", "daño irreversible"],
    articleIds: [2]
  },
  
  // 3. INSTRUMENTOS DE CONSERVACIÓN
  "sistema nacional de áreas protegidas": {
    explanation: "Conjunto de áreas protegidas del Estado y privadas para conservación de biodiversidad.",
    keywords: ["SNAP", "red de conservación", "áreas silvestres"],
    articleIds: [53, 54, 55]
  },
  "sitio prioritario": {
    explanation: "Área de valor ecológico priorizada para conservación por su aporte a la biodiversidad.",
    keywords: ["área clave", "conservación prioritaria", "sitio ecológico"],
    articleIds: [29, 116]
  },
  "plan de manejo": {
    explanation: "Instrumento de gestión ambiental con metas, medidas y responsabilidades para biodiversidad.",
    keywords: ["gestión ambiental", "planificación ecológica", "manejo adaptativo"],
    articleIds: [20, 31, 71]
  },
  "plan de restauración ecológica": {
    explanation: "Plan para reponer áreas degradadas a condiciones similares a las originales.",
    keywords: ["recuperación ecológica", "rehabilitación ambiental", "restauración de ecosistemas"],
    articleIds: [24, 33, 38]
  },
  "corredor biológico": {
    explanation: "Espacio que conecta hábitats facilitando desplazamiento de especies y flujo genético.",
    keywords: ["conectividad ecológica", "pasos de fauna", "corredores ecológicos"],
    articleIds: [3, 54]
  },
  
  // 4. ÁREAS PROTEGIDAS
  "reserva de región virgen": {
    explanation: "Área con condiciones primitivas naturales no perturbadas por actividades humanas.",
    keywords: ["área prístina", "ecosistema intacto", "protección estricta"],
    articleIds: [56, 57]
  },
  "parque nacional": {
    explanation: "Área con diversos ambientes representativos del patrimonio natural de interés educativo y científico.",
    keywords: ["protección estricta", "patrimonio natural", "conservación de ecosistemas"],
    articleIds: [56, 58]
  },
  "monumento natural": {
    explanation: "Área reducida con componentes naturales específicos relevantes para la biodiversidad.",
    keywords: ["protección específica", "elementos únicos", "conservación puntual"],
    articleIds: [44, 56, 59]
  },
  "reserva nacional": {
    explanation: "Área con comunidades biológicas relevantes para protección de especies y ecosistemas.",
    keywords: ["manejo activo", "conservación de hábitats", "usos controlados"],
    articleIds: [56, 60]
  },
  "área de conservación de múltiples usos": {
    explanation: "Área con interacción tradicional entre humanos y naturaleza relevante para conservación.",
    keywords: ["manejo integrado", "usos múltiples", "conservación con aprovechamiento"],
    articleIds: [56, 61]
  },
  "área de conservación de pueblos indígenas": {
    explanation: "Área en tierras indígenas con valores culturales asociados a conservación de biodiversidad.",
    keywords: ["territorio indígena", "conservación cultural", "conocimientos tradicionales"],
    articleIds: [56, 62]
  },
  "zona de amortiguación": {
    explanation: "Espacio alrededor de áreas protegidas para absorber impactos negativos y fomentar efectos positivos.",
    keywords: ["zona tampón", "área periférica", "protección perimetral"],
    articleIds: [33, 72]
  },
  
  // 5. ESPECIES Y ECOSISTEMAS
  "especie endémica": {
    explanation: "Especie nativa que se distribuye únicamente en un territorio geográfico determinado.",
    keywords: ["especie exclusiva", "distribución restringida", "endemismo"],
    articleIds: [3]
  },
  "especie exótica": {
    explanation: "Especie que se encuentra fuera de su distribución natural.",
    keywords: ["especie foránea", "organismo no nativo", "especie introducida"],
    articleIds: [3, 45]
  },
  "especie exótica invasora": {
    explanation: "Especie exótica cuyo establecimiento amenaza ecosistemas, hábitats o especies nativas.",
    keywords: ["especie invasora", "plaga biológica", "organismo dañino"],
    articleIds: [3, 45]
  },
  "ecosistema amenazado": {
    explanation: "Ecosistema que presenta riesgos de disminución en extensión o cambios en su composición.",
    keywords: ["ecosistema vulnerable", "riesgo ecológico", "degradación ecosistémica"],
    articleIds: [3, 30, 31]
  },
  "área degradada": {
    explanation: "Ecosistema cuyos elementos han sido alterados significativamente con pérdida de biodiversidad.",
    keywords: ["ecosistema dañado", "deterioro ambiental", "pérdida de biodiversidad"],
    articleIds: [3, 32, 33]
  },
  "humedal": {
    explanation: "Extensiones de marismas, pantanos y turberas, o superficies cubiertas de aguas permanentes o temporales.",
    keywords: ["ecosistema acuático", "zona húmeda", "hábitat de aves"],
    articleIds: [3, 39, 40, 41]
  },
  
  // 6. SERVICIO DE BIODIVERSIDAD
  "servicio de biodiversidad y áreas protegidas": {
    explanation: "Organismo encargado de conservar la biodiversidad mediante gestión de áreas protegidas.",
    keywords: ["SBAP", "institución ambiental", "autoridad de conservación"],
    articleIds: [4, 5, 6]
  },
  "director nacional": {
    explanation: "Autoridad máxima del Servicio de Biodiversidad y Áreas Protegidas.",
    keywords: ["jefe del servicio", "autoridad ambiental", "dirección superior"],
    articleIds: [6, 7]
  },
  "direcciones regionales": {
    explanation: "Desconcentración territorial del Servicio a nivel regional.",
    keywords: ["descentralización", "representación regional", "gestión territorial"],
    articleIds: [8]
  },
  "comité científico asesor": {
    explanation: "Organismo asesor en materias científicas y técnicas para el Servicio.",
    keywords: ["asesoría científica", "expertos técnicos", "evaluación científica"],
    articleIds: [9, 30, 66]
  },
  "guardaparques": {
    explanation: "Autoridad competente para manejo y fiscalización de áreas protegidas.",
    keywords: ["vigilantes ambientales", "custodios de parques", "protección de áreas"],
    articleIds: [75, 76, 77, 78]
  },
  
  // 7. PLANIFICACIÓN Y GESTIÓN
  "planificación ecológica": {
    explanation: "Instrumento para definir prioridades de conservación de biodiversidad a nivel nacional.",
    keywords: ["ordenamiento ecológico", "planificación territorial", "prioridades de conservación"],
    articleIds: [28]
  },
  "sistema de información de la biodiversidad": {
    explanation: "Sistema que almacena y maneja datos sobre ecosistemas, especies y áreas protegidas.",
    keywords: ["base de datos ambiental", "información ecológica", "sistema de monitoreo"],
    articleIds: [24, 26]
  },
  "monitoreo de la biodiversidad": {
    explanation: "Programas sistemáticos para generar información sobre estado de la biodiversidad.",
    keywords: ["seguimiento ecológico", "evaluación ambiental", "indicadores de biodiversidad"],
    articleIds: [25, 27]
  },
  "inventario de humedales": {
    explanation: "Registro nacional de humedales con información georreferenciada.",
    keywords: ["catastro de humedales", "registro de zonas húmedas", "cartografía de humedales"],
    articleIds: [39]
  },
  "clasificación de ecosistemas": {
    explanation: "Evaluación del estado de conservación de los ecosistemas del país.",
    keywords: ["categorización ecosistémica", "evaluación de estado", "conservación de ecosistemas"],
    articleIds: [30]
  },
  
  // 8. ESPECÍFICOS DE ESPECIES
  "planes de recuperación de especies": {
    explanation: "Planes para mejorar el estado de conservación de especies clasificadas como amenazadas.",
    keywords: ["recuperación de fauna", "conservación de especies", "manejo de especies amenazadas"],
    articleIds: [42, 43]
  },
  "monumento natural para especies": {
    explanation: "Declaración de protección para especies de interés estético, histórico o científico.",
    keywords: ["protección de especies", "declaración de monumento", "conservación específica"],
    articleIds: [44]
  },
  "prevención de especies exóticas invasoras": {
    explanation: "Medidas para prevenir, controlar y erradicar especies exóticas invasoras.",
    keywords: ["control de plagas", "erradicación de invasoras", "bioseguridad"],
    articleIds: [45]
  },
  "polinizadores nativos": {
    explanation: "Especies que contribuyen a la polinización de plantas nativas y su protección.",
    keywords: ["polinización", "agentes polinizadores", "servicios de polinización"],
    articleIds: [5]
  },
  "diversidad genética": {
    explanation: "Variación en la composición genética de individuos dentro de una población o entre especies.",
    keywords: ["variabilidad genética", "recursos genéticos", "patrimonio genético"],
    articleIds: [3, 10]
  },
  
  // 9. HUMEDALES Y ECOSISTEMAS ACUÁTICOS
  "criterios para uso sustentable de humedales": {
    explanation: "Indicaciones para garantizar uso sostenible de humedales sin alterar sus funciones ecológicas.",
    keywords: ["manejo de humedales", "uso responsable", "protección de zonas húmedas"],
    articleIds: [40]
  },
  "permiso para alteración de humedales": {
    explanation: "Autorización requerida para realizar alteraciones físicas en humedales inventariados.",
    keywords: ["permiso ambiental", "intervención en humedales", "autorización de alteración"],
    articleIds: [41]
  },
  "sitios ramsar": {
    explanation: "Humedales de importancia internacional declarados bajo la Convención de Humedales.",
    keywords: ["humedal internacional", "convención ramsar", "conservación global"],
    articleIds: [37]
  },
  "ecosistemas acuáticos": {
    explanation: "Sistemas acuáticos continentales, marinos o insulares y su biodiversidad asociada.",
    keywords: ["hábitats acuáticos", "ecosistemas de agua dulce", "ecosistemas marinos"],
    articleIds: [3, 24, 25]
  },
  "ecosistemas marinos": {
    explanation: "Ecosistemas ubicados en ambientes marinos y su conservación.",
    keywords: ["hábitats marinos", "conservación marina", "biodiversidad oceánica"],
    articleIds: [34, 37, 56]
  },
  
  // 10. PARTICIPACIÓN CIUDADANA
  "participación en áreas protegidas": {
    explanation: "Mecanismos para involucrar a comunidades en gestión de áreas protegidas.",
    keywords: ["gestión participativa", "involucramiento comunitario", "conservación local"],
    articleIds: [54, 68]
  },
  "paisajes de conservación": {
    explanation: "Áreas con valores naturales y culturales gestionadas mediante acuerdo comunitario.",
    keywords: ["paisaje cultural", "acuerdo local", "gestión compartida"],
    articleIds: [35]
  },
  "reservas de la biósfera": {
    explanation: "Áreas reconocidas por UNESCO que promueven desarrollo sostenible y conservación.",
    keywords: ["mab unesco", "desarrollo sostenible", "conservación integrada"],
    articleIds: [28, 36]
  },
  "turismo ambientalmente responsable": {
    explanation: "Turismo de bajo impacto que respeta objetivos de conservación de áreas protegidas.",
    keywords: ["ecoturismo", "turismo sostenible", "visitas responsables"],
    articleIds: [3, 80]
  },
  "educación ambiental": {
    explanation: "Actividades para concienciar sobre valor de la biodiversidad y su conservación.",
    keywords: ["concienciación ambiental", "formación ecológica", "divulgación científica"],
    articleIds: [5, 50]
  },
  
  // 11. INSTRUMENTOS ECONÓMICOS
  "fondo nacional de la biodiversidad": {
    explanation: "Fondo para financiar proyectos de conservación fuera de áreas protegidas.",
    keywords: ["financiamiento ambiental", "fondos de conservación", "inversión ecológica"],
    articleIds: [46, 47, 48, 49]
  },
  "sistema de certificación": {
    explanation: "Sistema para certificar actividades que contribuyan a conservación de biodiversidad.",
    keywords: ["certificación ambiental", "sello ecológico", "reconocimiento de prácticas"],
    articleIds: [51]
  },
  "contrato de retribución por servicios ecosistémicos": {
    explanation: "Acuerdo para pagar por servicios ambientales proporcionados por ecosistemas.",
    keywords: ["pago por servicios ambientales", "compensación ecológica", "incentivos económicos"],
    articleIds: [52]
  },
  "incentivos para áreas protegidas privadas": {
    explanation: "Beneficios económicos para propietarios que establecen áreas protegidas privadas.",
    keywords: ["exenciones tributarias", "incentivos fiscales", "apoyo a conservación privada"],
    articleIds: [105]
  },
  "tarifas en áreas protegidas": {
    explanation: "Cobros por ingreso a áreas protegidas y servicios en ellas.",
    keywords: ["derechos de ingreso", "financiamiento de parques", "tarifas de conservación"],
    articleIds: [70]
  },
  
  // 12. CONCESIONES Y PERMISOS
  "concesiones en áreas protegidas": {
    explanation: "Autorizaciones para desarrollar actividades de investigación, educación o turismo en áreas protegidas.",
    keywords: ["concesiones ambientales", "derechos de uso", "explotación de servicios"],
    articleIds: [79, 80, 81, 82]
  },
  "comité técnico de concesiones": {
    explanation: "Órgano consultivo para proceso de otorgamiento de concesiones en áreas protegidas.",
    keywords: ["evaluación de concesiones", "comité asesor", "análisis técnico"],
    articleIds: [81]
  },
  "transferencia de concesiones": {
    explanation: "Proceso para transferir derechos de concesión a terceros.",
    keywords: ["cesión de derechos", "traspaso de concesiones", "cambio de titular"],
    articleIds: [88]
  },
  "extinción de concesiones": {
    explanation: "Causales y procedimientos para finalizar una concesión en área protegida.",
    keywords: ["término de concesión", "caducidad", "fin de derechos"],
    articleIds: [89]
  },
  "permisos temporales": {
    explanation: "Autorizaciones para actividades transitorias en áreas protegidas.",
    keywords: ["autorizaciones eventuales", "permisos de corta duración", "actividades temporales"],
    articleIds: [94]
  },
  
  // 13. FISCALIZACIÓN Y SANCIONES
  "fiscalización de áreas protegidas": {
    explanation: "Supervisión del cumplimiento de normas en áreas protegidas.",
    keywords: ["control ambiental", "vigilancia ecológica", "inspección de áreas"],
    articleIds: [109, 110, 111]
  },
  "infracciones en áreas protegidas": {
    explanation: "Violaciones a normas que regulan actividades en áreas protegidas.",
    keywords: ["incumplimientos ambientales", "violaciones ecológicas", "infracciones de conservación"],
    articleIds: [115]
  },
  "infracciones fuera de áreas protegidas": {
    explanation: "Violaciones a normas de biodiversidad fuera de áreas protegidas.",
    keywords: ["incumplimientos externos", "violaciones territoriales", "daños a biodiversidad"],
    articleIds: [116]
  },
  "sanciones administrativas": {
    explanation: "Multas y otras penalizaciones por infracciones a la ley de biodiversidad.",
    keywords: ["multas ambientales", "sanciones ecológicas", "penalidades administrativas"],
    articleIds: [118, 120]
  },
  "medidas provisionales": {
    explanation: "Medidas cautelares para prevenir daños durante investigación de infracciones.",
    keywords: ["medidas cautelares", "prevención de daños", "protección temporal"],
    articleIds: [125]
  },
  
  // 14. PROCEDIMIENTOS ADMINISTRATIVOS
  "creación de áreas protegidas": {
    explanation: "Procedimiento para establecer nuevas áreas protegidas del Estado.",
    keywords: ["declaratoria de área", "establecimiento de protección", "creación de parques"],
    articleIds: [64, 65]
  },
  "modificación de áreas protegidas": {
    explanation: "Procedimiento para cambiar límites o categorías de áreas protegidas existentes.",
    keywords: ["ajuste de límites", "cambio de categoría", "modificación de protección"],
    articleIds: [66]
  },
  "desafectación de áreas protegidas": {
    explanation: "Procedimiento para eliminar el estatus de protección a un área.",
    keywords: ["retiro de protección", "desclasificación", "pérdida de estatus"],
    articleIds: [66, 100]
  },
  "áreas protegidas privadas": {
    explanation: "Procedimiento para reconocimiento de áreas protegidas en propiedad privada.",
    keywords: ["conservación privada", "áreas privadas protegidas", "reconocimiento oficial"],
    articleIds: [97, 98, 99]
  },
  "planes de manejo de áreas protegidas": {
    explanation: "Elaboración y aprobación de planes de manejo para áreas protegidas.",
    keywords: ["elaboración de planes", "aprobación de manejo", "gestión de áreas"],
    articleIds: [71, 72, 73, 74]
  },
  
  // 15. TEMAS TRANSVERSALES
  "cambio climático y biodiversidad": {
    explanation: "Relaciones entre cambio climático y conservación de biodiversidad.",
    keywords: ["impactos climáticos", "adaptación ecológica", "vulnerabilidad ambiental"],
    articleIds: [25, 54]
  },
  "conocimientos tradicionales": {
    explanation: "Saberes de comunidades indígenas relevantes para conservación de biodiversidad.",
    keywords: ["saberes ancestrales", "conocimiento indígena", "tradiciones ecológicas"],
    articleIds: [2, 62]
  },
  "investigación científica": {
    explanation: "Estudios e investigaciones para mejorar conocimiento sobre biodiversidad.",
    keywords: ["estudios ecológicos", "investigación ambiental", "generación de conocimiento"],
    articleIds: [5, 25, 80]
  },
  "restauración ecológica": {
    explanation: "Procesos para recuperar ecosistemas degradados a condiciones originales.",
    keywords: ["recuperación de ecosistemas", "rehabilitación ambiental", "restauración de hábitats"],
    articleIds: [24, 33, 38]
  },
  "corredores biológicos": {
    explanation: "Conexiones entre hábitats para facilitar movimiento de especies.",
    keywords: ["conectividad ecológica", "pasos de fauna", "red ecológica"],
    articleIds: [3, 54]
  },
  
  // 16. DEFINICIONES TÉCNICAS
  "hábitat": {
    explanation: "Lugar o tipo de ambiente donde vive naturalmente un organismo o población.",
    keywords: ["ambiente natural", "lugar de vida", "territorio ecológico"],
    articleIds: [3]
  },
  "ecosistema": {
    explanation: "Complejo dinámico de comunidades vegetales, animales y microorganismos con su medio no viviente.",
    keywords: ["sistema ecológico", "comunidad biológica", "interacciones ecosistémicas"],
    articleIds: [3]
  },
  "recurso genético": {
    explanation: "Material genético de valor real o potencial.",
    keywords: ["material genético", "recursos biogenéticos", "patrimonio genético"],
    articleIds: [3, 10]
  },
  "paisaje de conservación": {
    explanation: "Área con valores naturales y culturales gestionada mediante acuerdo local.",
    keywords: ["paisaje cultural", "gestión local", "acuerdo comunitario"],
    articleIds: [35]
  },
  "turismo ambientalmente responsable": {
    explanation: "Turismo de bajo impacto que respeta objetivos de conservación.",
    keywords: ["ecoturismo", "turismo sostenible", "visitas responsables"],
    articleIds: [3, 80]
  },
  
  // 17. TEMAS INDÍGENAS
  "áreas de conservación de pueblos indígenas": {
    explanation: "Áreas en tierras indígenas con valores culturales asociados a conservación.",
    keywords: ["territorio indígena", "conservación cultural", "manejo indígena"],
    articleIds: [56, 62]
  },
  "consulta indígena": {
    explanation: "Proceso de consulta a pueblos indígenas para medidas que les afecten.",
    keywords: ["participación indígena", "consulta previa", "diálogo intercultural"],
    articleIds: [65, 80]
  },
  "conocimientos tradicionales": {
    explanation: "Saberes de comunidades indígenas relevantes para conservación.",
    keywords: ["saberes ancestrales", "conocimiento local", "tradiciones ecológicas"],
    articleIds: [2, 62]
  },
  "usos ancestrales": {
    explanation: "Prácticas tradicionales de pueblos indígenas en áreas protegidas.",
    keywords: ["usos tradicionales", "prácticas culturales", "costumbres ancestrales"],
    articleIds: [62, 108]
  },
  "comités de gestión en reservas de biósfera": {
    explanation: "Comités integrados por comunidades locales para gestión de reservas de biósfera.",
    keywords: ["gestión participativa", "comités locales", "manejo compartido"],
    articleIds: [36]
  },
  
  // 18. TEMAS MARINOS Y COSTEROS
  "iniciativas privadas de conservación marina": {
    explanation: "Apoyo a proyectos de conservación en ecosistemas marinos costeros.",
    keywords: ["conservación marina", "iniciativas oceánicas", "protección costera"],
    articleIds: [34]
  },
  "áreas marinas protegidas": {
    explanation: "Áreas protegidas ubicadas en ambientes marinos.",
    keywords: ["reservas marinas", "parques marinos", "conservación oceánica"],
    articleIds: [56, 58, 60]
  },
  "ecosistemas marinos": {
    explanation: "Ecosistemas ubicados en ambientes marinos y su conservación.",
    keywords: ["hábitats marinos", "biodiversidad oceánica", "conservación marina"],
    articleIds: [3, 24, 25]
  },
  "sitios ramsar": {
    explanation: "Humedales de importancia internacional declarados bajo Convención de Humedales.",
    keywords: ["humedal internacional", "convención ramsar", "conservación global"],
    articleIds: [37]
  },
  "isla oceánica": {
    explanation: "Ecosistemas insulares marinos y su conservación.",
    keywords: ["islas", "ecosistemas insulares", "conservación insular"],
    articleIds: [34]
  },
  
  // 19. TEMAS DE RESTAURACIÓN
  "áreas degradadas": {
    explanation: "Ecosistemas cuyos elementos han sido alterados significativamente con pérdida de biodiversidad.",
    keywords: ["ecosistema dañado", "deterioro ambiental", "pérdida de biodiversidad"],
    articleIds: [3, 32, 33]
  },
  "planes de restauración ecológica": {
    explanation: "Planes para recuperar áreas degradadas a condiciones similares a las originales.",
    keywords: ["recuperación ecológica", "rehabilitación ambiental", "restauración de ecosistemas"],
    articleIds: [24, 33, 38]
  },
  "restauración activa": {
    explanation: "Intervenciones directas para acelerar recuperación de ecosistemas degradados.",
    keywords: ["restauración asistida", "intervención ecológica", "recuperación activa"],
    articleIds: [33]
  },
  "restauración pasiva": {
    explanation: "Procesos naturales de recuperación de ecosistemas sin intervención directa.",
    keywords: ["recuperación natural", "regeneración espontánea", "restauración autógena"],
    articleIds: [33]
  },
  "monitoreo de restauración": {
    explanation: "Seguimiento de avances en proyectos de restauración ecológica.",
    keywords: ["evaluación de restauración", "seguimiento ecológico", "indicadores de recuperación"],
    articleIds: [33]
  },
  
  // 20. TEMAS DE ESPECIES EXÓTICAS
  "especies exóticas invasoras": {
    explanation: "Especies exóticas cuyo establecimiento amenaza ecosistemas, hábitats o especies nativas.",
    keywords: ["especie invasora", "plaga biológica", "organismo dañino"],
    articleIds: [3, 45]
  },
  "planes de prevención de invasoras": {
    explanation: "Planes para prevenir, controlar y erradicar especies exóticas invasoras.",
    keywords: ["control de plagas", "erradicación de invasoras", "bioseguridad"],
    articleIds: [45]
  },
  "barreras de bioseguridad": {
    explanation: "Medidas para prevenir ingreso de especies exóticas a territorios vulnerables.",
    keywords: ["control fronterizo", "prevención de invasiones", "seguridad biológica"],
    articleIds: [45]
  },
  "análisis de riesgo de invasoras": {
    explanation: "Evaluación de riesgo que representan especies exóticas para biodiversidad nativa.",
    keywords: ["evaluación de riesgo", "análisis de invasión", "potencial invasor"],
    articleIds: [45]
  },
  "control de especies invasoras": {
    explanation: "Medidas para controlar poblaciones de especies exóticas invasoras.",
    keywords: ["erradicación de plagas", "manejo de invasoras", "control biológico"],
    articleIds: [45]
  },
  
  // 21. TEMAS DE GESTIÓN
  "gestión adaptativa": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["manejo adaptativo", "gestión flexible", "aprendizaje organizacional"],
    articleIds: [20, 71]
  },
  "plan estratégico del SNAP": {
    explanation: "Plan de largo plazo para gestión del Sistema Nacional de Áreas Protegidas.",
    keywords: ["planificación estratégica", "gestión de SNAP", "directrices de conservación"],
    articleIds: [55]
  },
  "programa de uso público": {
    explanation: "Planificación de actividades de turismo, educación e investigación en áreas protegidas.",
    keywords: ["gestión de visitantes", "uso público", "actividades recreativas"],
    articleIds: [67, 74]
  },
  "comités público-privados": {
    explanation: "Comités consultivos regionales para apoyo a gestión de áreas protegidas.",
    keywords: ["mesas de trabajo", "comités asesores", "participación público-privada"],
    articleIds: [55]
  },
  "convenios de gestión": {
    explanation: "Acuerdos entre Servicio y organizaciones para gestión de áreas protegidas.",
    keywords: ["acuerdos de cooperación", "gestión compartida", "alianzas estratégicas"],
    articleIds: [68]
  },
  
  // 22. TEMAS DE PERSONAL
  "régimen laboral": {
    explanation: "Normativas que rigen relaciones laborales en el Servicio de Biodiversidad.",
    keywords: ["derechos laborales", "contratación", "relaciones de trabajo"],
    articleIds: [11, 12, 13, 14, 15]
  },
  "código de probidad": {
    explanation: "Normas de ética y conducta para funcionarios del Servicio.",
    keywords: ["ética pública", "conducta funcionaria", "probidad administrativa"],
    articleIds: [13]
  },
  "sistema de evaluación de desempeño": {
    explanation: "Sistema para evaluar rendimiento de funcionarios del Servicio.",
    keywords: ["evaluación de personal", "rendimiento laboral", "medición de eficiencia"],
    articleIds: [15]
  },
  "capacitación de guardaparques": {
    explanation: "Programas de formación para guardaparques del Servicio.",
    keywords: ["formación técnica", "capacitación ambiental", "entrenamiento de personal"],
    articleIds: [78]
  },
  "servicio de bienestar": {
    explanation: "Sistema de beneficios sociales para funcionarios del Servicio.",
    keywords: ["beneficios sociales", "bienestar laboral", "servicios sociales"],
    articleIds: [18]
  },
  
  // 23. TEMAS DE PATRIMONIO
  "patrimonio del servicio": {
    explanation: "Bienes y recursos que conforman el patrimonio del Servicio de Biodiversidad.",
    keywords: ["bienes institucionales", "recursos del servicio", "patrimonio estatal"],
    articleIds: [10]
  },
  "transferencia de bienes": {
    explanation: "Traspaso de bienes desde otras instituciones al Servicio de Biodiversidad.",
    keywords: ["traspaso patrimonial", "transferencia de activos", "reasignación de bienes"],
    articleIds: [155]
  },
  "mejoras en concesiones": {
    explanation: "Construcciones realizadas por concesionarios en áreas protegidas.",
    keywords: ["infraestructura concesionada", "mejoras en parques", "construcciones en áreas"],
    articleIds: [90]
  },
  "bienes nacionales protegidos": {
    explanation: "Bienes del Estado con categoría de protección ambiental.",
    keywords: ["bienes estatales", "patrimonio protegido", "bienes nacionales"],
    articleIds: [158]
  },
  "patrimonio natural": {
    explanation: "Conjunto de elementos naturales de valor ecológico, cultural y paisajístico.",
    keywords: ["legado natural", "patrimonio ambiental", "recursos naturales"],
    articleIds: [1, 53]
  },
  
  // 24. TEMAS DE EVALUACIÓN AMBIENTAL
  "evaluación de impacto ambiental": {
    explanation: "Procedimiento para evaluar efectos de proyectos sobre biodiversidad.",
    keywords: ["EIA", "estudio ambiental", "evaluación de proyectos"],
    articleIds: [5, 38]
  },
  "compensaciones de biodiversidad": {
    explanation: "Medidas para compensar impactos residuales sobre biodiversidad.",
    keywords: ["compensación ecológica", "medidas compensatorias", "restauración por impactos"],
    articleIds: [38]
  },
  "línea base de biodiversidad": {
    explanation: "Estudio inicial del estado de biodiversidad en un área antes de un proyecto.",
    keywords: ["estado inicial", "diagnóstico ambiental", "línea de base ecológica"],
    articleIds: [38]
  },
  "impactos residuales": {
    explanation: "Efectos ambientales que persisten después de aplicar medidas de mitigación.",
    keywords: ["impactos remanentes", "efectos residuales", "consecuencias no mitigadas"],
    articleIds: [38]
  },
  "equivalencia ecológica": {
    explanation: "Criterio para asegurar que compensaciones sean equivalentes a impactos causados.",
    keywords: ["equivalencia ambiental", "compensación justa", "medidas equivalentes"],
    articleIds: [38]
  },
  
  // 25. TEMAS DE ORDENAMIENTO TERRITORIAL
  "instrumentos de ordenamiento territorial": {
    explanation: "Herramientas de planificación del territorio que incorporan biodiversidad.",
    keywords: ["planificación territorial", "ordenamiento ambiental", "gestión del territorio"],
    articleIds: [28, 40]
  },
  "planificación ecológica": {
    explanation: "Instrumento para definir prioridades de conservación a nivel nacional.",
    keywords: ["ordenamiento ecológico", "planificación territorial", "prioridades de conservación"],
    articleIds: [28]
  },
  "usos del suelo": {
    explanation: "Clasificación de territorios según actividades permitidas y restringidas.",
    keywords: ["clasificación de suelos", "zonificación", "usos permitidos"],
    articleIds: [28]
  },
  "zonificación de áreas protegidas": {
    explanation: "División de áreas protegidas en zonas con diferentes niveles de protección.",
    keywords: ["zonificación ecológica", "áreas de manejo", "categorización de zonas"],
    articleIds: [72]
  },
  "conflictos de uso": {
    explanation: "Disputas entre diferentes usos del territorio en áreas de conservación.",
    keywords: ["conflictos territoriales", "disputas de uso", "incompatibilidad de usos"],
    articleIds: [28]
  },
  
  // 26. TEMAS DE MONITOREO
  "redes de monitoreo": {
    explanation: "Sistemas coordinados para recolectar información sobre estado de biodiversidad.",
    keywords: ["sistema de monitoreo", "red de información", "seguimiento ambiental"],
    articleIds: [25]
  },
  "protocolos de monitoreo": {
    explanation: "Metodologías estandarizadas para recolección de datos en monitoreo de biodiversidad.",
    keywords: ["metodologías de muestreo", "protocolos estandarizados", "técnicas de monitoreo"],
    articleIds: [25]
  },
  "indicadores de biodiversidad": {
    explanation: "Parámetros para medir estado y tendencias de biodiversidad.",
    keywords: ["indicadores ecológicos", "medición de biodiversidad", "parámetros ambientales"],
    articleIds: [25, 27]
  },
  "informes de estado de biodiversidad": {
    explanation: "Documentos periódicos que reportan situación de biodiversidad en el país.",
    keywords: ["reporte ambiental", "evaluación nacional", "diagnóstico de biodiversidad"],
    articleIds: [27]
  },
  "sistema de información geográfica": {
    explanation: "Herramientas para manejar información georreferenciada sobre biodiversidad.",
    keywords: ["SIG", "información espacial", "cartografía ambiental"],
    articleIds: [24]
  },
  
  // 27. TEMAS DE ESPECIES AMENAZADAS
  "especies amenazadas": {
    explanation: "Especies clasificadas en categorías de riesgo según su estado de conservación.",
    keywords: ["especies en peligro", "fauna amenazada", "flora vulnerable"],
    articleIds: [37, 42]
  },
  "categorías de conservación": {
    explanation: "Clasificación de especies según su riesgo de extinción.",
    keywords: ["clasificación de especies", "categorías UICN", "riesgo de extinción"],
    articleIds: [37, 42]
  },
  "planes de recuperación de especies": {
    explanation: "Planes para mejorar estado de conservación de especies amenazadas.",
    keywords: ["recuperación de fauna", "conservación de especies", "manejo de especies amenazadas"],
    articleIds: [42, 43]
  },
  "hábitat crítico": {
    explanation: "Áreas esenciales para supervivencia y recuperación de especies amenazadas.",
    keywords: ["hábitat esencial", "áreas críticas", "zonas de supervivencia"],
    articleIds: [42, 43]
  },
  "amenazas a especies": {
    explanation: "Factores que ponen en riesgo la supervivencia de especies.",
    keywords: ["riesgos para especies", "amenazas biológicas", "factores de extinción"],
    articleIds: [42, 43]
  },
  
  // 28. TEMAS DE CONECTIVIDAD
  "corredores biológicos": {
    explanation: "Espacios que conectan hábitats para facilitar movimiento de especies.",
    keywords: ["conectividad ecológica", "pasos de fauna", "red ecológica"],
    articleIds: [3, 54]
  },
  "fragmentación de hábitats": {
    explanation: "División de hábitats continuos en fragmentos aislados.",
    keywords: ["fragmentación ecológica", "aislamiento de hábitats", "pérdida de conectividad"],
    articleIds: [3]
  },
  "aislamiento de poblaciones": {
    explanation: "Separación de poblaciones de especies que dificulta intercambio genético.",
    keywords: ["aislamiento genético", "poblaciones aisladas", "barreras geográficas"],
    articleIds: [3]
  },
  "flujo genético": {
    explanation: "Intercambio de genes entre poblaciones de una especie.",
    keywords: ["intercambio genético", "flujo de genes", "conectividad genética"],
    articleIds: [3]
  },
  "red ecológica": {
    explanation: "Sistema interconectado de hábitats y corredores biológicos.",
    keywords: ["red de hábitats", "sistema ecológico", "conectividad territorial"],
    articleIds: [54]
  },
  
  // 29. TEMAS DE PARTICIPACIÓN
  "participación ciudadana": {
    explanation: "Involucramiento de ciudadanos en toma de decisiones sobre biodiversidad.",
    keywords: ["inclusión social", "participación pública", "democracia ambiental"],
    articleIds: [2, 54]
  },
  "consulta pública": {
    explanation: "Procesos para recabar opinión ciudadana sobre proyectos y medidas.",
    keywords: ["participación social", "opinión pública", "diálogo ciudadano"],
    articleIds: [65, 74]
  },
  "comités consultivos": {
    explanation: "Órganos de asesoría con participación de diversos actores sociales.",
    keywords: ["mesas de diálogo", "órganos asesores", "participación multiactor"],
    articleIds: [9, 55, 81]
  },
  "educación y sensibilización": {
    explanation: "Actividades para concienciar sobre importancia de conservar biodiversidad.",
    keywords: ["concienciación ambiental", "divulgación ecológica", "formación ambiental"],
    articleIds: [5, 50]
  },
  "vinculación comunitaria": {
    explanation: "Procesos para integrar comunidades locales en gestión de áreas protegidas.",
    keywords: ["integración local", "participación comunitaria", "gestión compartida"],
    articleIds: [55, 68]
  },
  
  // 30. TEMAS DE FINANCIAMIENTO
  "financiamiento de la conservación": {
    explanation: "Mecanismos económicos para sostener iniciativas de conservación.",
    keywords: ["economía de la conservación", "financiamiento ambiental", "inversión ecológica"],
    articleIds: [46, 49]
  },
  "fondos de competitividad": {
    explanation: "Recursos para financiar proyectos de conservación mediante concursos.",
    keywords: ["fondos concursables", "financiamiento por proyectos", "recursos para conservación"],
    articleIds: [46]
  },
  "cooperación internacional": {
    explanation: "Apoyo de organismos internacionales para proyectos de conservación.",
    keywords: ["ayuda internacional", "cooperación ambiental", "apoyo global"],
    articleIds: [10, 49, 55]
  },
  "patrocinios y donaciones": {
    explanation: "Aportes voluntarios de privados para conservación de biodiversidad.",
    keywords: ["filantropía ambiental", "donaciones ecológicas", "patrocinios verdes"],
    articleIds: [10, 49]
  },
  "pago por servicios ambientales": {
    explanation: "Esquemas donde se paga a quienes conservan servicios ecosistémicos.",
    keywords: ["compensación por servicios", "incentivos ecológicos", "valoración de servicios"],
    articleIds: [52]
  },
  
  // 31. TEMAS DE TURISMO
  "turismo en áreas protegidas": {
    explanation: "Actividades turísticas desarrolladas en áreas protegidas.",
    keywords: ["visitas a parques", "turismo ecológico", "recreación en naturaleza"],
    articleIds: [58, 80]
  },
  "turismo de baja escala": {
    explanation: "Turismo con mínimo impacto en áreas naturales protegidas.",
    keywords: ["turismo mínimo impacto", "visitas controladas", "turismo no masivo"],
    articleIds: [58]
  },
  "concesiones turísticas": {
    explanation: "Autorizaciones para desarrollar servicios turísticos en áreas protegidas.",
    keywords: ["servicios turísticos", "operadores en parques", "concesiones de turismo"],
    articleIds: [79, 80]
  },
  "capacidad de carga": {
    explanation: "Número máximo de visitantes que un área puede soportar sin deteriorarse.",
    keywords: ["límite de visitantes", "capacidad de acogida", "tolerancia de uso"],
    articleIds: [72]
  },
  "interpretación ambiental": {
    explanation: "Actividades para educar a visitantes sobre valores naturales y culturales.",
    keywords: ["educación no formal", "divulgación en parques", "guiado temático"],
    articleIds: [67, 76]
  },
  
  // 32. TEMAS DE INVESTIGACIÓN
  "investigación científica": {
    explanation: "Estudios para generar conocimiento sobre biodiversidad y su conservación.",
    keywords: ["estudios ecológicos", "investigación ambiental", "generación de conocimiento"],
    articleIds: [5, 25, 80]
  },
  "monitoreo científico": {
    explanation: "Seguimiento sistemático de variables ecológicas para evaluar estado de biodiversidad.",
    keywords: ["seguimiento ecológico", "monitoreo ambiental", "evaluación científica"],
    articleIds: [25]
  },
  "inventarios biológicos": {
    explanation: "Registros sistemáticos de especies y ecosistemas en un territorio.",
    keywords: ["catastro de especies", "registro biológico", "inventario ecológico"],
    articleIds: [24]
  },
  "investigación participativa": {
    explanation: "Estudios que involucran a comunidades locales en recolección de datos.",
    keywords: ["ciencia ciudadana", "investigación colaborativa", "participación en investigación"],
    articleIds: [25]
  },
  "aplicación del conocimiento": {
    explanation: "Uso de investigación científica para mejorar gestión de biodiversidad.",
    keywords: ["transferencia de conocimiento", "aplicación práctica", "investigación aplicada"],
    articleIds: [5, 80]
  },
  
  // 33. TEMAS DE LEGISLACIÓN
  "marco legal de biodiversidad": {
    explanation: "Conjunto de normas que regulan conservación y uso de biodiversidad.",
    keywords: ["legislación ambiental", "marco normativo", "regulación de biodiversidad"],
    articleIds: [1, 143, 144]
  },
  "modificaciones legales": {
    explanation: "Cambios en legislación para implementar nueva ley de biodiversidad.",
    keywords: ["reformas legales", "ajustes normativos", "modificaciones legales"],
    articleIds: [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154]
  },
  "derogaciones legales": {
    explanation: "Leyes que son dejadas sin efecto por nueva normativa de biodiversidad.",
    keywords: ["derogación de leyes", "normas abrogadas", "legislación derogada"],
    articleIds: [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154]
  },
  "armonización legal": {
    explanation: "Proceso para coordinar nueva ley con legislación ambiental existente.",
    keywords: ["coordinación normativa", "armonización legal", "integración de leyes"],
    articleIds: [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154]
  },
  "jerarquía legal": {
    explanation: "Prevalencia de nueva ley de biodiversidad sobre otras normas.",
    keywords: ["primacía legal", "jerarquía normativa", "supremacía de ley"],
    articleIds: [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154]
  },
  
  // 34. TEMAS DE IMPLEMENTACIÓN
  "entrada en vigencia": {
    explanation: "Fecha y condiciones a partir de las cuales comienza a regir la ley.",
    keywords: ["vigencia de ley", "aplicación normativa", "inicio de efectos"],
    articleIds: [155, 156, 157]
  },
  "reglamentos de la ley": {
    explanation: "Normativas secundarias que desarrollan aspectos específicos de la ley.",
    keywords: ["reglamentación", "normas complementarias", "desarrollo reglamentario"],
    articleIds: [3, 30, 31, 32, 33, 42, 55, 65, 74, 97, 140, 141, 166]
  },
  "plazos de implementación": {
    explanation: "Períodos establecidos para cumplir con disposiciones de la ley.",
    keywords: ["cronograma de implementación", "plazos legales", "tiempos de ejecución"],
    articleIds: [155, 156, 157, 158, 159, 163, 166]
  },
  "traspaso de funciones": {
    explanation: "Transferencia de responsabilidades desde otras instituciones al nuevo Servicio.",
    keywords: ["transferencia de competencias", "reasignación de funciones", "traspaso institucional"],
    articleIds: [5, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155]
  },
  "traspaso de personal": {
    explanation: "Movimiento de funcionarios desde otras instituciones al nuevo Servicio.",
    keywords: ["traslado de empleados", "movimiento de personal", "reubicación laboral"],
    articleIds: [155, 165]
  },
  
  // 35. TEMAS DE EVALUACIÓN
  "evaluación de impacto": {
    explanation: "Análisis de efectos de proyectos y actividades sobre biodiversidad.",
    keywords: ["evaluación ambiental", "análisis de impacto", "estudio de efectos"],
    articleIds: [5, 38]
  },
  "evaluación de efectividad": {
    explanation: "Medición de resultados de instrumentos de conservación implementados.",
    keywords: ["eficiencia de medidas", "evaluación de resultados", "análisis de efectividad"],
    articleIds: [55]
  },
  "evaluación de desempeño": {
    explanation: "Medición de rendimiento de funcionarios y áreas protegidas.",
    keywords: ["rendimiento institucional", "evaluación de gestión", "medición de eficiencia"],
    articleIds: [15, 55]
  },
  "indicadores de gestión": {
    explanation: "Parámetros para medir avance en objetivos de conservación.",
    keywords: ["métricas de gestión", "indicadores de desempeño", "parámetros de evaluación"],
    articleIds: [55]
  },
  "auditorías ambientales": {
    explanation: "Revisiones independientes de gestión ambiental del Servicio.",
    keywords: ["evaluación externa", "auditoría ecológica", "revisión de gestión"],
    articleIds: [55]
  },
  
  // 36. TEMAS DE INNOVACIÓN
  "tecnologías para conservación": {
    explanation: "Uso de tecnologías modernas en gestión de biodiversidad.",
    keywords: ["tecnología ambiental", "innovación ecológica", "herramientas digitales"],
    articleIds: [24, 25]
  },
  "sistemas de información": {
    explanation: "Plataformas digitales para gestionar datos sobre biodiversidad.",
    keywords: ["plataformas digitales", "gestión de datos", "sistemas informáticos"],
    articleIds: [24]
  },
  "modelado ecológico": {
    explanation: "Uso de modelos matemáticos para predecir cambios en ecosistemas.",
    keywords: ["modelos predictivos", "simulación ecológica", "proyecciones ambientales"],
    articleIds: [25]
  },
  "teledetección": {
    explanation: "Uso de imágenes satelitales para monitorear ecosistemas.",
    keywords: ["monitoreo satelital", "imágenes aéreas", "sensores remotos"],
    articleIds: [24]
  },
  "inteligencia artificial": {
    explanation: "Aplicación de IA en análisis de datos de biodiversidad.",
    keywords: ["IA ambiental", "análisis automatizado", "machine learning ecológico"],
    articleIds: [24]
  },
  
  // 37. TEMAS DE CAMBIO CLIMÁTICO
  "vulnerabilidad al cambio climático": {
    explanation: "Evaluación de cómo afecta el cambio climático a ecosistemas y especies.",
    keywords: ["impactos climáticos", "vulnerabilidad ecológica", "adaptación al cambio"],
    articleIds: [25, 54]
  },
  "adaptación de ecosistemas": {
    explanation: "Medidas para ayudar a ecosistemas a adaptarse al cambio climático.",
    keywords: ["adaptación ecológica", "resiliencia climática", "ajuste ecosistémico"],
    articleIds: [54]
  },
  "servicios ecosistémicos y clima": {
    explanation: "Relación entre servicios ecosistémicos y regulación climática.",
    keywords: ["regulación climática", "servicios climáticos", "funciones ecosistémicas"],
    articleIds: [2, 54]
  },
  "monitoreo climático": {
    explanation: "Seguimiento de variables climáticas y sus efectos en biodiversidad.",
    keywords: ["seguimiento climático", "monitoreo atmosférico", "variables climáticas"],
    articleIds: [25]
  },
  "mitigación desde biodiversidad": {
    explanation: "Contribución de conservación de biodiversidad a mitigación de cambio climático.",
    keywords: ["mitigación ecológica", "captura de carbono", "soluciones naturales"],
    articleIds: [54]
  },
  
  // 38. TEMAS DE GÉNERO
  "enfoque de género": {
    explanation: "Incorporación de perspectiva de género en gestión de biodiversidad.",
    keywords: ["igualdad de género", "perspectiva de género", "mujeres y biodiversidad"],
    articleIds: [54]
  },
  "participación de mujeres": {
    explanation: "Involucramiento de mujeres en toma de decisiones sobre conservación.",
    keywords: ["liderazgo femenino", "mujeres en conservación", "participación de género"],
    articleIds: [54]
  },
  "impactos diferenciados": {
    explanation: "Efectos distintos de problemas ambientales en hombres y mujeres.",
    keywords: ["diferencias de género", "impactos de género", "vulnerabilidad diferenciada"],
    articleIds: [54]
  },
  "equidad en beneficios": {
    explanation: "Distribución justa de beneficios derivados de conservación de biodiversidad.",
    keywords: ["justicia ambiental", "equidad distributiva", "beneficios compartidos"],
    articleIds: [54]
  },
  "empoderamiento femenino": {
    explanation: "Fortalecimiento de rol de mujeres en gestión ambiental.",
    keywords: ["capacitación femenina", "liderazgo ambiental", "empoderamiento de mujeres"],
    articleIds: [54]
  },
  
  // 39. TEMAS DE EDUCACIÓN
  "educación formal": {
    explanation: "Incorporación de biodiversidad en currículos educativos.",
    keywords: ["currículo escolar", "educación ambiental formal", "enseñanza ecológica"],
    articleIds: [5, 50]
  },
  "educación no formal": {
    explanation: "Actividades educativas fuera de sistema formal para concienciar sobre biodiversidad.",
    keywords: ["educación informal", "divulgación ambiental", "sensibilización ecológica"],
    articleIds: [5, 50, 76]
  },
  "material educativo": {
    explanation: "Recursos didácticos para enseñanza sobre conservación de biodiversidad.",
    keywords: ["recursos didácticos", "material pedagógico", "herramientas educativas"],
    articleIds: [5, 50]
  },
  "formación de docentes": {
    explanation: "Capacitación a profesores para enseñar sobre biodiversidad.",
    keywords: ["capacitación docente", "formación de educadores", "actualización pedagógica"],
    articleIds: [5, 50]
  },
  "programas escolares": {
    explanation: "Iniciativas para incorporar educación ambiental en establecimientos educativos.",
    keywords: ["programas educativos", "iniciativas escolares", "proyectos ecológicos"],
    articleIds: [5, 50]
  },
  
  // 40. TEMAS DE COMUNICACIÓN
  "comunicación ambiental": {
    explanation: "Estrategias para difundir información sobre biodiversidad.",
    keywords: ["difusión ecológica", "comunicación verde", "estrategias informativas"],
    articleIds: [5, 50]
  },
  "periodismo ambiental": {
    explanation: "Cobertura mediática de temas relacionados con biodiversidad.",
    keywords: ["medios de comunicación", "periodismo ecológico", "información ambiental"],
    articleIds: [5, 50]
  },
  "redes sociales": {
    explanation: "Uso de plataformas digitales para difundir mensajes de conservación.",
    keywords: ["comunicación digital", "redes sociales", "divulgación online"],
    articleIds: [5, 50]
  },
  "campañas de sensibilización": {
    explanation: "Iniciativas para concienciar a público sobre importancia de biodiversidad.",
    keywords: ["campañas ecológicas", "sensibilización pública", "concientización masiva"],
    articleIds: [5, 50]
  },
  "alianzas comunicacionales": {
    explanation: "Colaboración con medios y comunicadores para difundir mensajes de conservación.",
    keywords: ["alianzas estratégicas", "colaboración mediática", "redes de comunicación"],
    articleIds: [5, 50]
  },
  
  // 41. TEMAS DE SALUD
  "salud y biodiversidad": {
    explanation: "Relación entre conservación de biodiversidad y salud humana.",
    keywords: ["salud ambiental", "bienestar humano", "salud ecosistémica"],
    articleIds: [2]
  },
  "servicios ecosistémicos para salud": {
    explanation: "Contribución de ecosistemas a prevención de enfermedades y bienestar.",
    keywords: ["servicios de salud", "prevención de enfermedades", "bienestar ecológico"],
    articleIds: [2]
  },
  "biodiversidad y enfermedades": {
    explanation: "Relación entre pérdida de biodiversidad y emergencia de enfermedades.",
    keywords: ["enfermedades emergentes", "pérdida de biodiversidad", "salud global"],
    articleIds: [2]
  },
  "medicina tradicional": {
    explanation: "Uso de recursos naturales con fines medicinales por comunidades locales.",
    keywords: ["plantas medicinales", "conocimientos tradicionales", "remedios naturales"],
    articleIds: [2, 62]
  },
  "seguridad alimentaria": {
    explanation: "Relación entre biodiversidad y disponibilidad de alimentos.",
    keywords: ["alimentación sostenible", "seguridad alimentaria", "diversidad de cultivos"],
    articleIds: [2]
  },
  
  // 42. TEMAS DE CULTURA
  "patrimonio cultural asociado": {
    explanation: "Elementos culturales vinculados a áreas naturales y biodiversidad.",
    keywords: ["patrimonio cultural", "legado cultural", "valores culturales"],
    articleIds: [35, 53]
  },
  "conservación biocultural": {
    explanation: "Enfoque que integra conservación de biodiversidad y cultura.",
    keywords: ["enfoque biocultural", "conservación integral", "naturaleza y cultura"],
    articleIds: [35, 62]
  },
  "identidad territorial": {
    explanation: "Vínculo entre comunidades y su entorno natural.",
    keywords: ["identidad local", "pertenencia territorial", "raíces ecológicas"],
    articleIds: [35, 62]
  },
  "manifestaciones culturales": {
    explanation: "Expresiones culturales relacionadas con biodiversidad.",
    keywords: ["expresiones culturales", "manifestaciones tradicionales", "folklore ecológico"],
    articleIds: [35, 62]
  },
  "turismo cultural": {
    explanation: "Actividades turísticas que combinan naturaleza y cultura.",
    keywords: ["turismo cultural", "visitas culturales", "patrimonio natural y cultural"],
    articleIds: [35, 80]
  },
  
  // 43. TEMAS DE DESARROLLO
  "desarrollo sostenible": {
    explanation: "Modelo de desarrollo que integra conservación de biodiversidad.",
    keywords: ["desarrollo sustentable", "progreso sostenible", "crecimiento verde"],
    articleIds: [1, 36]
  },
  "economía verde": {
    explanation: "Modelo económico que valora y conserva capital natural.",
    keywords: ["economía ecológica", "crecimiento verde", "capital natural"],
    articleIds: [50, 52]
  },
  "empleo verde": {
    explanation: "Puestos de trabajo generados por actividades de conservación.",
    keywords: ["trabajos verdes", "empleo ambiental", "ocupaciones ecológicas"],
    articleIds: [50]
  },
  "desarrollo local": {
    explanation: "Proyectos de desarrollo que involucran a comunidades locales.",
    keywords: ["desarrollo comunitario", "progresos locales", "iniciativas territoriales"],
    articleIds: [35, 50]
  },
  "inversión sostenible": {
    explanation: "Asignación de recursos a proyectos que generan beneficios ambientales y sociales.",
    keywords: ["inversión responsable", "financiamiento sostenible", "capital consciente"],
    articleIds: [46, 50]
  },
  
  // 44. TEMAS DE GOBERNANZA
  "gobernanza ambiental": {
    explanation: "Sistema de toma de decisiones en gestión de biodiversidad.",
    keywords: ["gobierno ambiental", "toma de decisiones", "gestión pública"],
    articleIds: [2, 54]
  },
  "descentralización": {
    explanation: "Transferencia de competencias a nivel regional y local.",
    keywords: ["descentralización política", "gestión regional", "competencias locales"],
    articleIds: [8, 55]
  },
  "coordinación interinstitucional": {
    explanation: "Trabajo conjunto entre diferentes organismos públicos.",
    keywords: ["trabajo intersectorial", "coordinación pública", "gestión conjunta"],
    articleIds: [2, 5]
  },
  "rendición de cuentas": {
    explanation: "Mecanismos para que instituciones rindan cuenta sobre su gestión.",
    keywords: ["transparencia", "responsabilidad pública", "informes de gestión"],
    articleIds: [55]
  },
  "corresponsabilidad": {
    explanation: "Compromiso compartido entre Estado, sociedad y sector privado en conservación.",
    keywords: ["responsabilidad compartida", "compromiso conjunto", "alianzas multiactor"],
    articleIds: [50, 54]
  },
  
  // 45. TEMAS DE CONFLICTOS
  "conflictos socioambientales": {
    explanation: "Disputas relacionadas con uso de recursos naturales y conservación.",
    keywords: ["conflictos ambientales", "disputas socioambientales", "tensiones territoriales"],
    articleIds: [28, 63]
  },
  "resolución de conflictos": {
    explanation: "Mecanismos para solucionar disputas relacionadas con biodiversidad.",
    keywords: ["mediación ambiental", "solución de conflictos", "negociación ecológica"],
    articleIds: [68]
  },
  "partes interesadas": {
    explanation: "Actores involucrados o afectados por decisiones sobre biodiversidad.",
    keywords: ["stakeholders", "actores relevantes", "grupos de interés"],
    articleIds: [65, 74]
  },
  "consulta previa": {
    explanation: "Proceso de consulta a comunidades antes de implementar proyectos.",
    keywords: ["diálogo previo", "consulta comunitaria", "participación anticipada"],
    articleIds: [65, 80]
  },
  "consentimiento libre informado": {
    explanation: "Aprobación de comunidades después de recibir información completa.",
    keywords: ["consentimiento informado", "aprobación comunitaria", "decisión autónoma"],
    articleIds: [65, 80]
  },
  
  // 46. TEMAS DE MONITOREO Y EVALUACIÓN
  "monitoreo de la implementación": {
    explanation: "Seguimiento de avances en aplicación de la ley y sus instrumentos.",
    keywords: ["seguimiento de políticas", "evaluación de implementación", "monitoreo normativo"],
    articleIds: [55]
  },
  "evaluación de impacto": {
    explanation: "Análisis de efectos de proyectos y actividades sobre biodiversidad.",
    keywords: ["evaluación ambiental", "análisis de impacto", "estudio de efectos"],
    articleIds: [5, 38]
  },
  "auditorías ambientales": {
    explanation: "Revisiones independientes de gestión ambiental del Servicio.",
    keywords: ["evaluación externa", "auditoría ecológica", "revisión de gestión"],
    articleIds: [55]
  },
  "indicadores de desempeño": {
    explanation: "Parámetros para medir eficiencia y eficacia de gestión.",
    keywords: ["métricas de gestión", "indicadores de eficiencia", "parámetros de evaluación"],
    articleIds: [15, 55]
  },
  "sistemas de evaluación": {
    explanation: "Metodologías para evaluar resultados de conservación.",
    keywords: ["evaluación sistemática", "metodologías de evaluación", "análisis de resultados"],
    articleIds: [15, 55]
  },
  
  // 47. TEMAS DE TECNOLOGÍA
  "tecnologías de información": {
    explanation: "Uso de TIC en gestión de biodiversidad.",
    keywords: ["TIC ambiental", "tecnología digital", "informática ecológica"],
    articleIds: [24]
  },
  "sistemas de monitoreo remoto": {
    explanation: "Uso de sensores y equipos remotos para recolectar datos ambientales.",
    keywords: ["monitoreo remoto", "sensores ambientales", "teledetección"],
    articleIds: [24, 25]
  },
  "plataformas digitales": {
    explanation: "Herramientas online para gestión y difusión de información sobre biodiversidad.",
    keywords: ["plataformas online", "herramientas digitales", "portales ambientales"],
    articleIds: [24]
  },
  "modelos predictivos": {
    explanation: "Herramientas para predecir cambios en ecosistemas y biodiversidad.",
    keywords: ["modelos ecológicos", "simulación ambiental", "proyecciones ecosistémicas"],
    articleIds: [25]
  },
  "big data ambiental": {
    explanation: "Análisis de grandes volúmenes de datos ambientales.",
    keywords: ["análisis de datos", "macrodatos ambientales", "data science ecológico"],
    articleIds: [24]
  },
  
  // 48. TEMAS DE RESILIENCIA
  "resiliencia ecológica": {
    explanation: "Capacidad de ecosistemas para recuperarse ante perturbaciones.",
    keywords: ["resistencia ecológica", "recuperación de ecosistemas", "adaptación ecosistémica"],
    articleIds: [33]
  },
  "resiliencia climática": {
    explanation: "Capacidad de ecosistemas para adaptarse al cambio climático.",
    keywords: ["adaptación climática", "resistencia al cambio", "resiliencia ecosistémica"],
    articleIds: [54]
  },
  "recuperación de ecosistemas": {
    explanation: "Procesos para restaurar funciones y estructura de ecosistemas degradados.",
    keywords: ["restauración ecológica", "recuperación de hábitats", "rehabilitación ambiental"],
    articleIds: [33]
  },
  "manejo adaptativo": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["gestión flexible", "aprendizaje organizacional", "manejo adaptativo"],
    articleIds: [20, 71]
  },
  "conservación proactiva": {
    explanation: "Medidas preventivas para evitar degradación de ecosistemas.",
    keywords: ["prevención de daños", "conservación preventiva", "medidas proactivas"],
    articleIds: [2, 45]
  },
  
  // 49. TEMAS DE JUSTICIA AMBIENTAL
  "justicia ambiental": {
    explanation: "Distribución equitativa de beneficios y cargas ambientales.",
    keywords: ["equidad ambiental", "justicia ecológica", "distribución justa"],
    articleIds: [54]
  },
  "acceso a la información": {
    explanation: "Derecho a obtener información sobre biodiversidad y gestión ambiental.",
    keywords: ["transparencia", "acceso a datos", "información pública"],
    articleIds: [2, 24]
  },
  "participación efectiva": {
    explanation: "Involucramiento significativo de ciudadanos en decisiones ambientales.",
    keywords: ["participación real", "inclusión efectiva", "decisión compartida"],
    articleIds: [2, 54]
  },
  "acceso a la justicia": {
    explanation: "Mecanismos para resolver disputas ambientales.",
    keywords: ["justicia ambiental", "resolución de conflictos", "tribunales ambientales"],
    articleIds: [134, 135, 136, 137, 138, 139]
  },
  "protección de defensores": {
    explanation: "Medidas para proteger a personas que defienden biodiversidad.",
    keywords: ["defensores ambientales", "protección de activistas", "seguridad ecológica"],
    articleIds: [54]
  },
  
  // 50. TEMAS DE COOPERACIÓN
  "cooperación internacional": {
    explanation: "Colaboración entre países para conservación de biodiversidad.",
    keywords: ["colaboración global", "cooperación ambiental", "acuerdos internacionales"],
    articleIds: [10, 49, 55]
  },
  "convenios internacionales": {
    explanation: "Acuerdos con organismos internacionales para conservación.",
    keywords: ["tratados ambientales", "acuerdos globales", "convenios internacionales"],
    articleIds: [36, 37]
  },
  "proyectos binacionales": {
    explanation: "Iniciativas de conservación entre países fronterizos.",
    keywords: ["proyectos transfronterizos", "iniciativas binacionales", "cooperación regional"],
    articleIds: [55]
  },
  "intercambio de experiencias": {
    explanation: "Compartir conocimientos y buenas prácticas entre países.",
    keywords: ["intercambio técnico", "buenas prácticas", "lecciones aprendidas"],
    articleIds: [55]
  },
  "financiamiento internacional": {
    explanation: "Recursos de organismos internacionales para proyectos de conservación.",
    keywords: ["fondos globales", "financiamiento externo", "ayuda internacional"],
    articleIds: [10, 49]
  },
  
  // 51. TEMAS DE EMERGENCIAS
  "contingencias ambientales": {
    explanation: "Situaciones de emergencia que afectan a biodiversidad.",
    keywords: ["emergencias ecológicas", "contingencias ambientales", "crisis ambientales"],
    articleIds: [71]
  },
  "planes de contingencia": {
    explanation: "Protocolos para responder a emergencias ambientales.",
    keywords: ["protocolos de emergencia", "planes de respuesta", "contingencias ecológicas"],
    articleIds: [71]
  },
  "incendios forestales": {
    explanation: "Fuegos que afectan ecosistemas y medidas para prevenirlos y combatirlos.",
    keywords: ["incendios", "prevención de incendios", "combate de fuego"],
    articleIds: [1, 71]
  },
  "derrames químicos": {
    explanation: "Liberación accidental de sustancias que afectan a biodiversidad.",
    keywords: ["contaminación química", "derrames tóxicos", "emergencias químicas"],
    articleIds: [108]
  },
  "invasiones biológicas": {
    explanation: "Llegada masiva de especies exóticas que amenazan ecosistemas.",
    keywords: ["invasiones biológicas", "plagas emergentes", "especies invasoras"],
    articleIds: [45]
  },
  
  // 52. TEMAS DE RESTAURACIÓN
  "restauración de ecosistemas": {
    explanation: "Procesos para recuperar ecosistemas degradados a condiciones originales.",
    keywords: ["recuperación ecológica", "rehabilitación ambiental", "restauración de hábitats"],
    articleIds: [24, 33, 38]
  },
  "técnicas de restauración": {
    explanation: "Métodos utilizados para restaurar ecosistemas degradados.",
    keywords: ["métodos de restauración", "técnicas de rehabilitación", "intervenciones ecológicas"],
    articleIds: [33]
  },
  "monitoreo de restauración": {
    explanation: "Seguimiento de avances en proyectos de restauración ecológica.",
    keywords: ["evaluación de restauración", "seguimiento ecológico", "indicadores de recuperación"],
    articleIds: [33]
  },
  "participación comunitaria en restauración": {
    explanation: "Involucramiento de comunidades locales en proyectos de restauración.",
    keywords: ["restauración participativa", "comunidades locales", "voluntariado ecológico"],
    articleIds: [33]
  },
  "financiamiento de restauración": {
    explanation: "Mecanismos económicos para proyectos de restauración ecológica.",
    keywords: ["fondos de restauración", "inversión ecológica", "financiamiento ambiental"],
    articleIds: [33, 46]
  },
  
  // 53. TEMAS DE ESPECIES
  "conservación de especies": {
    explanation: "Medidas para proteger especies amenazadas y sus hábitats.",
    keywords: ["protección de especies", "conservación de fauna", "conservación de flora"],
    articleIds: [42, 43, 44]
  },
  "recuperación de poblaciones": {
    explanation: "Acciones para aumentar poblaciones de especies amenazadas.",
    keywords: ["repoblamiento", "recuperación de especies", "aumento poblacional"],
    articleIds: [42, 43]
  },
  "manejo de hábitats": {
    explanation: "Intervenciones para mejorar condiciones de hábitats de especies.",
    keywords: ["mejora de hábitats", "manejo de ecosistemas", "gestión de ambientes"],
    articleIds: [42, 43]
  },
  "control de amenazas": {
    explanation: "Medidas para reducir factores que amenazan a especies.",
    keywords: ["reducción de amenazas", "control de riesgos", "mitigación de peligros"],
    articleIds: [42, 43, 45]
  },
  "monitoreo de especies": {
    explanation: "Seguimiento de poblaciones y estado de conservación de especies.",
    keywords: ["seguimiento de especies", "monitoreo poblacional", "evaluación de estado"],
    articleIds: [25, 42]
  },
  
  // 54. TEMAS DE ÁREAS PROTEGIDAS
  "categorías de protección": {
    explanation: "Clasificación de áreas protegidas según objetivos de conservación.",
    keywords: ["tipos de protección", "categorías de áreas", "niveles de conservación"],
    articleIds: [56]
  },
  "objetos de conservación": {
    explanation: "Elementos específicos que se busca proteger en un área.",
    keywords: ["objetivos de protección", "elementos a conservar", "valores a proteger"],
    articleIds: [64, 72]
  },
  "límites de áreas protegidas": {
    explanation: "Delimitación geográfica de áreas protegidas.",
    keywords: ["deslindes", "límites geográficos", "perímetros protegidos"],
    articleIds: [64, 65]
  },
  "declaratoria de áreas": {
    explanation: "Proceso legal para establecer nuevas áreas protegidas.",
    keywords: ["creación de áreas", "declaratoria oficial", "establecimiento de protección"],
    articleIds: [64, 65]
  },
  "manejo de áreas protegidas": {
    explanation: "Conjunto de acciones para administrar y conservar áreas protegidas.",
    keywords: ["gestión de áreas", "administración de parques", "manejo de reservas"],
    articleIds: [67, 71, 72]
  },
  
  // 55. TEMAS DE PARTICIPACIÓN CIUDADANA
  "voluntariado ambiental": {
    explanation: "Participación de ciudadanos en actividades de conservación.",
    keywords: ["voluntarios ecológicos", "participación ciudadana", "trabajo voluntario"],
    articleIds: [54]
  },
  "ciudadanía ambiental": {
    explanation: "Formación de ciudadanos comprometidos con conservación de biodiversidad.",
    keywords: ["ciudadanos ecológicos", "conciencia cívica", "compromiso ambiental"],
    articleIds: [2, 54]
  },
  "observadores ciudadanos": {
    explanation: "Personas que reportan información sobre estado de biodiversidad.",
    keywords: ["vigilancia ciudadana", "reportes ambientales", "observadores ecológicos"],
    articleIds: [25]
  },
  "educación no formal": {
    explanation: "Actividades educativas fuera de sistema formal para concienciar sobre biodiversidad.",
    keywords: ["educación informal", "divulgación ambiental", "sensibilización ecológica"],
    articleIds: [5, 50, 76]
  },
  "comités comunitarios": {
    explanation: "Grupos de ciudadanos que participan en gestión de áreas protegidas.",
    keywords: ["comités locales", "grupos comunitarios", "organizaciones vecinales"],
    articleIds: [55, 68]
  },
  
  // 56. TEMAS DE TURISMO SOSTENIBLE
  "capacidad de carga": {
    explanation: "Número máximo de visitantes que un área puede soportar sin deteriorarse.",
    keywords: ["límite de visitantes", "capacidad de acogida", "tolerancia de uso"],
    articleIds: [72]
  },
  "turismo de bajo impacto": {
    explanation: "Turismo con mínimo impacto en áreas naturales protegidas.",
    keywords: ["turismo mínimo impacto", "visitas controladas", "turismo no masivo"],
    articleIds: [58]
  },
  "guías locales": {
    explanation: "Personas de comunidades locales que guían a visitantes en áreas protegidas.",
    keywords: ["guías comunitarios", "turismo local", "interpretación local"],
    articleIds: [50, 80]
  },
  "infraestructura turística": {
    explanation: "Instalaciones para recibir visitantes en áreas protegidas.",
    keywords: ["instalaciones turísticas", "infraestructura de parques", "servicios para visitantes"],
    articleIds: [79, 80]
  },
  "gestión de visitantes": {
    explanation: "Conjunto de acciones para administrar flujo de turistas en áreas protegidas.",
    keywords: ["manejo de turismo", "administración de visitantes", "gestión de público"],
    articleIds: [67, 72]
  },
  
  // 57. TEMAS DE INVESTIGACIÓN CIENTÍFICA
  "líneas de investigación": {
    explanation: "Temas prioritarios de investigación en biodiversidad.",
    keywords: ["prioridades de investigación", "temas de estudio", "líneas científicas"],
    articleIds: [5, 25]
  },
  "estudios de biodiversidad": {
    explanation: "Investigaciones para conocer composición y estado de biodiversidad.",
    keywords: ["inventarios biológicos", "estudios ecológicos", "investigación de biodiversidad"],
    articleIds: [24, 25]
  },
  "monitoreo científico": {
    explanation: "Seguimiento sistemático de variables ecológicas para evaluar estado de biodiversidad.",
    keywords: ["seguimiento ecológico", "monitoreo ambiental", "evaluación científica"],
    articleIds: [25]
  },
  "publicaciones científicas": {
    explanation: "Difusión de resultados de investigaciones sobre biodiversidad.",
    keywords: ["divulgación científica", "artículos técnicos", "publicaciones ambientales"],
    articleIds: [5]
  },
  "cooperación científica": {
    explanation: "Colaboración entre instituciones para investigación en biodiversidad.",
    keywords: ["colaboración académica", "investigación conjunta", "cooperación técnica"],
    articleIds: [5, 25]
  },
  
  // 58. TEMAS DE GESTIÓN INTEGRAL
  "manejo adaptativo": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["gestión flexible", "aprendizaje organizacional", "manejo adaptativo"],
    articleIds: [20, 71]
  },
  "gestión ecosistémica": {
    explanation: "Enfoque que considera ecosistemas completos en lugar de especies individuales.",
    keywords: ["manejo ecosistémico", "gestión integral", "enfoque sistémico"],
    articleIds: [23]
  },
  "planificación estratégica": {
    explanation: "Definición de objetivos y estrategias a largo plazo para conservación.",
    keywords: ["planificación a largo plazo", "estrategias de conservación", "visión de futuro"],
    articleIds: [55]
  },
  "evaluación de gestión": {
    explanation: "Medición de eficiencia y eficacia de acciones de conservación.",
    keywords: ["evaluación de eficiencia", "medición de resultados", "análisis de gestión"],
    articleIds: [55]
  },
  "retroalimentación de procesos": {
    explanation: "Mecanismos para aprender de experiencias y mejorar gestión.",
    keywords: ["aprendizaje organizacional", "mejora continua", "retroalimentación"],
    articleIds: [55]
  },
  
  // 59. TEMAS DE FINANCIAMIENTO
  "fondo nacional de biodiversidad": {
    explanation: "Fondo para financiar proyectos de conservación fuera de áreas protegidas.",
    keywords: ["financiamiento ambiental", "fondos de conservación", "inversión ecológica"],
    articleIds: [46, 47, 48, 49]
  },
  "incentivos fiscales": {
    explanation: "Beneficios tributarios para promover conservación de biodiversidad.",
    keywords: ["exenciones tributarias", "incentivos fiscales", "beneficios impositivos"],
    articleIds: [105]
  },
  "pago por servicios ambientales": {
    explanation: "Esquemas donde se paga a quienes conservan servicios ecosistémicos.",
    keywords: ["compensación por servicios", "incentivos ecológicos", "valoración de servicios"],
    articleIds: [52]
  },
  "mercados verdes": {
    explanation: "Sistemas donde se comercializan productos de biodiversidad sostenible.",
    keywords: ["comercio ecológico", "mercados sostenibles", "productos verdes"],
    articleIds: [50]
  },
  "inversión privada": {
    explanation: "Aportes de empresas y particulares a proyectos de conservación.",
    keywords: ["financiamiento privado", "inversión empresarial", "aportes particulares"],
    articleIds: [46, 50]
  },
  
  // 60. TEMAS DE TECNOLOGÍA E INNOVACIÓN
  "tecnologías limpias": {
    explanation: "Tecnologías con mínimo impacto ambiental para gestión de biodiversidad.",
    keywords: ["tecnologías verdes", "innovación limpia", "tecnologías sostenibles"],
    articleIds: [24]
  },
  "aplicaciones móviles": {
    explanation: "Herramientas digitales para monitoreo y educación sobre biodiversidad.",
    keywords: ["apps ambientales", "aplicaciones móviles", "herramientas digitales"],
    articleIds: [24]
  },
  "sensores ambientales": {
    explanation: "Dispositivos para recolectar datos ambientales en tiempo real.",
    keywords: ["monitoreo ambiental", "sensores ecológicos", "dispositivos de medición"],
    articleIds: [24, 25]
  },
  "inteligencia artificial": {
    explanation: "Aplicación de IA en análisis de datos de biodiversidad.",
    keywords: ["IA ambiental", "análisis automatizado", "machine learning ecológico"],
    articleIds: [24]
  },
  "blockchain ambiental": {
    explanation: "Uso de tecnología blockchain para transparencia en gestión ambiental.",
    keywords: ["cadena de bloques", "transparencia digital", "gestión blockchain"],
    articleIds: [24]
  },
  
  // 61. TEMAS DE CAMBIO CLIMÁTICO
  "mitigación climática": {
    explanation: "Medidas para reducir emisiones de gases de efecto invernadero.",
    keywords: ["reducción de emisiones", "mitigación de cambio climático", "acciones climáticas"],
    articleIds: [54]
  },
  "adaptación climática": {
    explanation: "Medidas para adaptarse a impactos del cambio climático.",
    keywords: ["adaptación al cambio", "resiliencia climática", "ajustes climáticos"],
    articleIds: [54]
  },
  "servicios de regulación climática": {
    explanation: "Funciones de ecosistemas que regulan clima.",
    keywords: ["regulación climática", "servicios climáticos", "funciones ecosistémicas"],
    articleIds: [2, 54]
  },
  "vulnerabilidad climática": {
    explanation: "Evaluación de cómo afecta el cambio climático a ecosistemas y especies.",
    keywords: ["impactos climáticos", "vulnerabilidad ecológica", "adaptación al cambio"],
    articleIds: [25, 54]
  },
  "soluciones basadas en naturaleza": {
    explanation: "Acciones que usan ecosistemas para enfrentar desafíos sociales.",
    keywords: ["soluciones naturales", "enfoques ecosistémicos", "acciones basadas en naturaleza"],
    articleIds: [54]
  },
  
  // 62. TEMAS DE PARTICIPACIÓN INDÍGENA
  "consulta indígena": {
    explanation: "Proceso de consulta a pueblos indígenas para medidas que les afecten.",
    keywords: ["participación indígena", "consulta previa", "diálogo intercultural"],
    articleIds: [65, 80]
  },
  "consentimiento libre informado": {
    explanation: "Aprobación de comunidades después de recibir información completa.",
    keywords: ["consentimiento informado", "aprobación comunitaria", "decisión autónoma"],
    articleIds: [65, 80]
  },
  "conocimientos tradicionales": {
    explanation: "Saberes de comunidades indígenas relevantes para conservación.",
    keywords: ["saberes ancestrales", "conocimiento local", "tradiciones ecológicas"],
    articleIds: [2, 62]
  },
  "territorios indígenas": {
    explanation: "Tierras de pueblos indígenas y su relación con biodiversidad.",
    keywords: ["tierras indígenas", "territorios ancestrales", "comunidades originarias"],
    articleIds: [62]
  },
  "gestión indígena": {
    explanation: "Manejo de recursos naturales por comunidades indígenas.",
    keywords: ["manejo ancestral", "gestión tradicional", "administración indígena"],
    articleIds: [62]
  },
  
  // 63. TEMAS DE EDUCACIÓN AMBIENTAL
  "currículo escolar": {
    explanation: "Incorporación de biodiversidad en programas educativos formales.",
    keywords: ["educación formal", "currículo ecológico", "enseñanza ambiental"],
    articleIds: [5, 50]
  },
  "material didáctico": {
    explanation: "Recursos para enseñanza sobre conservación de biodiversidad.",
    keywords: ["recursos educativos", "material pedagógico", "herramientas didácticas"],
    articleIds: [5, 50]
  },
  "formación docente": {
    explanation: "Capacitación a profesores para enseñar sobre biodiversidad.",
    keywords: ["capacitación docente", "formación de educadores", "actualización pedagógica"],
    articleIds: [5, 50]
  },
  "programas escolares": {
    explanation: "Iniciativas para incorporar educación ambiental en establecimientos educativos.",
    keywords: ["programas educativos", "iniciativas escolares", "proyectos ecológicos"],
    articleIds: [5, 50]
  },
  "educación no formal": {
    explanation: "Actividades educativas fuera de sistema formal para concienciar sobre biodiversidad.",
    keywords: ["educación informal", "divulgación ambiental", "sensibilización ecológica"],
    articleIds: [5, 50, 76]
  },
  
  // 64. TEMAS DE COMUNICACIÓN
  "estrategias de comunicación": {
    explanation: "Planes para difundir información sobre biodiversidad.",
    keywords: ["comunicación ambiental", "difusión ecológica", "estrategias informativas"],
    articleIds: [5, 50]
  },
  "periodismo ambiental": {
    explanation: "Cobertura mediática de temas relacionados con biodiversidad.",
    keywords: ["medios de comunicación", "periodismo ecológico", "información ambiental"],
    articleIds: [5, 50]
  },
  "redes sociales": {
    explanation: "Uso de plataformas digitales para difundir mensajes de conservación.",
    keywords: ["comunicación digital", "redes sociales", "divulgación online"],
    articleIds: [5, 50]
  },
  "campañas de sensibilización": {
    explanation: "Iniciativas para concienciar a público sobre importancia de biodiversidad.",
    keywords: ["campañas ecológicas", "sensibilización pública", "concientización masiva"],
    articleIds: [5, 50]
  },
  "alianzas comunicacionales": {
    explanation: "Colaboración con medios y comunicadores para difundir mensajes de conservación.",
    keywords: ["alianzas estratégicas", "colaboración mediática", "redes de comunicación"],
    articleIds: [5, 50]
  },
  
  // 65. TEMAS DE SALUD Y BIENESTAR
  "salud humana": {
    explanation: "Relación entre conservación de biodiversidad y salud humana.",
    keywords: ["salud ambiental", "bienestar humano", "salud ecosistémica"],
    articleIds: [2]
  },
  "servicios de salud ecosistémicos": {
    explanation: "Contribución de ecosistemas a prevención de enfermedades y bienestar.",
    keywords: ["servicios de salud", "prevención de enfermedades", "bienestar ecológico"],
    articleIds: [2]
  },
  "medicina tradicional": {
    explanation: "Uso de recursos naturales con fines medicinales por comunidades locales.",
    keywords: ["plantas medicinales", "conocimientos tradicionales", "remedios naturales"],
    articleIds: [2, 62]
  },
  "seguridad alimentaria": {
    explanation: "Relación entre biodiversidad y disponibilidad de alimentos.",
    keywords: ["alimentación sostenible", "seguridad alimentaria", "diversidad de cultivos"],
    articleIds: [2]
  },
  "bienestar humano": {
    explanation: "Contribución de biodiversidad a calidad de vida de personas.",
    keywords: ["calidad de vida", "bienestar social", "beneficios humanos"],
    articleIds: [2]
  },
  
  // 66. TEMAS DE CULTURA Y PATRIMONIO
  "patrimonio cultural asociado": {
    explanation: "Elementos culturales vinculados a áreas naturales y biodiversidad.",
    keywords: ["patrimonio cultural", "legado cultural", "valores culturales"],
    articleIds: [35, 53]
  },
  "conservación biocultural": {
    explanation: "Enfoque que integra conservación de biodiversidad y cultura.",
    keywords: ["enfoque biocultural", "conservación integral", "naturaleza y cultura"],
    articleIds: [35, 62]
  },
  "identidad territorial": {
    explanation: "Vínculo entre comunidades y su entorno natural.",
    keywords: ["identidad local", "pertenencia territorial", "raíces ecológicas"],
    articleIds: [35, 62]
  },
  "manifestaciones culturales": {
    explanation: "Expresiones culturales relacionadas con biodiversidad.",
    keywords: ["expresiones culturales", "manifestaciones tradicionales", "folklore ecológico"],
    articleIds: [35, 62]
  },
  "turismo cultural": {
    explanation: "Actividades turísticas que combinan naturaleza y cultura.",
    keywords: ["turismo cultural", "visitas culturales", "patrimonio natural y cultural"],
    articleIds: [35, 80]
  },
  
  // 67. TEMAS DE DESARROLLO SOSTENIBLE
  "desarrollo sostenible": {
    explanation: "Modelo de desarrollo que integra conservación de biodiversidad.",
    keywords: ["desarrollo sustentable", "progreso sostenible", "crecimiento verde"],
    articleIds: [1, 36]
  },
  "economía verde": {
    explanation: "Modelo económico que valora y conserva capital natural.",
    keywords: ["economía ecológica", "crecimiento verde", "capital natural"],
    articleIds: [50, 52]
  },
  "empleo verde": {
    explanation: "Puestos de trabajo generados por actividades de conservación.",
    keywords: ["trabajos verdes", "empleo ambiental", "ocupaciones ecológicas"],
    articleIds: [50]
  },
  "desarrollo local": {
    explanation: "Proyectos de desarrollo que involucran a comunidades locales.",
    keywords: ["desarrollo comunitario", "progresos locales", "iniciativas territoriales"],
    articleIds: [35, 50]
  },
  "inversión sostenible": {
    explanation: "Asignación de recursos a proyectos que generan beneficios ambientales y sociales.",
    keywords: ["inversión responsable", "financiamiento sostenible", "capital consciente"],
    articleIds: [46, 50]
  },
  
  // 68. TEMAS DE GOBERNANZA
  "gobernanza ambiental": {
    explanation: "Sistema de toma de decisiones en gestión de biodiversidad.",
    keywords: ["gobierno ambiental", "toma de decisiones", "gestión pública"],
    articleIds: [2, 54]
  },
  "descentralización": {
    explanation: "Transferencia de competencias a nivel regional y local.",
    keywords: ["descentralización política", "gestión regional", "competencias locales"],
    articleIds: [8, 55]
  },
  "coordinación interinstitucional": {
    explanation: "Trabajo conjunto entre diferentes organismos públicos.",
    keywords: ["trabajo intersectorial", "coordinación pública", "gestión conjunta"],
    articleIds: [2, 5]
  },
  "rendición de cuentas": {
    explanation: "Mecanismos para que instituciones rindan cuenta sobre su gestión.",
    keywords: ["transparencia", "responsabilidad pública", "informes de gestión"],
    articleIds: [55]
  },
  "corresponsabilidad": {
    explanation: "Compromiso compartido entre Estado, sociedad y sector privado en conservación.",
    keywords: ["responsabilidad compartida", "compromiso conjunto", "alianzas multiactor"],
    articleIds: [50, 54]
  },
  
  // 69. TEMAS DE CONFLICTOS
  "conflictos socioambientales": {
    explanation: "Disputas relacionadas con uso de recursos naturales y conservación.",
    keywords: ["conflictos ambientales", "disputas socioambientales", "tensiones territoriales"],
    articleIds: [28, 63]
  },
  "resolución de conflictos": {
    explanation: "Mecanismos para solucionar disputas relacionadas con biodiversidad.",
    keywords: ["mediación ambiental", "solución de conflictos", "negociación ecológica"],
    articleIds: [68]
  },
  "partes interesadas": {
    explanation: "Actores involucrados o afectados por decisiones sobre biodiversidad.",
    keywords: ["stakeholders", "actores relevantes", "grupos de interés"],
    articleIds: [65, 74]
  },
  "consulta previa": {
    explanation: "Proceso de consulta a comunidades antes de implementar proyectos.",
    keywords: ["diálogo previo", "consulta comunitaria", "participación anticipada"],
    articleIds: [65, 80]
  },
  "consentimiento libre informado": {
    explanation: "Aprobación de comunidades después de recibir información completa.",
    keywords: ["consentimiento informado", "aprobación comunitaria", "decisión autónoma"],
    articleIds: [65, 80]
  },
  
  // 70. TEMAS DE MONITOREO Y EVALUACIÓN
  "monitoreo de la implementación": {
    explanation: "Seguimiento de avances en aplicación de la ley y sus instrumentos.",
    keywords: ["seguimiento de políticas", "evaluación de implementación", "monitoreo normativo"],
    articleIds: [55]
  },
  "evaluación de impacto": {
    explanation: "Análisis de efectos de proyectos y actividades sobre biodiversidad.",
    keywords: ["evaluación ambiental", "análisis de impacto", "estudio de efectos"],
    articleIds: [5, 38]
  },
  "auditorías ambientales": {
    explanation: "Revisiones independientes de gestión ambiental del Servicio.",
    keywords: ["evaluación externa", "auditoría ecológica", "revisión de gestión"],
    articleIds: [55]
  },
  "indicadores de desempeño": {
    explanation: "Parámetros para medir eficiencia y eficacia de gestión.",
    keywords: ["métricas de gestión", "indicadores de eficiencia", "parámetros de evaluación"],
    articleIds: [15, 55]
  },
  "sistemas de evaluación": {
    explanation: "Metodologías para evaluar resultados de conservación.",
    keywords: ["evaluación sistemática", "metodologías de evaluación", "análisis de resultados"],
    articleIds: [15, 55]
  },
  
  // 71. TEMAS DE TECNOLOGÍA
  "tecnologías de información": {
    explanation: "Uso de TIC en gestión de biodiversidad.",
    keywords: ["TIC ambiental", "tecnología digital", "informática ecológica"],
    articleIds: [24]
  },
  "sistemas de monitoreo remoto": {
    explanation: "Uso de sensores y equipos remotos para recolectar datos ambientales.",
    keywords: ["monitoreo remoto", "sensores ambientales", "teledetección"],
    articleIds: [24, 25]
  },
  "plataformas digitales": {
    explanation: "Herramientas online para gestión y difusión de información sobre biodiversidad.",
    keywords: ["plataformas online", "herramientas digitales", "portales ambientales"],
    articleIds: [24]
  },
  "modelos predictivos": {
    explanation: "Herramientas para predecir cambios en ecosistemas y biodiversidad.",
    keywords: ["modelos ecológicos", "simulación ambiental", "proyecciones ecosistémicas"],
    articleIds: [25]
  },
  "big data ambiental": {
    explanation: "Análisis de grandes volúmenes de datos ambientales.",
    keywords: ["análisis de datos", "macrodatos ambientales", "data science ecológico"],
    articleIds: [24]
  },
  
  // 72. TEMAS DE RESILIENCIA
  "resiliencia ecológica": {
    explanation: "Capacidad de ecosistemas para recuperarse ante perturbaciones.",
    keywords: ["resistencia ecológica", "recuperación de ecosistemas", "adaptación ecosistémica"],
    articleIds: [33]
  },
  "resiliencia climática": {
    explanation: "Capacidad de ecosistemas para adaptarse al cambio climático.",
    keywords: ["adaptación climática", "resistencia al cambio", "resiliencia ecosistémica"],
    articleIds: [54]
  },
  "recuperación de ecosistemas": {
    explanation: "Procesos para restaurar funciones y estructura de ecosistemas degradados.",
    keywords: ["restauración ecológica", "recuperación de hábitats", "rehabilitación ambiental"],
    articleIds: [33]
  },
  "manejo adaptativo": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["gestión flexible", "aprendizaje organizacional", "manejo adaptativo"],
    articleIds: [20, 71]
  },
  "conservación proactiva": {
    explanation: "Medidas preventivas para evitar degradación de ecosistemas.",
    keywords: ["prevención de daños", "conservación preventiva", "medidas proactivas"],
    articleIds: [2, 45]
  },
  
  // 73. TEMAS DE JUSTICIA AMBIENTAL
  "justicia ambiental": {
    explanation: "Distribución equitativa de beneficios y cargas ambientales.",
    keywords: ["equidad ambiental", "justicia ecológica", "distribución justa"],
    articleIds: [54]
  },
  "acceso a la información": {
    explanation: "Derecho a obtener información sobre biodiversidad y gestión ambiental.",
    keywords: ["transparencia", "acceso a datos", "información pública"],
    articleIds: [2, 24]
  },
  "participación efectiva": {
    explanation: "Involucramiento significativo de ciudadanos en decisiones ambientales.",
    keywords: ["participación real", "inclusión efectiva", "decisión compartida"],
    articleIds: [2, 54]
  },
  "acceso a la justicia": {
    explanation: "Mecanismos para resolver disputas ambientales.",
    keywords: ["justicia ambiental", "resolución de conflictos", "tribunales ambientales"],
    articleIds: [134, 135, 136, 137, 138, 139]
  },
  "protección de defensores": {
    explanation: "Medidas para proteger a personas que defienden biodiversidad.",
    keywords: ["defensores ambientales", "protección de activistas", "seguridad ecológica"],
    articleIds: [54]
  },
  
  // 74. TEMAS DE COOPERACIÓN
  "cooperación internacional": {
    explanation: "Colaboración entre países para conservación de biodiversidad.",
    keywords: ["colaboración global", "cooperación ambiental", "acuerdos internacionales"],
    articleIds: [10, 49, 55]
  },
  "convenios internacionales": {
    explanation: "Acuerdos con organismos internacionales para conservación.",
    keywords: ["tratados ambientales", "acuerdos globales", "convenios internacionales"],
    articleIds: [36, 37]
  },
  "proyectos binacionales": {
    explanation: "Iniciativas de conservación entre países fronterizos.",
    keywords: ["proyectos transfronterizos", "iniciativas binacionales", "cooperación regional"],
    articleIds: [55]
  },
  "intercambio de experiencias": {
    explanation: "Compartir conocimientos y buenas prácticas entre países.",
    keywords: ["intercambio técnico", "buenas prácticas", "lecciones aprendidas"],
    articleIds: [55]
  },
  "financiamiento internacional": {
    explanation: "Recursos de organismos internacionales para proyectos de conservación.",
    keywords: ["fondos globales", "financiamiento externo", "ayuda internacional"],
    articleIds: [10, 49]
  },
  
  // 75. TEMAS DE EMERGENCIAS
  "contingencias ambientales": {
    explanation: "Situaciones de emergencia que afectan a biodiversidad.",
    keywords: ["emergencias ecológicas", "contingencias ambientales", "crisis ambientales"],
    articleIds: [71]
  },
  "planes de contingencia": {
    explanation: "Protocolos para responder a emergencias ambientales.",
    keywords: ["protocolos de emergencia", "planes de respuesta", "contingencias ecológicas"],
    articleIds: [71]
  },
  "incendios forestales": {
    explanation: "Fuegos que afectan ecosistemas y medidas para prevenirlos y combatirlos.",
    keywords: ["incendios", "prevención de incendios", "combate de fuego"],
    articleIds: [1, 71]
  },
  "derrames químicos": {
    explanation: "Liberación accidental de sustancias que afectan a biodiversidad.",
    keywords: ["contaminación química", "derrames tóxicos", "emergencias químicas"],
    articleIds: [108]
  },
  "invasiones biológicas": {
    explanation: "Llegada masiva de especies exóticas que amenazan ecosistemas.",
    keywords: ["invasiones biológicas", "plagas emergentes", "especies invasoras"],
    articleIds: [45]
  },
  
  // 76. TEMAS DE RESTAURACIÓN
  "restauración de ecosistemas": {
    explanation: "Procesos para recuperar ecosistemas degradados a condiciones originales.",
    keywords: ["recuperación ecológica", "rehabilitación ambiental", "restauración de hábitats"],
    articleIds: [24, 33, 38]
  },
  "técnicas de restauración": {
    explanation: "Métodos utilizados para restaurar ecosistemas degradados.",
    keywords: ["métodos de restauración", "técnicas de rehabilitación", "intervenciones ecológicas"],
    articleIds: [33]
  },
  "monitoreo de restauración": {
    explanation: "Seguimiento de avances en proyectos de restauración ecológica.",
    keywords: ["evaluación de restauración", "seguimiento ecológico", "indicadores de recuperación"],
    articleIds: [33]
  },
  "participación comunitaria en restauración": {
    explanation: "Involucramiento de comunidades locales en proyectos de restauración.",
    keywords: ["restauración participativa", "comunidades locales", "voluntariado ecológico"],
    articleIds: [33]
  },
  "financiamiento de restauración": {
    explanation: "Mecanismos económicos para proyectos de restauración ecológica.",
    keywords: ["fondos de restauración", "inversión ecológica", "financiamiento ambiental"],
    articleIds: [33, 46]
  },
  
  // 77. TEMAS DE ESPECIES
  "conservación de especies": {
    explanation: "Medidas para proteger especies amenazadas y sus hábitats.",
    keywords: ["protección de especies", "conservación de fauna", "conservación de flora"],
    articleIds: [42, 43, 44]
  },
  "recuperación de poblaciones": {
    explanation: "Acciones para aumentar poblaciones de especies amenazadas.",
    keywords: ["repoblamiento", "recuperación de especies", "aumento poblacional"],
    articleIds: [42, 43]
  },
  "manejo de hábitats": {
    explanation: "Intervenciones para mejorar condiciones de hábitats de especies.",
    keywords: ["mejora de hábitats", "manejo de ecosistemas", "gestión de ambientes"],
    articleIds: [42, 43]
  },
  "control de amenazas": {
    explanation: "Medidas para reducir factores que amenazan a especies.",
    keywords: ["reducción de amenazas", "control de riesgos", "mitigación de peligros"],
    articleIds: [42, 43, 45]
  },
  "monitoreo de especies": {
    explanation: "Seguimiento de poblaciones y estado de conservación de especies.",
    keywords: ["seguimiento de especies", "monitoreo poblacional", "evaluación de estado"],
    articleIds: [25, 42]
  },
  
  // 78. TEMAS DE ÁREAS PROTEGIDAS
  "categorías de protección": {
    explanation: "Clasificación de áreas protegidas según objetivos de conservación.",
    keywords: ["tipos de protección", "categorías de áreas", "niveles de conservación"],
    articleIds: [56]
  },
  "objetos de conservación": {
    explanation: "Elementos específicos que se busca proteger en un área.",
    keywords: ["objetivos de protección", "elementos a conservar", "valores a proteger"],
    articleIds: [64, 72]
  },
  "límites de áreas protegidas": {
    explanation: "Delimitación geográfica de áreas protegidas.",
    keywords: ["deslindes", "límites geográficos", "perímetros protegidos"],
    articleIds: [64, 65]
  },
  "declaratoria de áreas": {
    explanation: "Proceso legal para establecer nuevas áreas protegidas.",
    keywords: ["creación de áreas", "declaratoria oficial", "establecimiento de protección"],
    articleIds: [64, 65]
  },
  "manejo de áreas protegidas": {
    explanation: "Conjunto de acciones para administrar y conservar áreas protegidas.",
    keywords: ["gestión de áreas", "administración de parques", "manejo de reservas"],
    articleIds: [67, 71, 72]
  },
  
  // 79. TEMAS DE PARTICIPACIÓN CIUDADANA
  "voluntariado ambiental": {
    explanation: "Participación de ciudadanos en actividades de conservación.",
    keywords: ["voluntarios ecológicos", "participación ciudadana", "trabajo voluntario"],
    articleIds: [54]
  },
  "ciudadanía ambiental": {
    explanation: "Formación de ciudadanos comprometidos con conservación de biodiversidad.",
    keywords: ["ciudadanos ecológicos", "conciencia cívica", "compromiso ambiental"],
    articleIds: [2, 54]
  },
  "observadores ciudadanos": {
    explanation: "Personas que reportan información sobre estado de biodiversidad.",
    keywords: ["vigilancia ciudadana", "reportes ambientales", "observadores ecológicos"],
    articleIds: [25]
  },
  "educación no formal": {
    explanation: "Actividades educativas fuera de sistema formal para concienciar sobre biodiversidad.",
    keywords: ["educación informal", "divulgación ambiental", "sensibilización ecológica"],
    articleIds: [5, 50, 76]
  },
  "comités comunitarios": {
    explanation: "Grupos de ciudadanos que participan en gestión de áreas protegidas.",
    keywords: ["comités locales", "grupos comunitarios", "organizaciones vecinales"],
    articleIds: [55, 68]
  },
  
  // 80. TEMAS DE TURISMO SOSTENIBLE
  "capacidad de carga": {
    explanation: "Número máximo de visitantes que un área puede soportar sin deteriorarse.",
    keywords: ["límite de visitantes", "capacidad de acogida", "tolerancia de uso"],
    articleIds: [72]
  },
  "turismo de bajo impacto": {
    explanation: "Turismo con mínimo impacto en áreas naturales protegidas.",
    keywords: ["turismo mínimo impacto", "visitas controladas", "turismo no masivo"],
    articleIds: [58]
  },
  "guías locales": {
    explanation: "Personas de comunidades locales que guían a visitantes en áreas protegidas.",
    keywords: ["guías comunitarios", "turismo local", "interpretación local"],
    articleIds: [50, 80]
  },
  "infraestructura turística": {
    explanation: "Instalaciones para recibir visitantes en áreas protegidas.",
    keywords: ["instalaciones turísticas", "infraestructura de parques", "servicios para visitantes"],
    articleIds: [79, 80]
  },
  "gestión de visitantes": {
    explanation: "Conjunto de acciones para administrar flujo de turistas en áreas protegidas.",
    keywords: ["manejo de turismo", "administración de visitantes", "gestión de público"],
    articleIds: [67, 72]
  },
  
  // 81. TEMAS DE INVESTIGACIÓN CIENTÍFICA
  "líneas de investigación": {
    explanation: "Temas prioritarios de investigación en biodiversidad.",
    keywords: ["prioridades de investigación", "temas de estudio", "líneas científicas"],
    articleIds: [5, 25]
  },
  "estudios de biodiversidad": {
    explanation: "Investigaciones para conocer composición y estado de biodiversidad.",
    keywords: ["inventarios biológicos", "estudios ecológicos", "investigación de biodiversidad"],
    articleIds: [24, 25]
  },
  "monitoreo científico": {
    explanation: "Seguimiento sistemático de variables ecológicas para evaluar estado de biodiversidad.",
    keywords: ["seguimiento ecológico", "monitoreo ambiental", "evaluación científica"],
    articleIds: [25]
  },
  "publicaciones científicas": {
    explanation: "Difusión de resultados de investigaciones sobre biodiversidad.",
    keywords: ["divulgación científica", "artículos técnicos", "publicaciones ambientales"],
    articleIds: [5]
  },
  "cooperación científica": {
    explanation: "Colaboración entre instituciones para investigación en biodiversidad.",
    keywords: ["colaboración académica", "investigación conjunta", "cooperación técnica"],
    articleIds: [5, 25]
  },
  
  // 82. TEMAS DE GESTIÓN INTEGRAL
  "manejo adaptativo": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["gestión flexible", "aprendizaje organizacional", "manejo adaptativo"],
    articleIds: [20, 71]
  },
  "gestión ecosistémica": {
    explanation: "Enfoque que considera ecosistemas completos en lugar de especies individuales.",
    keywords: ["manejo ecosistémico", "gestión integral", "enfoque sistémico"],
    articleIds: [23]
  },
  "planificación estratégica": {
    explanation: "Definición de objetivos y estrategias a largo plazo para conservación.",
    keywords: ["planificación a largo plazo", "estrategias de conservación", "visión de futuro"],
    articleIds: [55]
  },
  "evaluación de gestión": {
    explanation: "Medición de eficiencia y eficacia de acciones de conservación.",
    keywords: ["evaluación de eficiencia", "medición de resultados", "análisis de gestión"],
    articleIds: [55]
  },
  "retroalimentación de procesos": {
    explanation: "Mecanismos para aprender de experiencias y mejorar gestión.",
    keywords: ["aprendizaje organizacional", "mejora continua", "retroalimentación"],
    articleIds: [55]
  },
  
  // 83. TEMAS DE FINANCIAMIENTO
  "fondo nacional de biodiversidad": {
    explanation: "Fondo para financiar proyectos de conservación fuera de áreas protegidas.",
    keywords: ["financiamiento ambiental", "fondos de conservación", "inversión ecológica"],
    articleIds: [46, 47, 48, 49]
  },
  "incentivos fiscales": {
    explanation: "Beneficios tributarios para promover conservación de biodiversidad.",
    keywords: ["exenciones tributarias", "incentivos fiscales", "beneficios impositivos"],
    articleIds: [105]
  },
  "pago por servicios ambientales": {
    explanation: "Esquemas donde se paga a quienes conservan servicios ecosistémicos.",
    keywords: ["compensación por servicios", "incentivos ecológicos", "valoración de servicios"],
    articleIds: [52]
  },
  "mercados verdes": {
    explanation: "Sistemas donde se comercializan productos de biodiversidad sostenible.",
    keywords: ["comercio ecológico", "mercados sostenibles", "productos verdes"],
    articleIds: [50]
  },
  "inversión privada": {
    explanation: "Aportes de empresas y particulares a proyectos de conservación.",
    keywords: ["financiamiento privado", "inversión empresarial", "aportes particulares"],
    articleIds: [46, 50]
  },
  
  // 84. TEMAS DE TECNOLOGÍA E INNOVACIÓN
  "tecnologías limpias": {
    explanation: "Tecnologías con mínimo impacto ambiental para gestión de biodiversidad.",
    keywords: ["tecnologías verdes", "innovación limpia", "tecnologías sostenibles"],
    articleIds: [24]
  },
  "aplicaciones móviles": {
    explanation: "Herramientas digitales para monitoreo y educación sobre biodiversidad.",
    keywords: ["apps ambientales", "aplicaciones móviles", "herramientas digitales"],
    articleIds: [24]
  },
  "sensores ambientales": {
    explanation: "Dispositivos para recolectar datos ambientales en tiempo real.",
    keywords: ["monitoreo ambiental", "sensores ecológicos", "dispositivos de medición"],
    articleIds: [24, 25]
  },
  "inteligencia artificial": {
    explanation: "Aplicación de IA en análisis de datos de biodiversidad.",
    keywords: ["IA ambiental", "análisis automatizado", "machine learning ecológico"],
    articleIds: [24]
  },
  "blockchain ambiental": {
    explanation: "Uso de tecnología blockchain para transparencia en gestión ambiental.",
    keywords: ["cadena de bloques", "transparencia digital", "gestión blockchain"],
    articleIds: [24]
  },
  
  // 85. TEMAS DE CAMBIO CLIMÁTICO
  "mitigación climática": {
    explanation: "Medidas para reducir emisiones de gases de efecto invernadero.",
    keywords: ["reducción de emisiones", "mitigación de cambio climático", "acciones climáticas"],
    articleIds: [54]
  },
  "adaptación climática": {
    explanation: "Medidas para adaptarse a impactos del cambio climático.",
    keywords: ["adaptación al cambio", "resiliencia climática", "ajustes climáticos"],
    articleIds: [54]
  },
  "servicios de regulación climática": {
    explanation: "Funciones de ecosistemas que regulan clima.",
    keywords: ["regulación climática", "servicios climáticos", "funciones ecosistémicas"],
    articleIds: [2, 54]
  },
  "vulnerabilidad climática": {
    explanation: "Evaluación de cómo afecta el cambio climático a ecosistemas y especies.",
    keywords: ["impactos climáticos", "vulnerabilidad ecológica", "adaptación al cambio"],
    articleIds: [25, 54]
  },
  "soluciones basadas en naturaleza": {
    explanation: "Acciones que usan ecosistemas para enfrentar desafíos sociales.",
    keywords: ["soluciones naturales", "enfoques ecosistémicos", "acciones basadas en naturaleza"],
    articleIds: [54]
  },
  
  // 86. TEMAS DE PARTICIPACIÓN INDÍGENA
  "consulta indígena": {
    explanation: "Proceso de consulta a pueblos indígenas para medidas que les afecten.",
    keywords: ["participación indígena", "consulta previa", "diálogo intercultural"],
    articleIds: [65, 80]
  },
  "consentimiento libre informado": {
    explanation: "Aprobación de comunidades después de recibir información completa.",
    keywords: ["consentimiento informado", "aprobación comunitaria", "decisión autónoma"],
    articleIds: [65, 80]
  },
  "conocimientos tradicionales": {
    explanation: "Saberes de comunidades indígenas relevantes para conservación.",
    keywords: ["saberes ancestrales", "conocimiento local", "tradiciones ecológicas"],
    articleIds: [2, 62]
  },
  "territorios indígenas": {
    explanation: "Tierras de pueblos indígenas y su relación con biodiversidad.",
    keywords: ["tierras indígenas", "territorios ancestrales", "comunidades originarias"],
    articleIds: [62]
  },
  "gestión indígena": {
    explanation: "Manejo de recursos naturales por comunidades indígenas.",
    keywords: ["manejo ancestral", "gestión tradicional", "administración indígena"],
    articleIds: [62]
  },
  
  // 87. TEMAS DE EDUCACIÓN AMBIENTAL
  "currículo escolar": {
    explanation: "Incorporación de biodiversidad en programas educativos formales.",
    keywords: ["educación formal", "currículo ecológico", "enseñanza ambiental"],
    articleIds: [5, 50]
  },
  "material didáctico": {
    explanation: "Recursos para enseñanza sobre conservación de biodiversidad.",
    keywords: ["recursos educativos", "material pedagógico", "herramientas didácticas"],
    articleIds: [5, 50]
  },
  "formación docente": {
    explanation: "Capacitación a profesores para enseñar sobre biodiversidad.",
    keywords: ["capacitación docente", "formación de educadores", "actualización pedagógica"],
    articleIds: [5, 50]
  },
  "programas escolares": {
    explanation: "Iniciativas para incorporar educación ambiental en establecimientos educativos.",
    keywords: ["programas educativos", "iniciativas escolares", "proyectos ecológicos"],
    articleIds: [5, 50]
  },
  "educación no formal": {
    explanation: "Actividades educativas fuera de sistema formal para concienciar sobre biodiversidad.",
    keywords: ["educación informal", "divulgación ambiental", "sensibilización ecológica"],
    articleIds: [5, 50, 76]
  },
  
  // 88. TEMAS DE COMUNICACIÓN
  "estrategias de comunicación": {
    explanation: "Planes para difundir información sobre biodiversidad.",
    keywords: ["comunicación ambiental", "difusión ecológica", "estrategias informativas"],
    articleIds: [5, 50]
  },
  "periodismo ambiental": {
    explanation: "Cobertura mediática de temas relacionados con biodiversidad.",
    keywords: ["medios de comunicación", "periodismo ecológico", "información ambiental"],
    articleIds: [5, 50]
  },
  "redes sociales": {
    explanation: "Uso de plataformas digitales para difundir mensajes de conservación.",
    keywords: ["comunicación digital", "redes sociales", "divulgación online"],
    articleIds: [5, 50]
  },
  "campañas de sensibilización": {
    explanation: "Iniciativas para concienciar a público sobre importancia de biodiversidad.",
    keywords: ["campañas ecológicas", "sensibilización pública", "concientización masiva"],
    articleIds: [5, 50]
  },
  "alianzas comunicacionales": {
    explanation: "Colaboración con medios y comunicadores para difundir mensajes de conservación.",
    keywords: ["alianzas estratégicas", "colaboración mediática", "redes de comunicación"],
    articleIds: [5, 50]
  },
  
  // 89. TEMAS DE SALUD Y BIENESTAR
  "salud humana": {
    explanation: "Relación entre conservación de biodiversidad y salud humana.",
    keywords: ["salud ambiental", "bienestar humano", "salud ecosistémica"],
    articleIds: [2]
  },
  "servicios de salud ecosistémicos": {
    explanation: "Contribución de ecosistemas a prevención de enfermedades y bienestar.",
    keywords: ["servicios de salud", "prevención de enfermedades", "bienestar ecológico"],
    articleIds: [2]
  },
  "medicina tradicional": {
    explanation: "Uso de recursos naturales con fines medicinales por comunidades locales.",
    keywords: ["plantas medicinales", "conocimientos tradicionales", "remedios naturales"],
    articleIds: [2, 62]
  },
  "seguridad alimentaria": {
    explanation: "Relación entre biodiversidad y disponibilidad de alimentos.",
    keywords: ["alimentación sostenible", "seguridad alimentaria", "diversidad de cultivos"],
    articleIds: [2]
  },
  "bienestar humano": {
    explanation: "Contribución de biodiversidad a calidad de vida de personas.",
    keywords: ["calidad de vida", "bienestar social", "beneficios humanos"],
    articleIds: [2]
  },
  
  // 90. TEMAS DE CULTURA Y PATRIMONIO
  "patrimonio cultural asociado": {
    explanation: "Elementos culturales vinculados a áreas naturales y biodiversidad.",
    keywords: ["patrimonio cultural", "legado cultural", "valores culturales"],
    articleIds: [35, 53]
  },
  "conservación biocultural": {
    explanation: "Enfoque que integra conservación de biodiversidad y cultura.",
    keywords: ["enfoque biocultural", "conservación integral", "naturaleza y cultura"],
    articleIds: [35, 62]
  },
  "identidad territorial": {
    explanation: "Vínculo entre comunidades y su entorno natural.",
    keywords: ["identidad local", "pertenencia territorial", "raíces ecológicas"],
    articleIds: [35, 62]
  },
  "manifestaciones culturales": {
    explanation: "Expresiones culturales relacionadas con biodiversidad.",
    keywords: ["expresiones culturales", "manifestaciones tradicionales", "folklore ecológico"],
    articleIds: [35, 62]
  },
  "turismo cultural": {
    explanation: "Actividades turísticas que combinan naturaleza y cultura.",
    keywords: ["turismo cultural", "visitas culturales", "patrimonio natural y cultural"],
    articleIds: [35, 80]
  },
  
  // 91. TEMAS DE DESARROLLO SOSTENIBLE
  "desarrollo sostenible": {
    explanation: "Modelo de desarrollo que integra conservación de biodiversidad.",
    keywords: ["desarrollo sustentable", "progreso sostenible", "crecimiento verde"],
    articleIds: [1, 36]
  },
  "economía verde": {
    explanation: "Modelo económico que valora y conserva capital natural.",
    keywords: ["economía ecológica", "crecimiento verde", "capital natural"],
    articleIds: [50, 52]
  },
  "empleo verde": {
    explanation: "Puestos de trabajo generados por actividades de conservación.",
    keywords: ["trabajos verdes", "empleo ambiental", "ocupaciones ecológicas"],
    articleIds: [50]
  },
  "desarrollo local": {
    explanation: "Proyectos de desarrollo que involucran a comunidades locales.",
    keywords: ["desarrollo comunitario", "progresos locales", "iniciativas territoriales"],
    articleIds: [35, 50]
  },
  "inversión sostenible": {
    explanation: "Asignación de recursos a proyectos que generan beneficios ambientales y sociales.",
    keywords: ["inversión responsable", "financiamiento sostenible", "capital consciente"],
    articleIds: [46, 50]
  },
  
  // 92. TEMAS DE GOBERNANZA
  "gobernanza ambiental": {
    explanation: "Sistema de toma de decisiones en gestión de biodiversidad.",
    keywords: ["gobierno ambiental", "toma de decisiones", "gestión pública"],
    articleIds: [2, 54]
  },
  "descentralización": {
    explanation: "Transferencia de competencias a nivel regional y local.",
    keywords: ["descentralización política", "gestión regional", "competencias locales"],
    articleIds: [8, 55]
  },
  "coordinación interinstitucional": {
    explanation: "Trabajo conjunto entre diferentes organismos públicos.",
    keywords: ["trabajo intersectorial", "coordinación pública", "gestión conjunta"],
    articleIds: [2, 5]
  },
  "rendición de cuentas": {
    explanation: "Mecanismos para que instituciones rindan cuenta sobre su gestión.",
    keywords: ["transparencia", "responsabilidad pública", "informes de gestión"],
    articleIds: [55]
  },
  "corresponsabilidad": {
    explanation: "Compromiso compartido entre Estado, sociedad y sector privado en conservación.",
    keywords: ["responsabilidad compartida", "compromiso conjunto", "alianzas multiactor"],
    articleIds: [50, 54]
  },
  
  // 93. TEMAS DE CONFLICTOS
  "conflictos socioambientales": {
    explanation: "Disputas relacionadas con uso de recursos naturales y conservación.",
    keywords: ["conflictos ambientales", "disputas socioambientales", "tensiones territoriales"],
    articleIds: [28, 63]
  },
  "resolución de conflictos": {
    explanation: "Mecanismos para solucionar disputas relacionadas con biodiversidad.",
    keywords: ["mediación ambiental", "solución de conflictos", "negociación ecológica"],
    articleIds: [68]
  },
  "partes interesadas": {
    explanation: "Actores involucrados o afectados por decisiones sobre biodiversidad.",
    keywords: ["stakeholders", "actores relevantes", "grupos de interés"],
    articleIds: [65, 74]
  },
  "consulta previa": {
    explanation: "Proceso de consulta a comunidades antes de implementar proyectos.",
    keywords: ["diálogo previo", "consulta comunitaria", "participación anticipada"],
    articleIds: [65, 80]
  },
  "consentimiento libre informado": {
    explanation: "Aprobación de comunidades después de recibir información completa.",
    keywords: ["consentimiento informado", "aprobación comunitaria", "decisión autónoma"],
    articleIds: [65, 80]
  },
  
  // 94. TEMAS DE MONITOREO Y EVALUACIÓN
  "monitoreo de la implementación": {
    explanation: "Seguimiento de avances en aplicación de la ley y sus instrumentos.",
    keywords: ["seguimiento de políticas", "evaluación de implementación", "monitoreo normativo"],
    articleIds: [55]
  },
  "evaluación de impacto": {
    explanation: "Análisis de efectos de proyectos y actividades sobre biodiversidad.",
    keywords: ["evaluación ambiental", "análisis de impacto", "estudio de efectos"],
    articleIds: [5, 38]
  },
  "auditorías ambientales": {
    explanation: "Revisiones independientes de gestión ambiental del Servicio.",
    keywords: ["evaluación externa", "auditoría ecológica", "revisión de gestión"],
    articleIds: [55]
  },
  "indicadores de desempeño": {
    explanation: "Parámetros para medir eficiencia y eficacia de gestión.",
    keywords: ["métricas de gestión", "indicadores de eficiencia", "parámetros de evaluación"],
    articleIds: [15, 55]
  },
  "sistemas de evaluación": {
    explanation: "Metodologías para evaluar resultados de conservación.",
    keywords: ["evaluación sistemática", "metodologías de evaluación", "análisis de resultados"],
    articleIds: [15, 55]
  },
  
  // 95. TEMAS DE TECNOLOGÍA
  "tecnologías de información": {
    explanation: "Uso de TIC en gestión de biodiversidad.",
    keywords: ["TIC ambiental", "tecnología digital", "informática ecológica"],
    articleIds: [24]
  },
  "sistemas de monitoreo remoto": {
    explanation: "Uso de sensores y equipos remotos para recolectar datos ambientales.",
    keywords: ["monitoreo remoto", "sensores ambientales", "teledetección"],
    articleIds: [24, 25]
  },
  "plataformas digitales": {
    explanation: "Herramientas online para gestión y difusión de información sobre biodiversidad.",
    keywords: ["plataformas online", "herramientas digitales", "portales ambientales"],
    articleIds: [24]
  },
  "modelos predictivos": {
    explanation: "Herramientas para predecir cambios en ecosistemas y biodiversidad.",
    keywords: ["modelos ecológicos", "simulación ambiental", "proyecciones ecosistémicas"],
    articleIds: [25]
  },
  "big data ambiental": {
    explanation: "Análisis de grandes volúmenes de datos ambientales.",
    keywords: ["análisis de datos", "macrodatos ambientales", "data science ecológico"],
    articleIds: [24]
  },
  
  // 96. TEMAS DE RESILIENCIA
  "resiliencia ecológica": {
    explanation: "Capacidad de ecosistemas para recuperarse ante perturbaciones.",
    keywords: ["resistencia ecológica", "recuperación de ecosistemas", "adaptación ecosistémica"],
    articleIds: [33]
  },
  "resiliencia climática": {
    explanation: "Capacidad de ecosistemas para adaptarse al cambio climático.",
    keywords: ["adaptación climática", "resistencia al cambio", "resiliencia ecosistémica"],
    articleIds: [54]
  },
  "recuperación de ecosistemas": {
    explanation: "Procesos para restaurar funciones y estructura de ecosistemas degradados.",
    keywords: ["restauración ecológica", "recuperación de hábitats", "rehabilitación ambiental"],
    articleIds: [33]
  },
  "manejo adaptativo": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["gestión flexible", "aprendizaje organizacional", "manejo adaptativo"],
    articleIds: [20, 71]
  },
  "conservación proactiva": {
    explanation: "Medidas preventivas para evitar degradación de ecosistemas.",
    keywords: ["prevención de daños", "conservación preventiva", "medidas proactivas"],
    articleIds: [2, 45]
  },
  
  // 97. TEMAS DE JUSTICIA AMBIENTAL
  "justicia ambiental": {
    explanation: "Distribución equitativa de beneficios y cargas ambientales.",
    keywords: ["equidad ambiental", "justicia ecológica", "distribución justa"],
    articleIds: [54]
  },
  "acceso a la información": {
    explanation: "Derecho a obtener información sobre biodiversidad y gestión ambiental.",
    keywords: ["transparencia", "acceso a datos", "información pública"],
    articleIds: [2, 24]
  },
  "participación efectiva": {
    explanation: "Involucramiento significativo de ciudadanos en decisiones ambientales.",
    keywords: ["participación real", "inclusión efectiva", "decisión compartida"],
    articleIds: [2, 54]
  },
  "acceso a la justicia": {
    explanation: "Mecanismos para resolver disputas ambientales.",
    keywords: ["justicia ambiental", "resolución de conflictos", "tribunales ambientales"],
    articleIds: [134, 135, 136, 137, 138, 139]
  },
  "protección de defensores": {
    explanation: "Medidas para proteger a personas que defienden biodiversidad.",
    keywords: ["defensores ambientales", "protección de activistas", "seguridad ecológica"],
    articleIds: [54]
  },
  
  // 98. TEMAS DE COOPERACIÓN
  "cooperación internacional": {
    explanation: "Colaboración entre países para conservación de biodiversidad.",
    keywords: ["colaboración global", "cooperación ambiental", "acuerdos internacionales"],
    articleIds: [10, 49, 55]
  },
  "convenios internacionales": {
    explanation: "Acuerdos con organismos internacionales para conservación.",
    keywords: ["tratados ambientales", "acuerdos globales", "convenios internacionales"],
    articleIds: [36, 37]
  },
  "proyectos binacionales": {
    explanation: "Iniciativas de conservación entre países fronterizos.",
    keywords: ["proyectos transfronterizos", "iniciativas binacionales", "cooperación regional"],
    articleIds: [55]
  },
  "intercambio de experiencias": {
    explanation: "Compartir conocimientos y buenas prácticas entre países.",
    keywords: ["intercambio técnico", "buenas prácticas", "lecciones aprendidas"],
    articleIds: [55]
  },
  "financiamiento internacional": {
    explanation: "Recursos de organismos internacionales para proyectos de conservación.",
    keywords: ["fondos globales", "financiamiento externo", "ayuda internacional"],
    articleIds: [10, 49]
  },
  
  // 99. TEMAS DE EMERGENCIAS
  "contingencias ambientales": {
    explanation: "Situaciones de emergencia que afectan a biodiversidad.",
    keywords: ["emergencias ecológicas", "contingencias ambientales", "crisis ambientales"],
    articleIds: [71]
  },
  "planes de contingencia": {
    explanation: "Protocolos para responder a emergencias ambientales.",
    keywords: ["protocolos de emergencia", "planes de respuesta", "contingencias ecológicas"],
    articleIds: [71]
  },
  "incendios forestales": {
    explanation: "Fuegos que afectan ecosistemas y medidas para prevenirlos y combatirlos.",
    keywords: ["incendios", "prevención de incendios", "combate de fuego"],
    articleIds: [1, 71]
  },
  "derrames químicos": {
    explanation: "Liberación accidental de sustancias que afectan a biodiversidad.",
    keywords: ["contaminación química", "derrames tóxicos", "emergencias químicas"],
    articleIds: [108]
  },
  "invasiones biológicas": {
    explanation: "Llegada masiva de especies exóticas que amenazan ecosistemas.",
    keywords: ["invasiones biológicas", "plagas emergentes", "especies invasoras"],
    articleIds: [45]
  },
  
  // 100. TEMAS DE RESTAURACIÓN
  "restauración de ecosistemas": {
    explanation: "Procesos para recuperar ecosistemas degradados a condiciones originales.",
    keywords: ["recuperación ecológica", "rehabilitación ambiental", "restauración de hábitats"],
    articleIds: [24, 33, 38]
  },
  "técnicas de restauración": {
    explanation: "Métodos utilizados para restaurar ecosistemas degradados.",
    keywords: ["métodos de restauración", "técnicas de rehabilitación", "intervenciones ecológicas"],
    articleIds: [33]
  },
  "monitoreo de restauración": {
    explanation: "Seguimiento de avances en proyectos de restauración ecológica.",
    keywords: ["evaluación de restauración", "seguimiento ecológico", "indicadores de recuperación"],
    articleIds: [33]
  },
  "participación comunitaria en restauración": {
    explanation: "Involucramiento de comunidades locales en proyectos de restauración.",
    keywords: ["restauración participativa", "comunidades locales", "voluntariado ecológico"],
    articleIds: [33]
  },
  "financiamiento de restauración": {
    explanation: "Mecanismos económicos para proyectos de restauración ecológica.",
    keywords: ["fondos de restauración", "inversión ecológica", "financiamiento ambiental"],
    articleIds: [33, 46]
  },
  
  // 101. TEMAS DE ESPECIES
  "conservación de especies": {
    explanation: "Medidas para proteger especies amenazadas y sus hábitats.",
    keywords: ["protección de especies", "conservación de fauna", "conservación de flora"],
    articleIds: [42, 43, 44]
  },
  "recuperación de poblaciones": {
    explanation: "Acciones para aumentar poblaciones de especies amenazadas.",
    keywords: ["repoblamiento", "recuperación de especies", "aumento poblacional"],
    articleIds: [42, 43]
  },
  "manejo de hábitats": {
    explanation: "Intervenciones para mejorar condiciones de hábitats de especies.",
    keywords: ["mejora de hábitats", "manejo de ecosistemas", "gestión de ambientes"],
    articleIds: [42, 43]
  },
  "control de amenazas": {
    explanation: "Medidas para reducir factores que amenazan a especies.",
    keywords: ["reducción de amenazas", "control de riesgos", "mitigación de peligros"],
    articleIds: [42, 43, 45]
  },
  "monitoreo de especies": {
    explanation: "Seguimiento de poblaciones y estado de conservación de especies.",
    keywords: ["seguimiento de especies", "monitoreo poblacional", "evaluación de estado"],
    articleIds: [25, 42]
  },
  
  // 102. TEMAS DE ÁREAS PROTEGIDAS
  "categorías de protección": {
    explanation: "Clasificación de áreas protegidas según objetivos de conservación.",
    keywords: ["tipos de protección", "categorías de áreas", "niveles de conservación"],
    articleIds: [56]
  },
  "objetos de conservación": {
    explanation: "Elementos específicos que se busca proteger en un área.",
    keywords: ["objetivos de protección", "elementos a conservar", "valores a proteger"],
    articleIds: [64, 72]
  },
  "límites de áreas protegidas": {
    explanation: "Delimitación geográfica de áreas protegidas.",
    keywords: ["deslindes", "límites geográficos", "perímetros protegidos"],
    articleIds: [64, 65]
  },
  "declaratoria de áreas": {
    explanation: "Proceso legal para establecer nuevas áreas protegidas.",
    keywords: ["creación de áreas", "declaratoria oficial", "establecimiento de protección"],
    articleIds: [64, 65]
  },
  "manejo de áreas protegidas": {
    explanation: "Conjunto de acciones para administrar y conservar áreas protegidas.",
    keywords: ["gestión de áreas", "administración de parques", "manejo de reservas"],
    articleIds: [67, 71, 72]
  },
  
  // 103. TEMAS DE PARTICIPACIÓN CIUDADANA
  "voluntariado ambiental": {
    explanation: "Participación de ciudadanos en actividades de conservación.",
    keywords: ["voluntarios ecológicos", "participación ciudadana", "trabajo voluntario"],
    articleIds: [54]
  },
  "ciudadanía ambiental": {
    explanation: "Formación de ciudadanos comprometidos con conservación de biodiversidad.",
    keywords: ["ciudadanos ecológicos", "conciencia cívica", "compromiso ambiental"],
    articleIds: [2, 54]
  },
  "observadores ciudadanos": {
    explanation: "Personas que reportan información sobre estado de biodiversidad.",
    keywords: ["vigilancia ciudadana", "reportes ambientales", "observadores ecológicos"],
    articleIds: [25]
  },
  "educación no formal": {
    explanation: "Actividades educativas fuera de sistema formal para concienciar sobre biodiversidad.",
    keywords: ["educación informal", "divulgación ambiental", "sensibilización ecológica"],
    articleIds: [5, 50, 76]
  },
  "comités comunitarios": {
    explanation: "Grupos de ciudadanos que participan en gestión de áreas protegidas.",
    keywords: ["comités locales", "grupos comunitarios", "organizaciones vecinales"],
    articleIds: [55, 68]
  },
  
  // 104. TEMAS DE TURISMO SOSTENIBLE
  "capacidad de carga": {
    explanation: "Número máximo de visitantes que un área puede soportar sin deteriorarse.",
    keywords: ["límite de visitantes", "capacidad de acogida", "tolerancia de uso"],
    articleIds: [72]
  },
  "turismo de bajo impacto": {
    explanation: "Turismo con mínimo impacto en áreas naturales protegidas.",
    keywords: ["turismo mínimo impacto", "visitas controladas", "turismo no masivo"],
    articleIds: [58]
  },
  "guías locales": {
    explanation: "Personas de comunidades locales que guían a visitantes en áreas protegidas.",
    keywords: ["guías comunitarios", "turismo local", "interpretación local"],
    articleIds: [50, 80]
  },
  "infraestructura turística": {
    explanation: "Instalaciones para recibir visitantes en áreas protegidas.",
    keywords: ["instalaciones turísticas", "infraestructura de parques", "servicios para visitantes"],
    articleIds: [79, 80]
  },
  "gestión de visitantes": {
    explanation: "Conjunto de acciones para administrar flujo de turistas en áreas protegidas.",
    keywords: ["manejo de turismo", "administración de visitantes", "gestión de público"],
    articleIds: [67, 72]
  },
  
  // 105. TEMAS DE INVESTIGACIÓN CIENTÍFICA
  "líneas de investigación": {
    explanation: "Temas prioritarios de investigación en biodiversidad.",
    keywords: ["prioridades de investigación", "temas de estudio", "líneas científicas"],
    articleIds: [5, 25]
  },
  "estudios de biodiversidad": {
    explanation: "Investigaciones para conocer composición y estado de biodiversidad.",
    keywords: ["inventarios biológicos", "estudios ecológicos", "investigación de biodiversidad"],
    articleIds: [24, 25]
  },
  "monitoreo científico": {
    explanation: "Seguimiento sistemático de variables ecológicas para evaluar estado de biodiversidad.",
    keywords: ["seguimiento ecológico", "monitoreo ambiental", "evaluación científica"],
    articleIds: [25]
  },
  "publicaciones científicas": {
    explanation: "Difusión de resultados de investigaciones sobre biodiversidad.",
    keywords: ["divulgación científica", "artículos técnicos", "publicaciones ambientales"],
    articleIds: [5]
  },
  "cooperación científica": {
    explanation: "Colaboración entre instituciones para investigación en biodiversidad.",
    keywords: ["colaboración académica", "investigación conjunta", "cooperación técnica"],
    articleIds: [5, 25]
  },
  
  // 106. TEMAS DE GESTIÓN INTEGRAL
  "manejo adaptativo": {
    explanation: "Enfoque de gestión que incorpora aprendizaje y ajustes continuos.",
    keywords: ["gestión flexible", "aprendizaje organizacional", "manejo adaptativo"],
    articleIds: [20, 71]
  },
  "gestión ecosistémica": {
    explanation: "Enfoque que considera ecosistemas completos en lugar de especies individuales.",
    keywords: ["manejo ecosistémico", "gestión integral", "enfoque sistémico"],
    articleIds: [23]
  },
  "planificación estratégica": {
    explanation: "Definición de objetivos y estrategias a largo plazo para conservación.",
    keywords: ["planificación a largo plazo", "estrategias de conservación", "visión de futuro"],
    articleIds: [55]
  },
  "evaluación de gestión": {
    explanation: "Medición de eficiencia y eficacia de acciones de conservación.",
    keywords: ["evaluación de eficiencia", "medición de resultados", "análisis de gestión"],
    articleIds: [55]
  },
  "retroalimentación de procesos": {
    explanation: "Mecanismos para aprender de experiencias y mejorar gestión.",
    keywords: ["aprendizaje organizacional", "mejora continua", "retroalimentación"],
    articleIds: [55]
  },
  
  // 107. TEMAS DE FINANCIAMIENTO
  "fondo nacional de biodiversidad": {
    explanation: "Fondo para financiar proyectos de conservación fuera de áreas protegidas.",
    keywords: ["financiamiento ambiental", "fondos de conservación", "inversión ecológica"],
    articleIds: [46, 47, 48, 49]
  },
  "incentivos fiscales": {
    explanation: "Beneficios tributarios para promover conservación de biodiversidad.",
    keywords: ["exenciones tributarias", "incentivos fiscales", "beneficios impositivos"],
    articleIds: [105]
  },
  "pago por servicios ambientales": {
    explanation: "Esquemas donde se paga a quienes conservan servicios ecosistémicos.",
    keywords: ["compensación por servicios", "incentivos ecológicos", "valoración de servicios"],
    articleIds: [52]
  },
  "mercados verdes": {
    explanation: "Sistemas donde se comercializan productos de biodiversidad sostenible.",
    keywords: ["comercio ecológico", "mercados sostenibles", "productos verdes"],
    articleIds: [50]
  },
  "inversión privada": {
    explanation: "Aportes de empresas y particulares a proyectos de conservación.",
    keywords: ["financiamiento privado", "inversión empresarial", "aportes particulares"],
    articleIds: [46, 50]
  },
}

const scenariosData = {
      "turismo": {
        title: "Turismo en un Sitio Prioritario",
        actor: "Operador de turismo",
        scenario: "Imagina que eres un operador turístico que quiere ofrecer excursiones de observación de aves en un 'Sitio Prioritario' para la conservación, designado por el SBAP. Tu plan incluye llevar grupos de 10 personas dos veces por semana. Para operar legalmente bajo la Ley 21.600, debes considerar lo siguiente: Primero, necesitas evaluar si tu actividad se enmarca en el 'Uso Sustentable' y no causará un impacto significativo. Debes coordinarte con el SBAP para obtener los permisos correspondientes, ya que operas en un área sensible. Es fundamental aplicar el 'Principio de Precaución', asegurándote de no perturbar las especies nidificantes. Además, tu operación debe alinearse con la definición de 'Turismo ambientalmente responsable', promoviendo la conservación y educando a tus clientes. Si, a pesar de tus precauciones, se causa un daño, el 'Principio de Responsabilidad' te haría pasible de repararlo.",
        keyPrinciples: [
          { name: "Uso Sustentable", articleId: 3, definitionId: 32 },
          { name: "Principio de Precaución", articleId: 2 },
          { name: "Principio de Responsabilidad", articleId: 9 },
          { name: "Turismo ambientalmente responsable", articleId: 3, definitionId: 34 }
        ],
        citations: [
          { text: "Artículo 1° (Objeto de la ley)", articleId: 1 },
          { text: "Artículo 3°, Definiciones", articleId: 3 },
          { text: "Artículo 5° (Funciones del SBAP)", articleId: 5 }
        ]
      },
      "investigacion": {
        title: "Investigación Científica en un Área Protegida",
        actor: "Investigador",
        scenario: "Eres un biólogo que busca realizar un estudio sobre la diversidad de anfibios en un Parque Nacional. Para ello, necesitas instalar equipos de monitoreo y recolectar muestras de agua y suelo. Según la Ley 21.600, la investigación científica es una actividad fomentada, pero está regulada. Debes presentar tu proyecto al Servicio de Biodiversidad (SBAP) para su evaluación y aprobación, asegurando que tu metodología no comprometa la 'Preservación' del área. El SBAP, en su función de promover redes de monitoreo, podría apoyar tu iniciativa. Sin embargo, debes seguir estrictamente los principios de 'Uso Sustentable' y 'Precaución' para minimizar tu impacto. Cualquier descubrimiento relevante, especialmente sobre especies en peligro, debe ser comunicado para alimentar los 'Planes de Recuperación' que el SBAP elabora.",
        keyPrinciples: [
          { name: "Preservación", articleId: 3, definitionId: 26 },
          { name: "Uso Sustentable", articleId: 3, definitionId: 32 },
          { name: "Principio de Precaución", articleId: 2 }
        ],
        citations: [
          { text: "Artículo 5°, letra c) y d)", articleId: 5 },
          { text: "Artículo 5°, letra e)", articleId: 5 },
          { text: "Artículo 3°, Definiciones", articleId: 3 }
        ]
      },
      "proyecto-inmobiliario": {
        title: "Proyecto Inmobiliario cerca de un Humedal",
        actor: "Desarrollador inmobiliario",
        scenario: "Una empresa inmobiliaria planea construir un complejo de departamentos en un terreno que colinda con un 'Humedal' urbano, reconocido por su importancia ecológica. Antes de iniciar cualquier obra, la Ley 21.600 obliga al desarrollador a realizar una evaluación de impacto. Se debe aplicar rigurosamente el 'Principio de Jerarquía': primero, se deben <strong>evitar</strong> los impactos (ej. rediseñar el proyecto para aumentar la distancia de construcción). Si no es posible, se deben <strong>mitigar</strong> (ej. crear barreras acústicas y visuales). Si el impacto ocurre, se debe <strong>reparar</strong> (ej. restaurar una zona degradada del humedal). Y como último recurso, <strong>compensar</strong> (ej. financiar la protección de otro humedal en la región). El SBAP tiene la facultad de pronunciarse sobre los impactos y fiscalizar el cumplimiento de estas medidas.",
        keyPrinciples: [
          { name: "Principio de Jerarquía", articleId: 2 },
          { name: "Humedal", articleId: 3, definitionId: 18 },
          { name: "Principio de Responsabilidad", articleId: 9 }
        ],
        citations: [
          { text: "Artículo 2°, Principio de Jerarquía", articleId: 2 },
          { text: "Artículo 3°, definición 18", articleId: 3 },
          { text: "Artículo 5°, letra i)", articleId: 5 }
        ]
      },
  // ... escenarios existentes ...
  
  "restauracion": {
    title: "Restauración de un Área Degradada",
    actor: "Organización ambiental",
    scenario: "Eres una ONG ambiental que ha identificado un área degradada por actividades mineras históricas. Deseas presentar una propuesta al SBAP para su restauración ecológica. Según la Ley 21.600, primero debes solicitar al SBAP que declare formalmente el área como 'degradada' mediante resolución, fundamentando con evidencia científica la alteración significativa de sus componentes físicos, químicos o biológicos. Una vez declarada, debes elaborar un 'Plan de Restauración Ecológica' detallando las medidas activas o pasivas a implementar, las metas, el monitoreo y los costos asociados. El SBAP evaluará tu propuesta y, si es aprobada, coordinará su ejecución. Si el área incluye recursos regulados por la Ley de Bosque Nativo o Pesca, deberás trabajar conjuntamente con los servicios sectoriales competentes.",
    keyPrinciples: [
      { name: "Área degradada", articleId: 3, definitionId: 1 },
      { name: "Plan de restauración ecológica", articleId: 3, definitionId: 24 },
      { name: "Principio de Coordinación", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 32° (Áreas Degradadas)", articleId: 32 },
      { text: "Artículo 33° (Planes de restauración ecológica)", articleId: 33 },
      { text: "Artículo 5°, letra e)", articleId: 5 }
    ]
  },
  
  "especies-exoticas": {
    title: "Control de Especies Exóticas Invasoras",
    actor: "Agricultor",
    scenario: "Eres un agricultor que ha detectado la presencia de una especie exótica invasora en tus cultivos que amenaza la biodiversidad local. Según la Ley 21.600, debes notificar inmediatamente al SBAP sobre esta presencia. El SBAP, en su función de control, podrá elaborar un 'Plan de Prevención, Control y Erradicación' para esta especie. Como propietario, estás obligado a facilitar las acciones que contemple dicho plan, lo que podría incluir permitir el ingreso de personal del SBAP a tu propiedad para realizar acciones de control. Si la especie se encuentra en la nómina oficial de especies exóticas invasoras, el SBAP podrá ejecutar acciones urgentes para evitar su propagación, incluso sin tu consentimiento previo, aunque siempre coordinando contigo. Si el daño ya es significativo, podrías enfrentar sanciones por no haber reportado oportunamente.",
    keyPrinciples: [
      { name: "Especie exótica invasora", articleId: 3, definitionId: 15 },
      { name: "Plan de prevención, control y erradicación", articleId: 3, definitionId: 25 },
      { name: "Principio de Responsabilidad", articleId: 9 }
    ],
    citations: [
      { text: "Artículo 45° (Prevención, control y erradicación)", articleId: 45 },
      { text: "Artículo 3°, definición 15", articleId: 3 },
      { text: "Artículo 116°, letra c)", articleId: 116 }
    ]
  },
  
  "area-protegida-privada": {
    title: "Creación de un Área Protegida Privada",
    actor: "Propietario rural",
    scenario: "Eres propietario de un terreno con alto valor ecológico y deseas protegerlo mediante su reconocimiento como 'Área Protegida Privada'. Según la Ley 21.600, debes presentar una solicitud voluntaria ante el Director Regional del SBAP, incluyendo información detallada sobre ubicación, superficie, características ecológicas, categoría de protección propuesta y objetos de protección. El SBAP evaluará tus antecedentes y, si son aprobados, emitirá un informe técnico. Luego, el Ministerio del Medio Ambiente dictará un decreto supremo que crea oficialmente el área protegida. Debes reducir este decreto a escritura pública e inscribirlo en el Registro de Hipotecas y Gravámenes. Como beneficio, obtendrás exención del impuesto territorial y de la herencia, entre otros incentivos, siempre que cumplas con el plan de manejo que deberás elaborar y que debe ser aprobado por el SBAP.",
    keyPrinciples: [
      { name: "Área protegida privada", articleId: 3, definitionId: 4 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 },
      { name: "Principio de Sustentabilidad", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 97° (Áreas protegidas privadas)", articleId: 97 },
      { text: "Artículo 98° (Solicitud de creación)", articleId: 98 },
      { text: "Artículo 105° (Incentivos)", articleId: 105 }
    ]
  },
  
  "concesion-turistica": {
    title: "Concesión Turística en un Área Protegida",
    actor: "Empresa de turismo",
    scenario: "Eres una empresa de turismo especializada que desea obtener una concesión para operar un lodge ecológico dentro de un Parque Nacional. Según la Ley 21.600, primero debes verificar que el área cuente con un plan de manejo aprobado. Luego, debes participar en el proceso de licitación pública que convocará el SBAP. Tu propuesta debe ajustarse estrictamente a la categoría de protección (Parque Nacional), al objeto de protección y al plan de manejo del área. El Comité Técnico evaluará tu propuesta y fijará la renta concesional. Si eres adjudicado, deberás suscribir un contrato de concesión con el SBAP que establecerá tus derechos y obligaciones. Tu operación debe desarrollarse bajo la modalidad de 'turismo ambientalmente responsable', con bajo impacto y respetando los valores naturales y culturales del área. La concesión tendrá una duración máxima de 30 años.",
    keyPrinciples: [
      { name: "Concesiones en áreas protegidas", articleId: 79 },
      { name: "Turismo ambientalmente responsable", articleId: 3, definitionId: 34 },
      { name: "Principio de Sustentabilidad", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 79° (Concesiones en áreas protegidas)", articleId: 79 },
      { text: "Artículo 80° (Criterios para el otorgamiento)", articleId: 80 },
      { text: "Artículo 81° (Comité Técnico)", articleId: 81 }
    ]
  },
  
  "plan-manejo-ecosistema": {
    title: "Plan de Manejo para un Ecosistema Amenazado",
    actor: "Servicio público sectorial",
    scenario: "Eres un servicio público con competencia en recursos naturales que ha identificado un ecosistema amenazado en tu jurisdicción. Según la Ley 21.600, el SBAP debe elaborar un 'Plan de Manejo para la Conservación' de este ecosistema. Como servicio sectorial, debes colaborar estrechamente con el SBAP en la elaboración e implementación de este plan. El plan establecerá requisitos para el otorgamiento de permisos sectoriales, condiciones para el uso del suelo, aplicación de sustancias químicas y explotación de especies, entre otras medidas. Si el plan afecta proyectos con Resolución de Calificación Ambiental favorable, se deberá seguir el procedimiento del artículo 25 quinquies de la ley 19.300. El plan será de cumplimiento obligatorio para tu servicio y deberás incorporar sus disposiciones en tus procedimientos administrativos y decisiones sectoriales.",
    keyPrinciples: [
      { name: "Ecosistema amenazado", articleId: 3, definitionId: 12 },
      { name: "Plan de manejo para la conservación", articleId: 3, definitionId: 21 },
      { name: "Principio de Coordinación", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 31° (Planes de manejo para ecosistemas amenazados)", articleId: 31 },
      { text: "Artículo 30° (Clasificación de ecosistemas)", articleId: 30 },
      { text: "Artículo 5°, letra e)", articleId: 5 }
    ]
  },
  
  "monitoreo-biodiversidad": {
    title: "Monitoreo de Biodiversidad",
    actor: "Investigador académico",
    scenario: "Eres un investigador de una universidad que desea participar en el programa de monitoreo de biodiversidad que implementa el SBAP. Según la Ley 21.600, el SBAP define e implementa programas de monitoreo de ecosistemas y especies para generar información sistemática sobre su estado y servicios ecosistémicos. Puedes proponer al SBAP un convenio para realizar monitoreo en áreas específicas, siguiendo los protocolos que establezca el servicio. Tus datos deberán ser validados según los criterios del SBAP y alimentarán el 'Sistema de Información de la Biodiversidad'. El monitoreo debe considerar tanto el conocimiento científico como el conocimiento tradicional de comunidades indígenas y locales. Si tu propuesta es aceptada, podrás acceder a información del sistema para tus investigaciones, debiendo respetar las restricciones de publicación de datos sensibles que podrían poner en riesgo especies amenazadas.",
    keyPrinciples: [
      { name: "Monitoreo de la biodiversidad", articleId: 25 },
      { name: "Sistema de Información de la Biodiversidad", articleId: 24 },
      { name: "Principio de Información", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 25° (Monitoreo de la biodiversidad)", articleId: 25 },
      { text: "Artículo 24° (Sistema de Información)", articleId: 24 },
      { text: "Artículo 5°, letra d)", articleId: 5 }
    ]
  },
  
  "certificacion-sostenible": {
    title: "Certificación de Prácticas Sostenibles",
    actor: "Productor agrícola",
    scenario: "Eres un productor agrícola que implementa prácticas sostenibles en tu predio y deseas obtener una certificación que lo reconozca. Según la Ley 21.600, puedes solicitar al SBAP la certificación del 'Sistema de Certificación de Biodiversidad y Servicios Ecosistémicos'. Para ello, debes demostrar que tus prácticas contribuyen efectivamente a la conservación de la biodiversidad y al mantenimiento de servicios ecosistémicos. El SBAP evaluará tu solicitud según los criterios establecidos en su reglamento. Si obtienes la certificación,这将 obligarte a cumplir con determinadas condiciones de manejo sostenible. La certificación es voluntaria y puede implicar obligaciones de hacer o no hacer, cuyo incumplimiento provocará la pérdida de la certificación. Esta certificación puede mejorar el posicionamiento de tus productos en el mercado y facilitar el acceso a incentivos económicos.",
    keyPrinciples: [
      { name: "Sistema de Certificación de Biodiversidad", articleId: 51 },
      { name: "Servicios ecosistémicos", articleId: 3, definitionId: 30 },
      { name: "Principio de Sustentabilidad", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 51° (Sistema de Certificación)", articleId: 51 },
      { text: "Artículo 50° (Prácticas sustentables)", articleId: 50 },
      { text: "Artículo 5°, letra k)", articleId: 5 }
    ]
  },
  
  "servicios-ecosistemicos": {
    title: "Contrato de Retribución por Servicios Ecosistémicos",
    actor: "Comunidad agrícola",
    scenario: "Eres una comunidad agrícola que posee un bosque nativo que provee servicios ecosistémicos hídricos a una ciudad cercana. Según la Ley 21.600, puedes proponer a la empresa de agua potable local un 'Contrato de Retribución por Servicios Ecosistémicos'. Este contrato establecería que la empresa te pagará una contraprestación económica a cambio de que tu comunidad se comprometa a preservar, restaurar o hacer uso sustentable del bosque, manteniendo así los servicios hídricos que benefician a la ciudad. El contrato debe perfeccionarse por escrito y especificar los derechos y obligaciones de ambas partes. El SBAP llevará un registro de estos contratos que cumplan con los criterios mínimos establecidos en su reglamento. Este mecanismo permite valorar económicamente los servicios ambientales y crear incentivos para la conservación por parte de propietarios privados.",
    keyPrinciples: [
      { name: "Contrato de retribución por servicios ecosistémicos", articleId: 52 },
      { name: "Servicios ecosistémicos", articleId: 3, definitionId: 30 },
      { name: "Principio de Valoración de los servicios ecosistémicos", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 52° (Contrato de retribución)", articleId: 52 },
      { text: "Artículo 50°, letra b)", articleId: 50 },
      { text: "Artículo 2°, principio j)", articleId: 2 }
    ]
  },
  
  "fiscalizacion-area-protegida": {
    title: "Fiscalización en un Área Protegida",
    actor: "Guardaparque",
    scenario: "Eres un guardaparque del SBAP que realiza labores de fiscalización en un área protegida estatal. Durante tu recorrido, detectas a visitantes realizando actividades prohibidas, como encender fogatas fuera de los lugares habilitados y extraer flora nativa. Según la Ley 21.600, como fiscalizador debes levantar un acta detallando objetivamente los hechos constitutivos de infracción e identificando a los presuntos infractores. Tienes la calidad de ministro de fe y tus constataciones constituyen presunción legal de haberse cometido la infracción. Debes entregar copia del acta a los presuntos infractores y remitir el expediente al Director Regional del SBAP para que inicie el procedimiento sancionatorio. También puedes aplicar medidas provisionales, como la retención de los elementos extraídos, si son indispensables para asegurar la instrucción del procedimiento o evitar daños inminentes al área protegida.",
    keyPrinciples: [
      { name: "Funciones de fiscalización", articleId: 109 },
      { name: "Ministros de fe", articleId: 110 },
      { name: "Prohibiciones en áreas protegidas", articleId: 108 }
    ],
    citations: [
      { text: "Artículo 109° (Alcance de la fiscalización)", articleId: 109 },
      { text: "Artículo 110° (Ministros de fe)", articleId: 110 },
      { text: "Artículo 122° (Acta de fiscalización)", articleId: 122 }
    ]
  },
  
  "sitio-prioritario": {
    title: "Infracción por Daño en un Sitio Prioritario",
    actor: "Empresa constructora",
    scenario: "Eres una empresa constructora que está realizando obras en un 'Sitio Prioritario' para la conservación. Durante la construcción, se ha producido una alteración significativa en las características ecológicas del sitio al destruir hábitats de especies nativas. Según la Ley 21.600, esta acción constituye una infracción grave fuera de áreas protegidas. El SBAP puede iniciar un procedimiento sancionatorio en tu contra, pudiendo aplicar multas de hasta 10.000 UTM y exigir un plan de corrección para restaurar el daño causado. Si la infracción afecta gravemente los servicios ecosistémicos, podría ser calificada como gravísima, con multas de hasta 15.000 UTM y la prohibición temporal de realizar actividades en áreas protegidas. Como medida correctiva, el SBAP puede ordenar el restablecimiento de la legalidad en un plazo no superior a cinco días, exigiendo la reparación inmediata de los daños causados.",
    keyPrinciples: [
      { name: "Sitio prioritario", articleId: 3, definitionId: 31 },
      { name: "Infracciones fuera de las áreas protegidas", articleId: 116 },
      { name: "Principio de Responsabilidad", articleId: 9 }
    ],
    citations: [
      { text: "Artículo 116°, letra a)", articleId: 116 },
      { text: "Artículo 29° (Sitios prioritarios)", articleId: 29 },
      { text: "Artículo 127° (Medidas correctivas)", articleId: 127 }
    ]
  },
  
  "recuperacion-especies": {
    title: "Plan de Recuperación de Especies",
    actor: "SBAP",
    scenario: "Eres un funcionario del SBAP encargado de elaborar un 'Plan de Recuperación, Conservación y Gestión' para una especie clasificada en peligro de extinción según el artículo 37 de la ley 19.300. Según la Ley 21.600, debes realizar un diagnóstico detallado del estado de la especie, determinar su hábitat y las amenazas que enfrenta. El plan debe incluir acciones específicas de recuperación, conservación o gestión, y establecer metas medibles. Durante su elaboración, debes consultar a los servicios públicos con competencia en la materia y considerar el conocimiento tradicional de comunidades indígenas y locales. Una vez aprobado, el plan será de cumplimiento obligatorio para los servicios públicos competentes y deberá ser revisado periódicamente para evaluar su efectividad. Si la especie se encuentra en un área protegida, las acciones del plan deben coordinarse con el plan de manejo del área.",
    keyPrinciples: [
      { name: "Plan de recuperación, conservación y gestión", articleId: 3, definitionId: 23 },
      { name: "Conservación in situ", articleId: 3, definitionId: 7 },
      { name: "Principio de Prevención", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 42° (Planes de recuperación)", articleId: 42 },
      { text: "Artículo 43° (Contenido del plan)", articleId: 43 },
      { text: "Artículo 5°, letra e)", articleId: 5 }
    ]
  },
  
  "corredor-biologico": {
    title: "Creación de un Corredor Biológico",
    actor: "Municipalidad",
    scenario: "Eres una municipalidad que busca establecer un corredor biológico para conectar dos áreas protegidas fragmentadas por actividades humanas. Según la Ley 21.600, puedes proponer al SBAP la creación de este corredor como un instrumento de conservación. El corredor debe facilitar el desplazamiento de las poblaciones y el flujo genético, asegurando el mantenimiento de la biodiversidad y procesos ecológicos. Para su implementación, debes coordinarte con otros municipios, propietarios privados y servicios públicos relevantes. El SBAP puede apoyar técnicamente la iniciativa y promover la participación ciudadana en su diseño y gestión. El corredor puede incluir diversas medidas como la restauración de hábitats, la creación de puentes de fauna o la implementación de servidumbres ecológicas en propiedades privadas. Estas acciones pueden ser financiadas a través del Fondo Nacional de la Biodiversidad o mediante contratos de retribución por servicios ecosistémicos.",
    keyPrinciples: [
      { name: "Corredor biológico", articleId: 3, definitionId: 9 },
      { name: "Principio de Coordinación", articleId: 2 },
      { name: "Principio Participativo", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 3°, definición 9", articleId: 3 },
      { text: "Artículo 54°, letra f)", articleId: 54 },
      { text: "Artículo 46° (Fondo Nacional de la Biodiversidad)", articleId: 46 }
    ]
  },
  
  "comunidades-indigenas": {
    title: "Participación de Comunidades Indígenas",
    actor: "Comunidad indígena",
    scenario: "Eres una comunidad indígena que habita en un territorio con alto valor de biodiversidad y deseas participar en su conservación. Según la Ley 21.600, el SBAP debe respetar, preservar y mantener vuestros conocimientos, innovaciones y prácticas tradicionales pertinentes para la conservación. Podéis proponer la creación de un 'Área de Conservación de Pueblos Indígenas' en vuestros territorios, que permitiría combinar la conservación de la biodiversidad con vuestros usos ancestrales o consuetudinarios. Para ello, debéis presentar una solicitud voluntaria al SBAP, demostrando la relevancia ecológica del área y la compatibilidad de vuestras prácticas con los objetivos de conservación. El SBAP evaluará vuestra propuesta y, si es aprobada, emitirá un decreto supremo que reconozca el área. También podéis participar en comités de gestión de áreas protegidas existentes o celebrar convenios de gestión con el SBAP para administrar zonas específicas.",
    keyPrinciples: [
      { name: "Área de Conservación de Pueblos Indígenas", articleId: 62 },
      { name: "Principio Participativo", articleId: 2 },
      { name: "Convenios de gestión", articleId: 68 }
    ],
    citations: [
      { text: "Artículo 62° (Área de Conservación de Pueblos Indígenas)", articleId: 62 },
      { text: "Artículo 2°, letra d)", articleId: 2 },
      { text: "Artículo 68° (Participación en la gestión)", articleId: 68 }
    ]
  },
  
  "investigacion-area-protegida": {
    title: "Investigación en un Área Protegida Estatal",
    actor: "Científico",
    scenario: "Eres un científico que desea realizar una investigación a largo plazo en un Monumento Natural que requiere la instalación de equipos permanentes. Según la Ley 21.600, necesitas obtener una concesión del SBAP, ya que tu investigación implica infraestructura con duración mayor a un año. Debes presentar una propuesta detallada que demuestre que tu investigación es compatible con la categoría de protección (Monumento Natural), el objeto de protección y el plan de manejo del área. El Comité Técnico evaluará tu propuesta y fijará la renta concesional. Si eres adjudicado, deberás suscribir un contrato de concesión que establecerá tus obligaciones, incluyendo compartir los resultados de tu investigación con el SBAP y difundirlos en establecimientos educacionales aledaños. Tu investigación debe colaborar como instrumento de apoyo para la gestión del área, cubriendo vacíos de información sobre biodiversidad o identificando amenazas.",
    keyPrinciples: [
      { name: "Concesiones en áreas protegidas", articleId: 79 },
      { name: "Monumento Natural", articleId: 59 },
      { name: "Principio de Información", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 79° (Concesiones)", articleId: 79 },
      { text: "Artículo 80°, letra e)", articleId: 80 },
      { text: "Artículo 59° (Monumento Natural)", articleId: 59 }
    ]
  },
  
  "recursos-geneticos": {
    title: "Uso de Recursos Genéticos",
    actor: "Laboratorio biotecnológico",
    scenario: "Eres un laboratorio de biotecnología que desea acceder a recursos genéticos de una planta con propiedades medicinales que se encuentra en un área protegida estatal. Según la Ley 21.600, además del permiso general para actividades en áreas protegidas, necesitas una autorización específica del SBAP para el acceso a recursos genéticos. Debes presentar una solicitud detallando los objetivos de tu investigación, las especies o materiales que deseas recolectar, las metodologías a utilizar y los beneficios que se derivarán de su utilización. El SBAP evaluará tu solicitud y, si es aprobada, firmará un convenio contigo que regulará las condiciones de acceso y la distribución de beneficios, incluyendo posibles regalías para el Fondo Nacional de la Biodiversidad. Tu investigación debe respetar los derechos de comunidades indígenas si los recursos tienen importancia para ellas, y debe garantizar que no se afectará negativamente la conservación de las especies en su hábitat natural.",
    keyPrinciples: [
      { name: "Recurso genético", articleId: 3, definitionId: 27 },
      { name: "Conservación in situ", articleId: 3, definitionId: 7 },
      { name: "Principio de Responsabilidad", articleId: 9 }
    ],
    citations: [
      { text: "Artículo 95° (Acceso a recursos genéticos)", articleId: 95 },
      { text: "Artículo 3°, definición 27", articleId: 3 },
      { text: "Artículo 94° (Permiso)", articleId: 94 }
    ]
  },
  
  "zona-amortiguamiento": {
    title: "Zona de Amortiguamiento de un Área Protegida",
    actor: "Propietario colindante",
    scenario: "Eres propietario de un terreno colindante con un Parque Nacional que ha sido declarado como 'zona de amortiguamiento' según el plan de manejo del área. Según la Ley 21.600, esta zona tiene como objetivo absorber potenciales impactos negativos y fomentar efectos positivos para la conservación del área protegida. Como propietario, tus actividades en esta zona pueden estar parcialmente restringidas según lo establezcan los instrumentos de ordenamiento territorial pertinentes. Por ejemplo, podrías tener limitaciones para realizar actividades que generen contaminación lumínica o acústica que afecten al Parque Nacional. A cambio, podrías acceder a beneficios como asistencia técnica del SBAP para implementar prácticas sostenibles en tu propiedad o prioridad en la postulación al Fondo Nacional de la Biodiversidad para proyectos de conservación en tu terreno.",
    keyPrinciples: [
      { name: "Zona de amortiguación", articleId: 3, definitionId: 33 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 },
      { name: "Principio de Coordinación", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 3°, definición 33", articleId: 3 },
      { text: "Artículo 72°, letra f)", articleId: 72 },
      { text: "Artículo 50° (Prácticas sustentables)", articleId: 50 }
    ]
  },
  
  "humedal-ramsar": {
    title: "Declaración de un Humedal Ramsar",
    actor: "SBAP",
    scenario: "Eres un funcionario del SBAP encargado de gestionar la declaración de un humedal como 'Sitio Ramsar' (Humedal de Importancia Internacional). Según la Ley 21.600, una vez que el humedal ha sido designado bajo la Convención Ramsar, el SBAP debe proponer al Ministerio del Medio Ambiente que lo acoga a una de las categorías de protección establecidas en la ley. Para ello, debes elaborar un informe técnico indicando la categoría correspondiente. Si el humedal es de propiedad privada, se requerirá el consentimiento del propietario para proceder a su afectación como área protegida. Una vez declarado, el SBAP promoverá su conservación y uso sustentable, considerando su dimensión ecológica, económica y social. El humedal será incorporado al Sistema Nacional de Áreas Protegidas y deberá contar con un plan de manejo que garantice la protección de sus valores ecológicos.",
    keyPrinciples: [
      { name: "Humedal", articleId: 3, definitionId: 18 },
      { name: "Humedales de importancia internacional", articleId: 37 },
      { name: "Sistema Nacional de Áreas Protegidas", articleId: 53 }
    ],
    citations: [
      { text: "Artículo 37° (Humedales de importancia internacional)", articleId: 37 },
      { text: "Artículo 39° (Inventario de humedales)", articleId: 39 },
      { text: "Artículo 53° (Sistema Nacional de Áreas Protegidas)", articleId: 53 }
    ]
  },
  
  "modificacion-area-protegida": {
    title: "Modificación de los Límites de un Área Protegida",
    actor: "Ministerio del Medio Ambiente",
    scenario: "Eres el Ministerio del Medio Ambiente y recibes una solicitud para modificar los límites de un área protegida estatal con el fin de incorporar un terreno adyacente con alto valor ecológico. Según la Ley 21.600, la modificación de una área protegida debe seguir un procedimiento específico. Debes solicitar al SBAP un informe técnico que justifique la modificación y obtener el pronunciamiento favorable del Comité Científico Asesor. El procedimiento debe incluir una etapa de participación ciudadana y consulta a las comunidades indígenas si correspondiera. Finalmente, se requiere el pronunciamiento favorable del Consejo de Ministros para la Sustentabilidad y el Cambio Climático. La modificación debe ser excepcional y no puede significar un detrimento a los objetivos del Sistema Nacional de Áreas Protegidas, debiendo mantener la superficie y representatividad ecológica del sistema. Para parques nacionales y reservas de región virgen, la modificación requiere una ley.",
    keyPrinciples: [
      { name: "Modificación de áreas protegidas", articleId: 66 },
      { name: "Comité Científico Asesor", articleId: 9 },
      { name: "Principio de No Regresión", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 66° (Modificación y desafectación)", articleId: 66 },
      { text: "Artículo 65° (Procedimiento para creación)", articleId: 65 },
      { text: "Artículo 2°, letra c)", articleId: 2 }
    ]
  },
  
  "convenio-gestion": {
    title: "Convenio de Gestión con Comunidades Locales",
    actor: "SBAP",
    scenario: "Eres el SBAP y deseas celebrar un convenio de gestión con una organización local para la administración de un área protegida estatal. Según la Ley 21.600, puedes celebrar estos convenios con autoridades u organizaciones locales, asociaciones o comunidades indígenas si resulta más conveniente para la realización de tus funciones. Debes evaluar las características del área protegida, su contexto territorial y la presencia de organizaciones locales. El convenio debe especificar la estructura de gestión (integrada siempre por un representante del SBAP), normas de funcionamiento, derechos y obligaciones de cada parte, beneficios e incentivos, requerimientos de reporte y efectos en caso de incumplimiento. El convenio no puede exceder de cinco años, renovables previa evaluación fundada. Las materias que puede incluir el convenio son variadas: gestión del área, prevención de contingencias, capacitación, ejecución de programas de desarrollo comunitario y aprovechamiento sustentable de recursos.",
    keyPrinciples: [
      { name: "Convenios de gestión", articleId: 68 },
      { name: "Principio Participativo", articleId: 2 },
      { name: "Administración de áreas protegidas", articleId: 67 }
    ],
    citations: [
      { text: "Artículo 68° (Participación en la gestión)", articleId: 68 },
      { text: "Artículo 67° (Administración)", articleId: 67 },
      { text: "Artículo 55°, letra h)", articleId: 55 }
    ]
  },
  
  "no-regresion": {
    title: "Aplicación del Principio de No Regresión",
    actor: "Autoridad ambiental",
    scenario: "Eres una autoridad ambiental que debe evaluar una solicitud para modificar los estándares de protección de un área protegida que permitiría actividades anteriormente restringidas. Según la Ley 21.600, debes aplicar el 'Principio de No Regresión', que establece que los actos administrativos no admiten modificaciones que signifiquen una disminución en los niveles de protección de la biodiversidad alcanzados previamente. Esto significa que no puedes autorizar la modificación solicitada si implica reducir la protección existente. Si el proyecto requiere flexibilizar alguna restricción, debes buscar alternativas que mantengan o mejoren los niveles de protección actuales. Este principio es particularmente relevante para áreas protegidas sensibles o para especies en peligro de extinción, donde cualquier disminución en la protección podría tener consecuencias irreversibles para la biodiversidad.",
    keyPrinciples: [
      { name: "Principio de No Regresión", articleId: 2 },
      { name: "Principio de Precaución", articleId: 2 },
      { name: "Principio de Jerarquía", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 2°, letra c)", articleId: 2 },
      { text: "Artículo 1° (Objeto de la ley)", articleId: 1 },
      { text: "Artículo 66° (Modificación de áreas protegidas)", articleId: 66 }
    ]
  },
  
  "paisaje-conservacion": {
    title: "Proyecto en un Paisaje de Conservación",
    actor: "Municipio",
    scenario: "Eres un municipio que ha promovido el reconocimiento de un 'Paisaje de Conservación' en su territorio. Según la Ley 21.600, este reconocimiento se efectúa a través de una resolución del SBAP, previa presentación de un informe técnico que dé cuenta de los valores naturales, culturales y paisajísticos asociados. Una vez reconocido, el municipio debe elaborar una propuesta de plan de manejo que será aprobado mediante resolución del SBAP. Este plan establecerá los lineamientos para la gestión sustentable del área por parte de quienes adscriban voluntariamente al paisaje de conservación. Como municipio, debes gestionar la adhesión de propietarios y comunidades locales, quienes se comprometerán a seguir las pautas del plan de manejo. Si el municipio no tiene recursos suficientes, puede solicitar al SBAP que designe un funcionario para acompañar el proceso de reconocimiento o elaboración del plan de manejo.",
    keyPrinciples: [
      { name: "Paisaje de conservación", articleId: 3, definitionId: 19 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 },
      { name: "Principio Participativo", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 35° (Paisajes de conservación)", articleId: 35 },
      { text: "Artículo 3°, definición 19", articleId: 3 },
      { text: "Artículo 2°, letra d)", articleId: 2 }
    ]
  },
  
  "comite-cientifico": {
    title: "Funciones del Comité Científico Asesor",
    actor: "Investigador",
    scenario: "Eres un investigador designado como miembro del Comité Científico Asesor del SBAP. Según la Ley 21.600, este comité tiene carácter paritario y está integrado por nueve miembros de instituciones académicas, científicas y de investigación, con representación regional. Tu función es asesorar al SBAP en materias científicas y técnicas necesarias para el ejercicio de sus funciones. Por ejemplo, debes emitir informes sobre propuestas de clasificación de ecosistemas según su estado de conservación, evaluar proyectos de investigación en áreas protegidas, o pronunciarte sobre modificaciones a los límites de áreas protegidas. Debes actuar con probidad y inhabilitarte de intervenir en asuntos en que incurras en causales de abstención. Tu cargo es ad honorem, dura tres años y puedes ser designado por nuevos períodos. El comité debe sesionar regularmente y sus informes deben ser técnicamente fundamentados.",
    keyPrinciples: [
      { name: "Comité Científico Asesor", articleId: 9 },
      { name: "Principio de Información", articleId: 2 },
      { name: "Principio de Precaución", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 9° (Comité Científico Asesor)", articleId: 9 },
      { text: "Artículo 30° (Clasificación de ecosistemas)", articleId: 30 },
      { text: "Artículo 66° (Modificación de áreas protegidas)", articleId: 66 }
    ]
  },
  
  "incentivos-privados": {
    title: "Incentivos para Áreas Protegidas Privadas",
    actor: "Propietario",
    scenario: "Eres propietario de un terreno con valores naturales que estás considerando declarar como área protegida privada. Según la Ley 21.600, esta decisión te haría acreedor a varios beneficios e incentivos. Obtendrías exención del impuesto territorial mientras cumplas con el plan de manejo del área. También estarías exento del impuesto a la herencia, lo que facilitaría la transmisión del patrimonio a tus herederos. Además, podrías participar gratuitamente en los programas de formación y capacitación para guardaparques según disponibilidad presupuestaria, y tendrías bonificaciones en la postulación al Fondo Nacional de la Biodiversidad. También estarías exento de pago de los derechos arancelarios correspondientes a notarios, conservadores de bienes raíces y archiveros para los trámites relacionados con el área protegida. Estos incentivos buscan fomentar la conservación privada como complemento a las áreas protegidas estatales.",
    keyPrinciples: [
      { name: "Área protegida privada", articleId: 3, definitionId: 4 },
      { name: "Incentivos", articleId: 105 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 }
    ],
    citations: [
      { text: "Artículo 105° (Incentivos)", articleId: 105 },
      { text: "Artículo 97° (Áreas protegidas privadas)", articleId: 97 },
      { text: "Artículo 103° (Planes de manejo)", articleId: 103 }
    ]
  },
  
  "transferencia-dominio": {
    title: "Transferencia de Dominio de un Área Protegida Privada",
    actor: "Comprador",
    scenario: "Eres un comprador interesado en adquirir un terreno que está declarado como área protegida privada. Según la Ley 21.600, la transferencia de dominio no altera el carácter de área protegida ni su regulación aplicable. El contrato de compraventa debe expresamente señalar que el terreno es un área protegida privada. Los conservadores de bienes raíces no inscribirán el acto si no cumple con este requisito, y cualquier contrato que omita esta información será absolutamente nulo. Como nuevo propietario, debes informar al SBAP sobre la transferencia y asumir todas las obligaciones asociadas al área protegida, incluyendo el cumplimiento del plan de manejo. Si deseas modificar el plan de manejo, deberás seguir el procedimiento establecido en la ley. En caso de desafectación del área, deberás restituir la totalidad de los beneficios obtenidos, como la exención del impuesto territorial.",
    keyPrinciples: [
      { name: "Transferencia de dominio", articleId: 101 },
      { name: "Área protegida privada", articleId: 3, definitionId: 4 },
      { name: "Desafectación", articleId: 100 }
    ],
    citations: [
      { text: "Artículo 101° (Transferencia de dominio)", articleId: 101 },
      { text: "Artículo 100° (Modificación y desafectación)", articleId: 100 },
      { text: "Artículo 105° (Incentivos)", articleId: 105 }
    ]
  },
  
  "plan-uso-publico": {
    title: "Plan de Uso Público en un Área Protegida",
    actor: "Administrador de área protegida",
    scenario: "Eres el administrador de un área protegida estatal y debes elaborar el 'Plan de Uso Público' para el área. Según la Ley 21.600, este instrumento está destinado a planificar y mejorar la calidad de atención del público en el ámbito del turismo, la educación y la investigación científica, de forma compatible con el plan de manejo del área protegida. El plan debe definir las zonas habilitadas para visitantes, las actividades permitidas y prohibidas, la capacidad de carga, los circuitos y senderos, la infraestructura necesaria, las medidas de seguridad, y los programas de educación e interpretación ambiental. Debes considerar las características específicas del área, su objeto de protección y las necesidades de los diferentes tipos de visitantes. El plan debe ser coherente con la categoría de protección del área y respetar los valores naturales y culturales que se busca proteger. Una vez aprobado, será la base para el otorgamiento de concesiones y permisos en el área.",
    keyPrinciples: [
      { name: "Plan de uso público", articleId: 67 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 },
      { name: "Turismo ambientalmente responsable", articleId: 3, definitionId: 34 }
    ],
    citations: [
      { text: "Artículo 67° (Administración)", articleId: 67 },
      { text: "Artículo 71° (Planes de manejo)", articleId: 71 },
      { text: "Artículo 80°, letra d)", articleId: 80 }
    ]
  },
  
  "guardaparques": {
    title: "Funciones de los Guardaparques",
    actor: "Guardaparque",
    scenario: "Eres un guardaparque del SBAP que trabaja en un área protegida estatal. Según la Ley 21.600, tus funciones incluyen velar por la conservación de la biodiversidad en el área. Debes apoyar el proceso de elaboración del plan de manejo y plan de uso público, y luego aplicar sus disposiciones. Entre tus tareas diarias están instruir a los visitantes sobre las normas del área, monitorear el estado de la biodiversidad, registrar datos, educar a los visitantes sobre los valores ecológicos y patrimoniales, gestionar el mantenimiento de infraestructuras no concesionadas, y fiscalizar las actividades que se desarrollan en el área. Si tienes más de dos años de experiencia y has aprobado los cursos de formación, puedes ser designado para funciones de fiscalización, lo que te permitirá levantar actas de infracción y tener la calidad de ministro de fe. También debes desarrollar acciones de vinculación con la comunidad local para facilitar el acceso a los beneficios del área protegida.",
    keyPrinciples: [
      { name: "Cuerpo de guardaparques", articleId: 75 },
      { name: "Funciones de fiscalización", articleId: 77 },
      { name: "Prohibiciones en áreas protegidas", articleId: 108 }
    ],
    citations: [
      { text: "Artículo 76° (Funciones y atribuciones)", articleId: 76 },
      { text: "Artículo 77° (Funciones de fiscalización)", articleId: 77 },
      { text: "Artículo 78° (Formación y capacitación)", articleId: 78 }
    ]
  },
  
  "medidas-provisionales": {
    title: "Medidas Provisionales en un Procedimiento Sancionatorio",
    actor: "Director Regional del SBAP",
    scenario: "Eres el Director Regional del SBAP y un fiscalizador te informa que ha detectado una actividad ilegal de extracción de recursos en un área protegida que está causando un daño inminente. Según la Ley 21.600, puedes ordenar medidas provisionales para evitar el daño mientras se instruye el procedimiento sancionatorio. Puedes disponer la retención temporal de los equipos utilizados en la extracción, la inmovilización de vehículos, la aposición de sellos sobre bienes, o incluso la clausura temporal de las instalaciones. Si se trata de medidas como la clausura o suspensión del funcionamiento, necesitas obtener autorización previa del Tribunal Ambiental, que puede otorgarse incluso vía telefónica por motivos de urgencia. Las medidas deben ser proporcionales al tipo de infracción y durar solo mientras sea necesario para asegurar la instrucción del procedimiento o evitar el daño. El afectado puede reclamar de estas medidas ante el Tribunal Ambiental dentro de quince días.",
    keyPrinciples: [
      { name: "Medidas provisionales", articleId: 125 },
      { name: "Procedimiento sancionatorio", articleId: 129 },
      { name: "Principio de Precaución", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 125° (Medidas provisionales)", articleId: 125 },
      { text: "Artículo 126° (Cese de las medidas provisionales)", articleId: 126 },
      { text: "Artículo 127° (Medidas correctivas)", articleId: 127 }
    ]
  },
  
  "plan-correccion": {
    title: "Plan de Corrección de Daños Ambientales",
    actor: "Infractor",
    scenario: "Eres una empresa que ha cometido una infracción ambiental en un área protegida y deseas presentar voluntariamente un plan de corrección para reparar el daño causado. Según la Ley 21.600, puedes presentar una propuesta de plan de corrección al SBAP que detalle cómo restaurarás la pérdida o degradación causada a la biodiversidad. El SBAP emitirá un informe sobre la infracción y sus efectos, y remitirá tu propuesta al Ministerio del Medio Ambiente para su aprobación. Desde la aprobación del plan y mientras no concluya su ejecución, se suspende el plazo de prescripción de la infracción. La totalidad de los costos de implementación del plan será de tu cargo. Si existe daño ambiental y no presentas un plan o no lo ejecutas satisfactoriamente, el SBAP deberá ejercer la acción por daño ambiental ante el Tribunal Ambiental. La presentación de un plan de corrección puede ser considerada como atenuante en la determinación de la sanción.",
    keyPrinciples: [
      { name: "Plan de corrección", articleId: 141 },
      { name: "Principio de Responsabilidad", articleId: 9 },
      { name: "Restauración ecológica", articleId: 3, definitionId: 24 }
    ],
    citations: [
      { text: "Artículo 141° (Plan de corrección)", articleId: 141 },
      { text: "Artículo 120° (Sanciones)", articleId: 120 },
      { text: "Artículo 119° (Prescripción)", articleId: 119 }
    ]
  },
  
  "reclamacion-tribunal": {
    title: "Reclamación ante un Tribunal Ambiental",
    actor: "Ciudadano afectado",
    scenario: "Eres un ciudadano afectado por una resolución del SBAP que aprobó un plan de manejo para un ecosistema amenazado que limita tus actividades productivas. Según la Ley 21.600, puedes reclamar de esta resolución ante los Tribunales Ambientales. Tienes un plazo de treinta días hábiles contados desde la notificación de la resolución para interponer la reclamación. El Tribunal Ambiental competente será el del lugar donde se aplica el instrumento contenido en el acto administrativo. En tu reclamación, debes fundamentar por qué consideras que el plan de manejo no se ajusta a la ley o su reglamento y te causa perjuicio. El procedimiento se regirá por lo dispuesto en la ley 20.600 que crea los Tribunales Ambientales. Contra la resolución del Tribunal Ambiental sólo procederá el recurso de apelación en casos específicos, y contra la sentencia definitiva podrás interponer recurso de casación en el fondo.",
    keyPrinciples: [
      { name: "Reclamación", articleId: 134 },
      { name: "Plan de manejo para la conservación", articleId: 3, definitionId: 21 },
      { name: "Competencia", articleId: 135 }
    ],
    citations: [
      { text: "Artículo 134° (Reclamación)", articleId: 134 },
      { text: "Artículo 135° (Competencia)", articleId: 135 },
      { text: "Artículo 136° (Legitimación activa)", articleId: 136 }
    ]
  },
  
  "reserva-biosfera": {
    title: "Creación de una Reserva de la Biósfera",
    actor: "SBAP",
    scenario: "Eres un funcionario del SBAP encargado de promover la creación de una Reserva de la Biósfera en un territorio con alto valor ecológico y cultural. Según la Ley 21.600, las Reservas de la Biósfera son áreas reconocidas internacionalmente en el marco del Programa del Hombre y la Biósfera de la UNESCO. Debes elaborar un plan de gestión que establezca las medidas e instrumentos a aplicar para promover el uso sustentable de los recursos naturales y la conservación de la biodiversidad. Este plan debe actualizarse cada cinco años. Puedes conformar comités de gestión integrados por representantes de organizaciones públicas y de la comunidad existentes en la reserva, que colaboren en la elaboración y monitoreo del plan de gestión. Si la zona núcleo de la reserva constituye un área protegida, debes procurar integrar el manejo de dicha área con la gestión local de la reserva. También debes otorgar asesoramiento técnico en estas áreas conforme a los objetivos planteados por el Programa de la UNESCO.",
    keyPrinciples: [
      { name: "Reserva de la biósfera", articleId: 3, definitionId: 28 },
      { name: "Plan de gestión", articleId: 36 },
      { name: "Principio Participativo", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 36° (Reservas de la biósfera)", articleId: 36 },
      { text: "Artículo 3°, definición 28", articleId: 3 },
      { text: "Artículo 55°, letra g)", articleId: 55 }
    ]
  },
  
  "coordinacion": {
    title: "Aplicación del Principio de Coordinación",
    actor: "Servicio público",
    scenario: "Eres un servicio público con competencias en gestión de recursos naturales que debe aprobar un proyecto que afecta un área con alta biodiversidad. Según la Ley 21.600, debes aplicar el 'Principio de Coordinación', que establece que la implementación de instrumentos de conservación debe realizarse de manera coordinada entre los distintos órganos competentes. Antes de aprobar el proyecto, debes consultar al SBAP para evaluar sus posibles impactos sobre la biodiversidad. Si el proyecto afecta un área protegida, un sitio prioritario o un ecosistema amenazado, debes solicitar un informe técnico al SBAP. También debes coordinar la implementación de medidas de mitigación o compensación con el SBAP. Esta coordinación es especialmente relevante cuando el proyecto afecta recursos regulados por múltiples sectores, como por ejemplo un proyecto que involucra recursos hídricos, forestales y pesqueros en una misma zona.",
    keyPrinciples: [
      { name: "Principio de Coordinación", articleId: 2 },
      { name: "Principio de Jerarquía", articleId: 2 },
      { name: "Principio de Información", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 2°, letra a)", articleId: 2 },
      { text: "Artículo 5°, letra i)", articleId: 5 },
      { text: "Artículo 31° (Planes de manejo para ecosistemas)", articleId: 31 }
    ]
  },
  
  "conservacion-marina": {
    title: "Iniciativa Privada de Conservación Marina",
    actor: "Organización no gubernamental",
    scenario: "Eres una ONG ambiental que desea desarrollar una iniciativa de conservación en ecosistemas marinos costeros que son objeto de concesión por parte del Ministerio de Defensa Nacional. Según la Ley 21.600, puedes solicitar apoyo técnico al SBAP para tu iniciativa, siempre que en tus instrumentos de manejo establezcas la conservación de la biodiversidad como objetivo. El SBAP podrá prestar apoyo tanto en la elaboración como en la implementación de tus instrumentos de manejo, según su disponibilidad presupuestaria. Este apoyo puede incluir asesoría científica, capacitación de personal, diseño de programas de monitoreo, o ayuda en la elaboración de planes de manejo. Tu iniciativa debe ser compatible con los objetivos de conservación de la biodiversidad y no puede interferir con las funciones de defensa nacional. El SBAP evaluará tu propuesta y determinará el tipo y alcance del apoyo que puede proporcionar, priorizando aquellas iniciativas que contribuyan a la representatividad del Sistema Nacional de Áreas Protegidas.",
    keyPrinciples: [
      { name: "Iniciativas privadas de conservación marina", articleId: 34 },
      { name: "Conservación de la biodiversidad", articleId: 3, definitionId: 6 },
      { name: "Principio de Sustentabilidad", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 34° (Iniciativas privadas de conservación marina)", articleId: 34 },
      { text: "Artículo 5°, letra f)", articleId: 5 },
      { text: "Artículo 53° (Sistema Nacional de Áreas Protegidas)", articleId: 53 }
    ]
  },
  
  "area-indigena": {
    title: "Proyecto en un Área de Conservación de Pueblos Indígenas",
    actor: "Comunidad indígena",
    scenario: "Eres una comunidad indígena que ha logrado que su territorio sea reconocido como 'Área de Conservación de Pueblos Indígenas'. Según la Ley 21.600, esta categoría de protección permite combinar la conservación de la biodiversidad con vuestros usos ancestrales o consuetudinarios, siempre que no pongan en riesgo los servicios ecosistémicos del área. Como comunidad, sois los administradores del área y debéis elaborar un plan de manejo que sea aprobado por el SBAP. Este plan debe considerar tanto los objetivos de conservación como vuestros conocimientos locales y prácticas tradicionales. Podéis desarrollar actividades de uso sustentable en el área, como recolección de plantas medicinales, caza subsistencia o turismo comunitario, siempre que sean compatibles con los objetivos de conservación. El SBAP debe respetar, preservar y mantener vuestros conocimientos tradicionales pertinentes para la conservación y utilización sostenible de la biodiversidad.",
    keyPrinciples: [
      { name: "Área de Conservación de Pueblos Indígenas", articleId: 62 },
      { name: "Principio Participativo", articleId: 2 },
      { name: "Uso sustentable", articleId: 3, definitionId: 32 }
    ],
    citations: [
      { text: "Artículo 62° (Área de Conservación de Pueblos Indígenas)", articleId: 62 },
      { text: "Artículo 2°, letra d)", articleId: 2 },
      { text: "Artículo 2°, letra h)", articleId: 2 }
    ]
  },
  
  "acceso-informacion": {
    title: "Acceso a Información de Biodiversidad",
    actor: "Investigador",
    scenario: "Eres un investigador que solicita información al SBAP sobre la distribución de especies amenazadas en una región específica. Según la Ley 21.600, el SBAP administra un 'Sistema de Información de la Biodiversidad' que almacena datos sobre ecosistemas, especies, servicios ecosistémicos y áreas protegidas. La información contenida en este sistema es de acceso público, excepto aquella cuya publicidad pudiera poner en riesgo la conservación de especies o sus poblaciones. En tu caso, el SBAP podrá proporcionarte la información general sobre distribución de especies, pero podrá mantener en reserva los datos precisos de localización si considera que su conocimiento podría facilitar la captura o colecta ilegal de especies amenazadas. El SBAP debe asegurar la interoperabilidad de su sistema con el Sistema Nacional de Información Ambiental para evitar duplicidades. Si la información que solicitas fue generada con fondos públicos por privados, el SBAP podrá requerirla a estos últimos.",
    keyPrinciples: [
      { name: "Sistema de Información de la Biodiversidad", articleId: 24 },
      { name: "Principio de Información", articleId: 2 },
      { name: "Requerimiento de información", articleId: 26 }
    ],
    citations: [
      { text: "Artículo 24° (Sistema de Información)", articleId: 24 },
      { text: "Artículo 26° (Requerimiento de información)", articleId: 26 },
      { text: "Artículo 2°, letra i)", articleId: 2 }
    ]
  },
  
  "planificacion-ecologica": {
    title: "Planificación Ecológica Territorial",
    actor: "Ministerio del Medio Ambiente",
    scenario: "Eres el Ministerio del Medio Ambiente y debes elaborar una planificación ecológica del país para definir prioridades de conservación de la biodiversidad. Según la Ley 21.600, esta planificación debe incluir la identificación de sitios prioritarios basada en inventarios de ecosistemas, la identificación de usos del territorio según la normativa vigente, la identificación de procesos y categorías de actividades con efectos perjudiciales para la biodiversidad, y buenas prácticas para la conservación. Debes considerar los antecedentes que proponga el Comité Científico Asesor. La planificación ecológica debe ser considerada para la elaboración o actualización de instrumentos de ordenamiento territorial. Para identificar los sitios prioritarios, puedes utilizar como referencia el Anexo I del Convenio sobre la Diversidad Biológica. Una vez elaborada, esta planificación servirá como base para la toma de decisiones en materia de conservación y ordenamiento territorial a nivel nacional, regional y local.",
    keyPrinciples: [
      { name: "Planificación ecológica", articleId: 28 },
      { name: "Sitio prioritario", articleId: 3, definitionId: 31 },
      { name: "Principio de Coordinación", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 28° (Planificación ecológica)", articleId: 28 },
      { text: "Artículo 29° (Sitios prioritarios)", articleId: 29 },
      { text: "Artículo 7° bis de la ley 19.300", articleId: 28 }
    ]
  },
  
  "fondo-biodiversidad": {
    title: "Fondo Nacional de la Biodiversidad",
    actor: "Organización sin fines de lucro",
    scenario: "Eres una organización sin fines de lucro que desarrolla un proyecto de restauración ecológica fuera de áreas protegidas estatales y necesitas financiamiento. Según la Ley 21.600, puedes postular al 'Fondo Nacional de la Biodiversidad', que está destinado a financiar proyectos de conservación principalmente fuera de las áreas protegidas del Estado. El fondo es administrado por el SBAP y puede financiar actividades como investigación, capacitación, monitoreo, restauración, control de amenazas, acciones de conservación de especies fuera de sus hábitats, y prácticas productivas sustentables. Para postular, debes presentar una propuesta detallando los objetivos del proyecto, las actividades a realizar, los resultados esperados y un presupuesto. El SBAP evaluará tu propuesta según las prioridades de conservación que haya establecido. Si eres seleccionado, deberás presentar informes periódicos de avance y un informe final al término del proyecto.",
    keyPrinciples: [
      { name: "Fondo Nacional de la Biodiversidad", articleId: 46 },
      { name: "Restauración ecológica", articleId: 3, definitionId: 24 },
      { name: "Conservación de la biodiversidad", articleId: 3, definitionId: 6 }
    ],
    citations: [
      { text: "Artículo 46° (Fondo Nacional de la Biodiversidad)", articleId: 46 },
      { text: "Artículo 47° (Beneficiarios)", articleId: 47 },
      { text: "Artículo 48° (Administración)", articleId: 48 }
    ]
  },
  
  "area-multiples-usos": {
    title: "Proyecto en un Área de Conservación de Múltiples Usos",
    actor: "Empresa pesquera",
    scenario: "Eres una empresa pesquera artesanal que opera en un 'Área de Conservación de Múltiples Usos'. Según la Ley 21.600, esta categoría de protección se caracteriza por una interacción tradicional entre los seres humanos y la naturaleza, y permite el uso sustentable de recursos naturales y servicios ecosistémicos. Tu actividad pesquera puede continuar desarrollándose siempre que no ponga en riesgo los servicios ecosistémicos que el área provee. Debes ajustarte a las regulaciones establecidas en el plan de manejo del área, que puede incluir vedas temporales, restricciones a ciertas artes de pesca, o límites a las capturas. El SBAP fiscalizará el cumplimiento de estas normas y podrá sancionar las infracciones. Como beneficio, el área te proporciona un entorno marino más saludable que sostiene las poblaciones de especies comerciales a largo plazo. También puedes participar en los comités de gestión del área y acceder a programas de capacitación y asistencia técnica para mejorar tus prácticas pesqueras.",
    keyPrinciples: [
      { name: "Área de Conservación de Múltiples Usos", articleId: 61 },
      { name: "Uso sustentable", articleId: 3, definitionId: 32 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 }
    ],
    citations: [
      { text: "Artículo 61° (Área de Conservación de Múltiples Usos)", articleId: 61 },
      { text: "Artículo 63° (Proyectos o actividades)", articleId: 63 },
      { text: "Artículo 71° (Planes de manejo)", articleId: 71 }
    ]
  },
  
  "principio-informacion": {
    title: "Aplicación del Principio de Información",
    actor: "SBAP",
    scenario: "Eres el SBAP y debes aplicar el 'Principio de Información' que establece que es deber del Estado facilitar y promover el acceso a la información sobre biodiversidad. Según la Ley 21.600, debes administrar el Sistema de Información de la Biodiversidad y garantizar que la información sea de acceso público, excepto aquella cuya publicidad pudiera poner en riesgo la conservación de especies. Debes promover el conocimiento sobre los servicios ecosistémicos y su valoración, especialmente entre las comunidades locales y los tomadores de decisiones. Para ello, puedes desarrollar programas de educación, capacitación y comunicación sobre el valor de la biodiversidad, sus amenazas y su relación con el cambio climático. También debes colaborar con el Ministerio del Medio Ambiente en la elaboración del informe cuatrienal y el reporte anual sobre el estado de la biodiversidad. La información que generes debe ser clara, precisa y accesible a diferentes públicos, desde especialistas hasta ciudadanos comunes.",
    keyPrinciples: [
      { name: "Principio de Información", articleId: 2 },
      { name: "Sistema de Información de la Biodiversidad", articleId: 24 },
      { name: "Servicios ecosistémicos", articleId: 3, definitionId: 30 }
    ],
    citations: [
      { text: "Artículo 2°, letra i)", articleId: 2 },
      { text: "Artículo 24° (Sistema de Información)", articleId: 24 },
      { text: "Artículo 27° (Informes sobre el estado de la biodiversidad)", articleId: 27 }
    ]
  },
  
  "region-virgen": {
    title: "Proyecto en una Reserva de Región Virgen",
    actor: "Investigador",
    scenario: "Eres un investigador que desea realizar un estudio científico en una 'Reserva de Región Virgen'. Según la Ley 21.600, esta categoría de protección se caracteriza por condiciones primitivas naturales, no perturbadas significativamente por actividades humanas, y su objetivo es la preservación estricta de la integridad ecológica. En esta área está prohibida la explotación de recursos naturales con fines comerciales, y no puedes realizar ningún tipo de actividad, salvo aquellas autorizadas con propósitos de investigación científica. Para realizar tu estudio, debes presentar una solicitud detallada al SBAP que demuestre la relevancia científica de tu investigación y que tus métodos causarán el mínimo impacto posible. Si eres autorizado, deberás seguir estrictamente las condiciones establecidas por el SBAP, que pueden incluir restricciones a las zonas de acceso, limitaciones en la recolección de muestras, y obligaciones de compartir los resultados de tu investigación con el SBAP.",
    keyPrinciples: [
      { name: "Reserva de Región Virgen", articleId: 57 },
      { name: "Preservación", articleId: 3, definitionId: 26 },
      { name: "Principio de Precaución", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 57° (Reserva de Región Virgen)", articleId: 57 },
      { text: "Artículo 63° (Proyectos o actividades)", articleId: 63 },
      { text: "Artículo 79° (Concesiones)", articleId: 79 }
    ]
  },
  
  "monumento-natural": {
    title: "Proyecto en un Monumento Natural",
    actor: "Operador turístico",
    scenario: "Eres un operador turístico que desea ofrecer visitas guiadas en un 'Monumento Natural'. Según la Ley 21.600, esta categoría de protección se caracteriza por la presencia de componentes naturales específicos o formaciones naturales de valor excepcional, y su objetivo es la preservación de estos elementos específicos y sus hábitats asociados. Para operar en el área, necesitas obtener un permiso del SBAP, ya que tu actividad es de carácter transitorio y no requiere la instalación de infraestructura permanente. El permiso sólo será otorgado si tu actividad se ajusta a la categoría, al objeto de protección y al plan de manejo del área. Debes seguir estrictamente las normas establecidas en el plan de manejo, que pueden incluir límites al número de visitantes, restricciones a las zonas de acceso, y obligaciones de contar con guías autorizados. Tu actividad debe desarrollarse como 'turismo ambientalmente responsable', con bajo impacto y respetando los valores naturales del monumento.",
    keyPrinciples: [
      { name: "Monumento Natural", articleId: 59 },
      { name: "Turismo ambientalmente responsable", articleId: 3, definitionId: 34 },
      { name: "Permiso", articleId: 94 }
    ],
    citations: [
      { text: "Artículo 59° (Monumento Natural)", articleId: 59 },
      { text: "Artículo 94° (Permiso)", articleId: 94 },
      { text: "Artículo 63° (Proyectos o actividades)", articleId: 63 }
    ]
  },
  
  "reserva-nacional": {
    title: "Proyecto en una Reserva Nacional",
    actor: "Comunidad local",
    scenario: "Eres una comunidad local que habita en los alrededores de una 'Reserva Nacional' y desea desarrollar actividades de uso sustentable en el área. Según la Ley 21.600, esta categoría de protección permite el desarrollo de actividades de uso sustentable, siempre que no pongan en riesgo los servicios ecosistémicos que el área provee. Puedes proponer al SBAP proyectos como recolección sostenible de productos forestales no maderables, turismo de base comunitaria, o actividades educativas. Estos proyectos deben ser compatibles con el plan de manejo del área y no pueden incluir la explotación de recursos naturales con fines comerciales. El SBAP evaluará tus propuestas y, si son aprobadas, podrá autorizarlas mediante permisos o convenios específicos. Como comunidad, también puedes participar en los comités de gestión del área y acceder a programas de capacitación y asistencia técnica para mejorar tus prácticas sostenibles. El SBAP promoverá la participación de las comunidades locales en la conservación y gestión de las áreas protegidas.",
    keyPrinciples: [
      { name: "Reserva Nacional", articleId: 60 },
      { name: "Uso sustentable", articleId: 3, definitionId: 32 },
      { name: "Principio Participativo", articleId: 2 }
    ],
    citations: [
      { text: "Artículo 60° (Reserva Nacional)", articleId: 60 },
      { text: "Artículo 63° (Proyectos o actividades)", articleId: 63 },
      { text: "Artículo 55°, letra g)", articleId: 55 }
    ]
  },
  
  "traslado-personal": {
    title: "Traslado de Personal desde CONAF al SBAP",
    actor: "Funcionario público",
    scenario: "Eres un funcionario de CONAF que presta servicios exclusivamente para la administración y gestión de áreas silvestres protegidas. Según la Ley 21.600, serás trasladado al Servicio de Biodiversidad y Áreas Protegidas (SBAP) sin solución de continuidad. Este traslado se realizará dentro del tercer año contado desde la entrada en funcionamiento del SBAP, mediante decretos expedidos por el Ministerio del Medio Ambiente. Durante este proceso, no se te podrá aplicar el artículo 16 de la ley (sobre destinación y subrogación), debiendo regirte por las normas que estaban vigentes en CONAF al momento del traslado. Sin embargo, puedes someterte voluntariamente a la regulación de dicho artículo. El traslado no puede significar pérdida del empleo, disminución de remuneraciones o modificación de derechos previsionales, ni cambio de tu residencia habitual fuera de la región en que prestas servicios, salvo con tu consentimiento. Cualquier diferencia de remuneraciones será pagada mediante planilla suplementaria.",
    keyPrinciples: [
      { name: "Traslado de personal", articleId: 155 },
      { name: "Régimen laboral", articleId: 11 },
      { name: "De la destinación y la subrogación", articleId: 16 }
    ],
    citations: [
      { text: "Artículo primero transitorio, numeral 3)", articleId: 155 },
      { text: "Artículo primero transitorio, numeral 5)", articleId: 155 },
      { text: "Artículo primero transitorio, numeral 8)", articleId: 155 }
    ]
  },
  
  "reclasificacion-areas": {
    title: "Reclasificación de Áreas Protegidas Existentes",
    actor: "Ministerio del Medio Ambiente",
    scenario: "Eres el Ministerio del Medio Ambiente y debes reclasificar las reservas marinas, santuarios de la naturaleza y bienes nacionales protegidos existentes a la fecha de publicación de la Ley 21.600. Según las disposiciones transitorias, tienes un plazo de cinco años contado desde la entrada en funcionamiento del SBAP para realizar esta reclasificación. Para las reservas marinas, debes determinar en conjunto con el Ministerio de Economía si corresponden como 'Reserva de Interés Pesquero' o como 'Reserva Nacional', previo informe del SBAP y de la Subsecretaría de Pesca. Para los santuarios de la naturaleza, debes determinar a qué categoría deben adscribirse, previo informe del SBAP. Si el área es de propiedad privada, se requiere el consentimiento del propietario. Para los bienes nacionales protegidos, debes determinar la categoría aplicable en conjunto con el Ministerio de Bienes Nacionales. La reclasificación en ningún caso reducirá el grado de protección, jerarquía o superficie del área protegida.",
    keyPrinciples: [
      { name: "Reclasificación de áreas", articleId: 159 },
      { name: "Categorías de áreas protegidas", articleId: 56 },
      { name: "Principio de No Regresión", articleId: 2 }
    ],
    citations: [
      { text: "Artículo quinto transitorio", articleId: 159 },
      { text: "Artículo 56° (Categorías de áreas protegidas)", articleId: 56 },
      { text: "Artículo 158° (Áreas protegidas existentes)", articleId: 158 }
    ]
  },
  
  "concesiones-preexistentes": {
    title: "Concesiones Preexistentes en Áreas Protegidas",
    actor: "Concesionario",
    scenario: "Eres titular de una concesión o contrato que fue otorgado antes de la creación de un área protegida en espacios que ahora están comprendidos dentro de ella. Según las disposiciones transitorias de la Ley 21.600, tu concesión o contrato continuará vigente al interior del área protegida hasta el momento que se efectúe su relocalización, a menos que caigas en incumplimiento de las normas especiales que la rigen y se produzca con ello la caducidad de la concesión o término del contrato. Si tu concesión fue celebrada por CONAF sobre terrenos comprendidos en áreas silvestres protegidas, el SBAP se entenderá como su sucesor legal. La creación del área protegida tampoco obsta el desarrollo de actividades que cuenten con una resolución de calificación ambiental favorable. Sin embargo, debes ajustar tus actividades a las nuevas regulaciones del área protegida y respetar su objeto de protección y plan de manejo.",
    keyPrinciples: [
      { name: "Concesiones preexistentes", articleId: 160 },
      { name: "Concesiones en áreas protegidas", articleId: 79 },
      { name: "Plan de manejo", articleId: 3, definitionId: 20 }
    ],
    citations: [
      { text: "Artículo sexto transitorio", articleId: 160 },
      { text: "Artículo 79° (Concesiones en áreas protegidas)", articleId: 79 },
      { text: "Artículo 71° (Planes de manejo)", articleId: 71 }
    ]
  }
  };
    
