desktop
body( 
    header( nav( div(a(img) -> 3*div.img(img)) -> div(a -> button)) -> h1 -> p div(button -> button)) 

    section.future( h2->div.flex(article.flex(div(h2->p)-> div(h2->p)) -> div.img(img)) )

    section.state( div.flex(div.img(img) -> article(h2-> p)))

    section.free( div.flex(div.img(img) -> article.flex(div(h2->p)-> div(h2->p))))

    footer.grid(div(a)-div.flex(p->div(n*p))->div.flex(p->div(n*p))->div.flex(p->div(n*p)))
)

mobile 
body(
    header(nav(a(img) -> div(img.burger)) -> h1 -> p2 -> div(button -> button))

    section.future(h2 -> div.flex(div.img(img) -> article(h2->p-h2->p)))

    section.state(div.flex(div.img(img) -> article(h2 -> p)))

    section.free( div.flex(div.img(img) -> article.flex(div(h2->p)-> div(h2->p))))

    footer.flex(div(a)-div.flex(p->div(n*p))->div.flex(p->div(n*p))->div.flex(p->div(n*p)))
)