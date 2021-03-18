<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component
          :is="Component"
          :prevColor="getPrevColor()"
          :setTimePassed="setTimePassed"
        />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevColor: localStorage.prevColor ? localStorage.prevColor : null
    }
  },
  methods: {
    getPrevColor() {
      if (this.$route.path === '/red' || this.$route.path === '/green') {
        this.prevColor = this.$route.path
        localStorage.prevColor = this.$route.path
        return this.$route.parth
      } else {
        return this.prevColor
      }
    },
    setTimePassed() {
      return setInterval(() => {
        localStorage.timePassed = ++localStorage.timePassed
      }, 1000)
    }
  },
  mounted() {
    if (!localStorage.timePassed) {
      localStorage.timePassed = 0
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>
