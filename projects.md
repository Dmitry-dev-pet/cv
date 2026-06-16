# Selected Projects And Case Studies

## AI / LLM Systems

### Telegram / LLM Knowledge System

Public summary: [ai-agent-case-studies](https://github.com/Dmitry-dev-pet/ai-agent-case-studies)

Problem: large Telegram communities contain useful operational knowledge, but raw exports are hard to search, summarize, and use inside an assistant.

Solution:

- import and normalize Telegram history;
- split messages into stable blocks for LLM processing;
- run staged extraction for topics, questions, cases, people, and taxonomy;
- store intermediate and final state in SQLite;
- generate Markdown wiki outputs;
- expose a Control Center for long-running jobs;
- compile runtime policy files for assistant routing.

Engineering focus:

- restartable pipeline stages;
- inspectable intermediate artifacts;
- token and retry visibility;
- stale heartbeat detection;
- diagnostic links;
- local-first data ownership.

## OCR / Speech / Translation

### Native Audio Translator

Public repository: [native-audio-translator](https://github.com/Dmitry-dev-pet/native-audio-translator)

Problem: desktop workflows often include audio, video, calls, presentations, and screen text that cannot be copied directly.

Solution:

- native macOS menu bar app;
- audio speech-to-text pipeline;
- screen region OCR pipeline;
- transcript and OCR stabilization;
- translation;
- overlay rendering;
- runtime permission handling;
- local diagnostics and command control.

## AI-Assisted Developer Tools

### Mermaid Compiler

Public repository: [mermaid-compiler](https://github.com/Dmitry-dev-pet/mermaid-compiler)

Problem: prompt-to-diagram workflows often fail because generated diagrams need validation, repair, context, and iteration.

Solution:

- chat, build, fix, analyze, prompt preview, and operation log flows;
- local Mermaid documentation context;
- syntax validation;
- automatic repair attempts;
- multi-provider LLM integration;
- project/session history.

## Scientific And Evaluation Pipelines

### Attractor-Kinetic Validation

Private work summary.

Prototype for attractor-kinetic validation of interatomic potentials. Recent work focused on water/ice NEP benchmark pipelines.

Work included:

- LAMMPS orchestration;
- Python analysis scripts;
- classifier calibration reports;
- direct coexistence smoke reports;
- endpoint controls;
- interface sensitivity analysis;
- WSL monitor configurations;
- literature notes and synthesis reports.

### Quantum Orbital Learning Lab

Private work summary.

Interactive quantum chemistry learning lab for basis sets, orbitals, density, HF/DFT/MP2/CASSCF, phase, nodes, and bonding.

Pipeline:

```text
PySCF -> CSV/SVG/cube -> Vue/3Dmol -> report/interpretation
```

Recent work included:

- hydrogen-system model matrix;
- H2, H2+, H-, LiH, and M-H bridge cases;
- frontier levels;
- finite DOS previews;
- CASSCF build guards;
- static asset checks;
- test-covered build scripts.

## Document And Content Automation

### Document Automation

Private work summary.

Workspace for LaTeX, Word, and PDF reconstruction/delivery pipelines.

Work included:

- Word automation builders;
- structure-driven DOCX generation;
- page-by-page QA comparisons;
- acceptance matrices;
- portfolio-ready artifacts.

### Deckforge

Private work summary.

Compiler for technical presentations where YAML/content specs and diagram code produce reproducible PPTX artifacts.

Work included:

- deterministic PPTX generation;
- editable text and tables;
- computed diagrams and formulas;
- visual QA;
- PDF and Keynote export;
- reference-vs-current comparisons.

## STEM Animation Tooling

### Manim Director

Private work summary.

VSCode-driven authoring loop for live ManimGL scenes.

Work included:

- localhost Director socket;
- live scene runtime;
- timeline panel;
- beat previews;
- preview render scripts;
- tests for scene behavior.

### Source-Grounded STEM Animation Pipeline

Private work summary.

Pipeline for turning papers, lecture notes, DOCX/PDF sources, and reference videos into reviewable Manim delivery packages.

Pipeline shape:

```text
source document / reference video / existing Manim code
-> intake and evidence
-> SceneGraph / concept map
-> feasible storyboard
-> scene spec
-> Manim code
-> render QA and reference comparison
-> delivery package
```
