<template>
    <div class="project-index">
        <div class="project-header">
            <div class="bus-header--input">
                试卷名称：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <div class="bus-header--input">
                试卷编号：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
                <!-- <el-select v-model="businessStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
            </div>
            <div class="bus-header--input">
                通过分数：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
                <!-- <el-select v-model="businessStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
            </div>
            <div>
                <el-button type="primary">搜 索</el-button>
            </div>
        </div>
    <div class="title"> 
        <div class="editTitle">
                <div class="project-header">
                    <div class="toEdit" >编辑学习材料
                    <div class="deleteIcon">X</div> 
                    <div class="type"> 材料类型  
                    <el-radio  class = "singleClick" v-model="radio" label="1">PDF/Word</el-radio>
                    <el-radio  class = "singleClick" v-model="radio" label="2">第三方视频资源</el-radio>
                    <div class="project-header">
                    <div>+upload</div>
                    <div class="attach-tips">上传文件</div>
                    </div>
                    <div class ="description">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
                    </div>
                   
                </div>
        </div>
    </div>
        <div class="saveButton">
            <el-button type="primary">保存材料</el-button>
        </div>
    </div>
</div>      

        

            

        

</template>

<script>
</script>

<style lang="scss">
    .project-index {
        padding: 24px 30px;
        .project-header {
            display: flex;
            .bus-header--input {
                margin-right: 24px;
                .el-input {
                    width: 224px;
                    .el-input__inner {
                        height: 32px;

                    }
                }
            }
        }
        .business-add {
            display: flex;
            padding: 20px 0;
        }
        .business-table {
            .table-title {
                display: flex;
                align-items: center;
                height: 40px;
                padding: 0 16px;
                background:rgba(230,247,255,1);
                border-radius:4px;
                border:1px solid rgba(186,231,255,1);
            }
        }
        .title {
            .editTitle {
                display: flex;
                width:490px;
                height:232px;
                border:1px solid rgba(0,0,0,0.07);
                        .project-header {
                        display: flex;
                            .toEdit {
                                width:490px;
                                height:232px;
                                border:1px solid rgba(0,0,0,0.07);
                            .deleteIcon {
                                width:430px;
                                height:22px;
                                        }
                            .type{
                                width:490px;
                                height:232px;
                                border:1px solid rgba(0,0,0,0.07);
                           
                                }
                            .attach-tips{
                                width:56px;
                                height:22px;
                                font-size:14px;
                                font-family:PingFangSC-Regular,PingFang SC;
                                font-weight:400;
                                color:rgba(0,0,0,0.65);
                                line-height:22px;
                            }
                            .description{
                                width:275px;
                                height:22px;
                                font-size:14px;
                                font-family:PingFangSC-Regular,PingFang SC;
                                font-weight:400;
                                color:rgba(0,0,0,0.45);
                                line-height:22px;

                            }
                        }
                    }
                }
            .saveButton{
                width:86px;
                height:32px;
                background:rgba(24,144,255,1);
                border-radius:4px;
            }
                }
        }  
    
</style>