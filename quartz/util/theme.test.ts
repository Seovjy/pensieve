import test, { describe } from "node:test"
import assert from "node:assert/strict"
import { googleFontHref, googleFontSubsetHref } from "./theme"

function makeTheme() {
  return {
    typography: {
      title: "Merriweather",
      header: "Merriweather",
      body: "Plus Jakarta Sans",
      code: "IBM Plex Mono",
    },
    cdnCaching: true,
    fontOrigin: "googleFonts" as const,
    colors: {
      lightMode: {
        light: "#ffffff",
        lightgray: "#f0f0f0",
        gray: "#cccccc",
        darkgray: "#333333",
        dark: "#111111",
        secondary: "#123456",
        tertiary: "#654321",
        highlight: "rgba(0, 0, 0, 0.1)",
        textHighlight: "#ffff00",
      },
      darkMode: {
        light: "#000000",
        lightgray: "#222222",
        gray: "#444444",
        darkgray: "#eeeeee",
        dark: "#ffffff",
        secondary: "#abcdef",
        tertiary: "#fedcba",
        highlight: "rgba(255, 255, 255, 0.1)",
        textHighlight: "#00ffff",
      },
    },
  }
}

describe("theme font URL generation", () => {
  test("encodes Google Fonts family names with spaces", () => {
    const theme = makeTheme()
    const href = googleFontHref(theme)

    assert.match(href, /family=Merriweather%3Awght%40400%3B700/)
    assert.match(href, /family=Plus\+Jakarta\+Sans%3A/)
    assert.match(href, /family=IBM\+Plex\+Mono%3A/)
  })

  test("encodes subset URLs for page titles", () => {
    const theme = makeTheme()
    const href = googleFontSubsetHref(theme, "My Page")

    assert.match(href, /family=Merriweather/)
    assert.match(href, /text=My%20Page/)
  })
})
