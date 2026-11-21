# Manitas Fácil
Web estática (HTML + CSS + JS, sin build ni backend). Todas las rutas son relativas (`./`).

## Probar en local (terminal de VS Code)
    python -m http.server 8080      # o: npx serve .
    # abre http://localhost:8080

## Publicar en GitHub Pages
    git init && git add . && git commit -m "Manitas Fácil"
    git branch -M main
    git remote add origin https://github.com/CafeConFenix/ManitasFacil.git
    git push -u origin main
En GitHub: Settings → Pages → Source: **GitHub Actions**. El workflow publica en
`https://cafeconfenix.github.io/ManitasFacil/`.

## Si falla el despliegue ("No artifacts named github-pages")
El workflow separa subir (build) y publicar (deploy) en dos trabajos para evitar un fallo
intermitente de GitHub. Si aun así falla, no uses "Re-run jobs": haz un commit nuevo o "Run workflow".
Debe existir un solo archivo en `.github/workflows/` (borra `static.yml` si lo creaste desde la plantilla).

## Funciones
Búsqueda y filtros (categoría y dificultad), favoritos, progreso de pasos guardado, modo paso a paso a pantalla completa
(mantiene la pantalla encendida), copiar lista de la compra, compartir, imprimir, crear tutoriales propios,
y funciona sin conexión / se puede instalar como app (`sw.js` + `manifest.webmanifest`).
