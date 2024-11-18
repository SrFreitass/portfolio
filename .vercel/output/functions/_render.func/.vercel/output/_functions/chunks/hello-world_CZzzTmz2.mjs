import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as renderSlot, u as unescapeHTML } from './astro/server_DEyhSonJ.mjs';
import { $ as $$Icon, a as $$Layout } from './Layout_-8zSCUtz.mjs';
/* empty css                               */

const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Freitasdev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <p id="back" onclick="navigation.navigate('/blog')">${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-left" })} Voltar</p> ${renderSlot($$result2, $$slots["default"])} </main> ` })} `;
}, "/home/freitas/www/portfolio/src/layouts/MarkdownLayout.astro", void 0);

const html = "<h1 id=\"minha-primeira-postagem-no-blog\">Minha Primeira Postagem no Blog</h1>\n<p>Publicado em: 17-11-2024</p>\n<p>Bem-vindo ao meu <em>novo blog</em> sobre aprendendo Astro! Aqui, eu irei compartilhar minha jornada de aprendizado enquanto eu construo um novo website.</p>\n<h2 id=\"o-que-eu-realizei\">O que eu realizei</h2>\n<ol>\n<li>\n<p><strong>Instalando Astro</strong>: Primeiro, eu criei um novo projeto Astro e configurei minhas contas online.</p>\n</li>\n<li>\n<p><strong>Fazendo Páginas</strong>: E então eu aprendi como fazer páginas criando novos arquivos <code>.astro</code> e os colocando na pasta <code>src/pages/</code>.</p>\n</li>\n<li>\n<p><strong>Fazendo Postagens no Blog</strong>: Esta é minha primeira postagem no blog! Eu agora tenho páginas Astro e postagens em Markdown!</p>\n</li>\n</ol>\n<h2 id=\"o-que-vem-a-seguir\">O que vem a seguir</h2>\n<p>Eu irei completar o tutorial do Astro, e então continuarei adicionando mais postagens. Olhe por aqui para o que vem a frente.</p>";

				const frontmatter = {"layout":"../../../layouts/MarkdownLayout.astro","title":"Minha Primeira Postagem no Blog","pubDate":"17-11-2024","description":"Esta é a primeira postagem do meu novo blog Astro.","author":"Aluno de Astro","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"Logo Astro em fundo escuro com brilho rosa."},"tags":["astro","blogueirando","aprendendo em público"]};
				const file = "/home/freitas/www/portfolio/src/pages/blog/posts/hello-world.md";
				const url = "/blog/posts/hello-world";
				function rawContent() {
					return "# Minha Primeira Postagem no Blog\n\nPublicado em: 17-11-2024\n\nBem-vindo ao meu _novo blog_ sobre aprendendo Astro! Aqui, eu irei compartilhar minha jornada de aprendizado enquanto eu construo um novo website.\n\n## O que eu realizei\n\n1. **Instalando Astro**: Primeiro, eu criei um novo projeto Astro e configurei minhas contas online.\n\n2. **Fazendo Páginas**: E então eu aprendi como fazer páginas criando novos arquivos `.astro` e os colocando na pasta `src/pages/`.\n\n3. **Fazendo Postagens no Blog**: Esta é minha primeira postagem no blog! Eu agora tenho páginas Astro e postagens em Markdown!\n\n## O que vem a seguir\n\nEu irei completar o tutorial do Astro, e então continuarei adicionando mais postagens. Olhe por aqui para o que vem a frente.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"minha-primeira-postagem-no-blog","text":"Minha Primeira Postagem no Blog"},{"depth":2,"slug":"o-que-eu-realizei","text":"O que eu realizei"},{"depth":2,"slug":"o-que-vem-a-seguir","text":"O que vem a seguir"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
