
const SUBJECTS = [
  {
    "id": "matematicas",
    "icon": "➗",
    "title": "Matemáticas",
    "desc": "Razonamiento numérico, proporcionalidad, álgebra inicial, geometría, estadística y resolución de problemas contextualizados.",
    "problem": "El comité escolar necesita organizar una feria: calcular costos, comparar descuentos, distribuir espacios y analizar resultados de encuestas para tomar decisiones justas.",
    "explanation": [
      "Usa razones y proporciones para comparar magnitudes y porcentajes para analizar descuentos o incrementos.",
      "Traduce situaciones a expresiones algebraicas: una cantidad desconocida puede representarse con x.",
      "En geometría, identifica datos, fórmula y unidad antes de operar.",
      "En estadística, interpreta media, mediana, moda y gráficos para argumentar."
    ],
    "example": [
      "Problema: 4 cuadernos cuestan $18.000. ¿Cuánto cuestan 7 cuadernos al mismo precio?",
      "Precio unitario: 18.000 ÷ 4 = 4.500.",
      "Costo de 7 cuadernos: 7 × 4.500 = 31.500.",
      "Respuesta: $31.500. Estrategia: encontrar unidad y escalar."
    ],
    "strategies": [
      "Monedas XP por cada acierto.",
      "Caso de feria escolar para conectar operaciones con decisiones reales.",
      "Retos por niveles: explorador, estratega y experto.",
      "Bitácora: explica en voz alta cómo resolviste dos ejercicios."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "En la feria, 6 jugos cuestan $18.000. ¿Cuánto cuesta 1 jugo?",
        "options": [
          "$2.000",
          "$3.000",
          "$4.000",
          "$6.000"
        ],
        "answer": 1,
        "hint": "Divide el total entre la cantidad de jugos.",
        "feedback": "18.000 ÷ 6 = 3.000."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "Si un libro vale $40.000 y tiene 25% de descuento, ¿cuánto se descuenta?",
        "options": [
          "$8.000",
          "$10.000",
          "$12.000",
          "$15.000"
        ],
        "answer": 1,
        "hint": "El 25% equivale a la cuarta parte.",
        "feedback": "40.000 ÷ 4 = 10.000."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "Ordena de menor a mayor: 0,5 ; 3/4 ; 0,2.",
        "options": [
          "0,2 ; 0,5 ; 3/4",
          "3/4 ; 0,5 ; 0,2",
          "0,5 ; 0,2 ; 3/4",
          "0,2 ; 3/4 ; 0,5"
        ],
        "answer": 0,
        "hint": "Convierte 3/4 a decimal.",
        "feedback": "3/4 = 0,75."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "Un salón tiene 28 estudiantes. Si 3/7 prefieren ciencias, ¿cuántos son?",
        "options": [
          "9",
          "10",
          "12",
          "15"
        ],
        "answer": 2,
        "hint": "Primero divide 28 entre 7.",
        "feedback": "28 ÷ 7 = 4; 4 × 3 = 12."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "Calcula: -5 + 12 - 3.",
        "options": [
          "4",
          "-20",
          "10",
          "-4"
        ],
        "answer": 0,
        "hint": "Suma positivos y negativos con cuidado.",
        "feedback": "-5 + 12 = 7; 7 - 3 = 4."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "Si x + 7 = 19, ¿cuánto vale x?",
        "options": [
          "11",
          "12",
          "13",
          "26"
        ],
        "answer": 1,
        "hint": "Resta 7 a ambos lados.",
        "feedback": "19 - 7 = 12."
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "El perímetro de un rectángulo de largo 8 cm y ancho 5 cm es:",
        "options": [
          "13 cm",
          "26 cm",
          "40 cm",
          "80 cm"
        ],
        "answer": 1,
        "hint": "Perímetro = 2(largo + ancho).",
        "feedback": "2(8+5)=26."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "Área de un triángulo con base 10 cm y altura 6 cm:",
        "options": [
          "16 cm²",
          "30 cm²",
          "60 cm²",
          "120 cm²"
        ],
        "answer": 1,
        "hint": "Área = base × altura ÷ 2.",
        "feedback": "10 × 6 ÷ 2 = 30."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "La media de 3, 5, 8 y 8 es:",
        "options": [
          "5",
          "6",
          "6,5",
          "8"
        ],
        "answer": 1,
        "hint": "Suma los datos y divide entre 4.",
        "feedback": "3+5+8+8=24; 24÷4=6."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "La moda de 4, 6, 6, 7, 8 es:",
        "options": [
          "4",
          "6",
          "7",
          "8"
        ],
        "answer": 1,
        "hint": "La moda es el dato que más se repite.",
        "feedback": "6 aparece dos veces."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "Una escala 1:100 significa que 2 cm en el plano representan:",
        "options": [
          "20 cm",
          "100 cm",
          "200 cm",
          "2.000 cm"
        ],
        "answer": 2,
        "hint": "Multiplica por 100.",
        "feedback": "2 × 100 = 200 cm."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "Resuelve 3x = 24.",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "answer": 2,
        "hint": "Divide ambos lados entre 3.",
        "feedback": "24 ÷ 3 = 8."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "Si 5 estudiantes tardan 12 días en decorar, y trabajan al mismo ritmo, ¿qué tipo de relación hay entre estudiantes y días?",
        "options": [
          "Directa",
          "Inversa",
          "Nula",
          "Aleatoria"
        ],
        "answer": 1,
        "hint": "Más estudiantes suelen tardar menos días.",
        "feedback": "Es proporcionalidad inversa."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Un artículo de $80.000 sube 10% y luego baja 10%. Precio final:",
        "options": [
          "$80.000",
          "$79.200",
          "$88.000",
          "$72.000"
        ],
        "answer": 1,
        "hint": "Los porcentajes se aplican sobre bases diferentes.",
        "feedback": "Sube a 88.000; baja 8.800; queda 79.200."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Si 2x + 5 = 17, x vale:",
        "options": [
          "5",
          "6",
          "7",
          "11"
        ],
        "answer": 1,
        "hint": "Resta 5 y divide entre 2.",
        "feedback": "2x=12; x=6."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "Un dado justo se lanza una vez. Probabilidad de obtener número par:",
        "options": [
          "1/6",
          "1/3",
          "1/2",
          "2/3"
        ],
        "answer": 2,
        "hint": "Pares: 2,4,6 de seis resultados.",
        "feedback": "3/6 = 1/2."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "La mediana de 2, 9, 4, 7, 10 es:",
        "options": [
          "4",
          "7",
          "8",
          "9"
        ],
        "answer": 1,
        "hint": "Ordena los datos primero.",
        "feedback": "2,4,7,9,10; el central es 7."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "Un tanque tiene 3/5 de agua. Si caben 100 L, contiene:",
        "options": [
          "30 L",
          "50 L",
          "60 L",
          "80 L"
        ],
        "answer": 2,
        "hint": "Calcula 3/5 de 100.",
        "feedback": "100 ÷ 5 × 3 = 60."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "Factor común de 6x + 9 es:",
        "options": [
          "2(3x+9)",
          "3(2x+3)",
          "6(x+9)",
          "9(6x+1)"
        ],
        "answer": 1,
        "hint": "Busca el mayor número que divide 6 y 9.",
        "feedback": "El factor común es 3."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "Una encuesta tiene 40 respuestas: 16 eligen fútbol. ¿Qué porcentaje es?",
        "options": [
          "16%",
          "25%",
          "40%",
          "60%"
        ],
        "answer": 2,
        "hint": "Divide 16 entre 40 y multiplica por 100.",
        "feedback": "16/40 = 0,4 = 40%."
      }
    ]
  },
  {
    "id": "ciencias",
    "icon": "🌱",
    "title": "Ciencias Naturales",
    "desc": "Comprensión de seres vivos, ecosistemas, cuerpo humano, método científico y cuidado ambiental.",
    "problem": "La comunidad escolar detectó disminución de aves y aumento de residuos. Debes investigar causas, formular hipótesis y proponer acciones sustentadas.",
    "explanation": [
      "El método científico inicia con observación, pregunta, hipótesis, experimentación, análisis y conclusión.",
      "Los ecosistemas integran factores bióticos y abióticos; un cambio en uno afecta a los demás.",
      "La energía fluye en cadenas alimentarias y la materia se recicla en ciclos como agua, carbono y nitrógeno.",
      "El cuerpo humano mantiene equilibrio mediante sistemas que interactúan."
    ],
    "example": [
      "Observación: hay menos mariposas en el jardín escolar.",
      "Pregunta: ¿la falta de plantas con flores reduce su presencia?",
      "Hipótesis: si sembramos plantas nectaríferas, aumentará el número de mariposas.",
      "Prueba: contar mariposas antes y después durante cuatro semanas."
    ],
    "strategies": [
      "Diario de científico joven.",
      "Caso ambiental del colegio.",
      "Mapa de relaciones causa-efecto.",
      "Reto final: propuesta ecoescolar de tres acciones."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "¿Cuál es un factor biótico en un ecosistema?",
        "options": [
          "Roca",
          "Agua",
          "Árbol",
          "Luz solar"
        ],
        "answer": 2,
        "hint": "Biótico significa que tiene vida.",
        "feedback": "El árbol es un ser vivo."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "La hipótesis es:",
        "options": [
          "Una posible explicación comprobable",
          "El resultado final",
          "Una opinión sin prueba",
          "Una lista de materiales"
        ],
        "answer": 0,
        "hint": "Debe poder ponerse a prueba.",
        "feedback": "Una hipótesis se verifica con evidencias."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "Productores en una cadena alimentaria son:",
        "options": [
          "Hongos",
          "Plantas",
          "Carnívoros",
          "Bacterias patógenas"
        ],
        "answer": 1,
        "hint": "Producen su propio alimento por fotosíntesis.",
        "feedback": "Las plantas son productores."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "El agua cambia de líquido a gas por:",
        "options": [
          "Condensación",
          "Evaporación",
          "Fusión",
          "Solidificación"
        ],
        "answer": 1,
        "hint": "Ocurre por aumento de temperatura.",
        "feedback": "Evaporación."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "Un consumidor primario suele alimentarse de:",
        "options": [
          "Plantas",
          "Carnívoros",
          "Rocas",
          "Luz"
        ],
        "answer": 0,
        "hint": "Está después de productores.",
        "feedback": "Come plantas o algas."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "Si desaparecen los depredadores, una población de herbívoros probablemente:",
        "options": [
          "Disminuye siempre",
          "Aumenta inicialmente",
          "No cambia",
          "Se vuelve productora"
        ],
        "answer": 1,
        "hint": "Piensa en control poblacional.",
        "feedback": "Puede aumentar al inicio."
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "La fotosíntesis requiere principalmente:",
        "options": [
          "Oxígeno y azúcar",
          "Luz, agua y dióxido de carbono",
          "Nitrógeno y sal",
          "Proteínas y grasa"
        ],
        "answer": 1,
        "hint": "Las plantas fabrican glucosa.",
        "feedback": "Usan luz, agua y CO₂."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "El sistema que transporta oxígeno y nutrientes en humanos es:",
        "options": [
          "Digestivo",
          "Circulatorio",
          "Óseo",
          "Nervioso"
        ],
        "answer": 1,
        "hint": "La sangre circula por vasos.",
        "feedback": "Sistema circulatorio."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "Una variable independiente en un experimento es:",
        "options": [
          "La que se mide",
          "La que se cambia intencionalmente",
          "La conclusión",
          "La muestra"
        ],
        "answer": 1,
        "hint": "El investigador la modifica.",
        "feedback": "Es la causa puesta a prueba."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "La biodiversidad alta en un ecosistema ayuda a:",
        "options": [
          "Reducir resiliencia",
          "Aumentar equilibrio y recuperación",
          "Eliminar productores",
          "Evitar ciclos naturales"
        ],
        "answer": 1,
        "hint": "Más diversidad puede dar estabilidad.",
        "feedback": "Favorece resiliencia ecológica."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "En el ciclo del carbono, las plantas toman CO₂ mediante:",
        "options": [
          "Respiración",
          "Fotosíntesis",
          "Evaporación",
          "Digestión"
        ],
        "answer": 1,
        "hint": "Capturan carbono atmosférico.",
        "feedback": "Fotosíntesis."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "Un dato cualitativo es:",
        "options": [
          "Altura 1,60 m",
          "Color de hojas verde oscuro",
          "Temperatura 25 °C",
          "Masa 3 kg"
        ],
        "answer": 1,
        "hint": "Describe cualidades, no números.",
        "feedback": "Color es cualitativo."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "La función principal de los descomponedores es:",
        "options": [
          "Producir luz",
          "Reciclar materia orgánica",
          "Cazar herbívoros",
          "Evaporar agua"
        ],
        "answer": 1,
        "hint": "Transforman restos.",
        "feedback": "Devuelven nutrientes al suelo."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Si un fertilizante llega al río y aumentan algas excesivamente, puede ocurrir:",
        "options": [
          "Eutrofización",
          "Condensación",
          "Erosión eólica",
          "Mutualismo"
        ],
        "answer": 0,
        "hint": "Exceso de nutrientes en agua.",
        "feedback": "Eutrofización."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Una red trófica es más realista que una cadena porque:",
        "options": [
          "Tiene una sola ruta",
          "Muestra varias relaciones alimentarias",
          "Elimina productores",
          "Solo incluye humanos"
        ],
        "answer": 1,
        "hint": "Los seres vivos comen y son comidos por varios organismos.",
        "feedback": "Representa relaciones múltiples."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "El control experimental sirve para:",
        "options": [
          "Comparar sin la variable probada",
          "Aumentar errores",
          "Cambiar todos los factores",
          "Evitar conclusiones"
        ],
        "answer": 0,
        "hint": "Es punto de comparación.",
        "feedback": "Permite saber si la variable influyó."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "En una investigación escolar, repetir mediciones mejora:",
        "options": [
          "La estética",
          "La confiabilidad",
          "La opinión",
          "El azar"
        ],
        "answer": 1,
        "hint": "Reduce errores accidentales.",
        "feedback": "Aumenta confiabilidad."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "La adaptación es:",
        "options": [
          "Cambio útil heredable o rasgo que favorece supervivencia",
          "Una decisión diaria",
          "Una enfermedad",
          "Un recurso abiótico"
        ],
        "answer": 0,
        "hint": "Se relaciona con supervivencia y reproducción.",
        "feedback": "Rasgos ventajosos."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "Si sube la temperatura de un hábitat, una especie puede responder con:",
        "options": [
          "Migración, adaptación o disminución poblacional",
          "Fotosíntesis inmediata",
          "Cambio a roca",
          "Eliminación de agua"
        ],
        "answer": 0,
        "hint": "Piensa en respuestas biológicas.",
        "feedback": "Puede desplazarse, adaptarse o reducirse."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "Una conclusión científica debe basarse en:",
        "options": [
          "Gustos",
          "Evidencias y análisis",
          "Autoridad sin datos",
          "Rumores"
        ],
        "answer": 1,
        "hint": "Los datos respaldan conclusiones.",
        "feedback": "Evidencia primero."
      }
    ]
  },
  {
    "id": "sociales",
    "icon": "🗺️",
    "title": "Ciencias Sociales",
    "desc": "Historia, geografía, ciudadanía, democracia, derechos y lectura crítica del territorio colombiano y mundial.",
    "problem": "El consejo estudiantil debe decidir cómo mejorar la convivencia y el uso del espacio escolar, considerando derechos, diversidad, participación y memoria histórica.",
    "explanation": [
      "Las ciencias sociales analizan relaciones entre personas, territorios, instituciones, economía, cultura y tiempo histórico.",
      "Un hecho histórico se comprende con causas, actores, consecuencias y fuentes.",
      "La ciudadanía implica derechos, deberes, participación democrática y resolución pacífica de conflictos.",
      "La geografía permite interpretar mapas, escalas, regiones y relaciones sociedad-naturaleza."
    ],
    "example": [
      "Caso: conflicto por uso de la cancha escolar.",
      "Actores: estudiantes de diferentes grados, docentes y directivos.",
      "Derechos involucrados: recreación, igualdad, participación.",
      "Solución ABP: diagnosticar horarios, dialogar y proponer regla consensuada."
    ],
    "strategies": [
      "Debate con roles: mediador, relator, ciudadano, observador.",
      "Mapa mental de causas y consecuencias.",
      "Estudio de caso territorial.",
      "Semáforo ciudadano: acuerdo, duda, desacuerdo argumentado."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "Una fuente primaria histórica puede ser:",
        "options": [
          "Un testimonio de la época",
          "Un resumen actual",
          "Una enciclopedia escolar",
          "Una película de ficción"
        ],
        "answer": 0,
        "hint": "Fue producida en el tiempo estudiado.",
        "feedback": "Testimonio directo."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "La democracia escolar se fortalece con:",
        "options": [
          "Participación informada",
          "Imposición sin diálogo",
          "Exclusión",
          "Rumores"
        ],
        "answer": 0,
        "hint": "Implica deliberación y elección.",
        "feedback": "Participación informada."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "Un mapa político muestra principalmente:",
        "options": [
          "Ríos",
          "Divisiones territoriales",
          "Climas",
          "Relieves"
        ],
        "answer": 1,
        "hint": "Político se relaciona con límites administrativos.",
        "feedback": "Países, departamentos, municipios."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "Un derecho de los niños y niñas es:",
        "options": [
          "Ser discriminados",
          "Recibir educación",
          "No participar nunca",
          "Trabajar obligatoriamente"
        ],
        "answer": 1,
        "hint": "La educación es un derecho fundamental.",
        "feedback": "Recibir educación."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "La convivencia pacífica requiere:",
        "options": [
          "Escucha y respeto",
          "Burla",
          "Violencia",
          "Silencio obligatorio"
        ],
        "answer": 0,
        "hint": "Resolver conflictos con diálogo.",
        "feedback": "Escucha activa."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "Para analizar un problema social, lo primero es:",
        "options": [
          "Culpar a alguien",
          "Identificar actores y causas",
          "Ignorar datos",
          "Elegir solución sin diagnóstico"
        ],
        "answer": 1,
        "hint": "ABP inicia con comprensión del problema.",
        "feedback": "Actores y causas."
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "Una consecuencia de la Revolución Industrial fue:",
        "options": [
          "Crecimiento de fábricas urbanas",
          "Desaparición de ciudades",
          "Fin de máquinas",
          "Eliminación del comercio"
        ],
        "answer": 0,
        "hint": "Transformó producción y vida urbana.",
        "feedback": "Fábricas y urbanización."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "La escala de un mapa sirve para:",
        "options": [
          "Medir relación entre mapa y realidad",
          "Colorear países",
          "Elegir presidente",
          "Explicar culturas"
        ],
        "answer": 0,
        "hint": "Indica proporcionalidad espacial.",
        "feedback": "Relación mapa-territorio."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "Un conflicto se transforma mejor cuando:",
        "options": [
          "Se reconocen intereses de las partes",
          "Se elimina una parte",
          "Se evita todo diálogo",
          "Se usa solo castigo"
        ],
        "answer": 0,
        "hint": "La mediación busca comprender intereses.",
        "feedback": "Reconocer intereses."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "La Constitución es importante porque:",
        "options": [
          "Organiza derechos, deberes e instituciones",
          "Es un mapa climático",
          "Solo contiene cuentos",
          "Reemplaza la historia"
        ],
        "answer": 0,
        "hint": "Define reglas básicas del Estado.",
        "feedback": "Marco jurídico y ciudadano."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "Una causa estructural de desigualdad puede ser:",
        "options": [
          "Acceso desigual a educación",
          "Color favorito",
          "Horario de recreo",
          "Lluvia diaria"
        ],
        "answer": 0,
        "hint": "Afecta oportunidades de largo plazo.",
        "feedback": "Educación desigual."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "La diversidad cultural significa:",
        "options": [
          "Existencia de distintas formas de vida y expresión",
          "Todos piensan igual",
          "Eliminar tradiciones",
          "Solo hablar un idioma"
        ],
        "answer": 0,
        "hint": "Reconoce pluralidad.",
        "feedback": "Diferentes culturas y expresiones."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "Una línea de tiempo ayuda a:",
        "options": [
          "Ordenar hechos cronológicamente",
          "Medir temperatura",
          "Resolver ecuaciones",
          "Ubicar ríos únicamente"
        ],
        "answer": 0,
        "hint": "Organiza sucesos por fechas.",
        "feedback": "Orden temporal."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Si una comunidad decide sobre su presupuesto con asambleas abiertas, practica:",
        "options": [
          "Participación ciudadana",
          "Autoritarismo",
          "Censura",
          "Colonización"
        ],
        "answer": 0,
        "hint": "La comunidad interviene en decisiones públicas.",
        "feedback": "Participación."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Analizar varias fuentes históricas permite:",
        "options": [
          "Contrastar versiones",
          "Confirmar prejuicios",
          "Evitar preguntas",
          "Eliminar evidencias"
        ],
        "answer": 0,
        "hint": "La historia requiere contrastar fuentes.",
        "feedback": "Comparación crítica."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "Una relación sociedad-naturaleza se observa cuando:",
        "options": [
          "La minería transforma un territorio",
          "Un número se multiplica",
          "Un poema rima",
          "Una célula se divide"
        ],
        "answer": 0,
        "hint": "Une acción humana y ambiente.",
        "feedback": "Actividad económica impacta territorio."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "La resolución pacífica de conflictos prioriza:",
        "options": [
          "Diálogo, acuerdos y reparación",
          "Venganza",
          "Rumor",
          "Humillación"
        ],
        "answer": 0,
        "hint": "Busca soluciones justas.",
        "feedback": "Diálogo y reparación."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "Una decisión pública es legítima cuando:",
        "options": [
          "Respeta derechos y procedimientos",
          "Beneficia solo a un amigo",
          "Oculta información",
          "Prohíbe opinar"
        ],
        "answer": 0,
        "hint": "La legitimidad combina reglas y derechos.",
        "feedback": "Derechos + procedimientos."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "En un mapa, si 1 cm representa 10 km, 4 cm representan:",
        "options": [
          "4 km",
          "10 km",
          "40 km",
          "400 km"
        ],
        "answer": 2,
        "hint": "Multiplica distancia del mapa por equivalencia.",
        "feedback": "4 × 10 = 40 km."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "El pensamiento crítico ciudadano implica:",
        "options": [
          "Argumentar con evidencias",
          "Creer todo sin revisar",
          "Atacar personas",
          "No escuchar"
        ],
        "answer": 0,
        "hint": "Usa razones y datos.",
        "feedback": "Argumentación con evidencia."
      }
    ]
  },
  {
    "id": "lenguaje",
    "icon": "📚",
    "title": "Lenguaje",
    "desc": "Comprensión lectora, producción textual, literatura, argumentación, ortografía funcional y comunicación oral.",
    "problem": "Debes preparar una campaña escolar para convencer a otros estudiantes de cuidar la biblioteca, usando lectura crítica, escritura argumentativa y comunicación respetuosa.",
    "explanation": [
      "Comprender un texto implica identificar idea principal, información explícita, inferencias e intención comunicativa.",
      "Un texto argumentativo presenta tesis, razones, evidencias y cierre.",
      "La cohesión usa conectores; la coherencia mantiene unidad temática y orden lógico.",
      "La literatura permite interpretar símbolos, personajes, conflicto, narrador y contexto."
    ],
    "example": [
      "Tesis: La biblioteca debe cuidarse porque es un espacio de aprendizaje común.",
      "Razón 1: Permite estudiar en silencio.",
      "Evidencia: Si los libros están dañados, menos estudiantes pueden consultarlos.",
      "Cierre: Cuidarla es una forma concreta de respetar a la comunidad."
    ],
    "strategies": [
      "Club de detectives de ideas principales.",
      "Reto de conectores para desbloquear niveles.",
      "Estudio de caso: campaña de biblioteca.",
      "Lectura en voz alta con pausa, pregunta y predicción."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "La idea principal de un texto es:",
        "options": [
          "El detalle menos importante",
          "El tema central que organiza la información",
          "Una palabra difícil",
          "El nombre del autor"
        ],
        "answer": 1,
        "hint": "Resume de qué trata principalmente.",
        "feedback": "Tema central."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "Un sinónimo de “rápido” es:",
        "options": [
          "Veloz",
          "Lento",
          "Oscuro",
          "Débil"
        ],
        "answer": 0,
        "hint": "Busca significado parecido.",
        "feedback": "Veloz."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "En “María estudió porque tenía evaluación”, el conector “porque” indica:",
        "options": [
          "Causa",
          "Contraste",
          "Tiempo",
          "Conclusión"
        ],
        "answer": 0,
        "hint": "Explica la razón.",
        "feedback": "Causa."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "La sílaba tónica de “camión” está en:",
        "options": [
          "ca",
          "mión",
          "ninguna",
          "ambas"
        ],
        "answer": 1,
        "hint": "La tilde marca la fuerza.",
        "feedback": "mión."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "Un personaje principal es:",
        "options": [
          "Quien aparece de forma central en la historia",
          "Un lugar",
          "El título",
          "Un signo"
        ],
        "answer": 0,
        "hint": "Sostiene la acción narrativa.",
        "feedback": "Personaje central."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "La tesis en un texto argumentativo es:",
        "options": [
          "La postura que se defiende",
          "Un ejemplo decorativo",
          "La bibliografía",
          "Un saludo"
        ],
        "answer": 0,
        "hint": "Es la idea que quieres probar.",
        "feedback": "Postura central."
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "“Sin embargo” se usa para:",
        "options": [
          "Contrastar ideas",
          "Sumar cantidades",
          "Indicar causa",
          "Cerrar una carta"
        ],
        "answer": 0,
        "hint": "Introduce oposición.",
        "feedback": "Conector de contraste."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "Una inferencia es:",
        "options": [
          "Conclusión que se deduce del texto",
          "Copia literal",
          "Error ortográfico",
          "Lista de autores"
        ],
        "answer": 0,
        "hint": "No siempre está explícita.",
        "feedback": "Se deduce con pistas."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "En una noticia, el titular cumple la función de:",
        "options": [
          "Presentar el hecho principal",
          "Ocultar información",
          "Describir solo personajes",
          "Repetir el final"
        ],
        "answer": 0,
        "hint": "Debe informar y atraer.",
        "feedback": "Hecho principal."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "Un párrafo coherente debe:",
        "options": [
          "Tratar una idea central con orden",
          "Mezclar temas sin relación",
          "No tener conectores",
          "Usar solo mayúsculas"
        ],
        "answer": 0,
        "hint": "Coherencia es unidad y orden.",
        "feedback": "Idea central ordenada."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "El narrador en primera persona suele usar:",
        "options": [
          "Yo/nosotros",
          "Él/ella",
          "Usted",
          "Nadie"
        ],
        "answer": 0,
        "hint": "Participa o cuenta desde su voz.",
        "feedback": "Yo o nosotros."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "Una evidencia adecuada para una campaña de lectura sería:",
        "options": [
          "Dato de préstamo de libros",
          "Insulto a quien no lee",
          "Rumor sin fuente",
          "Dibujo sin relación"
        ],
        "answer": 0,
        "hint": "La evidencia apoya la tesis.",
        "feedback": "Dato pertinente."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "La palabra correctamente escrita es:",
        "options": [
          "Exelente",
          "Excelente",
          "Eccelente",
          "Exselente"
        ],
        "answer": 1,
        "hint": "Revisa la secuencia xc.",
        "feedback": "Excelente."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Si un texto busca persuadir, su intención comunicativa es:",
        "options": [
          "Convencer",
          "Entretener únicamente",
          "Enumerar sonidos",
          "Medir distancia"
        ],
        "answer": 0,
        "hint": "Persuadir significa convencer.",
        "feedback": "Convencer."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Una falacia ocurre cuando:",
        "options": [
          "Un argumento parece válido pero tiene error de razonamiento",
          "Un texto tiene título",
          "Hay conectores",
          "Se cita una fuente"
        ],
        "answer": 0,
        "hint": "No toda razón aparente es sólida.",
        "feedback": "Error argumentativo."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "La estructura básica de un cuento incluye:",
        "options": [
          "Inicio, nudo y desenlace",
          "Hipótesis y experimento",
          "Mapa y escala",
          "Tesis y decreto"
        ],
        "answer": 0,
        "hint": "Secuencia narrativa clásica.",
        "feedback": "Inicio-nudo-desenlace."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "“Por consiguiente” introduce:",
        "options": [
          "Consecuencia",
          "Contraste",
          "Duda",
          "Ejemplo"
        ],
        "answer": 0,
        "hint": "Equivale a por lo tanto.",
        "feedback": "Consecuencia."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "Leer críticamente una publicación en redes exige:",
        "options": [
          "Verificar fuente, intención y evidencia",
          "Compartir de inmediato",
          "Creer por cantidad de likes",
          "Ignorar fecha"
        ],
        "answer": 0,
        "hint": "Evalúa confiabilidad.",
        "feedback": "Fuente + intención + evidencia."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "Una reseña combina principalmente:",
        "options": [
          "Resumen y valoración argumentada",
          "Solo copia textual",
          "Lista de precios",
          "Instrucciones de laboratorio"
        ],
        "answer": 0,
        "hint": "Reseñar implica comentar críticamente.",
        "feedback": "Resumen + opinión sustentada."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "Para mejorar cohesión en un texto, conviene:",
        "options": [
          "Usar conectores y referencias claras",
          "Cambiar tema cada línea",
          "Eliminar signos",
          "Repetir todo igual"
        ],
        "answer": 0,
        "hint": "La cohesión une ideas.",
        "feedback": "Conectores y referencias."
      }
    ]
  },
  {
    "id": "ingles",
    "icon": "🌍",
    "title": "Inglés / Idiomas",
    "desc": "Comprensión y producción básica en inglés para situaciones escolares, descripciones, rutinas, opiniones y problemas cotidianos.",
    "problem": "Un estudiante nuevo de intercambio llega al colegio. Debes orientarlo en inglés: horarios, normas, lugares, gustos, problemas y soluciones sencillas.",
    "explanation": [
      "Usa present simple para rutinas: I study, she studies.",
      "Usa there is / there are para describir lugares.",
      "Usa can/can’t para habilidades, permisos o posibilidades.",
      "Para dar opiniones: I think..., In my opinion..., because..."
    ],
    "example": [
      "Situation: A new student asks about the library.",
      "Answer: There is a library next to the science lab. You can borrow books with your student card.",
      "Opinion: I think the library is useful because it is quiet.",
      "Key: short, clear sentences with familiar vocabulary."
    ],
    "strategies": [
      "Role-play de guía escolar.",
      "Tarjetas de vocabulario con puntos.",
      "Misiones bilingües: ask, answer, help.",
      "Mini diálogos colaborativos."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "Choose the correct greeting for the morning.",
        "options": [
          "Good night",
          "Good morning",
          "Good bye",
          "See you"
        ],
        "answer": 1,
        "hint": "Morning significa mañana.",
        "feedback": "Good morning."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "Complete: She ___ English on Mondays.",
        "options": [
          "study",
          "studies",
          "studying",
          "to study"
        ],
        "answer": 1,
        "hint": "Third person singular adds -s.",
        "feedback": "She studies."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "“There are three classrooms” means:",
        "options": [
          "Hay tres salones",
          "Tengo tres salones",
          "Fui al salón",
          "El salón es rojo"
        ],
        "answer": 0,
        "hint": "There are = hay en plural.",
        "feedback": "Hay tres salones."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "The opposite of “big” is:",
        "options": [
          "Small",
          "Tall",
          "Fast",
          "Clean"
        ],
        "answer": 0,
        "hint": "Busca antónimo.",
        "feedback": "Small."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "Complete: I ___ play soccer.",
        "options": [
          "can",
          "am",
          "is",
          "does"
        ],
        "answer": 0,
        "hint": "Can expresa habilidad.",
        "feedback": "I can play soccer."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "Choose the question: “¿Dónde está la biblioteca?”",
        "options": [
          "What is your name?",
          "Where is the library?",
          "How old are you?",
          "When is lunch?"
        ],
        "answer": 1,
        "hint": "Where pregunta por lugar.",
        "feedback": "Where is the library?"
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "Complete: My brother ___ like vegetables.",
        "options": [
          "don’t",
          "doesn’t",
          "isn’t",
          "aren’t"
        ],
        "answer": 1,
        "hint": "Brother = he; negative present simple uses doesn’t.",
        "feedback": "He doesn’t like."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "Which sentence gives an opinion?",
        "options": [
          "The lab is next to room 8.",
          "I think science is interesting.",
          "There are 20 desks.",
          "Open the book."
        ],
        "answer": 1,
        "hint": "I think introduce opinión.",
        "feedback": "I think..."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "Choose the correct plural: one child, two ___.",
        "options": [
          "childs",
          "children",
          "childes",
          "childrens"
        ],
        "answer": 1,
        "hint": "Irregular plural.",
        "feedback": "children."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "Complete: We go to school ___ bus.",
        "options": [
          "in",
          "on",
          "by",
          "at"
        ],
        "answer": 2,
        "hint": "Transport mode commonly uses by.",
        "feedback": "by bus."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "“Because” is used to express:",
        "options": [
          "Reason",
          "Place",
          "Color",
          "Number"
        ],
        "answer": 0,
        "hint": "Because = porque.",
        "feedback": "Reason."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "Choose the correct instruction:",
        "options": [
          "Please open your notebook.",
          "Please notebook your open.",
          "Open please notebook your.",
          "Your please open notebook."
        ],
        "answer": 0,
        "hint": "Orden natural: verb + object.",
        "feedback": "Open your notebook."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "Complete: There ___ a cafeteria near the playground.",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "answer": 1,
        "hint": "Singular: a cafeteria.",
        "feedback": "There is."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Best answer to: “How often do you read?”",
        "options": [
          "In the library",
          "Twice a week",
          "Because I like it",
          "It is blue"
        ],
        "answer": 1,
        "hint": "How often pregunta frecuencia.",
        "feedback": "Twice a week."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Choose the correct sentence:",
        "options": [
          "She can to swim.",
          "She can swims.",
          "She can swim.",
          "She cans swim."
        ],
        "answer": 2,
        "hint": "After can, verb base form.",
        "feedback": "can swim."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "Which sentence is in past simple?",
        "options": [
          "I visited the museum yesterday.",
          "I visit the museum every day.",
          "I am visiting now.",
          "I will visit tomorrow."
        ],
        "answer": 0,
        "hint": "Yesterday marca pasado.",
        "feedback": "visited."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "Complete: If you are lost, you ___ ask a teacher.",
        "options": [
          "should",
          "are",
          "does",
          "was"
        ],
        "answer": 0,
        "hint": "Should da consejo.",
        "feedback": "You should ask."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "Translate: “Estoy de acuerdo porque es justo.”",
        "options": [
          "I disagree because it is late.",
          "I agree because it is fair.",
          "I am fair because agree.",
          "It is agree because fair."
        ],
        "answer": 1,
        "hint": "Agree = estar de acuerdo; fair = justo.",
        "feedback": "I agree because it is fair."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "Choose the best connector: I like math, ___ it is challenging.",
        "options": [
          "because",
          "where",
          "who",
          "when"
        ],
        "answer": 0,
        "hint": "Se necesita razón.",
        "feedback": "because."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "Best response to help a new student:",
        "options": [
          "You can find the office next to the library.",
          "Blue and red.",
          "I am twelve.",
          "No, yesterday."
        ],
        "answer": 0,
        "hint": "Es una orientación útil.",
        "feedback": "Locate the office."
      }
    ]
  },
  {
    "id": "fisica",
    "icon": "⚙️",
    "title": "Física",
    "desc": "Magnitudes, medición, movimiento, fuerza, energía, máquinas simples y análisis de fenómenos cotidianos.",
    "problem": "El colegio organizará una carrera de carros impulsados por bandas elásticas. Debes medir distancia, tiempo, velocidad, fuerza y energía para mejorar el diseño.",
    "explanation": [
      "La física estudia fenómenos como movimiento, fuerzas, energía, ondas y cambios en sistemas.",
      "Una magnitud física se mide con unidad: longitud en metros, tiempo en segundos, masa en kilogramos.",
      "Velocidad media = distancia ÷ tiempo.",
      "La energía se transforma; no aparece de la nada ni desaparece, se conserva en sistemas ideales."
    ],
    "example": [
      "Un carro recorre 12 m en 4 s.",
      "Fórmula: velocidad = distancia ÷ tiempo.",
      "Cálculo: 12 ÷ 4 = 3 m/s.",
      "Interpretación: cada segundo avanza en promedio 3 metros."
    ],
    "strategies": [
      "Laboratorio casero seguro con medición.",
      "Competencia de diseño: mejorar, probar y justificar.",
      "Tarjetas de fórmulas útiles.",
      "Análisis de errores de medición."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "La unidad del Sistema Internacional para medir longitud es:",
        "options": [
          "Metro",
          "Litro",
          "Gramo",
          "Hora"
        ],
        "answer": 0,
        "hint": "Longitud se mide en metros.",
        "feedback": "Metro."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "Si un objeto recorre 10 m en 2 s, su velocidad media es:",
        "options": [
          "2 m/s",
          "5 m/s",
          "10 m/s",
          "20 m/s"
        ],
        "answer": 1,
        "hint": "v = d/t.",
        "feedback": "10 ÷ 2 = 5 m/s."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "La fuerza se mide en:",
        "options": [
          "Newton",
          "Metro",
          "Segundo",
          "Litro"
        ],
        "answer": 0,
        "hint": "La unidad SI de fuerza honra a Newton.",
        "feedback": "Newton."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "La energía puede:",
        "options": [
          "Transformarse",
          "Desaparecer siempre",
          "Crearse de la nada",
          "Ser solo color"
        ],
        "answer": 0,
        "hint": "Principio de conservación.",
        "feedback": "Se transforma."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "Un ejemplo de máquina simple es:",
        "options": [
          "Palanca",
          "Celular",
          "Computador",
          "Bombillo LED"
        ],
        "answer": 0,
        "hint": "Palanca, polea, plano inclinado son máquinas simples.",
        "feedback": "Palanca."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "Si aumentas la masa y aplicas la misma fuerza, la aceleración tiende a:",
        "options": [
          "Disminuir",
          "Aumentar siempre",
          "Ser infinita",
          "No existir"
        ],
        "answer": 0,
        "hint": "Mayor masa resiste más el cambio de movimiento.",
        "feedback": "Disminuye."
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "Un cuerpo en reposo permanece en reposo si:",
        "options": [
          "La fuerza neta es cero",
          "Siempre hay viento",
          "No tiene masa",
          "Tiene color claro"
        ],
        "answer": 0,
        "hint": "Primera ley de Newton.",
        "feedback": "Fuerza neta cero."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "La fricción generalmente:",
        "options": [
          "Se opone al movimiento",
          "Aumenta siempre la velocidad",
          "No existe en superficies",
          "Solo actúa en el aire"
        ],
        "answer": 0,
        "hint": "Rozamiento se opone al deslizamiento relativo.",
        "feedback": "Se opone."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "Trabajo mecánico se relaciona con:",
        "options": [
          "Fuerza y desplazamiento",
          "Color y forma",
          "Volumen y sabor",
          "Tiempo y ortografía"
        ],
        "answer": 0,
        "hint": "W = F × d si van en la misma dirección.",
        "feedback": "Fuerza por desplazamiento."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "Si una bicicleta baja una pendiente, energía potencial se transforma principalmente en:",
        "options": [
          "Cinética",
          "Sonora únicamente",
          "Química",
          "Nuclear"
        ],
        "answer": 0,
        "hint": "Al bajar, gana movimiento.",
        "feedback": "Energía cinética."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "Un instrumento para medir masa es:",
        "options": [
          "Balanza",
          "Cronómetro",
          "Regla",
          "Termómetro"
        ],
        "answer": 0,
        "hint": "Masa se mide con balanza.",
        "feedback": "Balanza."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "La aceleración indica cambio de:",
        "options": [
          "Velocidad en el tiempo",
          "Color",
          "Densidad únicamente",
          "Temperatura siempre"
        ],
        "answer": 0,
        "hint": "Aceleración = variación de velocidad / tiempo.",
        "feedback": "Cambio de velocidad."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "Una polea fija ayuda principalmente a:",
        "options": [
          "Cambiar dirección de la fuerza",
          "Eliminar masa",
          "Crear energía",
          "Medir temperatura"
        ],
        "answer": 0,
        "hint": "Permite halar hacia abajo para subir carga.",
        "feedback": "Cambia dirección."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Un carro recorre 30 m en 5 s. Velocidad media:",
        "options": [
          "5 m/s",
          "6 m/s",
          "10 m/s",
          "150 m/s"
        ],
        "answer": 1,
        "hint": "v=d/t.",
        "feedback": "30 ÷ 5 = 6."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Si no se consideran pérdidas, la energía mecánica total:",
        "options": [
          "Se conserva",
          "Se duplica siempre",
          "Se vuelve cero",
          "Depende del color"
        ],
        "answer": 0,
        "hint": "Idealmente se conserva.",
        "feedback": "Se conserva."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "La fuerza neta de 8 N a la derecha y 3 N a la izquierda es:",
        "options": [
          "5 N derecha",
          "11 N izquierda",
          "24 N derecha",
          "5 N izquierda"
        ],
        "answer": 0,
        "hint": "Resta fuerzas opuestas.",
        "feedback": "8-3=5 a la derecha."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "Un objeto pesa más en un planeta con mayor gravedad porque:",
        "options": [
          "Peso = masa × gravedad",
          "Masa cambia a voluntad",
          "Volumen desaparece",
          "La energía se congela"
        ],
        "answer": 0,
        "hint": "Peso depende de g.",
        "feedback": "P = m·g."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "Si duplicas distancia con igual tiempo, la velocidad:",
        "options": [
          "Se duplica",
          "Se reduce a la mitad",
          "No cambia",
          "Se vuelve negativa"
        ],
        "answer": 0,
        "hint": "v=d/t; si t igual, v proporcional a d.",
        "feedback": "Se duplica."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "Una gráfica distancia-tiempo con línea recta inclinada indica:",
        "options": [
          "Velocidad constante",
          "Reposo absoluto siempre",
          "Masa variable",
          "Temperatura constante"
        ],
        "answer": 0,
        "hint": "Pendiente constante = velocidad constante.",
        "feedback": "Velocidad constante."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "En un experimento de carros, controlar la pendiente significa:",
        "options": [
          "Mantenerla igual en todas las pruebas",
          "Cambiarla al azar",
          "No medirla",
          "Eliminar la distancia"
        ],
        "answer": 0,
        "hint": "Controlar variable evita sesgo.",
        "feedback": "Misma pendiente."
      }
    ]
  },
  {
    "id": "quimica",
    "icon": "🧪",
    "title": "Química",
    "desc": "Materia, propiedades, mezclas, cambios físicos y químicos, átomo, tabla periódica y seguridad de laboratorio escolar.",
    "problem": "El laboratorio escolar necesita clasificar sustancias, separar mezclas y diseñar normas de seguridad antes de una feria de ciencias.",
    "explanation": [
      "La química estudia la materia, su composición, propiedades y transformaciones.",
      "La materia puede presentarse como sustancias puras o mezclas; las mezclas pueden ser homogéneas o heterogéneas.",
      "Un cambio físico no forma sustancias nuevas; un cambio químico sí.",
      "La tabla periódica organiza elementos por número atómico y propiedades semejantes."
    ],
    "example": [
      "Caso: agua con sal.",
      "Tipo: mezcla homogénea porque la sal se distribuye uniformemente.",
      "Método de separación: evaporación del agua para recuperar sal.",
      "Seguridad: no probar sustancias y usar protección según indicación."
    ],
    "strategies": [
      "Detectives de laboratorio.",
      "Clasificación con tarjetas de sustancias.",
      "Caso de seguridad: ¿qué harías si...?",
      "Reto de separación de mezclas con materiales cotidianos."
    ],
    "exercises": [
      {
        "n": 1,
        "level": "Explorador",
        "q": "La materia es todo lo que:",
        "options": [
          "Tiene masa y ocupa espacio",
          "Solo brilla",
          "No se puede tocar nunca",
          "Es una idea"
        ],
        "answer": 0,
        "hint": "Materia tiene masa y volumen.",
        "feedback": "Masa y espacio."
      },
      {
        "n": 2,
        "level": "Explorador",
        "q": "El agua líquida que se congela sufre cambio:",
        "options": [
          "Físico",
          "Químico",
          "Nuclear",
          "Biológico"
        ],
        "answer": 0,
        "hint": "Sigue siendo agua.",
        "feedback": "Cambio físico."
      },
      {
        "n": 3,
        "level": "Explorador",
        "q": "Una mezcla homogénea es:",
        "options": [
          "Agua con sal",
          "Agua con arena",
          "Ensalada",
          "Piedras y arroz"
        ],
        "answer": 0,
        "hint": "Se ve uniforme.",
        "feedback": "Agua con sal."
      },
      {
        "n": 4,
        "level": "Explorador",
        "q": "El símbolo químico del oxígeno es:",
        "options": [
          "Ox",
          "O",
          "Og",
          "Oc"
        ],
        "answer": 1,
        "hint": "Símbolo de una letra mayúscula.",
        "feedback": "O."
      },
      {
        "n": 5,
        "level": "Explorador",
        "q": "El instrumento de seguridad para proteger ojos es:",
        "options": [
          "Gafas de seguridad",
          "Regla",
          "Cuaderno",
          "Embudo"
        ],
        "answer": 0,
        "hint": "Protegen salpicaduras.",
        "feedback": "Gafas."
      },
      {
        "n": 6,
        "level": "Estratega",
        "q": "La filtración sirve para separar:",
        "options": [
          "Sólido insoluble de un líquido",
          "Dos gases idénticos",
          "Sal disuelta totalmente",
          "Luz y calor"
        ],
        "answer": 0,
        "hint": "Filtro retiene partículas.",
        "feedback": "Arena y agua, por ejemplo."
      },
      {
        "n": 7,
        "level": "Estratega",
        "q": "Quemar papel es cambio químico porque:",
        "options": [
          "Forma sustancias nuevas",
          "Solo cambia de forma",
          "Sigue siendo papel igual",
          "Se congela"
        ],
        "answer": 0,
        "hint": "La combustión produce cenizas y gases.",
        "feedback": "Cambio químico."
      },
      {
        "n": 8,
        "level": "Estratega",
        "q": "El número atómico indica:",
        "options": [
          "Cantidad de protones",
          "Cantidad de vasos",
          "Temperatura",
          "Color"
        ],
        "answer": 0,
        "hint": "Identifica al elemento.",
        "feedback": "Número de protones."
      },
      {
        "n": 9,
        "level": "Estratega",
        "q": "Los elementos de una misma familia en la tabla periódica tienen:",
        "options": [
          "Propiedades semejantes",
          "Misma masa siempre",
          "Mismo color obligatorio",
          "Igual tamaño visible"
        ],
        "answer": 0,
        "hint": "Grupos comparten comportamiento químico.",
        "feedback": "Propiedades parecidas."
      },
      {
        "n": 10,
        "level": "Estratega",
        "q": "Una propiedad física es:",
        "options": [
          "Punto de ebullición",
          "Inflamabilidad",
          "Oxidación",
          "Reactividad con ácido"
        ],
        "answer": 0,
        "hint": "Se observa sin formar sustancia nueva.",
        "feedback": "Punto de ebullición."
      },
      {
        "n": 11,
        "level": "Estratega",
        "q": "La decantación separa por diferencia de:",
        "options": [
          "Densidad",
          "Idioma",
          "Sonido",
          "Carga política"
        ],
        "answer": 0,
        "hint": "Una fase queda arriba y otra abajo.",
        "feedback": "Densidad."
      },
      {
        "n": 12,
        "level": "Estratega",
        "q": "Una solución está formada por:",
        "options": [
          "Soluto y solvente",
          "Núcleo y órbita",
          "Mapa y escala",
          "Tesis y razón"
        ],
        "answer": 0,
        "hint": "Soluto se disuelve en solvente.",
        "feedback": "Soluto + solvente."
      },
      {
        "n": 13,
        "level": "Estratega",
        "q": "El pH permite estimar si una sustancia es:",
        "options": [
          "Ácida, neutra o básica",
          "Rápida o lenta",
          "Grande o pequeña",
          "Histórica o geográfica"
        ],
        "answer": 0,
        "hint": "Escala ácido-base.",
        "feedback": "Ácido/base."
      },
      {
        "n": 14,
        "level": "Experto",
        "q": "Si se evaporan 100 mL de agua salada, la sal:",
        "options": [
          "Queda como residuo",
          "Desaparece químicamente",
          "Se vuelve oxígeno",
          "Se transforma en arena"
        ],
        "answer": 0,
        "hint": "La sal no evapora como el agua.",
        "feedback": "Queda residuo."
      },
      {
        "n": 15,
        "level": "Experto",
        "q": "Una evidencia de reacción química puede ser:",
        "options": [
          "Formación de gas o precipitado",
          "Cambio de recipiente",
          "Medición con regla",
          "Dibujar tabla"
        ],
        "answer": 0,
        "hint": "Indica nuevas sustancias.",
        "feedback": "Gas/precipitado."
      },
      {
        "n": 16,
        "level": "Experto",
        "q": "El átomo está formado principalmente por:",
        "options": [
          "Protones, neutrones y electrones",
          "Células y tejidos",
          "Rocas y agua",
          "Letras y signos"
        ],
        "answer": 0,
        "hint": "Partículas subatómicas básicas.",
        "feedback": "p, n, e."
      },
      {
        "n": 17,
        "level": "Experto",
        "q": "Un compuesto se diferencia de una mezcla porque:",
        "options": [
          "Tiene unión química en proporción definida",
          "Se separa siempre con imán",
          "No tiene materia",
          "Solo existe líquido"
        ],
        "answer": 0,
        "hint": "Composición fija y enlaces.",
        "feedback": "Unión química definida."
      },
      {
        "n": 18,
        "level": "Experto",
        "q": "Para separar limaduras de hierro y arena conviene usar:",
        "options": [
          "Imán",
          "Evaporación",
          "Destilación",
          "Cronómetro"
        ],
        "answer": 0,
        "hint": "El hierro es atraído por imán.",
        "feedback": "Separación magnética."
      },
      {
        "n": 19,
        "level": "Experto",
        "q": "En la tabla periódica, los metales suelen ubicarse principalmente:",
        "options": [
          "A la izquierda y centro",
          "Solo arriba a la derecha",
          "Fuera de la tabla",
          "En una línea de tiempo"
        ],
        "answer": 0,
        "hint": "La mayoría de elementos metálicos están allí.",
        "feedback": "Izquierda y centro."
      },
      {
        "n": 20,
        "level": "Experto",
        "q": "Una norma segura en laboratorio es:",
        "options": [
          "Etiquetar sustancias y no probarlas",
          "Comer durante prácticas",
          "Mezclar sin permiso",
          "Oler directamente todo"
        ],
        "answer": 0,
        "hint": "Evita accidentes.",
        "feedback": "Etiquetar y no probar."
      }
    ]
  }
];
const STORAGE_KEY = 'kit-reto8-progress-v1';
let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let currentSubject = SUBJECTS[0].id;

