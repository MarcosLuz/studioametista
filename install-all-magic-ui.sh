#!/bin/bash
echo "🎨 Instalando TODOS os componentes Magic UI..."

components=(
  "accordion" "animated-beam" "animated-grid-pattern" "animated-list"
  "animated-shiny-text" "animated-subscribe-button" "avatar-circles"
  "badge" "bento-grid" "blur-fade" "blur-in" "border-beam" "box-reveal"
  "button" "card" "confetti" "cool-mode" "dialog" "dock" "dot-pattern"
  "fade-text" "file-tree" "flip-text" "globe" "gradient-text"
  "grid-pattern" "hero-video-dialog" "hyper-text" "icon-cloud"
  "iphone-15-pro" "letter-pullup" "magic-card" "marquee" "meteors"
  "morphing-text" "number-ticker" "orbit" "particles" "pulsating-button"
  "rainbow-button" "retro-grid" "ripple" "safari" "scratch-to-reveal"
  "separator" "shimmer-button" "shine-border" "sparkles" "spotlight"
  "star-border" "text-reveal" "tweet-card" "typing-animation"
  "word-fade-in" "word-pull-up" "word-rotate"
)

for component in "${components[@]}"
do
  echo "📦 Instalando $component..."
  npx shadcn@latest add "https://magicui.design/r/$component.json" --yes || echo "❌ Falhou ao instalar $component"
done

echo "✅ Instalação concluída!"