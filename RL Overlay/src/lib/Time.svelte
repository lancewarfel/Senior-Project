<script>
  import { timeStore } from "./stores";

  $: time = $timeStore;

  $: min = Math.trunc(time / 60);
  $: sec = prependZero(time % 60);

  function prependZero(number) {
    if (number <= 9) return "0" + number;
    else return number;
  }
</script>

<div class="clock">
  <div class="time">
    <!-- add more things for if time is > 10 minutes, will need to move things around -->
    <p>{min}:{sec}</p>
  </div>
</div>
