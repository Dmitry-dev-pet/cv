# Dmitry Glukhov

AI / Software Engineer  
GitHub: [Dmitry-dev-pet](https://github.com/Dmitry-dev-pet)

## Summary

AI / Software Engineer focused on practical LLM systems, OCR and document automation, speech-to-text workflows, scientific/evaluation pipelines, and local-first developer tools.

I design AI systems around real workflows rather than one-off prompts: ingestion, normalization, staged processing, state storage, validation loops, retry handling, diagnostics, token/cost visibility, and reproducible artifacts. My recent work spans LLM knowledge systems, OCR and translation tools, AI-assisted developer interfaces, scientific benchmark pipelines, document automation, and presentation/document compilers.

## Core Strengths

- LLM pipeline design and RAG-like knowledge systems.
- OCR, speech-to-text, translation, and document automation workflows.
- Evaluation, validation, repair loops, diagnostics, and benchmark reporting.
- Python-first automation, CLI tools, local-first systems, and SQLite-backed pipelines.
- AI-assisted developer tools with observable operations and provider abstraction.
- Scientific and technical content pipelines with reproducible artifacts and QA.
- Clear architecture documentation, testable module boundaries, and reviewable delivery packages.

## Selected Projects

### AI Agent Case Studies

Repository: [ai-agent-case-studies](https://github.com/Dmitry-dev-pet/ai-agent-case-studies)

Sanitized architecture notes for private AI-agent and LLM workflow projects. The strongest case study is a Telegram / LLM knowledge system that turns raw chat exports into structured, searchable knowledge artifacts.

- Built a SQL-first pipeline for Telegram history ingestion, normalization, block queueing, staged LLM extraction, and Markdown wiki generation.
- Used SQLite as the source of truth for pipeline state and generated Markdown as a readable projection.
- Designed a Control Center for long-running LLM jobs: stage progress, reused vs newly generated work, token spend, retries, failures, stale heartbeat detection, and diagnostic links.
- Compiled runtime policy files for assistant routing.

Relevant areas: LLM pipelines, RAG-like systems, pipeline observability, retry handling, token visibility, local-first AI automation.

### Native Audio Translator

Repository: [native-audio-translator](https://github.com/Dmitry-dev-pet/native-audio-translator)

Native macOS prototype for live subtitles and translation.

- Audio pipeline: system audio capture -> speech recognition -> transcript stabilization -> translation -> overlay rendering.
- Video/OCR pipeline: screen region capture -> Apple Vision OCR -> OCR stabilization -> translation -> overlay rendering.
- Built with Swift, SwiftUI, AppKit, ScreenCaptureKit, Apple Speech, Apple Vision, and Apple Translation.
- Added runtime permission flow, command control, local app bundling, diagnostics, and validation executables.

Relevant areas: speech-to-text, OCR, translation, noisy partial result stabilization, local-first desktop AI workflows.

### Mermaid Compiler

Repository: [mermaid-compiler](https://github.com/Dmitry-dev-pet/mermaid-compiler)

AI-assisted workspace for generating, editing, validating, fixing, and exporting technical Mermaid diagrams.

- Designed separate LLM workflows for chat, build, fix, analyze, prompt preview, and operation logs.
- Implemented Mermaid validation and automatic repair loops.
- Added local documentation context for more grounded generation.
- Integrated multiple AI providers through OpenRouter and local cliproxy-compatible endpoints.

Relevant areas: prompt workflows, validation/repair loops, multi-provider abstraction, developer tooling, inspectable AI operations.

### Article Extraction, OCR, And Localization Pipeline

Private repository summary.

Python CLI for extracting technical articles and preparing localized Markdown/TXT outputs.

- Downloaded Habr articles and converted them to Markdown and plain text.
- Extracted and downloaded referenced images.
- Supported OCR through tesseract, macOS Vision, OpenAI, or local LLM workflows.
- Used local LLM commands for localization workflows.

Relevant areas: Python CLI, document processing, OCR, local LLM workflows, reusable pipeline components.

### Scientific Benchmark And Evaluation Pipelines

Private repository summaries.

- Attractor-kinetic validation prototype for interatomic potentials: LAMMPS orchestration, Python analysis pipelines, water/ice NEP benchmark reports, classifier calibration, direct coexistence smoke tests, interface sensitivity analysis, WSL monitoring, and literature synthesis.
- Quantum orbital learning lab: PySCF, Python/Matplotlib exports, Vue/3Dmol UI, hydrogen-system model matrix, HF/DFT/MP2/UHF/CASSCF workflows, static asset checks, and test-covered build scripts.

Relevant areas: scientific computing, benchmark design, analysis automation, evaluation reports, reproducible pipelines.

### Document And Presentation Automation

Private repository summaries.

- Structure-driven DOCX generation with page-by-page QA comparisons, acceptance matrices, and portfolio-ready artifacts.
- Technical presentation compiler with YAML/content specs, deterministic PPTX generation, computed diagrams/formulas, visual QA, PDF/Keynote export, and editable delivery artifacts.

Relevant areas: document automation, editable artifacts, deterministic generation, visual QA, delivery packaging.

### Manim Director And Source-Grounded STEM Animation

Private repository summaries.

- VSCode-driven live authoring loop for ManimGL scenes with timeline control, beat previews, local socket runtime, preview rendering scripts, and tests.
- Source-grounded STEM animation pipeline: intake and evidence, concept maps, storyboard, scene specs, Manim code, render QA, reference comparison, and delivery packages.

Relevant areas: developer tooling, source-grounded generation, QA loops, technical content automation.

## Public Work

- [dodo-table-events](https://github.com/Dmitry-dev-pet/dodo-table-events) - computer vision prototype for table occupancy events using OpenCV, YOLO, ROI zones, and FSM-based reports.
- [hotwills](https://github.com/Dmitry-dev-pet/hotwills) - GitHub Pages and Supabase collaborative catalog with editor flows, stats, and cloud sync.

## Stack

Python, TypeScript, Swift, Rust, SQLite, Postgres, FastAPI, React, Vue, Vite, SwiftUI, AppKit, ScreenCaptureKit, Apple Speech, Apple Vision, Apple Translation, PySCF, LAMMPS, Matplotlib, OpenAI-compatible APIs, OpenRouter, local LLM endpoints, Docker, GitHub Actions, LLM pipeline design, OCR, speech-to-text, document automation, scientific benchmarking, agent workflow automation.

## Privacy

Private projects are summarized without exposing private data, credentials, client materials, or closed-source implementation details.
