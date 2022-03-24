<template>
  <li>
    <div class="card">
      <slot></slot>
    </div>
  </li>
</template>

<style scoped lang="scss">
li {
  margin-bottom: 0.75rem;
}

.card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
