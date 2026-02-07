
const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbwWjSZ03wbnWtJMC-Twwz6r-Rw-vneZ3g9H5jDWWNTEvsJm72nJMwijzzc5Nac-WF4/exec";

const periodoSelect = document.getElementById('periodo');
const turmaGroup = document.getElementById('turmaGroup');
const turmaSelect = document.getElementById('turma');
const alunosGroup = document.getElementById('alunosGroup');
const listaAlunos = document.getElementById('listaAlunos');
const ocorridoGroup = document.getElementById('ocorridoGroup');
const providenciasGroup = document.getElementById('providenciasGroup');

// Turmas por período
const turmasPorPeriodo = {
  Manhã: 
  ["9º Ano A", "9º Ano B", "9º Ano C", "9º Ano D", "9º Ano E", "1ª Série A", "1ª Série B", "1ª Série C", "1ª Série D", "2ª Série A - Técnico", "2ª Série B", "2ª Série C", "2ª Série D", "2ª Série E - Técnico","3ª Série A - Técnico"],
  Tarde: 
  ["6º Ano A", "6º Ano B","6º Ano C","6º Ano D","6º Ano E","7º Ano A","7º Ano B","7º Ano C","7º Ano D","8º Ano A","8º Ano B","8º Ano C","8º Ano D","8º Ano E"],
  Noite:
  ["3ª Série A", "3ª Série B", "3ª Série C", "3ª Série D", "3ª Série E", "3ª Série F", "3ª Série G"]
};

