<template>
    <div class="user-manage">
        <div class="user-header">
            <div class="user-header--input">
                公司名称：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <div class="user-header--input">
                状态：
                <el-select v-model="businessStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="user-header--input">
                加入时间：
                <el-date-picker
                    v-model="businessTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <el-button type="primary">查询</el-button>
        </div>
        <div class="user-btn">
            <el-button type="primary">添加账户</el-button>
            <el-button type="primary">批量删除</el-button>
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
    .user-manage {
        .user-header {
            display: flex;
            padding: 24px 0;
            .user-header--input {
                margin-right: 24px;
                .el-input {
                    width: 224px;
                    .el-input__inner {
                        height: 32px;

                    }
                }
            }
        }
        .user-btn {
            display: flex;
        }
    }
</style>
