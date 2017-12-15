# craze Layout
Teste de layout para ArcTouch

### Tecnologias | Ferramentas | Libs | Materiais utilizados
##### Lista de itens
* [Windows](https://www.microsoft.com/pt-br/windows/) - Atualmente trabalho com windows, tanto no trabalho atual quanto em casa.
* [VSCode](https://code.visualstudio.com/) - Venho utilizando o visual studio code e venho gostando bastante muitas features e plugins que ajudam muito no dia a dia, mas a maior parte de minha carreira eu trabalhei com sublime text.
* [Nodejs - v8](https://nodejs.org/en/) - Basicamente utilizei o node com npm para baixar algumas dependências do projeto, para executar o projeto eu aconcelho ter o nodejs atualizado para que não de nenhum problema.
* [Pingy](https://pin.gy/cli/) - Uma ferramente que acho incrível, e facilita muito na hora de criar projetos pequenos, basicamente ele trabalha como um automatizador de tarefas e nos permite criar um projeto em um workflow de Front-End do nosso jeito, no meu caso eu criei um projeto com Babel e sass e além de compilar e dar auto reload, os arquivos são minificados e muito bem feitos. 
* [Ruby - gem](https://rubyinstaller.org/) - Essa é a versão de windows que utilizei, basicamente é necessário instalar o gem para instalar o sass, eu prefiro trabalhar com o modelo scss pois acho um pouco mais organizado.
* [sass](http://sass-lang.com/) - Como no próprio site ja diz: "CSS COM SUPER PODERES", eu ainda estou me familiarizando com o sass, mas eu gosto bastante de utilizar ele, eu ainda não uso muita coisa diferente do css padrão, mas o modo de utilizar ele fica bem mais claro.
* [Babel](https://babeljs.io/) - Utilizei o Babel para desenvolver e mostrar o meu conhecimento em javascript.
* [Bootstrap - v4](https://getbootstrap.com/) - Utilizei o Bootstrap pois gosto do sistema de grid dele e tem algumas helper classes que ajudam muito.
* [Normalize.css](https://necolas.github.io/normalize.css/) - É um css reset que gosto de utilizar para padronizar o css.
* [Animate.css](https://daneden.github.io/animate.css/) - Acabei utilizando o animate css para poder dar efeito ao carousel, existem várias animações lá então acabei ás aproveitando.
* [GIT BASH](http://gitforwindows.org/) - Gosto bastante do git bash, mas as vezes utilizo o cmd e powershell do windows.
*[Observações] - As fontes eu acabei mantendo a Roboto, pois eu não consegui baixar as fontes do template, acredito que elas devem existir no mac, mas em todo lugar que eu procurei elas eram pagas, ai opitei por deixar essa font.

### Executar ambiente de dev
* Instalar o [Nodejs - v8](https://nodejs.org/en/) e o [Ruby - gem](https://rubyinstaller.org/).
    Com o Ruby e o node instalado é necessário baixar o sass e o pingy globalmente:

    ```bash 
        gem install sass
    ```
    ```bash 
        npm install -g @pingy/cli
    ```

    Após as instalações, basta abrir o proejto e baixar as dependências utilizando:

    ```bash 
        npm install
    ```

* Feito todos os downloads o pingy nos permite usar os seguintes comandos:
- executar um localhost com auto reload para desenvolvimento:
    ```bash 
        pingy dev
    ```
- Executar um build do projeto:
    ```bash 
        pingy export
    ```

### Obsevações
Basicamente é isso, caso queiram podem ver o projeto online aqui: [Craze layout](https://dougjuliao.github.io/craze). 



