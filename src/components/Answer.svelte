<script>
  import KaTeX from '@components/KaTeX.svelte';
  import { answer } from '@store/answer';
  import { text } from '@utils/TeX';
  import Clipboard from '@components/Clipboard.svelte';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';

  const titles = {
    answer: { title: 'Svar', copyText: 'svaret' },
    calculation: { title: 'Beregning', copyText: 'beregningen' },
    equation: { title: 'Ligning', copyText: 'ligningen' },
  };
</script>

<div class="w-full text-center">
  {#each Object.keys(titles) as title}
    {#if $answer.filter((i) => i[title])[0]}
      <div class="mt-2 mb-1 text-lg font-bold">{titles[title].title}:</div>
      {#each $answer as ans}
        {#if Object.hasOwnProperty.call(ans, title)}
          <div>
            <KaTeX math={text(ans.name)} />: <KaTeX
              math={ans[title].toString()}
            />
            <Clipboard
              text={ans[title].toString()}
              message="Kopierede {titles[title].copyText}"
              ><div class="inline-block w-5 h-5 icon">
                <FaCopy />
              </div></Clipboard
            >
          </div>
        {/if}
      {/each}
    {/if}
  {/each}
</div>