// Alunos por turma
const alunosPorTurma = {
  // 6º Ano A
  "6º Ano A": 
  ["Amanda Silva Martinelli", "Alicia Aquino Araujo", "Allicy Oliveira Moraes Justino da Silva", "Ana Julia Felicio Ferreira", "Anna Leticia Viana da Rocha", "Beatriz Lima de Oliveira", "Brayan Marques de Moares", "Brenda Rafaely Silva Ferreira", "Bruno Gustavo da Silva", "Davi Santos de Santana", "Esther Kerges Taveira", "Giovana Melissa Henrique", "Gustavo Lino de Souza", "Isabelly Santiago Rios", "Katlyn Araujo dos Santos", "Laila Milene Figueiredo Duarte", "Laura Karellen da Silva Malaquias Mendes de Souza", "Laura Rodrigues Bastos", "Lorenzo Borges Pereira da Silva", "Luiz Eduardo dos Santos Duarte", "Manuela Ruiz Palacio", "Maria Fernanda Melo da Cunha", "Mariane Gabriela de Oliveira Gomes", "Matheus Sousa da Silva", "Melyssa Ferreira dos Santos", "Mykael Cristian Menezes de Souza", "Nicolas da Silva Santos", "Nycollas Santos Belo", "Raira Kelly Oliveira de Souza", "Rebeca Nira Ponte Lima", "Renan Soares de Oliveira", "Santiago Andres Munoz Rodriguez", "Sofhya Rodrigues Lacerda", "Sophia Godoi Mutai", "Sophya Emanuelly Sales Calazans", "Yasmin Pollyanna Santana de Melo", "Ycaro Henrique Assumpcao Pereira", "Yuri Ferreira Cordeiro dos Santos"],
  // 6º Ano B
  "6º Ano B": 
  ["Ana Beatriz de Carvalho", "Ana Clara Ramos da Silva", "Bianca Silva de Assis", "Brenda Pacheco Carvalho", "Davi Santos Brito", "Enzo Cardozo de Albuquerque", "Enzo Gabriel Amorim da Costa Porto", "Guilherme de Oliveira Guedes", "Gyan Araujo da Silva", "Heloisa Silva Anjos", "Isabelly Cristina da Silva Correa", "Ivy Chang de Araujo Clemente", "João Lukas Santana Silva", "João Miguel Dias de Souza", "Jordan Honorio Flauzino", "Julia Almeida Gabriel Cabral", "Julia Felix de Oliveira", "Kauan Davi Fernandes Pereira", "Karollaine Jasni Nascimento da Silva", "Lais Moreira de Oliveira", "Livia Cristina Reis Freitas", "Lorenna Farias Santana", "Lucas Caneschi Alves de Moraes", "Luciana Ospina Estrada", "Miguel Alves Santos", "Miguel do Nascimento Barboza", "Miguel Nunes Almeida", "Nathan Silveira Gonçales", "Nicolas de Faria Hernandes Duarte", "Nycolas Conceicao da Silva", "Paulo Davi Sousa Carvalho", "Paulo Henrique dos Santos", "Pedro Felipe dos Santos", "Raul Gomes da Silva", "Rebeca Quixabeira Avelino", "Samantha Perola Alves de Oliveira", "Sophia Rodrigues Brito", "Thales Brum", "Yasmin Meira dos Santos"],
  // 6º Ano C
  "6º Ano C": 
  ["Alejandro de Jesus Santos", "Analice Abrantes Sobrinho", "Ana Julia dos Santos", "Ana Vitoria Santos Almeida Guimaraes", "Andre Luiz Fontes Silva", "Andrew Daniel Goncalves de Almeida Silva", "Angelina Sanches Casar", "Anna Julia de Souza Barros", "Anthony Moura Ribeiro Lopes Silva", "Caua Claudio Pereira da Silva", "Davi Lucas Lima dos Santos", "Elloise Gabriela Dias Ribeiro", "Enzo Gabriel Oliveira de Souza", "Enzo Porto da Costa", "Gabriel Conceicao dos Santos", "Gustavo Almeida de Sousa", "Hester Alliende de Araujo", "Iara Bianca Abreu Correia Isaias", "Isabelly de Lima Vicente", "João Pedro de Lima Assis Alves", "João Victor Soares de Jesus", "Juliana Rosa Silva Araujo", "Kethellyn Vitoria Domingues Andrade", "Lara Silva", "Livia Carvalho Silva", "Lívia Cavalcante Rocha", "Maria Luiza de Souza Lima", "Maria Luizza Estevao Ferreira", "Melissa Fidelis Anselmo", "Myllena Sophia Castro de Jesus", "Raquel Noberto da Silva", "Samuel Caitano de Barros", "Samuel de Souza Rocha", "Sara Micaele da Silva", "Sofia Simone Bidinotto Loureiro Costa", "Victor Hugo Prates Alves da Silva", "Vitor Domingues da Costa", "Yasmin Ferreira Inacio"],
  // 6º Ano D
  "6º Ano D": 
  ["Ana Julia de Sousa Barboza", "Ana Livia Santos Silva", "Ana Luiza Siqueira dos Santos", "Anna Clara Mosso de Araujo", "Arthur Rocha da Silva Morais", "Bianca Rodrigues Setara Silva Santos", "Cecilia da Silva de Jesus", "Daniel Mendes Soares", "Davi Lourenzo Lima", "Ester Silverio Botelho", "Evellyn Emanuelly da Silva Medeiros", "Fhernanda de Souza Ferreira", "Gabriel da Silva Gomes", "Heitor Cavalcante Sobreira", "Heloisa Novais Souza", "Heloysa da Silva Capelli", "Heryck Oliveira da Silva", "Isabelly de Souza Macena", "Isnnayder Pereira da Silva", "João Vitor Ferreira da Silva", "Kael Hurga Ferraz", "Laura Vitória Alves Gomes", "Laysa Franca Matulevicius", "Luiz Miguel de Oliveira Basei", "Manuelly Silva Marques", "Marcella Heloisa Cillo", "Maria Clara Porto Moreno", "Maria Eduarda Santos Saquette", "Maria Luiza Silva Pinheiro", "Miguel Fernando Pereira Ferreira", "Murillo Miguel Abreu de Oliveira", "Nicole Elias Coimbra", "Pedro Leandro da Silva", "Rafael Ferreira Souza", "Rafael Vitor Rutter de Camargo Bueno", "Vitor Nunes dos Santos", "Yanny Raquel Pereira Freitas Silva", "Yuri Mendes Zuborewicz"],
  // 6º Ano E
  "6º Ano E": 
  ["Ana Clara dos Santos da Conceicao", "Ana Clara Santiago Fernandes", "Arthur dos Santos Zanin da Silva", "Arthur Goncalves Kaiser", "Arthur Miller da Silva", "Arthur Rodrigues Facine", "Brenda Goncalves de Oliveira", "Bruna Goncalves de Oliveira", "Caroline Gomes Lima", "Cecilia Alves dos Santos", "Davi Felipe Ribeiro", "Davi Ribeiro Santos", "Diogo Moreira Alves", "Geovana Beatriz Alves Goncalves", "Guilherme Oliveira Silva", "Gustavo Lorenzetti Pinheiro", "Henrique Figueiredo Porto", "Janaina Rubiano Hi", "Jhonatan Henrique Almeida Landa", "Jorge Francisco Bonifacio Marques", "Kaua Henrique Dionizio Jack", "Lara Rocha Souza", "Lavinia Rodrigues Souza", "Leandro Gabriel Souza Gomes", "Leonardo Brito Furtado", "Livia Alves de Santana", "Maciel Davi da Silva Oliveira", "Marco Aurelio Nascimento de Oliveira", "Maria Clara Ribeiro Fragnan", "Mayara Helloa Bispo de Almeida", "Miguel Flisch de Carvalho", "Miguel Gregorio Assumpcao", "Mitchel Lopes Santana", "Rafaella Bastos Campos Lira", "Samuel Machado de Oliveira", "Sophia Jovino de Oliveira", "Vinicius Leandro da Silva", "Vitória Gonçalves Ayosa"],
  // 7º Ano A
  "7º Ano A":
  ["Anna Julia Oliveira Kosaki Felix", "Bernardo Ferreira Menezes", "Christopher Oliveira da Silva Martins", "Davi Henrique Gonzaga Pereira", "Davi Lucca Santos Martins", "Davi Souza Barnete", "Danilo dos Santos Xavier", "Diogo Ferreira Menezes", "Diogo Sampaio Jerônimo", "Edson Antonio Martins dos Santos", "Enzo Garcia dos Santos", "Ester Luisa Rocha dos Santos", "Giovanna Souza Lopes", "Isabella Marques Macedo", "Isabelly Morais Zanovello", "João Victor Monção Requena", "João Vitor Martins", "Juan Ulisses Jack", "Kauan Henrique da Silva", "Larissa Gonçalves Serra", "Lavínia Almeida da Silva", "Lorena Dias Leandro", "Lucas Henrique de Camargo Santos", "Lucas Miguel da Silva Bernardes", "Luiz Felipe Romão Luzia", "Manuelle Vitória da Silva Dias Gil", "Maria Eduarda Vieira de Souza", "Mickael Machado Mendes de Souza", "Miguell Henrique Figueiredo Fernandes", "Mirella Lima dos Reis", "Mikaelly Goncalves Silva", "Pablo Acacio de Jesus Alves", "Pabllo Gomes Ferreira", "Patrícia Fernandes Barbosa Cratz", "Rebeka Menezes Oliveira Santos", "Sophia Alves da Silva", "Wender Gonçalves de França", "Wilson Junior Alves dos Santos"],
  // 7º Ano B
  "7º Ano B": 
  ["Ana Vitoria Lopes Bambach", "André Luiz Jesus Lima", "Carlos Eduardo Prado da Silva", "Davi Lucas Ribeiro Santos", "Davi Lucca Santos Bambach", "Davi Luis da Silva Moreira", "Davi Muniz Beltrão", "Enzo Lazauskas", "Erick Chaves dos Santos", "Esther Sofhie Melo Leal", "Felipe Mota Matos", "Fernanda dos Santos Pereira", "Gabriela Rodrigues da Silva", "Isabelly Ferreira Poncio Orvalho", "JoheyLin Alejandra Rada Lara", "Lorena Lavinia Amado Penteado", "Lorenzo Gabriel Azevedo dos Santos", "Luana Santos Zanella", "Matheus Alves Fernandes", "Matheus do Nascimento Lira", "Melissa Assumpção dos Santos", "Miguel Filipe Ferreira Delgado", "Murillo dos Santos de Almeida Rodrigues", "Murilo da Silva Sandes", "Nathally Vitoria Alves Ferreira", "Pedro Henrique Teixeira dos Santos", "Ryan Vitorio da Silva Bispo", "Samuel dos Reis Almeida", "Samuel Lopes Bartholomeu", "Sophia Aparecida Matos Vieira", "Sophia Bezerra da Silva", "Thiago Francisco dos Santos Silva", "Valquiria Dias de Souza", "Vitor da Silva Tineu", "Yasmin Fernandes da Silva"],
  // 7º Ano C
  "7º Ano C":
  ["Alexsandro de Almeida Mota", "Arthur Vieira Santiago dos Santos", "Benjamin Marques Mariano", "Bryan Henrique de Oliveira Rocha", "Davy de Morais Santos", "Emily Vitória Silva da Costa", "Gabriel Ramos Lopes", "Gabriel Silva Martinelli", "Gabryella de Sousa Pereira Cassiano", "Geovanna Moura dos Santos Almeida", "Gustavo Eduardo Freitas Pacheco", "Gustavo Felipe da Silva Pinheiro", "Gustavo Nascimento de Oliveira", "Hugo Gabriel Gomes da Silva", "Jeová Guilherme da Silva Zipf", "Juan Gabriel Alves Ferreira Dantas", "Leonardo Lima da Silva Pimenta", "Livia Cristina Pereira", "Lucca Neves Pereira", "Luiz Henrique Leonardi Santos", "Luiza Ferreira dos Santos", "Marcelo Henrique Azevedo dos Santos", "Marco Antonio Pereira da Silva", "Marcos Antonio Rodrigues Reis", "Matheus Tavares Moutnho", "Michel Rian Cardoso Farias", "Miriã da Penha Borges Magosso Fuser", "Nathally Nicole Souza dos Santos", "Nicolly Viana Malafaia de Souza", "Nycolas Brasil Evaristo Armejo", "Raquel Silva Barbalho", "Rebeca Silva Rodrigues de Oliveira", "Reynell Santiago Alba Farias", "Saymon Maxwell Coelho de Albuquerque", "Sofia Lorem Alves das Graças"],
  // 7º Ano D
  "7º Ano D":
  ["Analice Martins Oliveira", "Ana Júlia Ferreira Cardoso", "Angelo Fabricio Araujo Silva", "Arthur Gomes Cardoso", "Cesar Ribeiro Pires", "Davi Pietro Miranda Grandisoli", "Fabio Souza dos Santos", "Gabriel da Silva Ledo", "Gabriel Dias Rocha Santana", "Gabriel Gregorio Assumpção", "Gabriela Silva", "Helloysa Domingues", "Isaac Muniz de Lima Soares", "Isabelli Pereira de Souza", "Jeovana Vitória Aparecida Santos Ramos Silva", "Jhully Beatriz Amaral", "João Miguel Ferreira de Souza", "João Pedro Oliveira Fernandes", "Julia Laurentino Galdino", "Kauan Walter Ricas Alves", "Laura Eloa Duarte Ramos", "Levy Lima Muniz", "Lorena Martins Barbosa", "Maria Sofia de Souza Chaves", "Manuely Victoria Flores de Jesus", "Marvin Nicolas Lima da Silva", "Micael Ivo Moreira Dourado da Silva", "Natan de Menezes Silva", "Nicolly Yasmin Veras Bochnia Silva", "Pedro Henrique Cardoso de Queiroz", "Pedro Henrique da Silva Macena", "Rafael da Conceicao Costa", "Raphael Machado de Oliveira", "Sophia Lourenco da Silva Santos", "Yasmin do Nascimento Borges"],
  // 8º Ano A
  "8º Ano A":
  ["Allana Ruiz Parente", "Amanda da Silva Nascimento", "Ana Clara Frazao Zanon", "Ana Socorro Farias Rocha", "Ashley Vaca Salvatierra", "Cecilia Ketelen Alves das Gracas", "Daniel Yuri Rodrigues Silva", "Davi de Jesus da Silva Lemes", "Davi Santos Ferraz", "Davi Sergio dos Santos Ventura Machado", "Emilly Raianny Moraes Silva", "Gabriela Pedroso Laporti", "Giovanna Goncalves Tavares", "Guilherme de Menezes Oliveira Souza", "Guilherme Rodrigues Alves Silva", "Isaac Machado dos Santos", "Isabelli Tavares Martins", "João Pedro Alcantara Furtado", "João Victor Goncalves da Silva", "Kaic Antunes de França", "Kaua Yago Rodrigues Evangelista", "Kawanny Camargo Samora", "Luiz Felipe Alves Vieira", "Manuella Franca Ferreira", "Manuela Perez Siqueira", "Maria Clara Cerqueira da Silva", "Maria Luiza Sousa de Sena", "Marina Lima Pinheiro", "Marya Clara Goncalves Pereira", "Mateus Lyra Gomes dos Santos", "Pyettro Henrique Leal Silva", "Rafael Alcides Domingos Pereira", "Rafaela Felix de Oliveira", "Riquelme Pugliano de Aquino", "Ryan Domingues Santos", "Ryan Nunes Hermenegildo", "Victoria Lino de Sousa", "Wendell dos Santos Rodrigues"],
  // 8º Ano B
  "8º Ano B":
  ["Ana Luíza Teixeira dos Santos", "Arthur Schineider da Silva", "Brayan de Souza Silva", "Caio de Goes Cavalcante", "Cristoffer Pereira Abraão Rodrigues", "Daniela Sacramento Assunção", "Emanuella Souza da Silva", "Emilly dos Santos Silva", "Emanuelly Aparecida de Andrade Tupina", "Guilherme Paes Snec", "Guilherme Santiago Fernandes", "Hellen Nogueira de Carvalho Santana", "Hiago Luiz Casemiro da Cruz", "Jamily Vitória Christino da Silva", "João Gabriel da Costa Alves", "Julia da Silva Serafim", "Kaua Willian Silva", "Kauan Frutuoso de Carvalho", "Larissa Colombo Souza", "Lucas Gabriel da Silva Loebel", "Luiz Guilherme Antunes Ferreira", "Maria Clara Passos Augusto", "Maria do Rosário Castro Santos Cruz", "Maria Vitória Pereira da Silva", "Marianne Soares dos Santos", "Matheus Gabriel Bispo de Almeida", "Miguel Cheberle Rodrigues Brito", "Miguel Sousa Siqueira", "Murilo de Santana Senatori", "Pedro Henrique Carvalho de Oliveira", "Rute Maria da Silva Cunha", "Tiago Ferreira de França Coimbra", "Udson Mendes Andrade", "Victoria Lopes da Silva", "Wilson Alcântara Coutinho Silva", "Yasmim Mendonça Faria", "Ygor Luiz Joviniano Mendes", "Yourvensky Nat Ley Mondesir"],
  // 8º Ano C
  "8º Ano C":
  ["Alicia Oliveira Cavalcanti", "Arthur Bruno Souza Santos", "Barbara da Silva Mendes", "Brayan Bezerra Oliveira de Paula", "Carla Aparecyda da Silva Rodgerio Pires", "Davi Ferreira dos Santos", "Felipe Daniel Arruda da Silva", "Gabriel Costa de Sousa", "Gabriel de Oliveira Alves", "Gabriel Santiago Guaiquirian Maita", "Gabrielle Freitas Beliato", "Giovanna Marques Felles da Silva", "Ingrid Elizabete da Silva", "Isabella Alves Rozendo", "Isabella Enge Lopes", "Julia Rodrigues do Valle", "Kaleb Garcia Honório", "Larissa Vitoria da Silva", "Manuella Melo de Barros", "Maria Eduarda Souto Ribeiro", "Maria Lorena Santos dos Anjos Dantas", "Mateus Manoel de Alcantara da Silva", "Nathan de Jesus Dias", "Nicholas Siqueira Fernandes", "Nicole Moreira da Silva", "Nicolly Isabelle Alves Cavalcante Veras", "Pedro Henrique Rodrigues de Lima", "Pedro Vítor da Costa Nogueira", "Raffaela de Carvalho Teodoro", "Raphaella Ferreira Santiago de Oliveira", "Raphaella Pereira dos Santos", "Rayan Beatriz Marcolino Chagas", "Rafaella Sousa Arcanjo", "Sofia Costa Viana", "Suezia Lopes Santana", "Suzan Baptista de Araujo", "Vinicios da Silva Gabriel", "Willian Henrique Lourenco", "Yuri Ribeiro Silva"],
  // 8º Ano D
  "8º Ano D":
  ["Alan Oliveira dos Santos", "Alice Bianca Vieira Lopes", "Artur Dourado da Silva Ivo", "Beatriz Lima Gomes", "Bruno Lucca Marques Rocha", "Bryan Galvão Rocha", "Camila Ferreira Dias", "Camilly Vitoria Silva de Oliveira Jorge", "Carlos Eduardo da Silva Ferreira", "Cristiano Ronaldo Felício Ferreira", "Daniel Capusso Simões Rodrigues", "Davi Fernando Nascimento Lima", "Davi Silva Dutra Damasceno", "Davyd Andrade dos Santos", "Diogo Pietro Marques da Silva", "Eduardo Vargas dos Santos", "Emmily Vitoria de Arruda Moreira Santos", "Enzo de Souza Alves Calero", "Enzo Gabriel Santos Abranches", "Erick Akio Dalla Rosa", "Evelyn Carolyne Conhem dos Santos", "Heitor Oliveira Albano", "Helloyse Letícia da Silva Moreira", "Isaac Florêncio da Conceição", "Isadora Aparecida Vieira Luna", "Julio Cesar Fernandes Andrade", "Laura Alves Carneiro", "Manuela Ferreira Barbosa", "Miguel Leopoldo Costa", "Miguel Silva Santana", "Nathan Arturo Carvajal Torres", "Rafaela Ferreira Giannetti", "Rafaella Cunha Sousa da Silva", "Rafaella Serra Lima Luz Dias", "Rodrigo Marcio Oliveira", "Sophia Souza Borges", "Vitoria de Oliveira Dantas"],
  // 8º Ano E
  "8º Ano E":
  ["Allice da Silva Camargo", "Ana Luiza Alves", "Bernardo Alves da Silva", "Brenda Sofia Dias Santos", "Bryan Antonio Ferreira Queiroz dos Santos", "Camila Soria Arce", "Christopher Manoel Pereira de Souza", "Dandara Silva de Oliveira", "Daniel Oliveira de Lima", "Emanuelly dos Santos Souza Ribeiro da Silva", "Enzo de Morais Oliveira", "Enzo Gabriel Queiroz de Oliveira", "Enzo Lopes Vieira", "Erick Araujo dos Santos", "Fernanda Menezes Sampaio", "Gabriel Yoshiuki Omuri", "Gabrielly Alves Rosario", "Gusttavo Lacerda de Jesus", "Henzio Emanoel Lima Muniz", "Isabella Ferreira da Silva", "Julia Oliveira Silva", "Julio Cesar da Silva Lopes", "Kemilly Cabral de Morais Lima", "Larissa da Silva Martins", "Livia Mendes da Silva", "Maria Eduarda Faustino Mendes", "Marya Sophia Costa Machado", "Melyssa de Lourdes Rosario", "Miguel Silverio Botelho", "Nicolly Vitória Amorim Almeida", "Rafael Willian Estevam de Souza", "Rafaela Marques Paulino", "Raul Gustavo Lima da Silva", "Richard Andrade da Silva", "Victor Ferreira Lacerda", "Victor Hugo Campos da Silva", "Yasmin Zanette Rodrigues"],
  // 9º Ano A
  "9º Ano A":
  ["Alicy Nicolly Melo da Silva", "Alyce Pereira da Silva", "Camila Gomes Ferreira", "Caroline Bach Santos Preis", "Cauã Riquelme de Oliveira", "Eduardo Luan Marques da Silva", "Esther Lopes da Silva", "Evellyn Ribeiro da Costa", "Fernando Siqueira Cavalcante Silva", "Flávio Rodrigues Sampaio Moreira Júnior", "Guilherme Domingues da Costa", "Gusthavo Gabriel Ferreira de Oliveira", "Isaac Daniel Carvalho de Souza", "João Henrique Amorim Monteiro da Silva", "João Pedro Rissi", "Jonathan Morais Barreto", "Julya Silva Alves da Costa", "Kaique Eduardo de Oliveira dos Santos", "Kethelyn Albuquerque da Silva", "Kevin Ramos Carrasco", "Larissa Botelho Ramos", "Lauren Fernanda da Silva Lima", "Lorena Roberta da Silva Rocha", "Lucas Turvollo de Sales", "Maria Eduarda de Assis Santos", "Maria Luiza dos Santos Gomes", "Mylena Guimarães", "Nataly Pereira Fernandes", "Nicolly Ribeiro Queiroz Silva", "Priscila Vitória Amorim Monteiro da Silva", "Raphael Pereira Lacerda", "Ryan Ramos Ferreira da Silva", "Sarah Freitas da Mata", "Sérgio Henrique de Oliveira Brito", "Sophia Maria Gonçalves Silva", "Tiago Flausino Pereira", "Tiffany Mariane Silva Meira", "Wendell Samuel Viana da Silva"],
  // 9º Ano B
  "9º Ano B":
  ["Anna Eloíza Melo de Freitas", "Barbara Silva Pardini", "Breno Rodrigues Dourado", "Davi Viana Cabral de Morais", "Eduardo Rodrigues de Lima", "Eduardo Teixeira Neto", "Felipe Berbel Rabelo", "Guilherme Andrade Quirino", "Helena Fernandes Ferreira", "Isaac Vieira Soares", "Izadora Lima Duarte", "Julia de Almeida", "Julia Fidalgo Meirelles Marques", "Julia Lima Mendes", "Jullio Cesar Silva Rocha", "July Caneschi Alves de Lima", "Julia Xavier da Silva", "Kauany da Silva de Carvalho", "Kaue Victor Lima Prestes", "Livia Vitória Pereira Entreportes", "Lucas Cardoso da Silva", "Lucas Moreira de Oliveira", "Lucas Silva dos Santos", "Manuela Fidelis Anselmo", "Manuella dos Santos Profeta", "Mateus Koichi Kobashigawa Ramos", "Miguel Emygdio Gomes do Nascimento", "Raphael Andrade Lima", "Samantha Dantas de Calda Oliveira", "Samira da Conceição da Silva", "Samuel Brayan de Albuquerque de Meira", "Samuel Venâncio de Medeiros", "Sarah Cristina Fontalva da Silva", "Sophia Aparecida Sabino da Silva", "Yasmin Gomes de Lima", "Yasmin Vilas Boas Silva"],
  // 9º Ano C
  "9º Ano C":
  ["Adrielly Aparecida de Freitas da Silva", "Agatha Vitória Correia Martins", "Amanda Lima Matos", "Beatriz Ferreira Menezes", "Bryan Viegas Izidoro", "Cauã Harmuch dos Santos", "Daniel Alves Sodré", "Eduardo Ramalho de Oliveira", "Emanuel de Souza Silva", "Emanuele Francisca Braga de Almeida", "Erick da Silva Bomfim", "Gabriel Magalhães Rodrigues", "Gabriela Elias Coimbra", "Gabriela Venâncio de Medeiros", "Guilherme Campelo de Carvalho", "Lara Almeida Santos", "Laura Claudino dos Santos", "Lorena Vitória Céspedes Herrera", "Luiza Pereira de Araujo", "Maria Carolina Nino de Oliveira Fetal", "Maria Eduarda Rodrigues Santos", "Maria Júlia Ferreira Bento", "Miguel Costa Comparoni", "Nicolas Rufino Alencar", "Pedro Henrique da Silva", "Rebeca Bricola Crestani de Oliveira", "Ryan Estrela Almeida de Aguiar", "Samuel Santos de Almeida", "Sarah Cristina Nizete Souza", "Victor Bezerra Pequeno", "Vitor Dourado da Silva Ivo", "Vitor Gabriel Alves dos Santos", "Vitor Vasconcelos Virolezi", "Wagner de Oliveira Mariano", "William Pardini Barbosa", "Zahraa Kazwini"],
  // 9º Ano D
  "9º Ano D":
  ["Ana Júlia Gomes de Souza", "Andre Luís da Silva", "Anna Júlia Ribeiro Leite", "Carlos Alberto Silva de Jesus Júnior", "Cristopher Henrique Maurício Avelino", "Eloany Maria da Silva", "Emelyn da Silva Conceição", "Ester Lima Fonseca Teles", "Fernanda Alves da Silva", "Gabriel Augusto Andrade Ribeiro", "Gabriella Barbosa de Alencar", "Gustavo Mikau Serra Lima Luz Dias", "Isaac Scarpim Campos", "Isabelle de Souza Matos", "Júlia da Silva Hernandez", "Kauany Alves de Araujo", "Laura Rodrigues Ximenes", "Laura Vanessa da Silva Jesus", "Leandro Fernandes Lemes dos Santos", "Luís Matheus Oliveira da Silva", "Maria Eduarda Rigo Gomes", "Mariana Santos da Silva", "Marina Silva Ferreira", "Marya Klara da Silva Alves Rocha", "Miguel Santana Gomes", "Nicollas Cavalcante Luna Silva", "Pedro Henrique Batista Silva", "Raphaella Morais dos Santos", "Ricardo da Silva Lima Becyk", "Sara Alves dos Santos", "Thamyris de Souza Gomes", "Valentyna Cardoso de Amarante", "Verónica Kerges Taveira", "Víctor Amado Penteado", "Vitória Rodrigues Silva"],
  // 9º Ano E
  "9º Ano E":
  ["Aisha Izídio da Silva", "Aline Oliveira de Brito", "Alison Felipe Maximiano dos Santos", "Camila Vitória Nascimento de Carvalho", "Daniel Guimarães Martins", "Eduardo Augusto Zanella", "Eduardo Henrique de Souza Silva", "Felipe Santiago Ramos", "Gabriel Almir Melo Cortez", "Gabriel Ferreira dos Santos", "Gabriel Leite Prisco", "Gregory do Nascimento Rolan Campos", "Guilherme da Silva Serafim", "Guilherme Silva do Nascimento Roque", "Guilherme Tozeli Gomes", "Josué Meukizedeck José dos Santos Silva", "Júlia Lima de Souza", "Laura Guimarães", "Lívia Santos Oliveira", "Luana Bonifácio Santos", "Lucas Silva dos Santos", "Luna Novaes de Souza", "Mariana Ferreira Carmo", "Mateus Pires Novais", "Miguel Maia Assis Vieira", "Murilo Kayo Ferreira Barbosa", "Pedro da Silva Souza", "Pedro Martimiano Barbosa", "Raphael Vetrani Ferreira", "Sofia Correia da Fonseca Sampaio", "Sophia Canelo da Silva", "Suhellen Martins da Conceição", "Vitória da Silva Ferreira Lima", "Wellton André Diniz Sousa Júnior", "Wykläffy Renan Nunes de Souza", "Yasmin Dias Oliveira"],
  // 1ª Série A
  "1ª Série A":
  [],
  // 1ª Serie B
  "1ª Série B":
  ["Antonio Joaquim Mendes Rocha", "Barbara Alexandra Sobrinho Porto", "Beatriz Freitas Baptista", "Daniel Freitas Beliato", "Davi Alves Pereira Caldeira", "Davi Lima Mendes", "Eduardo Arruda Gonçalves", "Eduardo Lima Pinheiro", "Emanuelle Vittoria Silva de França", "Emilly Gabrieli de Sousa da Nóbrega", "Erick Sousa Santana", "Ester Dantas Silva", "Fabiano Fernandes Moreira", "Fernanda Melissa Covo Chaves", "Gianna Bárbara de Azevedo Bonacio", "Giovani Lucas Silva Gomes", "Guilherme Ribeiro Santos da Rocha", "Heloisa do Prado Florentino Nascimento", "Isabela Livino Lopes", "Juliano de Deus Chagas", "Kathllen Eduarda da Silva Malaquias Mendes de Souza", "Kauany Prado Delduque de Araújo", "Leonardo Matheus Wares Florêncio", "Lorenzzo Bessa Ferreira da Silva", "Lucas Barreto Rocha", "Lucas Oliveira de Melo Silva", "Lucas Souza Leal", "Luiza Rosa de Almeida Neves", "Maisa Araújo e Silva", "Marcelo Heron Oliveira de Santanna", "Maria Eduarda Araújo Rodrigues da Silva", "Maria Evelyn Alberto de Souza", "Maria Luiza de Carvalho Godoy Moreira", "Nicole Rodrigues Silva Lima", "Nycolle dos Santos Pereira", "Pedro Henrique Alves Pereira", "Pietro Fernandes Veloso da Silva", "Rafael Amorim de Camargo", "Rafaela Ferreira Guelfi", "Ryan de Araújo Sousa", "Sarah Suelen Soares dos Santos", "Stefani Soares Teixeira Santos", "Yago Araújo da Silva Campos", "Yasmim Karolayne Peixoto da Silva"],
  // 1ª Série C
  "1ª Série C":
  ["Aghatta Lima Breves da Silva", "Ana Júlia Seles Rocha", "André Resende Siqueira", "Arthur Henrique de Souza Silva", "Davi Siatiquosque de Souza", "Ester da Cruz Ferreira", "Evellyn da Silva Souza", "Fabrício Holanda Santos", "Gabriel Pedro dos Santos", "Giovanna Oliveira", "Guilherme Souza Mendes", "Gustavo Henrique Saraiva do Nascimento", "Gustavo Henrique Silva de Oliveira", "Isaac Araújo", "Isabella Souza de Oliveira", "Isabelle Cristine Oliveira Proença", "José Arthur Nunes da Silva", "Júlio César Oliveira", "Karina Vitória Inocência Floresta", "Lara Souza Santos", "Larah Eduarda dos Santos de Almeida", "Laura Silva Mendes Almeida", "Letícia Cristina Lúcio Firmino", "Lívia Menezes Gonçalves", "Lucas Marques Macedo", "Manuela Machado de Oliveira", "Marcela de Almeida Marques", "Maria Brena da Silva Sales", "Matheus Ricardo Barbosa Silva", "Melyssa Mota Matos", "Michel Cabral de Morais", "Murilo Cavalcanti Silva", "Nathan Cruz da Silva", "Nicolas Santos Oliveira Célio", "Nicole Ferreira dos Santos", "Pedro Cordeiro Costa", "Pedro Henrique de Carvalho", "Pedro Henrique de Melo da Silva", "Pedro Leandro da Silva", "Rhayane Camilly Pereira dos Santos", "Samuel Ferreira Perru", "Victor Gabriel Peruibe Torres", "Victor Rafael Marques Meira", "Vitoria Izadora dos Santos", "Vitória Eduarda dos Santos Santana", "Vivian Machado Mendes de Souza"],
  // 1ª Série D
  "1ª Série D":
  ["Adson Kaick dos Santos", "Alan Cardoso dos Santos", "Alice Emanuelly Mesquita Oliveira", "Anderson Ryan Araújo Gomes", "Arthur Pereira Santana", "Braian da Silva Mendes", "Breno Pereira de Albuquerque", "Bruna Oliveira do Rosário", "Carlos Eduardo Mendes de Freitas", "Clementina Lumene Masila", "Daniel Victor Santana de Azevedo", "Davi Eduardo Duarte Presser", "Davi Marques Mariano", "Davi Miranda de Almeida", "Davi Pereira Gomes Silva", "Eluany Vitória Avença Rodrigues", "Emanuelly Rivera dos Reis", "Enzo Almeida Lima", "Gabriel Cassemiro Quintiliano", "Gabryel Kelvin Sales Guimarães", "Giovana Gabriela Milaceno Gimenes de Andrade Ferrari", "Giovanna Fernanda Marcondes dos Reis", "Guilherme Henrique de Oliveira Caparroz", "Hevellyn Beatriz Souza Oliveira", "Hiago Rincon da Silva Arrais", "Julya Santiago Costa", "Kawana Barbosa Santiago Santos", "Lorena Bittencourt Silva", "Ludmilla Alves da Silva", "Luis Levi Alves Silva Santos", "Maria Clara Monteiro Gonçalves", "Mariana Santos Paes", "Mayte Mendes dos Anjos", "Natan de Melo Setubal", "Nathaly Oliveira Germiniasi", "Nicole Geremias dos Santos", "Nicollas Caique Flausino Caveda", "Paulo Henrique Pessoa da Silva", "Raquel Teixeira Baia", "Rayla Emanuelle Ribeiro Nascimento", "Sabryna Ramos Caetano", "Samuel Diogo da Silva", "Thalyta Antunes Moreira", "Vanessa Alves Rodrigues Santos", "Yasmin Chiyoko Castro Prado"],
  // 2ª Série A - Técnico
  "2ª Série A - Técnico":
  ["Agatha Rocha da Silva Morais", "Ana Clara Constantino dos Santos De Alecinios", "Ana Clara Souza Calli", "Ana Luiza Ferreira Arrais", "Antony Mateus Farias Borralho", "Antônio Carlos Jarrusso", "Arthur Fialho de Oliveira", "Bárbara Dias Veras", "Brayan Jesus Gomes Ferreira da Silva", "Bruna Conde", "Clara Angélyca Da Silva Rodgério Pires", "Daniel Ramos Carrasco", "Davi Soares Lins", "Enzo de Souza Rodrigues", "Francisco Eduardo Patez Valões", "Gabriel da Silva Pessoa", "Guilherme Castillo de Souza", "Gustavo de Oliveira Frederico", "Gustavo Henrique Santana De Castro", "Henrique Pereira Abrahao Rodrigues", "Julia Roberti Bine", "Kauã Teles Dos Santos", "Kelvin Adriano Oliveira da Silva", "Kevyn Gabryel Amorim dos Santos", "Marcos Daniel Oliveira Silva", "Mariana Viana de Lima", "Matheus Alejandro Delfino Ginocchio", "Miguel Lopes da Silva", "Miguel Mota Matos", "Nicolas Gabriel Silva Camara", "Pedro Enrique dos Passos Oliveira", "Pietro Almeida Moreira", "Rafael Nunes da Silva", "Raílan Santos Silva", "Renan Ferreira dos Santos", "Renata Agatha Alves de Oliveira", "Riquelme de Souza Oliveira Santos", "Victor Gabriel da Silva", "Vinicius Jose de Lima", "Vitor Gabriel Silva dos Santos", "Viviane dos Santos Pereira", "Yago Gabriel Carnevale de Paula"],
  // 2ª Série B
  "2ª Série B":
  ["Amanda Alves Santos", "Arthur Martins Maximiano", "Caren Letícia Figueredo de Lira", "Davi Doranhes Saraiva", "Davi Rodrigues Martins da Silva", "Eduardo Lima Gregório Dantas", "Emili Lainara Souza Rodrigues", "Emily Ribeiro Vetrani", "Fernanda Novais Lima", "Flávya Gonçalves dos Santos", "Gabriel Oliveira Santana", "Gabriel Vicente dos Santos de Oliveira", "Gabrielly Guedes Martins", "Geovana Amaral Castiliao", "Geovanna Alves de Santana", "Gustavo da Cruz dos Santos", "Henzo Amorim de Paula dos Santos", "Ilane Vitória Nascimento Vieira", "Isabella Lima dos Santos", "Isabelle Mourato de Moura", "Jennifer Lauany Burjaques Cirino", "Julia Comanas da Silva", "Juliana Rodrigues Mendes dos Santos", "Lorena de Souza Silva dos Santos", "Lorrane Vitória da Silva Bispo", "Luan Rubens Martins da Silva", "Marcos Paulo Godoi Marinho da Silva", "Maria Eduarda Freitas Pacheco", "Marianne Santos", "Marjorie Cavalcanti de Lucca", "Nicolas Lima Vilas Boas", "Pietra da Silva Araújo", "Rafaela Kobashigawa", "Rayssa Rayanna Alves dos Santos", "Renata Fagundes de Almeida", "Sofia França Cipola", "Victor Hiroshi Tamashiro Labonia", "Victor Hugo Almeida da Silva", "Vitória Ribeiro de Lima", "Yasmim Luana Vilela dos Santos Ferreira", "Yuri Gabriel Rodrigues de Oliveira"],
  // 2ª Série C
  "2ª Série C":
  ["Arthur de Almeida Dias", "Davi Alves Figueiredo", "Davi de Souza Benedito", "Davi Matheus Paschoal de Abreu", "Davi Silva dos Santos", "Emilly Larissa Pardini de Souza", "Enzo Santana Grilli", "Ester Borges de Oliveira", "Evelyn Ambrósio dos Santos Lica", "Gabriel Bezerra da Silva Feitoza", "Gabriel Laporti Galdino", "Gabriella Batista da Silva", "Gabriella Ferreira dos Santos", "Gustavo Sérgio Botelho Ramos", "Heloisa Vitória Nunes Bezerra", "Izabela Rodrigues da Silva", "Jonathan Souza dos Santos", "Júlia dos Santos Rodrigues", "Julia Marques Cabral", "Kaique Eliazar Pereira Quevedo", "Kaique Felix da Silva", "Ketlyn Eduarda Alves dos Santos", "Kewyn Cruz Santos", "Leticia dos Santos Silva Ferraz", "Levi Fernando Rodrigues", "Lucas Pereira", "Maria Clara Rubiano Hi", "Marya Eduarda Aparecida dos Santos Conceição", "Mayara Gomes Lucas", "Maysa Silva Tavares", "Nicolas Gabriel dos Santos Silva", "Octavio Fidelis de Abreu", "Otavio Ramos Meira", "Pedro David Viana Ribeiro", "Pedro Henrique Cavalcante Chicolet", "Pedro Henrique Pott de Sousa", "Peterson Kaique Tavares Sousa", "Pyetra Sophia dos Santos Cruz", "Sara Vitória Sousa Silva", "Sidney Gabriel de Sousa Souza", "Vitor Hugo dos Santos", "Vitória Reinaldo de Lima Ferreira", "Yasmin Cristina da Silva", "Yasmin Ramos de Jesus"],
  // 2ª Série D
  "2ª Série D":
  ["Alessandra Gomes da Silva", "Anthony Rhyan de Sá Aredes", "Antonio Deyvison Alves Silva", "Beatriz Silva de Carvalho", "Cecilia Simphronio", "Claryssa Vitória Ferreira Alencar", "Davi Aragão de Oliveira", "Davi de Albuquerque Jordão", "Denys Manoel Silva", "Eder Henrique Nogueira dos Santos", "Eric Renato da Silva", "Guilherme Navarro Silva", "Hugo Marcelo Chaves dos Santos", "Ingridy Pereira Fernandes", "Isadora Duarte França", "Jean Vitor Ribeiro", "João Vitor Pereira de Souza", "Juan Maicol Maydana Nancuante", "Kaua Jose Atanazio dos Santos", "Kauã Marques Macedo", "Kauan Almeida Santos", "Lara Aparecida Cardozo de Albuquerque", "Manuella Lourenço da Rocha", "Marcos Vinícius Bezerra Ferreira", "Micael Pereira da Silva", "Michelly Lopes França", "Miguel Ramos Paiva", "Nicoly de Oliveira Bezerra", "Otavio Henrique de Souza Smid Correia", "Paulo Henrique Maia", "Rafaella Oliveira Costa", "Raissa Belgara Santos", "Rodrigo Aparecido de Freitas Silveira", "Ryan Gabriel de Oliveira", "Samara Freitas Cardoso", "Samuel Silva Nunes", "Talita Alves dos Santos", "Vitória Silva de Sousa", "Vivian Oliveira Martins", "Wellyngton Alcântara Coutinho Silva", "Yasmim Adriano Rodrigues", "Yasmim Ponce de Mello"],
  //2ª Série E - Técnico
  "2ª Série E - Técnico":
  ["Alexya Damasceno Vilela", "Ana Beatriz Ferreira Carmo", "Ana Carolina Lima Xavier", "Anna Julia Camargo Samora", "Antonio Eryck Barrozo De Sousa", "Bianca Da Silva De Jesus", "Carolinne Pereira Dos Santos", "Davi Neemias Verçosa Vieira", "Eduarda Vitoria De Oliveira Vieira", "Eduardo Sena Da Silva", "Eduardo Silva Dos Santos", "Gabriel Dos Santos Oliveira", "Gabriel Nascimento Silva", "Gabriely Do Nascimento Oliveira", "Guilherme Paulo Silva", "Gustavo De Almeida Silva", "Hellen Guedes De Carvalho", "Isabelly Piettra Vilela Dos Santos Nascimento", "Isabella Souza Dos Santos", "Isaque Ramos Novais", "Joao Vitor De Oliveira Romualdo", "Jonas Rosendo Dos Santos Bento", "Jonathan Exaltação De Souza", "Leticia Guedes De Carvalho", "Luisa Oliveira De Sousa", "Luisa Victoria Gomes Da Silva", "Luiz Henrique Antunes Ferreira", "Maria Luisa Ribeiro Cruz", "Mariana De Jesus Lopes", "Matheus Nascimento Venancio Rosa Da Silva", "Murillo Cardosino Da Silva", "Nicoly Cadengue Da Silva", "Nicoly De Araujo Magela", "Pedro Henrique Souza Delfino", "Rafael Matsubara De Souza", "Rafaela Lima Coutinho", "Rafaella Maria De Novaes", "Sophia Freire Santos", "Taylor Oliver Genoso De Souza", "Tiago Emanuel Alcantara Menezes", "Weza Thomaz Porto"],
  // 3ª Série A - Técnico
  "3ª Série A - Técnico":
  ["Arthur Henrique Carmo Mafra", "Daniel de França Silva", "Danielly Duarte de Lima", "Diego Lima Dias", "Ermaylie Mondesir", "Fernanda Cipola", "Giovanna Ferreira Scher", "Guilherme Vasconcelos Rodrigues", "Gustavo Ferreira dos Santos", "Ingrid Eduarda Damascena Serejo", "Isabel Soares Alves", "Joyce Caroline Santos de Oliveira", "Julia Cipola", "Julio Miguel Santos Silva", "Laura Maria da Silva Ferreira", "Leonardo Lemos Galvão", "Luiz Fernando Pereira Sales", "Maria Eduarda Alves de Sousa", "Maria Eduarda de Souza Jesus", "Rebeca dos Santos Pereira", "Samuel dos Santos", "Vinicius Soares da Silva", "Willian Carvalho Rocha"],
  // 3ª Série A
  "3ª Série A":
  ["Ana Clara Guerra Martins", "Ashley Silva Camara", "Beatriz Ferreira de Souza", "Beatriz Macedo Camillo", "Brayan Serra de Oliveira", "Bruno de Oliveira Alves da Silva", "Emilly Vitória do Nascimento Bueno", "Eros Sales Pereira Teles", "Esther Flausino de Carvalho Nunes", "Fabricio Eduardo Geraldo dos Santos", "Felipe Ourbonas de Campos Araujo", "Gabriel Santos Flor", "Gabrielly de Almeida Romão Paiva", "Giovana Brasil Nunes", "Giovanna Sampaio Abrantes", "Gustavo Pereira dos Santos", "Israel Zanato Marinho de Andrade", "Julia Jannini", "Kamilla Beatriz Bispo Osmar", "Kamilla Sousa de Santana", "Kamilla Vitória Nabilly Moreira", "Katia Binda Kisiemina Mbambi", "Kaua Correia Xavier", "Kauane Vitória Araújo Maciel da Silva", "Keven Lopes da Silva", "Kimberly Gonzalez dos Santos", "Kyara Eshylen Gomes Lima", "Larissa dos Anjos Ferreira Calais", "Lhyorani Kivi Campelo Santos", "Lucas Joaquim Marques Mota", "Marcos Vinicius Dias Leandro", "Maria Eduarda de Araujo", "Matheus Ramos Dias", "Nathalia Flausino Cesar Ribeiro", "Nicolly Ferreira Gonçalves", "Pedro Henrique Sampaio Cordeiro", "Thiago Mendes Sanchez", "Victor Hugo Ferreira dos Santos", "Veronica Diambote Kisiemina Mbambi"],
  // 3ª Série B
  "3ª Série B":
  ["Ana Naomi de Oliveira", "Bianca Barbosa dos Santos", "Cristian Ruivo Bassi", "Daniel Rodrigues Costa", "Debora Gabriely Ferreira Porto", "Edielson Ferreira dos Santos", "Fabricio Barciela Deliesposti Aguiar", "Gabriel Fraifer Costa", "Gabriel Vinicios Oliveira da Silva", "Gabrielly Victorino de Assis", "Guilherme Borges de Oliveira", "Gustavo de Amorim Daguano", "Gustavo Freitas Beliato", "Henzo Rocha da Silva", "Isabelli Sousa de Campos", "Julia Lima de Jesus", "Kaio Coutinho Ferreira", "Kauan Alvarenga dos Santos", "Kauane Silva Vilas Boas", "Kevyn Guedes Araújo", "Kyara Ferreira de Jesus", "Larissa Barbosa Santos da Silva", "Leticia Barreto da Silva", "Lincon Massiço Augusto Viera", "Luan Santos de Oliveira", "Lucas Araújo Carvalho", "Lucas Hiago Viana Malafaia", "Maria Clara Silva do Monte", "Maria Fernanda Costa Pombo", "Mariane Batista Rodrigues", "Matheus Magnani Cardoso", "Matheus Rodrigo dos Santos", "Nicolas Vieira Damaceno Santana", "Nicole Ferreira de Oliveira", "Nicolly Novickas Neres", "Pedro Mendes Duran Franco", "Rebeca Micaeli da Silva", "Roberta Barreto da Silva", "Roberta Yasmin Cruz", "Ryan Anry Machado dos Santos", "Weslley Henrick Botelho de Souza Martins", "Willian Kauã de Souza Matias", "Yago Vitor da Silva Máximo"],
  // 3ª Série C
  "3ª Série C":
  ["Alaide Santos Souza", "Alice de Leão do Nascimento", "Ana Carolina da Silva Araújo Primo", "Ana Lucia Maximiano Bezerra", "Arthur Simão de Oliveira", "Beatriz Torezan Benitez Rodrigues", "Bianca Guimarães Silva", "Caroline Trindade Araújo", "Daniel Gomes Fujihara", "Davi Fontes da Silva", "Emily Santana da Silva", "Emylli Rosa Lima Silva", "Gabriel Fernandes da Silva Lúcio", "Guadalupe Rosário Maydana Nancuante", "Henrique Manoel Carvalho da Silva", "Henzo Andrade Ramos dos Reis", "Hugo Pereira Santiago", "Isabelly Kimberly Gonçalves Pereira", "Julya Borges Araújo dos Santos", "Kaique de Oliveira", "Kauê Santos de Souza", "Lauanny Vicente da Silva", "Lauriety Oliveira Xavier", "Leticia Sá Azevedo da Silva", "Maria Clara Ferreira Carmo", "Maria Eduarda Nobre dos Santos Braz", "Mariana Ramos dos Santos", "Marina Barbosa Lobato", "Mateus Nogueira dos Santos", "Matheus Lima Gomes", "Pedro Otavio Martins Fagundes", "Rauan Ferreira dos Santos", "Renato Barbosa Ferreira", "Rhyanna Oliveira de Mello", "Samuel Mauro Ribeiro Novaes", "Sarah Macário Silva", "Sarah Raimundo Cassiano", "Sophia de Farias Lourenço", "Ueny Vitória Mendes Andrade", "Vinicius Eduardo Oliveira", "Vinícius Eduardo Santos Lima", "Vinícius Siqueira Caetano", "Vinicius Vitor Machado"],
  // 3ª Série D
  "3ª Série D":
  ["Alessandra Fernandes Moreira Rodrigues", "Aline Rosario da Cunha", "Ana Clara Conceição Falconi da Silva", "Anna Beatriz Lima dos Santos", "Anthony Ferreira Bernardes", "Bianca Leandro Beserra", "Briane Berbe da Silva", "Brunno Ferreira Bernardes", "Diogo Lopes França", "Eduardo Martins Cirino Moraes", "Ellen Jassyara Rodrigues de Souza Vaz", "Erick Marques Alfredo", "Erik Silva Diniz", "Fabrício Fernandes Barbosa", "Franciele Braga de Almeida", "Gabrielle Farias de Oliveira", "Giovanna Viana de Toledo", "Gustavo Pereira Santiago", "Isabela de Abreu Félix", "Jhonny Crhistof da Silva Oliveira", "João Vitor Moreira Cardoso Guimarães Barbosa", "Julia Porfirio Castro", "Juliana Queiroz Sato", "Kawã Barbosa", "Kleyton Silva dos Santos", "Laysa Emanoely dos Santos", "Leonardo Fábio Rodrigues Severino", "Livia Daniela Lúcio Firmino", "Lívia de Araújo Bispo", "Leticia Vitoria Reginaldo", "Maria Eduarda Claudino Santos", "Maria Eduarda Gomes de Barros", "Matheus Santos de Almeida", "Pedro Henrique Gomes da Silva", "Pedro Henrique Ribeiro dos Santos", "Raiany Hilary Alves dos Santos", "Raissa Amado Azevedo", "Rychard da Rocha Pereira", "Sisley Jamile Pereira Gomes", "Thaillany Santos", "Victor Hugo Souza da Conceição", "Vitória da Silva Nunes", "Yasmim Cerqueira Assunção"],
  // 3ª Série E
  "3ª Série E":
  ["Amalia Eduardo de Assis Ramos", "Alice Cruz Piglieri", "Ana Beatriz dos Santos", "Ana Clara Lopes Vieira", "Ana Luisa da Conceição Pereira", "Arthur de Oliveira", "Brayon Felipe de Lima", "Brenda Vilas Boas Silva", "Daniel Martins Borba", "Eduardo Lima da Silva Pimenta", "Eloysa Amabily Santos Pereira", "Enzo de Araujo Sabino do Nascimento", "Éryk Gustavo de Souza Lima", "Gabriel Dias de Sousa", "Gabriela Pestana Zanin da Silva", "Giovana Kosaka da Silva", "Giovana Queiroz Sato", "Gustavo Borges Paulino da Silva", "Heitor Reis Spinardi", "Isabela Lima Oliveira", "Isabella da Conceição Costa", "Joao Paulo da Silva de Lima", "Joao Vitor Mendes Almeida", "Kaline de Almeida Costa", "Karina Geovana dos Santos", "Kawan Gabriel Mendes dos Santos", "Kauan de Sousa Campanha", "Leonardo Matos Augusto", "Manuela Guedes de Oliveira", "Maria Paula de Jesus Marques", "Mariana Miranda de Almeida", "Matheus Araujo Augusto", "Miguel Noberto da Silva", "Nayelly Lathyffa Nascimento Navas", "Pedro Henrique Rodrigues de Souza", "Rebeca Miranda Barreto da Cruz", "Sofia Arruda da Silva", "Thiago da Silva Ferreira Lima", "Vinicios Trajano Roca Kulikov", "Vinicius Mendes Rocha", "Vinycius dos Santos Silva", "Vitoria Costa Silva", "Wesley Silva Azevedo"],
  // 3ª Série F
  "3ª Série F":
  ["Albert Alexandre Costa do Carmo", "Adrielly de Queiroz França", "Ana Beatriz dos Santos Silva", "Ana Clara Medrado Garcia", "Ana Julia Valério Adão", "Ana Jullia da Silva Oliveira", "Beatriz de Abreu Pereira", "Bianca Vitoria Vila Nova Barbosa", "Bernardo Fernandes Rodrigues", "Chancel Makiesse Nzeyi", "Diego Garcia Sierra", "Diogo dos Santos Hirata", "Elias Caciatori", "Emanuely Hillary Nunes", "Francisca Larissa Alves Pereira", "Geovana Santos Mendes", "Gloria Karina de Azevedo Paião", "Gustavo de Barros dos Santos Vasconcellos", "Gustavo Eduardo Maximo dos Santos", "Gustavo Winterly da Rocha", "Helenn Melyssa da Silva Dias", "Isabelly Saldanha Franzini", "Julia Karolliny Abreu Ana", "Kayck Evangelista de Oliveira", "Laura Lopes Martins", "Laura Souza Santos Araujo", "Lavínia Candida de Sousa", "Leony Soares Gomes", "Luiz Guilherme Justo Miziara", "Manuela Goncalves dos Santos", "Maria Eduarda Souza de Jesus", "Maria Yasmim da Silva Teixeira", "Murilo Morais Tavares da Silva", "Nicoly Felix Cardoso", "Rafaela Matos Guirado", "Renato Paixão de Campos", "Ronaldo Gustavo Pereira Gomes", "Tcharlis Rodrigues Jesus de Souza", "Vinicius Vasconcelos Virolezi", "Yago Gabriel Silva Miranda Duarte", "Yan Gabriel Araujo Barbosa", "Yasmin Vitoria Favila Silva", "Walyson Almeida de Lima"],
  // 3ª Série G
  "3ª Série G":
  ["Aghatta Silva Bomfim", "Angelo Gabriel Junior Silva", "Beatriz Villela Victorino", "Caio Davi Ferreira Martins", "Camilli Silva Candido", "Carlos Eduardo Ferreira Vidal", "Danielle Cristianoti Gama", "Enzo Eduardo Jorge", "Evellyn Rwanny do Nascimento Silva", "Gabriel Silva", "Geovana Gabrielli Coelho Pinto", "Geovanna Souza Vergna", "Guilherme Rodrigues Dias", "Gustavo Borges Campos Correia", "Gustavo Gomes", "Hugo Dos Santos", "Hugo Roberti Bine", "Ítalo Santos de Jesus Ribeiro", "Joao Victor Cupertino Lemos", "João Paulo de Almeida Silva", "Kaique Eduardo Brandão dos Santos", "Kelly Christina dos Santos da Silva", "Larissa Silva Cardozo de Santana", "Luana Rodrigues da Silva", "Lucas Marquini Marques da Silva", "Lucas Napoleão da Silva Filho", "Luidy Gomes Rodrigues", "Maria Clara Ferreira Gomes", "Maria Clara Lima Ferreira", "Maria Eduarda Mansini Lopes", "Mateus Vinicius Ramos Borges", "Murilo Vieira Alves Carvalho dos Reis", "Nicolas Filipe Ramos dos Santos", "Nicole Silva Sousa", "Pablo Borges Garcia", "Stephanie Souza Silva", "Thauany Andreia Diniz Coutinho", "Thiago Alves de Souza", "Tiago Lamarttz Lima", "Tamiris Aparecida dos Santos Torres", "William Jairo Santos Silva", "Yasmin Eduarda de Souza"] 
};

