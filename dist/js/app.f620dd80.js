(function(){var n={4580:function(n,i,e){"use strict";var a=e(9242),o=e(3396),r=e(7139),s=e(1665);const t={class:"container bg"},l={class:"inputs"},u={class:"currency"},c=(0,o._)("label",{for:"chooseLeft"},"Choose currency:",-1),g=["value"],d=(0,o._)("img",{class:"inbeetween",src:s},null,-1),p={class:"currency"},m=(0,o._)("label",{for:"chooseRight"},"Choose currency:",-1),h=["value"];function y(n,i,e,s,y,v){return(0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",l,[(0,o._)("div",u,[(0,o._)("input",{ref:"leftInp",onKeyup:i[0]||(i[0]=(...n)=>v.leftKey&&v.leftKey(...n)),type:"number",style:(0,r.j5)(v.leftInputBackground)},null,36),c,(0,o.wy)((0,o._)("select",{onChange:i[1]||(i[1]=(...n)=>v.leftSelect&&v.leftSelect(...n)),"onUpdate:modelValue":i[2]||(i[2]=i=>n.leftCurrency=i),id:"chooseLeft"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.currencies,(n=>((0,o.wg)(),(0,o.iD)("option",{style:{"background-color":"lightcyan"},value:n,key:n},(0,r.zw)(this.currencyTable[n].name),9,g)))),128))],544),[[a.bM,n.leftCurrency]])]),d,(0,o._)("div",p,[(0,o._)("input",{ref:"rightInp",onKeyup:i[3]||(i[3]=(...n)=>v.rightKey&&v.rightKey(...n)),type:"number",style:(0,r.j5)(v.rightInputBackground)},null,36),m,(0,o.wy)((0,o._)("select",{onChange:i[4]||(i[4]=(...n)=>v.rightSelect&&v.rightSelect(...n)),"onUpdate:modelValue":i[5]||(i[5]=i=>n.rightCurrency=i),id:"chooseRight"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.currencies,(n=>((0,o.wg)(),(0,o.iD)("option",{style:{"background-color":"lightcyan"},value:n,key:n},(0,r.zw)(this.currencyTable[n].name),9,h)))),128))],544),[[a.bM,n.rightCurrency]])])])])}e(6699);var v=e(6265),_=e.n(v),b={name:"App",data:()=>({leftValue:"",rightValue:"",rates:[],currencyTable:{},leftCurrency:"us dollar",rightCurrency:"us dollar",currencies:[],q:1}),watch:{},methods:{leftKey(n){this.$refs.rightInp.value=((n.target.value-0)*this.q).toFixed(2)},rightKey(n){this.$refs.leftInp.value=((n.target.value-0)/this.q).toFixed(2)},getLocal(){const n=Intl.DateTimeFormat().resolvedOptions().timeZone,i=n.split("/").reverse();let e="";for(let a=0;a<i.length;a++){console.log(i[a]);for(let n=0;n<this.currencies.length;n++){if(this.currencyTable[this.currencies[n]].position.includes(i[a])){e=this.currencies[n];break}if(e)break}}e=e||"us dollar",this.leftCurrency=e,this.rightCurrency="us dollar"},leftSelect(n){this.initQ(),this.$refs.leftInp.value=(this.$refs.rightInp.value/this.q).toFixed(2)},rightSelect(n){this.initQ(),this.$refs.rightInp.value=(this.$refs.leftInp.value*this.q).toFixed(2)},initQ(){this.q=this.rates[this.currencyTable[this.rightCurrency].code]/this.rates[this.currencyTable[this.leftCurrency].code]}},created(){this.currencyTable=e(2580),Object.keys(this.currencyTable).forEach((n=>{this.currencies.push(n)}));const n={method:"GET",url:" https://open.er-api.com/v6/latest/USD"};_().request(n).then((n=>{this.rates=n.data.rates,this.rates.USD=1,this.initQ()})).catch((function(n){console.error(n)})),this.getLocal()},computed:{leftInputBackground(){const n={background:"url("+e(2498)("./"+this.leftCurrency.replaceAll(" ","_")+".svg")+")","background-repeat":"no-repeat","background-size":"8vmin,8vmin","background-position":"1vmin, 1vmin"};return n},rightInputBackground(){const n={background:"url("+e(2498)("./"+this.rightCurrency.replaceAll(" ","_")+".svg")+")","background-repeat":"no-repeat","background-size":"8vmin,8vmin","background-position":"1vmin, 1vmin"};return n}},components:{}},f=e(89);const k=(0,f.Z)(b,[["render",y]]);var w=k;(0,a.ri)(w).mount("#app")},2498:function(n,i,e){var a={"./armenian_dram.svg":4309,"./brazilian_real.svg":8618,"./british_pound_sterling.svg":7872,"./bulgarian_lev.svg":3672,"./canadian_dollar.svg":4813,"./chinese_yuan.svg":6610,"./czech_republic_koruna.svg":1712,"./euro.svg":2178,"./hong_kong_dollar.svg":6448,"./hungarian_forint.svg":9932,"./indian_rupee.svg":5229,"./indonesian_rupiah.svg":5041,"./israeli_sheqel.svg":1324,"./malaysian_ringgit.svg":6184,"./norwegian_krone.svg":4180,"./philippine_peso.svg":9351,"./polish_zloty.svg":8979,"./russian_ruble.svg":7907,"./south_african_rand.svg":8438,"./south_korean_won.svg":4744,"./swiss_franc.svg":3802,"./taiwan_dollar.svg":2405,"./thai_baht.svg":6814,"./turkish_lira.svg":914,"./two-arrows.svg":1665,"./us_dollar.svg":9682,"./vietnamese_dong.svg":1083};function o(n){var i=r(n);return e(i)}function r(n){if(!e.o(a,n)){var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}return a[n]}o.keys=function(){return Object.keys(a)},o.resolve=r,n.exports=o,o.id=2498},4309:function(n,i,e){"use strict";n.exports=e.p+"img/armenian_dram.373d554d.svg"},8618:function(n,i,e){"use strict";n.exports=e.p+"img/brazilian_real.9e872405.svg"},7872:function(n,i,e){"use strict";n.exports=e.p+"img/british_pound_sterling.ca659576.svg"},3672:function(n,i,e){"use strict";n.exports=e.p+"img/bulgarian_lev.01673278.svg"},4813:function(n,i,e){"use strict";n.exports=e.p+"img/canadian_dollar.44c1f380.svg"},6610:function(n,i,e){"use strict";n.exports=e.p+"img/chinese_yuan.0b33971b.svg"},1712:function(n,i,e){"use strict";n.exports=e.p+"img/czech_republic_koruna.636a255c.svg"},2178:function(n,i,e){"use strict";n.exports=e.p+"img/euro.0aa5c862.svg"},6448:function(n,i,e){"use strict";n.exports=e.p+"img/hong_kong_dollar.aabda2d3.svg"},9932:function(n,i,e){"use strict";n.exports=e.p+"img/hungarian_forint.c88880d4.svg"},5229:function(n,i,e){"use strict";n.exports=e.p+"img/indian_rupee.62274c69.svg"},5041:function(n,i,e){"use strict";n.exports=e.p+"img/indonesian_rupiah.e078fe7e.svg"},1324:function(n,i,e){"use strict";n.exports=e.p+"img/israeli_sheqel.08147cb1.svg"},6184:function(n,i,e){"use strict";n.exports=e.p+"img/malaysian_ringgit.e792b1cb.svg"},4180:function(n,i,e){"use strict";n.exports=e.p+"img/norwegian_krone.0324045e.svg"},9351:function(n,i,e){"use strict";n.exports=e.p+"img/philippine_peso.b116e516.svg"},8979:function(n,i,e){"use strict";n.exports=e.p+"img/polish_zloty.01718b1a.svg"},7907:function(n,i,e){"use strict";n.exports=e.p+"img/russian_ruble.8d4f3a62.svg"},8438:function(n,i,e){"use strict";n.exports=e.p+"img/south_african_rand.94f0cb33.svg"},4744:function(n,i,e){"use strict";n.exports=e.p+"img/south_korean_won.d8058c9d.svg"},3802:function(n,i,e){"use strict";n.exports=e.p+"img/swiss_franc.972d57cb.svg"},2405:function(n,i,e){"use strict";n.exports=e.p+"img/taiwan_dollar.07d4fe2a.svg"},6814:function(n,i,e){"use strict";n.exports=e.p+"img/thai_baht.3d7ab461.svg"},914:function(n,i,e){"use strict";n.exports=e.p+"img/turkish_lira.69ea9eb6.svg"},1665:function(n,i,e){"use strict";n.exports=e.p+"img/two-arrows.b416ca0c.svg"},9682:function(n,i,e){"use strict";n.exports=e.p+"img/us_dollar.cedecbf1.svg"},1083:function(n,i,e){"use strict";n.exports=e.p+"img/vietnamese_dong.69644157.svg"},2580:function(n){"use strict";n.exports=JSON.parse('{"brazilian real":{"symbol":"R$","name":"Brazilian Real","symbol_native":"R$","decimal_digits":2,"rounding":0,"code":"BRL","name_plural":"Brazilian reals","position":"Brazil"},"british pound sterling":{"symbol":"£","name":"British Pound Sterling","symbol_native":"£","decimal_digits":2,"rounding":0,"code":"GBP","name_plural":"British pounds sterling","position":"London"},"bulgarian lev":{"symbol":"BGN","name":"Bulgarian Lev","symbol_native":"лв.","decimal_digits":2,"rounding":0,"code":"BGN","name_plural":"Bulgarian leva","position":"Sofia"},"canadian dollar":{"symbol":"CA$","name":"Canadian Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"CAD","name_plural":"Canadian dollars","position":"Canada"},"chinese yuan":{"symbol":"CN¥","name":"Chinese Yuan","symbol_native":"CN¥","decimal_digits":2,"rounding":0,"code":"CNY","name_plural":"Chinese yuan","position":"China"},"czech republic koruna":{"symbol":"Kč","name":"Czech Republic Koruna","symbol_native":"Kč","decimal_digits":2,"rounding":0,"code":"CZK","name_plural":"Czech Republic korunas","position":"Prague"},"euro":{"symbol":"€","name":"Euro","symbol_native":"€","decimal_digits":2,"rounding":0,"code":"EUR","name_plural":"euros","position":"Europe"},"hong kong dollar":{"symbol":"HK$","name":"Hong Kong Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"HKD","name_plural":"Hong Kong dollars","position":"Hongkong"},"hungarian forint":{"symbol":"Ft","name":"Hungarian Forint","symbol_native":"Ft","decimal_digits":0,"rounding":0,"code":"HUF","name_plural":"Hungarian forints","position":"Budapest"},"indian rupee":{"symbol":"Rs","name":"Indian Rupee","symbol_native":"টকা","decimal_digits":2,"rounding":0,"code":"INR","name_plural":"Indian rupees","position":"India"},"indonesian rupiah":{"symbol":"Rp","name":"Indonesian Rupiah","symbol_native":"Rp","decimal_digits":0,"rounding":0,"code":"IDR","name_plural":"Indonesian rupiahs","position":"Jakarta"},"israeli sheqel":{"symbol":"₪","name":"Israeli Sheqel","symbol_native":"₪","decimal_digits":2,"rounding":0,"code":"ILS","name_plural":"Israeli new sheqels","position":"Israel"},"malaysian ringgit":{"symbol":"RM","name":"Malaysian Ringgit","symbol_native":"RM","decimal_digits":2,"rounding":0,"code":"MYR","name_plural":"Malaysian ringgits","position":"Kuala_Lumpur"},"norwegian krone":{"symbol":"Nkr","name":"Norwegian Krone","symbol_native":"kr","decimal_digits":2,"rounding":0,"code":"NOK","name_plural":"Norwegian kroner","position":"Oslo"},"philippine peso":{"symbol":"₱","name":"Philippine Peso","symbol_native":"₱","decimal_digits":2,"rounding":0,"code":"PHP","name_plural":"Philippine pesos","position":"Manila"},"polish zloty":{"symbol":"zł","name":"Polish Zloty","symbol_native":"zł","decimal_digits":2,"rounding":0,"code":"PLN","name_plural":"Polish zlotys","position":"Poland"},"russian ruble":{"symbol":"RUB","name":"Russian Ruble","symbol_native":"₽.","decimal_digits":2,"rounding":0,"code":"RUB","name_plural":"Russian rubles","position":"Moscow,Yekaterinburg,Kaliningrad,Adygey,Arkhangel\'sk,Belgorod,Bryansk,Chechnya,Chuvash,Dagestan,Ingush,Ivanovo,Kabardin-Balkar,Kalmyk,Kaluga,Karachay-Cherkess,Karelia,Kirov,Komi,Kostroma,Krasnodar,Kursk,Leningrad,Lipetsk,Mariy-El,Mordovia,Moscow City,Moskva,Murmansk,Nenets,Nizhegorod,North Ossetia,Novgorod,Orel,Penza,Pskov,Rostov,Ryazan\',Saint Petersburg City,Saratov,Smolensk,Stavropol\',Tambov,Tatarstan,Tula,Tver\',Vladimir,Volgograd,Vologda,Voronezh,Yaroslavl,Astrakhan\',Samara,Udmurt,Altay,Gorno-Altay,Kemerovo,Khakass,Krasnoyarsk,Novosibirsk,Tomsk,Tuva,Buryat,Irkutsk,Amur,Zabaykal\'ye,and the following raions of Sakha: Aldansky,Amginsky,Anabarsky,Bulunsky,Churapchinsky,Eveno-Bytantaisky,Gorny,Khangalassky,Kobyaisky,Lensky,Megino-Kangalassky,Mirninsky,Namsky,Nyurbinsky,Olenyoksky,Olyokminsky,Srednekolymsky,Suntarsky,Tattinsky,Ust-Aldansky,Verkhnekolymsky,Verkhnevilyuisky,Vilyuisky,Magadan,Sakhalin,Vladivostok,Khabarovsk,Primor\'ye,Yevrey,and the following raions of Sakha: Tomponsky,Ust-Maisky,Ust-Yansky,Verkhoyansky,Chukot,Kamchatka"},"south african rand":{"symbol":"R","name":"South African Rand","symbol_native":"R","decimal_digits":2,"rounding":0,"code":"ZAR","name_plural":"South African rand","position":"Johannesburg"},"south korean won":{"symbol":"₩","name":"South Korean Won","symbol_native":"₩","decimal_digits":0,"rounding":0,"code":"KRW","name_plural":"South Korean won","position":"Seoul"},"swiss franc":{"symbol":"CHF","name":"Swiss Franc","symbol_native":"CHF","decimal_digits":2,"rounding":0.05,"code":"CHF","name_plural":"Swiss francs","position":"Zurich"},"taiwan dollar":{"symbol":"NT$","name":"Taiwan Dollar","symbol_native":"NT$","decimal_digits":2,"rounding":0,"code":"TWD","name_plural":"New Taiwan dollars","position":"Taipei"},"thai baht":{"symbol":"฿","name":"Thai Baht","symbol_native":"฿","decimal_digits":2,"rounding":0,"code":"THB","name_plural":"Thai baht","position":"Bangkok"},"turkish lira":{"symbol":"TL","name":"Turkish Lira","symbol_native":"TL","decimal_digits":2,"rounding":0,"code":"TRY","name_plural":"Turkish Lira","position":"Istanbul"},"us dollar":{"symbol":"$","name":"US Dollar","symbol_native":"$","decimal_digits":2,"rounding":0,"code":"USD","name_plural":"US dollars","position":"America"},"vietnamese dong":{"symbol":"₫","name":"Vietnamese Dong","symbol_native":"₫","decimal_digits":0,"rounding":0,"code":"VND","name_plural":"Vietnamese dong","position":"Hanoi"}}')}},i={};function e(a){var o=i[a];if(void 0!==o)return o.exports;var r=i[a]={exports:{}};return n[a](r,r.exports,e),r.exports}e.m=n,function(){var n=[];e.O=function(i,a,o,r){if(!a){var s=1/0;for(c=0;c<n.length;c++){a=n[c][0],o=n[c][1],r=n[c][2];for(var t=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(e.O).every((function(n){return e.O[n](a[l])}))?a.splice(l--,1):(t=!1,r<s&&(s=r));if(t){n.splice(c--,1);var u=o();void 0!==u&&(i=u)}}return i}r=r||0;for(var c=n.length;c>0&&n[c-1][2]>r;c--)n[c]=n[c-1];n[c]=[a,o,r]}}(),function(){e.n=function(n){var i=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(i,{a:i}),i}}(),function(){e.d=function(n,i){for(var a in i)e.o(i,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:i[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)}}(),function(){e.p="/"}(),function(){var n={143:0};e.O.j=function(i){return 0===n[i]};var i=function(i,a){var o,r,s=a[0],t=a[1],l=a[2],u=0;if(s.some((function(i){return 0!==n[i]}))){for(o in t)e.o(t,o)&&(e.m[o]=t[o]);if(l)var c=l(e)}for(i&&i(a);u<s.length;u++)r=s[u],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(c)},a=self["webpackChunkvue"]=self["webpackChunkvue"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(4580)}));a=e.O(a)})();
//# sourceMappingURL=app.f620dd80.js.map