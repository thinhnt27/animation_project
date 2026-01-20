import { ProcessStep } from "./types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "story",
    number: "01",
    title: "Story",
    description:
      "Every great film begins with a story. Our team of directors and story artists visualize the script, sketching thousands of panels to create a blueprint for the emotional journey.",
    details: [
      "Script Development",
      "Storyboarding",
      "Editorial",
      "Scratch Dialogue",
    ],
    alignLeft: true,
  },
  {
    id: "visual-dev",
    number: "02",
    title: "Visual Development",
    description:
      "This is where the magic begins. Visual Development artists explore the world of the film, designing characters, environments, colors, and textures to establish the visual language.",
    details: [
      "Character Design",
      "Environment Design",
      "Color Keys",
      "Texture Reference",
    ],
    layout: "horizontal-scroll",
    imageUrl: "",
    gallery: [
      // Tập hợp ảnh phong phú (50+ ảnh để chia cho 5 hàng)
      "./img/7d9fdc96-b2cb-4886-ba52-3aede2c7c6a7.jpeg",
      "./img/b2e1d1f2-e74e-454c-8459-f8fd2d05a25b.jpeg",
      "./img/ed872530-6d04-42c9-ae80-7e5ab5a5d171.jpeg",
      "./img/7d9fdc96-b2cb-4886-ba52-3aede2c7c6a7.jpeg",
      "./img/b2e1d1f2-e74e-454c-8459-f8fd2d05a25b.jpeg",
      "./img/ed872530-6d04-42c9-ae80-7e5ab5a5d171.jpeg",
      "https://images.unsplash.com/photo-1533130061792-649d45e41234?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620648378507-4ad3467d0232?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515536765-9b2a74083791?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605425183416-83a302996d7c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520690214124-2405c5217036?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633419461186-7d40a2e50594?q=80&w=2032&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625895197185-ef76a05e468a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535378437321-2961877ad33e?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520690214124-2405c5217036?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496247749665-49cf5bf87565?q=80&w=2541&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2568&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533130061792-649d45e41234?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620648378507-4ad3467d0232?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515536765-9b2a74083791?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605425183416-83a302996d7c?q=80&w=2070&auto=format&fit=crop",
    ],
    alignLeft: false,
  },
  {
    id: "modeling",
    number: "03",
    title: "Modeling",
    description:
      "This is where the 2D designs enter the 3D world. Modelers sculpt digital geometry for characters, props, and massive environments, ensuring they look good from every angle.",
    details: [
      "Character Modeling",
      "Environment Modeling",
      "Prop Sculpting",
      "Topology Optimization",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1633419461186-7d40a2e50594?q=80&w=2032&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625895197185-ef76a05e468a?q=80&w=2070&auto=format&fit=crop",
    ],
    alignLeft: true,
  },
  {
    id: "rigging",
    number: "04",
    title: "Rigging",
    description:
      "Rigging puts the bones and muscles inside the models. Technical directors build the digital skeletons that allow animators to move faces and bodies convincingly.",
    details: [
      "Skeletal Systems",
      "Muscle Simulation",
      "Facial Rigs",
      "Cloth Setup",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1535378437321-2961877ad33e?q=80&w=2071&auto=format&fit=crop",
    alignLeft: false,
  },
  {
    id: "layout",
    number: "05",
    title: "Layout",
    description:
      "Layout acts as the cinematographer. They place the virtual cameras, stage the characters in the sets, and determine the blocking and timing of the shots.",
    details: [
      "Camera Composition",
      "Set Dressing",
      "Rough Blocking",
      "Cinematography",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    alignLeft: true,
  },
  {
    id: "animation",
    number: "06",
    title: "Animation",
    description:
      "The heart of the performance. Animators bring characters to life frame by frame, infusing them with personality, emotion, and believable movement.",
    details: [
      "Keyframe Animation",
      "Acting Choices",
      "Motion Polish",
      "Lip Sync",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=2070&auto=format&fit=crop",
    alignLeft: false,
  },
  {
    id: "simulation",
    number: "07",
    title: "Simulation",
    description:
      "To add realism, simulation artists use physics engines to handle hair, fur, cloth, and crowds. They ensure that a character's dress flows naturally or their hair blows in the wind.",
    details: ["Hair & Fur", "Cloth Simulation", "Crowds", "Technical Polish"],
    imageUrl:
      "https://images.unsplash.com/photo-1520690214124-2405c5217036?q=80&w=2070&auto=format&fit=crop",
    alignLeft: true,
  },
  {
    id: "effects",
    number: "08",
    title: "Effects",
    description:
      "Effects artists create the natural phenomena within the world. From magical spells and explosions to water, fire, smoke, and rain, they make the world feel dynamic.",
    details: [
      "Particle Systems",
      "Fluid Dynamics",
      "Volumetrics",
      "Magical FX",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?q=80&w=2070&auto=format&fit=crop",
    alignLeft: false,
  },
  {
    id: "lighting",
    number: "09",
    title: "Lighting",
    description:
      "Lighters paint with digital light. They place virtual lights to enhance the mood, direct the viewer's eye, and ensure the characters integrate seamlessly with their environments.",
    details: ["Key Lighting", "Compositing", "Color Grading", "Atmospherics"],
    imageUrl:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop",
    alignLeft: true,
  },
  {
    id: "rendering",
    number: "10",
    title: "Stereo & Post",
    description:
      "The final touches. We render high-resolution frames, apply stereoscopic 3D adjustments, and finalize the color timing before the film is ready for the big screen.",
    details: [
      "Final Rendering",
      "Stereoscopic 3D",
      "Color Correction",
      "Mastering",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    alignLeft: false,
  },
];
