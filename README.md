# SpaceSicks — the thing we built for NASA Space Apps 🚀

We’re a small crew that genuinely loves space, data, and shipping ML that actually runs. This is our NASA Space Apps project: a clean, cosmic web app where you can try exoplanet models live, right inside the site. It’s fast, responsive, and feels like a product — not a slide deck that collapses on scroll. Subtle starfields, soft nebula glows, motion that doesn’t shout, and a compact navbar that stays with you — the vibe is NASA‑grade without being loud. Under the hood it’s React 18 + TypeScript, Tailwind CSS, Framer Motion, React Router, Lucide, plus a touch of Three.js / React Three Fiber for a particle field and depth. Most of the story lives in the page flow: you land, you get the point, you try the model — minimal clicks, zero friction.

Live ML (right in the browser): Kepler Exoplanet Detection — `https://huggingface.co/spaces/Adilbai/Kepler-automated-detection` and TOI NASA Exoplanets Classification — `https://huggingface.co/spaces/Adilbai/TOI-Nasa-exoplanets-classification`. If an iframe gets blocked by CSP/X‑Frame‑Options, we fall back to the direct `*.hf.space` endpoints so the demos still run on the page.

About the NASA datasets and our model — the real talk. We leaned on public exoplanet data (Kepler/TOI and related open sources) to train lightweight classifiers that flag promising candidates. The honest work sits in `multiclass.ipynb` (added in commit e9fce11): exploring signals, cleaning, trying baselines, and settling on something stable enough to demo live. We’re not chasing SOTA here — clarity, reproducibility, and instant interactivity won the day. You upload or poke examples, you see what the model thinks — now, not later.

Getting it running locally is straightforward: `npm install --legacy-peer-deps` then `npm start`. It’ll boot on `http://localhost:3000` (CLI offers another port if 3000 is busy). The code is structured to be readable and hackathon‑friendly so you can tweak components, styles, and routes without digging through spaghetti.

What made the hackathon genuinely fun? The mix. Shipping a UI that feels space‑grade, wiring it to live ML so it’s not just slides, iterating tiny details (like stars that twinkle just enough), talking to people and getting “this is sick” in real time — all with not a lot of sleep. 36 hours well spent.

Team (NIS KhBN G Almaty): Adilzhan Baidalin (ML/AI), Azamat Bayganin (ML/AI), Daniyal Talgatov (Backend/Frontend), Nurasyl (Frontend), and Iman Mustafa (research physicist) who kept us anchored to the science.

License: MIT (please respect licenses for embedded Spaces and datasets).
