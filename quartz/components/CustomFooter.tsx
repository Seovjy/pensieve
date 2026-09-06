import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, SimpleSlug } from "../util/path"

const CustomFooter: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const year = new Date().getFullYear()
  const aboutMeHref = resolveRelative(fileData.slug!, "about-me" as SimpleSlug)
  return (
    <footer>
      <p>
        <a href={aboutMeHref}>About me</a> |{" "}<a href="#">Back to Top</a>
      </p>
    </footer>
  )
}

CustomFooter.css = `
footer {
  text-align: center;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

`

export default (() => CustomFooter) satisfies QuartzComponentConstructor