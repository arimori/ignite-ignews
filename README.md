# ignite-ignews
Study blog application built with Next (SSG and SSR)

<p style="text-align: center">
<a href="https://www.linkedin.com/in/naoshi/">
<img alt="Developed by" src="https://img.shields.io/badge/Developed%20by-Naoshi%20Arimori-blue">
</a>
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/arimori/ignite-ignews">
<img alt="GitHub language top" src="https://img.shields.io/github/languages/top/arimori/ignite-ignews">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/arimori/ignite-ignews?style=social">
<img alt="GitHub last commits" src="https://img.shields.io/github/last-commit/arimori/ignite-ignews">
</p>


### 📑 Ignite | ignews

---
The ignews blog is a monthly subscription service that gives you access to some posts about web development using ReactJS framework.
As part of a study application from Ignite bootcamp developed by [Rocketseat](https://rocketseat.com.br/), this blog has been built in order to learn, implement and practice some `NextJS` features such as **SSR**, **SSG** and integration with third part services.
In this project, we've integrated with GitHub Ouath so that create an authentication.
Also, this blog has integration with **FaunaDB** (Serverless NoSQL DB), **Stripe** (Payment API) and **Prismic CMS** (headless CMS to manage the posts content).
Besides those integration, it was the first time I've worked with webhooks in order to check if the current session has a authenticated user with an active subscription.

The [UI](https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news?node-id=1%3A2) was built by Rocketseat Team.

### :checkered_flag: Instructions
---

**Project Download**

> git clone https://github.com/arimori/ignite-ignews.git

**Install dependencies**

> yarn

**Start the application**

> yarn dev

**Start the webhook**
> stripe listen --forward-to localhost:3000/api/webhooks


:heart: Developed by [Naoshi Arimori!](https://www.linkedin.com/in/naoshi/)

