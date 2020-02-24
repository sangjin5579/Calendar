<template>
  <div>
      <ul>
          <li>data</li>
          <li>data</li>
          <li>data</li>
          <li>data</li>
          <li>data</li>
          <li>data</li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            calendar: [{
                id: '', //연월일 
                schedule: [{
                    Contents: '',
                    startDate: '',
                    endDate: '',
                    startTime: '',
                    endTime: '',
                    Color: ''
                }],
                date: ''
            }],
                 
        }
    }
}
</script>

<style scoped>

</style>