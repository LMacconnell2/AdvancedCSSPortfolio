<script>
  const chapters = [
    { book: "Matthew", chapter: 5 },
    { book: "Mark", chapter: 4 },
    { book: "Luke", chapter: 15 },
    { book: "John", chapter: 1 },
    { book: "John", chapter: 3 }
  ];
</script>

<div class="min-h-screen flex flex-col bg-[#f5f1e6] text-[#2d2a26] font-serif">

  <header class="border-b border-[#d6d1c4] bg-[#f8f5ec]">
    <nav class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <h1 class="text-xl tracking-wide">Gospel Study</h1>
      <ul class="flex gap-6 text-sm">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">Gospels</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
      </ul>
    </nav>
  </header>

  <div class="flex flex-1 max-w-6xl mx-auto w-full">

    <aside class="w-56 border-r border-[#d6d1c4] bg-[#f8f5ec] p-6">
      <h2 class="text-sm uppercase tracking-widest mb-4 text-[#6b645c]">
        Chapters
      </h2>

      <nav>
        <ul class="space-y-2 text-sm">
          {#each chapters as item}
            <li>
              <a href="#" class="block hover:underline">
                {item.book} {item.chapter}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </aside>

    <main class="flex-1 px-8 py-10">

      <article class="max-w-prose mx-auto leading-relaxed text-[1.05rem]">

        <header class="mb-8 text-center">
          <h2 class="text-3xl mb-2 tracking-wide">John 3</h2>
          <p class="text-sm italic text-[#6b645c]">
            A conversation between Jesus and Nicodemus about spiritual rebirth.
          </p>
        </header>

        <section class="mb-6">
          <h3 class="text-xl mb-2">Nicodemus Comes to Jesus</h3>
          <p class="mb-4">
            Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council.
            He came to Jesus at night and said, “Rabbi, we know that you are a teacher who has come from God.”
          </p>
        </section>

        <section class="mb-6">
          <h3 class="text-xl mb-2">Born Again</h3>

          <p class="mb-4">
            Jesus replied, “Very truly I tell you, no one can see the kingdom of God unless they are born again.”
          </p>

          <blockquote class="border-l-4 border-[#c2b8a3] pl-4 italic text-[#4a453f] my-6">
            <p>
              “For God so loved the world that he gave his one and only Son,
              that whoever believes in him shall not perish but have eternal life.”
            </p>
          </blockquote>
        </section>

        <section class="mb-8">
          <h3 class="text-xl mb-2">Reflection</h3>
          <p>
            This chapter emphasizes spiritual transformation and the necessity of faith.
          </p>
        </section>

        <footer class="text-center text-sm text-[#6b645c] border-t border-[#d6d1c4] pt-4">
          End of Chapter
        </footer>

      </article>
    </main>
  </div>
  <footer class="border-t border-[#d6d1c4] bg-[#f8f5ec] text-center text-sm py-4 text-[#6b645c]">
    <p>&copy; 2026 Gospel Study App</p>
  </footer>

</div>
