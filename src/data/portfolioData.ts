export interface Project {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: 'Development' | 'Research' | 'Design' | 'Hardware & Robotics';
  year: string;
  techTags: string[];
  coverImage: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    theIdea: string;
    theProblem: string;
    myApproach: string;
    systemArchitecture: {
      diagramSummary: string;
      layers: { name: string; description: string; tech: string }[];
    };
    developmentProcess: {
      phase: string;
      title: string;
      description: string;
    }[];
    challenges: {
      challenge: string;
      solution: string;
    }[];
    results: string[];
    futureScope: string[];
    githubUrl: string;
    liveUrl?: string;
  };
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  duration: string;
  type: string;
  location: string;
  shortDescription: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  photoUrl?: string;
  photoCaption?: string;
}

export interface MilestoneLevel {
  level: string;
  title: string;
  tagline: string;
  badge: string;
  location?: string;
  period?: string;
  summary: string;
  details: string[];
  keyTakeaway: string;
  iconName: string;
  photoUrl?: string;
  photoCaption?: string;
}

export interface SkillGroup {
  category: string;
  terminalCode: string;
  skills: { name: string; level: string; note: string }[];
}

export interface ExplorationTopic {
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  perspectives: string[];
  keyInquiry: string;
  artifacts: string[];
}

export const INITIAL_PERSONAL_INFO = {
  name: "Tushar Thakur",
  title: "Computer Engineer & Multidisciplinary Technologist",
  institution: "Vishwakarma Institute of Technology, Pune",
  specialization: "Artificial Intelligence & Data Science",
  tagline: "CURIOUS SINCE DAY ONE. BUILDING WHAT'S NEXT.",
  status: "Curious by nature. Driven to experiment. Always building.",
  intro: "Exploring technology, building ideas and connecting disciplines across AI, software, hardware and design.",
  terminalCommand: "C:\\> initialize_dossier.exe --target",
  loadingMessage: "LOADING PERSONAL ARCHIVE...",
  email: "connect@tusharthakur.com.np",
  github: "https://github.com/thistushar24",
  linkedin: "https://www.linkedin.com/in/tushar-thakur-429b01288/",
  calUsername: "tusharthakur",
  location: "Pune, India (Born in Nepal)",
};

export const INITIAL_MILESTONE_LEVELS: MilestoneLevel[] = [
  {
    level: "LEVEL 01",
    title: "THE CURIOUS KID",
    tagline: "Before the Alphabet, the Silicon Fascination",
    badge: "ORIGIN_SEED // NEPAL",
    location: "Nepal",
    period: "Early Childhood",
    summary: "Born in Nepal, my curiosity about computers started before I had even learned the complete alphabet.",
    details: [
      "Fascinated by screens, blinking LEDs, and mechanical keyboards in an era where technology felt like sheer magic.",
      "Constantly dismantled electronic toys and clockwork radios to deduce what made them function beneath their shells.",
      "Formed an innate conviction early on that computers were not passive tools, but malleable canvases for building worlds."
    ],
    keyTakeaway: "Curiosity was never taught—it was the baseline instinct from day one.",
    iconName: "Compass",
    photoUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    photoCaption: "Early curiosity in Nepal: exploring electronics and components."
  },
  {
    level: "LEVEL 02",
    title: "FIRST EXPERIMENTS",
    tagline: "Websites, Markups & The First Digital Footprints",
    badge: "INCUBATION // BLOGGER & HTML",
    location: "School Years",
    period: "Class 6 & 7",
    summary: "Around Class 6 and 7, I started experimenting with Blogger. I created multiple web pages, explored layouts and wrote content.",
    details: [
      "Tinkered with raw HTML templates, inline CSS stylesheets, and widget injection on Google Blogger.",
      "Built multiple standalone micro-blogs on science, technology news, and game walkthroughs.",
      "Discovered the profound thrill of writing code in an editor and seeing it immediately render across browser viewports worldwide.",
      "Learned early lessons in layout balance, user attention spans, and content architecture."
    ],
    keyTakeaway: "The web transformed from something I consumed into something I could sculpt.",
    iconName: "Code2",
    photoUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    photoCaption: "School years: First web experiments with HTML and Blogger layouts."
  },
  {
    level: "LEVEL 03",
    title: "INSPIRATION",
    tagline: "The Triad: Steve Jobs, Bill Gates & Leonardo da Vinci",
    badge: "PHILOSOPHICAL_FOUNDATION",
    location: "Formative Influences",
    period: "Foundational Years",
    summary: "Three visionaries profoundly shaped my philosophy: Steve Jobs, Bill Gates, and Leonardo da Vinci.",
    details: [
      "STEVE JOBS: His relentless obsession with product taste, the intersection of technology and the liberal arts, and uncompromising simplicity taught me that engineering without soul is merely utility.",
      "BILL GATES: His journey showed me how intense curiosity about personal computing could be systematically scaled into ubiquitous operating platforms that transformed global civilization.",
      "LEONARDO DA VINCI: The ultimate polymath. Da Vinci proved that true breakthrough innovation lives at the intersection where fine art, rigorous mechanical engineering, biology, and imaginative speculation meet without artificial boundaries."
    ],
    keyTakeaway: "Taste, scalability, and polymathic curiosity: the three pillars of impactful creation.",
    iconName: "Sparkles",
    photoUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    photoCaption: "Connecting technology, design, and liberal arts."
  },
  {
    level: "LEVEL 04",
    title: "THE DECISION",
    tagline: "Chosen Autonomy Over Prescribed Pathways",
    badge: "CONVICTION_NODE",
    location: "Academic Crossroads",
    period: "High School to Pre-Engineering",
    summary: "Becoming a computer engineer was my own decision. I wanted to explore technology because I genuinely enjoyed it, not because someone else expected it from me.",
    details: [
      "Resisted passive default pathways, intentionally selecting computer engineering with deliberate personal conviction.",
      "Immersed into self-taught programming languages, logic structures, and algorithm basics outside curriculum boundaries.",
      "Understood that true engineering is an artisan craft driven by relentless curiosity and iterative problem solving."
    ],
    keyTakeaway: "Unshakable intrinsic motivation outperforms external expectations every single time.",
    iconName: "Crosshair",
    photoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    photoCaption: "Making the deliberate choice: computer engineering as a vocation."
  },
  {
    level: "LEVEL 05",
    title: "CURRENT CHAPTER",
    tagline: "AI, Hardware, Robotics & Polymathic Exploration",
    badge: "ACTIVE_HORIZON // VIT PUNE",
    location: "Pune, India",
    period: "Present Chapter",
    summary: "Currently pursuing B.Tech in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology, Pune.",
    details: [
      "Expanding interests across AI research, computer vision, embedded systems, robotic kinetics, and user interface design.",
      "Leading technical club operations, steering design systems, and conducting interdisciplinary R&D.",
      "Building practical prototypes that bridge machine intelligence with tactile physical hardware."
    ],
    keyTakeaway: "Actively constructing the next paradigm at the convergence of software, AI, and physical hardware.",
    iconName: "Cpu",
    photoUrl: "/tushar-thakur.jpg",
    photoCaption: "Present: B.Tech in AI & Data Science at VIT Pune."
  },
];

