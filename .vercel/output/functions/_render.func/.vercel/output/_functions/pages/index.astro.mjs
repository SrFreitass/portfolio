import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute } from '../chunks/astro/server_DEyhSonJ.mjs';
import { $ as $$Icon, a as $$Layout } from '../chunks/Layout_-8zSCUtz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$CarrerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CarrerCard;
  const { title, institution, period, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carrer-card" data-astro-cid-sz4gsfx4> <div class="title" data-astro-cid-sz4gsfx4> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-sz4gsfx4": true })} <span data-astro-cid-sz4gsfx4>${title}</span> </div> <p data-astro-cid-sz4gsfx4>${institution}</p> <p data-astro-cid-sz4gsfx4>${period}</p> </div> `;
}, "/home/freitas/www/portfolio/src/components/CarrerCard.astro", void 0);

const $$Carrer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-7oamxf7a> <p data-astro-cid-7oamxf7a>CARREIRA</p> <div data-astro-cid-7oamxf7a> ${renderComponent($$result, "CarrerCard", $$CarrerCard, { "title": "Desenvolvimento de sistemas", "icon": "carbon:education", "period": "Mar. 2024 - Dez. 2025", "institution": "SENAC HUB ACADEMY", "data-astro-cid-7oamxf7a": true })} </div> </section> `;
}, "/home/freitas/www/portfolio/src/components/Carrer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Info = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info;
  const { title, description, url, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="info-card" data-astro-cid-vxl4wgev> <div data-astro-cid-vxl4wgev> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "color": "#fff", "size": 22, "data-astro-cid-vxl4wgev": true })} <span data-astro-cid-vxl4wgev>${title}</span> </div> <p data-astro-cid-vxl4wgev><a${addAttribute(url, "href")} target="_blank" data-astro-cid-vxl4wgev>${description}</a></p> </div> `;
}, "/home/freitas/www/portfolio/src/components/Info.astro", void 0);

const $$Presentation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-babyewbp> <img src="https://media.discordapp.net/attachments/1259655073932378195/1269884045421187102/IMG_4707.jpg?ex=673b73ed&is=673a226d&hm=02e14bd9bb4802dbd14ce5ddcc20ebe39ca2096d2aeeb1c78e4f3debd55d6622&=&format=webp&width=498&height=664" data-astro-cid-babyewbp> <div data-astro-cid-babyewbp> <p data-astro-cid-babyewbp>INTRODUÇÃO</p> <h2 data-astro-cid-babyewbp>Freitas, desenvolvedor full-stack</h2> <p id="description" data-astro-cid-babyewbp>Comecei a desenvolver no início de 2023. Sou um entusiasta da tecnologia e um desenvolvedor full-stack, dedicado a construir soluções e projetos de alto nível. Desde o início da minha jornada no desenvolvimento, tenho buscado aprimorar constantemente minhas habilidades e enfrentar novos desafios. </p> <div class="cards" data-astro-cid-babyewbp> ${renderComponent($$result, "Info", $$Info, { "title": "Cidade", "description": "Campo Grande, MS", "icon": "carbon:location", "url": "#", "data-astro-cid-babyewbp": true })} ${renderComponent($$result, "Info", $$Info, { "title": "OS", "description": "Archlinux", "icon": "carbon:screen", "url": "#", "data-astro-cid-babyewbp": true })} ${renderComponent($$result, "Info", $$Info, { "title": "Github", "description": "/srfreitass", "icon": "carbon:logo-github", "url": "https://github.com/srfreitass", "data-astro-cid-babyewbp": true })} ${renderComponent($$result, "Info", $$Info, { "title": "Linkedin", "description": "Guilherme F.", "icon": "carbon:logo-linkedin", "url": "https://github.com/srfreitass", "data-astro-cid-babyewbp": true })} </div> </div> </section> `;
}, "/home/freitas/www/portfolio/src/components/Presentation.astro", void 0);

const $$Astro = createAstro();
const $$Stack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stack;
  const { stack, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="stack" data-astro-cid-rlzglfcb> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": 22, "data-astro-cid-rlzglfcb": true })} <span data-astro-cid-rlzglfcb>${stack}</span> </div> `;
}, "/home/freitas/www/portfolio/src/components/Stack.astro", void 0);

const $$Stacks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-k4ozdy2a> <h2 data-astro-cid-k4ozdy2a>Stacks</h2> <p data-astro-cid-k4ozdy2a>Minhas stacks de desenvolvimento.</p> <div class="stacks" data-astro-cid-k4ozdy2a> ${renderComponent($$result, "Stack", $$Stack, { "stack": "Typescript", "icon": "mdi:language-typescript", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "Javascript", "icon": "mdi:language-javascript", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "React.js", "icon": "mdi:react", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "Next.js", "icon": "mdi:react", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "Firebase", "icon": "mdi:firebase", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "Node.js", "icon": "mdi:nodejs", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "PostgreSQL", "icon": "carbon:database-postgresql", "data-astro-cid-k4ozdy2a": true })} </div> <h2 data-astro-cid-k4ozdy2a>Estudando</h2> <p data-astro-cid-k4ozdy2a>Atualmente estudando essas tecnologias.</p> <div class="stacks" data-astro-cid-k4ozdy2a> ${renderComponent($$result, "Stack", $$Stack, { "stack": "PHP", "icon": "mdi:language-php", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "MySQL", "icon": "carbon:mysql", "data-astro-cid-k4ozdy2a": true })} ${renderComponent($$result, "Stack", $$Stack, { "stack": "Docker", "icon": "mdi:docker", "data-astro-cid-k4ozdy2a": true })} </div> </section> `;
}, "/home/freitas/www/portfolio/src/components/Stacks.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Freitasdev - Portfolio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="animation-show" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Presentation", $$Presentation, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Stacks", $$Stacks, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Carrer", $$Carrer, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/home/freitas/www/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/freitas/www/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
