<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <div class="layout">
      <header>
        <h1>Carlos Mendonça</h1>
        <span>Programador, músico, aspirante a professor.</span>
      </header>
      <img src="https://avatars.githubusercontent.com/u/3859329" alt="Foto de perfil" />
    </div>
    <div class="layout content">
      <article>
        <p>Pode me chamar de Carlinhos!</p>
        <p>
          Sou apaixonado por computação teórica e espero poder inspirar essa mesma paixão em outros
          no futuro! Sou formado em Ciências da Computação pela UAM, mas já era interessado por
          programação antes mesmo da faculdade. Minhas áreas de interesse dentro da computação
          incluem Linguagens, Compiladores, Web e Programação Funcional.
        </p>
        <p>
          Também faço música, você vai encontrar os links para minhas redes sociais no meu blog!
        </p>
        <p>
          Falando em blog: Meu blog não é muito frequentemente atualizado, particularmente porque
          ainda não entrei no ritmo e a minha ferramenta de publicação ainda não é totalmente a
          prova de balas.
        </p>
      </article>
      <section class="links">
        <RouterLink to="/portfolio" class="portfolio">Portfolio</RouterLink>
        <RouterLink to="/blog" class="blog">Blog</RouterLink>
      </section>
    </div>
  </main>
</template>

<style lang="css" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

header h1 {
  font-family: var(--sans-serif-title);
  font-size: 4rem;
  border-left: 7px solid var(--main-color);
  padding-left: 1rem;
}

header span {
  color: var(--gray);
  font-family: var(--sans-serif-regular);
  font-size: 1.3rem;
  margin-top: 1rem;
}

main {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70rem;
}

img {
  width: 20rem;
  border-radius: 3rem;
  border: 3px var(--main-color) solid;
}

article {
  width: 60%;
  padding: 2rem;
  background-color: var(--black);
  border: 3px var(--gray) solid;
  border-radius: 3rem;
}

p {
  font-family: var(--serif-regular);
  line-height: 1.7;
  margin: 1rem 0;
}

p::first-letter {
  font-size: 1.4rem;
  line-height: 1rem;
}

.layout {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
.links {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.links a {
  font-family: var(--sans-serif-title);
  font-size: 2.5rem;
}
.links a:first-of-type {
  margin-bottom: 3rem;
}
.links a::before {
  content: '>';
  color: var(--main-color);
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    margin: 0;
  }
  
  .layout.content {
    flex-direction: column-reverse;
  }

  article {
    width: 100%;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  header {
    margin: 2rem 0;
    align-items: center;
  }

  header h1 {
    font-family: var(--sans-serif-title);
    font-size: 3rem;
    border-left: none;
    border-bottom: 3px solid var(--main-color);
    padding-left: 0;
  }

  header span {
    color: var(--gray);
    font-family: var(--sans-serif-regular);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
  }

  .links {
    width: 100%;
    margin: 3rem 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .links a {
    border-bottom: 3px solid var(--main-color);
  }

  .links a:first-of-type {
    margin-bottom: 0rem;
  }

  .links a::before {
    content: '';
    margin-right: 0;
  }
}
</style>