export const INITIAL_PROJECTS_DATA: Project[] = [
  {
    slug: "synapse-vision-ai",
    name: "Synapse Vision AI",
    tagline: "Autonomous Multi-Object Detection & Edge Spatial Tracking",
    shortDescription: "High-throughput computer vision pipeline optimized for embedded edge devices with real-time bounding telemetry and latency under 18ms.",
    category: "Research",
    year: "2024",
    techTags: ["Python", "PyTorch", "OpenCV", "YOLOv8", "TensorRT", "Edge AI"],
    coverImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    metrics: [
      { label: "Inference Latency", value: "16.8 ms" },
      { label: "mAP@0.5", value: "92.4%" },
      { label: "Target FPS", value: "60 FPS" },
      { label: "Model Size", value: "14.2 MB" }
    ],
    caseStudy: {
      overview: "Synapse Vision AI is a custom-trained multi-class object detection and spatiotemporal tracking engine engineered specifically for resource-constrained robotics platforms. It combines low-overhead quantization with Kalman filtering to maintain unbroken target trajectory prediction even during severe camera occlusions.",
      theIdea: "Modern edge robotics frequently struggle with bulky deep learning models that throttle CPUs and drain battery reserves. The goal was to build a streamlined, highly optimized vision engine capable of running inference at sustained 60 FPS on compact single-board computers like Raspberry Pi 4 and Jetson Nano.",
      theProblem: "Standard object detection architectures suffer from severe memory bottlenecks and dynamic lighting degradation in outdoor environments. Previous solutions either sacrificed detection confidence or exceeded thermal throttling thresholds within 5 minutes of continuous operation.",
      myApproach: "Engineered a pruned backbone using depthwise separable convolutions coupled with INT8 post-training quantization. Implemented an asynchronous multi-threaded buffer pipeline that decouples frame acquisition from neural inference, preventing video frame drops.",
      systemArchitecture: {
        diagramSummary: "Asynchronous dual-threaded pipeline ingesting camera feeds via V4L2, piping into INT8 TensorRT runtime, followed by Hungarian association and spatiotemporal Kalman trajectory estimation.",
        layers: [
          { name: "Ingestion Layer", description: "Direct-to-GPU zero-copy frame buffer with OpenCV CUDA bindings", tech: "C++ / OpenCV" },
          { name: "Neural Inference Core", description: "Quantized multi-head feature pyramid network with dynamic anchor assignment", tech: "PyTorch / TensorRT" },
          { name: "Tracking & Association", description: "Custom DeepSORT-inspired Kalman filter with spatial occlusion buffer", tech: "Python / NumPy" },
          { name: "Telemetry Export", description: "High-speed WebSocket & ROS2 topic publisher for robot motor controllers", tech: "FastAPI / ROS2" }
        ]
      },
      developmentProcess: [
        { phase: "Phase 01", title: "Dataset Curation & Augmentation", description: "Annotated 8,400 multi-angle robotics field frames with synthetic lighting shifts and chromatic aberration." },
        { phase: "Phase 02", title: "Model Architecture Pruning", description: "Stripped redundant feature channels using channel-level L1 structured pruning, cutting parameters by 42%." },
        { phase: "Phase 03", title: "Quantization & Compilation", description: "Compiled to TensorRT FP16/INT8 engine with calibrated entropy tables on NVIDIA Jetson." },
        { phase: "Phase 04", title: "Edge Hardware Field Validation", description: "Stress-tested aboard an autonomous ground rover across outdoor terrain at noon and dusk." }
      ],
      challenges: [
        {
          challenge: "Dynamic Motion Blur during Rapid Yaw Swings",
          solution: "Integrated a lightweight synthetic blur deconvolution kernel into the pre-processing stage and augmented dataset with directional motion vectors."
        },
        {
          challenge: "Thermal Throttling on Compact Embedded Chassis",
          solution: "Wrote a dynamic frequency governor that modulates inference batch intervals based on onboard thermistor readings, sustaining constant temperature below 68°C."
        }
      ],
      results: [
        "Sustained 58-62 FPS inference on Jetson Orin Nano with 92.4% mAP across 12 distinct navigational obstacle classes.",
        "Zero dropped frames during continuous 4-hour field trials in direct sunlight.",
        "Adopted by robotics club teams for competitive autonomous navigation challenges."
      ],
      futureScope: [
        "Incorporate 3D point cloud fusion using stereo depth sensors.",
        "Add self-supervised continual learning on newly encountered environmental obstacles."
      ],
      githubUrl: "https://github.com/thistushar24",
      liveUrl: "https://github.com/thistushar24"
    }
  },
  {
    slug: "hexapod-kinematics-bot",
    name: "Aegis Hexapod 18-DOF",
    tagline: "Bio-inspired 18-Degree-of-Freedom Omnidirectional Walker",
    shortDescription: "Custom 3D-designed hexapod robot featuring analytical inverse kinematics, wave and ripple gaits, and IMU-stabilized dynamic posture leveling.",
    category: "Hardware & Robotics",
    year: "2024",
    techTags: ["ESP32", "Arduino", "Fusion 360", "Inverse Kinematics", "C++", "Robotics"],
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    metrics: [
      { label: "Actuators", value: "18 Servos" },
      { label: "DOF", value: "3 DOF / Leg" },
      { label: "Update Rate", value: "100 Hz IK" },
      { label: "Chassis", value: "Custom SLA" }
    ],
    caseStudy: {
      overview: "Aegis Hexapod is a ground-up robotic platform inspired by insect locomotion. Powered by an ESP32 micro-controller and an 18-servo array, it performs real-time inverse kinematics calculations to navigate uneven terrain with terrain-adaptive dynamic stabilization.",
      theIdea: "Wheeled rovers fail catastrophically on rubble, stairs, and loose debris. Bio-inspired hexapods solve this through multiple points of ground contact, maintaining a stable tripod stance at all times.",
      theProblem: "Controlling 18 high-torque metal-gear servos simultaneously demands high-frequency trigonometric computations and precise PWM timing, along with surge current management that can easily brown-out standard micro-controllers.",
      myApproach: "Modeled all 6 legs parametrically in Autodesk Fusion 360 with stress-analyzed coxa, femur, and tibia linkages. Wrote an analytical geometric Inverse Kinematics solver in optimized C++ running on core 1 of the ESP32, while handling WiFi/Bluetooth telemetry on core 0.",
      systemArchitecture: {
        diagramSummary: "Dual-core ESP32 architecture isolating kinematics state-machine from low-level 16-channel PCA9685 PWM servo drivers and 6-axis MPU6050 IMU feedback loop.",
        layers: [
          { name: "Mechanics & Enclosure", description: "Modular carbon-PETG chassis with vibration-dampened servo mounts", tech: "Fusion 360 / 3D Print" },
          { name: "Kinematics Engine", description: "Analytical 3-DOF geometric solver mapping body XYZ translations and roll-pitch-yaw angles to individual leg joint angles", tech: "C++ / FreeRTOS" },
          { name: "Power Distribution", description: "High-discharge 2S LiPo with dual 5V 15A buck regulators and brown-out buffer capacitor bank", tech: "Hardware PCB" },
          { name: "Telemetry & Control", description: "WebSockets gamepad web interface hosted directly from ESP32 AP mode", tech: "HTML5 / WebSockets" }
        ]
      },
      developmentProcess: [
        { phase: "Phase 01", title: "CAD Kinematic Simulation", description: "Simulated joint ranges of motion and collision boundaries in Fusion 360 assemblies." },
        { phase: "Phase 02", title: "Math & Gait Modeling", description: "Derived closed-form inverse kinematics formulas for tripod, wave, and ripple locomotion gaits." },
        { phase: "Phase 03", title: "Electronics & Power Circuitry", description: "Built custom power distribution board handling 15A stall current surges without logic voltage dips." },
        { phase: "Phase 04", title: "IMU Active Leveling", description: "Implemented PID tilt compensation that levels the hexapod body while walking across inclined ramps." }
      ],
      challenges: [
        {
          challenge: "Current Spikes Triggering MCU Reset",
          solution: "Segregated servo power rail from ESP32 logic rail with Schottky isolation diodes and 4700µF low-ESR electrolytic bypass capacitors."
        },
        {
          challenge: "Accumulative Phase Drift in Tripod Gait",
          solution: "Implemented normalized phase oscillators with synchronized gait timers anchored to a hardware microsecond counter."
        }
      ],
      results: [
        "Flawless omnidirectional traversal across 25-degree gravel inclines and stepped obstacles.",
        "Zero MCU resets over continuous 45-minute battery endurance test.",
        "Featured prominently at VIT Pune Robotics Forum technology exhibitions."
      ],
      futureScope: [
        "Mount an overhead depth camera for visual SLAM and autonomous pathfinding.",
        "Implement foot-mounted micro load cells for tactile ground-force compliance."
      ],
      githubUrl: "https://github.com/thistushar24",
      liveUrl: "https://github.com/thistushar24"
    }
  },
  {
    slug: "aether-os-dossier",
    name: "Aether OS Interface",
    tagline: "Contextual Terminal & Minimalist Spatial Knowledge System",
    shortDescription: "Experimental web operating environment combining command-line terminal primitives with responsive editorial data visualization.",
    category: "Development",
    year: "2024",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Canvas API", "Framer Motion"],
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Bundle Size", value: "< 95 KB" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Theme", value: "Dark & Gold" }
    ],
    caseStudy: {
      overview: "Aether OS is an avant-garde personal interface experiment that merges the austere beauty of Unix terminal pipelines with the warmth of organic botanical generative art. Built with sub-millisecond route transitions and zero bloat.",
      theIdea: "Modern portfolios are filled with interchangeable templates and mindless scrolling. Aether OS treats a personal archive as an exploratory operating system—with commands, inspection modes, and interactive node systems.",
      theProblem: "Complex animated interfaces often suffer from sluggish JavaScript execution, poor accessibility, layout shifts, and heavy bundle weight.",
      myApproach: "Engineered from scratch using lightweight SVG parametric Bézier generators and GPU-accelerated CSS transforms. Built keyboard-navigable shortcuts alongside intuitive tactile mouse interactions.",
      systemArchitecture: {
        diagramSummary: "Stateless functional component tree driven by React Router, with a central SVG organic root simulation synced to native window scroll deltas.",
        layers: [
          { name: "Visual Core", description: "Organic Bézier stroke-dash generator simulating real botanical branch bifurcation", tech: "SVG / Canvas / Math" },
          { name: "Navigation Engine", description: "Multi-page client routing with predictive prefetching and keyboard shortcuts", tech: "React Router v7" },
          { name: "Styling Tokens", description: "Strict white and gold monochrome palette with high-contrast editorial typography", tech: "Tailwind CSS v4" }
        ]
      },
      developmentProcess: [
        { phase: "Phase 01", title: "Information Architecture", description: "Structured personal archive into distinct thematic dossiers rather than an endless monolith." },
        { phase: "Phase 02", title: "Botanical Curve Mathematics", description: "Formulated recursive branching equations with natural curvature jitter and tapering offsets." },
        { phase: "Phase 03", title: "Responsive Fluid Grid", description: "Designed independent mobile and desktop compositions maintaining pristine editorial cadence." }
      ],
      challenges: [
        {
          challenge: "Scroll-Linked Performance Hiccups",
          solution: "Decoupled scroll event listeners using requestAnimationFrame throttling and pure CSS transform calculations."
        }
      ],
      results: [
        "Flawless 60 FPS animation on desktop and mobile browsers.",
        "100/100 Google Lighthouse performance rating across SEO and Accessibility."
      ],
      futureScope: [
        "Add interactive voice-command terminal interface.",
        "Export dossier snapshots as cryptographically signed PDF archives."
      ],
      githubUrl: "https://github.com/thistushar24",
      liveUrl: "https://tusharthakur.com.np"
    }
  },
  {
    slug: "neuro-acoustic-analyzer",
    name: "NeuroAcoustic Analyzer",
    tagline: "Graph Neural Anomaly Detection in Industrial Rotational Machinery",
    shortDescription: "Acoustic emission analysis using Graph Neural Networks and spectrogram embedding to identify micro-fractures in industrial turbine bearings.",
    category: "Research",
    year: "2023",
    techTags: ["Python", "FastAPI", "PyTorch Geometric", "Librosa", "Signal Processing"],
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    metrics: [
      { label: "Anomaly Accuracy", value: "96.8%" },
      { label: "Early Warning", value: "48 Hours" },
      { label: "Sampling Rate", value: "44.1 kHz" },
      { label: "GNN Layers", value: "4 SAGEConv" }
    ],
    caseStudy: {
      overview: "An experimental signal processing and machine learning pipeline that transforms raw acoustic vibration feeds from micro-turbines into dynamic spatial temporal graphs to predict bearing fatigue well before thermal signatures appear.",
      theIdea: "Industrial machinery emits distinct acoustic patterns before physical failure. By treating acoustic frequency bins as interconnected graph nodes with harmonic relationships, subtle structural resonance breakdown can be detected instantly.",
      theProblem: "Standard FFT spectral analysis misses subtle non-linear harmonics and suffers when factory background noise spikes.",
      myApproach: "Transformed audio spectrograms into dynamic k-nearest-neighbor graphs where edges represent harmonic correlation. Trained a Graph Convolutional Network (GCN) that isolates anomalous vibration trajectories.",
      systemArchitecture: {
        diagramSummary: "Continuous audio ingestion -> STFT Spectrogram -> Dynamic Graph Constructor -> SAGEConv Graph Classifier -> Diagnostic Dashboard.",
        layers: [
          { name: "Signal Extraction", description: "Short-Time Fourier Transform with Hanning windows and harmonic-percussive separation", tech: "Librosa / SciPy" },
          { name: "Graph Constructor", description: "Dynamic spatial-temporal graph generation based on cross-spectral coherence", tech: "NetworkX / PyG" },
          { name: "Inference Engine", description: "4-layer GraphSAGE network with attention pooling", tech: "PyTorch Geometric" }
        ]
      },
      developmentProcess: [
        { phase: "Phase 01", title: "Acoustic Chamber Recording", description: "Gathered 140+ hours of controlled vibration recordings on test motor rigs with seeded bearing flaws." },
        { phase: "Phase 02", title: "Spectral Preprocessing", description: "Engineered noise filtering filters to suppress steady-state background room humming." },
        { phase: "Phase 03", title: "Graph Architecture Design", description: "Evaluated GCN, GAT, and GraphSAGE backbones, achieving highest F1 score with GraphSAGE." }
      ],
      challenges: [
        {
          challenge: "High Ambient Noise Floor in Industrial Environments",
          solution: "Applied adaptive spectral gating and differential acoustic cancellation using secondary reference microphones."
        }
      ],
      results: [
        "Demonstrated 96.8% anomaly detection accuracy on benchmark Case Western Reserve bearing dataset.",
        "Detected inner raceway spalling 48 hours prior to measurable temperature rise."
      ],
      futureScope: [
        "Deploy on dedicated ultra-low-power edge DSP chips for continuous in-situ monitoring."
      ],
      githubUrl: "https://github.com/thistushar24",
    }
  },
  {
    slug: "sentinel-iot-telemetry",
    name: "Sentinel IoT Gateway",
    tagline: "Industrial ESP32 Distributed Sensor Mesh & Cloud Dashboard",
    shortDescription: "Ultra-low-power environmental telemetry mesh communicating over ESP-NOW and MQTT with automated failover and solar harvesting battery management.",
    category: "Hardware & Robotics",
    year: "2023",
    techTags: ["ESP32", "C++", "MQTT", "Grafana", "InfluxDB", "KiCad"],
    coverImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    metrics: [
      { label: "Mesh Range", value: "350 m / node" },
      { label: "Sleep Current", value: "12 µA" },
      { label: "Data Integrity", value: "99.98%" }
    ],
    caseStudy: {
      overview: "A distributed hardware gateway for remote agricultural and environmental sensing. Employs deep-sleep cycles and decentralized peer-to-peer ESP-NOW mesh protocols to route sensor data without requiring cellular modems at every outpost node.",
      theIdea: "Agricultural deployments suffer when WiFi coverage drops. A self-healing peer-to-peer mesh allows edge nodes to bounce telemetry down the chain to a central cellular gateway.",
      theProblem: "Power starvation in off-grid deployments and packet collisions when hundreds of asynchronous sensor nodes burst data simultaneously.",
      myApproach: "Programmed synchronous wake-up beacons using ultra-low-power timer interrupts. Built a custom solar harvesting circuit in KiCad with MPPT solar management.",
      systemArchitecture: {
        diagramSummary: "ESP-NOW star-mesh nodes -> Central Edge Gateway (ESP32 + SIM800L) -> Secure MQTT Broker -> InfluxDB Time-Series -> Grafana UI.",
        layers: [
          { name: "Node Firmware", description: "Bare-metal FreeRTOS firmware with 12µA deep-sleep power states", tech: "C++ / ESP-IDF" },
          { name: "Gateway Hub", description: "Bridges local RF packet buffer to cloud MQTT broker over TLS", tech: "ESP32 / Cellular" },
          { name: "Data Persistence", description: "High-resolution time-series storage with automated downsampling", tech: "InfluxDB" }
        ]
      },
      developmentProcess: [
        { phase: "Phase 01", title: "Custom Schematic Design", description: "Designed modular PCB in KiCad incorporating BME280, soil moisture capacitive probes, and solar chargers." },
        { phase: "Phase 02", title: "Mesh Protocol Engineering", description: "Engineered collision-avoidance TDMA slot scheduling over ESP-NOW." },
        { phase: "Phase 03", title: "Long-Duration Field Deployment", description: "Deployed 6 experimental nodes across rural terrain over 3 consecutive months." }
      ],
      challenges: [
        {
          challenge: "Moisture Sensor Electrolytic Corrosion",
          solution: "Switched to high-frequency capacitive sensor traces with conformal silicone potting rather than resistive probes."
        }
      ],
      results: [
        "Uninterrupted 90-day operation solely on 18650 lithium cells charged by 2W solar panels.",
        "Zero packet corruption or network partition events."
      ],
      futureScope: [
        "Integrate LoRaWAN transceivers for extended 10km point-to-point links."
      ],
      githubUrl: "https://github.com/thistushar24"
    }
  },
  {
    slug: "design-system-core",
    name: "Aura Spatial Design System",
    tagline: "High-Fidelity Component Architecture & Token Geometry",
    shortDescription: "Precision design tokens, responsive typography scales, and tactile micro-interaction specifications designed in Figma for complex developer handoffs.",
    category: "Design",
    year: "2024",
    techTags: ["Figma", "Design Tokens", "UI/UX", "Auto-Layout", "Prototyping"],
    coverImage: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    metrics: [
      { label: "Components", value: "85+ Tokens" },
      { label: "Figma Variables", value: "140 Modes" },
      { label: "WCAG Ratio", value: "AAA Contrast" }
    ],
    caseStudy: {
      overview: "A comprehensive design system engineered for engineering dashboards and data-dense web apps. Features strict monochrome contrast, micro-elevation tokens, and multi-tier responsive layouts.",
      theIdea: "Engineers often struggle with ambiguous Figma specs. Aura provides mathematically derived grid dimensions, component variants, and tokenized CSS variables directly.",
      theProblem: "Disconnected styles lead to code bloat and fragmented UI experiences across large teams.",
      myApproach: "Constructed an atomic library from foundations (colors, spacing, type) up to complex data-table states and navigation drawers.",
      systemArchitecture: {
        diagramSummary: "Design Token Library -> Figma Variable Modes -> Auto-Layout Templates -> React Component Library.",
        layers: [
          { name: "Token Foundations", description: "Color modes, semantic shadows, and typography primitives", tech: "Figma Variables" },
          { name: "Atomic Components", description: "Buttons, inputs, status badges, and icon sets", tech: "Figma Components" },
          { name: "Complex Organisms", description: "Data matrices, navigation headers, and modal systems", tech: "Figma Variants" }
        ]
      },
      developmentProcess: [
        { phase: "Phase 01", title: "Accessibility Audit", description: "Ensured WCAG 2.1 AAA contrast across dark mode tokens." },
        { phase: "Phase 02", title: "Component Modularization", description: "Constructed 85+ components with boolean and variant properties." }
      ],
      challenges: [
        {
          challenge: "Dynamic Fluid Typography Scaling",
          solution: "Constructed harmonic mathematical ratios that scale smoothly across mobile and 4K desktop viewports."
        }
      ],
      results: [
        "Cut UI implementation time by 40% across student hackathon projects.",
        "Adopted by collegiate clubs as standard design starter."
      ],
      futureScope: [
        "Automate Figma token sync directly into Tailwind theme config via GitHub Actions."
      ],
      githubUrl: "https://github.com/thistushar24"
    }
  }
];

