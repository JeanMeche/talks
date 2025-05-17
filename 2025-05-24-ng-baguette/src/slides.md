---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 2
title: Build reactivity
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
  <span v-click>The more </span>
  <span>you know</span>
  <sup v-click>❤️</sup>
</div>
<div mt1 forward:delay-300 v-click>Building Angular</div>
</h1>

<div abs-br mx-10 mb-35 flex="~ col gap-4 items-end" text-left v-click="1">
  <img src="/baguette.png" w-40 pb-6 />

<div flex flex-col items-center forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(315deg,#E43348 25%,#972FF2);-webkit-background-clip: text;">
  NG Baguette
  </div>
  <div text-sm opacity-75 mt--4>May 24th 2025</div>
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
{Angular} Team <br>

<v-click>
 🚀 Now working full time on Angular, Docs & Tooling
</v-click>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center v-click>
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
layout: cover
class: text-center
---

# A team

## Made of real people

<v-click>

{@jelbourn}
{@alxhub}
{@pkozlowski-opensource}
{@crisbeto}
{@thePunderwoman}
{@atscott}
{@devversion}
{@andrewkushnir}
{@mmalerba}
{@kirjs}
{@jeanmeche}
{@joostK}
</v-click>
<v-click>
<hr/>

{@mgechev}
{@marktechson}
</v-click>
<v-click>
<hr/>

{@dgp1130}
{@alan-agius4}
{@clydin}
{@jkrems}
</v-click>
<v-click>
<hr/>

{@andrewseguin}
{@wagnermaciel}
</v-click>

<!--
Someone told me a Ng Conf'24, this was the 3rd generation of the NG Team and it was a great one
-->

---
layout: cover
---

## Of course
<v-click>

# You,
# The open source community
</v-click>

---
layout: cover
---

# Angular lives
<div mt--4 ml--1 v-click>
<span font-serif text-6xl italic v-mark.linethrough.red="{at:2,roughness:6,seed:146}">In our heart ❤️</span>
</div>
<div v-click=3 text-6xl italic>

On {GitHub}

</div>

---
layout: cover
---

# {Angular}

  <h1 class="text-6xl">
  A
    <span class="text-[#4285F4]" font-bold>G</span>
    <span class="text-[#EA4335]" font-bold>o</span>
    <span class="text-[#FBBC05]" font-bold>o</span>
    <span class="text-[#4285F4]" font-bold>g</span>
    <span class="text-[#34A853]" font-bold>l</span>
    <span class="text-[#EA4335]" font-bold>e</span>    Framework
  </h1>

---
layout: cover
---

# Disclaimer: Only public information

---
layout: cover
---

# Google3
## Google's Monorepo

<div text-4xl pt-8 v-click>

* 2B+ LoC
* More than half of Google's apps
* 4k+ Angular apps
</div>

<!--
Apps in G3: Photo, Google Suit, Youtube, Cloud Console,
Notable exceptions: Android, Chromium

-->

---
layout: cover
---

# G3

<div flex gap-8 flex-col>

## Very Custom Monorepo
## Centralized VCS: Piper
## Trunk based
## Cider IDE
</div>

<!--
CIDER: Cloud Integrated Development Environment and Repository
https://code.google.com/archive/p/cider-ide/
-->

---
layout: cover
---

# Angular also lives inside G3
## Synced regularly from {GitHub}

---
layout: cover
---

# No Angular versions at Google

## Apps at Google use HEAD instead of a release version
<br><br >

````md magic-move
```html {*|3}{class:'!children:text-xl'}
<body>
  <gf-root
      ng-version="0.0.0-PLACEHOLDER"
      class="gf-body-large"
  >
      ...
  </gf-root>
</body>
```
````

Example from [Google Fonts](https://fonts.google.com/)

<!--
There are no Angular version inside G3 (no major, no minor, no patch)
All angular projects versioned in G3 use HEAD
-->

---
layout: cover
---

# A breaking change impacts Google first

## The team is responsible for landing breaking change

---
layout: cover
---

# Leverage the monorepo

## Change can be tested against the whole monorepo

Presubmit/TGP

<!--
You often see the terms TGP/Presubmit/Global Presubmit
Presubmit: Limited set of tests, quick to run
TGP/Global Presubmit: Builds & runs all the tests of all the apps impacted by the PR, can take several hours.
-->

---
layout: intro
---

# Breakages

## Are known often in less than a few hours after merge

## They rarely impact the released versions

<!--
If they do, it often means that they are very edgy as they didn't impact Google's app !
-->

---
layout: intro
---

## An easy change is not necessarly easy to land

<div text-3xl leading-8>

Ex: [#30296](https://github.com/angular/angular/issues/30296): `QueryList#changes` is not typed strongly<br><br><br><br>

<v-click>

The type of `QueryList#changes` is `Observable<any>`, <br><br>
It should be `Observable<T>`
</v-click>

<h2 v-click>Signal Queries are a better alternative</h2>
</div>

<!--
The issue ended up being a "won't do" as there is a better alternative
Reduces the burden on the team and external projects
-->

---
layout: cover
---

# Features

---
layout: cover
---

# Angular is a longterm project
<span></span> <!-- to work around to opacity issue on the following image -->

![](/angular-initial-commit.jpg){.w-500px.rounded-lg.shadow.border.border-main.m-auto}

<h2 v-click> It deserves a longterm backlog</h2>

<!--
First commit
https://github.com/angular/angular/commit/6a3abf2366e2c32ce3460155903262fee01736c8
-->

---
layout: cover
---

# Backlog is made of

<ul text-4xl>
<li>Team ideas</li>
<li>Other google teams needs</li>
<li>Famous GitHub issues</li>
</ul>

---
layout: intro
---

# Driven by long term goals
<br>

## Template shouldn't diverge too much from TS
<br>

## Single File compilation
<br>
etc.

---

<h2><span text-4xl> Support the project’s long-term success</span></h2>
<br><br>
<v-clicks>
<ul text-3xl>
<li>Decision Records
  <ul>
    <li>Product requirements document (PRD)</li>
    <li>Architectural Decision Records (ADR)</li>
    <li>Design Docs</li>
  </ul>
</li>
<li>Well commented codebase</li>
<li>Clean commit tree</li>
</ul>
</v-clicks>

---
layout: intro
---

# A good feature request
<br>

## A usecase, a repro
<br>

## Often [XY Problems](https://xyproblem.info/)

<!--
The team needs to understand the underlying problem, discard XY problems
It's important to show that the workaround are either unexisting or far from ideal
-->

---
layout: intro
---

# Angular renaissance

## Understand that new patterns take time to settle
<br>

## No rush, the team listens to needs & feedbacks
<br>

---
layout: intro
class: text-center pb-5
---

# Thank you for being such a great community 🙌

Slides on [riegler.fr/talks](https://riegler.fr/talks)

<!--
That's all for my talk, thank you. Please enjoy the rest of the conference :)
-->
