<script>
  import { vars } from '@store/shape';
  export let name;
  export let placeholder;
  export let styles;
  export let readOnly;
</script>

<input
  type="number"
  step="any"
  {name}
  id={name}
  placeholder={placeholder || name}
  {readOnly}
  class="rounded-md dark:bg-nord1 bg-nord5 border p-2 w-36 transition-opacity duration-300 {styles}"
  class:opacity-50={readOnly}
  bind:value={$vars[name]}
/>
