<template>
  <transition name="modal-fade">
    <section class="modal-background">
      <div class="modal">
        <div class="close-modal-button" @click="closeModal">✖</div>
        <header class="modal-header">
          <slot name="header"> This is default slot header. </slot>
        </header>
        <div class="modal-body">
          <slot name="body"> This is default slot body. </slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer"> This is default slot footer. </slot>
        </footer>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #ffffff;
  position: relative;
  width: 25%;
  border-radius: 5px;
  padding: 1.5rem;
  &-header {
    margin-bottom: 1rem;
  }
}

.close-modal-button {
  position: absolute;
  right: -1%;
  top: -5%;
  background-color: #e43d40;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-in;
}
</style>
