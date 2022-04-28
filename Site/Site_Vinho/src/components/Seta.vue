<template>
<div>
    <button
      id="seta"
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#${carouselName}`"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      id="seta"
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#${carouselName}`"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
    
</template>
<script>
export default {
    
}
</script>