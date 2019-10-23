<template>
    <div class="business-detail">
        <div class="detail-header">
            <span>企业基本信息</span>
            <el-button>编辑</el-button>
        </div>
        <div>
            <el-form :model="smsForm" status-icon :rules="rules" ref="smsForm" label-width="120px" class="smsConfig-ruleForm">
                <el-form-item v-for="(item, index) in smsFormArr" :key="index" :label="item.label" :prop="item.code">
                    <el-input v-model="smsForm[item.code]"></el-input>
                </el-form-item>
            </el-form>
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
    .business-detail {
        padding: 20px;
        background-color: #ffffff;
        .detail-header {
            border-bottom: 1px solid #E9E9E9;
        }
    }
</style>
