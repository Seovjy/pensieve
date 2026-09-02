import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CustomFooter: QuartzComponent = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>
        {year} Jadyn Hsu | <a href="mailto:hsu024@gmail.com">Contact</a> | <a href="#">Back to Top</a>
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
