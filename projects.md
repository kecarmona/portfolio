# PRD: Engineering Labs para el portafolio

## 1. Resumen

Quiero evolucionar mi portafolio para que no muestre solamente landing pages o proyectos visuales, sino evidencia clara de pensamiento de ingeniería.

La nueva sección del portafolio se llamará provisionalmente:

> **Engineering Labs**

Estos proyectos no deben presentarse como "hice una API", sino como:

> **"Tomé un problema con restricciones reales, diseñé una solución, hice trade-offs técnicos y demostré con pruebas que cumple sus invariantes."**

El objetivo es construir 3 proyectos pequeños en alcance, pero profundos en razonamiento técnico:

1. **Motor de transacciones**
2. **Procesador de trabajos**
3. **Rate limiter**

La cache con expiración queda como proyecto futuro o alternativa secundaria.

---

## 2. Objetivo del producto

Crear una sección de portafolio que demuestre capacidad senior para resolver problemas de backend, concurrencia, consistencia, rendimiento, idempotencia, fallos parciales y diseño de sistemas.

La sección debe convencer a reclutadores técnicos, tech leads y hiring managers de que puedo:

- Analizar problemas ambiguos.
- Convertir restricciones en decisiones técnicas.
- Diseñar invariantes verificables.
- Probar sistemas bajo carga y fallos.
- Medir resultados con datos.
- Explicar trade-offs de manera clara.

---

## 3. Audiencia

### Audiencia principal

- Hiring managers técnicos.
- Tech leads.
- Staff/Senior engineers revisando candidatos.
- Recruiters técnicos con capacidad de filtrar perfiles backend/fullstack.

### Lo que deben percibir

- No soy solo un desarrollador de interfaces o CRUDs.
- Entiendo problemas de sistemas reales.
- Sé razonar sobre concurrencia, estados, fallos e idempotencia.
- Puedo demostrar lo que construyo con pruebas y métricas.
- Tengo criterio para decidir entre alternativas técnicas.

---

## 4. Principios de la sección

Cada proyecto debe cumplir estas reglas:

1. Debe empezar con una pregunta difícil.
2. Debe tener restricciones explícitas.
3. Debe tener invariantes verificables.
4. Debe incluir pruebas automatizadas.
5. Debe incluir experimentos de carga o simulación.
6. Debe mostrar resultados medibles.
7. Debe explicar trade-offs.
8. Debe evitar scope innecesario.

No quiero proyectos grandes por tamaño. Quiero proyectos pequeños con alta densidad técnica.

---

## 5. Formato estándar de cada proyecto

Cada proyecto debe tener una página o README con esta estructura:

### 5.1 Problema

Una explicación corta del problema que se intenta resolver.

### 5.2 Pregunta principal

Una pregunta que transforme el proyecto en un problema de ingeniería.

Ejemplo:

> ¿Cómo puedo procesar transferencias concurrentes garantizando que el dinero no se cree, destruya ni duplique?

### 5.3 Restricciones

Condiciones que hacen difícil el problema.

Ejemplos:

- Alta concurrencia.
- Requests duplicados.
- Fallos parciales.
- Memoria limitada.
- Latencia baja.
- Recuperación luego de errores.

### 5.4 Invariantes

Propiedades que siempre deben cumplirse.

Ejemplos:

- No se crea dinero.
- No se destruye dinero.
- Un job no desaparece.
- Un usuario no puede exceder su cuota.
- Una entrada expirada no debe seguir disponible.

### 5.5 Solución

Descripción de la arquitectura y estrategia elegida.

Debe explicar:

- Modelo de datos.
- Flujo principal.
- Manejo de concurrencia.
- Manejo de errores.
- Estrategia de persistencia.
- Estrategia de recuperación.

### 5.6 Decisiones técnicas

Comparación entre alternativas.

Ejemplo:

```text
Opción A: locks pesimistas
Opción B: optimistic concurrency
Opción C: cola serializada por cuenta

Decisión: usar X porque...
Trade-off: sacrifica Y a cambio de Z.
```

### 5.7 Experimentos

Pruebas que intentan romper el sistema.

Ejemplos:

