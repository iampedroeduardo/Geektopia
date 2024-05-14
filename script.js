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
                <button class="botcom" onclick="compra(${produtos[i].nome},${produtos[i].valor})"><a class="compra">COMPRAR</a></button>
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
function login(){
    pagina = `
    <div class="titulo">
        <div class="linha"></div>
        <p class="title">ENTRE</p>
        <div class="linha"></div>
    </div>
    <form>
        <label for="email">Email/Usuário</label>
        <input type="email" name="email" id="email" class="campo">
        <label for="senha">Senha</label>
        <input type="password" name="senha" id="senha" class="campo">
        <div class="contbotao">
            <button class="botao"><a href="index.html">Enviar</a></button>
        </div>
    </form>
    <div class="titulo">
        <div class="linha"></div>
        <p class="title">OU</p>
        <div class="linha"></div>
    </div>
    <div class="contbotao">
        <button class="botao" onclick="cadastro();"><a>Cadastre-se</a></button>
    </div>
    `;
    let main = document.querySelector("main");
    main.innerHTML = pagina;
}
function cadastro(){
    let pagina = `
    <div class="titulo">
        <div class="linha"></div>
        <p class="title">CADASTRE-SE</p>
        <div class="linha"></div>
    </div>
    <form>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" class="campo">
        <label for="usuario">Usuário</label>
        <input type="text" name="usuario" id="usuario" class="campo">
        <label for="cpf">CPF</label>
        <input type="text" name="cpf" id="cpf" class="campo">
        <label for="telefone">Telefone</label>
        <input type="tel" name="telefone" id="telefone" class="campo">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="campo">
        <label for="data">Data de Nascimento</label>
        <input type="date" name="data" id="data" class="campo">
        <label for="estado">Estado:</label>
        <select name="estado" id="estado" class="campo">
            <option>AC</option>
            <option>AL</option>
            <option>AM</option>
            <option>AP</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RR</option>
            <option>RO</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
        </select>
        <label for="#senha">Senha</label>
        <input type="password" name="senha" id="senha" class="campo">
        <label for="#confirma">Confirmar Senha</label>
        <input type="password" name="confirma" id="confirma" class="campo">
        <div class="contbotao">
            <button class="botao"><a href="../index.html">Enviar</a></button>
        </div>
    </form>
    `;
    let main = document.querySelector("main");
    main.innerHTML = pagina;
}
function compra(nome,valor){
    let pagina = `
    <div class="titulo">
        <div class="linha"></div>
        <p class="title">SUAS COMPRAS</p>
        <div class="linha"></div>
    </div>
    <div class="box1">
        <p class="descricao">${nome}</p>
        <p class="preco1">R$ ${valor},90</p>
    </div>
    <div class="box2">
        <p class="total">Total</p>
        <p class="preco2">R$ ${valor},90</p>
    </div>
    <p class="ttl">Informações Pessoais</p><br>
    <div class="borda1">
        <div class="torto1">
            <form>
                <div class="nome">Nome Completo</div>
                <input type="text" name="nomecompleto" class="in1">
            </form>
            <form>
                <div class="nome">Telefone</div>
                <input type="tel" name="telefone" class="in1">
            </form>
        </div>
        <div class="torto2">
            <form>
                <div class="nome">CPF</div>
                <input type="text" name="cpf" placeholder="000.000.000-00" class="in1">
            </form>
            <form>
                <div class="nome">Email</div>
                <input type="email" name="Email" class="in1">
            </form>
        </div>
    </div>

    <p class="ttl">Pagamento</p><br>
    <div class="borda2">
        <div class="torto3">
            <form>
                <div class="nome">Número do Cartão</div>
                <input type="text" name="cartao" class="in1">
            </form>
            <form>
                <div for="validade" class="nome">Validade</div>
                <input type="month" name="validade" class="in2">
            </form>
            <form>
                <div for="ccv" class="nome">CCV</div>
                <input type="text" name="ccv" class="in2">
            </form>
        </div>
        <form>
            <div for="titular" class="nome">Nome do Titular</div>
            <input type="text" name="titular" class="in3">
        </form>
    </div>

    <p class="ttl">Fretes</p><br>
    <div class="borda3">
        <table>
            <caption></caption>
            <thead>
                <tr>
                    <th  class="c1">Frete</th>
                    <th  class="c1">Dias Úteis</th>
                    <th  class="c1">Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="c2">Sedex</td>
                    <td class="c2">5 dias</td>
                    <td class="c2">R$ 25,00</td>
                </tr>
                <tr>
                    <td class="c2">Correios</td>
                    <td class="c2">7 dias</td>
                    <td class="c2">R$ 21,00</td>
                </tr>
                <tr>
                    <td class="c2">Expresso São Miguel</td>
                    <td class="c2">14 dias</td>
                    <td class="c2">R$ 13,00</td>
                </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    </div>

    <div class="btt">
        <button class="bt"><a href="index.html">Enviar</a></button>
    </div>
    `;
    let main = document.querySelector("main");
    main.innerHTML = pagina;
}