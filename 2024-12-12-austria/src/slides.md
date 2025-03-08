---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 2
title: Pull Based with Angular
favicon: "https://riegler.fr/favicon.ico"
---

<h1 flex flex-col items-center forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(315deg,#E43348 25%,#972FF2);-webkit-background-clip: text;">
<img src="/angular.gif" width=150>
<br>Angular<br>Deliver web apps with confidence
</h1>

---
layout: cover
---

# A Hypothetical world
<v-click>

## Where life-cycle hooks don't exist
</v-click>

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
<div mt1 forward:delay-300 v-click>Lifecyle hook free</div>
</h1>

<div abs-br mx-10 mb-35 flex="~ col gap-4 items-end" text-left v-click="1">
  <img src="/angular.gif" w-40 pb-6 />

<div flex flex-col items-center forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(315deg,#E43348 25%,#972FF2);-webkit-background-clip: text;">
  ngGraz
  </div>
  <div text-sm opacity-75 mt--4>Dec. 2024</div>
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

<img src="https://matthieu.riegler.fr/avatar2.jpg" rounded-full w-35 abs-tr mt-32 mr-30 />

<!--
So first, let me introduce myself, my name is Matthieu Riegler.

...
-->

---
class:
---

<div transition duration-800 :class="$clicks < 1 ? 'translate-y-45' : ''" relative>
  <h1 relative text-center>Lifecycle hooks</h1>
</div>

<div top-15 relative transition duration-400 forward:delay-600 v-click="1">
  <v-clicks text-2xl>

  * ngOnInit
  * ngOnChanges
  * ngDoCheck
  * ngAfterContentInit
  * ngAfterContentChecked
  * ngAfterViewInit
  * ngAfterViewCheck
  * ngOnDestroy

  </v-clicks>
</div>

---
layout: cover
---

# ngOnInit

---
layout: cover
---

# A Quick look into the past

> Components should be cheap and safe to construct. You should not, for example, fetch data in a component constructor.
>
> \[...\]
>
> An `ngOnInit()` is a good place for a component to fetch its initial data.

---
class:
---

# Why we used `ngOnInit`

```ts
@Component({ /* ... */ })
class UserComponent {
  @Input() name: string;
  lastname = input.required<string>();

  constructor() {
    // cannot read inputs
  }

  ngOnInit(): void {
    // can read inputs
  }
}
```

<br>
<v-click>

## Input are set <span v-mark.yellow.underline=3 text-yellow>later</span>, after the class is initialy instantiated
</v-click>

---
class:
---

# Modern Angular: State Derivation & delayed reading

````md magic-move
```ts
@Component({ template: `fullName()` })
class UserComponent {
  name = input.required<string>();
  lastname = input.required<string>();

  fullName = computed(() => `${this.name()} ${this.lastName()}`);
```
```ts
@Component({ template: `fullName()` })
class UserComponent {
  name = input.required<string>();
  lastname = input.required<string>();

  fullName = computed(() => `${this.name()} ${this.lastName()}`);

  localState = linkedSignal(() => this.name());
  resource = resource({
    request: () => ({id: this.userId()}),
    loader: (request) => this.httpClient(`https://myendpoint.com/user/${this.id}`),
  });
```
```ts
@Component({ template: `fullName()` })
class UserComponent {
  name = input.required<string>();
  lastname = input.required<string>();

  fullName = computed(() => `${this.name()} ${this.lastName()}`);

  localState = linkedSignal(() => this.name());
  resource = resource({
    request: () => ({id: this.userId()}),
    loader: (request) => this.httpClient(`https://myendpoint.com/user/${this.id}`),
  });

  constructor() {
    effect(() => {
      // This is a view effect
      // it is first executed after init
      this.name();
    });
  }
```
````

---
class:
---

# But also

```ts
@Component({ /** ... */ })
export class FooComponent {
  readonly lang = input.required<string>();

  constructor() {
    // This is fine
    toObservable(this.lang).subscribe(/** */);
  }
}
```

---
layout: cover
---

# ngOnChanges

---
class:
---

# ngOnChanges

<v-clicks>

Listen on input changes

# <br> Aaaaand we already covered that. <br><br>It is at the heart of signal reactivity.

<br><br>➡️ Derivation<br>➡️ Effect

</v-clicks>

---
class:
---

# Effect scheduling

<div grid grid-cols-2 gap-16>
  <div >
    <br>

```ts
@Component( ... )
export class FooComponent {
  name = input.required<string>();

  constructor() {
    effect(() => { ... })
  }
}
```

  <div>

  `effect` runs before the component is sync'd
  </div>

  </div>

  <div v-click>
    <br>

```ts
@Component( ... )
export class FooComponent {
  name = input.required<string>();

