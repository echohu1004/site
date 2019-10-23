// 语音转文字
// inputMessage为文本框内容
import IFlyIatSession from '@/utils/IFlyIatSession'
import{getVoiceRecogKey} from '@/api/mediationRoom.js'
export const voiceToText = {
    //上传组件（step2-step3）
    data() {
        return {
            inputMessage: '',
            voiceToken: '',
            voiceUid: ''
        }
    },
    computed: {},
    mounted() {
        // 获取语音转写tonken
        this.getVoiceTonken()
    },
    activated() {},
    watch: {},
    methods: {
        getVoiceTonken() {
            getVoiceRecogKey().then(res => {
                if(res.data.code == 1000) {
                    this.voiceToken = res.data.data.key
                    this.voiceUid = res.data.data.uid
                }
            })
        },
        speedService() { // 建立语音转文字初始化
            this.iflylatSerStatus = true;
            let self = this, play
            this.IFlyLat = new IFlyIatSession({
                "callback": {
                    "onResult": function(err, result) {
                        if (err == null || err == undefined || err == 0) {
                            if (result == '' || result == null) {
                            } else {
                                self.sendMessage(result)
                            }
                        }
                        self.mic_pressed = false;
                        // self.IFlyLatPlay()
                    },
                    "onVolume": function(volume) {
                        // 音量
                    },
                    "onError": function() {
                        self.mic_pressed = false
                    },
                    "onProcess": function(status) {
                        switch (status) {
                            case 'onStart':
                                console.log("服务初始化。。。")
                                break;
                            case 'normalVolume':
                            case 'started':
                                console.log("倾听中。。。")
                                break;
                            case 'onStop':
                                console.log("等待结果。。。")
                                break;
                            case 'lowVolume':
                                console.log("倾听中。。。（声音过小）")
                                break;
                            default:
                                console.log("结束")
                        }
                    }
                }
            })
            if (!this.IFlyLat.isSupport()) {
                this.$alert('当前浏览器不支持语音转文字', '温馨提示', {
                    confirmButtonText: '确定',
                    confirmButtonClass: 'button_primary',
                    showClose:false,
                    customClass: 'meetbox',
                    callback: action => {
                        history.back()
                    }
                })
                return;
            }
            self.IFlyLatPlay()
        },
        IFlyLatPlay() { // 建立链接
            let self = this
            if (!self.mic_pressed) {
                let ssb_param = {
                    "grammar_list": null,
                    "params": "appid=577ca2ac,appidkey=9a77addd1154848d, lang = sms, acous = anhui, aue=speex-wb;-1, usr = mkchen, ssm = 1, sub = iat, net_type = wifi, rse = utf8, ent =sms16k, rst = plain, auf  = audio/L16;rate=16000, vad_enable = 1, vad_timeout = 5000, vad_speech_tail = 500, compress = igzip",
                    "iat_server":"wss://odr-asr.odrcloud.cn/ws?token="+self.voiceToken+'&uid='+self.voiceUid
                };
                self.IFlyLat.start(ssb_param);
                self.mic_pressed = true;
            } else {
                self.IFlyLat.stop();
            }
        },
    }
}