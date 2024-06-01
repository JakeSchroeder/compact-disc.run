<img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/CD_autolev_crop_new.jpg" style="width:64px; height:64px" alt="compact disc"/>

# Compact Disc (v1.1)

Compact disc is a project I started in efforts to make the web weird again.

Feel free to take inspiration and use anything in this repo. When possible please give me credit for the original work.

---

Points of interest:

- Starting with bespoke tightly coupled logic, and abstracting that into a single list of level definitions and making use of the scene graph.
- Compressing things is good. gltf (.glb) binary mesh compression with Draco and KTX for crossplatform GPU texture formats.
- Very lightweight global state. (Probably good get rid of it entirely for such a simple game loop, but avoid some prop drilling.) 
- Realtime physics never been so simple. Rapier-js integrated with r3f is truly remarkable. Web Assembly makes quick work of them rigid body calcs.
- Screen space shaders highlight effects are dead simple with r3f post processing... it really is like cheating.


Aside:

I am labeling this game and codebase as very much alpha. The game loop is working but theres still 20% of refinement that could be added. I welcome anyone to submit PR's to potentially make perf improvements. I think there is def so useless re-rendering going on but havent been able to track down. Would love any input on the code in general.
