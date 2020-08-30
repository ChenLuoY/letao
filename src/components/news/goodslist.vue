<template>
    <div>
        数码电器
    </div>
</template>

<script>
export default {
    created() {
        this.$parent.showNavBar({title:"商品列表"})
        this.$parent.hideHeader();
    },
}
</script>

<style lang="scss" scoped>

</style>
