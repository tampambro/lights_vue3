<template>
  <div id="green" :class="[end ? 'blinkingAnimation' : '', 'light']">
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
      time: 15000 - localStorage.timePassed * 1000,
      end: false
    }
  },
  props: ['setTimePassed'],
  mounted() {
    let timePassedID = this.setTimePassed()
    setTimeout(() => {
      clearInterval(timePassedID)
      this.$router.push({ name: 'Yellow' })
    }, this.time)
  },
  unmounted() {
    localStorage.timePassed = 0
  }
}
</script>

<style scoped>
#green {
  background-color: green;
}
</style>