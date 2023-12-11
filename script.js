class Produto{
    nome;
    categoria;
    tema;
    valor;
    foto;
    constructor(nome,categoria,tema,valor,foto){
        this.nome = nome;
        this.categoria = categoria;
        this.tema = tema;
        this.valor = valor;
        this.foto = 'imagens/' + foto;
    }
}
let produtos = [
    new Produto("Batrangue","Acessórios","DC",49,"batrangue.png"),
    new Produto("Funko Pop Batman","Funko Pop","DC",99,"batman.png"),
    new Produto("HQ Mulher Maravilha - O Círculo","Livros & HQs","DC",39,"livrodc.png"),
    new Produto("Camiseta Flash","Roupas","DC",49,"flash.png"),
    new Produto("Camiseta Aquaman","Roupas","DC",49,"aquaman.png"),
    new Produto("Funko Pop Superman","Funko Pop","DC",99,"superman.png"),
    new Produto("Mapa do Maroto","Acessórios","Harry Potter",149,"mapa.png"),
    new Produto("Funko Pop Harry Potter","Funko Pop","Harry Potter",99,"harrypotter.png"),
    new Produto("Box Harry Potter","Livros & HQs","Harry Potter",199,"livrohp.png"),
    new Produto("Moletom Hogwarts","Roupas","Harry Potter",99,"hogwarts.png"),
    new Produto("Camiseta Expecto Patronum","Roupas","Harry Potter",49,"patrono.png"),
    new Produto("Funko Pop Luna Lovegood","Funko Pop","Harry Potter",99,"luna.png"),
    new Produto("Manopla do Thanos","Acessórios","Marvel",199,"manopla.png"),
    new Produto("Funko Pop Homem de Ferro","Funko Pop","Marvel",99,"ironman.png"),
    new Produto("Box Marvel Guerra Civil","Livros & HQs","Marvel",179,"livromarvel.png"),
    new Produto("Moletom Marvel","Roupas","Marvel",99,"marvel.png"),
    new Produto("Camiseta Homem Aranha","Roupas","Marvel",49,"spiderman.png"),
    new Produto("Funko Pop Wanda","Funko Pop","Marvel",99,"wanda.png"),
    new Produto("Anel do Senhor dos Anéis","Acessórios","Senhor dos Anéis",99,"anel.png"),
    new Produto("Funko Pop Gandalf","Funko Pop","Senhor dos Anéis",99,"gandalf.png"),
    new Produto("Box Senhor dos Anéis","Livros & HQs","Senhor dos Anéis",149,"livrolotr.png"),
    new Produto("Camiseta Senhor dos Anéis","Roupas","Senhor dos Anéis",49,"lotr.png"),
    new Produto("Camiseta Gandalf","Roupas","Senhor dos Anéis",49,"camigandalf.png"),
    new Produto("Funko Pop Legolas","Funko Pop","Senhor dos Anéis",99,"legolas.png"),
    new Produto("Capacete do Stormtrooper","Acessórios","Star Wars",99,"capacete.png"),
    new Produto("Funko Pop Darth Vader","Funko Pop","Star Wars",99,"darthvader.png"),
    new Produto("Star Wars: A Trilogia","Livros & HQs","Star Wars",79,"livrostarwars.png"),
    new Produto("Camiseta Mandaloriano","Roupas","Star Wars",49,"mandaloriano.png"),
    new Produto("Camiseta Star Wars","Roupas","Star Wars",49,"camistarwars.png"),
    new Produto("Funko Pop Baby Yoda","Funko Pop","Star Wars",99,"yoda.png"),
    new Produto("Chapéu do Mario","Acessórios","Super Mario Bros",49,"chapeu.png"),
    new Produto("Funko Pop Super Mario","Funko Pop","Super Mario Bros",99,"mariobros.png"),
    new Produto("Super Mario Ultimate Trivia Book","Livros & HQs","Super Mario Bros",29,"livromario.png"),
    new Produto("Camiseta Super Mario","Roupas","Super Mario Bros",49,"supermario.png"),
    new Produto("Camiseta Peach","Roupas","Super Mario Bros",49,"peach.png"),
    new Produto("Gumba de Pelúcia","Acessórios","Super Mario Bros",39,"gumba.png")
];
function produto(tipo,categoria,elemento){
    let lis = document.querySelectorAll('li');
    for(let i=0;i<lis.length;i++){
        if(i!=0 && i!=5){
            lis[i].setAttribute("class","nav");
        }
    }
    let main = document.querySelector("main");
    let pagina = `
    <div class="titulo">
        <div class="linha"></div>
        <p class="title">${categoria.toUpperCase()}</p>
        <div class="linha"></div>
    </div>
    <div class="produtos">
    `;
    for(let i=0;i<produtos.length;i++){
        if(produtos[i].categoria == categoria && tipo == "Categoria" || produtos[i].tema == categoria && tipo == "Tema"){
            pagina += `
            <div class="produto">
                <figure>
                    <img src="${produtos[i].foto}">
                    <figcaption class="nome">${produtos[i].nome}</figcaption>
                    <figcaption class="preco">R$ ${produtos[i].valor},90</figcaption>
                </figure>
                <button class="botcom"><a href="compra19.html" class="compra">COMPRAR</a></button>
            </div>
            `;
        }
    }
    pagina += `
    </div>
    `;
    main.innerHTML = pagina;
    elemento.setAttribute("class","pagina");
}