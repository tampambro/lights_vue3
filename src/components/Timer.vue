<template>
  <div id="timer">{{ timeLeft / 1000 }}</div>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: this.time
    }
  },
  props: ['time'],
  watch: {
    timeLeft: function (val) {
      if (val <= 3000) {
        if (this.$parent.end === false && this.$parent.end !== undefined) {
          this.$parent.end = true
        }
      }
    }
  },
  methods: {
    timerRun() {
      let timerID = setInterval(() => {
        this.timeLeft -= 1000
      }, 1000)
      setTimeout(() => {
        clearInterval(timerID)
      }, this.time)
    }
  },
  mounted() {
    this.timerRun()
  }
}
</script>

<style scoped>
#timer {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 6.25rem;
  height: 6.25rem;
  border: 4px solid black;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 3rem;
  font-family: 'Roboto';
}
</style>