export const INITIAL_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-i2iaoc",
    organization: "I2IAOC — VIT Pune",
    role: "Public Relations Officer & Design Coordinator",
    duration: "2023 — Present",
    type: "Leadership & Creative Direction",
    location: "Pune, India",
    shortDescription: "Directing institutional public relations, outreach strategies, and end-to-end design identity for flagship technological symposiums.",
    responsibilities: [
      "Head the public relations cell, orchestrating communications across institutional partners, keynote speakers, and a 2,000+ student body.",
      "Spearhead creative design direction for all digital collaterals, website graphics, print banners, and technical brochures.",
      "Direct a multidisciplinary team of 8 design coordinators, ensuring brand consistency across all touchpoints.",
      "Formulate digital campaign rollouts that boosted community engagement by over 140%."
    ],
    achievements: [
      "Successfully coordinated public outreach for VIT Pune's premier innovation summit with 3,500+ attendees.",
      "Designed an overhauled unified visual identity system adopted permanently by the council."
    ],
    skills: ["Public Relations", "Design Direction", "Brand Systems", "Team Leadership", "Strategic Communications", "Figma"],
    photoUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    photoCaption: "I2IAOC VIT Pune: Directing flagship technological innovation summits."
  },
  {
    id: "exp-ideators",
    organization: "The Ideators Club — VIT Pune",
    role: "Secretary",
    duration: "2023 — Present",
    type: "Club Directorship & Governance",
    location: "Pune, India",
    shortDescription: "Steering club operations, ideation hackathons, administrative governance, and student entrepreneurship initiatives.",
    responsibilities: [
      "Manage end-to-end operational governance, documentation, and stakeholder correspondence for the club.",
      "Curate student hackathons, product pitch competitions, and technical workshops focused on early-stage prototype development.",
      "Liaise between college administration, faculty mentors, and student founding teams to secure project grants and lab resources.",
      "Conduct structured brainstorming sessions guiding students from problem discovery to validated MVPs."
    ],
    achievements: [
      "Organized 4 campus-wide innovation sprints yielding 28 functional student prototypes.",
      "Formulated club standard operating procedures that cut administrative turnaround time in half."
    ],
    skills: ["Operational Leadership", "Event Governance", "Hackathon Organization", "Product Ideation", "Mentorship"],
    photoUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    photoCaption: "The Ideators Club VIT Pune: Guiding student entrepreneurship and hackathons."
  },
  {
    id: "exp-faceify",
    organization: "Faceify Labs",
    role: "Design Associate",
    duration: "2023 — 2024",
    type: "UI/UX & Product Design",
    location: "Remote",
    shortDescription: "Architecting interactive user interfaces, web design systems, and visual marketing assets for AI-centric consumer experiences.",
    responsibilities: [
      "Crafted high-fidelity UI prototypes and responsive design systems in Figma for web and mobile platforms.",
      "Collaborated closely with front-end engineers to ensure pixel-perfect CSS execution and micro-interaction polish.",
      "Conducted usability audits and wireframe iterations based on live customer journey analytics.",
      "Established typography and color palettes tailored to convey clean technical sophistication."
    ],
    achievements: [
      "Delivered complete UI redesign for the flagship web dashboard, lowering user onboarding drop-off by 22%.",
      "Created an expansive design token library containing 60+ modular atomic components."
    ],
    skills: ["UI/UX Design", "Figma", "Design Systems", "Prototyping", "User Research", "Front-End Collaboration"],
    photoUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    photoCaption: "Faceify Labs: High-fidelity product design and UI/UX design systems."
  },
  {
    id: "exp-blockseblock",
    organization: "BlockseBlock",
    role: "Internship Trainee",
    duration: "2023",
    type: "Technical Internship",
    location: "Pune, India",
    shortDescription: "Hands-on software development internship exploring decentralized architecture, smart contracts, and web integration pipelines.",
    responsibilities: [
      "Explored smart contract fundamentals, Web3 wallet integration, and decentralized storage systems.",
      "Assisted senior engineers in testing REST API endpoints and front-end state management workflows.",
      "Wrote structured technical documentation and unit test suites for client application modules.",
      "Researched cryptographic consensus mechanisms and security vulnerabilities in decentralized networks."
    ],
    achievements: [
      "Built a functional Web3 token gating prototype used in internal client demonstrations.",
      "Commended by leadership for proactive problem solving and speed of concept absorption."
    ],
    skills: ["Web3 Architecture", "JavaScript", "Smart Contracts", "REST APIs", "Technical Documentation"],
    photoUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    photoCaption: "BlockseBlock: Decentralized software engineering and API testing."
  },
  {
    id: "exp-robotics-forum",
    organization: "The Robotics Forum — VIT Pune",
    role: "Graphic Designer & Research & Development Assistant",
    duration: "2022 — 2023",
    type: "Hardware R&D & Visual Communications",
    location: "Pune, India",
    shortDescription: "Bridging mechanical robotics research with graphic design, CAD prototyping, and technical documentation.",
    responsibilities: [
      "Designed visual branding, CAD renders, and promotional posters for annual national robotics competitions.",
      "Assisted the core R&D division in 3D modeling mechanical linkages in Autodesk Fusion 360 and 3D printing chassis prototypes.",
      "Participated in circuit assembly, micro-controller wiring, and debugging sensor telemetry on omni-wheel competition robots.",
      "Authored technical dossier manuals accompanying robot competition submissions."
    ],
    achievements: [
      "Contributed to the mechanical design and visual presentation of the collegiate Robocon team entry.",
      "Produced award-winning technical poster presentations praised by industry judges."
    ],
    skills: ["Robotics R&D", "Autodesk Fusion 360", "Graphic Design", "3D Prototyping", "Circuit Debugging", "Hardware Telemetry"],
    photoUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    photoCaption: "The Robotics Forum VIT Pune: Hardware prototyping, CAD modeling, and R&D."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "PROGRAMMING & SOFTWARE",
    terminalCode: "LANG_CORE_01",
    skills: [
      { name: "Python", level: "Primary", note: "AI pipelines, PyTorch, OpenCV, backend microservices, scientific computing" },
      { name: "C / C++", level: "Advanced", note: "Embedded systems, low-level kinematics algorithms, memory-critical firmware" },
      { name: "JavaScript / TypeScript", level: "Advanced", note: "Modern web ecosystems, DOM manipulation, asynchronous state architectures" },
      { name: "HTML5 & CSS3", level: "Expert", note: "Semantic layout architecture, responsive design, SVG manipulation, keyframe physics" },
      { name: "SQL", level: "Proficient", note: "Relational schema modeling, query optimization, PostgreSQL, SQLite" }
    ]
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    terminalCode: "NEURAL_NET_02",
    skills: [
      { name: "Machine Learning", level: "Advanced", note: "Supervised & unsupervised algorithms, feature extraction, ensemble modeling" },
      { name: "Deep Learning Fundamentals", level: "Advanced", note: "CNNs, RNNs, Transformers, backpropagation mechanics, loss optimization" },
      { name: "Computer Vision", level: "Advanced", note: "YOLO object detection, OpenCV image pipelines, spatial tracking, edge inference" },
      { name: "Data Mining & Analytics", level: "Proficient", note: "Pandas, NumPy, exploratory data analysis, signal processing, feature pruning" }
    ]
  },
  {
    category: "HARDWARE & ROBOTICS",
    terminalCode: "PHYS_EMBED_03",
    skills: [
      { name: "Arduino Ecosystem", level: "Advanced", note: "Micro-controller firmware, sensor interfacing, actuator control loops" },
      { name: "ESP32 & ESP-IDF", level: "Advanced", note: "Dual-core FreeRTOS, ESP-NOW mesh networking, WiFi/BLE telemetry, power optimization" },
      { name: "Raspberry Pi", level: "Proficient", note: "Linux embedded host, edge vision streaming, headless server administration" },
      { name: "Internet of Things (IoT)", level: "Advanced", note: "MQTT brokers, HTTP REST endpoints, sensor arrays, remote telemetry gateways" },
      { name: "Embedded Systems", level: "Advanced", note: "I2C, SPI, UART serial protocols, PWM servo modulation, power circuit design" },
      { name: "Robotics Kinematics", level: "Proficient", note: "Forward and inverse geometric kinematics, multi-legged locomotion, IMU stabilization" }
    ]
  },
  {
    category: "DESIGN & CREATIVE TOOLS",
    terminalCode: "AESTHETICS_04",
    skills: [
      { name: "Figma", level: "Advanced", note: "Design systems, auto-layout, interactive prototyping, token architectures, developer handoff" },
      { name: "Canva", level: "Expert", note: "Rapid visual communications, presentation decks, event collateral workflows" },
      { name: "UI/UX Design", level: "Advanced", note: "Information architecture, typography scales, whitespace discipline, heuristic evaluation" },
      { name: "Autodesk Fusion 360", level: "Proficient", note: "Parametric 3D modeling, assembly stress analysis, 3D print slicing preparation" }
    ]
  },
  {
    category: "FRAMEWORKS & PLATFORMS",
    terminalCode: "RUNTIME_ENV_05",
    skills: [
      { name: "React", level: "Advanced", note: "Modern hooks, component lifecycles, virtual DOM rendering, state managers" },
      { name: "Vite", level: "Advanced", note: "Lightning-fast bundler configuration, HMR pipelines, modern ESM build optimization" },
      { name: "Tailwind CSS", level: "Expert", note: "Utility-first design tokens, arbitrary properties, minimal CSS footprint" },
      { name: "Flask & FastAPI", level: "Advanced", note: "High-throughput asynchronous Python microservices, Swagger documentation, API gateways" },
      { name: "Git & Version Control", level: "Expert", note: "Branching strategies, commit hygiene, collaborative code reviews, GitHub workflows" }
    ]
  }
];

