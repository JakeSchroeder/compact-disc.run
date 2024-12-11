<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/CD_autolev_crop_new.jpg" style="width:64px; height:64px" alt="compact disc"/>

# Compact Disc (v1.1)

Compact disc is a project I started in efforts to make the web weird again. As an indie game dev... I look back on the times of Flash and how prolific "fun and weird" was on the internet. After the death of Flash there has been a TON of advancements in creating game experiences in the browser, harnessing canvas and exploring new tech like web assembly and wgpu makes it arguably a better experience today. Frameworks like react and react-three-fiber offer a set of primitives to do just about anything. The community is growing and a lot of editor like experiences are making it easier to build in, im hoping the web as a platform matures into a viable target for fully fledged titles.

_Disclaimer: Much of this project was getting my feet wet in 3D art asset pipelines (psx style is kind of my jam), so the goal was to hand craft every pixel. I challenged myself to model every asset, texture every asset with pictures taken from my phone, and audio effects recorded from my desktop microphone. Homegrown if you will. Secondary to this was to implement all of the gameplay interaction in react. I could have reached for a game engine that supported canvas... but I wanted to go through assembling the "engine" myself. You can see a fun breakdown on my twitter https://x.com/Schrudmeister/status/1796823931539673334 And of course... create an experience unlock anything you would come across regarding someones portfolio._

Feel free to take inspiration and use anything in this repo. When possible please give me credit for the original work.

---

Points of interest:

- Starting by building out gameplay as bespoke tightly coupled logic, and then abstracting that into a single list of level definitions and making use of the scene graph.
  - This was a huge unlock for me. Seeing the iterative gameloop as just one big struct and a series of components reacting to the current level really just about sums it all up & showcases how ergonomic react is in this scenerio.
- Compressing things is good. The gltf format specifically (.glb) that supports binary data works incredibly well. With the help of wasm, mesh compression with Draco and KTX for crossplatform GPU texture formats is possibly. It is really incredible how much is out there in the three.js ecosystem. Grab a decoder and encode away.
  - Via the power of gltf-transform (a cli tool for all things gltf) I was able to really dig deep and squeeze the most out of game assets optimized for the web. Its really incredible how good gltf has become and how web standards have propogated into other formats.
- Very lightweight global state. (Probably could get rid of it entirely for such a simple game loop, but avoided some prop drilling which is pretty.)
  - One of the biggest strengths of react and js in general is how you think event driven, and how well that maps to implementing a game loop. Make the data you need for a level globally avaliable at at all times, read from it, and write to it. Let react handle the rest. Works surprising well, especially when working with GUIs and updating the rest of the scene. Its all the same part of your brain.
- Screen space shaders like the highlight effect on hover are dead simple with r3f post processing <Outline/> component... it really is like cheating.
  - Again as someone who has attempted to build a lot of these effects in opengl I am GRATEFUL to be able to just import {PostProcessing} from 'r3f' and call it a day. Absurdly powerful.

Roadmap:

- [ ] Camera bounds (its kind of fun clipping through the wall tho)
- [ ] Start screen camera transition (i have a bunch of camera dolly effects i want to add)
- [ ] FPS desk controls with focus pull (better immersion, more compelling story telling)
- [ ] Playable turn table with song list (probs need a seperate texture atlas to make uv stuff easier.)
- [ ] Persist current level (its annoying you cant go back)
- [ ] Decouple diary from level (there should be a bit of an inventory system)
- [ ] Original sound track (if only I had the time.)

Aside:

I am labeling this game and codebase as very much alpha. The game loop is working but theres still 20% of refinement that could be added. And some cross browser issues worth fixing (cough cough safari.) I welcome anyone to submit PR's to potentially make perf improvements. Or even take code/assets for your own game. I think there is def some perf pitfalls regarding re-rendering but I dont feel the need to optimize further... yet.

Thanks for reading, if you are curious about anything or just want to chat feel free to reach out. jakeschroeder8@gmail.com :)
