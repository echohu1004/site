<template>
    <div class="container">
        <div>
            <h2>权限基本信息</h2>
            <div>
                <el-button type="primary">取消</el-button>
                <el-button type="primary">保存</el-button>
            </div>    
        </div>
        <div>
            <el-form :model="smsForm" status-icon :rules="rules" ref="smsForm" label-width="120px" class="smsConfig-ruleForm">
                <el-form-item :prop="item.code" label="角色名称">
                    <el-input v-model="smsForm[item.code]"></el-input>
                </el-form-item>
                <el-form-item :prop="item.code" label="角色代码">
                    <el-input v-model="smsForm[item.code]"></el-input>
                </el-form-item>
                <el-form-item :prop="item.code" label="角色类型">
                    <el-input v-model="smsForm[item.code]"></el-input>
                </el-form-item>
                <el-form-item :prop="item.code" label="备注信息">
                    <el-input v-model="smsForm[item.code]"></el-input>
                </el-form-item>
                <el-form-item :prop="item.code" label="">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
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

</style>
