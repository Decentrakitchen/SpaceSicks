# SpaceSicks – NASA Space Apps Project

SpaceSicks is a modern web app developed during the NASA Space Apps Challenge, focused on AI/ML-driven exoplanet detection from telescope and satellite data. We combined a high-end cosmic UI with working ML demos embedded via Hugging Face Spaces.

## Features

- **Cosmic Design**: Dark space-themed UI with animated starfield and nebula effects
- **Responsive Layout**: Mobile-first design that scales beautifully across devices
- **Modern Typography**: Clean, impactful text with gradient effects
- **Interactive Elements**: Hover effects and smooth animations
- **Component Architecture**: Modular React components for easy maintenance

## Live ML Demos
- Kepler Exoplanet Detection: `https://huggingface.co/spaces/Adilbai/Kepler-automated-detection`
- TOI NASA Exoplanets Classification: `https://huggingface.co/spaces/Adilbai/TOI-Nasa-exoplanets-classification`

Note: Some hosts block iframes; we use direct hf.space endpoints to ensure embedding works.

## Sections

1. **Hero**: Bold cosmic headline with mission statement
2. **About Team**: Positions team as "explorers of intelligence"
3. **Telescope**: Kepler AI model demo + metrics
4. **Satellites**: TOI exoplanet classification demo
5. **Challenge**: NASA Space Apps challenge brief and context

## Getting Started

```bash
npm install --legacy-peer-deps
npm start
```

The app will open at `http://localhost:3000`

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons
- Three.js / React Three Fiber (for particles/space)

## ML Work (high level)

- Trained ML pipelines for exoplanet signal classification (Kepler/TOI)
- Dataset exploration, preprocessing, experiments in `multiclass.ipynb` (added via commit e9fce11)
- Deployed interactive demos on Hugging Face Spaces

## Design Philosophy

- **Visionary**: Bold, ambitious messaging
- **Scientific**: Grounded in real technology and data
- **Futuristic**: Clean, minimal aesthetic with cosmic elements
- **Trustworthy**: Professional presentation for researchers and engineers

## Team / Credits
Built by a student team (NIS KhBN G Almaty) for NASA Space Apps:
- Adilzhan Baidalin – ML/AI
- Azamat Bayganin – ML/AI
- Daniyal Talgatov – Backend/Frontend
- Nurasyl – Frontend

## License
MIT (respect embedded Spaces/data licenses when applicable)