export const EXPLORATION_TOPICS: ExplorationTopic[] = [
  {
    number: "01",
    title: "PRODUCT THINKING",
    slug: "product-thinking",
    subtitle: "From Technical Capabilities to Indispensable Human Solutions",
    summary: "Engineering answers 'how to build it'; product thinking answers 'why it matters, for whom, and what happens next'.",
    perspectives: [
      "Technology is merely leverage; the value created is directly proportional to the clarity of the underlying human friction being dissolved.",
      "First-principles user empathy: observing unexpressed user behaviors, bottlenecks, and emotional moments of truth.",
      "Continuous validation loops: building rapid low-fidelity sacrificial prototypes rather than months of isolated conjecture.",
      "Product-market fit is a living resonance between an evolving problem space and an adaptive solution architecture."
    ],
    keyInquiry: "How do we distill complex multi-variable engineering into intuitive, almost invisible everyday interfaces?",
    artifacts: ["User Problem Mapping", "Sacrificial Prototypes", "Value-to-Effort Matrix", "Feedback Telemetry"]
  },
  {
    number: "02",
    title: "ENTREPRENEURSHIP",
    slug: "entrepreneurship",
    subtitle: "Rapid Experimentation, Asymmetric Bets & Sustainable Ecosystems",
    summary: "The courage to test hypotheses under deep uncertainty and transform fragile ideas into self-sustaining engines.",
    perspectives: [
      "Startups are temporary learning vehicles searching for a repeatable and scalable business model.",
      "Embracing rapid failure as data: every disproven hypothesis reduces the search space toward viable product truth.",
      "Resourcefulness over raw capital: constraining resources forces elegant, lean architectural choices.",
      "Building unfair advantages through compounding domain depth and relentless curiosity."
    ],
    keyInquiry: "What is the smallest experiment that can definitively validate or invalidate our riskiest assumption today?",
    artifacts: ["Lean Canvas Models", "Unit Economics Projections", "Hypothesis Ledger", "Growth Flywheels"]
  },
  {
    number: "03",
    title: "AI & FUTURE TECHNOLOGY",
    slug: "ai-future-tech",
    subtitle: "Autonomous Agents, Multimodal Intelligence & Synthetic Frontiers",
    summary: "We are transitioning from passive computational tools to proactive cognitive partners that perceive, reason, and co-create.",
    perspectives: [
      "The shift from static machine learning models to dynamic agentic ensembles capable of planning, self-correction, and tool orchestration.",
      "Bridging the physical and digital: embodied intelligence where AI models directly interact with mechanical actuators and sensors.",
      "Human-AI symbiosis: augmenting human cognitive bandwidth rather than mindless replacement.",
      "Ethics as an architectural primitive: transparent reasoning chains, verifiable data lineages, and safety guardrails."
    ],
    keyInquiry: "When computation develops proactive agency, what becomes the true north of human creativity?",
    artifacts: ["Autonomous Agent Loops", "Multimodal Latent Spaces", "Neuro-symbolic Hybrids", "Safety Guardrails"]
  },
  {
    number: "04",
    title: "DESIGN & CREATIVITY",
    slug: "design-creativity",
    subtitle: "Tactile Aesthetics, Visual Storytelling & Emotional Resonance",
    summary: "Design is not decorative wrapping paper; it is the fundamental soul and structural logic of how an object communicates.",
    perspectives: [
      "Visual hierarchy as silent conversation: guiding eye movement and elevating critical signals above ambient noise.",
      "The tension between dark obsidian and golden accents: celebrating focus and high-contrast clarity.",
      "Typography as character: font selection is the vocal timbre of digital communication.",
      "Micro-interactions as delight: small physical feedback loops that make digital matter feel alive."
    ],
    keyInquiry: "Can a digital dossier evoke the sensory gravity and tactile reverence of an archival parchment?",
    artifacts: ["Monochrome Typography Scales", "Kinetic Bézier Physics", "Grid Tension Studies", "Emotional Color Palettes"]
  },
  {
    number: "05",
    title: "MULTIDISCIPLINARY INNOVATION",
    slug: "multidisciplinary-innovation",
    subtitle: "Connecting Engineering, Science, Art & Business like Leonardo",
    summary: "Breakthrough inventions rarely occur within isolated academic silos; they erupt at the turbulent intersections between disparate disciplines.",
    perspectives: [
      "The Da Vinci philosophy: study the science of art and the art of science. Cultivate curiosity across all domains.",
      "Cross-pollinating robotics, computer vision, product strategy, and graphic storytelling.",
      "T-shaped mastery: deep technical competence in core AI & software alongside broad literacy across design and venture creation.",
      "The modern polymath synthesizes distant dots into cohesive, functional realities."
    ],
    keyInquiry: "What happens when you apply organic botanical growth principles to software system navigation?",
    artifacts: ["Polymathic Cross-Maps", "Bio-mimetic Algorithms", "Interdisciplinary Synthesis", "Holistic Prototypes"]
  }
];