const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menuToggle');
if(menuToggle && sidebar){
  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕ Cerrar menú' : '☰ Menú de áreas';
  });
}

const nav = document.getElementById('subjectNav');
const subjectView = document.getElementById('subjectView');
const totalScore = document.getElementById('totalScore');
const totalBar = document.getElementById('totalBar');
const badgeText = document.getElementById('badgeText');
document.getElementById('startBtn').addEventListener('click', () => renderSubject(SUBJECTS[0].id));
document.getElementById('printBtn').addEventListener('click', () => window.print());
document.getElementById('resetBtn').addEventListener('click', () => { if(confirm('¿Deseas reiniciar todo el progreso del kit?')) { state={}; save(); renderNav(); renderSubject(currentSubject); } });
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateTotal(); }
function key(subjectId,n){ return `${subjectId}-${n}`; }
function isDone(subjectId,n){ return state[key(subjectId,n)] === true; }
function subjectXP(subject){ return subject.exercises.filter(e => isDone(subject.id,e.n)).length * 10; }
function totalXP(){ return SUBJECTS.reduce((sum,s)=>sum+subjectXP(s),0); }
function totalPossible(){ return SUBJECTS.reduce((sum,s)=>sum+s.exercises.length*10,0); }
function badgeFor(pct){ if(pct>=100) return '🏆 Cupo listo: dominio total del kit'; if(pct>=80) return '🎓 Nivel admisión: estás sobre la meta'; if(pct>=50) return '🚀 En ruta: consolida los retos expertos'; if(pct>=20) return '🔎 Explorador: sigue desbloqueando áreas'; return 'Inicia tu primera misión'; }
function updateTotal(){ const xp=totalXP(); const pct=Math.round((xp/totalPossible())*100); totalScore.textContent=`${xp} XP`; totalBar.style.width=`${pct}%`; badgeText.textContent=badgeFor(pct); }
function renderNav(){ nav.innerHTML=''; SUBJECTS.forEach(s=>{ const btn=document.createElement('button'); btn.className='nav-btn'+(s.id===currentSubject?' active':''); btn.innerHTML=`<span>${s.icon} ${s.title}</span><small>${subjectXP(s)}/${s.exercises.length*10} XP</small>`; btn.addEventListener('click',()=>{ renderSubject(s.id); if(window.matchMedia('(max-width: 900px)').matches && sidebar){ sidebar.classList.remove('menu-open'); if(menuToggle){ menuToggle.setAttribute('aria-expanded','false'); menuToggle.textContent='☰ Menú de áreas'; } } }); nav.appendChild(btn); }); updateTotal(); }
function renderSubject(id){ currentSubject=id; const s=SUBJECTS.find(x=>x.id===id); renderNav(); const tpl=document.getElementById('subjectTemplate').content.cloneNode(true); tpl.querySelector('.subject-pill').textContent=`${s.icon} Misión de ${s.title}`; tpl.querySelector('.subject-title').textContent=s.title; tpl.querySelector('.subject-desc').textContent=s.desc; tpl.querySelector('.subject-xp strong').textContent=`${subjectXP(s)} XP`; tpl.querySelector('.problem').textContent=s.problem; tpl.querySelector('.explanation').innerHTML=`<ul>${s.explanation.map(x=>`<li>${x}</li>`).join('')}</ul>`; tpl.querySelector('.example').innerHTML=s.example.map((x,i)=>`<div class="example-step"><strong>Paso ${i+1}:</strong> ${x}</div>`).join(''); tpl.querySelector('.strategies').innerHTML=s.strategies.map(x=>`<li>${x}</li>`).join(''); const list=tpl.querySelector('.exercise-list'); s.exercises.forEach(ex=>list.appendChild(renderExercise(s,ex))); const note=document.createElement('div'); note.className='sources'; note.innerHTML='<strong>Uso recomendado:</strong> Resolver primero los retos Explorador, luego Estratega y finalmente Experto. Al terminar cada área, escribir una mini reflexión: ¿qué aprendí?, ¿qué me costó?, ¿qué estrategia usaré la próxima vez?'; tpl.querySelector('.practice').appendChild(note); subjectView.innerHTML=''; subjectView.appendChild(tpl); window.scrollTo({top:0, behavior:'smooth'}); }
function renderExercise(subject,ex){ const card=document.createElement('article'); card.className='exercise'+(isDone(subject.id,ex.n)?' done':''); card.innerHTML=`<div class="level">Reto ${ex.n} · ${ex.level}</div><div class="question">${ex.q}</div><div class="options"></div><div class="hint">Pista: ${ex.hint}</div><div class="feedback" aria-live="polite"></div>`; const options=card.querySelector('.options'); const feedback=card.querySelector('.feedback'); ex.options.forEach((op,idx)=>{ const b=document.createElement('button'); b.className='option'; b.textContent=op; b.addEventListener('click',()=>{ [...options.children].forEach(x=>x.classList.remove('correct','wrong')); if(idx===ex.answer){ b.classList.add('correct'); feedback.textContent=`✅ Correcto. ${ex.feedback}`; if(!isDone(subject.id,ex.n)){ state[key(subject.id,ex.n)]=true; save(); renderNav(); } card.classList.add('done'); const xpBox=document.querySelector('.subject-xp strong'); if(xpBox) xpBox.textContent=`${subjectXP(subject)} XP`; } else { b.classList.add('wrong'); feedback.textContent=`⚠️ Revisa de nuevo. ${ex.hint}`; } }); options.appendChild(b); }); if(isDone(subject.id,ex.n)) feedback.textContent='✅ Reto superado. Puedes repasarlo cuando quieras.'; return card; }
renderNav(); renderSubject(currentSubject);
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
