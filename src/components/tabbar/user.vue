<template>
    <div>
        user
    </div>
</template>

<script>
export default {
    created() {
        this.$parent.showNavBar({title:"我的乐淘"})
        this.$parent.hideHeader();
    },
}
</script>

<style lang="scss" scoped>

</style>
