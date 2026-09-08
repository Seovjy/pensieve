import { QuartzComponent, QuartzComponentConstructor } from "./types"

const YEAR = 2026

const CustomFooter: QuartzComponent = () => {
  return (
    <footer>
      <p>
        {" "} © {YEAR} Jadyn Hsu | <a href="#">Back to Top</a>
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