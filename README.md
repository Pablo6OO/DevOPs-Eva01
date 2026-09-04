# Microservicio Node.js - Evaluación Parcial 1 (Ingeniería DevOps)

**Estudiante:** Pablo Díaz  
**Asignatura:** Ingeniería DevOps (DOY0101)  

---

## 1. Estrategia de Ramificación (GitFlow)
Se selecciono la estrategia **GitFlow** para asegurar trazabilidad y orden en el desarrollo. Se separo el código de producción (`main`), el entorno de integración (`develop`), las nuevas funcionalidades (`feature/*`) y la corrección de errores críticos (`hotfix/*`).

---

## 2. Convenciones y Buenas Prácticas
* **Naming de Ramas:** `main`, `develop`, `feature/cambio-1/2` y `hotfix/parche-1`.
* **Mensajes de Commit:** Convención *Conventional Commits* (`feat:`, `fix:`, `docs:`, `ci:`).
* **Flujo de Integración:** Todo cambio hacia `develop` o `main` se realiza exclusivamente mediante **Pull Requests**.

---

## 3. Declaración de Uso de Inteligencia Artificial
* **Herramienta:** Gemini (Google).
* **Uso:** Redacción técnica de la documentación y estructuración de la configuración del pipeline.
* **Validación:** Comandos, código y flujo de ramas ejecutados y probados manualmente por el estudiante.

---

## 4. Reflexión Personal
Comprender la lógica de las ramas y las integraciones continuas fue bastante directo y entendible desde un inicio. Mi mayor dificultad práctica se centró en recordar los comandos exactos de Git en la terminal y configurar mi cuenta de estudiante de Duoc para los commits de este proyecto, debido a que se entrelazaba mi cuenta personal. La evaluación me permitió fijar la sintaxis de Git y el flujo completo con Pull Requests en GitHub.
