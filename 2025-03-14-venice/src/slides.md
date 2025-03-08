---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 2
title: Async something
favicon: "https://riegler.fr/favicon.ico"
---

<h1 flex flex-col items-center forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(315deg,#E43348 25%,#972FF2);-webkit-background-clip: text;">
<img src="/angular.gif" width=150>
<br>Angular<br>Deliver web apps with confidence
</h1>

---
layout: cover
---

# Sharing an observation

<v-click>

## Enthusiam around Angular is raising
</v-click>

---
layout: center
---

<div w-136>

![Theo about Angular v19](/theo-twitter.png)
<!-- https://x.com/theo/status/1861999758291910660 -->
</div>

---
layout: cover
title: Life-cycle hook free
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Modern </span>
  <span>Angular</span>
  <sup v-click>❤️</sup>
</div>
<div mt1 forward:delay-300 v-click>Building reactivity</div>
</h1>

<div abs-br mx-10 mb-35 flex="~ col gap-4 items-end" text-left v-click="1">
  <img src="/solo-scudo.png" w-40 pb-6 />

<div flex flex-col items-center forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(315deg,#E43348 25%,#972FF2);-webkit-background-clip: text;">
  NG Venice
  </div>
  <div text-sm opacity-75 mt--4>March 14th 2025</div>
</div>

<!--

...

[click] ...
-->

---
layout: intro
class: pl-20
glowSeed: 14
---

# Matthieu Riegler

<div class="[&>*]:important-leading-10 opacity-80">

🧑🏼‍💻 Software Engineer<br>
🚂 Random dude who often codes on the train <br>
{Angular} Team / OSS <br>

<!-- TODO FULLTIME-->
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://riegler.fr" target="_blank" class="border-none! font-300">riegler.fr</a></div>
  <div i-ri-linkedin-line op50 ma text-xl ml4/>
  <div><a href="https://www.linkedin.com/in/matthieuriegler/" target="_blank" class="border-none! font-300">Matthieu&nbsp;Riegler</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/JeanMeche" target="_blank" class="border-none! font-300">JeanMeche</a></div>
  <div i-ri-bluesky-line op50 ma text-xl ml4 />
  <div><a href="https://bsky.app/profile/jeanmeche.com" target="_blank" class="border-none! font-300">jeanmeche.com</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/jean__meche" target="_blank" class="border-none! font-300">jean__meche</a></div>
</div>

<img src="https://matthieu.riegler.fr/avatar2.jpg" rounded-full w-50 abs-tr mt-28 mr-30 />

<!--
So first, let me introduce myself, my name is Matthieu Riegler.

...
-->

---
layout: intro
class: text-center pb-5
---

# How we arrived here

<v-click>

## Angular Renaissance
</v-click>

---
class: center
---

<div grid="~ cols-2 gap-10" h-full font-size-8>

<div flex flex-col>
<div>

# Angular Renaissance
<br><br>

<v-click>

*  Rich in features
</v-click>
<br><br>
<v-click>

* Rich in simplications
</v-click>
</div>
</div>

<img src="/renaissance-2.jpg" alt="Renaissance">

</div>

---
layout: fact
---

First, a step back.

<v-click>

# Ivy

</v-click>

<!-- Ivy enabled to do a lof of innovations in Angular -->

---
layout: fact
---

# Standalone

---
layout: center
---

![](./documentary.png)

---
layout: center
---

<div w-136>

![](./alex-skill.png)
<!-- https://x.com/synalx/status/1882879962547659078 -->
</div>

---

# Angular Renaissance

* Standalone components

* Typed Forms

* Host Directives

* Control Flow syntax (`@if`/`@for`/`@switch`)

* Deferred loading (`@defer`)

* SSR / Hydration

---
class: flex flex-col
---

# Renaissance

<div w-136 v-click m-auto>

![](./sarah-renaissance.png)
<!-- https://x.com/sarah_edo/status/1628065696247857152 -->
</div>

---
layout: cover
---

# Signals,<br> a new reactivity model

---
layout: fact
---

# What's reactivity ?

<div flex gap-24 justify-center mt-24 v-click>
  <img src="./reactivity/code2.png" width="128">
  <img src="./reactivity/tree2.png" width="128">
  <img src="./reactivity/sync.png" width="128">
</div>

---
layout: cover
---

# The need for a new model

<v-click>

## To replace zone.js

</v-click>

---

# Zone.js

* Tells Angular when something has change

* Angular synchronize the data and the DOM

---

# Downsides of Zone.js

*  30Kb of eagerly loaded library

* Monkey patches browser APIs (global side effects)

* Runtime context (Zones)

* Messy stacktraces

* No support for native Async/Await

---
layout: cover
---

# Poor DX

# Performance footguns

<!--
Basically holding us back
-->

---
layout: cover
---

# Engineering problem

## Complexe vs Complicated

---

<div grid="~ cols-2 gap-10" h-full font-size-8>
<div>
  <h1>Complicated</h1>

  * Takes time ⏳

  * Follow the plan 📖
</div>

<div>
  <h1>Complex</h1>

  * Like a plate of 🍝

  * Entangled 🪢

  * Relationships

  * Unknown outcome ❓

</div>

</div>

<!--
Complicated: Like building a plane

Complex:
En y plantant sa fourchette, il est très difficile de prévoir combien de pâtes on va attraper et quelle va être la forme de celles qui resteront dans l’assiette
-->

---

# Ideas

* Improving zone.js
* setState-style APIs
* Signals
* RxJS
* Compiler-based reactivity
* Proxies

---
layout: cover
---

# Getting inspired

## We like good ideas

<!-- We don't have the monopoly on good ideas -->

---

# We like the good parts

<div w-136 m-auto mt-12>

![](./alex-jsx.png)
<!-- https://x.com/synalx/status/1720509219752017949 -->
</div>

---
layout: cover
---

# Signals

## Inspired by Preact, Vue & SolidJS

<a absolute bottom-8 href="https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob/?utm_source=chatgpt.com">Blog: Evolution of Signals by Ryan Carniato</a>

<!--
During our research, one reactivity model stood out as clearly meeting our requirements while offering a very natural developer experience: signals.
-->

---
layout: 'intro'
---

# Signals
## A new reactive primitive

* Know when they're read
* Know when they're mutated

---

# v16 - First primitives

* `signal()`

* `computed()`

* `effect()`

---
layout: fact
---

<h1><span v-click>4</span> RFC<span v-click="1">s</span> </h1>

<h2 v-click>Feedback matters</h2>

<!--
1. Signal for reactivity
2. Signal APIs
3. Signal Components
4. RxJS Interop
-->

---
layout: cover
---

# Signal graph

<div grid="~ cols-2 gap-10" h-full font-size-8>

<div v-click>

```mermaid
flowchart TD
  s([Signal]) --> C1[Computed] --> C2[Computed] --> T{{Template}} & E(Effect)

```
</div>
<div v-click>

### ➡️ Angular understands the signal graph
<br>

### ➡️ 2-way data flow (👋 NG0100)
<br>

### ➡️ Enabled optimizations
</div>
</div>

---
layout: cover
---

# Zoneless is actually<br> it's own topic

<v-click>

## Possible with RxJS + `AsyncPipe`
</v-click>

---
layout: cover
---

# Expanding reactivity

## signal inputs, model & view queries

<img src="./input-issue.png" width="600" pt-12 v-click/>

---
layout: cover
---

# Real life experience<br> for the team

## Google Fonts App

---

# Collected experience

* Need for an automatic migration to close the gap

* `effect()`-based pattern

---
layout: cover
---

# `effect()` bad

<img src="./effect/alex.png" width="500" absolute rotate-15 top-35 left-60 v-click/>
<img src="./effect/josh.png" width="500" absolute rotate--15 top-25 left-60 v-click/>
<img src="./effect/manfred.png" width="600" absolute rotate-15 top-35 left-50 v-click/>

---
layout: cover
---

# We needed new primitives

## `linkedSignal()`
<br>

* Writable state
* Sync'd with other signals
* Previous value

## Advanced derivation

---
layout: cover
---

## Synchronous Derivation with `computed`/`linkedSignal`

<br><br>
<v-click>

## We still need something for async derivation !
</v-click>

---
layout: fact
---

# Resource

<v-click>

## New strategy: Experiental
</v-click>

---
layout: intro
---

# Experimental

## Basically feature that will change

## `resource` / `rxResource`
<br><br><br>
<div v-click>

## Play with it for a few months<br><br>Give us constructive feedback in an RFC
</div>

---

# Resource

---
layout: intro
class: text-center pb-5
---

# Thank you!

Slides on [riegler.fr/talks](https://riegler.fr/talks)

<!--
That's all for my talk, thank you. Please enjoy the rest of the conference :)
-->
