<template>
    <div class="employee-detail">
        <div>
            <div>
                <h1>填写评价</h1>
                <div>您的评价将影响平台其他机构对该员工的使用情况，请谨慎填写</div>
            </div>
            <div>
                <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
                </el-input>
            </div>
        </div>
        <div>
            <h1>上传照片</h1>
        </div>
        <div>
            <div>
                <h1>评价星级</h1>
                <div>当您不评价时，系统默认给该员工5星好评</div>
            </div>
            <div>
                <el-rate v-model="value1"></el-rate>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            textarea: '',
            value1: null,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
    .employee-detail {
        
    }
</style>