// Quando seleciona período
periodoSelect.addEventListener('change', function() {
  const periodo = this.value;
  turmaSelect.innerHTML = '<option value="">Selecione...</option>';
  if (periodo) {
    turmasPorPeriodo[periodo].forEach(turma => {
      const option = document.createElement('option');
      option.value = turma;
      option.textContent = turma;
      turmaSelect.appendChild(option);
    });
    turmaGroup.classList.remove('hidden');
  } else {
    turmaGroup.classList.add('hidden');
    alunosGroup.classList.add('hidden');
    ocorridoGroup.classList.add('hidden');
    providenciasGroup.classList.add('hidden');
  }
});

// Quando seleciona turma
turmaSelect.addEventListener('change', function() {
  const turma = this.value;
  listaAlunos.innerHTML = '';
  if (turma) {
    alunosPorTurma[turma].forEach(aluno => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'alunos';
      checkbox.value = aluno;

      const label = document.createElement('label');
      label.textContent = aluno;
      label.style.display = "block";

      label.prepend(checkbox);
      listaAlunos.appendChild(label);
    });
    alunosGroup.classList.remove('hidden');
  } else {
    alunosGroup.classList.add('hidden');
    ocorridoGroup.classList.add('hidden');
    providenciasGroup.classList.add('hidden');
  }
});