  constructor() {
    afterRenderEffect(() => { ... })
  }
}
```

<div>

  `afterRenderEffect` runs app is fully sync'd
</div>

  </div>
</div>

---
layout: cover
---

# ngOnDestroy

---
class:
---

# ngOnDestroy

````md magic-move
```ts
@Component({ /** ... */ })
export class FooComponent {
  intervalId;

  constructor() {
    intervalId = setInterval(...);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
```
```ts
@Component({ /** ... */ })
export class FooComponent {
  constructor() {
    const intervalId = setInterval(() => {}, 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(intervalId));
  }
}
```
````

---
class:
---

# Context aware cleanup

```ts
function myFunctionThatNeedsCleanUp() {
  const destroyRef = inject(DestroyRef);

  const cleanUpOperation = someService();

  destroyRef.onDestroy(() => cleanUpOperation());
}
```

<br>
<v-clicks>

* Component context: runs on component destruction
* Root context: runs on app destruction

Ex: `toSignal()`, will unsubscribe on destroy to prevent leaks.
</v-clicks>

---
layout: cover
---

# The "After" hooks

<v-clicks>

* ngAfterContentInit
* ngAfterContentChecked
* ngAfterViewInit
* ngAfterViewCheck
</v-clicks>

---
class:
---

# The "After" hooks

When we want to know when our component is rendered

```ts
@Component({ template: `<canvas #myCanvas></canvas` })
export class FooComponent {
  myCanvas = viewChild('myCanvas');

  // Runs ones on creation
  ngAfterViewInit() {
    initCharts(this.myCanvas());
  }

  // Runs on every CD
  ngAfterViewChecked() {
    ...
  }
}
```

---
class:
---

<div grid grid-cols-2 gap-16>
  <div >
    <h2>Run once</h2>
    <br>

```ts
@Component({ template: `<canvas #myCanvas></canvas` })
export class FooComponent {
  myCanvas = viewChild('myCanvas');

  constructor() {
    afterNextRender(() => {
      // run once after the app rendered
      initCharts(this.myCanvas());
    });
  }
}
```

  <div>

  replaces <br>`ngAfterContentInit`,<br> `ngAfterViewInit`
  </div>

  </div>

  <div v-click>
    <h2>Run everytime</h2>
    <br>

```ts
@Component({ template: `<canvas #myCanvas></canvas` })
export class FooComponent {
  myChild = viewChild('childRef');

  constructor() {
    afterRender(() => {
      // run everytime the app rendered
      updateMyChild(myChild);
    });
  }
}
```

<div>

replaces <br>`ngAfterContentCheck`, <br>`ngAfterViewCheck`
</div>

  </div>
</div>

---
class:
---

# after(next)Render is better than you think.

```ts
afterRender({
  earlyRead: () => { ... },
  read: () => { ... },
  mixedReadWrite: () => { ... },
  write() { ... }
});
```
<v-clicks>
We can order DOM operations for better performance,

➡️ We don't want useless reflows.

If you want an idea of what DOM APIs trigger reflow, check <a href="https://gist.github.com/paulirish/5d52fb081b3570c81e3a">this list</a>
</v-clicks>

---
layout: cover
---

# ngDoCheck
<br>
<v-click>
Don't use it anymore ?<br>

Or maybe `effect()`.
</v-click>

---
layout: cover
---

# We don't live <br> in an hypothetical world

---
layout: cover
---

# No rush to rewrite your existing components

## But what about new ones ?

---
class:
---

# Code colocation

<div grid grid-cols-2 gap-8>

```ts
@Component({ /** ... */ })
export class FooComponent {
  intervalId;

  constructor() {
    intervalId = setInterval(...);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
```

<div v-click>
```ts
@Component({ /** ... */ })
export class FooComponent {
  constructor() {
    const intervalId = setInterval(() => {}, 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(intervalId));
  }
}
```

```ts
function myFunctionThatNeedsCleanUp() {
  const destroyRef = inject(DestroyRef);
  const cleanUpOperation = someService();
  destroyRef.onDestroy(() => cleanUpOperation());
}
```

* No separate member
* No additional method
* Whole feature is in 1 place

</div>

</div>

---
class:
---

# DX ain't perfect

```ts
@Component({ template: `fullName()` })
class UserComponent {
  name = input.required<string>();

  constructor() {
    this.name() // Doesn't throw at compile time.
  }
```

---
layout: cover
---

# Can the framework fill the remaining gaps ?

---
class:
---

# What if ?

```ts
@Component({ template: `fullName()` })
class UserComponent {
  constructor(name = input.required<string>()) {
    this.name() // valid;
  }
```

---
layout: cover
---

# Any other case that isn't cover ?

Let us know !

---
layout: intro
class: text-center pb-5
---

# Thank you!

Slides on [riegler.fr/talks](https://riegler.fr/talks)

<!--
That's all for my talk, thank you. Please enjoy the rest of the conference :)
-->
