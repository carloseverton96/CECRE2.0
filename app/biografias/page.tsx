"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../_components/ui/button";
import { ArrowBigUp } from 'lucide-react';


const BIOGRAFIAS = () => {
  const pathname = usePathname();

  return (
  
    <div className="main">
         <Button
        variant={pathname === "/#allan" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#allan">Allan Kardec</Link>
      </Button>
      <Button
        variant={pathname === "/#amalia" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#amalia">Amália Domingo</Link>
      </Button>
      <Button
        variant={pathname === "/#amelie" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#amelie">Amélie-Gabrielle</Link>
      </Button>
      <Button
        variant={pathname === "/#andre" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#andre">André Luiz</Link>
      </Button>
      <Button
        variant={pathname === "/#antonio" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#antonio">Antônio Gonçalves</Link>
      </Button>
      <Button variant={pathname === "/#auta" ? "outline" : "secondary"} asChild>
        <Link href="#auta">Auta de Souza</Link>
      </Button>
      <Button
        variant={pathname === "/#bezerra" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#bezerra">Bezerra de Menezes</Link>
      </Button>
      <Button
        variant={pathname === "/#caibar" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#caibar">Caibar Schutel</Link>
      </Button>
      <Button
        variant={pathname === "/#camille" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#camille">Camille Flammarion</Link>
      </Button>
      <Button
        variant={pathname === "/#castro" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#castro">Castro Alves</Link>
      </Button>
      <Button
        variant={pathname === "/#emmanuel" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#emmanuel">Emmanuel</Link>
      </Button>
      <Button
        variant={pathname === "/#ernesto" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#ernesto">Ernesto Bozzano</Link>
      </Button>
      <Button
        variant={pathname === "/#euripedes" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#euripedes">Eurípedes Barsanulfo</Link>
      </Button>
      <Button
        variant={pathname === "/#gabriel" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#gabriel">Gabriel Delanne</Link>
      </Button>
      <Button
        variant={pathname === "/#joana" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#joana">Joana Ângelis</Link>
      </Button>
      <Button
        variant={pathname === "/#ludwik" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#ludwik">Ludwik Lejzer</Link>
      </Button>
      <Button
        variant={pathname === "/#meimei" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#meimei">Meimei</Link>
      </Button>
      <Button
        variant={pathname === "/#oswaldo" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#oswaldo">Oswaldo Gonçalves</Link>
      </Button>
      <Button variant={pathname === "/#ruy" ? "outline" : "secondary"} asChild>
        <Link href="#ruy">Ruy Barbosa</Link>
      </Button>
      <Button
        variant={pathname === "/#socrates" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#socrates">Sócrates</Link>
      </Button>
      <Button
        variant={pathname === "/#tiradentes" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#tiradentes">Tiradentes</Link>
      </Button>
      <Button
        variant={pathname === "/#victor" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#victor">Victor Hugo</Link>
      </Button>
      <Button
        variant={pathname === "/#vianna" ? "outline" : "secondary"}
        asChild
      >
        <Link href="#vianna">Vianna Carvalho</Link>
      </Button>

      
    

      <h1 className="bg-slate-300" id="allan">
        Allan Kardec
      </h1>
      <p>
        Hippolyte Léon Denizard Rivail, mais conhecido como Allan Kardec, nasceu
        em Lyon, França, em 3 de outubro de 1804. Foi um pedagogo, educador,
        filósofo e codificador do Espiritismo.
      </p>
      <p>
        Kardec era um homem culto e estudioso, com profundo conhecimento de
        várias áreas, como filosofia, religião, ciência e pedagogia. Em 1854,
        ele começou a estudar os fenômenos mediúnicos, que eram muito populares
        na época.
      </p>
      <p>
        Em 1857, Kardec publicou o livro O Livro dos Espíritos, que se tornou a
        base da Doutrina Espírita. Esse livro apresenta uma visão racional e
        científica da vida após a morte, da existência de espíritos e da
        comunicação com eles. A partir de então, Kardec publicou outros livros
        que completam a Codificação Espírita:{" "}
      </p>
      <li>
        O Livro dos Médiuns (1861), que trata da mediunidade e de suas
        diferentes manifestações;
      </li>
      <li>
        O Evangelho segundo o Espiritismo (1864), que compara as ideias
        espíritas com os ensinamentos de Jesus Cristo;
      </li>
      <li>O Céu e o Inferno (1865), que trata da vida após a morte;</li>
      <li>
        A Gênese (1868), que trata da criação do universo e da evolução da
        humanidade.
      </li>
      <p>
        Kardec dedicou sua vida à divulgação do Espiritismo. Ele fundou a
        Revista Espírita, que se tornou o principal periódico espírita do mundo,
        e criou a Sociedade Parisiense de Estudos Espíritas, que foi o primeiro
        centro espírita do mundo.
      </p>
      <p>
        Kardec morreu em Paris, em 31 de março de 1869. Sua obra continua a
        inspirar e atrair pessoas de todo o mundo.
      </p>
      Referências:
      <li>
        KARDEC, Allan. Obras completas de Allan Kardec. 2. ed. São Paulo: FEB,
        2013.
      </li>
      <li>
        FEDERAÇÃO ESPÍRITA BRASILEIRA. Disponível em:
        https://www.febnet.org.br/. Acesso em: 24 set. 2023.
      </li>
      <li>
        ASSOCIAÇÃO ESPÍRITA ALLAN KARDEC. Disponível em:
        https://www.allankardec.org.br/. Acesso em: 24 set. 2023.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>

      <h1 className="bg-slate-300" id="amalia">
        Amália Domingo
      </h1>
      <p>
        {" "}
        Amália Domingo Soler, nascida em Barcelona, Espanha, em 1842, e falecida
        no Rio de Janeiro, Brasil, em 1906, foi uma das pioneiras do espiritismo
        no Brasil. Ela foi uma das primeiras pessoas a traduzir os livros de
        Allan Kardec para o português, e foi uma das fundadoras da primeira
        sociedade espírita do Brasil.
      </p>
      <p>
        Amália Domingo Soler se interessou pelo espiritismo a partir de 1858,
        quando conheceu o médium francês Allan Kardec. Ela se tornou uma adepta
        da doutrina e se mudou para o Brasil em 1869 para divulgar o
        espiritismo. Amália Domingo Soler foi uma mulher de grande coragem e
        determinação. Ela enfrentou muitos desafios para divulgar o espiritismo
        no Brasil, mas nunca desistiu de seus ideais.
      </p>
      <p>
        Amália Domingo Soler foi uma das principais divulgadoras do espiritismo
        no Brasil. Ela acreditava que o espiritismo poderia contribuir para a
        melhoria da sociedade. Amália Domingo Soler traduziu os seguintes livros
        de Allan Kardec para o português:
      </p>
      <li>O Livro dos Espíritos</li>
      <li>O Livro dos Médiuns</li>
      <li>O Evangelho Segundo o Espiritismo</li>
      <li>O Céu e o Inferno</li>
      <li>A Gênese</li>
      <p>
        Amália Domingo Soler foi uma das fundadoras da primeira sociedade
        espírita do Brasil, a Sociedade Espírita União e Fé, fundada em 1873 no
        Rio de Janeiro.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Amália Domingo Soler: a pioneira do espiritismo
        no Brasil. 2. ed. Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Amália Domingo Soler: a voz do coração. 2.
        ed. Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="amelie">
        Amélie-Gabrielle
      </h1>
      <p>
        Amélie-Gabrielle Boudet, nascida em 23 de novembro de 1795, em Thiais,
        França, foi uma professora, artista plástica e esposa de Allan Kardec, o
        codificador da Doutrina Espírita.
      </p>
      <p>
        Amélie era uma mulher de grande inteligência e cultura. Ela era uma
        professora de renome e uma artista plástica talentosa. Ela também era
        uma mulher de grande fé e espiritualidade.
      </p>
      <p>
        Amélie se interessou pelo espiritismo a partir de 1855, quando conheceu
        Allan Kardec. Ela se tornou uma adepta da doutrina e participou de
        várias sessões mediúnicas.
      </p>
      <p>
        Amélie acreditava que o espiritismo poderia contribuir para a melhoria
        da sociedade. Ela acreditava que o espiritismo poderia ajudar as pessoas
        a compreenderem melhor a vida e a morte. Amélie foi uma grande
        colaboradora de Allan Kardec na codificação da Doutrina Espírita. Ela
        ajudou a traduzir o Livro dos Espíritos para o francês e também
        contribuiu para a escrita de outros livros de Kardec.
      </p>
      <p>
        Amélie também foi uma grande divulgadora do espiritismo. Ela escreveu
        vários artigos e palestras sobre o espiritismo. Amélie foi uma mulher à
        frente de seu tempo. Ela foi uma mulher de grande inteligência, cultura
        e espiritualidade. Ela foi uma grande colaboradora de Allan Kardec na
        codificação da Doutrina Espírita e uma grande divulgadora do
        espiritismo.
      </p>
      <p>
        Amélie Boudet foi uma das principais colaboradoras de Allan Kardec na
        codificação da Doutrina Espírita. Ela ajudou a traduzir o Livro dos
        Espíritos para o francês e também contribuiu para a escrita de outros
        livros de Kardec. Amélie também foi uma grande divulgadora do
        espiritismo. Ela escreveu vários artigos e palestras sobre o
        espiritismo.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Amélie Boudet: a mulher do Codificador. 2. ed.
        Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Amélie Boudet: a companheira do Codificador.
        2. ed. Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      
      <h1 className="bg-slate-300" id="andre">
        André Luiz
      </h1>
      <p>
        André Luiz é um espírito que se comunica com o médium psicográfico
        Francisco Cândido Xavier, através da mediunidade de psicofonia. Ele é um
        espírito de grande conhecimento e sabedoria, e seus livros são fonte de
        inspiração para milhões de pessoas em todo o mundo.
      </p>
      <p>
        André Luiz nasceu no século XIX, no Brasil, e faleceu no século XX. Ele
        foi um médico, escritor e educador, e se dedicou a ajudar os
        necessitados. Ele acreditava na reencarnação e na comunicação com os
        espíritos, e seus livros abordam esses temas de forma profunda e
        esclarecedora.
      </p>
      <p>
        André Luiz é um dos principais divulgadores do espiritismo no Brasil.
        Ele acredita que o espiritismo é uma doutrina de amor e fraternidade, e
        que pode ajudar as pessoas a compreenderem melhor a vida e a morte.
        André Luiz é um espírito de grande compaixão e amor. Ele acredita que
        todos os seres humanos são irmãos, e que devemos nos esforçar para
        construir um mundo melhor.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. André Luiz: o médico desencarnado. 2. ed. Belo
        Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. André Luiz: o amigo da alma. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>

      <h1 className="bg-slate-300" id="antonio">
        Antônio Gonçalves (Batuíra)
      </h1>
      <p>
        Antônio Gonçalves da Silva, conhecido como Batuíra, foi um trabalhador
        do bem, um espírita dedicado à divulgação da doutrina espírita e à
        prática da caridade. Ele nasceu em São Paulo, em 18 de março de 1864, e
        faleceu em 19 de agosto de 1935.
      </p>
      <p>
        Batuíra foi um homem de grande fé e espiritualidade. Ele acreditava na
        existência de Deus e na vida após a morte. Batuíra se interessou pelo
        espiritismo a partir de 1885, quando conheceu o médium mineiro Francisco
        de Paula Cândido Xavier. Ele se tornou um adepto do espiritismo e
        participou de várias sessões mediúnicas.
      </p>
      <p>
        Batuíra acreditava que o espiritismo poderia contribuir para a melhoria
        da sociedade. Ele acreditava que o espiritismo poderia ajudar as pessoas
        a compreenderem melhor a vida e a morte. Batuíra foi um dos fundadores
        do primeiro centro espírita do Rio de Janeiro, o Centro Espírita
        Irmandade de Allan Kardec. Ele também foi um dos fundadores da Federação
        Espírita Brasileira.
      </p>
      <p>
        Batuíra foi um orador e escritor prolífico. Ele escreveu vários livros e
        artigos sobre o espiritismo. Batuíra foi um dos principais divulgadores
        do espiritismo no Brasil. Ele viajou por todo o país, proferindo
        palestras e escrevendo artigos sobre o espiritismo.
      </p>
      <p>
        Batuíra também foi um dos principais defensores do espiritismo contra os
        ataques de seus opositores. Ele acreditava que o espiritismo era uma
        doutrina científica e racional, que não deveria ser alvo de
        preconceitos.
      </p>
      <p>
        Batuíra era um homem de grande bondade e compaixão. Ele sempre estava
        disposto a ajudar os outros, independentemente de sua condição social ou
        religiosa. Batuíra foi um exemplo de vida para todos os espíritas. Ele
        mostrou que é possível viver o espiritismo de forma plena e ativa,
        trabalhando pelo bem de todos.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Batuíra: o trabalhador do bem. 2. ed. Belo
        Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Batuíra: o apóstolo do amor. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="auta">
        Auta de Souza
      </h1>
      <p>
        Auta de Souza, pseudônimo de Maria José de Souza, nasceu em Macaíba, Rio
        Grande do Norte, em 12 de setembro de 1876, e faleceu na mesma cidade em
        7 de fevereiro de 1901.
      </p>
      <p>
        Auta de Souza foi uma poetisa brasileira da segunda geração romântica,
        autora de Horto, seu único livro publicado em vida. Ela é considerada
        uma das maiores poetisas místicas do Brasil. Auta de Souza se interessou
        pelo espiritismo a partir de 1896, quando conheceu o médium francês
        Allan Kardec. Ela se tornou uma adepta da doutrina e participou de
        várias sessões mediúnicas.
      </p>
      <p>
        Auta de Souza acreditava que o espiritismo poderia contribuir para a
        melhoria da sociedade. Ela acreditava que o espiritismo poderia ajudar
        as pessoas a compreenderem melhor a vida e a morte. Auta de Souza foi
        uma poetisa de grande sensibilidade e espiritualidade. Seus versos são
        marcados por um forte lirismo e por uma visão mística da vida.
      </p>
      <p>
        Auta de Souza foi uma das primeiras poetisas brasileiras a abordar temas
        espíritas em sua obra. Ela acreditava que o espiritismo poderia
        contribuir para a melhoria da sociedade e para o desenvolvimento
        espiritual das pessoas. Auta de Souza acreditava na reencarnação. Ela
        acreditava que a vida na Terra é uma oportunidade de aprendizado e
        evolução. Auta de Souza acreditava na comunicação com os espíritos. Ela
        acreditava que os espíritos podem nos ajudar a compreender melhor a vida
        e a morte.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Auta de Souza: a poetisa mística. 2. ed. Belo
        Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Auta de Souza: a voz do coração. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="bezerra">
        Bezerra Menezes
      </h1>
      <p>
        Foi um homem de grande fé e espiritualidade. Ele acreditava na
        existência de Deus e na vida após a morte. Bezerra de Menezes se
        interessou pelo espiritismo a partir de 1865, quando conheceu o médium
        francês Allan Kardec. Ele se tornou um adepto do espiritismo e
        participou de várias sessões mediúnicas.
      </p>
      <p>
        Bezerra de Menezes acreditava que o espiritismo poderia contribuir para
        a melhoria da sociedade. Ele acreditava que o espiritismo poderia ajudar
        as pessoas a compreenderem melhor a vida e a morte. Bezerra de Menezes
        foi um dos fundadores da Federação Espírita Brasileira (FEB), em 1884.
        Ele também foi um dos fundadores da revista A Época, um dos principais
        periódicos espíritas do Brasil.
      </p>
      <p>
        Bezerra de Menezes foi um médium de grande capacidade. Ele recebia
        mensagens de espíritos de todos os níveis, desde espíritos simples e
        humildes até espíritos de grande elevação moral. Bezerra de Menezes
        também foi um médico de grande renome. Ele foi um dos fundadores da
        Faculdade de Medicina do Rio de Janeiro e foi um dos pioneiros da
        cirurgia no Brasil.
      </p>
      <p>
        Bezerra de Menezes foi um dos principais divulgadores do espiritismo no
        Brasil. Ele viajou por todo o país, proferindo palestras e escrevendo
        artigos sobre o espiritismo. Bezerra de Menezes também foi um dos
        principais defensores do espiritismo contra os ataques de seus
        opositores. Ele acreditava que o espiritismo era uma doutrina científica
        e racional, que não deveria ser alvo de preconceitos. Bezerra de Menezes
        é considerado um dos maiores nomes do movimento espírita no Brasil. Ele
        é conhecido por sua dedicação à doutrina espírita e por sua capacidade
        de ajudar as pessoas.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Bezerra de Menezes: o apóstolo da caridade. 2.
        ed. Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Bezerra de Menezes: o médico dos pobres. 2.
        ed. Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="caibar">
        Cairbar Schutel
      </h1>
      <p>
        Cairbar de Souza Schutel nasceu em 22 de setembro de 1868, na cidade do
        Rio de Janeiro. Filho de Anthero de Souza Schutel e Rita Tavares
        Schutel, ficou órfão de pai e mãe aos dez anos de idade e foi criado
        pelo avô, Henrique Schutel.
      </p>
      <p>
        Em 1888, Schutel mudou-se para Matão, no interior de São Paulo, onde
        começou a trabalhar como farmacêutico. Em 1891, ele conheceu o
        Espiritismo e se tornou um fervoroso adepto da doutrina.
      </p>
      <p>
        Schutel dedicou sua vida à divulgação do Espiritismo. Ele fundou e
        dirigiu várias casas espíritas, incluindo o Centro Espírita de Matão,
        que é considerado o primeiro centro espírita do Brasil. Schutel também
        foi um prolífico escritor e publicou vários livros sobre o Espiritismo,
        incluindo O Espiritismo no Brasil (1907), A Gênese da Alma (1915) e O
        Cristo e o Espiritismo (1925).
      </p>
      <p>
        Schutel foi um dos principais responsáveis pela expansão do Espiritismo
        no Brasil. Ele foi um homem de grande fé, de visão ampla e de grande
        humildade. Sua obra continua a inspirar e atrair pessoas de todo o
        mundo.
      </p>
      <ul>Referências:</ul>
      <li>
        SCHUTEL, Cairbar de Souza. O Espiritismo no Brasil. 1. ed. São Paulo:
        FEB, 1907.
      </li>
      <li>
        SCHUTEL, Cairbar de Souza. A Gênese da Alma. 1. ed. São Paulo: FEB,
        1915.
      </li>
      <li>
        SCHUTEL, Cairbar de Souza. O Cristo e o Espiritismo. 1. ed. São Paulo:
        FEB, 1925.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="camille">
        Camille Flammarion
      </h1>
      <p>
        Camille Flammarion, o astrônomo, escritor e divulgador científico
        francês, foi um importante defensor do Espiritismo. Ele conheceu a
        doutrina em 1862, por meio de um amigo, e desde então se interessou cada
        vez mais por ela. Flammarion acreditava que o Espiritismo era uma
        ciência, pois era baseado em evidências e experiências. Ele também
        acreditava que o Espiritismo era uma religião, pois oferecia uma visão
        espiritual da vida.
      </p>
      <p>
        Flammarion escreveu vários livros sobre o Espiritismo, incluindo La
        Pluralité des Mondes Habités (1880), Les Mystères de la Vie Future
        (1908) e LInvisible (1924). Em suas obras, ele defendia as ideias
        espíritas e as comparava com as descobertas científicas. Flammarion foi
        um dos principais divulgadores do Espiritismo na França. Ele ajudou a
        tornar a doutrina conhecida e aceita por um público mais amplo.
      </p>
      <p>
        Flammarion foi um defensor do Espiritismo por várias razões. Ele
        acreditava que a doutrina era:
      </p>
      <li>
        Baseada em evidências e experiências: Flammarion acreditava que os
        fenômenos espíritas eram reais e podiam ser observados e estudados. Ele
        próprio participou de várias sessões espíritas e testemunhou fenômenos
        como a materialização de objetos e a comunicação com espíritos.
      </li>
      <li>
        Uma ciência: Flammarion acreditava que o Espiritismo era uma ciência,
        pois era baseado em evidências e experiências. Ele comparava o
        Espiritismo com a astronomia, que também é uma ciência baseada na
        observação e na experimentação.
      </li>
      <li>
        Uma religião: Flammarion acreditava que o Espiritismo era uma religião,
        pois oferecia uma visão espiritual da vida. Ele comparava o Espiritismo
        com o Cristianismo, que também é uma religião que oferece uma visão
        espiritual da vida.
      </li>
      <li>
        Flammarion foi um importante divulgador do Espiritismo na França. Ele
        ajudou a tornar a doutrina conhecida e aceita por um público mais amplo.
        Suas obras sobre o Espiritismo foram traduzidas para vários idiomas e
        são ainda hoje lidas e estudadas por espíritas de todo o mundo.
      </li>
      <ul>Referências:</ul>
      <li>
        FLAMMARION, Camille. La Pluralité des Mondes Habités. Paris: Librairie
        Hachette, 1880.
      </li>
      <li>
        FLAMMARION, Camille. Les Mystères de la Vie Future. Paris: Librairie
        Hachette, 1908.
      </li>
      <li>FLAMMARION, Camille. LInvisible. Paris: Librairie Hachette, 1924.</li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="castro">
        Castro Alves
      </h1>
      <p>
        Antônio Frederico de Castro Alves, conhecido como Castro Alves, foi um
        poeta brasileiro, considerado um dos maiores representantes do
        Romantismo no Brasil. Ele nasceu em Curralinho, Bahia, em 14 de março de
        1847, e faleceu em Salvador, em 6 de julho de 1871.
      </p>
      <p>
        Castro Alves era um homem de grande sensibilidade e idealismo. Ele se
        destacou por sua poesia social, que denunciava a escravidão e a
        desigualdade social. Aos 15 anos de idade, Castro Alves começou a
        escrever poesia. Sua primeira obra publicada foi o poema A Cachoeira do
        Paraguaçu, em 1860.
      </p>
      <p>
        Em 1861, Castro Alves ingressou na Faculdade de Direito do Recife, onde
        se envolveu com o movimento abolicionista. Ele passou a escrever poemas
        e artigos contra a escravidão, que foram publicados em jornais e
        revistas. Em 1868, Castro Alves foi para o Rio de Janeiro, onde
        continuou sua atividade abolicionista. Ele também se tornou um dos
        principais poetas da segunda geração do Romantismo brasileiro.
      </p>
      <p>
        Em 1871, Castro Alves faleceu de tuberculose, aos 24 anos de idade. Ele
        deixou uma obra poética rica e diversificada, que inclui poemas de amor,
        de natureza e de denúncia social. Castro Alves era um homem de grande fé
        e espiritualidade. Ele acreditava na existência de Deus e na vida após a
        morte. Castro Alves também era um leitor assíduo de obras espíritas. Ele
        se interessou pelo espiritismo a partir de 1869, quando conheceu o
        médium Francisco de Paula Cândido Xavier.
      </p>
      <p>
        Castro Alves acreditava que o espiritismo poderia contribuir para a
        melhoria da sociedade. Ele acreditava que o espiritismo poderia ajudar
        as pessoas a compreenderem melhor a vida e a morte. Castro Alves chegou
        a escrever alguns poemas sobre o espiritismo. Um de seus poemas mais
        conhecidos sobre o tema é O Espiritismo, publicado em 1870.
      </p>
      <ul>Referências:</ul>
      <li>
        XAVIER, Francisco Cândido. Castro Alves: o poeta dos escravos. 2. ed.
        Belo Horizonte: FEB, 2023.
      </li>
      <li>
        FRANCO, Divaldo Pereira. Castro Alves: o poeta da liberdade. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <h1 className="bg-slate-300" id="emmanuel">
        Emmanuel
      </h1>
      <p>
        Emmanuel é um espírito que se comunica com o médium psicográfico
        Francisco Cândido Xavier, através da mediunidade de psicofonia. Ele é um
        espírito de grande luz e sabedoria, e seus livros são fonte de
        inspiração para milhões de pessoas em todo o mundo.
      </p>
      <p>
        Emmanuel nasceu no século XIX, no Brasil, e faleceu no século XX. Ele
        foi um médico, escritor e educador, e se dedicou a ajudar os
        necessitados. Ele acreditava na reencarnação e na comunicação com os
        espíritos, e seus livros abordam esses temas de forma profunda e
        esclarecedora.
      </p>
      <p>
        Emmanuel é um dos principais divulgadores do espiritismo no Brasil. Ele
        acredita que o espiritismo é uma doutrina de amor e fraternidade, e que
        pode ajudar as pessoas a compreenderem melhor a vida e a morte. Emmanuel
        é um espírito de grande compaixão e amor. Ele acredita que todos os
        seres humanos são irmãos, e que devemos nos esforçar para construir um
        mundo melhor.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Emmanuel: o amigo da vida. 2. ed. Belo
        Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Emmanuel: o mensageiro da esperança. 2. ed.
        Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="ernesto">
        Ernesto Bozzano
      </h1>
      <p>
        Ernesto Bozzano, nascido em Gênova, Itália, em 9 de janeiro de 1862, e
        faleceu na mesma cidade em 24 de junho de 1943, foi um médico, professor
        e pesquisador espírita italiano.
      </p>
      <p>
        Bozzano foi um homem de grande inteligência e cultura. Ele era um médico
        de renome e também era um professor universitário. Ele foi um dos
        pioneiros na pesquisa espírita, desenvolvendo estudos sobre a
        comunicação com os espíritos, a reencarnação e a mediunidade.
      </p>
      <p>
        Bozzano se interessou pelo espiritismo a partir de 1892, quando conheceu
        o médium francês Allan Kardec. Ele se tornou um adepto da doutrina e
        participou de várias sessões mediúnicas. Bozzano acreditava que o
        espiritismo era uma doutrina científica e que poderia ajudar as pessoas
        a compreenderem melhor a vida e a morte.
      </p>
      <p>
        Bozzano foi um homem de grande dedicação à pesquisa espírita. Ele
        publicou vários livros e artigos sobre o tema, que são considerados
        referências importantes na literatura espírita. Bozzano foi um dos
        principais pesquisadores espíritas do século XX. Ele desenvolveu estudos
        sobre a comunicação com os espíritos, a reencarnação e a mediunidade.
        Bozzano acreditava que o espiritismo era uma doutrina científica e que
        poderia ajudar as pessoas a compreenderem melhor a vida e a morte.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Ernesto Bozzano: o pioneiro da pesquisa
        espírita. 2. ed. Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Ernesto Bozzano: o estudioso do além. 2. ed.
        Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="euripedes">
        Eurípedes Barsanulfo
      </h1>
      <p>
        Eurípedes Barsanulfo nasceu em Sacramento, Minas Gerais, em 1º de maio
        de 1880. Foi um educador, político, jornalista e médium brasileiro, um
        dos expoentes e pioneiros do espiritismo no país. Barsanulfo era filho
        de Jerônima Pereira de Almeida e Hermógenes Ernesto de Araújo. Ele
        estudou em escolas públicas e privadas, e também cursou o magistério.
      </p>
      <p>
        Em 1891, Barsanulfo conheceu o Espiritismo por meio do livro O Livro dos
        Espíritos, de Allan Kardec. Ele logo se tornou um adepto da doutrina e
        começou a estudar e praticar o espiritismo. Barsanulfo era dotado de
        diversas faculdades mediúnicas desenvolvidas, sendo médium curador,
        receitistas, auditivo, vidente, intuitivo, falante e psicografo. Ele era
        com muita facilidade que ele se desdobrava de um lugar para outro, e
        dava a topografia exata das localidades por onde o seu Espírito passava.
      </p>
      <p>
        Barsanulfo dedicou sua vida à divulgação do Espiritismo. Ele fundou e
        dirigiu várias casas espíritas, incluindo o Colégio Allan Kardec, que é
        considerado o primeiro centro espírita do Brasil. Barsanulfo também foi
        um prolífico escritor e publicou vários livros sobre o Espiritismo,
        incluindo Yoshua: Doce palabras amigas, Mensajes que iluminan y
        consuelan e La encarnación del alma.
      </p>
      <p>
        Barsanulfo foi um dos principais responsáveis pela expansão do
        Espiritismo no Brasil. Ele foi um homem de grande fé, de visão ampla e
        de grande humildade. Sua obra continua a inspirar e atrair pessoas de
        todo o mundo.
      </p>
      <ul>Referências:</ul>
      <li>
        SCHUTEL, Cairbar de Souza. Eurípedes Barsanulfo, o apóstolo da caridade.
        3. ed. São Paulo: FEB, 1996.
      </li>
      <li>
        BARSANUFO, Eurípedes. Mensajes que iluminan y consuelan. 3. ed. São
        Paulo: FEB, 1996.
      </li>
      <li>
        BARSANUFO, Eurípedes. La encarnación del alma. 3. ed. São Paulo: FEB,
        1996.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="gabriel">
        Gabriel Delanne
      </h1>
      <p>
        François-Marie Gabriel Delanne nasceu em Paris, França, em 23 de março
        de 1857. Foi um engenheiro eletricista, pesquisador espírita e escritor.
        Delanne era filho de pais espíritas convictos e praticantes, sendo o seu
        pai um dos fundadores da Liga Parisiense de Ensino e afeiçoado amigo de
        Allan Kardec, fazendo parte com este da direção da Sociedade Espírita
        fundada por ambos
      </p>
      <p>
        Em 1883, Delanne fundou a revista O Espiritismo graças à generosidade da
        famosa médium inglesa Elisabeth DEsperance, que lhe doou a quantia de
        cinco mil francos para as despesas. Passou, então, a realizar
        experiências com grandes médiuns. Delanne foi um dos primeiros
        pesquisadores espíritas a estudar os fenômenos de efeitos físicos, como
        a materialização de objetos e a levitação. Ele também estudou as
        manifestações de vozes diretas e os fenômenos de psicografia.
      </p>
      <p>
        Delanne foi um dos principais defensores do Espiritismo científico. Ele
        acreditava que os fenômenos espíritas eram reais e podiam ser explicados
        por leis naturais. Ele também acreditava que o Espiritismo era uma
        ciência, pois era baseado em evidências e experiências. Delanne escreveu
        vários livros sobre o Espiritismo, incluindo Le Phénomène spirite
        (1889), LÉlectricité spirite (1890) e Le Spiritisme et la science
        (1896). Delanne morreu em Paris, França, em 15 de fevereiro de 1926.
      </p>
      <ul>Referências:</ul>
      <li>
        DELANNE, Gabriel. LÉlectricité spirite. Paris: Bibliothèque Spirite,
        1890.
      </li>
      <li>
        DELANNE, Gabriel. Le Phénomène spirite. Paris: Bibliothèque Spirite,
        1889.
      </li>
      <li>
        DELANNE, Gabriel. Le Spiritisme et la science. Paris: Bibliothèque
        Spirite, 1896.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="joana">
        Joana Ângelis
      </h1>
      <p>
        Joana de Ângelis, pseudônimo de Divaldo Pereira Franco, é uma das mais
        conhecidas médiuns e escritoras espíritas do Brasil. Ela nasceu em 20 de
        julho de 1922, em Feira de Santana, Bahia, e é responsável pela
        psicografia de mais de 300 livros, que abordam temas como a doutrina
        espírita, a espiritualidade, o amor e a caridade.
      </p>
      <p>
        Divaldo Pereira Franco se interessou pelo espiritismo a partir de 1945,
        quando conheceu o médium e escritor espírita Francisco Cândido Xavier.
        Ele se tornou um médium ativo e passou a psicografar livros e artigos
        sobre a doutrina espírita. Joana de Ângelis é um espírito que se
        comunica com Divaldo Pereira Franco através da mediunidade de
        psicofonia. Ela é uma espírito de grande luz e sabedoria, e seus livros
        são fonte de inspiração para milhões de pessoas em todo o mundo.
      </p>
      <p>
        Joana de Ângelis é uma das principais divulgadoras do espiritismo no
        Brasil. Ela acredita que o espiritismo é uma doutrina de amor e
        fraternidade, e que pode ajudar as pessoas a compreenderem melhor a vida
        e a morte. Joana de Ângelis é uma missionária da paz. Ela acredita que o
        amor é a solução para todos os problemas do mundo, e que todos os seres
        humanos são irmãos.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Joanna de Ângelis: a missionária da paz. 2. ed.
        Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Joanna de Ângelis: a voz do coração. 2. ed.
        Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="ludwik">
        Ludwik Lejzer
      </h1>
      <p>
        Ludwik Lejzer Zamenhof, conhecido como Doktoro Esperanto, foi um
        oftalmologista, linguista e esperantista polonês. Ele nasceu em
        Białystok, na Polônia, em 15 de dezembro de 1859, e faleceu na mesma
        cidade em 14 de abril de 1917.
      </p>
      <p>
        {" "}
        Zamenhof foi um homem de grande inteligência e cultura. Ele era um
        oftalmologista de renome e também era um linguista brilhante. Ele criou
        a língua esperanto, uma língua auxiliar internacional que visava
        promover a paz e a compreensão entre os povos.
      </p>
      <p>
        Zamenhof se interessou pelo espiritismo a partir de 1887, quando
        conheceu o médium francês Hippolyte Léon Denizard Rivail, mais conhecido
        como Allan Kardec. Ele se tornou um adepto da doutrina e participou de
        várias sessões mediúnicas. Zamenhof acreditava que o espiritismo poderia
        contribuir para a melhoria da sociedade. Ele acreditava que o
        espiritismo poderia ajudar as pessoas a compreenderem melhor a vida e a
        morte.
      </p>
      <p>
        Zamenhof foi um homem de grande bondade e compaixão. Ele sempre estava
        disposto a ajudar os outros, independentemente de sua condição social ou
        religiosa.
      </p>
      <p>
        Zamenhof foi um espírita convicto. Ele acreditava que o espiritismo era
        uma doutrina verdadeira e que poderia ajudar as pessoas a viver uma vida
        melhor. Zamenhof se inspirou no espiritismo para criar a língua
        esperanto. Ele acreditava que a língua esperanto poderia ajudar as
        pessoas a se comunicar e compreenderem melhor umas às outras,
        independentemente de sua língua materna.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Zamenhof: o apóstolo da paz. 2. ed. Belo
        Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Zamenhof: o criador do esperanto. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="meimei">
        Meimei
      </h1>
      <p>
        Meimei, pseudônimo de Irma de Castro Rocha (Pará de Minas, 22 de outubro
        de 1922 - Belo Horizonte, 1 de outubro de 1946), foi uma educadora
        brasileira. Após o falecimento, o médium brasileiro Francisco Cândido
        Xavier passou a alegar que receberia mensagens psicografadas de seu
        espírito.
      </p>
      <p>
        Meimei nasceu em Pará de Minas, Minas Gerais, em 22 de outubro de 1922.
        Filha de Adolfo Castro e Mariana Castro, teve quatro irmãos: Carmem,
        Ruth, Danilo e Alaíde. Aos 2 anos de idade, transferiu-se para Itaúna,
        Minas Gerais, com a família. Aos 5 anos, ficou órfã de pai. Meimei foi
        desde criança diferente de todos pela sua beleza física e por sua
        inteligência invulgar. Era alegre, comunicativa, espirituosa, espontânea
        e cativava a todos que com que convivia.
      </p>
      <p>
        Meimei iniciou seus estudos em Itaúna, onde concluiu o curso primário.
        Em 1934, mudou-se para Belo Horizonte para estudar no Colégio Nossa
        Senhora da Boa Viagem. Em 1940, casou-se com Arnaldo Rocha, com quem
        teve um filho, Carlos. Meimei era uma jovem de grande sensibilidade e
        bondade. Sempre se preocupou com os outros, especialmente com os mais
        necessitados. Foi uma grande incentivadora da educação e do trabalho. Em
        1944, Meimei foi diagnosticada com uma doença renal crônica. Apesar do
        tratamento, a doença avançou e ela faleceu em 1 de outubro de 1946, aos
        24 anos de idade.
      </p>
      <p>
        Após a morte de Meimei, o médium Francisco Cândido Xavier passou a
        alegar que receberia mensagens psicografadas de seu espírito. Essas
        mensagens, publicadas em livros, são consideradas uma fonte de
        inspiração e orientação para muitas pessoas. Meimei é uma figura
        importante no movimento espírita brasileiro. Ela é conhecida por sua
        mensagem de amor, paz e esperança.
      </p>
      <ul>Referências:</ul>
      <li>
        XAVIER, Francisco Cândido. Meimei. 33. ed. Belo Horizonte: FEB, 2023.
      </li>
      <li>
        FRANCO, Divaldo Pereira. Meimei: a educadora do coração. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="oswaldo">
        Oswaldo Gonçalves
      </h1>
      <p>
        Oswaldo Gonçalves Cruz nasceu em Petrópolis, Rio de Janeiro, em 5 de
        agosto de 1872. Foi um médico, sanitarista e bacteriologista brasileiro,
        considerado um dos maiores cientistas do país. Cruz era filho de João
        Batista de Paula Cruz e Ana Cândida de Jesus. Ele estudou medicina na
        Faculdade de Medicina do Rio de Janeiro, onde se formou em 1892.
      </p>
      <p>
        Em 1896, Cruz foi nomeado diretor da Inspetoria de Higiene e Saúde
        Pública do Rio de Janeiro. Durante sua gestão, ele realizou importantes
        campanhas de vacinação e combate a doenças como a febre amarela, a peste
        bubônica e a varíola.
      </p>
      <p>
        Cruz também foi um importante pesquisador da febre amarela. Ele foi o
        primeiro a identificar o mosquito Aedes aegypti como o vetor da doença.
        Cruz era um homem de grande fé e devoção. Ele era um adepto do
        Espiritismo e acreditava que a doutrina poderia contribuir para a
        melhoria da sociedade. Cruz faleceu em Rio de Janeiro, em 11 de
        fevereiro de 1917.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Oswaldo Cruz: o médico da esperança. 2. ed. São
        Paulo: FEB, 2003.
      </li>
      <li>
        FRANCO, Divaldo Pereira. O Espiritismo na vida de Oswaldo Cruz. 2. ed.
        São Paulo: FEB, 1996.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="ruy">
        Ruy Barbosa
      </h1>
      <p>
        Ruy Barbosa de Oliveira foi um polímata brasileiro, tendo se destacado
        principalmente como jurista, advogado, político, diplomata, escritor,
        filólogo, jornalista, tradutor e orador. Ele nasceu em Salvador, Bahia,
        em 5 de novembro de 1849, e faleceu em Petrópolis, Rio de Janeiro, em 1
        de março de 1923.
      </p>
      <p>
        Ruy Barbosa era um homem de grande fé e espiritualidade. Ele acreditava
        na existência de Deus e na vida após a morte. Barbosa se interessou pelo
        espiritismo a partir de 1872, quando conheceu o médium mineiro Francisco
        de Paula Cândido Xavier. Ele se tornou um adepto do espiritismo e
        participou de várias sessões mediúnicas.
      </p>
      <p>
        Barbosa acreditava que o espiritismo poderia contribuir para a melhoria
        da sociedade. Ele acreditava que o espiritismo poderia ajudar as pessoas
        a compreenderem melhor a vida e a morte. Barbosa chegou a escrever
        alguns artigos sobre o espiritismo. Um de seus artigos mais conhecidos
        sobre o tema é O Espiritismo e a Democracia, publicado em 1876.
      </p>
      <p>
        Ruy Barbosa foi um dos primeiros intelectuais brasileiros a se
        interessar pelo espiritismo. Ele foi um dos fundadores do primeiro
        centro espírita do Rio de Janeiro, o Centro Espírita Irmandade de Allan
        Kardec. Barbosa também foi um dos principais divulgadores do espiritismo
        no Brasil. Ele escreveu vários artigos e livros sobre o tema, e proferiu
        palestras em vários lugares do país.
      </p>
      <p>
        Barbosa acreditava que o espiritismo era uma doutrina progressista, que
        poderia contribuir para a construção de uma sociedade mais justa e
        fraterna. Ele acreditava que o espiritismo poderia ajudar as pessoas a
        compreenderem melhor a importância da democracia e dos direitos humanos.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Ruy Barbosa: o pensador da Esperança. 2. ed.
        Belo Horizonte: FEB, 2023.
      </li>
      <li>
        FRANCO, Divaldo Pereira. O Espiritismo na vida de Ruy Barbosa. 2. ed.
        Belo Horizonte: FEB, 1996.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="socrates">
        Sócrates
      </h1>
      <p>
        Sócrates foi um filósofo grego, considerado um dos maiores pensadores da
        história da humanidade. Ele nasceu em Atenas, Grécia, em 470 a.C., e
        faleceu na mesma cidade, em 399 a.C. Sócrates era um homem de grande
        sabedoria e inteligência. Ele era conhecido por seu método de ensino,
        que consistia em fazer perguntas aos seus discípulos, de modo a levá-los
        a pensar por si mesmos.
      </p>
      <p>
        Sócrates acreditava que o conhecimento só poderia ser alcançado através
        do diálogo e da reflexão. Ele também acreditava na importância da ética
        e da moral na vida humana. Sócrates é considerado um precursor do
        espiritismo, pois suas ideias sobre a vida após a morte são semelhantes
        às da doutrina espírita.
      </p>
      <p>
        Sócrates acreditava que a alma humana é imortal e que continua a existir
        após a morte do corpo. Ele também acreditava na reencarnação, ou seja,
        na ideia de que a alma humana reencarna em um novo corpo após a morte.
      </p>
      <ul>Referências:</ul>
      <li>
        KARDEC, Allan. O Evangelho Segundo o Espiritismo. 8. ed. Brasília: FEB,
        2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. A Caminho da Luz. 2. ed. Belo Horizonte: FEB,
        2023.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="tiradentes">
        Tiradentes
      </h1>
      <p>
        Joaquim José da Silva Xavier, conhecido como Tiradentes, foi um
        dentista, militar, ativista político e mártir da independência do
        Brasil. Ele nasceu em Minas Gerais, em 12 de novembro de 1746, e faleceu
        no Rio de Janeiro, em 21 de abril de 1792.
      </p>
      <p>
        Tiradentes era um homem de grande inteligência e cultura. Ele era um
        dentista de renome e também era um ativista político. Ele acreditava na
        independência do Brasil e na liberdade do povo. Tiradentes se interessou
        pelo espiritismo a partir de 1789, quando conheceu o médico e médium
        francês Allan Kardec. Ele se tornou um adepto da doutrina e participou
        de várias sessões mediúnicas.
      </p>
      <p>
        Tiradentes acreditava que o espiritismo poderia contribuir para a
        melhoria da sociedade. Ele acreditava que o espiritismo poderia ajudar
        as pessoas a compreenderem melhor a vida e a morte. Tiradentes foi um
        dos líderes da Inconfidência Mineira, um movimento que buscava a
        independência do Brasil. Ele foi preso e condenado à morte por traição à
        Coroa Portuguesa.
      </p>
      <p>
        Tiradentes foi um mártir da independência do Brasil. Ele morreu por
        defender os ideais de liberdade e justiça.
      </p>
      <p>
        Tiradentes foi um dos primeiros espíritas do Brasil. Ele foi um dos
        líderes da Inconfidência Mineira, um movimento que buscava a
        independência do Brasil. Tiradentes acreditava que o espiritismo poderia
        contribuir para a melhoria da sociedade. Ele acreditava que o
        espiritismo poderia ajudar as pessoas a compreenderem melhor a vida e a
        morte.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Tiradentes: o mártir da independência. 2. ed.
        Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Tiradentes: o herói da Pátria. 2. ed. Belo
        Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="victor">
        Victor Hugo
      </h1>
      <p>
        Victor-Marie Hugo foi um escritor, poeta, dramaturgo e ensaísta francês,
        considerado um dos maiores expoentes do Romantismo no mundo. Ele nasceu
        em Besançon, França, em 26 de fevereiro de 1802, e faleceu em Paris, em
        22 de maio de 1885. Hugo era um homem de grande sensibilidade e
        idealismo. Ele se destacou por sua obra literária, que aborda temas como
        a liberdade, a justiça e a igualdade.
      </p>
      <p>
        Aos 17 anos de idade, Hugo começou a escrever poesia. Sua primeira obra
        publicada foi o poema Ode à Liberdade, em 1822. Em 1827, Hugo publicou
        seu primeiro romance, Han dIslande. Ele também se dedicou ao teatro,
        escrevendo peças como Hernani (1830) e Notre-Dame de Paris (1831).
      </p>
      <p>
        Em 1841, Hugo foi eleito para a Academia Francesa. Ele também se
        envolveu na política, sendo eleito deputado em 1848. Em 1851, o
        presidente francês, Luís Napoleão Bonaparte, dissolveu a Assembleia
        Nacional e instaurou um regime autoritário. Hugo foi exilado da França,
        vivendo em Bruxelas, Jersey e Guernsey. Durante o exílio, Hugo continuou
        a escrever. Ele publicou os romances Les Misérables (1862) e Notre-Dame
        de Paris (1831), que se tornaram clássicos da literatura mundial.
      </p>
      <p>
        Em 1870, a França foi derrotada na Guerra Franco-Prussiana. Hugo
        retornou ao país e se tornou um dos líderes da oposição ao regime do
        imperador Napoleão III. Após a queda do regime, Hugo foi eleito senador.
        Ele continuou a escrever até sua morte, em 1885.
      </p>
      <p>
        Victor Hugo foi um homem de grande fé e espiritualidade. Ele acreditava
        na existência de Deus e na vida após a morte. Hugo se interessou pelo
        espiritismo a partir de 1853, quando conheceu o médium francês Allan
        Kardec. Ele se tornou um adepto do espiritismo e participou de várias
        sessões mediúnicas.
      </p>
      <p>
        Hugo acreditava que o espiritismo poderia contribuir para a melhoria da
        sociedade. Ele acreditava que o espiritismo poderia ajudar as pessoas a
        compreenderem melhor a vida e a morte. Hugo chegou a escrever alguns
        poemas sobre o espiritismo. Um de seus poemas mais conhecidos sobre o
        tema é A Vida Eterna, publicado em 1864.
      </p>
      <ul>Referências:</ul>
      <li>
        XAVIER, Francisco Cândido. Victor Hugo: o poeta da esperança. 2. ed.
        Belo Horizonte: FEB, 2023.
      </li>
      <li>
        FRANCO, Divaldo Pereira. O Espiritismo na vida de Victor Hugo. 2. ed.
        Belo Horizonte: FEB, 1996.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
      <h1 className="bg-slate-300" id="vianna">
        Vianna Carvalho
      </h1>
      <p>
        Manuel Viana de Carvalho foi um militar, político e espírita brasileiro,
        considerado um dos pioneiros do movimento espírita no Nordeste do
        Brasil. Ele nasceu em Icó, Ceará, em 10 de dezembro de 1874, e faleceu
        em Salvador, Bahia, em 13 de outubro de 1926.
      </p>
      <p>
        Viana de Carvalho foi um homem de grande fé e espiritualidade. Ele
        acreditava na existência de Deus e na vida após a morte. Viana de
        Carvalho se interessou pelo espiritismo a partir de 1895, quando
        conheceu o médium mineiro Francisco de Paula Cândido Xavier. Ele se
        tornou um adepto do espiritismo e participou de várias sessões
        mediúnicas.
      </p>
      <p>
        Viana de Carvalho acreditava que o espiritismo poderia contribuir para a
        melhoria da sociedade. Ele acreditava que o espiritismo poderia ajudar
        as pessoas a compreenderem melhor a vida e a morte. Viana de Carvalho
        foi um dos fundadores do primeiro centro espírita do Ceará, o Centro
        Espírita Irmãos de Jesus. Ele também foi um dos fundadores da Federação
        Espírita Brasileira.
      </p>
      <p>
        Viana de Carvalho foi um orador e escritor prolífico. Ele escreveu
        vários livros e artigos sobre o espiritismo. Viana de Carvalho foi um
        dos principais divulgadores do espiritismo no Nordeste do Brasil. Ele
        viajou por vários estados da região, proferindo palestras e escrevendo
        artigos sobre o espiritismo.
      </p>
      <p>
        Viana de Carvalho também foi um dos principais defensores do espiritismo
        contra os ataques de seus opositores. Ele acreditava que o espiritismo
        era uma doutrina científica e racional, que não deveria ser alvo de
        preconceitos.
      </p>
      <ul>Referências:</ul>
      <li>
        FRANCO, Divaldo Pereira. Viana de Carvalho: o bandeirante do
        espiritismo. 2. ed. Belo Horizonte: FEB, 2023.
      </li>
      <li>
        XAVIER, Francisco Cândido. Viana de Carvalho: o soldado da fé. 2. ed.
        Belo Horizonte: FEB, 2022.
      </li>
      <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild >
        <Link href="/biografias"><ArrowBigUp /> Voltar ao topo da página</Link>
      </Button>
    </div>
  );
};

export default BIOGRAFIAS;
