# Color Converter using Hono and Cloudfare Workers

This is a simple color converter that converts a color from one format to another. It is built using Hono and Cloudfare Workers.

## To create a new project

```bash
npm create cloudflare\@2.5.0 -- .
```

## To run locally

```bash
wrangler dev -l
```

## To deploy

```bash
wrangler login
```

```bash
wrangler deploy .\src\index.ts
```
