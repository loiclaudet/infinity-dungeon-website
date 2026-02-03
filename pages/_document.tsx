import Document, { Head, Html, Main, NextScript } from "next/document";
import Favicon from "react-favicon";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Infinity Dungeon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Galindo&display=swap"
            rel="stylesheet"
          />
          <meta property="og:title" content="Infinity Dungeon" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="In this dynamic turn-based dungeon crawler, play as your favorite hero and discover the deepest and most unexplored caves."
          />
          <meta property="og:image" content="/logo-website.webp" />
          <meta property="og:url" content="https://infinitydungeon.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Favicon
          url={[
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEYxREE1RkE0ODdCMTFFQUExNEJFRkI4NTQ1QzFCRTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEYxREE1Rjk0ODdCMTFFQUExNEJFRkI4NTQ1QzFCRTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOTU4NkE3OURBRUYxMUU5QjdFQ0NEM0UwN0ExRkI5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOTU4NkE3QURBRUYxMUU5QjdFQ0NEM0UwN0ExRkI5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PonZzigAAACzSURBVHjaYvz//z+DsrLyfwYSwN27dxlhbBYYw5bbhCjNh7+eQeEzMVAIWLAJOvz5gdsFxBgAAt2MbzDESv+LYIhR7AWcBlw+uxmMkfkkGUBRIIKArrEvBr+UgcgwOMDCgRFgID5IHKcB6AkE2RBcmkGAEZSUGRkZGZSUlP5jS42gNAHTDLLk3r17YD3UjUaQ7bhSJC6nY8RCLbsOAwOWJIycrA/jCgMSszMjMDvDOQABBgATe0XGuNv9nwAAAABJRU5ErkJggg==",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEYxREE1RkU0ODdCMTFFQUExNEJFRkI4NTQ1QzFCRTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEYxREE1RkQ0ODdCMTFFQUExNEJFRkI4NTQ1QzFCRTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOTU4NkE3OURBRUYxMUU5QjdFQ0NEM0UwN0ExRkI5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOTU4NkE3QURBRUYxMUU5QjdFQ0NEM0UwN0ExRkI5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhvYqwEAAAClSURBVHjaYvz//z8DJYARZAAjIyODkpISSSbdvXuXEUSzIAvacpsQpfnw1zNwNhMDhYAFl4TDnx+4XUCMASDQzfgGQ6z0vwgKn2Iv4DXg8tnNYIzMJ8kAigIRBHSNfTH4pQxEhsEBFg6MAAPxQeJEewHZEGya4UlZWVn5P76UCEoTMM2gVHjv3j1GWB5iIpSMkTXjDUR8KQ9Z7jA+LxALkL0AEGAANz5H5Z0D1owAAAAASUVORK5CYII=",
          ]}
          animated={true}
          animationDelay={350}
        />
      </Html>
    );
  }
}

export default MyDocument;
