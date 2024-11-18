import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_DEyhSonJ.mjs';
import { $ as $$Icon, a as $$Layout } from '../chunks/Layout_-8zSCUtz.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form data-astro-cid-iybth2ls> <h2 data-astro-cid-iybth2ls>Entre em contato comigo</h2> <p data-astro-cid-iybth2ls>Gostou do meu portfolio? Entre em contato</p> <div id="name-and-email" data-astro-cid-iybth2ls> <div data-astro-cid-iybth2ls> <label id="name" data-astro-cid-iybth2ls>Nome</label> <input type="text" placeholder="Seu nome" data-astro-cid-iybth2ls> </div> <div data-astro-cid-iybth2ls> <label id="name" data-astro-cid-iybth2ls>E-mail</label> <input type="text" placeholder="Seu nome" data-astro-cid-iybth2ls> </div> </div> <div data-astro-cid-iybth2ls> <label id="message" data-astro-cid-iybth2ls>Assunto</label> <input placeholder="Qual o assunto?" data-astro-cid-iybth2ls> </div> <div data-astro-cid-iybth2ls> <label id="message" data-astro-cid-iybth2ls>Mensagem</label> <textarea placeholder="Escreva sua mensagem" data-astro-cid-iybth2ls></textarea> </div> <button data-astro-cid-iybth2ls>${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:send-alt", "size": 16, "data-astro-cid-iybth2ls": true })} Enviar mensagem</button> </form> `;
}, "/home/freitas/www/portfolio/src/components/FormContact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contato - Freitasdev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="animation-show"> ${renderComponent($$result2, "FormContact", $$FormContact, {})} </main> ` })}`;
}, "/home/freitas/www/portfolio/src/pages/contact.astro", void 0);

const $$file = "/home/freitas/www/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
