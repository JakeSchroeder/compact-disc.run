<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/CD_autolev_crop_new.jpg" style="width:64px; height:64px" alt="compact disc"/>

# Compact Disc (v1.1)

Compact disc is a project I started in efforts to make the web weird again. As an indie game dev... I look back on the times of Flash and how prolific "fun and weird" was on the internet. After the death of Flash there has been a TON of advancements in creating game experiences in the browser, harnessing new tech like web assembly and wgpu makes it arguably a better experience today. Frameworks like react and react-three-fiber offer a set of primitives to do just about anything. The community is growing and im hoping the web as a platform matures into a viable target for fully fledged titles.

*Disclaimer: Much of this project was getting my feet wet in 3D art asset pipelines (psx style is kind of my jam), so the goal was to hand craft every pixel. I challenged myself to model every asset, texture every asset with pictures taken from my phone, and audio effects recorded from my desktop microphone. Homegrown if you will. Secondary to this was to implement all of the gameplay interaction in react. I could have reached for a game engine that supported canvas... but I wanted to go through assembling the "engine" myself. You can see a fun breakdown on my twitter https://x.com/Schrudmeister/status/1796823931539673334*

Feel free to take inspiration and use anything in this repo. When possible please give me credit for the original work.

---

Points of interest:

- Starting with bespoke tightly coupled logic, and abstracting that into a single list of level definitions and making use of the scene graph.
  - This was a huge unlock for me. Seeing the iterative gameloop as just one big struct and a series of components reacting to the current level really just about sums it all up.
- Compressing things is good. gltf (.glb) binary format, mesh compression with Draco and KTX for crossplatform GPU texture formats.
  - Via the power of gltf-transform (a cli tool for all things gltf) I was able to really dig deep and squeeze the most out of game assets optimized for the web. Its really incredible how good gltf has become and how web standards have propogated into other formats. 
- Very lightweight global state. (Probably could get rid of it entirely for such a simple game loop, but avoid some prop drilling.)
  - One of the biggest strengths of react and js in general is how event driven it is and how well that maps to implementing a game loop. Make the data you need for a level globally avaliable at at all times, read state from it and write state to it. Let react handle the rest. Works surprising well.
- Realtime physics. Rapier-js integrated with r3f is truly remarkable. Web Assembly makes quick work of them rigid body calcs.
  - I must admit I feel pretty dang lucky I get to use libs like rapier and nearly all the implementation is obscured away behind the iron gate of npm. After 3 months or so of investigation regarding real time physics and different approaches, I think rapier was the right call here. I could remove the need for physics all together... but for what I have planned it cool to have it.
- Screen space shaders highlight effects are dead simple with r3f post processing... it really is like cheating.
  - Again as someone who has attempted to build a lot of these effects in opengl I am GRATEFUL to be able to just import {PostProcessing} from 'r3f' and call it a day. Absurd.

Roadmap:

- [ ] Camera bounds (its kind of fun clipping through the wall tho)
- [ ] Start screen camera transition (i have a bunch of camera dolly effects i want to add)
- [ ] FPS desk controls with focus pull (better immersion, more compelling story telling)
- [ ] Playable turn table with song list (probs need a seperate texture atlas to make uv stuff easier.)
- [ ] Persist current level (its annoying you cant go back)
- [ ] Decouple diary from level (there should be a bit of an inventory system)
- [ ] Original sound track (if only I had the time.)

Aside:

I am labeling this game and codebase as very much alpha. The game loop is working but theres still 20% of refinement that could be added. I welcome anyone to submit PR's to potentially make perf improvements. Or even take code/assets for their own game. I think there is def some re-rendering going on but havent spent the time to track down.

Thanks for reading :) 
