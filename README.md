# Microservicio Node.js - Evaluación Parcial 1 (Ingeniería DevOps)

**Estudiante:** Pablo Díaz  
**Asignatura:** Ingeniería DevOps (DOY0101)  

---

## 1. Estrategia de Ramificación (GitFlow)
Seleccionamos la estrategia **GitFlow** para asegurar trazabilidad y orden en el desarrollo. Separamos el código de producción (`main`), el entorno de integración (`develop`), las nuevas funcionalidades (`feature/*`) y la corrección de errores críticos (`hotfix/*`).

---

## 2. Convenciones y Buenas Prácticas
* **Naming de Ramas:** `main`, `develop`, `feature/<nombre>` y `hotfix/<nombre>`.
* **Mensajes de Commit:** Convención *Conventional Commits* (`feat:`, `fix:`, `docs:`, `ci:`).
* **Flujo de Integración:** Todo cambio hacia `develop` o `main` se realiza exclusivamente mediante **Pull Requests**.

---

## 3. Declaración de Uso de Inteligencia Artificial
* **Herramienta:** Gemini (Google).
* **Uso:** Redacción técnica de la documentación y estructuración de la configuración del pipeline.
* **Validación:** Comandos, código y flujo de ramas ejecutados y probados manualmente por el estudiante.

---

## 4. Reflexión Personal
Comprender la lógica de las ramas y el pipeline de integración continua fue directo desde el principio. Mi mayor dificultad práctica se centró en recordar los comandos exactos de Git en la terminal y configurar mi cuenta de estudiante de Duoc para los commits de este proyecto. La evaluación me permitió fijar la sintaxis de Git y el flujo completo con Pull Requests en GitHub.