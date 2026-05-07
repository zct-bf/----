import { lib, game, ui, get, ai, _status } from "../../noname.js";
export const type = "extension";
export default function(){
	return {name:"练习扩展",arenaReady:function(){
    
},content:function(config,pack){
    
},prepare:function(){
    
},precontent:function(){
    
},help:{},config:{},package:{
    character: {
        character: {
            "lpc_wenmushan": {
                sex: "male",
                group: "wei",
                hp: 3,
                maxHp: 3,
                hujia: 0,
                skills: ["lpc_lx_kaiyue","lpc_tongli"],
                img: "extension/新手扩展/liubeixi_xiangyu.jpg",
			},
			"lpc_rijunge": {
				sex: "male",
				group: "qun",
				hp: 3,
				maxHp: 3,
				hujia: 0,
				skills: ["lpc_hengwu"],
				img: "extension/新手扩展/liubeixi_xiangyu.jpg",
			},
        },
        translate: {
			"lpc_wenmushan": "文木杉",
			"lpc_rijunge":"日军哥",
            "练习扩展": "练习扩展",
        },
    },
    card: {
        card: {
        },
        translate: {
        },
        list: [],
    },
    skill: {
        skill: {
            "lpc_lx_kaiyue": {
                trigger: {
                    player: "phaseJieshu",
                },
                forced: true,
                content: function () {
                    var mh = player.maxHp;
                    player.draw(mh);
                },
                "skill_id": "lpc_lx_kaiyue",
                "_priority": 0,
            },
			"lpc_tongli": {
				group: ["lpc_tongli_clear"],
				usable:5,
                trigger: {
                    player: "useCard",
                },
				forced: true,
				filter: function (event, player) {
					return player.isPhaseUsing();
				},
				content: function () {
					player.addMark("lpc_tongli",1);
					var h = player.countMark("lpc_tongli");
                    if(h>0){
                      for(let index=1;index<h;index++){
                        trigger.effectCount++;
                        game.log("额外结算1次");
                      }
                    }
				},
				intro: {
					name: "同理",
					content: function (storage,player) {
						return "本回合已经使用了" + player.countMark("lpc_tongli") + "张牌";
					}
				},
				subSkill: {
					"clear": {
						forced: true,
						trigger: {
							player:"phaseEnd",
						},
						content: function () {
							player.clearMark("lpc_tongli");
						},
					},
				},
			},
			lpc_hengwu: {
				trigger: {
					player: "loseAfter",
				},
				forced: true,
				filter: function (event,player) {
					return player.countCards("h") < 5;
				},
				content: function () {
					num = 5 - player.countCards("h");
					player.draw(num);
				},
			}
        },
        translate: {
            "lpc_lx_kaiyue": "开月",
            "lpc_lx_kaiyue_info": "回合结束时，你摸体力上限张牌。",
            "lpc_tongli": "同理",
			"lpc_tongli_info": "锁定技：出牌阶段，你使用第x张牌时，此牌结算x次(至多为5)。",
			"lpc_hengwu": "恒五",
			"lpc_hengwu_info":"锁定技：当你失去牌时，若你此时手牌小于5，你将手牌补至5张。",
        },
    },
    intro: "",
    author: "无名玩家",
    diskURL: "",
    forumURL: "",
    version: "1.0",
},files:{"character":["lpc_wenmushan.jpg"],"card":[],"skill":[],"audio":[]},connect:false} 
};
