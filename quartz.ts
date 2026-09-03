import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import { componentRegistry } from "./quartz/components/registry"
import CustomFooter from "./quartz/components/CustomFooter"
import type { ExplorerOptions, RecentNotesOptions } from "./.quartz/plugins"

// posts/ and notes/ keep growing, so Explorer only shows the folders
// themselves (still clickable -> their folder-page lists everything) and
// hides every file inside them.
const filterFn: ExplorerOptions["filterFn"] = (node) => {
  const segments = node.slugSegments ?? []
  const topSegment = segments[0]
  if ((topSegment === "posts" || topSegment === "notes") && segments.length > 1) {
    return false
  }
  return true
}

// Pin "about-me" above everything else, then "posts" before "notes" among
// folders, otherwise keep the plugin's default ordering: folders before
// files, then alphabetical.
const sortFn: ExplorerOptions["sortFn"] = (a, b) => {
  const aPinned = a.slugSegment === "about-me"
  const bPinned = b.slugSegment === "about-me"
  if (aPinned && !bPinned) return -1
  if (!aPinned && bPinned) return 1

  const folderOrder: Record<string, number> = { posts: 0, notes: 1 }
  const aOrder = folderOrder[a.slugSegment ?? ""]
  const bOrder = folderOrder[b.slugSegment ?? ""]
  if (aOrder !== undefined && bOrder !== undefined) return aOrder - bOrder
  if (aOrder !== undefined) return -1
  if (bOrder !== undefined) return 1

  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return (a.displayName || "").localeCompare(b.displayName || "", undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  return !a.isFolder && b.isFolder ? 1 : -1
}

const mapFn: ExplorerOptions["mapFn"] = (node) => {
  if (node.slugSegment === "about-me") {
    node.displayName = "About me"
  }
  if (node.isFolder && node.slugSegment === "tags") {
    node.displayName = "tag themes"
  }
  return node
}

// Workaround: the generated .quartz/plugins/index.ts wraps Explorer as a plain
// passthrough re-export instead of an override-registering wrapper, because
// regeneratePluginIndex() only scans the plugin's top-level dist/index.d.ts and
// misses the `declare const _default: ... => QuartzComponent` signature that
// actually lives in dist/components/index.d.ts for this plugin's tsup output.
// Calling ExternalPlugin.Explorer(...) therefore builds and discards a component
// instance without ever registering the override. Register it directly instead.
componentRegistry.setOptionOverrides("explorer", { filterFn, sortFn, mapFn })

// restrict to posts/ specifically so "Recent Pours"
const recentPoursFilter: RecentNotesOptions["filter"] = (f) =>
  f.slug !== undefined && f.slug.startsWith("posts/") && f.slug !== "posts/index"

componentRegistry.setOptionOverrides("@quartz-community/recent-notes", {
  filter: recentPoursFilter,
})

registerCondition("index-only", (props) => props.fileData.slug === "index")

// independently-built footer array, so patch each one plus defaults to show this on
// every page.
const footerComponent = CustomFooter()
const config = await loadQuartzConfig(undefined, (layout) => {
  layout.defaults.footer = [...(layout.defaults.footer ?? []), footerComponent]
  for (const pageType of Object.keys(layout.byPageType)) {
    const override = layout.byPageType[pageType]
    layout.byPageType[pageType] = {
      ...override,
      footer: [...(override.footer ?? []), footerComponent],
    }
  }
  return layout
})
export default config
export const layout = await loadQuartzLayout({})