- 10.000 operaciones concurrentes.
- Requests duplicados.
- Fallos simulados durante transición de estado.
- Carga sostenida.
- Hot keys.
- Timeouts.

### 5.8 Resultados

Datos concretos.

Ejemplo:

```text
Operaciones procesadas: X
Throughput: X ops/s
Latencia p95: X ms
Inconsistencias detectadas: 0
Duplicados procesados: 0
Memoria máxima: X MB
```

### 5.9 Failure cases

Qué pasa cuando algo falla.

Debe responder:

- ¿Qué pasa si el proceso muere?
- ¿Qué pasa si llega un duplicado?
- ¿Qué pasa si hay timeout?
- ¿Qué pasa si aumenta la carga?
- ¿Qué pasa si dos operaciones compiten por el mismo recurso?

### 5.10 Demo

Cada proyecto debe tener al menos una forma clara de demostrarse:

- CLI.
- API mínima.
- Dashboard pequeño.
- Script de benchmark.
- Reporte generado automáticamente.

---

## 6. Proyecto 1: Motor de transacciones

### 6.1 Resumen

Sistema que procesa transferencias entre cuentas bajo concurrencia, duplicados y fallos parciales, garantizando que el dinero no se cree, destruya ni duplique.

Este será el proyecto principal de Engineering Labs.

### 6.2 Pregunta principal

> ¿Cómo puedo procesar transferencias concurrentes garantizando que el balance global permanezca correcto, que ninguna cuenta quede en negativo y que una transferencia duplicada no se aplique dos veces?

### 6.3 Problema

Una plataforma procesa transferencias entre cuentas.

Cada transacción mueve dinero desde una cuenta origen hacia una cuenta destino.

El sistema debe aceptar, rechazar o recuperar transacciones sin romper las propiedades financieras básicas.

### 6.4 Restricciones

- Muchas transferencias pueden ejecutarse al mismo tiempo.
- Varias transferencias pueden tocar la misma cuenta.
- Una cuenta no puede quedar con saldo negativo.
- Una transferencia puede llegar duplicada.
- El proceso puede fallar durante el procesamiento.
- El resultado debe poder auditarse.
- La latencia debe mantenerse razonablemente baja.

### 6.5 Invariantes

- El dinero total inicial debe ser igual al dinero total final.
- Ninguna cuenta puede tener saldo negativo.
- Una transferencia aprobada debe aplicarse exactamente una vez.
- Una transferencia rechazada no debe modificar saldos.
- Una transferencia duplicada debe retornar el resultado original.
- Toda modificación de saldo debe tener un registro auditable.

### 6.6 Alcance MVP

El MVP debe incluir:

- Modelo de cuentas.
- Modelo de transferencias.
- Endpoint o comando para crear transferencias.
- Idempotency key por transferencia.
- Validación de saldo insuficiente.
- Control de concurrencia.
- Registro de auditoría.
- Suite de tests unitarios.
- Stress test con transferencias aleatorias.
- Verificador automático de invariantes.

### 6.7 Fuera de alcance

- UI bancaria completa.
- Autenticación compleja.
- Integraciones con proveedores externos.
- Multi-moneda.
- KYC, compliance o reglas regulatorias.
- Ledger distribuido multi-region.

### 6.8 Experimentos requeridos

- Ejecutar muchas transferencias concurrentes entre cuentas aleatorias.
- Ejecutar muchas transferencias concurrentes contra una misma cuenta.
- Enviar la misma transferencia múltiples veces con la misma idempotency key.
- Simular saldo insuficiente.
- Simular fallos antes/después de registrar una transferencia.
- Verificar que el balance global no cambia incorrectamente.

### 6.9 Métricas objetivo

Las cifras finales se definirán después de implementar y medir, pero el reporte debe incluir:

```text
Total de cuentas:
Total de transferencias intentadas:
Transferencias aprobadas:
Transferencias rechazadas:
Duplicados detectados:
Throughput:
Latencia p50:
Latencia p95:
Inconsistencias:
```

### 6.10 Resultado esperado en portafolio

Una tarjeta o página que comunique:

> Construí un motor de transferencias concurrentes con idempotencia, auditoría e invariantes verificables. Lo sometí a pruebas de carga y validé automáticamente que no se creara, destruyera ni duplicara dinero.

---

## 7. Proyecto 2: Procesador de trabajos

### 7.1 Resumen

Sistema que procesa trabajos en background con workers, retries, estados, timeouts y recuperación ante fallos.

### 7.2 Pregunta principal

> ¿Cómo puedo garantizar que un trabajo no se pierda cuando un worker muere durante su procesamiento?

### 7.3 Problema

Una cola contiene muchos trabajos pendientes.

Los workers toman trabajos, los procesan y reportan su resultado.

El sistema debe manejar errores, reintentos, duplicados, timeouts y trabajos que quedan a medias.

### 7.4 Restricciones

- Un worker puede morir durante el procesamiento.
- Un trabajo puede fallar y necesitar reintentos.
- Algunos trabajos pueden tardar mucho más que otros.
- Un trabajo no debe quedar perdido indefinidamente.
- Un trabajo no debería procesarse dos veces al mismo tiempo.
- Debe existir visibilidad del estado actual de cada trabajo.

### 7.5 Estados

```text
PENDING
PROCESSING
COMPLETED
FAILED
RETRYING
DEAD
```

### 7.6 Invariantes

- Todo trabajo debe estar en un estado válido.
- Un trabajo completado no debe volver a ejecutarse.
- Un trabajo fallido debe reintentarse hasta un límite definido.
- Un trabajo en PROCESSING que excede su timeout debe recuperarse.
- Ningún trabajo debe desaparecer sin estado final.
- Todo cambio de estado debe quedar registrado.

### 7.7 Alcance MVP

El MVP debe incluir:

- Creación de jobs.
- Worker pool.
- Claim atómico de jobs.
- Timeout de jobs en PROCESSING.
- Reintentos con límite máximo.
- Estado DEAD para trabajos agotados.
- Historial de transiciones.
- CLI o API para consultar estado.
- Tests de transiciones.
- Simulación de workers fallando.

### 7.8 Fuera de alcance

- Sistema distribuido multi-region.
- UI avanzada tipo dashboard empresarial.
- Priorización compleja en la primera versión.
- Cron scheduler completo.
- Dependencias entre jobs.

### 7.9 Experimentos requeridos

- Procesar N jobs con múltiples workers.
- Simular workers que mueren antes de completar.
- Simular jobs que fallan varias veces.
- Verificar que jobs expirados vuelven a estar disponibles.
- Verificar que jobs completados no se reprocesan.
- Medir throughput con distinto número de workers.

### 7.10 Métricas objetivo

```text
Jobs creados:
Jobs completados:
Jobs fallidos:
Jobs recuperados por timeout:
Jobs enviados a DEAD:
Workers utilizados:
Throughput:
Tiempo promedio por job:
Jobs perdidos:
```

### 7.11 Resultado esperado en portafolio

Una tarjeta o página que comunique:

> Diseñé un procesador de trabajos tolerante a fallos con estados explícitos, retries, recuperación por timeout y pruebas que simulan workers muriendo durante el procesamiento.

---

## 8. Proyecto 3: Rate limiter

### 8.1 Resumen

Sistema que limita la cantidad de requests permitidas por usuario durante una ventana de tiempo.

Este proyecto debe ser más pequeño que los dos anteriores, pero muy medible.

### 8.2 Pregunta principal

> ¿Cómo puedo limitar requests por usuario de forma precisa y eficiente bajo alta concurrencia?

### 8.3 Problema

Un sistema debe permitir un máximo de requests por usuario en un periodo determinado.

Ejemplo:

```text
100 requests / minuto
10 requests / segundo
burst máximo de 20
```

### 8.4 Restricciones

- Muchos usuarios activos.
- Requests concurrentes.
- Contadores que expiran.
- Consumo de memoria controlado.
- Baja latencia por decisión.
- Comportamiento predecible ante bursts.

### 8.5 Algoritmos a comparar

- Fixed window.
- Sliding window.
- Token bucket.
- Leaky bucket.

### 8.6 Invariantes

