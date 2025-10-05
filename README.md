# SpaceSicks — наш космический шип на NASA Space Apps 🚀

Привет! Мы — маленькая, но очень заряженная команда, которая собрала этот проект на NASA Space Apps. Без пафоса: любим космос, данные и писать ML так, чтобы он реально работал, а не только на слайдах. Тут вы увидите и аккуратный космический UI, и живые демки моделей — всё по делу.

## Что тут вообще есть (и почему это кайф)

- **Космический дизайн**: глубина, туманности, звёзды — всё двигается, но не мешает читать
- **Адаптив**: с телефона/планшета/десктопа — выглядит ровно и достойно
- **Градиенты и типографика**: аккуратно, читабельно, не «кислотно»
- **Анимации**: мягкие появления, не дергают глаз, но создают настроение
- **Модульная архитектура**: компоненты разбиты так, чтобы не страдать при доработках

## Live ML (да, прям в браузере)
- Kepler Exoplanet Detection: `https://huggingface.co/spaces/Adilbai/Kepler-automated-detection`
- TOI NASA Exoplanets Classification: `https://huggingface.co/spaces/Adilbai/TOI-Nasa-exoplanets-classification`

Note: на некоторых хостингах iframes режутся политиками, поэтому мы используем прямые hf.space домены.

## Разделы сайта

1. **Hero** — коротко и по делу
2. **About Team** — кто мы такие и чем дышим
3. **Telescope** — демка модели Kepler + метрики
4. **Satellites** — демка классификации TOI
5. **Challenge** — зачем это всё и как это связано с NASA Space Apps

## Как поднять локально (быстро и без боли)

```bash
npm install --legacy-peer-deps
npm start
```

Приложение откроется на `http://localhost:3000` (если порт занят — CLI предложит другой).

## Техстек (чтобы было приятно писать и читать)

- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons
- Three.js / React Three Fiber (for particles/space)

## Что сделали по ML (если по делу)

- Подготовили пайплайны для классификации сигналов экзопланет (Kepler/TOI)
- Исследование и препроцессинг датасетов, эксперименты — в `multiclass.ipynb` (см. коммит `e9fce11`)
- Доставили интерактивные демки на Hugging Face Spaces — можно «пощупать» модель живьём
- Наша цель — не только метрики, а чтобы этим было реально удобно пользоваться

## Дизайн-философия (коротко, по-людски)

- **Visionary**: Bold, ambitious messaging
- **Scientific**: Grounded in real technology and data
- **Futuristic**: Clean, minimal aesthetic with cosmic elements
- **Trustworthy**: Professional presentation for researchers and engineers

## Команда (люди, которые реально впахивали)
NIS KhBN G Almaty — NASA Space Apps edition:
- **Adilzhan Baidalin** — ML/AI (тот самый, кто не спит перед сабмитом)
- **Azamat Bayganin** — ML/AI (держит метрики в узде)
- **Daniyal Talgatov** — Backend/Frontend (склеивает всё вместе и деплоит)
- **Nurasyl** — Frontend (чтобы это выглядело не как pet-проект на коленке)
- **Iman Mustafa** — research physicist (физика/ресёрч; sanity-check, чтобы мы не «улетели» от науки)

## License
MIT (respect embedded Spaces/data licenses when applicable)
