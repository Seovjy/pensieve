import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"

const YEAR = 2026

const CustomFooter: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const contactHref = resolveRelative(fileData.slug!, "contact" as SimpleSlug)
  return (
    <footer>
      <p>
        {" "} © {YEAR} Jadyn Hsu - <a href={contactHref}>Contact</a> |{" "}
        <a href="#">Back to Top</a>
      </p>
    </footer>
  )
}

CustomFooter.css = `
footer {
  text-align: left;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

`

export default (() => CustomFooter) satisfies QuartzComponentConstructor