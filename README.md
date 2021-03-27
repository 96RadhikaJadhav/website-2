# 3reetop Website
A re-code of my website, done completely from scratch using some help from `create-react-app`.

## Is it available live?
Yep! Just visit [this link](https://3reetop.eu.org)

## What technologies does it use?
- React
- Font Awesome Free
- [Cloudflare Workers](https://developers.cloudflare.com/workers/platform/sites)
- Cloudflare

## How does it work?
This is a simple React website. It is deployed automatically on any push to the `main` branch via Cloudflare Workers site.

Cloudflare Workers deploys the website and serves it on a `.pages.dev` subdomain, and then I wrote a Cloudflare Workers script
that triggers anytime someone visits `3reetop.eu.org`.

This Workers script essentially proxies the request, and makes a GET request to the `.pages.dev` subdomain, gets the HTML content,
and returns it raw along with the raw response HTTP code and headers.

Why did I make it this complicated? Because Cloudflare doesn't think that `.eu.org` is a valid TLD. Oh well.