- Un usuario no debe exceder el límite configurado.
- Una request permitida debe consumir capacidad.
- Una request rechazada no debe consumir capacidad adicional.
- El sistema debe liberar capacidad cuando corresponda.
- La decisión debe ser determinística para una misma secuencia de eventos.

### 8.7 Alcance MVP

El MVP debe incluir:

- API o función `allow(userId, timestamp)`.
- Configuración de límite y ventana.
- Implementación de al menos 2 algoritmos.
- Tests comparativos.
- Benchmark de latencia.
- Reporte de precisión y memoria.

### 8.8 Fuera de alcance

- Rate limiting distribuido en múltiples regiones.
- Integración con API gateway real.
- Dashboard complejo.
- Persistencia histórica.
- Sistema de billing.

### 8.9 Experimentos requeridos

- Un usuario con tráfico normal.
- Un usuario intentando exceder el límite.
- Muchos usuarios concurrentes.
- Bursts al inicio/final de ventana.
- Comparación entre algoritmos.

### 8.10 Métricas objetivo

```text
Requests evaluadas:
Requests permitidas:
Requests rechazadas:
Latencia p50:
Latencia p95:
Memoria usada:
Precisión por algoritmo:
```

### 8.11 Resultado esperado en portafolio

Una tarjeta o página que comunique:

> Construí un rate limiter con múltiples estrategias, comparé precisión, latencia y memoria bajo distintos patrones de tráfico, y documenté los trade-offs de cada algoritmo.

---

## 9. Proyecto futuro: Cache con expiración

La cache con expiración queda como candidato para una segunda ola de Engineering Labs.

### 9.1 Pregunta principal

> ¿Qué estrategia de eviction funciona mejor bajo distintos patrones de acceso?

### 9.2 Conceptos que demostraría

- TTL.
- Límite de capacidad.
- Eviction.
- LRU.
- LFU.
- FIFO.
- Hit rate.
- Patrones de acceso.

### 9.3 Motivo para dejarlo después

Aunque es un buen proyecto, se solapa parcialmente con el rate limiter en la dimensión de memoria, expiración y estructuras de datos.

Para la primera versión del portafolio, el rate limiter comunica mejor valor backend/platform con menos explicación.

---

## 10. Roadmap recomendado

### Fase 1: Definición

- Elegir stack.
- Crear estructura base de repositorios o monorepo.
- Definir formato estándar de README.
- Definir formato de reporte de benchmark.
- Definir template visual para tarjetas del portafolio.

### Fase 2: Proyecto 1

- Implementar motor de transacciones.
- Agregar tests de invariantes.
- Agregar stress test.
- Generar reporte con resultados.
- Crear case study.

### Fase 3: Proyecto 2

- Implementar procesador de trabajos.
- Agregar simulación de workers.
- Agregar recuperación por timeout.
- Generar reporte con resultados.
- Crear case study.

### Fase 4: Proyecto 3

- Implementar rate limiter.
- Comparar algoritmos.
- Medir precisión, memoria y latencia.
- Generar reporte con resultados.
- Crear case study.

### Fase 5: Integración en portafolio

- Crear sección Engineering Labs.
- Mantener sección de trabajos reales en producción.
- Agregar tarjetas para los 3 labs.
- Cada tarjeta debe enlazar a README, demo o reporte.

---

## 11. Criterios de éxito

La iniciativa será exitosa si:

- El portafolio comunica experiencia real + pensamiento técnico profundo.
- Cada proyecto tiene un README que puede ser leído como case study.
- Cada proyecto tiene pruebas automatizadas.
- Cada proyecto tiene al menos un experimento medible.
- Cada proyecto reporta resultados con números.
- Cada proyecto explica trade-offs.
- La sección no se siente como ejercicios aislados, sino como evidencia de criterio ingenieril.

---

## 12. Mensaje final de posicionamiento

La narrativa deseada para el portafolio es:

> Construyo sistemas reales en producción y documento laboratorios técnicos donde pruebo decisiones de arquitectura bajo carga, concurrencia y fallos. No solo muestro lo que hice; muestro cómo pienso, qué restricciones enfrenté, qué decidí y cómo verifiqué que funcionaba.

