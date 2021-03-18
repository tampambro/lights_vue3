<template>
  <div id="yellow" class="light">
    <timer :time="time" />
  </div>
</template>

<script>
import Timer from '../components/Timer.vue'

export default {
  components: {
    Timer
  },
  data() {
    return {
      time: 3000 - localStorage.timePassed * 1000
    }
  },
  props: ['prevColor', 'setTimePassed'],
  mounted() {
    let color

    if (this.prevColor === '/red') {
      color = 'Green'
    } else {
      color = 'Red'
    }
    let timePassedID = this.setTimePassed()
    setTimeout(() => {
      clearInterval(timePassedID)
      this.$router.push({ name: `${color}` })
    }, this.time)
  },
  unmounted() {
    localStorage.timePassed = 0
  }
}
</script>

<style scoped>
#yellow {
  background-color: yellow;
}
</style>