// Quando seleciona alunos
listaAlunos.addEventListener('change', function() {
  // Exibe caixas de texto após selecionar pelo menos um aluno
  const selecionados = document.querySelectorAll('input[name="alunos"]:checked');
  if (selecionados.length > 0) {
    ocorridoGroup.classList.remove('hidden');
    providenciasGroup.classList.remove('hidden');
  } else {
    ocorridoGroup.classList.add('hidden');
    providenciasGroup.classList.add('hidden');
  }
});

// Captura envio do formulário 
document.getElementById('formTurma').addEventListener('submit', function(e) { 
  e.preventDefault(); 
  // Salvar os dados no backend
   const btn = e.target.querySelector('button');
  btn.disabled = true;
  btn.innerText = "Enviando relatório...";

  const alunosSelecionados = Array.from(document.querySelectorAll('input[name="alunos"]:checked'))
                                  .map(cb => cb.value);

  const dados = {
    nome: document.getElementById('nome').value,
    funcao: document.getElementById('funcao').value,
    data: document.getElementById('data').value,
    periodo: document.getElementById('periodo').value,
    turma: document.getElementById('turma').value,
    alunos: alunosSelecionados,
    ocorrido: document.getElementById('ocorrido').value,
    providencias: document.getElementById('providencias').value
  };

  fetch(URL_GOOGLE_SCRIPT, {
    method: 'POST',
    mode: 'no-cors', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  .then(() => {
    // Redireciona após o sucesso do envio
    window.location.href = "sucesso.html"; 
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao enviar os dados. Verifique a conexão e tente novamente.');
    btn.disabled = false;
    btn.innerText = "Enviar";
  });
});

function ocultarTodosGrupos() {
  turmaGroup.classList.add('hidden');
  alunosGroup.classList.add('hidden');
  ocorridoGroup.classList.add('hidden');
  providenciasGroup.classList.add('hidden');
};