// LocalStorage Persistence Helpers for Admin Editing
export const STORAGE_KEYS = {
  PERSONAL_INFO: 'tt_dossier_personal_info',
  PROJECTS: 'tt_dossier_projects',
  EXPERIENCES: 'tt_dossier_experiences',
  MILESTONES: 'tt_dossier_milestones',
};

export function getStoredPersonalInfo() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PERSONAL_INFO);
    return data ? JSON.parse(data) : INITIAL_PERSONAL_INFO;
  } catch (e) {
    return INITIAL_PERSONAL_INFO;
  }
}

export function getStoredProjects(): Project[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return data ? JSON.parse(data) : INITIAL_PROJECTS_DATA;
  } catch (e) {
    return INITIAL_PROJECTS_DATA;
  }
}

export function getStoredExperiences(): ExperienceItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EXPERIENCES);
    return data ? JSON.parse(data) : INITIAL_EXPERIENCE_DATA;
  } catch (e) {
    return INITIAL_EXPERIENCE_DATA;
  }
}

export function getStoredMilestones(): MilestoneLevel[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.MILESTONES);
    return data ? JSON.parse(data) : INITIAL_MILESTONE_LEVELS;
  } catch (e) {
    return INITIAL_MILESTONE_LEVELS;
  }
}

// Global active data objects (fallbacks to stored or initial)
export const PERSONAL_INFO = getStoredPersonalInfo();
export const PROJECTS_DATA = getStoredProjects();
export const EXPERIENCE_DATA = getStoredExperiences();
export const MILESTONE_LEVELS = getStoredMilestones();
