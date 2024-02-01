function uc(e, t, n) {
  return (t = function(o) {
    var r = function(s, i) {
      if (typeof s != "object" || s === null)
        return s;
      var a = s[Symbol.toPrimitive];
      if (a !== void 0) {
        var l = a.call(s, i || "default");
        if (typeof l != "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(s);
    }(o, "string");
    return typeof r == "symbol" ? r : r + "";
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cn = [], Ma = {}, Zs = {};
function cc(e) {
  for (var t = [], n = e.length, o = [], r = 0; n >= r; r++)
    o.push(!0);
  return Fa(0, e, [], t, o), t;
}
function Fa(e, t, n, o, r) {
  var s = t.length;
  if (e !== s)
    for (var i = function() {
      var l = t.substring(e, a + 1), u = !1;
      if (Cn.some(function(p) {
        return p.indexOf(l) === 0;
      }) && !t[a + 1] && r[a + 1]) {
        if (l.length === 1)
          n.push(l);
        else {
          var d = [];
          Cn.forEach(function(p) {
            p.indexOf(l) === 0 && d.push(p);
          }), n.push(d);
        }
        u = !0;
      } else
        Cn.indexOf(l) !== -1 && r[a + 1] && (n.push(l), u = !0);
      if (u) {
        var c = o.length;
        Fa(a + 1, t, n, o, r), o.length === c && (r[a + 1] = !1), n.pop();
      }
    }, a = e; s > a; a++)
      i();
  else
    o.push(n.join(" "));
}
function fc(e, t, n, o) {
  if (!e)
    return !1;
  var r = e.split(" ");
  return r.forEach(function(s) {
    s.length > 0 && o && r.push(s.charAt(0));
  }), n ? r.some(function(s) {
    return s.indexOf(t) === 0;
  }) : r.indexOf(t) !== -1;
}
function dc(e, t) {
  if (!e || !t)
    return !1;
  e = e.toLowerCase(), t = t.replace(/\s+/g, "").toLowerCase();
  var n = e.indexOf(t);
  if (n !== -1)
    return [n, n + t.length - 1];
  var o = Xs(e.split(""), [t.split("")], t);
  if (o)
    return o;
  var r, s, i = function(a) {
    for (var l = [], u = 0, d = a.length; d > u; u++) {
      var c = a.charAt(u);
      l.push(Ma[c] || c);
    }
    return l;
  }(e);
  return Xs(i, Zs[t] || (s = [], cc(r = t).forEach(function(a) {
    var l = a.split(" "), u = l.length - 1;
    l[u].indexOf(",") ? l[u].split(",").forEach(function(d) {
      l.splice(u, 1, d), s.push(JSON.parse(JSON.stringify(l)));
    }) : s.push(l);
  }), s.length !== 0 && s[0].length === r.length || s.push(r.split("")), Zs = uc({}, r, s), s), t);
}
function Xs(e, t, n) {
  for (var o = 0; e.length > o; o++)
    for (var r = 0; t.length > r; r++) {
      var s = t[r], i = s.length, a = i === n.length, l = !0, u = 0, d = 0, c = 0;
      if (e.length >= i) {
        for (; s.length > u; u++)
          if (u === 0 && e[o + u + d] === " ")
            d += 1, u -= 1;
          else if (e[o + u + c] === " ")
            c += 1, u -= 1;
          else if (!fc(e[o + u + c], s[u], !e[o + u + 1] || !s[u + 1], a)) {
            l = !1;
            break;
          }
        if (l)
          return [o + d, c + o + u - 1];
      }
    }
  return !1;
}
var pc = { match: function(e) {
  var t = {}, n = ["ju", "jun", "jue", "juan", "qu", "qun", "que", "xuan", "xu", "xue", "yu", "yuan", "yue", "yun", "nve", "lve"], o = ["lv", "lve", "nv", "nve"];
  return Object.keys(e).forEach(function(r) {
    if (t[r] = e[r], Cn.push(r), n.includes(r)) {
      var s = (i = r).indexOf("u") !== -1 ? i.replace("u", "v") : i.replace("v", "u");
      t[s] = e[r], Cn.push(s);
    }
    var i;
    if (o.includes(r)) {
      var a = r.replace("v", "ü");
      t[a] = e[r], Cn.push(a);
    }
  }), Ma = function(r) {
    var s = {};
    for (var i in r)
      for (var a = r[i], l = 0, u = a.length; u > l; l++)
        s[a[l]] = s[a[l]] ? s[a[l]] + " " + i : i;
    return s;
  }(t), dc;
}({ a: "阿啊呵腌嗄吖锕", e: "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭", ai: "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹", ei: "诶", xi: "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰", yi: "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓", an: "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广", han: "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖", ang: "昂仰盎肮", ao: "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱", wa: "瓦挖娃洼袜蛙凹哇佤娲呙腽", yu: "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠", niu: "牛纽扭钮拗妞忸狃", o: "哦噢喔", ba: "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇", pa: "怕帕爬扒趴琶啪葩耙杷钯筢", pi: "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴", bi: "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭", bai: "百白败摆伯拜柏佰掰呗擘捭稗", bo: "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣", bei: "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾", ban: "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍", pan: "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬", bin: "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧", bang: "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡", pang: "旁庞乓磅螃彷滂逄耪", beng: "泵崩蚌蹦迸绷甭嘣甏堋", bao: "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹", bu: "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸", pu: "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤", mian: "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄", po: "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷", fan: "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔", fu: "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆", ben: "本奔苯笨夯贲锛畚坌", feng: "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪", bian: "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏", pian: "便片篇偏骗翩扁骈胼蹁谝犏缏", zhen: "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈", biao: "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭", piao: "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵", huo: "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉", bie: "别鳖憋瘪蹩", min: "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘", fen: "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼", bing: "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫", geng: "更耕颈庚耿梗埂羹哽赓绠鲠", fang: "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫", xian: "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅", fou: "不否缶", ca: "拆擦嚓礤", cha: "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹", cai: "才采财材菜彩裁蔡猜踩睬", can: "参残餐灿惨蚕掺璨惭粲孱骖黪", shen: "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂", cen: "参岑涔", san: "三参散伞叁糁馓毵", cang: "藏仓苍沧舱臧伧", zang: "藏脏葬赃臧奘驵", chen: "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜", cao: "草操曹槽糙嘈漕螬艚屮", ce: "策测册侧厕栅恻", ze: "责则泽择侧咋啧仄箦赜笮舴昃迮帻", zhai: "债择齐宅寨侧摘窄斋祭翟砦瘵哜", dao: "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉", ceng: "层曾蹭噌", zha: "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄", chai: "差拆柴钗豺侪虿瘥", ci: "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢", zi: "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔", cuo: "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾", chan: "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁", shan: "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟", zhan: "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌", xin: "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡", lian: "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹", chang: "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯", zhang: "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜", chao: "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊", zhao: "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊", zhou: "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮", che: "车彻撤尺扯澈掣坼砗屮", ju: "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵", cheng: "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨", rong: "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾", sheng: "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚", deng: "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥", zhi: "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬", zheng: "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲", tang: "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭", chi: "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺", shi: "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳", qi: "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞", chuai: "揣踹啜搋膪", tuo: "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝", duo: "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳", xue: "学血雪削薛穴靴谑噱鳕踅泶彐", chong: "重种充冲涌崇虫宠忡憧舂茺铳艟", chou: "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱", qiu: "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗", xiu: "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅", chu: "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮", tuan: "团揣湍疃抟彖", zhui: "追坠缀揣椎锥赘惴隹骓缒", chuan: "传川船穿串喘椽舛钏遄氚巛舡", zhuan: "专转传赚砖撰篆馔啭颛", yuan: "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾", cuan: "窜攒篡蹿撺爨汆镩", chuang: "创床窗闯幢疮怆", zhuang: "装状庄壮撞妆幢桩奘僮戆", chui: "吹垂锤炊椎陲槌捶棰", chun: "春纯醇淳唇椿蠢鹑朐莼肫蝽", zhun: "准屯淳谆肫窀", cu: "促趋趣粗簇醋卒蹴猝蹙蔟殂徂", dun: "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅", qu: "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲", xu: "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑", chuo: "辍绰戳淖啜龊踔辶", zu: "组族足祖租阻卒俎诅镞菹", ji: "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜", cong: "从丛匆聪葱囱琮淙枞骢苁璁", zong: "总从综宗纵踪棕粽鬃偬枞腙", cou: "凑辏腠楱", cui: "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱", wei: "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎", cun: "村存寸忖皴", zuo: "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙", zuan: "钻纂攥缵躜", da: "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲", dai: "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨", tai: "台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱", ta: "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼", dan: "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕", lu: "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆", tan: "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬", ren: "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽", jie: "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱", yan: "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨", dang: "当党档荡挡宕砀铛裆凼菪谠", tao: "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗", tiao: "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦", te: "特忑忒铽慝", de: "的地得德底锝", dei: "得", di: "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌", ti: "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼", tui: "推退弟腿褪颓蜕忒煺", you: "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑", dian: "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽", tian: "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭", zhu: "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰", nian: "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏", diao: "调掉雕吊钓刁貂凋碉鲷叼铫铞", yao: "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧", die: "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀", she: "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠", ye: "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲", xie: "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞", zhe: "喆这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫", ding: "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵", diu: "丢铥", ting: "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛", dong: "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨", tong: "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼", zhong: "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂", dou: "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼", du: "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑", duan: "断段短端锻缎煅椴簖", dui: "对队追敦兑堆碓镦怼憝", rui: "瑞兑锐睿芮蕊蕤蚋枘", yue: "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖", tun: "吞屯囤褪豚臀饨暾氽", hui: "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕", wu: "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢", ya: "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑", he: "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍", wo: "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪", en: "恩摁蒽", n: "嗯唔", er: "而二尔儿耳迩饵洱贰铒珥佴鸸鲕", fa: "发法罚乏伐阀筏砝垡珐", quan: "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎", fei: "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄", pei: "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫", ping: "平评凭瓶冯屏萍苹乒坪枰娉俜鲆", fo: "佛", hu: "和护户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷", ga: "夹咖嘎尬噶旮伽尕钆尜", ge: "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼", ha: "哈蛤铪", xia: "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙", gai: "改该盖概溉钙丐芥赅垓陔戤", hai: "海还害孩亥咳骸骇氦嗨胲醢", gan: "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉", gang: "港钢刚岗纲冈杠缸扛肛罡戆筻", jiang: "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩", hang: "行航杭巷夯吭桁沆绗颃", gong: "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾", hong: "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨", guang: "广光逛潢犷胱咣桄", qiong: "穷琼穹邛茕筇跫蛩銎", gao: "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔", hao: "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆", li: "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹", jia: "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿", luo: "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃", ke: "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞", qia: "卡恰洽掐髂袷咭葜", gei: "给", gen: "根跟亘艮哏茛", hen: "很狠恨痕哏", gou: "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘", kou: "口扣寇叩抠佝蔻芤眍筘", gu: "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴", pai: "牌排派拍迫徘湃俳哌蒎", gua: "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙", tou: "钭投头透偷愉骰亠", guai: "怪拐乖", kuai: "会快块筷脍蒯侩浍郐蒉狯哙", guan: "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫", wan: "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢", ne: "呢哪呐讷疒", gui: "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦", jun: "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃", jiong: "窘炯迥炅冂扃", jue: "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝", gun: "滚棍辊衮磙鲧绲丨", hun: "婚混魂浑昏棍珲荤馄诨溷阍", guo: "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘", hei: "黑嘿嗨", kan: "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰", heng: "衡横恒亨哼珩桁蘅", mo: "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘", peng: "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋", hou: "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠", hua: "化华划话花画滑哗豁骅桦猾铧砉", huai: "怀坏淮徊槐踝", huan: "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐", xun: "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯", huang: "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀", nai: "能乃奶耐奈鼐萘氖柰佴艿", luan: "乱卵滦峦鸾栾銮挛孪脔娈", qie: "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊", jian: "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗", nan: "南难男楠喃囡赧腩囝蝻", qian: "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠", qiang: "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣", xiang: "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓", jiao: "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫", zhuo: "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚", qiao: "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲", xiao: "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈", si: "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕", kai: "开凯慨岂楷恺揩锴铠忾垲剀锎蒈", jin: "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺", qin: "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓", jing: "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍", ying: "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆", jiu: "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏", zui: "最罪嘴醉咀蕞觜", juan: "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊", suan: "算酸蒜狻", yun: "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁", qun: "群裙逡麇", ka: "卡喀咖咔咯佧胩", kang: "康抗扛慷炕亢糠伉钪闶", keng: "坑铿吭", kao: "考靠烤拷铐栲尻犒", ken: "肯垦恳啃龈裉", yin: "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙", kong: "空控孔恐倥崆箜", ku: "苦库哭酷裤枯窟挎骷堀绔刳喾", kua: "跨夸垮挎胯侉", kui: "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰", kuan: "款宽髋", kuang: "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩", que: "确却缺雀鹊阙瘸榷炔阕悫", kun: "困昆坤捆琨锟鲲醌髡悃阃", kuo: "扩括阔廓蛞", la: "拉落垃腊啦辣蜡喇剌旯砬邋瘌", lai: "来莱赖睐徕籁涞赉濑癞崃疠铼", lan: "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤", lin: "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔", lang: "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂", liang: "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚", lao: "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢", mu: "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶", le: "了乐勒肋叻鳓嘞仂泐", lei: "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑", sui: "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽", lie: "列烈劣裂猎冽咧趔洌鬣埒捩躐", leng: "冷愣棱楞塄", ling: "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃", lia: "俩", liao: "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩", liu: "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍", lun: "论轮伦仑纶沦抡囵", lv: "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆", lou: "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌", mao: "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀", long: "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃", nong: "农浓弄脓侬哝", shuang: "双爽霜孀泷", shu: "术书数属树输束述署熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅", shuai: "率衰帅摔甩蟀", lve: "略掠锊", ma: "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩", me: "么麽", mai: "买卖麦迈脉埋霾荬劢", man: "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔嫚", mi: "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉", men: "们门闷瞒汶扪焖懑鞔钔", mang: "忙盲茫芒氓莽蟒邙硭漭", meng: "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞", miao: "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵", mou: "某谋牟缪眸哞鍪蛑侔厶", miu: "缪谬", mei: "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛", wen: "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌", mie: "灭蔑篾乜咩蠛", ming: "明名命鸣铭冥茗溟酩瞑螟暝", na: "内南那纳拿哪娜钠呐捺衲镎肭", nei: "内那哪馁", nuo: "难诺挪娜糯懦傩喏搦锘", ruo: "若弱偌箬", nang: "囊馕囔曩攮", nao: "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲", ni: "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊", nen: "嫩恁", neng: "能", nin: "您恁", niao: "鸟尿溺袅脲茑嬲", nie: "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧", niang: "娘酿", ning: "宁凝拧泞柠咛狞佞聍甯", nu: "努怒奴弩驽帑孥胬", nv: "女钕衄恧", ru: "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐", nuan: "暖", nve: "虐疟", re: "热若惹喏", ou: "区欧偶殴呕禺藕讴鸥瓯沤耦怄", pao: "跑炮泡抛刨袍咆疱庖狍匏脬", pou: "剖掊裒", pen: "喷盆湓", pie: "瞥撇苤氕丿", pin: "品贫聘频拼拚颦姘嫔榀牝", se: "色塞瑟涩啬穑铯槭", qing: "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦", zan: "赞暂攒堑昝簪糌瓒錾趱拶", shao: "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲", sao: "扫骚嫂梢缫搔瘙臊埽缲鳋", sha: "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃", xuan: "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇", ran: "然染燃冉苒髯蚺", rang: "让壤攘嚷瓤穰禳", rao: "绕扰饶娆桡荛", reng: "仍扔", ri: "日", rou: "肉柔揉糅鞣蹂", ruan: "软阮朊", run: "润闰", sa: "萨洒撒飒卅仨脎", suo: "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃", sai: "思赛塞腮噻鳃", shui: "说水税谁睡氵", sang: "桑丧嗓搡颡磉", sen: "森", seng: "僧", shai: "筛晒", shang: "上商尚伤赏汤裳墒晌垧觞殇熵绱", xing: "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎", shou: "收手受首售授守寿瘦兽狩绶艏扌", shuo: "说数硕烁朔铄妁槊蒴搠", su: "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫", shua: "刷耍唰", shuan: "栓拴涮闩", shun: "顺瞬舜吮", song: "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘", sou: "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍", sun: "损孙笋荪榫隼狲飧", teng: "腾疼藤滕誊", tie: "铁贴帖餮萜", tu: "土突图途徒涂吐屠兔秃凸荼钍菟堍酴", wai: "外歪崴", wang: "王望往网忘亡旺汪枉妄惘罔辋魍", weng: "翁嗡瓮蓊蕹", zhua: "抓挝爪", yang: "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘", xiong: "雄兄熊胸凶匈汹芎", yo: "哟唷", yong: "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁", za: "杂扎咱砸咋匝咂拶", zai: "在再灾载栽仔宰哉崽甾", zao: "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣", zei: "贼", zen: "怎谮", zeng: "增曾综赠憎锃甑罾缯", zhei: "这", zou: "走邹奏揍诹驺陬楱鄹鲰", zhuai: "转拽", zun: "尊遵鳟樽撙", dia: "嗲", nou: "耨" }) };
const dt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e == null ? void 0 : e(r);
  if (n === !1 || !s)
    return t == null ? void 0 : t(r);
};
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vc(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const Je = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, hc = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], je = () => {
}, gc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ae = Object.assign, mc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yc = Object.prototype.hasOwnProperty, ce = (e, t) => yc.call(e, t), z = Array.isArray, sn = (e) => or(e) === "[object Map]", Va = (e) => or(e) === "[object Set]", G = (e) => typeof e == "function", ae = (e) => typeof e == "string", Fn = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", bc = (e) => (J(e) || G(e)) && G(e.then) && G(e.catch), za = Object.prototype.toString, or = (e) => za.call(e), Zn = (e) => or(e).slice(8, -1), Ba = (e) => or(e) === "[object Object]", is = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wc = /-(\w)/g, ko = rr((e) => e.replace(wc, (t, n) => n ? n.toUpperCase() : "")), _c = /\B([A-Z])/g, Ec = rr(
  (e) => e.replace(_c, "-$1").toLowerCase()
), ro = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ja = rr((e) => e ? `on${ro(e)}` : ""), Ht = (e, t) => !Object.is(e, t), Oc = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Sc = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Qs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Tc = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ei;
const ka = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ie(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ae(o) ? $c(o) : Ie(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (ae(e) || J(e))
    return e;
}
const Cc = /;(?![^(]*\))/g, Nc = /:([^]+)/, Ic = /\/\*[^]*?\*\//g;
function $c(e) {
  const t = {};
  return e.replace(Ic, "").split(Cc).forEach((n) => {
    if (n) {
      const o = n.split(Nc);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function L(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (z(e))
    for (let n = 0; n < e.length; n++) {
      const o = L(e[n]);
      o && (t += o + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xe = (e) => ae(e) ? e : e == null ? "" : z(e) || J(e) && (e.toString === za || !G(e.toString)) ? JSON.stringify(e, Ha, 2) : String(e), Ha = (e, t) => t && t.__v_isRef ? Ha(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[Er(o, s) + " =>"] = r, n),
    {}
  )
} : Va(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Er(n))
} : Fn(t) ? Er(t) : J(t) && !z(t) && !Ba(t) ? String(t) : t, Er = (e, t = "") => {
  var n;
  return Fn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ti(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Pc;
function Ac(e, t = Pc) {
  t && t.active && t.effects.push(e);
}
let an;
class Ka {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ac(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      sr();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Rc(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), ir();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = jt, n = an;
    try {
      return jt = !0, an = this, this._runnings++, ni(this), this.fn();
    } finally {
      oi(this), this._runnings--, an = n, jt = t;
    }
  }
  stop() {
    var t;
    this.active && (ni(this), oi(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Rc(e) {
  return e.value;
}
function ni(e) {
  e._trackId++, e._depsLength = 0;
}
function oi(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ua(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ua(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let jt = !0, Vr = 0;
const Wa = [];
function sr() {
  Wa.push(jt), jt = !1;
}
function ir() {
  const e = Wa.pop();
  jt = e === void 0 ? !0 : e;
}
function as() {
  Vr++;
}
function ls() {
  for (Vr--; !Vr && zr.length; )
    zr.shift()();
}
function qa(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Ua(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, Ae({ effect: e }, n)));
  }
}
const zr = [];
function Ga(e, t, n) {
  var o;
  as();
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel;
      r._dirtyLevel = t, s === 0 && (r._shouldSchedule = !0, process.env.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, Ae({ effect: r }, n))), r.trigger());
    }
  Ya(e), ls();
}
function Ya(e) {
  for (const t of e.keys())
    t.scheduler && t._shouldSchedule && (!t._runnings || t.allowRecurse) && e.get(t) === t._trackId && (t._shouldSchedule = !1, zr.push(t.scheduler));
}
const Ja = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ho = /* @__PURE__ */ new WeakMap(), ln = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Br = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function me(e, t, n) {
  if (jt && an) {
    let o = Ho.get(e);
    o || Ho.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ja(() => o.delete(n))), qa(
      an,
      r,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function kt(e, t, n, o, r, s) {
  const i = Ho.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && z(e)) {
    const l = Number(o);
    i.forEach((u, d) => {
      (d === "length" || !Fn(d) && d >= l) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        z(e) ? is(n) && a.push(i.get("length")) : (a.push(i.get(ln)), sn(e) && a.push(i.get(Br)));
        break;
      case "delete":
        z(e) || (a.push(i.get(ln)), sn(e) && a.push(i.get(Br)));
        break;
      case "set":
        sn(e) && a.push(i.get(ln));
        break;
    }
  as();
  for (const l of a)
    l && Ga(
      l,
      2,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: s
      } : void 0
    );
  ls();
}
function xc(e, t) {
  var n;
  return (n = Ho.get(e)) == null ? void 0 : n.get(t);
}
const Dc = /* @__PURE__ */ vc("__proto__,__v_isRef,__isVue"), Za = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fn)
), ri = /* @__PURE__ */ Lc();
function Lc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = K(this);
      for (let s = 0, i = this.length; s < i; s++)
        me(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(K)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      sr(), as();
      const o = K(this)[t].apply(this, n);
      return ls(), ir(), o;
    };
  }), e;
}
function Mc(e) {
  const t = K(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class Xa {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? ol : nl : s ? Yc : tl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = z(t);
    if (!r) {
      if (i && ce(ri, n))
        return Reflect.get(ri, n, o);
      if (n === "hasOwnProperty")
        return Mc;
    }
    const a = Reflect.get(t, n, o);
    return (Fn(n) ? Za.has(n) : Dc(n)) || (r || me(t, "get", n), s) ? a : ye(a) ? i && is(n) ? a : a.value : J(a) ? r ? fs(a) : hn(a) : a;
  }
}
class Fc extends Xa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._shallow) {
      const l = Kt(s);
      if (!Ko(o) && !Kt(o) && (s = K(s), o = K(o)), !z(t) && ye(s) && !ye(o))
        return l ? !1 : (s.value = o, !0);
    }
    const i = z(t) && is(n) ? Number(n) < t.length : ce(t, n), a = Reflect.set(t, n, o, r);
    return t === K(r) && (i ? Ht(o, s) && kt(t, "set", n, o, s) : kt(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = ce(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && kt(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Fn(n) || !Za.has(n)) && me(t, "has", n), o;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      z(t) ? "length" : ln
    ), Reflect.ownKeys(t);
  }
}
class Qa extends Xa {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && ti(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && ti(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vc = /* @__PURE__ */ new Fc(), zc = /* @__PURE__ */ new Qa(), Bc = /* @__PURE__ */ new Qa(!0), us = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function So(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = K(e), s = K(t);
  n || (Ht(t, s) && me(r, "get", t), me(r, "get", s));
  const { has: i } = ar(r), a = o ? us : n ? ps : so;
  if (i.call(r, t))
    return a(e.get(t));
  if (i.call(r, s))
    return a(e.get(s));
  e !== r && e.get(t);
}
function To(e, t = !1) {
  const n = this.__v_raw, o = K(n), r = K(e);
  return t || (Ht(e, r) && me(o, "has", e), me(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Co(e, t = !1) {
  return e = e.__v_raw, !t && me(K(e), "iterate", ln), Reflect.get(e, "size", e);
}
function si(e) {
  e = K(e);
  const t = K(this);
  return ar(t).has.call(t, e) || (t.add(e), kt(t, "add", e, e)), this;
}
function ii(e, t) {
  t = K(t);
  const n = K(this), { has: o, get: r } = ar(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && el(n, o, e) : (e = K(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Ht(t, i) && kt(n, "set", e, t, i) : kt(n, "add", e, t), this;
}
function ai(e) {
  const t = K(this), { has: n, get: o } = ar(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && el(t, n, e) : (e = K(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && kt(t, "delete", e, void 0, s), i;
}
function li() {
  const e = K(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? sn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && kt(e, "clear", void 0, void 0, n), o;
}
function No(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, a = K(i), l = t ? us : e ? ps : so;
    return !e && me(a, "iterate", ln), i.forEach((u, d) => o.call(r, l(u), l(d), s));
  };
}
function Io(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = K(r), i = sn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = r[e](...o), d = n ? us : t ? ps : so;
    return !t && me(
      s,
      "iterate",
      l ? Br : ln
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: a ? [d(c[0]), d(c[1])] : d(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${ro(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jc() {
  const e = {
    get(s) {
      return So(this, s);
    },
    get size() {
      return Co(this);
    },
    has: To,
    add: si,
    set: ii,
    delete: ai,
    clear: li,
    forEach: No(!1, !1)
  }, t = {
    get(s) {
      return So(this, s, !1, !0);
    },
    get size() {
      return Co(this);
    },
    has: To,
    add: si,
    set: ii,
    delete: ai,
    clear: li,
    forEach: No(!1, !0)
  }, n = {
    get(s) {
      return So(this, s, !0);
    },
    get size() {
      return Co(this, !0);
    },
    has(s) {
      return To.call(this, s, !0);
    },
    add: Pt("add"),
    set: Pt("set"),
    delete: Pt("delete"),
    clear: Pt("clear"),
    forEach: No(!0, !1)
  }, o = {
    get(s) {
      return So(this, s, !0, !0);
    },
    get size() {
      return Co(this, !0);
    },
    has(s) {
      return To.call(this, s, !0);
    },
    add: Pt("add"),
    set: Pt("set"),
    delete: Pt("delete"),
    clear: Pt("clear"),
    forEach: No(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Io(
      s,
      !1,
      !1
    ), n[s] = Io(
      s,
      !0,
      !1
    ), t[s] = Io(
      s,
      !1,
      !0
    ), o[s] = Io(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  kc,
  Hc,
  Kc,
  Uc
] = /* @__PURE__ */ jc();
function cs(e, t) {
  const n = t ? e ? Uc : Kc : e ? Hc : kc;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    ce(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Wc = {
  get: /* @__PURE__ */ cs(!1, !1)
}, qc = {
  get: /* @__PURE__ */ cs(!0, !1)
}, Gc = {
  get: /* @__PURE__ */ cs(!0, !0)
};
function el(e, t, n) {
  const o = K(n);
  if (o !== n && t.call(e, o)) {
    const r = Zn(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tl = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), ol = /* @__PURE__ */ new WeakMap();
function Jc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jc(Zn(e));
}
function hn(e) {
  return Kt(e) ? e : ds(
    e,
    !1,
    Vc,
    Wc,
    tl
  );
}
function fs(e) {
  return ds(
    e,
    !0,
    zc,
    qc,
    nl
  );
}
function $o(e) {
  return ds(
    e,
    !0,
    Bc,
    Gc,
    ol
  );
}
function ds(e, t, n, o, r) {
  if (!J(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Zc(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, a), a;
}
function un(e) {
  return Kt(e) ? un(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ko(e) {
  return !!(e && e.__v_isShallow);
}
function Uo(e) {
  return un(e) || Kt(e);
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function Xc(e) {
  return Sc(e, "__v_skip", !0), e;
}
const so = (e) => J(e) ? hn(e) : e, ps = (e) => J(e) ? fs(e) : e;
class rl {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ka(
      () => t(this._value),
      () => Vo(this, 1),
      () => this.dep && Ya(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = K(this);
    return (!t._cacheable || t.effect.dirty) && Ht(t._value, t._value = t.effect.run()) && Vo(t, 2), sl(t), t.effect._dirtyLevel >= 1 && Vo(t, 1), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Qc(e, t, n = !1) {
  let o, r;
  const s = G(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : je) : (o = e.get, r = e.set);
  const i = new rl(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function sl(e) {
  jt && an && (e = K(e), qa(
    an,
    e.dep || (e.dep = Ja(
      () => e.dep = void 0,
      e instanceof rl ? e : void 0
    )),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Vo(e, t = 2, n) {
  e = K(e);
  const o = e.dep;
  o && Ga(
    o,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function R(e) {
  return il(e, !1);
}
function Xn(e) {
  return il(e, !0);
}
function il(e, t) {
  return ye(e) ? e : new ef(e, t);
}
class ef {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : K(t), this._value = n ? t : so(t);
  }
  get value() {
    return sl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ko(t) || Kt(t);
    t = n ? t : K(t), Ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : so(t), Vo(this, 2, t));
  }
}
function h(e) {
  return ye(e) ? e.value : e;
}
const tf = {
  get: (e, t, n) => h(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ye(r) && !ye(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function nf(e) {
  return un(e) ? e : new Proxy(e, tf);
}
function al(e) {
  process.env.NODE_ENV !== "production" && !Uo(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = z(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ll(e, n);
  return t;
}
class of {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return xc(K(this._object), this._key);
  }
}
class rf {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function mt(e, t, n) {
  return ye(e) ? e : G(e) ? new rf(e) : J(e) && arguments.length > 1 ? ll(e, t, n) : R(e);
}
function ll(e, t, n) {
  const o = e[t];
  return ye(o) ? o : new of(e, t, n);
}
/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const cn = [];
function sf(e) {
  cn.push(e);
}
function af() {
  cn.pop();
}
function j(e, ...t) {
  sr();
  const n = cn.length ? cn[cn.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = lf();
  if (o)
    fn(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Dl(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...uf(r)), console.warn(...s);
  }
  ir();
}
function lf() {
  let e = cn[cn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function uf(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...cf(n));
  }), t;
}
function cf({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Dl(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...ff(e.props), s] : [r + s];
}
function ff(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ul(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ul(e, t, n) {
  return ae(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ye(t) ? (t = ul(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : G(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
}
function df(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? j(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && j(`${t} is NaN - the duration expression might be incorrect.`));
}
const vs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function fn(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    hs(s, t, n);
  }
  return r;
}
function Nn(e, t, n, o) {
  if (G(e)) {
    const s = fn(e, t, n, o);
    return s && bc(s) && s.catch((i) => {
      hs(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Nn(e[s], t, n, o));
  return r;
}
function hs(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? vs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, i, a) === !1)
            return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      fn(
        l,
        null,
        10,
        [e, i, a]
      );
      return;
    }
  }
  pf(e, n, r, o);
}
function pf(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = vs[t];
    if (n && sf(n), j(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && af(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Wo = !1, jr = !1;
const Ze = [];
let Ft = 0;
const In = [];
let pt = null, Lt = 0;
const cl = /* @__PURE__ */ Promise.resolve();
let gs = null;
const vf = 100;
function he(e) {
  const t = gs || cl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hf(e) {
  let t = Ft + 1, n = Ze.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = Ze[o], s = io(r);
    s < e || s === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function ms(e) {
  (!Ze.length || !Ze.includes(
    e,
    Wo && e.allowRecurse ? Ft + 1 : Ft
  )) && (e.id == null ? Ze.push(e) : Ze.splice(hf(e.id), 0, e), fl());
}
function fl() {
  !Wo && !jr && (jr = !0, gs = cl.then(pl));
}
function dl(e) {
  z(e) ? In.push(...e) : (!pt || !pt.includes(
    e,
    e.allowRecurse ? Lt + 1 : Lt
  )) && In.push(e), fl();
}
function gf(e) {
  if (In.length) {
    const t = [...new Set(In)].sort(
      (n, o) => io(n) - io(o)
    );
    if (In.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < pt.length; Lt++)
      process.env.NODE_ENV !== "production" && vl(e, pt[Lt]) || pt[Lt]();
    pt = null, Lt = 0;
  }
}
const io = (e) => e.id == null ? 1 / 0 : e.id, mf = (e, t) => {
  const n = io(e) - io(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function pl(e) {
  jr = !1, Wo = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ze.sort(mf);
  const t = process.env.NODE_ENV !== "production" ? (n) => vl(e, n) : je;
  try {
    for (Ft = 0; Ft < Ze.length; Ft++) {
      const n = Ze[Ft];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        fn(n, null, 14);
      }
    }
  } finally {
    Ft = 0, Ze.length = 0, gf(e), Wo = !1, gs = null, (Ze.length || In.length) && pl(e);
  }
}
function vl(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > vf) {
      const o = t.ownerInstance, r = o && Ss(o.type);
      return hs(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let kr = !1;
const On = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (ka().__VUE_HMR_RUNTIME__ = {
  createRecord: Or(yf),
  rerender: Or(bf),
  reload: Or(wf)
});
const qo = /* @__PURE__ */ new Map();
function yf(e, t) {
  return qo.has(e) ? !1 : (qo.set(e, {
    initialDef: Qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Qn(e) {
  return Ll(e) ? e.__vccOpts : e;
}
function bf(e, t) {
  const n = qo.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Qn(o.type).render = t), o.renderCache = [], kr = !0, o.effect.dirty = !0, o.update(), kr = !1;
  }));
}
function wf(e, t) {
  const n = qo.get(e);
  if (!n)
    return;
  t = Qn(t), ui(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Qn(r.type);
    On.has(s) || (s !== n.initialDef && ui(s, t), On.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (On.add(s), r.ceReload(t.styles), On.delete(s)) : r.parent ? (r.parent.effect.dirty = !0, ms(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  dl(() => {
    for (const r of o)
      On.delete(
        Qn(r.type)
      );
  });
}
function ui(e, t) {
  Ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Or(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Vt, Yn = [], Hr = !1;
function _f(e, ...t) {
  Vt ? Vt.emit(e, ...t) : Hr || Yn.push({ event: e, args: t });
}
function hl(e, t) {
  var n, o;
  Vt = e, Vt ? (Vt.enabled = !0, Yn.forEach(({ event: r, args: s }) => Vt.emit(r, ...s)), Yn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    hl(s, t);
  }), setTimeout(() => {
    Vt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Hr = !0, Yn = []);
  }, 3e3)) : (Hr = !0, Yn = []);
}
const Ef = /* @__PURE__ */ Of(
  "component:updated"
  /* COMPONENT_UPDATED */
);
function Of(e) {
  return (t) => {
    _f(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let pe = null, gl = null;
function ci(e) {
  const t = pe;
  return pe = e, gl = e && e.type.__scopeId || null, t;
}
function X(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && _i(-1);
    const s = ci(t);
    let i;
    try {
      i = e(...r);
    } finally {
      ci(s), o._d && _i(1);
    }
    return process.env.NODE_ENV !== "production" && Ef(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
const Go = "components", Sf = "directives";
function vt(e, t) {
  return ys(Go, e, !0, t) || e;
}
const ml = Symbol.for("v-ndc");
function Bt(e) {
  return ae(e) ? ys(Go, e, !1) || e : e || ml;
}
function Tf(e) {
  return ys(Sf, e);
}
function ys(e, t, n = !0, o = !1) {
  const r = pe || Ne;
  if (r) {
    const s = r.type;
    if (e === Go) {
      const a = Ss(
        s,
        !1
      );
      if (a && (a === t || a === ko(t) || a === ro(ko(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      fi(r[e] || s[e], t) || // global registration
      fi(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const a = e === Go ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      j(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && j(
      `resolve${ro(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function fi(e, t) {
  return e && (e[t] || e[ko(t)] || e[ro(ko(t))]);
}
const Cf = (e) => e.__isSuspense;
function Nf(e, t) {
  t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : dl(e);
}
const If = Symbol.for("v-scx"), $f = () => {
  {
    const e = le(If);
    return e || process.env.NODE_ENV !== "production" && j(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Pf(e, t) {
  return bs(e, null, t);
}
const Po = {};
function q(e, t, n) {
  return process.env.NODE_ENV !== "production" && !G(t) && j(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), bs(e, t, n);
}
function bs(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: s,
  onTrack: i,
  onTrigger: a
} = Je) {
  if (t && s) {
    const w = t;
    t = (...y) => {
      w(...y), I();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && j(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && j(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && j(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && j(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (w) => {
    j(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = Ne, d = (w) => o === !0 ? w : (
    // for deep: false, only traverse root-level properties
    rn(w, o === !1 ? 1 : void 0)
  );
  let c, p = !1, g = !1;
  if (ye(e) ? (c = () => e.value, p = Ko(e)) : un(e) ? (c = () => d(e), p = !0) : z(e) ? (g = !0, p = e.some((w) => un(w) || Ko(w)), c = () => e.map((w) => {
    if (ye(w))
      return w.value;
    if (un(w))
      return d(w);
    if (G(w))
      return fn(w, u, 2);
    process.env.NODE_ENV !== "production" && l(w);
  })) : G(e) ? t ? c = () => fn(e, u, 2) : c = () => (v && v(), Nn(
    e,
    u,
    3,
    [f]
  )) : (c = je, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const w = c;
    c = () => rn(w());
  }
  let v, f = (w) => {
    v = T.onStop = () => {
      fn(w, u, 4), v = T.onStop = void 0;
    };
  }, _;
  if (lr)
    if (f = je, t ? n && Nn(t, u, 3, [
      c(),
      g ? [] : void 0,
      f
    ]) : c(), r === "sync") {
      const w = $f();
      _ = w.__watcherHandles || (w.__watcherHandles = []);
    } else
      return je;
  let m = g ? new Array(e.length).fill(Po) : Po;
  const S = () => {
    if (!(!T.active || !T.dirty))
      if (t) {
        const w = T.run();
        (o || p || (g ? w.some((y, E) => Ht(y, m[E])) : Ht(w, m))) && (v && v(), Nn(t, u, 3, [
          w,
          // pass undefined as the old value when it's changed for the first time
          m === Po ? void 0 : g && m[0] === Po ? [] : m,
          f
        ]), m = w);
      } else
        T.run();
  };
  S.allowRecurse = !!t;
  let A;
  r === "sync" ? A = S : r === "post" ? A = () => yi(S, u && u.suspense) : (S.pre = !0, u && (S.id = u.uid), A = () => ms(S));
  const T = new Ka(c, je, A), I = () => {
    T.stop();
  };
  return process.env.NODE_ENV !== "production" && (T.onTrack = i, T.onTrigger = a), t ? n ? S() : m = T.run() : r === "post" ? yi(
    T.run.bind(T),
    u && u.suspense
  ) : T.run(), _ && _.push(I), I;
}
function Af(e, t, n) {
  const o = this.proxy, r = ae(e) ? e.includes(".") ? Rf(o, e) : () => o[e] : e.bind(o, o);
  let s;
  G(t) ? s = t : (s = t.handler, n = t);
  const i = Rl(this), a = bs(r, s.bind(o), n);
  return i(), a;
}
function Rf(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function rn(e, t, n = 0, o) {
  if (!J(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), ye(e))
    rn(e.value, t, n, o);
  else if (z(e))
    for (let r = 0; r < e.length; r++)
      rn(e[r], t, n, o);
  else if (Va(e) || sn(e))
    e.forEach((r) => {
      rn(r, t, n, o);
    });
  else if (Ba(e))
    for (const r in e)
      rn(e[r], t, n, o);
  return e;
}
function bt(e, t) {
  if (pe === null)
    return process.env.NODE_ENV !== "production" && j("withDirectives can only be used inside render functions."), e;
  const n = xl(pe) || pe.proxy, o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, a, l = Je] = t[r];
    s && (G(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && rn(i), o.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
const Mt = Symbol("_leaveCb"), Ao = Symbol("_enterCb");
function xf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Oe(() => {
    e.isMounted = !0;
  }), Qe(() => {
    e.isUnmounting = !0;
  }), e;
}
const Be = [Function, Array], yl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Be,
  onEnter: Be,
  onAfterEnter: Be,
  onEnterCancelled: Be,
  // leave
  onBeforeLeave: Be,
  onLeave: Be,
  onAfterLeave: Be,
  onLeaveCancelled: Be,
  // appear
  onBeforeAppear: Be,
  onAppear: Be,
  onAfterAppear: Be,
  onAppearCancelled: Be
}, Df = {
  name: "BaseTransition",
  props: yl,
  setup(e, { slots: t }) {
    const n = Me(), o = xf();
    let r;
    return () => {
      const s = t.default && wl(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let f = !1;
        for (const _ of s)
          if (_.type !== st) {
            if (process.env.NODE_ENV !== "production" && f) {
              j(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (i = _, f = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const a = K(e), { mode: l } = a;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && j(`invalid <transition> mode: ${l}`), o.isLeaving)
        return Sr(i);
      const u = di(i);
      if (!u)
        return Sr(i);
      const d = Kr(
        u,
        a,
        o,
        n
      );
      Ur(u, d);
      const c = n.subTree, p = c && di(c);
      let g = !1;
      const { getTransitionKey: v } = u.type;
      if (v) {
        const f = v();
        r === void 0 ? r = f : f !== r && (r = f, g = !0);
      }
      if (p && p.type !== st && (!Nl(u, p) || g)) {
        const f = Kr(
          p,
          a,
          o,
          n
        );
        if (Ur(p, f), l === "out-in")
          return o.isLeaving = !0, f.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Sr(i);
        l === "in-out" && u.type !== st && (f.delayLeave = (_, m, S) => {
          const A = bl(
            o,
            p
          );
          A[String(p.key)] = p, _[Mt] = () => {
            m(), _[Mt] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = S;
        });
      }
      return i;
    };
  }
}, Lf = Df;
function bl(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Kr(e, t, n, o) {
  const {
    appear: r,
    mode: s,
    persisted: i = !1,
    onBeforeEnter: a,
    onEnter: l,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: c,
    onLeave: p,
    onAfterLeave: g,
    onLeaveCancelled: v,
    onBeforeAppear: f,
    onAppear: _,
    onAfterAppear: m,
    onAppearCancelled: S
  } = t, A = String(e.key), T = bl(n, e), I = (E, D) => {
    E && Nn(
      E,
      o,
      9,
      D
    );
  }, w = (E, D) => {
    const x = D[1];
    I(E, D), z(E) ? E.every((F) => F.length <= 1) && x() : E.length <= 1 && x();
  }, y = {
    mode: s,
    persisted: i,
    beforeEnter(E) {
      let D = a;
      if (!n.isMounted)
        if (r)
          D = f || a;
        else
          return;
      E[Mt] && E[Mt](
        !0
        /* cancelled */
      );
      const x = T[A];
      x && Nl(e, x) && x.el[Mt] && x.el[Mt](), I(D, [E]);
    },
    enter(E) {
      let D = l, x = u, F = d;
      if (!n.isMounted)
        if (r)
          D = _ || l, x = m || u, F = S || d;
        else
          return;
      let N = !1;
      const V = E[Ao] = (Z) => {
        N || (N = !0, Z ? I(F, [E]) : I(x, [E]), y.delayedLeave && y.delayedLeave(), E[Ao] = void 0);
      };
      D ? w(D, [E, V]) : V();
    },
    leave(E, D) {
      const x = String(e.key);
      if (E[Ao] && E[Ao](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      I(c, [E]);
      let F = !1;
      const N = E[Mt] = (V) => {
        F || (F = !0, D(), V ? I(v, [E]) : I(g, [E]), E[Mt] = void 0, T[x] === e && delete T[x]);
      };
      T[x] = e, p ? w(p, [E, N]) : N();
    },
    clone(E) {
      return Kr(E, t, n, o);
    }
  };
  return y;
}
function Sr(e) {
  if (ws(e))
    return e = Ut(e), e.children = null, e;
}
function di(e) {
  return ws(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function Ur(e, t) {
  e.shapeFlag & 6 && e.component ? Ur(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wl(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Le ? (i.patchFlag & 128 && r++, o = o.concat(
      wl(i.children, t, a)
    )) : (t || i.type !== st) && o.push(a != null ? Ut(i, { key: a }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  return G(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
const Mf = (e) => !!e.type.__asyncLoader, ws = (e) => e.type.__isKeepAlive;
function Ff(e, t) {
  Vf(e, "da", t);
}
function Vf(e, t, n = Ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (_s(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ws(r.parent.vnode) && zf(o, t, n, r), r = r.parent;
  }
}
function zf(e, t, n, o) {
  const r = _s(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  _l(() => {
    mc(o[t], r);
  }, n);
}
function _s(e, t, n = Ne, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      sr();
      const a = Rl(n), l = Nn(t, n, e, i);
      return a(), ir(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = ja(vs[e].replace(/ hook$/, ""));
    j(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const go = (e) => (t, n = Ne) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!lr || e === "sp") && _s(e, (...o) => t(...o), n)
), Bf = go("bm"), Oe = go("m"), jf = go("u"), Qe = go("bum"), _l = go("um");
function Wr(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (z(e) || ae(e)) {
    r = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && j(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (J(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, a) => t(i, a, void 0, s && s[a])
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const u = i[a];
        r[a] = t(e[u], u, a, s && s[a]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
function oe(e, t, n = {}, o, r) {
  if (pe.isCE || pe.parent && Mf(pe.parent) && pe.parent.isCE)
    return t !== "default" && (n.name = t), ie("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (j(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), P();
  const i = s && El(s(n)), a = Y(
    Le,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
}
function El(e) {
  return e.some((t) => Jo(t) ? !(t.type === st || t.type === Le && !El(t.children)) : !0) ? e : null;
}
function kf(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !J(e))
    return j("v-on with no argument expects an object value."), n;
  for (const o in e)
    n[t && /[A-Z]/.test(o) ? `on:${o}` : ja(o)] = e[o];
  return n;
}
const qr = (e) => e ? id(e) ? xl(e) || e.proxy : qr(e.parent) : null, eo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? $o(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? $o(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? $o(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? $o(e.refs) : e.refs,
    $parent: (e) => qr(e.parent),
    $root: (e) => qr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => qf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = he.bind(e.proxy)),
    $watch: (e) => Af.bind(e)
  })
), Hf = (e) => e === "_" || e === "$", Tr = (e, t) => e !== Je && !e.__isScriptSetup && ce(e, t), Kf = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: a, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Tr(o, t))
          return i[t] = 1, o[t];
        if (r !== Je && ce(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ce(u, t)
        )
          return i[t] = 3, s[t];
        if (n !== Je && ce(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = eo[t];
    let c, p;
    if (d)
      return t === "$attrs" ? (me(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && me(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Je && ce(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, ce(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && pe && (!ae(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Je && Hf(t[0]) && ce(r, t) ? j(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pe && j(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Tr(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && ce(r, t) ? (j(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Je && ce(o, t) ? (o[t] = n, !0) : ce(e.props, t) ? (process.env.NODE_ENV !== "production" && j(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && j(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let a;
    return !!n[i] || e !== Je && ce(e, i) || Tr(t, i) || (a = s[0]) && ce(a, i) || ce(o, i) || ce(eo, i) || ce(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Kf.ownKeys = (e) => (j(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Uf() {
  return Ol().slots;
}
function Wf() {
  return Ol().attrs;
}
function Ol() {
  const e = Me();
  return process.env.NODE_ENV !== "production" && !e && j("useContext() called without active instance."), e.setupContext || (e.setupContext = ld(e));
}
function pi(e) {
  return z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qf(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !r.length && !n && !o ? l = t : (l = {}, r.length && r.forEach(
    (u) => Yo(l, u, i, !0)
  ), Yo(l, t, i)), J(t) && s.set(t, l), l;
}
function Yo(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Yo(e, s, n, !0), r && r.forEach(
    (i) => Yo(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && j(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Gf[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Gf = {
  data: vi,
  props: gi,
  emits: gi,
  // objects
  methods: Jn,
  computed: Jn,
  // lifecycle
  beforeCreate: Ee,
  created: Ee,
  beforeMount: Ee,
  mounted: Ee,
  beforeUpdate: Ee,
  updated: Ee,
  beforeDestroy: Ee,
  beforeUnmount: Ee,
  destroyed: Ee,
  unmounted: Ee,
  activated: Ee,
  deactivated: Ee,
  errorCaptured: Ee,
  serverPrefetch: Ee,
  // assets
  components: Jn,
  directives: Jn,
  // watch
  watch: Jf,
  // provide / inject
  provide: vi,
  inject: Yf
};
function vi(e, t) {
  return t ? e ? function() {
    return Ae(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Yf(e, t) {
  return Jn(hi(e), hi(t));
}
function hi(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jn(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gi(e, t) {
  return e ? z(e) && z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function Jf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = Ee(e[o], t[o]);
  return n;
}
let mi = null;
function Et(e, t) {
  if (!Ne)
    process.env.NODE_ENV !== "production" && j("provide() can only be used inside setup().");
  else {
    let n = Ne.provides;
    const o = Ne.parent && Ne.parent.provides;
    o === n && (n = Ne.provides = Object.create(o)), n[e] = t;
  }
}
function le(e, t, n = !1) {
  const o = Ne || pe;
  if (o || mi) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : mi._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && j(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && j("inject() can only be used inside setup() or functional components.");
}
const yi = Nf;
function Sl(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (z(o) && z(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = sd(r[s]), a.el = i.el), n || Sl(i, a)), a.type === Es && (a.el = i.el), process.env.NODE_ENV !== "production" && a.type === st && !a.el && (a.el = i.el);
    }
}
const Zf = (e) => e.__isTeleport, $n = (e) => e && (e.disabled || e.disabled === ""), bi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Gr = (e, t) => {
  const n = e && e.to;
  if (ae(n))
    if (t) {
      const o = t(n);
      return o || process.env.NODE_ENV !== "production" && j(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), o;
    } else
      return process.env.NODE_ENV !== "production" && j(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !$n(e) && j(`Invalid Teleport target: ${n}`), n;
}, Xf = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, o, r, s, i, a, l, u) {
    const {
      mc: d,
      pc: c,
      pbc: p,
      o: { insert: g, querySelector: v, createText: f, createComment: _ }
    } = u, m = $n(t.props);
    let { shapeFlag: S, children: A, dynamicChildren: T } = t;
    if (process.env.NODE_ENV !== "production" && kr && (l = !1, T = null), e == null) {
      const I = t.el = process.env.NODE_ENV !== "production" ? _("teleport start") : f(""), w = t.anchor = process.env.NODE_ENV !== "production" ? _("teleport end") : f("");
      g(I, n, o), g(w, n, o);
      const y = t.target = Gr(t.props, v), E = t.targetAnchor = f("");
      y ? (g(E, y), i === "svg" || bi(y) ? i = "svg" : (i === "mathml" || wi(y)) && (i = "mathml")) : process.env.NODE_ENV !== "production" && !m && j("Invalid Teleport target on mount:", y, `(${typeof y})`);
      const D = (x, F) => {
        S & 16 && d(
          A,
          x,
          F,
          r,
          s,
          i,
          a,
          l
        );
      };
      m ? D(n, w) : y && D(y, E);
    } else {
      t.el = e.el;
      const I = t.anchor = e.anchor, w = t.target = e.target, y = t.targetAnchor = e.targetAnchor, E = $n(e.props), D = E ? n : w, x = E ? I : y;
      if (i === "svg" || bi(w) ? i = "svg" : (i === "mathml" || wi(w)) && (i = "mathml"), T ? (p(
        e.dynamicChildren,
        T,
        D,
        r,
        s,
        i,
        a
      ), Sl(e, t, !0)) : l || c(
        e,
        t,
        D,
        x,
        r,
        s,
        i,
        a,
        !1
      ), m)
        E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ro(
          t,
          n,
          I,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = Gr(
          t.props,
          v
        );
        F ? Ro(
          t,
          F,
          null,
          u,
          0
        ) : process.env.NODE_ENV !== "production" && j(
          "Invalid Teleport target on update:",
          w,
          `(${typeof w})`
        );
      } else
        E && Ro(
          t,
          w,
          y,
          u,
          1
        );
    }
    Tl(t);
  },
  remove(e, t, n, o, { um: r, o: { remove: s } }, i) {
    const { shapeFlag: a, children: l, anchor: u, targetAnchor: d, target: c, props: p } = e;
    if (c && s(d), i && s(u), a & 16) {
      const g = i || !$n(p);
      for (let v = 0; v < l.length; v++) {
        const f = l[v];
        r(
          f,
          t,
          n,
          g,
          !!f.dynamicChildren
        );
      }
    }
  },
  move: Ro,
  hydrate: Qf
};
function Ro(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  s === 0 && o(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: d } = e, c = s === 2;
  if (c && o(i, t, n), (!c || $n(d)) && l & 16)
    for (let p = 0; p < u.length; p++)
      r(
        u[p],
        t,
        n,
        2
      );
  c && o(a, t, n);
}
function Qf(e, t, n, o, r, s, {
  o: { nextSibling: i, parentNode: a, querySelector: l }
}, u) {
  const d = t.target = Gr(
    t.props,
    l
  );
  if (d) {
    const c = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if ($n(t.props))
        t.anchor = u(
          i(e),
          t,
          a(e),
          n,
          o,
          r,
          s
        ), t.targetAnchor = c;
      else {
        t.anchor = i(e);
        let p = c;
        for (; p; )
          if (p = i(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, d._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        u(
          c,
          t,
          d,
          n,
          o,
          r,
          s
        );
      }
    Tl(t);
  }
  return t.anchor && i(t.anchor);
}
const ed = Xf;
function Tl(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Le = Symbol.for("v-fgt"), Es = Symbol.for("v-txt"), st = Symbol.for("v-cmt"), zo = [];
let Xe = null;
function P(e = !1) {
  zo.push(Xe = e ? null : []);
}
function td() {
  zo.pop(), Xe = zo[zo.length - 1] || null;
}
let ao = 1;
function _i(e) {
  ao += e;
}
function Cl(e) {
  return e.dynamicChildren = ao > 0 ? Xe || hc : null, td(), ao > 0 && Xe && Xe.push(e), e;
}
function B(e, t, n, o, r, s) {
  return Cl(
    U(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function Y(e, t, n, o, r) {
  return Cl(
    ie(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Jo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nl(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && On.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const nd = (...e) => Pl(
  ...e
), Il = "__vInternal", $l = ({ key: e }) => e ?? null, Bo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || ye(e) || G(e) ? { i: pe, r: e, k: t, f: !!n } : e : null);
function U(e, t = null, n = null, o = 0, r = null, s = e === Le ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $l(t),
    ref: t && Bo(t),
    scopeId: gl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return a ? (Os(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ae(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && j("VNode created with invalid key (NaN). VNode type:", l.type), ao > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Xe.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? nd : Pl;
function Pl(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ml) && (process.env.NODE_ENV !== "production" && !e && j(`Invalid vnode type when creating vnode: ${e}.`), e = st), Jo(e)) {
    const a = Ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Os(a, n), ao > 0 && !s && Xe && (a.shapeFlag & 6 ? Xe[Xe.indexOf(e)] = a : Xe.push(a)), a.patchFlag |= -2, a;
  }
  if (Ll(e) && (e = e.__vccOpts), t) {
    t = od(t);
    let { class: a, style: l } = t;
    a && !ae(a) && (t.class = L(a)), J(l) && (Uo(l) && !z(l) && (l = Ae({}, l)), t.style = Ie(l));
  }
  const i = ae(e) ? 1 : Cf(e) ? 128 : Zf(e) ? 64 : J(e) ? 4 : G(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Uo(e) && (e = K(e), j(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), U(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function od(e) {
  return e ? Uo(e) || Il in e ? Ae({}, e) : e : null;
}
function Ut(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, a = t ? wt(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && $l(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? z(r) ? r.concat(Bo(t)) : [r, Bo(t)] : Bo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && z(i) ? i.map(Al) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Le ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ut(e.ssContent),
    ssFallback: e.ssFallback && Ut(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Al(e) {
  const t = Ut(e);
  return z(e.children) && (t.children = e.children.map(Al)), t;
}
function rd(e = " ", t = 0) {
  return ie(Es, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (P(), Y(st, null, e)) : ie(st, null, e);
}
function sd(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ut(e);
}
function Os(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (z(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Os(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Il in t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    G(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [rd(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = L([t.class, o.class]));
      else if (r === "style")
        t.style = Ie([t.style, o.style]);
      else if (gc(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(z(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
let Ne = null;
const Me = () => Ne || pe;
let Yr;
{
  const e = ka(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  Yr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ne = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => lr = n
  );
}
const Rl = (e) => {
  const t = Ne;
  return Yr(e), e.scope.on(), () => {
    e.scope.off(), Yr(t);
  };
};
function id(e) {
  return e.vnode.shapeFlag & 4;
}
let lr = !1;
function Ei(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return me(e, "get", "$attrs"), t[n];
      },
      set() {
        return j("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return j("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return me(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function ad(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
    }
  }));
}
function ld(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && j("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (z(n) ? o = "array" : ye(n) && (o = "ref")), o !== "object" && j(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Ei(e);
    },
    get slots() {
      return ad(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return Ei(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function xl(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(nf(Xc(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in eo)
          return eo[n](e);
      },
      has(t, n) {
        return n in t || n in eo;
      }
    }));
}
const ud = /(?:^|[-_])(\w)/g, cd = (e) => e.replace(ud, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ss(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dl(e, t, n = !1) {
  let o = Ss(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? cd(o) : n ? "App" : "Anonymous";
}
function Ll(e) {
  return G(e) && "__vccOpts" in e;
}
const O = (e, t) => Qc(e, t, lr);
function fd(e, t, n) {
  const o = arguments.length;
  return o === 2 ? J(t) && !z(t) ? Jo(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Jo(n) && (n = [n]), ie(e, t, n));
}
function Cr(e) {
  return !!(e && e.__v_isShallow);
}
function dd() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(c) {
      return J(c) ? c.__isVue ? ["div", e, "VueInstance"] : ye(c) ? [
        "div",
        {},
        ["span", e, d(c)],
        "<",
        a(c.value),
        ">"
      ] : un(c) ? [
        "div",
        {},
        ["span", e, Cr(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${Kt(c) ? " (readonly)" : ""}`
      ] : Kt(c) ? [
        "div",
        {},
        ["span", e, Cr(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const p = [];
    c.type.props && c.props && p.push(i("props", K(c.props))), c.setupState !== Je && p.push(i("setup", c.setupState)), c.data !== Je && p.push(i("data", K(c.data)));
    const g = l(c, "computed");
    g && p.push(i("computed", g));
    const v = l(c, "inject");
    return v && p.push(i("injected", v)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), p;
  }
  function i(c, p) {
    return p = Ae({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((g) => [
          "div",
          {},
          ["span", o, g + ": "],
          a(p[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, p = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : J(c) ? ["object", { object: p ? K(c) : c }] : ["span", n, String(c)];
  }
  function l(c, p) {
    const g = c.type;
    if (G(g))
      return;
    const v = {};
    for (const f in c.ctx)
      u(g, f, p) && (v[f] = c.ctx[f]);
    return v;
  }
  function u(c, p, g) {
    const v = c[g];
    if (z(v) && v.includes(p) || J(v) && p in v || c.extends && u(c.extends, p, g) || c.mixins && c.mixins.some((f) => u(f, p, g)))
      return !0;
  }
  function d(c) {
    return Cr(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const pd = process.env.NODE_ENV !== "production" ? j : je;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const At = "transition", Hn = "animation", Zo = Symbol("_vtc"), mo = (e, { slots: t }) => fd(Lf, vd(e), t);
mo.displayName = "Transition";
const Ml = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
mo.props = /* @__PURE__ */ Ae(
  {},
  yl,
  Ml
);
const en = (e, t = []) => {
  z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Oi = (e) => e ? z(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vd(e) {
  const t = {};
  for (const N in e)
    N in Ml || (t[N] = e[N]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = i,
    appearToClass: d = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, v = hd(r), f = v && v[0], _ = v && v[1], {
    onBeforeEnter: m,
    onEnter: S,
    onEnterCancelled: A,
    onLeave: T,
    onLeaveCancelled: I,
    onBeforeAppear: w = m,
    onAppear: y = S,
    onAppearCancelled: E = A
  } = t, D = (N, V, Z) => {
    tn(N, V ? d : a), tn(N, V ? u : i), Z && Z();
  }, x = (N, V) => {
    N._isLeaving = !1, tn(N, c), tn(N, g), tn(N, p), V && V();
  }, F = (N) => (V, Z) => {
    const re = N ? y : S, te = () => D(V, N, Z);
    en(re, [V, te]), Si(() => {
      tn(V, N ? l : s), Rt(V, N ? d : a), Oi(re) || Ti(V, o, f, te);
    });
  };
  return Ae(t, {
    onBeforeEnter(N) {
      en(m, [N]), Rt(N, s), Rt(N, i);
    },
    onBeforeAppear(N) {
      en(w, [N]), Rt(N, l), Rt(N, u);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(N, V) {
      N._isLeaving = !0;
      const Z = () => x(N, V);
      Rt(N, c), yd(), Rt(N, p), Si(() => {
        N._isLeaving && (tn(N, c), Rt(N, g), Oi(T) || Ti(N, o, _, Z));
      }), en(T, [N, Z]);
    },
    onEnterCancelled(N) {
      D(N, !1), en(A, [N]);
    },
    onAppearCancelled(N) {
      D(N, !0), en(E, [N]);
    },
    onLeaveCancelled(N) {
      x(N), en(I, [N]);
    }
  });
}
function hd(e) {
  if (e == null)
    return null;
  if (J(e))
    return [Nr(e.enter), Nr(e.leave)];
  {
    const t = Nr(e);
    return [t, t];
  }
}
function Nr(e) {
  const t = Tc(e);
  return process.env.NODE_ENV !== "production" && df(t, "<transition> explicit duration"), t;
}
function Rt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zo] || (e[Zo] = /* @__PURE__ */ new Set())).add(t);
}
function tn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Zo];
  n && (n.delete(t), n.size || (e[Zo] = void 0));
}
function Si(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gd = 0;
function Ti(e, t, n, o) {
  const r = e._endId = ++gd, s = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = md(e, t);
  if (!i)
    return o();
  const u = i + "end";
  let d = 0;
  const c = () => {
    e.removeEventListener(u, p), s();
  }, p = (g) => {
    g.target === e && ++d >= l && c();
  };
  setTimeout(() => {
    d < l && c();
  }, a + 1), e.addEventListener(u, p);
}
function md(e, t) {
  const n = window.getComputedStyle(e), o = (v) => (n[v] || "").split(", "), r = o(`${At}Delay`), s = o(`${At}Duration`), i = Ci(r, s), a = o(`${Hn}Delay`), l = o(`${Hn}Duration`), u = Ci(a, l);
  let d = null, c = 0, p = 0;
  t === At ? i > 0 && (d = At, c = i, p = s.length) : t === Hn ? u > 0 && (d = Hn, c = u, p = l.length) : (c = Math.max(i, u), d = c > 0 ? i > u ? At : Hn : null, p = d ? d === At ? s.length : l.length : 0);
  const g = d === At && /\b(transform|all)(,|$)/.test(
    o(`${At}Property`).toString()
  );
  return {
    type: d,
    timeout: c,
    propCount: p,
    hasTransform: g
  };
}
function Ci(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Ni(n) + Ni(e[o])));
}
function Ni(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yd() {
  return document.body.offsetHeight;
}
const Fl = Symbol("_vod"), gn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Fl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Kn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Kn(e, !0), o.enter(e)) : o.leave(e, () => {
      Kn(e, !1);
    }) : Kn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Kn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (gn.name = "show");
function Kn(e, t) {
  e.style.display = t ? e[Fl] : "none";
}
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Un(e, t, n, o) {
  e.addEventListener(t, n, o);
}
const Ii = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return z(t) ? (n) => Oc(t, n) : t;
};
function bd(e) {
  e.target.composing = !0;
}
function $i(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ir = Symbol("_assign"), wd = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Ir] = Ii(r);
    const s = o || r.props && r.props.type === "number";
    Un(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Qs(a)), e[Ir](a);
    }), n && Un(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Un(e, "compositionstart", bd), Un(e, "compositionend", $i), Un(e, "change", $i));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
    if (e[Ir] = Ii(s), e.composing)
      return;
    const i = r || e.type === "number" ? Qs(e.value) : e.value, a = t ?? "";
    i !== a && (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === a) || (e.value = a));
  }
}, _d = ["ctrl", "shift", "alt", "meta"], Ed = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => _d.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ge = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = Ed[t[i]];
      if (a && a(r, t))
        return;
    }
    return e(r, ...s);
  });
}, Od = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Wn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = Ec(r.key);
    if (t.some((i) => i === s || Od[i] === s))
      return e(r);
  });
};
/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Sd() {
  dd();
}
process.env.NODE_ENV !== "production" && Sd();
var Pi;
const be = typeof window < "u", Td = (e) => typeof e == "string", Vl = () => {
}, Cd = be && ((Pi = window == null ? void 0 : window.navigator) == null ? void 0 : Pi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zl(e) {
  return typeof e == "function" ? e() : h(e);
}
function Nd(e) {
  return e;
}
function Id(e, t = !0) {
  Me() ? Oe(e) : t ? e() : he(e);
}
function yt(e) {
  var t;
  const n = zl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ur = be ? window : void 0;
function dn(...e) {
  let t, n, o, r;
  if (Td(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ur) : [t, n, o, r] = e, !t)
    return Vl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], i = () => {
    s.forEach((d) => d()), s.length = 0;
  }, a = (d, c, p, g) => (d.addEventListener(c, p, g), () => d.removeEventListener(c, p, g)), l = q(() => [yt(t), zl(r)], ([d, c]) => {
    i(), d && s.push(...n.flatMap((p) => o.map((g) => a(d, p, g, c))));
  }, { immediate: !0, flush: "post" });
  return () => {
    l(), i();
  };
}
let Ai = !1;
function $d(e, t, n = {}) {
  const { window: o = ur, ignore: r = [], capture: s = !0, detectIframe: i = !1 } = n;
  if (!o)
    return;
  Cd && !Ai && (Ai = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", Vl)));
  let a = !0;
  const l = (p) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = yt(g);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), d = [
    dn(o, "click", (p) => {
      const g = yt(e);
      if (!(!g || g === p.target || p.composedPath().includes(g))) {
        if (p.detail === 0 && (a = !l(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: s }),
    dn(o, "pointerdown", (p) => {
      const g = yt(e);
      g && (a = !p.composedPath().includes(g) && !l(p));
    }, { passive: !0 }),
    i && dn(o, "blur", (p) => {
      var g;
      const v = yt(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function Bl(e, t = !1) {
  const n = R(), o = () => n.value = !!e();
  return o(), Id(o, t), n;
}
const Ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xi = "__vueuse_ssr_handlers__";
Ri[xi] = Ri[xi] || {};
var Di = Object.getOwnPropertySymbols, Pd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, Rd = (e, t) => {
  var n = {};
  for (var o in e)
    Pd.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Di)
    for (var o of Di(e))
      t.indexOf(o) < 0 && Ad.call(e, o) && (n[o] = e[o]);
  return n;
};
function ht(e, t, n = {}) {
  const o = n, { window: r = ur } = o, s = Rd(o, ["window"]);
  let i;
  const a = Bl(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = q(() => yt(e), (c) => {
    l(), a.value && r && c && (i = new ResizeObserver(t), i.observe(c, s));
  }, { immediate: !0, flush: "post" });
  return {
    isSupported: a,
    stop: () => {
      l(), u();
    }
  };
}
var Li = Object.getOwnPropertySymbols, xd = Object.prototype.hasOwnProperty, Dd = Object.prototype.propertyIsEnumerable, Ld = (e, t) => {
  var n = {};
  for (var o in e)
    xd.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Li)
    for (var o of Li(e))
      t.indexOf(o) < 0 && Dd.call(e, o) && (n[o] = e[o]);
  return n;
};
function Md(e, t, n = {}) {
  const o = n, { window: r = ur } = o, s = Ld(o, ["window"]);
  let i;
  const a = Bl(() => r && "MutationObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = q(() => yt(e), (c) => {
    l(), a.value && r && c && (i = new MutationObserver(t), i.observe(c, s));
  }, { immediate: !0 });
  return {
    isSupported: a,
    stop: () => {
      l(), u();
    }
  };
}
var Mi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mi || (Mi = {}));
var Fd = Object.defineProperty, Fi = Object.getOwnPropertySymbols, Vd = Object.prototype.hasOwnProperty, zd = Object.prototype.propertyIsEnumerable, Vi = (e, t, n) => t in e ? Fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bd = (e, t) => {
  for (var n in t || (t = {}))
    Vd.call(t, n) && Vi(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      zd.call(t, n) && Vi(e, n, t[n]);
  return e;
};
const jd = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Bd({
  linear: Nd
}, jd);
const kd = () => be && /firefox/i.test(window.navigator.userAgent);
var jl = typeof global == "object" && global && global.Object === Object && global, Hd = typeof self == "object" && self && self.Object === Object && self, lt = jl || Hd || Function("return this")(), Wt = lt.Symbol, kl = Object.prototype, Kd = kl.hasOwnProperty, Ud = kl.toString, qn = Wt ? Wt.toStringTag : void 0;
function Wd(e) {
  var t = Kd.call(e, qn), n = e[qn];
  try {
    e[qn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Ud.call(e);
  return o && (t ? e[qn] = n : delete e[qn]), r;
}
var qd = Object.prototype, Gd = qd.toString;
function Yd(e) {
  return Gd.call(e);
}
var Jd = "[object Null]", Zd = "[object Undefined]", zi = Wt ? Wt.toStringTag : void 0;
function Vn(e) {
  return e == null ? e === void 0 ? Zd : Jd : zi && zi in Object(e) ? Wd(e) : Yd(e);
}
function Pn(e) {
  return e != null && typeof e == "object";
}
var Xd = "[object Symbol]";
function cr(e) {
  return typeof e == "symbol" || Pn(e) && Vn(e) == Xd;
}
function Qd(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ot = Array.isArray, ep = 1 / 0, Bi = Wt ? Wt.prototype : void 0, ji = Bi ? Bi.toString : void 0;
function Hl(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return Qd(e, Hl) + "";
  if (cr(e))
    return ji ? ji.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ep ? "-0" : t;
}
var tp = /\s/;
function np(e) {
  for (var t = e.length; t-- && tp.test(e.charAt(t)); )
    ;
  return t;
}
var op = /^\s+/;
function rp(e) {
  return e && e.slice(0, np(e) + 1).replace(op, "");
}
function An(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ki = NaN, sp = /^[-+]0x[0-9a-f]+$/i, ip = /^0b[01]+$/i, ap = /^0o[0-7]+$/i, lp = parseInt;
function Jr(e) {
  if (typeof e == "number")
    return e;
  if (cr(e))
    return ki;
  if (An(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = An(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = rp(e);
  var n = ip.test(e);
  return n || ap.test(e) ? lp(e.slice(2), n ? 2 : 8) : sp.test(e) ? ki : +e;
}
var Hi = 1 / 0, up = 17976931348623157e292;
function cp(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Jr(e), e === Hi || e === -Hi) {
    var t = e < 0 ? -1 : 1;
    return t * up;
  }
  return e === e ? e : 0;
}
function fp(e) {
  var t = cp(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function dp(e) {
  return e;
}
var pp = "[object AsyncFunction]", vp = "[object Function]", hp = "[object GeneratorFunction]", gp = "[object Proxy]";
function Kl(e) {
  if (!An(e))
    return !1;
  var t = Vn(e);
  return t == vp || t == hp || t == pp || t == gp;
}
var $r = lt["__core-js_shared__"], Ki = function() {
  var e = /[^.]+$/.exec($r && $r.keys && $r.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mp(e) {
  return !!Ki && Ki in e;
}
var yp = Function.prototype, bp = yp.toString;
function mn(e) {
  if (e != null) {
    try {
      return bp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wp = /[\\^$.*+?()[\]{}|]/g, _p = /^\[object .+?Constructor\]$/, Ep = Function.prototype, Op = Object.prototype, Sp = Ep.toString, Tp = Op.hasOwnProperty, Cp = RegExp(
  "^" + Sp.call(Tp).replace(wp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Np(e) {
  if (!An(e) || mp(e))
    return !1;
  var t = Kl(e) ? Cp : _p;
  return t.test(mn(e));
}
function Ip(e, t) {
  return e == null ? void 0 : e[t];
}
function zn(e, t) {
  var n = Ip(e, t);
  return Np(n) ? n : void 0;
}
var Zr = zn(lt, "WeakMap");
function $p(e, t, n, o) {
  for (var r = e.length, s = n + (o ? 1 : -1); o ? s-- : ++s < r; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var Pp = 9007199254740991, Ap = /^(?:0|[1-9]\d*)$/;
function Ul(e, t) {
  var n = typeof e;
  return t = t ?? Pp, !!t && (n == "number" || n != "symbol" && Ap.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Wl(e, t) {
  return e === t || e !== e && t !== t;
}
var Rp = 9007199254740991;
function Ts(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rp;
}
function xp(e) {
  return e != null && Ts(e.length) && !Kl(e);
}
var Dp = Object.prototype;
function Lp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Dp;
  return e === n;
}
function Mp(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Fp = "[object Arguments]";
function Ui(e) {
  return Pn(e) && Vn(e) == Fp;
}
var ql = Object.prototype, Vp = ql.hasOwnProperty, zp = ql.propertyIsEnumerable, Gl = Ui(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ui : function(e) {
  return Pn(e) && Vp.call(e, "callee") && !zp.call(e, "callee");
};
function Bp() {
  return !1;
}
var Yl = typeof exports == "object" && exports && !exports.nodeType && exports, Wi = Yl && typeof module == "object" && module && !module.nodeType && module, jp = Wi && Wi.exports === Yl, qi = jp ? lt.Buffer : void 0, kp = qi ? qi.isBuffer : void 0, Xr = kp || Bp, Hp = "[object Arguments]", Kp = "[object Array]", Up = "[object Boolean]", Wp = "[object Date]", qp = "[object Error]", Gp = "[object Function]", Yp = "[object Map]", Jp = "[object Number]", Zp = "[object Object]", Xp = "[object RegExp]", Qp = "[object Set]", ev = "[object String]", tv = "[object WeakMap]", nv = "[object ArrayBuffer]", ov = "[object DataView]", rv = "[object Float32Array]", sv = "[object Float64Array]", iv = "[object Int8Array]", av = "[object Int16Array]", lv = "[object Int32Array]", uv = "[object Uint8Array]", cv = "[object Uint8ClampedArray]", fv = "[object Uint16Array]", dv = "[object Uint32Array]", se = {};
se[rv] = se[sv] = se[iv] = se[av] = se[lv] = se[uv] = se[cv] = se[fv] = se[dv] = !0;
se[Hp] = se[Kp] = se[nv] = se[Up] = se[ov] = se[Wp] = se[qp] = se[Gp] = se[Yp] = se[Jp] = se[Zp] = se[Xp] = se[Qp] = se[ev] = se[tv] = !1;
function pv(e) {
  return Pn(e) && Ts(e.length) && !!se[Vn(e)];
}
function vv(e) {
  return function(t) {
    return e(t);
  };
}
var Jl = typeof exports == "object" && exports && !exports.nodeType && exports, to = Jl && typeof module == "object" && module && !module.nodeType && module, hv = to && to.exports === Jl, Pr = hv && jl.process, Gi = function() {
  try {
    var e = to && to.require && to.require("util").types;
    return e || Pr && Pr.binding && Pr.binding("util");
  } catch {
  }
}(), Yi = Gi && Gi.isTypedArray, Zl = Yi ? vv(Yi) : pv, gv = Object.prototype, mv = gv.hasOwnProperty;
function yv(e, t) {
  var n = Ot(e), o = !n && Gl(e), r = !n && !o && Xr(e), s = !n && !o && !r && Zl(e), i = n || o || r || s, a = i ? Mp(e.length, String) : [], l = a.length;
  for (var u in e)
    (t || mv.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ul(u, l))) && a.push(u);
  return a;
}
function bv(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var wv = bv(Object.keys, Object), _v = Object.prototype, Ev = _v.hasOwnProperty;
function Ov(e) {
  if (!Lp(e))
    return wv(e);
  var t = [];
  for (var n in Object(e))
    Ev.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Xl(e) {
  return xp(e) ? yv(e) : Ov(e);
}
var Sv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tv = /^\w*$/;
function Cs(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || cr(e) ? !0 : Tv.test(e) || !Sv.test(e) || t != null && e in Object(t);
}
var lo = zn(Object, "create");
function Cv() {
  this.__data__ = lo ? lo(null) : {}, this.size = 0;
}
function Nv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Iv = "__lodash_hash_undefined__", $v = Object.prototype, Pv = $v.hasOwnProperty;
function Av(e) {
  var t = this.__data__;
  if (lo) {
    var n = t[e];
    return n === Iv ? void 0 : n;
  }
  return Pv.call(t, e) ? t[e] : void 0;
}
var Rv = Object.prototype, xv = Rv.hasOwnProperty;
function Dv(e) {
  var t = this.__data__;
  return lo ? t[e] !== void 0 : xv.call(t, e);
}
var Lv = "__lodash_hash_undefined__";
function Mv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = lo && t === void 0 ? Lv : t, this;
}
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
vn.prototype.clear = Cv;
vn.prototype.delete = Nv;
vn.prototype.get = Av;
vn.prototype.has = Dv;
vn.prototype.set = Mv;
function Fv() {
  this.__data__ = [], this.size = 0;
}
function fr(e, t) {
  for (var n = e.length; n--; )
    if (Wl(e[n][0], t))
      return n;
  return -1;
}
var Vv = Array.prototype, zv = Vv.splice;
function Bv(e) {
  var t = this.__data__, n = fr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : zv.call(t, n, 1), --this.size, !0;
}
function jv(e) {
  var t = this.__data__, n = fr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function kv(e) {
  return fr(this.__data__, e) > -1;
}
function Hv(e, t) {
  var n = this.__data__, o = fr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Tt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tt.prototype.clear = Fv;
Tt.prototype.delete = Bv;
Tt.prototype.get = jv;
Tt.prototype.has = kv;
Tt.prototype.set = Hv;
var uo = zn(lt, "Map");
function Kv() {
  this.size = 0, this.__data__ = {
    hash: new vn(),
    map: new (uo || Tt)(),
    string: new vn()
  };
}
function Uv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function dr(e, t) {
  var n = e.__data__;
  return Uv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Wv(e) {
  var t = dr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function qv(e) {
  return dr(this, e).get(e);
}
function Gv(e) {
  return dr(this, e).has(e);
}
function Yv(e, t) {
  var n = dr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ct.prototype.clear = Kv;
Ct.prototype.delete = Wv;
Ct.prototype.get = qv;
Ct.prototype.has = Gv;
Ct.prototype.set = Yv;
var Jv = "Expected a function";
function Ns(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Jv);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var i = e.apply(this, o);
    return n.cache = s.set(r, i) || s, i;
  };
  return n.cache = new (Ns.Cache || Ct)(), n;
}
Ns.Cache = Ct;
var Zv = 500;
function Xv(e) {
  var t = Ns(e, function(o) {
    return n.size === Zv && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Qv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eh = /\\(\\)?/g, th = Xv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Qv, function(n, o, r, s) {
    t.push(r ? s.replace(eh, "$1") : o || n);
  }), t;
});
function nh(e) {
  return e == null ? "" : Hl(e);
}
function Ql(e, t) {
  return Ot(e) ? e : Cs(e, t) ? [e] : th(nh(e));
}
var oh = 1 / 0;
function pr(e) {
  if (typeof e == "string" || cr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -oh ? "-0" : t;
}
function eu(e, t) {
  t = Ql(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[pr(t[n++])];
  return n && n == o ? e : void 0;
}
function gt(e, t, n) {
  var o = e == null ? void 0 : eu(e, t);
  return o === void 0 ? n : o;
}
function rh(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
function sh() {
  this.__data__ = new Tt(), this.size = 0;
}
function ih(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ah(e) {
  return this.__data__.get(e);
}
function lh(e) {
  return this.__data__.has(e);
}
var uh = 200;
function ch(e, t) {
  var n = this.__data__;
  if (n instanceof Tt) {
    var o = n.__data__;
    if (!uo || o.length < uh - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ct(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function _t(e) {
  var t = this.__data__ = new Tt(e);
  this.size = t.size;
}
_t.prototype.clear = sh;
_t.prototype.delete = ih;
_t.prototype.get = ah;
_t.prototype.has = lh;
_t.prototype.set = ch;
function fh(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var i = e[n];
    t(i, n, e) && (s[r++] = i);
  }
  return s;
}
function dh() {
  return [];
}
var ph = Object.prototype, vh = ph.propertyIsEnumerable, Ji = Object.getOwnPropertySymbols, hh = Ji ? function(e) {
  return e == null ? [] : (e = Object(e), fh(Ji(e), function(t) {
    return vh.call(e, t);
  }));
} : dh;
const gh = hh;
function mh(e, t, n) {
  var o = t(e);
  return Ot(e) ? o : rh(o, n(e));
}
function Zi(e) {
  return mh(e, Xl, gh);
}
var Qr = zn(lt, "DataView"), es = zn(lt, "Promise"), ts = zn(lt, "Set"), Xi = "[object Map]", yh = "[object Object]", Qi = "[object Promise]", ea = "[object Set]", ta = "[object WeakMap]", na = "[object DataView]", bh = mn(Qr), wh = mn(uo), _h = mn(es), Eh = mn(ts), Oh = mn(Zr), on = Vn;
(Qr && on(new Qr(new ArrayBuffer(1))) != na || uo && on(new uo()) != Xi || es && on(es.resolve()) != Qi || ts && on(new ts()) != ea || Zr && on(new Zr()) != ta) && (on = function(e) {
  var t = Vn(e), n = t == yh ? e.constructor : void 0, o = n ? mn(n) : "";
  if (o)
    switch (o) {
      case bh:
        return na;
      case wh:
        return Xi;
      case _h:
        return Qi;
      case Eh:
        return ea;
      case Oh:
        return ta;
    }
  return t;
});
const oa = on;
var Sh = lt.Uint8Array;
const ra = Sh;
var Th = "__lodash_hash_undefined__";
function Ch(e) {
  return this.__data__.set(e, Th), this;
}
function Nh(e) {
  return this.__data__.has(e);
}
function Xo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ct(); ++t < n; )
    this.add(e[t]);
}
Xo.prototype.add = Xo.prototype.push = Ch;
Xo.prototype.has = Nh;
function Ih(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function $h(e, t) {
  return e.has(t);
}
var Ph = 1, Ah = 2;
function tu(e, t, n, o, r, s) {
  var i = n & Ph, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var u = s.get(e), d = s.get(t);
  if (u && d)
    return u == t && d == e;
  var c = -1, p = !0, g = n & Ah ? new Xo() : void 0;
  for (s.set(e, t), s.set(t, e); ++c < a; ) {
    var v = e[c], f = t[c];
    if (o)
      var _ = i ? o(f, v, c, t, e, s) : o(v, f, c, e, t, s);
    if (_ !== void 0) {
      if (_)
        continue;
      p = !1;
      break;
    }
    if (g) {
      if (!Ih(t, function(m, S) {
        if (!$h(g, S) && (v === m || r(v, m, n, o, s)))
          return g.push(S);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === f || r(v, f, n, o, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), p;
}
function Rh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function xh(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Dh = 1, Lh = 2, Mh = "[object Boolean]", Fh = "[object Date]", Vh = "[object Error]", zh = "[object Map]", Bh = "[object Number]", jh = "[object RegExp]", kh = "[object Set]", Hh = "[object String]", Kh = "[object Symbol]", Uh = "[object ArrayBuffer]", Wh = "[object DataView]", sa = Wt ? Wt.prototype : void 0, Ar = sa ? sa.valueOf : void 0;
function qh(e, t, n, o, r, s, i) {
  switch (n) {
    case Wh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Uh:
      return !(e.byteLength != t.byteLength || !s(new ra(e), new ra(t)));
    case Mh:
    case Fh:
    case Bh:
      return Wl(+e, +t);
    case Vh:
      return e.name == t.name && e.message == t.message;
    case jh:
    case Hh:
      return e == t + "";
    case zh:
      var a = Rh;
    case kh:
      var l = o & Dh;
      if (a || (a = xh), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      o |= Lh, i.set(e, t);
      var d = tu(a(e), a(t), o, r, s, i);
      return i.delete(e), d;
    case Kh:
      if (Ar)
        return Ar.call(e) == Ar.call(t);
  }
  return !1;
}
var Gh = 1, Yh = Object.prototype, Jh = Yh.hasOwnProperty;
function Zh(e, t, n, o, r, s) {
  var i = n & Gh, a = Zi(e), l = a.length, u = Zi(t), d = u.length;
  if (l != d && !i)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(i ? p in t : Jh.call(t, p)))
      return !1;
  }
  var g = s.get(e), v = s.get(t);
  if (g && v)
    return g == t && v == e;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var _ = i; ++c < l; ) {
    p = a[c];
    var m = e[p], S = t[p];
    if (o)
      var A = i ? o(S, m, p, t, e, s) : o(m, S, p, e, t, s);
    if (!(A === void 0 ? m === S || r(m, S, n, o, s) : A)) {
      f = !1;
      break;
    }
    _ || (_ = p == "constructor");
  }
  if (f && !_) {
    var T = e.constructor, I = t.constructor;
    T != I && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof I == "function" && I instanceof I) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
}
var Xh = 1, ia = "[object Arguments]", aa = "[object Array]", xo = "[object Object]", Qh = Object.prototype, la = Qh.hasOwnProperty;
function eg(e, t, n, o, r, s) {
  var i = Ot(e), a = Ot(t), l = i ? aa : oa(e), u = a ? aa : oa(t);
  l = l == ia ? xo : l, u = u == ia ? xo : u;
  var d = l == xo, c = u == xo, p = l == u;
  if (p && Xr(e)) {
    if (!Xr(t))
      return !1;
    i = !0, d = !1;
  }
  if (p && !d)
    return s || (s = new _t()), i || Zl(e) ? tu(e, t, n, o, r, s) : qh(e, t, l, n, o, r, s);
  if (!(n & Xh)) {
    var g = d && la.call(e, "__wrapped__"), v = c && la.call(t, "__wrapped__");
    if (g || v) {
      var f = g ? e.value() : e, _ = v ? t.value() : t;
      return s || (s = new _t()), r(f, _, n, o, s);
    }
  }
  return p ? (s || (s = new _t()), Zh(e, t, n, o, r, s)) : !1;
}
function vr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Pn(e) && !Pn(t) ? e !== e && t !== t : eg(e, t, n, o, vr, r);
}
var tg = 1, ng = 2;
function og(e, t, n, o) {
  var r = n.length, s = r, i = !o;
  if (e == null)
    return !s;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (i && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < s; ) {
    a = n[r];
    var l = a[0], u = e[l], d = a[1];
    if (i && a[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var c = new _t();
      if (o)
        var p = o(u, d, l, e, t, c);
      if (!(p === void 0 ? vr(d, u, tg | ng, o, c) : p))
        return !1;
    }
  }
  return !0;
}
function nu(e) {
  return e === e && !An(e);
}
function rg(e) {
  for (var t = Xl(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, nu(r)];
  }
  return t;
}
function ou(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function sg(e) {
  var t = rg(e);
  return t.length == 1 && t[0][2] ? ou(t[0][0], t[0][1]) : function(n) {
    return n === e || og(n, e, t);
  };
}
function ig(e, t) {
  return e != null && t in Object(e);
}
function ag(e, t, n) {
  t = Ql(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var i = pr(t[o]);
    if (!(s = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && Ts(r) && Ul(i, r) && (Ot(e) || Gl(e)));
}
function lg(e, t) {
  return e != null && ag(e, t, ig);
}
var ug = 1, cg = 2;
function fg(e, t) {
  return Cs(e) && nu(t) ? ou(pr(e), t) : function(n) {
    var o = gt(n, e);
    return o === void 0 && o === t ? lg(n, e) : vr(t, o, ug | cg);
  };
}
function dg(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function pg(e) {
  return function(t) {
    return eu(t, e);
  };
}
function vg(e) {
  return Cs(e) ? dg(pr(e)) : pg(e);
}
function hg(e) {
  return typeof e == "function" ? e : e == null ? dp : typeof e == "object" ? Ot(e) ? fg(e[0], e[1]) : sg(e) : vg(e);
}
var Rr = function() {
  return lt.Date.now();
}, gg = "Expected a function", mg = Math.max, yg = Math.min;
function bg(e, t, n) {
  var o, r, s, i, a, l, u = 0, d = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(gg);
  t = Jr(t) || 0, An(n) && (d = !!n.leading, c = "maxWait" in n, s = c ? mg(Jr(n.maxWait) || 0, t) : s, p = "trailing" in n ? !!n.trailing : p);
  function g(w) {
    var y = o, E = r;
    return o = r = void 0, u = w, i = e.apply(E, y), i;
  }
  function v(w) {
    return u = w, a = setTimeout(m, t), d ? g(w) : i;
  }
  function f(w) {
    var y = w - l, E = w - u, D = t - y;
    return c ? yg(D, s - E) : D;
  }
  function _(w) {
    var y = w - l, E = w - u;
    return l === void 0 || y >= t || y < 0 || c && E >= s;
  }
  function m() {
    var w = Rr();
    if (_(w))
      return S(w);
    a = setTimeout(m, f(w));
  }
  function S(w) {
    return a = void 0, p && o ? g(w) : (o = r = void 0, i);
  }
  function A() {
    a !== void 0 && clearTimeout(a), u = 0, o = l = r = a = void 0;
  }
  function T() {
    return a === void 0 ? i : S(Rr());
  }
  function I() {
    var w = Rr(), y = _(w);
    if (o = arguments, r = this, l = w, y) {
      if (a === void 0)
        return v(l);
      if (c)
        return clearTimeout(a), a = setTimeout(m, t), g(l);
    }
    return a === void 0 && (a = setTimeout(m, t)), i;
  }
  return I.cancel = A, I.flush = T, I;
}
var wg = Math.max, _g = Math.min;
function Eg(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return n !== void 0 && (r = fp(n), r = n < 0 ? wg(o + r, 0) : _g(r, o - 1)), $p(e, hg(t), r, !0);
}
function Qo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function co(e, t) {
  return vr(e, t);
}
function hr(e) {
  return e == null;
}
function Og(e) {
  return e === void 0;
}
const ru = (e) => e === void 0, su = (e) => typeof e == "boolean", De = (e) => typeof e == "number", fo = (e) => typeof Element > "u" ? !1 : e instanceof Element, Sg = (e) => ae(e) ? !Number.isNaN(Number(e)) : !1, Tg = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class iu extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cg(e, t) {
  throw new iu(`[${e}] ${t}`);
}
function ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ae(e) ? new iu(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ng = "utils/dom/style";
function ns(e, t = "px") {
  if (!e)
    return "";
  if (De(e) || Sg(e))
    return `${e}${t}`;
  if (ae(e))
    return e;
  ke(Ng, "binding value must be a string or number");
}
function Ig(e, t) {
  if (!be)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), s = r + t.offsetHeight, i = e.scrollTop, a = i + e.clientHeight;
  r < i ? e.scrollTop = r : s > a && (e.scrollTop = s - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var $g = /* @__PURE__ */ W({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Pg = $g, Ag = /* @__PURE__ */ W({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      U("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Rg = Ag, xg = /* @__PURE__ */ W({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      U("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Is = xg, Dg = /* @__PURE__ */ W({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ua = Dg, Lg = /* @__PURE__ */ W({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      U("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Mg = Lg, Fg = /* @__PURE__ */ W({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Vg = Fg, zg = /* @__PURE__ */ W({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (P(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Bg = zg;
const au = "__epPropKey", Q = (e) => e, jg = (e) => J(e) && !!e[au], gr = (e, t) => {
  if (!J(e) || jg(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: i } = e, l = {
    type: s,
    required: !!o,
    validator: n || i ? (u) => {
      let d = !1, c = [];
      if (n && (c = Array.from(n), ce(e, "default") && c.push(r), d || (d = c.includes(u))), i && (d || (d = i(u))), !d && c.length > 0) {
        const p = [...new Set(c)].map((g) => JSON.stringify(g)).join(", ");
        pd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [au]: !0
  };
  return ce(e, "default") && (l.default = r), l;
}, _e = (e) => Qo(Object.entries(e).map(([t, n]) => [
  t,
  gr(n, t)
])), er = Q([
  String,
  Object,
  Function
]), lu = {
  validating: Vg,
  success: Rg,
  error: Is
}, yn = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, uu = (e) => (e.install = je, e), po = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Ye = "update:modelValue", cu = "change", fu = ["", "default", "small", "large"], du = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), kg = (e) => e, Hg = ["class", "style"], Kg = /^on[A-Z]/, Ug = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = O(() => ((n == null ? void 0 : n.value) || []).concat(Hg)), r = Me();
  return r ? O(() => {
    var s;
    return Qo(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([i]) => !o.value.includes(i) && !(t && Kg.test(i))));
  }) : (ke("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), O(() => ({})));
}, Wg = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, i) => {
  q(() => h(i), (a) => {
    a && ke(n, `[${s}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var qg = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const Gg = (e) => (t, n) => Yg(t, n, h(e)), Yg = (e, t, n) => gt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t == null ? void 0 : t[r]) != null ? s : `{${r}}`}`;
}), Jg = (e) => {
  const t = O(() => h(e).name), n = ye(e) ? e : R(e);
  return {
    lang: t,
    locale: n,
    t: Gg(e)
  };
}, Zg = Symbol("localeContextKey"), Xg = (e) => {
  const t = e || le(Zg, R());
  return Jg(O(() => t.value || qg));
}, xr = "el", Qg = "is-", nn = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, em = Symbol("namespaceContextKey"), $s = (e) => {
  const t = e || (Me() ? le(em, R(xr)) : R(xr));
  return O(() => h(t) || xr);
}, we = (e, t) => {
  const n = $s(t);
  return {
    namespace: n,
    b: (f = "") => nn(n.value, e, f, "", ""),
    e: (f) => f ? nn(n.value, e, "", f, "") : "",
    m: (f) => f ? nn(n.value, e, "", "", f) : "",
    be: (f, _) => f && _ ? nn(n.value, e, f, _, "") : "",
    em: (f, _) => f && _ ? nn(n.value, e, "", f, _) : "",
    bm: (f, _) => f && _ ? nn(n.value, e, f, "", _) : "",
    bem: (f, _, m) => f && _ && m ? nn(n.value, e, f, _, m) : "",
    is: (f, ..._) => {
      const m = _.length >= 1 ? _[0] : !0;
      return f && m ? `${Qg}${f}` : "";
    },
    cssVar: (f) => {
      const _ = {};
      for (const m in f)
        f[m] && (_[`--${n.value}-${m}`] = f[m]);
      return _;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const _ = {};
      for (const m in f)
        f[m] && (_[`--${n.value}-${e}-${m}`] = f[m]);
      return _;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, tm = gr({
  type: Q(Boolean),
  default: null
}), nm = gr({
  type: Q(Function)
}), pu = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: tm,
    [n]: nm
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: d,
      onHide: c
    }) => {
      const p = Me(), { emit: g } = p, v = p.props, f = O(() => G(v[n])), _ = O(() => v[e] === null), m = (y) => {
        i.value !== !0 && (i.value = !0, a && (a.value = y), G(d) && d(y));
      }, S = (y) => {
        i.value !== !1 && (i.value = !1, a && (a.value = y), G(c) && c(y));
      }, A = (y) => {
        if (v.disabled === !0 || G(u) && !u())
          return;
        const E = f.value && be;
        E && g(t, !0), (_.value || !E) && m(y);
      }, T = (y) => {
        if (v.disabled === !0 || !be)
          return;
        const E = f.value && be;
        E && g(t, !1), (_.value || !E) && S(y);
      }, I = (y) => {
        su(y) && (v.disabled && y ? f.value && g(t, !1) : i.value !== y && (y ? m() : S()));
      }, w = () => {
        i.value ? T() : A();
      };
      return q(() => v[e], I), l && p.appContext.config.globalProperties.$route !== void 0 && q(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && i.value && T();
      }), Oe(() => {
        I(v[e]);
      }), {
        hide: T,
        show: A,
        toggle: w,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
pu("modelValue");
const vu = (e) => {
  const t = Me();
  return O(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
};
var $e = "top", Ke = "bottom", Ue = "right", Pe = "left", Ps = "auto", yo = [$e, Ke, Ue, Pe], Rn = "start", vo = "end", om = "clippingParents", hu = "viewport", Gn = "popper", rm = "reference", ca = yo.reduce(function(e, t) {
  return e.concat([t + "-" + Rn, t + "-" + vo]);
}, []), mr = [].concat(yo, [Ps]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rn, t + "-" + vo]);
}, []), sm = "beforeRead", im = "read", am = "afterRead", lm = "beforeMain", um = "main", cm = "afterMain", fm = "beforeWrite", dm = "write", pm = "afterWrite", vm = [sm, im, am, lm, um, cm, fm, dm, pm];
function at(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function xn(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function He(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function As(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !He(s) || !at(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
      var a = r[i];
      a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function gm(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !He(r) || !at(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var gu = { name: "applyStyles", enabled: !0, phase: "write", fn: hm, effect: gm, requires: ["computeStyles"] };
function it(e) {
  return e.split("-")[0];
}
var pn = Math.max, tr = Math.min, Dn = Math.round;
function Ln(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (He(e) && t) {
    var s = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (o = Dn(n.width) / i || 1), s > 0 && (r = Dn(n.height) / s || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function Rs(e) {
  var t = Ln(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function mu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && As(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function St(e) {
  return et(e).getComputedStyle(e);
}
function mm(e) {
  return ["table", "td", "th"].indexOf(at(e)) >= 0;
}
function qt(e) {
  return ((xn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yr(e) {
  return at(e) === "html" ? e : e.assignedSlot || e.parentNode || (As(e) ? e.host : null) || qt(e);
}
function fa(e) {
  return !He(e) || St(e).position === "fixed" ? null : e.offsetParent;
}
function ym(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && He(e)) {
    var o = St(e);
    if (o.position === "fixed")
      return null;
  }
  var r = yr(e);
  for (As(r) && (r = r.host); He(r) && ["html", "body"].indexOf(at(r)) < 0; ) {
    var s = St(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function bo(e) {
  for (var t = et(e), n = fa(e); n && mm(n) && St(n).position === "static"; )
    n = fa(n);
  return n && (at(n) === "html" || at(n) === "body" && St(n).position === "static") ? t : n || ym(e) || t;
}
function xs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function no(e, t, n) {
  return pn(e, tr(t, n));
}
function bm(e, t, n) {
  var o = no(e, t, n);
  return o > n ? n : o;
}
function yu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bu(e) {
  return Object.assign({}, yu(), e);
}
function wu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var wm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, bu(typeof e != "number" ? e : wu(e, yo));
};
function _m(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, a = it(n.placement), l = xs(a), u = [Pe, Ue].indexOf(a) >= 0, d = u ? "height" : "width";
  if (!(!s || !i)) {
    var c = wm(r.padding, n), p = Rs(s), g = l === "y" ? $e : Pe, v = l === "y" ? Ke : Ue, f = n.rects.reference[d] + n.rects.reference[l] - i[l] - n.rects.popper[d], _ = i[l] - n.rects.reference[l], m = bo(s), S = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, A = f / 2 - _ / 2, T = c[g], I = S - p[d] - c[v], w = S / 2 - p[d] / 2 + A, y = no(T, w, I), E = l;
    n.modifiersData[o] = (t = {}, t[E] = y, t.centerOffset = y - w, t);
  }
}
function Em(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !mu(t.elements.popper, r) || (t.elements.arrow = r));
}
var Om = { name: "arrow", enabled: !0, phase: "main", fn: _m, effect: Em, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Mn(e) {
  return e.split("-")[1];
}
var Sm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Tm(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Dn(t * r) / r || 0, y: Dn(n * r) / r || 0 };
}
function da(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, p = i.x, g = p === void 0 ? 0 : p, v = i.y, f = v === void 0 ? 0 : v, _ = typeof d == "function" ? d({ x: g, y: f }) : { x: g, y: f };
  g = _.x, f = _.y;
  var m = i.hasOwnProperty("x"), S = i.hasOwnProperty("y"), A = Pe, T = $e, I = window;
  if (u) {
    var w = bo(n), y = "clientHeight", E = "clientWidth";
    if (w === et(n) && (w = qt(n), St(w).position !== "static" && a === "absolute" && (y = "scrollHeight", E = "scrollWidth")), w = w, r === $e || (r === Pe || r === Ue) && s === vo) {
      T = Ke;
      var D = c && w === I && I.visualViewport ? I.visualViewport.height : w[y];
      f -= D - o.height, f *= l ? 1 : -1;
    }
    if (r === Pe || (r === $e || r === Ke) && s === vo) {
      A = Ue;
      var x = c && w === I && I.visualViewport ? I.visualViewport.width : w[E];
      g -= x - o.width, g *= l ? 1 : -1;
    }
  }
  var F = Object.assign({ position: a }, u && Sm), N = d === !0 ? Tm({ x: g, y: f }) : { x: g, y: f };
  if (g = N.x, f = N.y, l) {
    var V;
    return Object.assign({}, F, (V = {}, V[T] = S ? "0" : "", V[A] = m ? "0" : "", V.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", V));
  }
  return Object.assign({}, F, (t = {}, t[T] = S ? f + "px" : "", t[A] = m ? g + "px" : "", t.transform = "", t));
}
function Cm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, i = s === void 0 ? !0 : s, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = { placement: it(t.placement), variation: Mn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, da(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, da(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var _u = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Cm, data: {} }, Do = { passive: !0 };
function Nm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, i = o.resize, a = i === void 0 ? !0 : i, l = et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Do);
  }), a && l.addEventListener("resize", n.update, Do), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Do);
    }), a && l.removeEventListener("resize", n.update, Do);
  };
}
var Eu = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Nm, data: {} }, Im = { left: "right", right: "left", bottom: "top", top: "bottom" };
function jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Im[t];
  });
}
var $m = { start: "end", end: "start" };
function pa(e) {
  return e.replace(/start|end/g, function(t) {
    return $m[t];
  });
}
function Ds(e) {
  var t = et(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Ls(e) {
  return Ln(qt(e)).left + Ds(e).scrollLeft;
}
function Pm(e) {
  var t = et(e), n = qt(e), o = t.visualViewport, r = n.clientWidth, s = n.clientHeight, i = 0, a = 0;
  return o && (r = o.width, s = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, a = o.offsetTop)), { width: r, height: s, x: i + Ls(e), y: a };
}
function Am(e) {
  var t, n = qt(e), o = Ds(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = pn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = pn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Ls(e), l = -o.scrollTop;
  return St(r || n).direction === "rtl" && (a += pn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: i, x: a, y: l };
}
function Ms(e) {
  var t = St(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Ou(e) {
  return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : He(e) && Ms(e) ? e : Ou(yr(e));
}
function oo(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ou(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = et(o), i = r ? [s].concat(s.visualViewport || [], Ms(o) ? o : []) : o, a = t.concat(i);
  return r ? a : a.concat(oo(yr(i)));
}
function os(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Rm(e) {
  var t = Ln(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function va(e, t) {
  return t === hu ? os(Pm(e)) : xn(t) ? Rm(t) : os(Am(qt(e)));
}
function xm(e) {
  var t = oo(yr(e)), n = ["absolute", "fixed"].indexOf(St(e).position) >= 0, o = n && He(e) ? bo(e) : e;
  return xn(o) ? t.filter(function(r) {
    return xn(r) && mu(r, o) && at(r) !== "body";
  }) : [];
}
function Dm(e, t, n) {
  var o = t === "clippingParents" ? xm(e) : [].concat(t), r = [].concat(o, [n]), s = r[0], i = r.reduce(function(a, l) {
    var u = va(e, l);
    return a.top = pn(u.top, a.top), a.right = tr(u.right, a.right), a.bottom = tr(u.bottom, a.bottom), a.left = pn(u.left, a.left), a;
  }, va(e, s));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Su(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? it(o) : null, s = o ? Mn(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case $e:
      l = { x: i, y: t.y - n.height };
      break;
    case Ke:
      l = { x: i, y: t.y + t.height };
      break;
    case Ue:
      l = { x: t.x + t.width, y: a };
      break;
    case Pe:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? xs(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case Rn:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case vo:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function ho(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.boundary, i = s === void 0 ? om : s, a = n.rootBoundary, l = a === void 0 ? hu : a, u = n.elementContext, d = u === void 0 ? Gn : u, c = n.altBoundary, p = c === void 0 ? !1 : c, g = n.padding, v = g === void 0 ? 0 : g, f = bu(typeof v != "number" ? v : wu(v, yo)), _ = d === Gn ? rm : Gn, m = e.rects.popper, S = e.elements[p ? _ : d], A = Dm(xn(S) ? S : S.contextElement || qt(e.elements.popper), i, l), T = Ln(e.elements.reference), I = Su({ reference: T, element: m, strategy: "absolute", placement: r }), w = os(Object.assign({}, m, I)), y = d === Gn ? w : T, E = { top: A.top - y.top + f.top, bottom: y.bottom - A.bottom + f.bottom, left: A.left - y.left + f.left, right: y.right - A.right + f.right }, D = e.modifiersData.offset;
  if (d === Gn && D) {
    var x = D[r];
    Object.keys(E).forEach(function(F) {
      var N = [Ue, Ke].indexOf(F) >= 0 ? 1 : -1, V = [$e, Ke].indexOf(F) >= 0 ? "y" : "x";
      E[F] += x[V] * N;
    });
  }
  return E;
}
function Lm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? mr : l, d = Mn(o), c = d ? a ? ca : ca.filter(function(v) {
    return Mn(v) === d;
  }) : yo, p = c.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = c);
  var g = p.reduce(function(v, f) {
    return v[f] = ho(e, { placement: f, boundary: r, rootBoundary: s, padding: i })[it(f)], v;
  }, {});
  return Object.keys(g).sort(function(v, f) {
    return g[v] - g[f];
  });
}
function Mm(e) {
  if (it(e) === Ps)
    return [];
  var t = jo(e);
  return [pa(e), t, pa(t)];
}
function Fm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, d = n.boundary, c = n.rootBoundary, p = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, _ = t.options.placement, m = it(_), S = m === _, A = l || (S || !v ? [jo(_)] : Mm(_)), T = [_].concat(A).reduce(function(We, Se) {
      return We.concat(it(Se) === Ps ? Lm(t, { placement: Se, boundary: d, rootBoundary: c, padding: u, flipVariations: v, allowedAutoPlacements: f }) : Se);
    }, []), I = t.rects.reference, w = t.rects.popper, y = /* @__PURE__ */ new Map(), E = !0, D = T[0], x = 0; x < T.length; x++) {
      var F = T[x], N = it(F), V = Mn(F) === Rn, Z = [$e, Ke].indexOf(N) >= 0, re = Z ? "width" : "height", te = ho(t, { placement: F, boundary: d, rootBoundary: c, altBoundary: p, padding: u }), M = Z ? V ? Ue : Pe : V ? Ke : $e;
      I[re] > w[re] && (M = jo(M));
      var ve = jo(M), fe = [];
      if (s && fe.push(te[N] <= 0), a && fe.push(te[M] <= 0, te[ve] <= 0), fe.every(function(We) {
        return We;
      })) {
        D = F, E = !1;
        break;
      }
      y.set(F, fe);
    }
    if (E)
      for (var Fe = v ? 3 : 1, Re = function(We) {
        var Se = T.find(function(ut) {
          var ct = y.get(ut);
          if (ct)
            return ct.slice(0, We).every(function(Te) {
              return Te;
            });
        });
        if (Se)
          return D = Se, "break";
      }, ne = Fe; ne > 0; ne--) {
        var tt = Re(ne);
        if (tt === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[o]._skip = !0, t.placement = D, t.reset = !0);
  }
}
var Vm = { name: "flip", enabled: !0, phase: "main", fn: Fm, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ha(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ga(e) {
  return [$e, Ue, Ke, Pe].some(function(t) {
    return e[t] >= 0;
  });
}
function zm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = ho(t, { elementContext: "reference" }), a = ho(t, { altBoundary: !0 }), l = ha(i, o), u = ha(a, r, s), d = ga(l), c = ga(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: c }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": c });
}
var Bm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: zm };
function jm(e, t, n) {
  var o = it(e), r = [Pe, $e].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = s[0], a = s[1];
  return i = i || 0, a = (a || 0) * r, [Pe, Ue].indexOf(o) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function km(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, i = mr.reduce(function(d, c) {
    return d[c] = jm(c, t.rects, s), d;
  }, {}), a = i[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = i;
}
var Hm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: km };
function Km(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Su({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Tu = { name: "popperOffsets", enabled: !0, phase: "read", fn: Km, data: {} };
function Um(e) {
  return e === "x" ? "y" : "x";
}
function Wm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, c = n.padding, p = n.tether, g = p === void 0 ? !0 : p, v = n.tetherOffset, f = v === void 0 ? 0 : v, _ = ho(t, { boundary: l, rootBoundary: u, padding: c, altBoundary: d }), m = it(t.placement), S = Mn(t.placement), A = !S, T = xs(m), I = Um(T), w = t.modifiersData.popperOffsets, y = t.rects.reference, E = t.rects.popper, D = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, x = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = { x: 0, y: 0 };
  if (w) {
    if (s) {
      var V, Z = T === "y" ? $e : Pe, re = T === "y" ? Ke : Ue, te = T === "y" ? "height" : "width", M = w[T], ve = M + _[Z], fe = M - _[re], Fe = g ? -E[te] / 2 : 0, Re = S === Rn ? y[te] : E[te], ne = S === Rn ? -E[te] : -y[te], tt = t.elements.arrow, We = g && tt ? Rs(tt) : { width: 0, height: 0 }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yu(), ut = Se[Z], ct = Se[re], Te = no(0, y[te], We[te]), wo = A ? y[te] / 2 - Fe - Te - ut - x.mainAxis : Re - Te - ut - x.mainAxis, Bn = A ? -y[te] / 2 + Fe + Te + ct + x.mainAxis : ne + Te + ct + x.mainAxis, Ce = t.elements.arrow && bo(t.elements.arrow), Nt = Ce ? T === "y" ? Ce.clientTop || 0 : Ce.clientLeft || 0 : 0, nt = (V = F == null ? void 0 : F[T]) != null ? V : 0, Gt = M + wo - nt - Nt, bn = M + Bn - nt, Yt = no(g ? tr(ve, Gt) : ve, M, g ? pn(fe, bn) : fe);
      w[T] = Yt, N[T] = Yt - M;
    }
    if (a) {
      var Jt, wn = T === "x" ? $e : Pe, Zt = T === "x" ? Ke : Ue, Ve = w[I], ft = I === "y" ? "height" : "width", It = Ve + _[wn], Xt = Ve - _[Zt], ze = [$e, Pe].indexOf(m) !== -1, C = (Jt = F == null ? void 0 : F[I]) != null ? Jt : 0, k = ze ? It : Ve - y[ft] - E[ft] - C + x.altAxis, ue = ze ? Ve + y[ft] + E[ft] - C - x.altAxis : Xt, ot = g && ze ? bm(k, Ve, ue) : no(g ? k : It, Ve, g ? ue : Xt);
      w[I] = ot, N[I] = ot - Ve;
    }
    t.modifiersData[o] = N;
  }
}
var qm = { name: "preventOverflow", enabled: !0, phase: "main", fn: Wm, requiresIfExists: ["offset"] };
function Gm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Ym(e) {
  return e === et(e) || !He(e) ? Ds(e) : Gm(e);
}
function Jm(e) {
  var t = e.getBoundingClientRect(), n = Dn(t.width) / e.offsetWidth || 1, o = Dn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Zm(e, t, n) {
  n === void 0 && (n = !1);
  var o = He(t), r = He(t) && Jm(t), s = qt(t), i = Ln(e, r), a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((at(t) !== "body" || Ms(s)) && (a = Ym(t)), He(t) ? (l = Ln(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Ls(s))), { x: i.left + a.scrollLeft - l.x, y: i.top + a.scrollTop - l.y, width: i.width, height: i.height };
}
function Xm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function Qm(e) {
  var t = Xm(e);
  return vm.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function ey(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ty(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ma = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ya() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Fs(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? ma : r;
  return function(i, a, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ma, s), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, d = [], c = !1, p = { state: u, setOptions: function(f) {
      var _ = typeof f == "function" ? f(u.options) : f;
      v(), u.options = Object.assign({}, s, u.options, _), u.scrollParents = { reference: xn(i) ? oo(i) : i.contextElement ? oo(i.contextElement) : [], popper: oo(a) };
      var m = Qm(ty([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(S) {
        return S.enabled;
      }), g(), p.update();
    }, forceUpdate: function() {
      if (!c) {
        var f = u.elements, _ = f.reference, m = f.popper;
        if (ya(_, m)) {
          u.rects = { reference: Zm(_, bo(m), u.options.strategy === "fixed"), popper: Rs(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
            return u.modifiersData[E.name] = Object.assign({}, E.data);
          });
          for (var S = 0; S < u.orderedModifiers.length; S++) {
            if (u.reset === !0) {
              u.reset = !1, S = -1;
              continue;
            }
            var A = u.orderedModifiers[S], T = A.fn, I = A.options, w = I === void 0 ? {} : I, y = A.name;
            typeof T == "function" && (u = T({ state: u, options: w, name: y, instance: p }) || u);
          }
        }
      }
    }, update: ey(function() {
      return new Promise(function(f) {
        p.forceUpdate(), f(u);
      });
    }), destroy: function() {
      v(), c = !0;
    } };
    if (!ya(i, a))
      return p;
    p.setOptions(l).then(function(f) {
      !c && l.onFirstUpdate && l.onFirstUpdate(f);
    });
    function g() {
      u.orderedModifiers.forEach(function(f) {
        var _ = f.name, m = f.options, S = m === void 0 ? {} : m, A = f.effect;
        if (typeof A == "function") {
          var T = A({ state: u, name: _, instance: p, options: S }), I = function() {
          };
          d.push(T || I);
        }
      });
    }
    function v() {
      d.forEach(function(f) {
        return f();
      }), d = [];
    }
    return p;
  };
}
Fs();
var ny = [Eu, Tu, _u, gu];
Fs({ defaultModifiers: ny });
var oy = [Eu, Tu, _u, gu, Hm, Vm, qm, Om, Bm], ry = Fs({ defaultModifiers: oy });
const sy = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = iy(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, r = O(() => {
    const { onFirstUpdate: l, placement: u, strategy: d, modifiers: c } = h(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...c || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Xn(), i = R({
    styles: {
      popper: {
        position: h(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return q(r, (l) => {
    const u = h(s);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), q([e, t], ([l, u]) => {
    a(), !(!l || !u) && (s.value = ry(l, u, h(r)));
  }), Qe(() => {
    a();
  }), {
    state: O(() => {
      var l;
      return { ...((l = h(s)) == null ? void 0 : l.state) || {} };
    }),
    styles: O(() => h(i).styles),
    attributes: O(() => h(i).attributes),
    update: () => {
      var l;
      return (l = h(s)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = h(s)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: O(() => h(s))
  };
};
function iy(e) {
  const t = Object.keys(e.elements), n = Qo(t.map((r) => [r, e.styles[r] || {}])), o = Qo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function ba() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const rs = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ay = Symbol("elIdInjection"), Cu = () => Me() ? le(ay, rs) : rs, br = (e) => {
  const t = Cu();
  !be && t === rs && ke("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = $s();
  return O(() => h(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Sn = [];
const wa = (e) => {
  const t = e;
  t.key === po.esc && Sn.forEach((n) => n(t));
}, ly = (e) => {
  Oe(() => {
    Sn.length === 0 && document.addEventListener("keydown", wa), be && Sn.push(e);
  }), Qe(() => {
    Sn = Sn.filter((t) => t !== e), Sn.length === 0 && be && document.removeEventListener("keydown", wa);
  });
};
let _a;
const Nu = () => {
  const e = $s(), t = Cu(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, uy = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, cy = () => {
  const { id: e, selector: t } = Nu();
  return Bf(() => {
    be && (process.env.NODE_ENV === "test" || !_a && !document.body.querySelector(t.value)) && (_a = uy(e.value));
  }), {
    id: e,
    selector: t
  };
}, fy = _e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), dy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = ba(), {
    registerTimeout: i,
    cancelTimeout: a
  } = ba();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const c = h(n);
        De(c) && c > 0 && i(() => {
          r(d);
        }, c);
      }, h(e));
    },
    onClose: (d) => {
      a(), s(() => {
        r(d);
      }, h(t));
    }
  };
}, Iu = Symbol("elForwardRef"), py = (e) => {
  Et(Iu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, vy = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ea = R(0), hy = 2e3, gy = Symbol("zIndexContextKey"), my = (e) => {
  const t = e || (Me() ? le(gy, void 0) : void 0), n = O(() => {
    const s = h(t);
    return De(s) ? s : hy;
  }), o = O(() => n.value + Ea.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (Ea.value++, o.value)
  };
};
function yy(e) {
  const t = R();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: i } = e.value;
    if (r == null || s == null)
      return;
    const a = i.slice(0, Math.max(0, r)), l = i.slice(Math.max(0, s));
    t.value = {
      selectionStart: r,
      selectionEnd: s,
      value: i,
      beforeTxt: a,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: i, selectionStart: a } = t.value;
    if (s == null || i == null || a == null)
      return;
    let l = r.length;
    if (r.endsWith(i))
      l = r.length - i.length;
    else if (r.startsWith(s))
      l = s.length;
    else {
      const u = s[a - 1], d = r.indexOf(u, a - 1);
      d !== -1 && (l = d + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
const $u = gr({
  type: String,
  values: fu,
  required: !1
}), by = Symbol("size"), wy = () => {
  const e = le(by, {});
  return O(() => h(e.size) || "");
};
function Pu(e, { afterFocus: t, beforeBlur: n, afterBlur: o } = {}) {
  const r = Me(), { emit: s } = r, i = Xn(), a = R(!1), l = (c) => {
    a.value || (a.value = !0, s("focus", c), t == null || t());
  }, u = (c) => {
    var p;
    G(n) && n(c) || c.relatedTarget && ((p = i.value) != null && p.contains(c.relatedTarget)) || (a.value = !1, s("blur", c), o == null || o());
  }, d = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return q(i, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), dn(i, "click", d), {
    wrapperRef: i,
    isFocused: a,
    handleFocus: l,
    handleBlur: u
  };
}
var ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const _y = _e({
  size: {
    type: Q([Number, String])
  },
  color: {
    type: String
  }
}), Ey = /* @__PURE__ */ W({
  name: "ElIcon",
  inheritAttrs: !1
}), Oy = /* @__PURE__ */ W({
  ...Ey,
  props: _y,
  setup(e) {
    const t = e, n = we("icon"), o = O(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: ru(r) ? void 0 : ns(r),
        "--color": s
      };
    });
    return (r, s) => (P(), B("i", wt({
      class: h(n).b(),
      style: h(o)
    }, r.$attrs), [
      oe(r.$slots, "default")
    ], 16));
  }
});
var Sy = /* @__PURE__ */ ge(Oy, [["__file", "icon.vue"]]);
const zt = yn(Sy), Vs = Symbol("formContextKey"), nr = Symbol("formItemContextKey"), zs = (e, t = {}) => {
  const n = R(void 0), o = t.prop ? n : vu("size"), r = t.global ? n : wy(), s = t.form ? { size: void 0 } : le(Vs, void 0), i = t.formItem ? { size: void 0 } : le(nr, void 0);
  return O(() => o.value || h(e) || (i == null ? void 0 : i.size) || (s == null ? void 0 : s.size) || r.value || "");
}, Ty = (e) => {
  const t = vu("disabled"), n = le(Vs, void 0);
  return O(() => t.value || h(e) || (n == null ? void 0 : n.disabled) || !1);
}, Au = () => {
  const e = le(Vs, void 0), t = le(nr, void 0);
  return {
    form: e,
    formItem: t
  };
}, Ru = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = R(!1)), o || (o = R(!1));
  const r = R();
  let s;
  const i = O(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Oe(() => {
    s = q([mt(e, "id"), n], ([a, l]) => {
      const u = a ?? (l ? void 0 : br().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), _l(() => {
    s && s(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: i,
    inputId: r
  };
};
let qe;
const Cy = `
  height:0 !important;
  visibility:hidden !important;
  ${kd() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Ny = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Iy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Ny.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function Oa(e, t = 1, n) {
  var o;
  qe || (qe = document.createElement("textarea"), document.body.appendChild(qe));
  const { paddingSize: r, borderSize: s, boxSizing: i, contextStyle: a } = Iy(e);
  qe.setAttribute("style", `${a};${Cy}`), qe.value = e.value || e.placeholder || "";
  let l = qe.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + s : i === "content-box" && (l = l - r), qe.value = "";
  const d = qe.scrollHeight - r;
  if (De(t)) {
    let c = d * t;
    i === "border-box" && (c = c + r + s), l = Math.max(c, l), u.minHeight = `${c}px`;
  }
  if (De(n)) {
    let c = d * n;
    i === "border-box" && (c = c + r + s), l = Math.min(c, l);
  }
  return u.height = `${l}px`, (o = qe.parentNode) == null || o.removeChild(qe), qe = void 0, u;
}
const $y = _e({
  id: {
    type: String,
    default: void 0
  },
  size: $u,
  disabled: Boolean,
  modelValue: {
    type: Q([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Q([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: er
  },
  prefixIcon: {
    type: er
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Q([Object, Array, String]),
    default: () => kg({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), Py = {
  [Ye]: (e) => ae(e),
  input: (e) => ae(e),
  change: (e) => ae(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Ay = ["role"], Ry = ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], xy = ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], Dy = /* @__PURE__ */ W({
  name: "ElInput",
  inheritAttrs: !1
}), Ly = /* @__PURE__ */ W({
  ...Dy,
  props: $y,
  emits: Py,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Wf(), s = Uf(), i = O(() => {
      const C = {};
      return o.containerRole === "combobox" && (C["aria-haspopup"] = r["aria-haspopup"], C["aria-owns"] = r["aria-owns"], C["aria-expanded"] = r["aria-expanded"]), C;
    }), a = O(() => [
      o.type === "textarea" ? _.b() : f.b(),
      f.m(g.value),
      f.is("disabled", v.value),
      f.is("exceed", We.value),
      {
        [f.b("group")]: s.prepend || s.append,
        [f.bm("group", "append")]: s.append,
        [f.bm("group", "prepend")]: s.prepend,
        [f.m("prefix")]: s.prefix || o.prefixIcon,
        [f.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: Fe.value && Re.value
      },
      r.class
    ]), l = O(() => [
      f.e("wrapper"),
      f.is("focus", x.value)
    ]), u = Ug({
      excludeKeys: O(() => Object.keys(i.value))
    }), { form: d, formItem: c } = Au(), { inputId: p } = Ru(o, {
      formItemContext: c
    }), g = zs(), v = Ty(), f = we("input"), _ = we("textarea"), m = Xn(), S = Xn(), A = R(!1), T = R(!1), I = R(!1), w = R(), y = Xn(o.inputStyle), E = O(() => m.value || S.value), { wrapperRef: D, isFocused: x, handleFocus: F, handleBlur: N } = Pu(E, {
      afterBlur() {
        var C;
        o.validateEvent && ((C = c == null ? void 0 : c.validate) == null || C.call(c, "blur").catch((k) => ke(k)));
      }
    }), V = O(() => {
      var C;
      return (C = d == null ? void 0 : d.statusIcon) != null ? C : !1;
    }), Z = O(() => (c == null ? void 0 : c.validateState) || ""), re = O(() => Z.value && lu[Z.value]), te = O(() => I.value ? Bg : Mg), M = O(() => [
      r.style
    ]), ve = O(() => [
      o.inputStyle,
      y.value,
      { resize: o.resize }
    ]), fe = O(() => hr(o.modelValue) ? "" : String(o.modelValue)), Fe = O(() => o.clearable && !v.value && !o.readonly && !!fe.value && (x.value || A.value)), Re = O(() => o.showPassword && !v.value && !o.readonly && !!fe.value && (!!fe.value || x.value)), ne = O(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !v.value && !o.readonly && !o.showPassword), tt = O(() => fe.value.length), We = O(() => !!ne.value && tt.value > Number(o.maxlength)), Se = O(() => !!s.suffix || !!o.suffixIcon || Fe.value || o.showPassword || ne.value || !!Z.value && V.value), [ut, ct] = yy(m);
    ht(S, (C) => {
      if (Bn(), !ne.value || o.resize !== "both")
        return;
      const k = C[0], { width: ue } = k.contentRect;
      w.value = {
        right: `calc(100% - ${ue + 15 + 6}px)`
      };
    });
    const Te = () => {
      const { type: C, autosize: k } = o;
      if (!(!be || C !== "textarea" || !S.value))
        if (k) {
          const ue = J(k) ? k.minRows : void 0, ot = J(k) ? k.maxRows : void 0, jn = Oa(S.value, ue, ot);
          y.value = {
            overflowY: "hidden",
            ...jn
          }, he(() => {
            S.value.offsetHeight, y.value = jn;
          });
        } else
          y.value = {
            minHeight: Oa(S.value).minHeight
          };
    }, Bn = ((C) => {
      let k = !1;
      return () => {
        var ue;
        if (k || !o.autosize)
          return;
        ((ue = S.value) == null ? void 0 : ue.offsetParent) === null || (C(), k = !0);
      };
    })(Te), Ce = () => {
      const C = E.value, k = o.formatter ? o.formatter(fe.value) : fe.value;
      !C || C.value === k || (C.value = k);
    }, Nt = async (C) => {
      ut();
      let { value: k } = C.target;
      if (o.formatter && (k = o.parser ? o.parser(k) : k), !T.value) {
        if (k === fe.value) {
          Ce();
          return;
        }
        n(Ye, k), n("input", k), await he(), Ce(), ct();
      }
    }, nt = (C) => {
      n("change", C.target.value);
    }, Gt = (C) => {
      n("compositionstart", C), T.value = !0;
    }, bn = (C) => {
      var k;
      n("compositionupdate", C);
      const ue = (k = C.target) == null ? void 0 : k.value, ot = ue[ue.length - 1] || "";
      T.value = !du(ot);
    }, Yt = (C) => {
      n("compositionend", C), T.value && (T.value = !1, Nt(C));
    }, Jt = () => {
      I.value = !I.value, wn();
    }, wn = async () => {
      var C;
      await he(), (C = E.value) == null || C.focus();
    }, Zt = () => {
      var C;
      return (C = E.value) == null ? void 0 : C.blur();
    }, Ve = (C) => {
      A.value = !1, n("mouseleave", C);
    }, ft = (C) => {
      A.value = !0, n("mouseenter", C);
    }, It = (C) => {
      n("keydown", C);
    }, Xt = () => {
      var C;
      (C = E.value) == null || C.select();
    }, ze = () => {
      n(Ye, ""), n("change", ""), n("clear"), n("input", "");
    };
    return q(() => o.modelValue, () => {
      var C;
      he(() => Te()), o.validateEvent && ((C = c == null ? void 0 : c.validate) == null || C.call(c, "change").catch((k) => ke(k)));
    }), q(fe, () => Ce()), q(() => o.type, async () => {
      await he(), Ce(), Te();
    }), Oe(() => {
      !o.formatter && o.parser && ke("ElInput", "If you set the parser, you also need to set the formatter."), Ce(), he(Te);
    }), t({
      input: m,
      textarea: S,
      ref: E,
      textareaStyle: ve,
      autosize: mt(o, "autosize"),
      focus: wn,
      blur: Zt,
      select: Xt,
      clear: ze,
      resizeTextarea: Te
    }), (C, k) => bt((P(), B("div", wt(h(i), {
      class: h(a),
      style: h(M),
      role: C.containerRole,
      onMouseenter: ft,
      onMouseleave: Ve
    }), [
      H(" input "),
      C.type !== "textarea" ? (P(), B(Le, { key: 0 }, [
        H(" prepend slot "),
        C.$slots.prepend ? (P(), B("div", {
          key: 0,
          class: L(h(f).be("group", "prepend"))
        }, [
          oe(C.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        U("div", {
          ref_key: "wrapperRef",
          ref: D,
          class: L(h(l))
        }, [
          H(" prefix slot "),
          C.$slots.prefix || C.prefixIcon ? (P(), B("span", {
            key: 0,
            class: L(h(f).e("prefix"))
          }, [
            U("span", {
              class: L(h(f).e("prefix-inner"))
            }, [
              oe(C.$slots, "prefix"),
              C.prefixIcon ? (P(), Y(h(zt), {
                key: 0,
                class: L(h(f).e("icon"))
              }, {
                default: X(() => [
                  (P(), Y(Bt(C.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0),
          U("input", wt({
            id: h(p),
            ref_key: "input",
            ref: m,
            class: h(f).e("inner")
          }, h(u), {
            minlength: C.minlength,
            maxlength: C.maxlength,
            type: C.showPassword ? I.value ? "text" : "password" : C.type,
            disabled: h(v),
            readonly: C.readonly,
            autocomplete: C.autocomplete,
            tabindex: C.tabindex,
            "aria-label": C.label,
            placeholder: C.placeholder,
            style: C.inputStyle,
            form: C.form,
            autofocus: C.autofocus,
            onCompositionstart: Gt,
            onCompositionupdate: bn,
            onCompositionend: Yt,
            onInput: Nt,
            onFocus: k[0] || (k[0] = (...ue) => h(F) && h(F)(...ue)),
            onBlur: k[1] || (k[1] = (...ue) => h(N) && h(N)(...ue)),
            onChange: nt,
            onKeydown: It
          }), null, 16, Ry),
          H(" suffix slot "),
          h(Se) ? (P(), B("span", {
            key: 1,
            class: L(h(f).e("suffix"))
          }, [
            U("span", {
              class: L(h(f).e("suffix-inner"))
            }, [
              !h(Fe) || !h(Re) || !h(ne) ? (P(), B(Le, { key: 0 }, [
                oe(C.$slots, "suffix"),
                C.suffixIcon ? (P(), Y(h(zt), {
                  key: 0,
                  class: L(h(f).e("icon"))
                }, {
                  default: X(() => [
                    (P(), Y(Bt(C.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : H("v-if", !0)
              ], 64)) : H("v-if", !0),
              h(Fe) ? (P(), Y(h(zt), {
                key: 1,
                class: L([h(f).e("icon"), h(f).e("clear")]),
                onMousedown: Ge(h(je), ["prevent"]),
                onClick: ze
              }, {
                default: X(() => [
                  ie(h(Is))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              h(Re) ? (P(), Y(h(zt), {
                key: 2,
                class: L([h(f).e("icon"), h(f).e("password")]),
                onClick: Jt
              }, {
                default: X(() => [
                  (P(), Y(Bt(h(te))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              h(ne) ? (P(), B("span", {
                key: 3,
                class: L(h(f).e("count"))
              }, [
                U("span", {
                  class: L(h(f).e("count-inner"))
                }, xe(h(tt)) + " / " + xe(C.maxlength), 3)
              ], 2)) : H("v-if", !0),
              h(Z) && h(re) && h(V) ? (P(), Y(h(zt), {
                key: 4,
                class: L([
                  h(f).e("icon"),
                  h(f).e("validateIcon"),
                  h(f).is("loading", h(Z) === "validating")
                ])
              }, {
                default: X(() => [
                  (P(), Y(Bt(h(re))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0)
        ], 2),
        H(" append slot "),
        C.$slots.append ? (P(), B("div", {
          key: 1,
          class: L(h(f).be("group", "append"))
        }, [
          oe(C.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (P(), B(Le, { key: 1 }, [
        H(" textarea "),
        U("textarea", wt({
          id: h(p),
          ref_key: "textarea",
          ref: S,
          class: h(_).e("inner")
        }, h(u), {
          minlength: C.minlength,
          maxlength: C.maxlength,
          tabindex: C.tabindex,
          disabled: h(v),
          readonly: C.readonly,
          autocomplete: C.autocomplete,
          style: h(ve),
          "aria-label": C.label,
          placeholder: C.placeholder,
          form: C.form,
          autofocus: C.autofocus,
          onCompositionstart: Gt,
          onCompositionupdate: bn,
          onCompositionend: Yt,
          onInput: Nt,
          onFocus: k[2] || (k[2] = (...ue) => h(F) && h(F)(...ue)),
          onBlur: k[3] || (k[3] = (...ue) => h(N) && h(N)(...ue)),
          onChange: nt,
          onKeydown: It
        }), null, 16, xy),
        h(ne) ? (P(), B("span", {
          key: 0,
          style: Ie(w.value),
          class: L(h(f).e("count"))
        }, xe(h(tt)) + " / " + xe(C.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 16, Ay)), [
      [gn, C.type !== "hidden"]
    ]);
  }
});
var My = /* @__PURE__ */ ge(Ly, [["__file", "input.vue"]]);
const Fy = yn(My), Tn = 4, Vy = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, zy = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), xu = Symbol("scrollbarContextKey"), By = _e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), jy = "Thumb", ky = /* @__PURE__ */ W({
  __name: "thumb",
  props: By,
  setup(e) {
    const t = e, n = le(xu), o = we("scrollbar");
    n || Cg(jy, "can not inject scrollbar context");
    const r = R(), s = R(), i = R({}), a = R(!1);
    let l = !1, u = !1, d = be ? document.onselectstart : null;
    const c = O(() => Vy[t.vertical ? "vertical" : "horizontal"]), p = O(() => zy({
      size: t.size,
      move: t.move,
      bar: c.value
    })), g = O(() => r.value[c.value.offset] ** 2 / n.wrapElement[c.value.scrollSize] / t.ratio / s.value[c.value.offset]), v = (w) => {
      var y;
      if (w.stopPropagation(), w.ctrlKey || [1, 2].includes(w.button))
        return;
      (y = window.getSelection()) == null || y.removeAllRanges(), _(w);
      const E = w.currentTarget;
      E && (i.value[c.value.axis] = E[c.value.offset] - (w[c.value.client] - E.getBoundingClientRect()[c.value.direction]));
    }, f = (w) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const y = Math.abs(w.target.getBoundingClientRect()[c.value.direction] - w[c.value.client]), E = s.value[c.value.offset] / 2, D = (y - E) * 100 * g.value / r.value[c.value.offset];
      n.wrapElement[c.value.scroll] = D * n.wrapElement[c.value.scrollSize] / 100;
    }, _ = (w) => {
      w.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", S), d = document.onselectstart, document.onselectstart = () => !1;
    }, m = (w) => {
      if (!r.value || !s.value || l === !1)
        return;
      const y = i.value[c.value.axis];
      if (!y)
        return;
      const E = (r.value.getBoundingClientRect()[c.value.direction] - w[c.value.client]) * -1, D = s.value[c.value.offset] - y, x = (E - D) * 100 * g.value / r.value[c.value.offset];
      n.wrapElement[c.value.scroll] = x * n.wrapElement[c.value.scrollSize] / 100;
    }, S = () => {
      l = !1, i.value[c.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", S), I(), u && (a.value = !1);
    }, A = () => {
      u = !1, a.value = !!t.size;
    }, T = () => {
      u = !0, a.value = l;
    };
    Qe(() => {
      I(), document.removeEventListener("mouseup", S);
    });
    const I = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return dn(mt(n, "scrollbarElement"), "mousemove", A), dn(mt(n, "scrollbarElement"), "mouseleave", T), (w, y) => (P(), Y(mo, {
      name: h(o).b("fade"),
      persisted: ""
    }, {
      default: X(() => [
        bt(U("div", {
          ref_key: "instance",
          ref: r,
          class: L([h(o).e("bar"), h(o).is(h(c).key)]),
          onMousedown: f
        }, [
          U("div", {
            ref_key: "thumb",
            ref: s,
            class: L(h(o).e("thumb")),
            style: Ie(h(p)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [gn, w.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Sa = /* @__PURE__ */ ge(ky, [["__file", "thumb.vue"]]);
const Hy = _e({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), Ky = /* @__PURE__ */ W({
  __name: "bar",
  props: Hy,
  setup(e, { expose: t }) {
    const n = e, o = R(0), r = R(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const a = i.offsetHeight - Tn, l = i.offsetWidth - Tn;
          r.value = i.scrollTop * 100 / a * n.ratioY, o.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, a) => (P(), B(Le, null, [
      ie(Sa, {
        move: o.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ie(Sa, {
        move: r.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Uy = /* @__PURE__ */ ge(Ky, [["__file", "bar.vue"]]);
const Wy = _e({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Q([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), qy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(De)
}, ss = "ElScrollbar", Gy = /* @__PURE__ */ W({
  name: ss
}), Yy = /* @__PURE__ */ W({
  ...Gy,
  props: Wy,
  emits: qy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = we("scrollbar");
    let s, i;
    const a = R(), l = R(), u = R(), d = R("0"), c = R("0"), p = R(), g = R(1), v = R(1), f = O(() => {
      const y = {};
      return o.height && (y.height = ns(o.height)), o.maxHeight && (y.maxHeight = ns(o.maxHeight)), [o.wrapStyle, y];
    }), _ = O(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = O(() => [r.e("view"), o.viewClass]), S = () => {
      var y;
      l.value && ((y = p.value) == null || y.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function A(y, E) {
      J(y) ? l.value.scrollTo(y) : De(y) && De(E) && l.value.scrollTo(y, E);
    }
    const T = (y) => {
      if (!De(y)) {
        ke(ss, "value must be a number");
        return;
      }
      l.value.scrollTop = y;
    }, I = (y) => {
      if (!De(y)) {
        ke(ss, "value must be a number");
        return;
      }
      l.value.scrollLeft = y;
    }, w = () => {
      if (!l.value)
        return;
      const y = l.value.offsetHeight - Tn, E = l.value.offsetWidth - Tn, D = y ** 2 / l.value.scrollHeight, x = E ** 2 / l.value.scrollWidth, F = Math.max(D, o.minSize), N = Math.max(x, o.minSize);
      g.value = D / (y - D) / (F / (y - F)), v.value = x / (E - x) / (N / (E - N)), c.value = F + Tn < y ? `${F}px` : "", d.value = N + Tn < E ? `${N}px` : "";
    };
    return q(() => o.noresize, (y) => {
      y ? (s == null || s(), i == null || i()) : ({ stop: s } = ht(u, w), i = dn("resize", w));
    }, { immediate: !0 }), q(() => [o.maxHeight, o.height], () => {
      o.native || he(() => {
        var y;
        w(), l.value && ((y = p.value) == null || y.handleScroll(l.value));
      });
    }), Et(xu, hn({
      scrollbarElement: a,
      wrapElement: l
    })), Oe(() => {
      o.native || he(() => {
        w();
      });
    }), jf(() => w()), t({
      wrapRef: l,
      update: w,
      scrollTo: A,
      setScrollTop: T,
      setScrollLeft: I,
      handleScroll: S
    }), (y, E) => (P(), B("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: L(h(r).b())
    }, [
      U("div", {
        ref_key: "wrapRef",
        ref: l,
        class: L(h(_)),
        style: Ie(h(f)),
        onScroll: S
      }, [
        (P(), Y(Bt(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: u,
          class: L(h(m)),
          style: Ie(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: X(() => [
            oe(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      y.native ? H("v-if", !0) : (P(), Y(Uy, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: c.value,
        width: d.value,
        always: y.always,
        "ratio-x": v.value,
        "ratio-y": g.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Jy = /* @__PURE__ */ ge(Yy, [["__file", "scrollbar.vue"]]);
const Zy = yn(Jy), Bs = Symbol("popper"), Du = Symbol("popperContent"), Xy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Lu = _e({
  role: {
    type: String,
    values: Xy,
    default: "tooltip"
  }
}), Qy = /* @__PURE__ */ W({
  name: "ElPopper",
  inheritAttrs: !1
}), eb = /* @__PURE__ */ W({
  ...Qy,
  props: Lu,
  setup(e, { expose: t }) {
    const n = e, o = R(), r = R(), s = R(), i = R(), a = O(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: i,
      role: a
    };
    return t(l), Et(Bs, l), (u, d) => oe(u.$slots, "default");
  }
});
var tb = /* @__PURE__ */ ge(eb, [["__file", "popper.vue"]]);
const Mu = _e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), nb = /* @__PURE__ */ W({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), ob = /* @__PURE__ */ W({
  ...nb,
  props: Mu,
  setup(e, { expose: t }) {
    const n = e, o = we("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: i } = le(Du, void 0);
    return q(() => n.arrowOffset, (a) => {
      r.value = a;
    }), Qe(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (a, l) => (P(), B("span", {
      ref_key: "arrowRef",
      ref: s,
      class: L(h(o).e("arrow")),
      style: Ie(h(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var rb = /* @__PURE__ */ ge(ob, [["__file", "arrow.vue"]]);
const Dr = "ElOnlyChild", sb = /* @__PURE__ */ W({
  name: Dr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = le(Iu), s = vy((o = r == null ? void 0 : r.setForwardRef) != null ? o : je);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a)
        return null;
      if (a.length > 1)
        return ke(Dr, "requires exact only one valid child."), null;
      const l = Fu(a);
      return l ? bt(Ut(l, n), [[s]]) : (ke(Dr, "no valid child node found"), null);
    };
  }
});
function Fu(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (J(n))
      switch (n.type) {
        case st:
          continue;
        case Es:
        case "svg":
          return Ta(n);
        case Le:
          return Fu(n.children);
        default:
          return n;
      }
    return Ta(n);
  }
  return null;
}
function Ta(e) {
  const t = we("only-child");
  return ie("span", {
    class: t.e("content")
  }, [e]);
}
const Vu = _e({
  virtualRef: {
    type: Q(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Q(Function)
  },
  onMouseleave: {
    type: Q(Function)
  },
  onClick: {
    type: Q(Function)
  },
  onKeydown: {
    type: Q(Function)
  },
  onFocus: {
    type: Q(Function)
  },
  onBlur: {
    type: Q(Function)
  },
  onContextmenu: {
    type: Q(Function)
  },
  id: String,
  open: Boolean
}), ib = /* @__PURE__ */ W({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ab = /* @__PURE__ */ W({
  ...ib,
  props: Vu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = le(Bs, void 0);
    py(r);
    const s = O(() => a.value ? n.id : void 0), i = O(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = O(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = O(() => a.value ? `${n.open}` : void 0);
    let u;
    return Oe(() => {
      q(() => n.virtualRef, (d) => {
        d && (r.value = yt(d));
      }, {
        immediate: !0
      }), q(r, (d, c) => {
        u == null || u(), u = void 0, fo(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var g;
          const v = n[p];
          v && (d.addEventListener(p.slice(2).toLowerCase(), v), (g = c == null ? void 0 : c.removeEventListener) == null || g.call(c, p.slice(2).toLowerCase(), v));
        }), u = q([s, i, a, l], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            hr(p[v]) ? d.removeAttribute(g) : d.setAttribute(g, p[v]);
          });
        }, { immediate: !0 })), fo(c) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => c.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Qe(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, c) => d.virtualTriggering ? H("v-if", !0) : (P(), Y(h(sb), wt({ key: 0 }, d.$attrs, {
      "aria-controls": h(s),
      "aria-describedby": h(i),
      "aria-expanded": h(l),
      "aria-haspopup": h(a)
    }), {
      default: X(() => [
        oe(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var lb = /* @__PURE__ */ ge(ab, [["__file", "trigger.vue"]]);
const Lr = "focus-trap.focus-after-trapped", Mr = "focus-trap.focus-after-released", ub = "focus-trap.focusout-prevented", Ca = {
  cancelable: !0,
  bubbles: !1
}, cb = {
  cancelable: !0,
  bubbles: !1
}, Na = "focusAfterTrapped", Ia = "focusAfterReleased", fb = Symbol("elFocusTrap"), js = R(), wr = R(0), ks = R(0);
let Lo = 0;
const zu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, $a = (e, t) => {
  for (const n of e)
    if (!db(n, t))
      return n;
}, db = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, pb = (e) => {
  const t = zu(e), n = $a(t, e), o = $a(t.reverse(), e);
  return [n, o];
}, vb = (e) => e instanceof HTMLInputElement && "select" in e, xt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), ks.value = window.performance.now(), e !== n && vb(e) && t && e.select();
  }
};
function Pa(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const hb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Pa(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = Pa(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, gb = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (xt(o, t), document.activeElement !== n)
      return;
}, Aa = hb(), mb = () => wr.value > ks.value, Mo = () => {
  js.value = "pointer", wr.value = window.performance.now();
}, Ra = () => {
  js.value = "keyboard", wr.value = window.performance.now();
}, yb = () => (Oe(() => {
  Lo === 0 && (document.addEventListener("mousedown", Mo), document.addEventListener("touchstart", Mo), document.addEventListener("keydown", Ra)), Lo++;
}), Qe(() => {
  Lo--, Lo <= 0 && (document.removeEventListener("mousedown", Mo), document.removeEventListener("touchstart", Mo), document.removeEventListener("keydown", Ra));
}), {
  focusReason: js,
  lastUserFocusTimestamp: wr,
  lastAutomatedFocusTimestamp: ks
}), Fo = (e) => new CustomEvent(ub, {
  ...cb,
  detail: e
}), bb = /* @__PURE__ */ W({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Na,
    Ia,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = R();
    let o, r;
    const { focusReason: s } = yb();
    ly((v) => {
      e.trapped && !i.paused && t("release-requested", v);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (v) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: f, altKey: _, ctrlKey: m, metaKey: S, currentTarget: A, shiftKey: T } = v, { loop: I } = e, w = f === po.tab && !_ && !m && !S, y = document.activeElement;
      if (w && y) {
        const E = A, [D, x] = pb(E);
        if (D && x) {
          if (!T && y === x) {
            const N = Fo({
              focusReason: s.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (v.preventDefault(), I && xt(D, !0));
          } else if (T && [D, E].includes(y)) {
            const N = Fo({
              focusReason: s.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (v.preventDefault(), I && xt(x, !0));
          }
        } else if (y === E) {
          const N = Fo({
            focusReason: s.value
          });
          t("focusout-prevented", N), N.defaultPrevented || v.preventDefault();
        }
      }
    };
    Et(fb, {
      focusTrapRef: n,
      onKeydown: a
    }), q(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), q([n], ([v], [f]) => {
      v && (v.addEventListener("keydown", a), v.addEventListener("focusin", d), v.addEventListener("focusout", c)), f && (f.removeEventListener("keydown", a), f.removeEventListener("focusin", d), f.removeEventListener("focusout", c));
    });
    const l = (v) => {
      t(Na, v);
    }, u = (v) => t(Ia, v), d = (v) => {
      const f = h(n);
      if (!f)
        return;
      const _ = v.target, m = v.relatedTarget, S = _ && f.contains(_);
      e.trapped || m && f.contains(m) || (o = m), S && t("focusin", v), !i.paused && e.trapped && (S ? r = _ : xt(r, !0));
    }, c = (v) => {
      const f = h(n);
      if (!(i.paused || !f))
        if (e.trapped) {
          const _ = v.relatedTarget;
          !hr(_) && !f.contains(_) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const m = Fo({
                focusReason: s.value
              });
              t("focusout-prevented", m), m.defaultPrevented || xt(r, !0);
            }
          }, 0);
        } else {
          const _ = v.target;
          _ && f.contains(_) || t("focusout", v);
        }
    };
    async function p() {
      await he();
      const v = h(n);
      if (v) {
        Aa.push(i);
        const f = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = f, !v.contains(f)) {
          const m = new Event(Lr, Ca);
          v.addEventListener(Lr, l), v.dispatchEvent(m), m.defaultPrevented || he(() => {
            let S = e.focusStartEl;
            ae(S) || (xt(S), document.activeElement !== S && (S = "first")), S === "first" && gb(zu(v), !0), (document.activeElement === f || S === "container") && xt(v);
          });
        }
      }
    }
    function g() {
      const v = h(n);
      if (v) {
        v.removeEventListener(Lr, l);
        const f = new CustomEvent(Mr, {
          ...Ca,
          detail: {
            focusReason: s.value
          }
        });
        v.addEventListener(Mr, u), v.dispatchEvent(f), !f.defaultPrevented && (s.value == "keyboard" || !mb() || v.contains(document.activeElement)) && xt(o ?? document.body), v.removeEventListener(Mr, u), Aa.remove(i);
      }
    }
    return Oe(() => {
      e.trapped && p(), q(() => e.trapped, (v) => {
        v ? p() : g();
      });
    }), Qe(() => {
      e.trapped && g();
    }), {
      onKeydown: a
    };
  }
});
function wb(e, t, n, o, r, s) {
  return oe(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var _b = /* @__PURE__ */ ge(bb, [["render", wb], ["__file", "focus-trap.vue"]]);
const Eb = ["fixed", "absolute"], Ob = _e({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Q(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: mr,
    default: "bottom"
  },
  popperOptions: {
    type: Q(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Eb,
    default: "absolute"
  }
}), Bu = _e({
  ...Ob,
  id: String,
  style: {
    type: Q([String, Array, Object])
  },
  className: {
    type: Q([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Q([String, Array, Object])
  },
  popperStyle: {
    type: Q([String, Array, Object])
  },
  referenceEl: {
    type: Q(Object)
  },
  triggerTargetEl: {
    type: Q(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Sb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Tb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Nb(e), ...t]
  };
  return Ib(s, r == null ? void 0 : r.modifiers), s;
}, Cb = (e) => {
  if (be)
    return yt(e);
};
function Nb(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Ib(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const $b = 0, Pb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = le(Bs, void 0), s = R(), i = R(), a = O(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = O(() => {
    var m;
    const S = h(s), A = (m = h(i)) != null ? m : $b;
    return {
      name: "arrow",
      enabled: !Og(S),
      options: {
        element: S,
        padding: A
      }
    };
  }), u = O(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...Tb(e, [
      h(l),
      h(a)
    ])
  })), d = O(() => Cb(e.referenceEl) || h(o)), { attributes: c, state: p, styles: g, update: v, forceUpdate: f, instanceRef: _ } = sy(d, n, u);
  return q(_, (m) => t.value = m), Oe(() => {
    q(() => {
      var m;
      return (m = h(d)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: c,
    arrowRef: s,
    contentRef: n,
    instanceRef: _,
    state: p,
    styles: g,
    role: r,
    forceUpdate: f,
    update: v
  };
}, Ab = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = my(), s = we("popper"), i = O(() => h(t).popper), a = R(De(e.zIndex) ? e.zIndex : r()), l = O(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = O(() => [
    { zIndex: h(a) },
    h(n).popper,
    e.popperStyle || {}
  ]), d = O(() => o.value === "dialog" ? "false" : void 0), c = O(() => h(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: c,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = De(e.zIndex) ? e.zIndex : r();
    }
  };
}, Rb = (e, t) => {
  const n = R(!1), o = R();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, xb = /* @__PURE__ */ W({
  name: "ElPopperContent"
}), Db = /* @__PURE__ */ W({
  ...xb,
  props: Bu,
  emits: Sb,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: a,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Rb(o, n), { attributes: c, arrowRef: p, contentRef: g, styles: v, instanceRef: f, role: _, update: m } = Pb(o), {
      ariaModal: S,
      arrowStyle: A,
      contentAttrs: T,
      contentClass: I,
      contentStyle: w,
      updateZIndex: y
    } = Ab(o, {
      styles: v,
      attributes: c,
      role: _
    }), E = le(nr, void 0), D = R();
    Et(Du, {
      arrowStyle: A,
      arrowRef: p,
      arrowOffset: D
    }), E && (E.addInputId || E.removeInputId) && Et(nr, {
      ...E,
      addInputId: je,
      removeInputId: je
    });
    let x;
    const F = (V = !0) => {
      m(), V && y();
    }, N = () => {
      F(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Oe(() => {
      q(() => o.triggerTargetEl, (V, Z) => {
        x == null || x(), x = void 0;
        const re = h(V || g.value), te = h(Z || g.value);
        fo(re) && (x = q([_, () => o.ariaLabel, S, () => o.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ve, fe) => {
            hr(M[fe]) ? re.removeAttribute(ve) : re.setAttribute(ve, M[fe]);
          });
        }, { immediate: !0 })), te !== re && fo(te) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          te.removeAttribute(M);
        });
      }, { immediate: !0 }), q(() => o.visible, N, { immediate: !0 });
    }), Qe(() => {
      x == null || x(), x = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: f,
      updatePopper: F,
      contentStyle: w
    }), (V, Z) => (P(), B("div", wt({
      ref_key: "contentRef",
      ref: g
    }, h(T), {
      style: h(w),
      class: h(I),
      tabindex: "-1",
      onMouseenter: Z[0] || (Z[0] = (re) => V.$emit("mouseenter", re)),
      onMouseleave: Z[1] || (Z[1] = (re) => V.$emit("mouseleave", re))
    }), [
      ie(h(_b), {
        trapped: h(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": h(g),
        "focus-start-el": h(r),
        onFocusAfterTrapped: h(a),
        onFocusAfterReleased: h(i),
        onFocusin: h(l),
        onFocusoutPrevented: h(u),
        onReleaseRequested: h(d)
      }, {
        default: X(() => [
          oe(V.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Lb = /* @__PURE__ */ ge(Db, [["__file", "content.vue"]]);
const Mb = yn(tb), Hs = Symbol("elTooltip"), Ks = _e({
  ...fy,
  ...Bu,
  appendTo: {
    type: Q([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Q(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), ju = _e({
  ...Vu,
  disabled: Boolean,
  trigger: {
    type: Q([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Q(Array),
    default: () => [po.enter, po.space]
  }
}), {
  useModelToggleProps: Fb,
  useModelToggleEmits: Vb,
  useModelToggle: zb
} = pu("visible"), Bb = _e({
  ...Lu,
  ...Fb,
  ...Ks,
  ...ju,
  ...Mu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), jb = [
  ...Vb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], kb = (e, t) => z(e) ? e.includes(t) : e === t, En = (e, t, n) => (o) => {
  kb(h(e), t) && n(o);
}, Hb = /* @__PURE__ */ W({
  name: "ElTooltipTrigger"
}), Kb = /* @__PURE__ */ W({
  ...Hb,
  props: ju,
  setup(e, { expose: t }) {
    const n = e, o = we("tooltip"), { controlled: r, id: s, open: i, onOpen: a, onClose: l, onToggle: u } = le(Hs, void 0), d = R(null), c = () => {
      if (h(r) || n.disabled)
        return !0;
    }, p = mt(n, "trigger"), g = dt(c, En(p, "hover", a)), v = dt(c, En(p, "hover", l)), f = dt(c, En(p, "click", (T) => {
      T.button === 0 && u(T);
    })), _ = dt(c, En(p, "focus", a)), m = dt(c, En(p, "focus", l)), S = dt(c, En(p, "contextmenu", (T) => {
      T.preventDefault(), u(T);
    })), A = dt(c, (T) => {
      const { code: I } = T;
      n.triggerKeys.includes(I) && (T.preventDefault(), u(T));
    });
    return t({
      triggerRef: d
    }), (T, I) => (P(), Y(h(lb), {
      id: h(s),
      "virtual-ref": T.virtualRef,
      open: h(i),
      "virtual-triggering": T.virtualTriggering,
      class: L(h(o).e("trigger")),
      onBlur: h(m),
      onClick: h(f),
      onContextmenu: h(S),
      onFocus: h(_),
      onMouseenter: h(g),
      onMouseleave: h(v),
      onKeydown: h(A)
    }, {
      default: X(() => [
        oe(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ub = /* @__PURE__ */ ge(Kb, [["__file", "trigger.vue"]]);
const Wb = /* @__PURE__ */ W({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), qb = /* @__PURE__ */ W({
  ...Wb,
  props: Ks,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Nu(), r = we("tooltip"), s = R(null), i = R(!1), {
      controlled: a,
      id: l,
      open: u,
      trigger: d,
      onClose: c,
      onOpen: p,
      onShow: g,
      onHide: v,
      onBeforeShow: f,
      onBeforeHide: _
    } = le(Hs, void 0), m = O(() => n.transition || `${r.namespace.value}-fade-in-linear`), S = O(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    Qe(() => {
      i.value = !0;
    });
    const A = O(() => h(S) ? !0 : h(u)), T = O(() => n.disabled ? !1 : h(u)), I = O(() => n.appendTo || o.value), w = O(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), y = O(() => !h(u)), E = () => {
      v();
    }, D = () => {
      if (h(a))
        return !0;
    }, x = dt(D, () => {
      n.enterable && h(d) === "hover" && p();
    }), F = dt(D, () => {
      h(d) === "hover" && c();
    }), N = () => {
      var M, ve;
      (ve = (M = s.value) == null ? void 0 : M.updatePopper) == null || ve.call(M), f == null || f();
    }, V = () => {
      _ == null || _();
    }, Z = () => {
      g(), te = $d(O(() => {
        var M;
        return (M = s.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (h(a))
          return;
        h(d) !== "hover" && c();
      });
    }, re = () => {
      n.virtualTriggering || c();
    };
    let te;
    return q(() => h(u), (M) => {
      M || te == null || te();
    }, {
      flush: "post"
    }), q(() => n.content, () => {
      var M, ve;
      (ve = (M = s.value) == null ? void 0 : M.updatePopper) == null || ve.call(M);
    }), t({
      contentRef: s
    }), (M, ve) => (P(), Y(ed, {
      disabled: !M.teleported,
      to: h(I)
    }, [
      ie(mo, {
        name: h(m),
        onAfterLeave: E,
        onBeforeEnter: N,
        onAfterEnter: Z,
        onBeforeLeave: V
      }, {
        default: X(() => [
          h(A) ? bt((P(), Y(h(Lb), wt({
            key: 0,
            id: h(l),
            ref_key: "contentRef",
            ref: s
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": h(y),
            "boundaries-padding": M.boundariesPadding,
            "fallback-placements": M.fallbackPlacements,
            "gpu-acceleration": M.gpuAcceleration,
            offset: M.offset,
            placement: M.placement,
            "popper-options": M.popperOptions,
            strategy: M.strategy,
            effect: M.effect,
            enterable: M.enterable,
            pure: M.pure,
            "popper-class": M.popperClass,
            "popper-style": [M.popperStyle, h(w)],
            "reference-el": M.referenceEl,
            "trigger-target-el": M.triggerTargetEl,
            visible: h(T),
            "z-index": M.zIndex,
            onMouseenter: h(x),
            onMouseleave: h(F),
            onBlur: re,
            onClose: h(c)
          }), {
            default: X(() => [
              i.value ? H("v-if", !0) : oe(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [gn, h(T)]
          ]) : H("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Gb = /* @__PURE__ */ ge(qb, [["__file", "content.vue"]]);
const Yb = ["innerHTML"], Jb = { key: 1 }, Zb = /* @__PURE__ */ W({
  name: "ElTooltip"
}), Xb = /* @__PURE__ */ W({
  ...Zb,
  props: Bb,
  emits: jb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    cy();
    const r = br(), s = R(), i = R(), a = () => {
      var m;
      const S = h(s);
      S && ((m = S.popperInstanceRef) == null || m.update());
    }, l = R(!1), u = R(), { show: d, hide: c, hasUpdateHandler: p } = zb({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: v } = dy({
      showAfter: mt(o, "showAfter"),
      hideAfter: mt(o, "hideAfter"),
      autoClose: mt(o, "autoClose"),
      open: d,
      close: c
    }), f = O(() => su(o.visible) && !p.value);
    Et(Hs, {
      controlled: f,
      id: r,
      open: fs(l),
      trigger: mt(o, "trigger"),
      onOpen: (m) => {
        g(m);
      },
      onClose: (m) => {
        v(m);
      },
      onToggle: (m) => {
        h(l) ? v(m) : g(m);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: a
    }), q(() => o.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const _ = (m) => {
      var S, A;
      const T = (A = (S = i.value) == null ? void 0 : S.contentRef) == null ? void 0 : A.popperContentRef, I = (m == null ? void 0 : m.relatedTarget) || document.activeElement;
      return T && T.contains(I);
    };
    return Ff(() => l.value && c()), t({
      popperRef: s,
      contentRef: i,
      isFocusInsideContent: _,
      updatePopper: a,
      onOpen: g,
      onClose: v,
      hide: c
    }), (m, S) => (P(), Y(h(Mb), {
      ref_key: "popperRef",
      ref: s,
      role: m.role
    }, {
      default: X(() => [
        ie(Ub, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: X(() => [
            m.$slots.default ? oe(m.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ie(Gb, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: X(() => [
            oe(m.$slots, "content", {}, () => [
              m.rawContent ? (P(), B("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, Yb)) : (P(), B("span", Jb, xe(m.content), 1))
            ]),
            m.showArrow ? (P(), Y(h(rb), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Qb = /* @__PURE__ */ ge(Xb, [["__file", "tooltip.vue"]]);
const e0 = yn(Qb), Dt = /* @__PURE__ */ new Map();
let xa;
be && (document.addEventListener("mousedown", (e) => xa = e), document.addEventListener("mouseup", (e) => {
  for (const t of Dt.values())
    for (const { documentHandler: n } of t)
      n(e, xa);
}));
function Da(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : fo(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, i = o.target, a = r == null ? void 0 : r.target, l = !t || !t.instance, u = !i || !a, d = e.contains(i) || e.contains(a), c = e === i, p = n.length && n.some((v) => v == null ? void 0 : v.contains(i)) || n.length && n.includes(a), g = s && (s.contains(i) || s.contains(a));
    l || u || d || c || p || g || t.value(o, r);
  };
}
const t0 = {
  beforeMount(e, t) {
    Dt.has(e) || Dt.set(e, []), Dt.get(e).push({
      documentHandler: Da(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Dt.has(e) || Dt.set(e, []);
    const n = Dt.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: Da(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Dt.delete(e);
  }
}, ku = _e({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: fu,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), n0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, o0 = /* @__PURE__ */ W({
  name: "ElTag"
}), r0 = /* @__PURE__ */ W({
  ...o0,
  props: ku,
  emits: n0,
  setup(e, { emit: t }) {
    const n = e, o = zs(), r = we("tag"), s = O(() => {
      const { type: l, hit: u, effect: d, closable: c, round: p } = n;
      return [
        r.b(),
        r.is("closable", c),
        r.m(l),
        r.m(o.value),
        r.m(d),
        r.is("hit", u),
        r.is("round", p)
      ];
    }), i = (l) => {
      t("close", l);
    }, a = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (P(), B("span", {
      key: 0,
      class: L(h(s)),
      style: Ie({ backgroundColor: l.color }),
      onClick: a
    }, [
      U("span", {
        class: L(h(r).e("content"))
      }, [
        oe(l.$slots, "default")
      ], 2),
      l.closable ? (P(), Y(h(zt), {
        key: 0,
        class: L(h(r).e("close")),
        onClick: Ge(i, ["stop"])
      }, {
        default: X(() => [
          ie(h(ua))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (P(), Y(mo, {
      key: 1,
      name: `${h(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: X(() => [
        U("span", {
          class: L(h(s)),
          style: Ie({ backgroundColor: l.color }),
          onClick: a
        }, [
          U("span", {
            class: L(h(r).e("content"))
          }, [
            oe(l.$slots, "default")
          ], 2),
          l.closable ? (P(), Y(h(zt), {
            key: 0,
            class: L(h(r).e("close")),
            onClick: Ge(i, ["stop"])
          }, {
            default: X(() => [
              ie(h(ua))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var s0 = /* @__PURE__ */ ge(r0, [["__file", "tag.vue"]]);
const i0 = yn(s0), Hu = Symbol("ElSelectGroup"), _r = Symbol("ElSelect");
function a0(e, t) {
  const n = le(_r), o = le(Hu, { disabled: !1 }), r = O(() => n.props.multiple ? d(n.props.modelValue, e.value) : co(e.value, n.props.modelValue)), s = O(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !r.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), i = O(() => e.label || (J(e.value) ? "" : e.value)), a = O(() => e.value || e.label || ""), l = O(() => e.disabled || t.groupDisabled || s.value), u = Me(), d = (g = [], v) => {
    if (J(e.value)) {
      const f = n.props.valueKey;
      return g && g.some((_) => K(gt(_, f)) === gt(v, f));
    } else
      return g && g.includes(v);
  }, c = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, p = (g) => {
    const v = new RegExp(Tg(g), "i");
    t.visible = v.test(i.value) || e.created;
  };
  return q(() => i.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), q(() => e.value, (g, v) => {
    const { remote: f, valueKey: _ } = n.props;
    if (co(g, v) || (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !f) {
      if (_ && J(g) && J(v) && g[_] === v[_])
        return;
      n.setSelected();
    }
  }), q(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: i,
    currentValue: a,
    itemSelected: r,
    isDisabled: l,
    hoverItem: c,
    updateOption: p
  };
}
const l0 = /* @__PURE__ */ W({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = we("select"), n = br(), o = O(() => [
      t.be("dropdown", "item"),
      t.is("disabled", h(a)),
      t.is("selected", h(i)),
      t.is("hovering", h(p))
    ]), r = hn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: i,
      isDisabled: a,
      select: l,
      hoverItem: u,
      updateOption: d
    } = a0(e, r), { visible: c, hover: p } = al(r), g = Me().proxy;
    l.onOptionCreate(g), Qe(() => {
      const f = g.value, { selected: _ } = l.states, S = (l.props.multiple ? _ : [_]).some((A) => A.value === g.value);
      he(() => {
        l.states.cachedOptions.get(f) === g && !S && l.states.cachedOptions.delete(f);
      }), l.onOptionDestroy(f, g);
    });
    function v() {
      e.disabled !== !0 && r.groupDisabled !== !0 && l.handleOptionSelect(g);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: i,
      isDisabled: a,
      select: l,
      hoverItem: u,
      updateOption: d,
      visible: c,
      hover: p,
      selectOptionClick: v,
      states: r
    };
  }
}), u0 = ["id", "aria-disabled", "aria-selected"];
function c0(e, t, n, o, r, s) {
  return bt((P(), B("li", {
    id: e.id,
    class: L(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = Ge((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    oe(e.$slots, "default", {}, () => [
      U("span", null, xe(e.currentLabel), 1)
    ])
  ], 42, u0)), [
    [gn, e.visible]
  ]);
}
var Us = /* @__PURE__ */ ge(l0, [["render", c0], ["__file", "option.vue"]]);
const f0 = /* @__PURE__ */ W({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = le(_r), t = we("select"), n = O(() => e.props.popperClass), o = O(() => e.props.multiple), r = O(() => e.props.fitInputWidth), s = R("");
    function i() {
      var a;
      s.value = `${(a = e.selectRef) == null ? void 0 : a.offsetWidth}px`;
    }
    return Oe(() => {
      i(), ht(e.selectRef, i);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function d0(e, t, n, o, r, s) {
  return P(), B("div", {
    class: L([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ie({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), B("div", {
      key: 0,
      class: L(e.ns.be("dropdown", "header"))
    }, [
      oe(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    oe(e.$slots, "default"),
    e.$slots.footer ? (P(), B("div", {
      key: 1,
      class: L(e.ns.be("dropdown", "footer"))
    }, [
      oe(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var p0 = /* @__PURE__ */ ge(f0, [["render", d0], ["__file", "select-dropdown.vue"]]);
function v0(e) {
  const t = R(!1);
  return {
    handleCompositionStart: () => {
      t.value = !0;
    },
    handleCompositionUpdate: (s) => {
      const i = s.target.value, a = i[i.length - 1] || "";
      t.value = !du(a);
    },
    handleCompositionEnd: (s) => {
      t.value && (t.value = !1, G(e) && e(s));
    }
  };
}
const h0 = 11, g0 = (e, t) => {
  const { t: n } = Xg(), o = br(), r = we("select"), s = we("input"), i = hn({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: e.multiple ? [] : {},
    selectionWidth: 0,
    calculatorWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: !1,
    menuVisibleOnFocus: !1,
    isBeforeHide: !1
  });
  Wg({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, O(() => e.suffixTransition === !1));
  const a = R(null), l = R(null), u = R(null), d = R(null), c = R(null), p = R(null), g = R(null), v = R(null), f = R(null), _ = R(null), m = R(null), S = R(null), { wrapperRef: A, isFocused: T, handleFocus: I, handleBlur: w } = Pu(c, {
    afterFocus() {
      e.automaticDropdown && !y.value && (y.value = !0, i.menuVisibleOnFocus = !0);
    },
    beforeBlur(b) {
      var $, ee;
      return (($ = u.value) == null ? void 0 : $.isFocusInsideContent(b)) || ((ee = d.value) == null ? void 0 : ee.isFocusInsideContent(b));
    },
    afterBlur() {
      y.value = !1, i.menuVisibleOnFocus = !1;
    }
  }), y = R(!1), E = R(), { form: D, formItem: x } = Au(), { inputId: F } = Ru(e, {
    formItemContext: x
  }), N = O(() => e.disabled || (D == null ? void 0 : D.disabled)), V = O(() => e.multiple ? z(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== ""), Z = O(() => e.clearable && !N.value && i.inputHovering && V.value), re = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), te = O(() => r.is("reverse", re.value && y.value && e.suffixTransition)), M = O(() => (x == null ? void 0 : x.validateState) || ""), ve = O(() => lu[M.value]), fe = O(() => e.remote ? 300 : 0), Fe = O(() => e.loading ? e.loadingText || n("el.select.loading") : e.remote && !i.inputValue && i.options.size === 0 ? !1 : e.filterable && i.inputValue && i.options.size > 0 && Re.value === 0 ? e.noMatchText || n("el.select.noMatch") : i.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Re = O(() => ne.value.filter((b) => b.visible).length), ne = O(() => {
    const b = Array.from(i.options.values()), $ = [];
    return i.optionValues.forEach((ee) => {
      const de = b.findIndex(($t) => $t.value === ee);
      de > -1 && $.push(b[de]);
    }), $.length >= b.length ? $ : b;
  }), tt = O(() => Array.from(i.cachedOptions.values())), We = O(() => {
    const b = ne.value.filter(($) => !$.created).some(($) => $.currentLabel === i.inputValue);
    return e.filterable && e.allowCreate && i.inputValue !== "" && !b;
  }), Se = () => {
    e.filterable && G(e.filterMethod) || e.filterable && e.remote && G(e.remoteMethod) || ne.value.forEach((b) => {
      b.updateOption(i.inputValue);
    });
  }, ut = zs(), ct = O(() => ["small"].includes(ut.value) ? "small" : "default"), Te = O({
    get() {
      return y.value && Fe.value !== !1;
    },
    set(b) {
      y.value = b;
    }
  }), wo = O(() => z(e.modelValue) ? e.modelValue.length === 0 && !i.inputValue : e.filterable ? !i.inputValue : !0), Bn = O(() => {
    var b;
    const $ = (b = e.placeholder) != null ? b : n("el.select.placeholder");
    return e.multiple || !V.value ? $ : i.selectedLabel;
  });
  q(() => e.modelValue, (b, $) => {
    e.multiple && e.filterable && !e.reserveKeyword && (i.inputValue = "", Ce("")), nt(), !co(b, $) && e.validateEvent && (x == null || x.validate("change").catch((ee) => ke(ee)));
  }, {
    flush: "post",
    deep: !0
  }), q(() => y.value, (b) => {
    b ? Ce(i.inputValue) : (i.inputValue = "", i.previousQuery = null, i.isBeforeHide = !0), t("visible-change", b);
  }), q(() => i.options.entries(), () => {
    var b;
    if (!be)
      return;
    const $ = ((b = a.value) == null ? void 0 : b.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !ru(e.modelValue) || !Array.from($).includes(document.activeElement)) && nt(), e.defaultFirstOption && (e.filterable || e.remote) && Re.value && Nt();
  }, {
    flush: "post"
  }), q(() => i.hoveringIndex, (b) => {
    De(b) && b > -1 ? E.value = ne.value[b] || {} : E.value = {}, ne.value.forEach(($) => {
      $.hover = E.value === $;
    });
  }), Pf(() => {
    i.isBeforeHide || Se();
  });
  const Ce = (b) => {
    i.previousQuery !== b && (i.previousQuery = b, e.filterable && G(e.filterMethod) ? e.filterMethod(b) : e.filterable && e.remote && G(e.remoteMethod) && e.remoteMethod(b), e.defaultFirstOption && (e.filterable || e.remote) && Re.value ? he(Nt) : he(bn));
  }, Nt = () => {
    const b = ne.value.filter((de) => de.visible && !de.disabled && !de.states.groupDisabled), $ = b.find((de) => de.created), ee = b[0];
    i.hoveringIndex = Ws(ne.value, $ || ee);
  }, nt = () => {
    if (e.multiple)
      i.selectedLabel = "";
    else {
      const $ = Gt(e.modelValue);
      i.selectedLabel = $.currentLabel, i.selected = $;
      return;
    }
    const b = [];
    z(e.modelValue) && e.modelValue.forEach(($) => {
      b.push(Gt($));
    }), i.selected = b;
  }, Gt = (b) => {
    let $;
    const ee = Zn(b).toLowerCase() === "object", de = Zn(b).toLowerCase() === "null", $t = Zn(b).toLowerCase() === "undefined";
    for (let Qt = i.cachedOptions.size - 1; Qt >= 0; Qt--) {
      const rt = tt.value[Qt];
      if (ee ? gt(rt.value, e.valueKey) === gt(b, e.valueKey) : rt.value === b) {
        $ = {
          value: b,
          currentLabel: rt.currentLabel,
          isDisabled: rt.isDisabled
        };
        break;
      }
    }
    if ($)
      return $;
    const _n = ee ? b.label : !de && !$t ? b : "";
    return {
      value: b,
      currentLabel: _n
    };
  }, bn = () => {
    e.multiple ? i.selected.length > 0 ? i.hoveringIndex = Math.min(...i.selected.map((b) => ne.value.findIndex(($) => kn($) === kn(b)))) : i.hoveringIndex = -1 : i.hoveringIndex = ne.value.findIndex((b) => kn(b) === kn(i.selected));
  }, Yt = () => {
    i.selectionWidth = l.value.getBoundingClientRect().width;
  }, Jt = () => {
    i.calculatorWidth = p.value.getBoundingClientRect().width;
  }, wn = () => {
    i.collapseItemWidth = m.value.getBoundingClientRect().width;
  }, Zt = () => {
    var b, $;
    ($ = (b = u.value) == null ? void 0 : b.updatePopper) == null || $.call(b);
  }, Ve = () => {
    var b, $;
    ($ = (b = d.value) == null ? void 0 : b.updatePopper) == null || $.call(b);
  }, ft = () => {
    i.inputValue.length > 0 && !y.value && (y.value = !0), Ce(i.inputValue);
  }, It = (b) => {
    if (i.inputValue = b.target.value, e.remote)
      Xt();
    else
      return ft();
  }, Xt = bg(() => {
    ft();
  }, fe.value), ze = (b) => {
    co(e.modelValue, b) || t(cu, b);
  }, C = (b) => Eg(b, ($) => !i.disabledOptions.has($)), k = (b) => {
    if (e.multiple && b.code !== po.delete && b.target.value.length <= 0) {
      const $ = e.modelValue.slice(), ee = C($);
      if (ee < 0)
        return;
      $.splice(ee, 1), t(Ye, $), ze($);
    }
  }, ue = (b, $) => {
    const ee = i.selected.indexOf($);
    if (ee > -1 && !N.value) {
      const de = e.modelValue.slice();
      de.splice(ee, 1), t(Ye, de), ze(de), t("remove-tag", $.value);
    }
    b.stopPropagation(), Eo();
  }, ot = (b) => {
    b.stopPropagation();
    const $ = e.multiple ? [] : "";
    if (!ae($))
      for (const ee of i.selected)
        ee.isDisabled && $.push(ee.value);
    t(Ye, $), ze($), i.hoveringIndex = -1, y.value = !1, t("clear"), Eo();
  }, jn = (b) => {
    if (e.multiple) {
      const $ = (e.modelValue || []).slice(), ee = Ws($, b.value);
      ee > -1 ? $.splice(ee, 1) : (e.multipleLimit <= 0 || $.length < e.multipleLimit) && $.push(b.value), t(Ye, $), ze($), b.created && Ce(""), e.filterable && !e.reserveKeyword && (i.inputValue = "");
    } else
      t(Ye, b.value), ze(b.value), y.value = !1;
    Eo(), !y.value && he(() => {
      _o(b);
    });
  }, Ws = (b = [], $) => {
    if (!J($))
      return b.indexOf($);
    const ee = e.valueKey;
    let de = -1;
    return b.some(($t, _n) => K(gt($t, ee)) === gt($, ee) ? (de = _n, !0) : !1), de;
  }, _o = (b) => {
    var $, ee, de, $t, _n;
    const Oo = z(b) ? b[0] : b;
    let Qt = null;
    if (Oo != null && Oo.value) {
      const rt = ne.value.filter((Js) => Js.value === Oo.value);
      rt.length > 0 && (Qt = rt[0].$el);
    }
    if (u.value && Qt) {
      const rt = ($t = (de = (ee = ($ = u.value) == null ? void 0 : $.popperRef) == null ? void 0 : ee.contentRef) == null ? void 0 : de.querySelector) == null ? void 0 : $t.call(de, `.${r.be("dropdown", "wrap")}`);
      rt && Ig(rt, Qt);
    }
    (_n = S.value) == null || _n.handleScroll();
  }, Uu = (b) => {
    i.options.set(b.value, b), i.cachedOptions.set(b.value, b), b.disabled && i.disabledOptions.set(b.value, b);
  }, Wu = (b, $) => {
    i.options.get(b) === $ && i.options.delete(b);
  }, {
    handleCompositionStart: qu,
    handleCompositionUpdate: Gu,
    handleCompositionEnd: Yu
  } = v0((b) => It(b)), Ju = O(() => {
    var b, $;
    return ($ = (b = u.value) == null ? void 0 : b.popperRef) == null ? void 0 : $.contentRef;
  }), Zu = () => {
    he(() => _o(i.selected));
  }, Eo = () => {
    var b;
    (b = c.value) == null || b.focus();
  }, Xu = () => {
    qs();
  }, Qu = (b) => {
    ot(b);
  }, qs = (b) => {
    if (y.value = !1, T.value) {
      const $ = new FocusEvent("focus", b);
      he(() => w($));
    }
  }, ec = () => {
    i.inputValue.length > 0 ? i.inputValue = "" : y.value = !1;
  }, Gs = () => {
    N.value || e.filterable && e.remote && G(e.remoteMethod) || (i.menuVisibleOnFocus ? i.menuVisibleOnFocus = !1 : y.value = !y.value);
  }, tc = () => {
    y.value ? ne.value[i.hoveringIndex] && jn(ne.value[i.hoveringIndex]) : Gs();
  }, kn = (b) => J(b.value) ? gt(b.value, e.valueKey) : b.value, nc = O(() => ne.value.filter((b) => b.visible).every((b) => b.disabled)), oc = O(() => e.multiple ? e.collapseTags ? i.selected.slice(0, e.maxCollapseTags) : i.selected : []), rc = O(() => e.multiple ? e.collapseTags ? i.selected.slice(e.maxCollapseTags) : [] : []), Ys = (b) => {
    if (!y.value) {
      y.value = !0;
      return;
    }
    if (!(i.options.size === 0 || Re.value === 0) && !nc.value) {
      b === "next" ? (i.hoveringIndex++, i.hoveringIndex === i.options.size && (i.hoveringIndex = 0)) : b === "prev" && (i.hoveringIndex--, i.hoveringIndex < 0 && (i.hoveringIndex = i.options.size - 1));
      const $ = ne.value[i.hoveringIndex];
      ($.disabled === !0 || $.states.groupDisabled === !0 || !$.visible) && Ys(b), he(() => _o(E.value));
    }
  }, sc = () => {
    if (!l.value)
      return 0;
    const b = window.getComputedStyle(l.value);
    return Number.parseFloat(b.gap || "6px");
  }, ic = O(() => {
    const b = sc();
    return { maxWidth: `${m.value && e.maxCollapseTags === 1 ? i.selectionWidth - i.collapseItemWidth - b : i.selectionWidth}px` };
  }), ac = O(() => ({ maxWidth: `${i.selectionWidth}px` })), lc = O(() => ({
    width: `${Math.max(i.calculatorWidth, h0)}px`
  }));
  return e.multiple && !z(e.modelValue) && t(Ye, []), !e.multiple && z(e.modelValue) && t(Ye, ""), ht(l, Yt), ht(p, Jt), ht(f, Zt), ht(A, Zt), ht(_, Ve), ht(m, wn), Oe(() => {
    nt();
  }), {
    inputId: F,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: i,
    isFocused: T,
    expanded: y,
    optionsArray: ne,
    hoverOption: E,
    selectSize: ut,
    filteredOptionsCount: Re,
    resetCalculatorWidth: Jt,
    updateTooltip: Zt,
    updateTagTooltip: Ve,
    debouncedOnInputChange: Xt,
    onInput: It,
    deletePrevTag: k,
    deleteTag: ue,
    deleteSelected: ot,
    handleOptionSelect: jn,
    scrollToOption: _o,
    hasModelValue: V,
    shouldShowPlaceholder: wo,
    currentPlaceholder: Bn,
    showClose: Z,
    iconComponent: re,
    iconReverse: te,
    validateState: M,
    validateIcon: ve,
    showNewOption: We,
    updateOptions: Se,
    collapseTagSize: ct,
    setSelected: nt,
    selectDisabled: N,
    emptyText: Fe,
    handleCompositionStart: qu,
    handleCompositionUpdate: Gu,
    handleCompositionEnd: Yu,
    onOptionCreate: Uu,
    onOptionDestroy: Wu,
    handleMenuEnter: Zu,
    handleFocus: I,
    focus: Eo,
    blur: Xu,
    handleBlur: w,
    handleClearClick: Qu,
    handleClickOutside: qs,
    handleEsc: ec,
    toggleMenu: Gs,
    selectOption: tc,
    getValueKey: kn,
    navigateOptions: Ys,
    dropdownMenuVisible: Te,
    showTagList: oc,
    collapseTagList: rc,
    tagStyle: ic,
    collapseTagStyle: ac,
    inputStyle: lc,
    popperRef: Ju,
    inputRef: c,
    tooltipRef: u,
    tagTooltipRef: d,
    calculatorRef: p,
    prefixRef: g,
    suffixRef: v,
    selectRef: a,
    wrapperRef: A,
    selectionRef: l,
    scrollbarRef: S,
    menuRef: f,
    tagMenuRef: _,
    collapseItemRef: m
  };
};
var m0 = /* @__PURE__ */ W({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = le(_r);
    let o = [];
    return () => {
      var r, s;
      const i = (r = t.default) == null ? void 0 : r.call(t), a = [];
      function l(u) {
        z(u) && u.forEach((d) => {
          var c, p, g, v;
          const f = (c = (d == null ? void 0 : d.type) || {}) == null ? void 0 : c.name;
          f === "ElOptionGroup" ? l(!ae(d.children) && !z(d.children) && G((p = d.children) == null ? void 0 : p.default) ? (g = d.children) == null ? void 0 : g.default() : d.children) : f === "ElOption" ? a.push((v = d.props) == null ? void 0 : v.value) : z(d.children) && l(d.children);
        });
      }
      return i.length && l((s = i[0]) == null ? void 0 : s.children), co(a, o) || (o = a, n && (n.states.optionValues = a)), i;
    };
  }
});
const y0 = _e({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: $u,
  effect: {
    type: Q(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Q(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: !0
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: Ks.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: er,
    default: Is
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: er,
    default: Pg
  },
  tagType: { ...ku.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  remoteShowSuffix: Boolean,
  suffixTransition: {
    type: Boolean,
    default: !0
  },
  placement: {
    type: Q(String),
    values: mr,
    default: "bottom-start"
  },
  ariaLabel: {
    type: String,
    default: void 0
  }
}), La = "ElSelect", b0 = /* @__PURE__ */ W({
  name: La,
  componentName: La,
  components: {
    ElInput: Fy,
    ElSelectMenu: p0,
    ElOption: Us,
    ElOptions: m0,
    ElTag: i0,
    ElScrollbar: Zy,
    ElTooltip: e0,
    ElIcon: zt
  },
  directives: { ClickOutside: t0 },
  props: y0,
  emits: [
    Ye,
    cu,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, { emit: t }) {
    const n = g0(e, t);
    return Et(_r, hn({
      props: e,
      states: n.states,
      optionsArray: n.optionsArray,
      handleOptionSelect: n.handleOptionSelect,
      onOptionCreate: n.onOptionCreate,
      onOptionDestroy: n.onOptionDestroy,
      selectRef: n.selectRef,
      setSelected: n.setSelected
    })), {
      ...n
    };
  }
}), w0 = ["id", "disabled", "autocomplete", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], _0 = ["textContent"];
function E0(e, t, n, o, r, s) {
  const i = vt("el-tag"), a = vt("el-tooltip"), l = vt("el-icon"), u = vt("el-option"), d = vt("el-options"), c = vt("el-scrollbar"), p = vt("el-select-menu"), g = Tf("click-outside");
  return bt((P(), B("div", {
    ref: "selectRef",
    class: L([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    onMouseenter: t[14] || (t[14] = (v) => e.states.inputHovering = !0),
    onMouseleave: t[15] || (t[15] = (v) => e.states.inputHovering = !1),
    onClick: t[16] || (t[16] = Ge((...v) => e.toggleMenu && e.toggleMenu(...v), ["stop"]))
  }, [
    ie(a, {
      ref: "tooltipRef",
      visible: e.dropdownMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onBeforeShow: e.handleMenuEnter,
      onHide: t[13] || (t[13] = (v) => e.states.isBeforeHide = !1)
    }, {
      default: X(() => {
        var v;
        return [
          U("div", {
            ref: "wrapperRef",
            class: L([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ])
          }, [
            e.$slots.prefix ? (P(), B("div", {
              key: 0,
              ref: "prefixRef",
              class: L(e.nsSelect.e("prefix"))
            }, [
              oe(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            U("div", {
              ref: "selectionRef",
              class: L([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? oe(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), B(Le, null, Wr(e.showTagList, (f) => (P(), B("div", {
                  key: e.getValueKey(f),
                  class: L(e.nsSelect.e("selected-item"))
                }, [
                  ie(i, {
                    closable: !e.selectDisabled && !f.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": "",
                    style: Ie(e.tagStyle),
                    onClose: (_) => e.deleteTag(_, f)
                  }, {
                    default: X(() => [
                      U("span", {
                        class: L(e.nsSelect.e("tags-text"))
                      }, xe(f.currentLabel), 3)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), Y(a, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: X(() => [
                    U("div", {
                      ref: "collapseItemRef",
                      class: L(e.nsSelect.e("selected-item"))
                    }, [
                      ie(i, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        "disable-transitions": "",
                        style: Ie(e.collapseTagStyle)
                      }, {
                        default: X(() => [
                          U("span", {
                            class: L(e.nsSelect.e("tags-text"))
                          }, " + " + xe(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "style"])
                    ], 2)
                  ]),
                  content: X(() => [
                    U("div", {
                      ref: "tagMenuRef",
                      class: L(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), B(Le, null, Wr(e.collapseTagList, (f) => (P(), B("div", {
                        key: e.getValueKey(f),
                        class: L(e.nsSelect.e("selected-item"))
                      }, [
                        ie(i, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !f.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          "disable-transitions": "",
                          onClose: (_) => e.deleteTag(_, f)
                        }, {
                          default: X(() => [
                            U("span", {
                              class: L(e.nsSelect.e("tags-text"))
                            }, xe(f.currentLabel), 3)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 1
                }, 8, ["disabled", "effect", "teleported"])) : H("v-if", !0)
              ]) : H("v-if", !0),
              e.selectDisabled ? H("v-if", !0) : (P(), B("div", {
                key: 1,
                class: L([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                bt(U("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": t[0] || (t[0] = (f) => e.states.inputValue = f),
                  type: "text",
                  class: L([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ie(e.inputStyle),
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((v = e.hoverOption) == null ? void 0 : v.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onFocus: t[1] || (t[1] = (...f) => e.handleFocus && e.handleFocus(...f)),
                  onBlur: t[2] || (t[2] = (...f) => e.handleBlur && e.handleBlur(...f)),
                  onKeydown: [
                    t[3] || (t[3] = Wn(Ge((f) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                    t[4] || (t[4] = Wn(Ge((f) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                    t[5] || (t[5] = Wn(Ge((...f) => e.handleEsc && e.handleEsc(...f), ["stop", "prevent"]), ["esc"])),
                    t[6] || (t[6] = Wn(Ge((...f) => e.selectOption && e.selectOption(...f), ["stop", "prevent"]), ["enter"])),
                    t[7] || (t[7] = Wn(Ge((...f) => e.deletePrevTag && e.deletePrevTag(...f), ["stop"]), ["delete"]))
                  ],
                  onCompositionstart: t[8] || (t[8] = (...f) => e.handleCompositionStart && e.handleCompositionStart(...f)),
                  onCompositionupdate: t[9] || (t[9] = (...f) => e.handleCompositionUpdate && e.handleCompositionUpdate(...f)),
                  onCompositionend: t[10] || (t[10] = (...f) => e.handleCompositionEnd && e.handleCompositionEnd(...f)),
                  onInput: t[11] || (t[11] = (...f) => e.onInput && e.onInput(...f)),
                  onClick: t[12] || (t[12] = Ge((...f) => e.toggleMenu && e.toggleMenu(...f), ["stop"]))
                }, null, 46, w0), [
                  [wd, e.states.inputValue]
                ]),
                e.filterable ? (P(), B("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: L(e.nsSelect.e("input-calculator")),
                  textContent: xe(e.states.inputValue)
                }, null, 10, _0)) : H("v-if", !0)
              ], 2)),
              e.shouldShowPlaceholder ? (P(), B("div", {
                key: 2,
                class: L([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                U("span", null, xe(e.currentPlaceholder), 1)
              ], 2)) : H("v-if", !0)
            ], 2),
            U("div", {
              ref: "suffixRef",
              class: L(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), Y(l, {
                key: 0,
                class: L([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: X(() => [
                  (P(), Y(Bt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              e.showClose && e.clearIcon ? (P(), Y(l, {
                key: 1,
                class: L([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: X(() => [
                  (P(), Y(Bt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : H("v-if", !0),
              e.validateState && e.validateIcon ? (P(), Y(l, {
                key: 2,
                class: L([e.nsInput.e("icon"), e.nsInput.e("validateIcon")])
              }, {
                default: X(() => [
                  (P(), Y(Bt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)
        ];
      }),
      content: X(() => [
        ie(p, { ref: "menuRef" }, {
          default: X(() => [
            e.$slots.header ? (P(), B("div", {
              key: 0,
              class: L(e.nsSelect.be("dropdown", "header"))
            }, [
              oe(e.$slots, "header")
            ], 2)) : H("v-if", !0),
            bt(ie(c, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: L([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: X(() => [
                e.showNewOption ? (P(), Y(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : H("v-if", !0),
                ie(d, null, {
                  default: X(() => [
                    oe(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [gn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (P(), B("div", {
              key: 1,
              class: L(e.nsSelect.be("dropdown", "loading"))
            }, [
              oe(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), B("div", {
              key: 2,
              class: L(e.nsSelect.be("dropdown", "empty"))
            }, [
              oe(e.$slots, "empty", {}, () => [
                U("span", null, xe(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (P(), B("div", {
              key: 3,
              class: L(e.nsSelect.be("dropdown", "footer"))
            }, [
              oe(e.$slots, "footer")
            ], 2)) : H("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onBeforeShow"])
  ], 34)), [
    [g, e.handleClickOutside, e.popperRef]
  ]);
}
var O0 = /* @__PURE__ */ ge(b0, [["render", E0], ["__file", "select.vue"]]);
const S0 = /* @__PURE__ */ W({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = we("select"), n = R(null), o = Me(), r = R([]);
    Et(Hu, hn({
      ...al(e)
    }));
    const s = O(() => r.value.some((l) => l.visible === !0)), i = (l) => {
      const u = [];
      return z(l.children) && l.children.forEach((d) => {
        var c;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (c = d.children) != null && c.length && u.push(...i(d));
      }), u;
    }, a = () => {
      r.value = i(o.subTree);
    };
    return Oe(() => {
      a();
    }), Md(n, a, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: t
    };
  }
});
function T0(e, t, n, o, r, s) {
  return bt((P(), B("ul", {
    ref: "groupRef",
    class: L(e.ns.be("group", "wrap"))
  }, [
    U("li", {
      class: L(e.ns.be("group", "title"))
    }, xe(e.label), 3),
    U("li", null, [
      U("ul", {
        class: L(e.ns.b("group"))
      }, [
        oe(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [gn, e.visible]
  ]);
}
var Ku = /* @__PURE__ */ ge(S0, [["render", T0], ["__file", "option-group.vue"]]);
const C0 = yn(O0, {
  Option: Us,
  OptionGroup: Ku
}), N0 = uu(Us);
uu(Ku);
const I0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, $0 = {
  name: "SearchSelect",
  components: { ElSelect: C0, ElOption: N0 },
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: [String, Number, Array, Boolean],
    filterable: {
      type: Boolean,
      default: !0
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      },
      placeholder: {
        type: String,
        default: "请选择"
      }
    },
    width: {
      type: String,
      default: "220px"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      optionsList: [],
      copyOptionsList: []
    };
  },
  watch: {
    options() {
      this.initOptions();
    }
  },
  created() {
    this.initOptions();
  },
  methods: {
    /**
     * @Description: 下拉框支持模糊搜索
     * @Author: Lucas
     * @param {*} val
     */
    handleSelectFilter(e) {
      try {
        e ? this.optionsList = this.copyOptionsList.filter(
          (t) => pc.match(t.dictLabel || t.label, e)
        ) : this.optionsList = this.copyOptionsList;
      } catch (t) {
        console.error("模糊音下拉框：", t);
      }
    },
    /**
     * @Description: 清除筛选恢复options
     * @Author: Lucas
     * @param {*} val 出现则为 true，隐藏则为 false
     */
    handleClearOptions(e) {
      e && (this.optionsList = this.copyOptionsList);
    },
    initOptions() {
      this.optionsList = this.$props.options, this.copyOptionsList = JSON.parse(JSON.stringify(this.$props.options));
    }
  }
};
function P0(e, t, n, o, r, s) {
  const i = vt("el-option"), a = vt("el-select");
  return P(), Y(a, wt({
    style: `width: ${e.$props.width}`,
    value: n.value,
    filterable: e.$props.filterable
  }, e.$attrs, kf(e.$listeners), {
    clearable: e.$props.clearable,
    onVisibleChange: s.handleClearOptions,
    "filter-method": s.handleSelectFilter,
    size: "small",
    placeholder: e.$props.placeholder,
    disabled: e.$props.disabled
  }), {
    default: X(() => [
      (P(!0), B(Le, null, Wr(r.optionsList, (l) => (P(), Y(i, {
        key: `${l.dictValue || l.value}-${l.dictLabel || l.label} `,
        label: l.dictLabel || l.label,
        value: l.dictValue || l.value,
        disabled: l.disabled
      }, null, 8, ["label", "value", "disabled"]))), 128))
    ]),
    _: 1
  }, 16, ["style", "value", "filterable", "clearable", "onVisibleChange", "filter-method", "placeholder", "disabled"]);
}
const Fr = /* @__PURE__ */ I0($0, [["render", P0]]);
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
export {
  Fr as default
};
