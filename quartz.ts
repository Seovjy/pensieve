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

// Workaround: the generated .quartz/plugins/index.ts wraps Explorer as a plain
// passthrough re-export instead of an override-registering wrapper, because
// regeneratePluginIndex() only scans the plugin's top-level dist/index.d.ts and
// misses the `declare const _default: ... => QuartzComponent` signature that
// actually lives in dist/components/index.d.ts for this plugin's tsup output.
// Calling ExternalPlugin.Explorer(...) therefore builds and discards a component
// instance without ever registering the override. Register it directly instead.
componentRegistry.setOptionOverrides("explorer", { filterFn })

registerCondition("index-only", (props) => props.fileData.slug === "index")

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout({})