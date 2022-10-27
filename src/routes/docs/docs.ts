import Compare from "./pages/Compare.svelte"
import Drawer from "./pages/Drawer.svelte"
import Features from "./pages/Features.svelte"
import FirstShow from "./pages/FirstShow.svelte"
import Importing from "./pages/Importing.svelte"
import Installation from "./pages/Installation.svelte"
import Intro from "./pages/Intro.svelte"
import Output from "./pages/Output.svelte"
import Projects from "./pages/Projects.svelte"
import Roadmap from "./pages/Roadmap.svelte"
import Scripture from "./pages/Scripture.svelte"
import Styling from "./pages/Styling.svelte"

export const docs: any = {
  compare: {
    title: "FreeShow vs ProPresenter vs EasyWorship",
    category: "Main",
    comp: Compare,
  },
  features: {
    title: "Features",
    category: "Main",
    comp: Features,
  },
  introduction: {
    title: "Introduction",
    category: "Main",
    comp: Intro,
  },
  installation: {
    title: "Installation",
    category: "Manual",
    comp: Installation,
  },
  show: {
    title: "Your first show",
    category: "Manual",
    comp: FirstShow,
  },
  projects: {
    title: "Projects",
    category: "Manual",
    comp: Projects,
  },
  output: {
    title: "Output",
    category: "Manual",
    comp: Output,
  },
  drawer: {
    title: "The drawer",
    category: "Manual",
    comp: Drawer,
  },
  scripture: {
    title: "Scripture",
    category: "Manual",
    comp: Scripture,
  },
  importing: {
    title: "Importing",
    category: "Manual",
    comp: Importing,
  },
  roadmap: {
    title: "Roadmap",
    category: "Main",
    comp: Roadmap,
  },
  // tips: {
  //   title: "Tips & Tricks",
  //   category: "General",
  //   comp: Tips,
  // },
  styling: {
    title: "How to show lyrics in church",
    category: "General",
    comp: Styling,
  },
}
