import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import CustomFooter from "./quartz/components/CustomFooter"
import Flex from "./quartz/components/Flex"
import NavLink from "./quartz/components/NavLink"
import { RecentNotes } from "./.quartz/plugins"
import type { RecentNotesOptions } from "./.quartz/plugins"
import { PageTitle } from "@quartz-community/page-title"
import { Search } from "@quartz-community/search"
import { Darkmode } from "@quartz-community/darkmode"
import type { SimpleSlug } from "./quartz/util/path"

registerCondition("index-only", (props) => props.fileData.slug === "index")
registerCondition("about-me-only", (props) => props.fileData.slug === "about-me")

// "Recent Pours" (pours/) and "Recent Notes" (threads/) built
const recentPoursFilter: RecentNotesOptions["filter"] = (f) =>
  f.slug !== undefined && f.slug.startsWith("pours/") && f.slug !== "pours/index"
const recentNotesFilter: RecentNotesOptions["filter"] = (f) =>
  f.slug !== undefined && f.slug.startsWith("threads/") && f.slug !== "threads/index"

const recentPours = RecentNotes({
  title: "Recent Pours",
  limit: 2,
  filter: recentPoursFilter,
  linkToMore: "pours/",
  showTags: false,
  hideFolderPages: true,
  hideTagPages: true,
})
const recentNotes = RecentNotes({
  title: "Recent Threads",
  limit: 2,
  filter: recentNotesFilter,
  linkToMore: "threads/",
  showTags: false,
  hideFolderPages: true,
  hideTagPages: true,
})

// Side by side when there's room, wrapping to stacked otherwise
const afterBodyRow = Flex({
  direction: "row",
  wrap: "wrap",
  gap: "2rem",
  components: [
    { Component: recentPours, grow: true, align: "start" },
    { Component: recentNotes, grow: true, align: "start" },
  ],
})

const footerComponent = CustomFooter()

// Header toolbar built
const aboutLink = NavLink({ text: "About", slug: "about-me" as SimpleSlug })
const toolbar = Flex({
  direction: "row",
  gap: "1rem",
  components: [
    { Component: PageTitle(), grow: true, align: "center", justify: "start" },
    { Component: aboutLink, align: "center" },
    { Component: Search(), align: "center" },
    { Component: Darkmode(), align: "center" },
  ],
})

const config = await loadQuartzConfig(undefined, (layout) => {
  layout.defaults.header = [...(layout.defaults.header ?? []), toolbar]
  layout.defaults.afterBody = [...(layout.defaults.afterBody ?? []), afterBodyRow]
  layout.defaults.footer = [...(layout.defaults.footer ?? []), footerComponent]
  // patch every byPageType entry, or
  // components only show up on page types absent from that section.
  for (const pageType of Object.keys(layout.byPageType)) {
    const override = layout.byPageType[pageType]
    layout.byPageType[pageType] = {
      ...override,
      header: [...(override.header ?? []), toolbar],
      afterBody: [...(override.afterBody ?? []), afterBodyRow],
      footer: [...(override.footer ?? []), footerComponent],
    }
  }
  return layout
})
export default config
// Real layout composition happens via the
// layoutTransform passed to loadQuartzConfig above.
export const layout = await loadQuartzLayout({})
