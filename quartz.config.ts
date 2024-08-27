import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "DND Campaigns",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://kramaricivan.github.io/TTRPGTrackerv4/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Bungee",
        body: "Poppins",
        code: "Space Mono",
      },
      colors: {
        lightMode: {
          light: "#E0E0E0",
          lightgray: "#c2c2c2",        // Darker gray for secondary elements
          gray: "#4C4C4C",             // Medium dark gray
          darkgray: "#1F1F1F",         // Slightly lighter gray for borders or inactive elements
          dark: "#388f35",            // Deep, bluish purple for primary elements
          secondary: "#5e4596",       // Vivid blue-purple for interactive elements
          tertiary: "#388f35",        // Lighter blue-purple for accents
          highlight: "rgba(224, 224, 224, 0.15)",
          textHighlight: "#388f35"
        },
        darkMode: {
          light: "#0F0F0F",        // Very dark gray, almost black
          lightgray: "#1F1F1F",        // Darker gray for secondary elements
          gray: "#4C4C4C",             // Medium dark gray
          darkgray: "#E0E0E0",         // Slightly lighter gray for borders or inactive elements
          dark: "#388f35",            // Deep, bluish purple for primary elements
          secondary: "#5e4596",       // Vivid blue-purple for interactive elements
          tertiary: "#388f35",        // Lighter blue-purple for accents
          highlight: "rgba(75, 33, 103, 0.15)", // Transparent blue-purple for highlights
          textHighlight: "#388f35"  // Transparent light blue-purple for text highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
