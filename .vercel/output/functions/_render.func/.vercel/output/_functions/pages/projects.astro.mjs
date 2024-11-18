import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_DEyhSonJ.mjs';
/* empty css                                    */
import { a as $$Layout } from '../chunks/Layout_-8zSCUtz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project;
  const { title, description, imageUrl, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project" data-astro-cid-tkm2rszc> <img${addAttribute(imageUrl, "src")} data-astro-cid-tkm2rszc> <div data-astro-cid-tkm2rszc> <h2 data-astro-cid-tkm2rszc>${title}</h2> <p data-astro-cid-tkm2rszc>${description}</p> </div> </div> `;
}, "/home/freitas/www/portfolio/src/components/Project.astro", void 0);

const $$ProjectsComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-pfljqy66> <h2 data-astro-cid-pfljqy66>Projetos</h2> <p data-astro-cid-pfljqy66>Meu projetos feito entre 2023 até 2025.</p> <div data-astro-cid-pfljqy66> ${renderComponent($$result, "Project", $$Project, { "title": "Bookmark", "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quo!", "imageUrl": "https://blog-rocketseat.rocketseat.com.br/blog/opengraph-image.jpeg?9d56c70a74d05ec4", "url": "", "data-astro-cid-pfljqy66": true })} ${renderComponent($$result, "Project", $$Project, { "title": "LoveQR", "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quo!", "imageUrl": "https://blog-rocketseat.rocketseat.com.br/blog/opengraph-image.jpeg?9d56c70a74d05ec4", "url": "", "data-astro-cid-pfljqy66": true })} ${renderComponent($$result, "Project", $$Project, { "title": "EstudAI", "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quo!", "imageUrl": "https://blog-rocketseat.rocketseat.com.br/blog/opengraph-image.jpeg?9d56c70a74d05ec4", "url": "", "data-astro-cid-pfljqy66": true })} ${renderComponent($$result, "Project", $$Project, { "title": "<TechConnect/>", "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quo!", "imageUrl": "https://blog-rocketseat.rocketseat.com.br/blog/opengraph-image.jpeg?9d56c70a74d05ec4", "url": "", "data-astro-cid-pfljqy66": true })} </div> </section> `;
}, "/home/freitas/www/portfolio/src/components/ProjectsComponent.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projetos - Freitasdev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="animation-show"> ${renderComponent($$result2, "ProjectsComponent", $$ProjectsComponent, {})} </main> ` })}`;
}, "/home/freitas/www/portfolio/src/pages/projects.astro", void 0);

const $$file = "/home/freitas/www/portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
