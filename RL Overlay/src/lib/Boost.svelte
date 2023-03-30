<script>
  export let percent = 100;
  $: percent = percent;

  var radius = 65;
  var circumference = radius * 2 * Math.PI;

  var offset;
  $: offset = circumference - ((percent * 0.75) / 100) * circumference;
  //   $: circle.style.strokeDashoffset = offset;
</script>

<div class="gauge">
  <p id="boostNum">{percent}</p>
  <p class="boost">Boost</p>
  <svg class="progress-ring" width="160" height="160">
    <circle
      id="progress-ring__circle"
      stroke-dashoffset={offset}
      stroke="white"
      stroke-width="15"
      fill="transparent"
      r="65"
      cx="80"
      cy="80"
    />
  </svg>
</div>

<style>
  .progress-ring {
    background-image: radial-gradient(rgb(132, 132, 132), rgb(0, 0, 0));
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    border-radius: 100%;
  }

  #progress-ring__circle {
    stroke-dasharray: 408 408;
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }

  .gauge {
    display: block;
    position: absolute;
    bottom: 1%;
    right: 1%;
  }

  #boostNum {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: rgb(255, 255, 255);
    top: 35%;
    right: 42%;
    font-size: x-large;
    z-index: 1;
  }

  .boost {
    position: inherit;
    padding: 0%;
    margin: 0%;
    color: rgb(255, 255, 255);
    top: 50%;
    right: 32%;
    font-size: x-large;
    z-index: 1;
  }
</style>
