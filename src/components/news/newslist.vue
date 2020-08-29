<template>
    <div>
        <h2>新闻列表-{{$route.params.id}}-{{id}}</h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
