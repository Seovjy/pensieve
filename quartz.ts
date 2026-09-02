import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import { componentRegistry } from "./quartz/components/registry"
import type { ExplorerOptions } from "./.quartz/plugins"

const filterFn: ExplorerOptions["filterFn"] = (node) => {
  const tags = node.data?.tags
  if (Array.isArray(tags)) {
    return !tags.includes("notes")
  }
  return true
}

// Pin "about-me" above everything else (folders included), otherwise keep the
// plugin's default ordering: folders before files, then alphabetical.
const sortFn: ExplorerOptions["sortFn"] = (a, b) => {
  const aPinned = a.slugSegment === "about-me"
  const bPinned = b.slugSegment === "about-me"
  if (aPinned && !bPinned) return -1
  if (!aPinned && bPinned) return 1

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
    node.displayName = "🧙🏻 About me"
  }
  if (node.isFolder && node.slugSegment === "tags") {
    node.displayName = "Tag Themes"
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

registerCondition("index-only", (props) => props.fileData.slug === "index")

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout({})