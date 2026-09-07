import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CustomFooter: QuartzComponent = () => {
  return (
    <footer>
      <p>
        {" "} <a href="#">Back to Top</a>
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