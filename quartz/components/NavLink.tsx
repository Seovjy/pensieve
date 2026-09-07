import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"
import { classNames } from "../util/lang"

type Options = {
  text: string
  slug: SimpleSlug
}

export default ((opts: Options) => {
  const NavLink: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const href = resolveRelative(fileData.slug!, opts.slug)
    return (
      <a href={href} class={classNames(displayClass, "nav-link")}>
        {opts.text}
      </a>
    )
  }

  NavLink.css = `
.nav-link {
  color: var(--gray);
  font-family: var(--bodyFont);
  white-space: nowrap;
  text-decoration: none;
}
.nav-link:hover {
  color: var(--tertiary);
}
`

  return NavLink
}) satisfies QuartzComponentConstructor<Options>
