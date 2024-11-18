import { c as createComponent, a as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DEyhSonJ.mjs';
import { $ as $$Icon, a as $$Layout } from '../chunks/Layout_-8zSCUtz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/hello-world.md": () => import('../chunks/hello-world_CZzzTmz2.mjs').then(n => n._)}), () => "./posts/*.md");
  console.log(allPosts.forEach((post) => console.log(post.url, post.frontmatter.title)));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Freitasdev", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="animation-show" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>Meu Blog</h2> <p data-astro-cid-5tznm7mj>Minhas postagens relacionadas a software, tecnologia, computação...</p> ${allPosts.map((post) => {
    return renderTemplate`<a${addAttribute(post.url, "href")} data-astro-cid-5tznm7mj> <div class="post" data-astro-cid-5tznm7mj> <div class="post-text" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>${post.frontmatter.title}</h2> <span data-astro-cid-5tznm7mj>${post.frontmatter.description}</span> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "carbon:launch", "color": "#fff", "data-astro-cid-5tznm7mj": true })} </div> </a>`;
  })} </main> ` })} `;
}, "/home/freitas/www/portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/home/freitas/www/portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
