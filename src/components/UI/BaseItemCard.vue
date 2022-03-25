<template>
  <li>
    <div class="wrapper">
      <slot></slot>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  align-items: center;
  cursor: pointer;
}
</style>
