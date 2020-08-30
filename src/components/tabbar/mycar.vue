
<template>
    <div>
        mycar
    </div>
</template>

<script>
export default {
    created() {
        this.$parent.showNavBar({title:"购物车"})
        this.$parent.hideHeader();
    },
}
</script>

<style lang="scss" scoped>

</style>
