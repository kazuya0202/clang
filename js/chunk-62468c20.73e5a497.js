(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62468c20","chunk-d5f090e8"],{"07b9":function(t,e,s){},"4e40":function(t,e,s){"use strict";var i=s("7af9"),v=s.n(i);v.a},"58db":function(t,e,s){},"7af9":function(t,e,s){},ad0e:function(t,e,s){"use strict";var i=s("d141"),v=s.n(i);v.a},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"grey lighten-4",attrs:{id:"Home","fill-height":"",column:""}},[s("div",{staticClass:"main-pane white elevation-3"},[s("v-btn",{attrs:{to:{name:"standard-exp"},color:"purple"}},[t._v("press to [ standard-exp ]")]),s("standard"),s("br"),s("v-divider"),s("standard-exp")],1)])},v=[],n=s("d225"),_=s("308d"),c=s("6bb5"),a=s("4e2b"),r=s("cce8"),l=s("82f7"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"standard"},[s("div",{staticClass:"container"},[s("h1",[t._v("C言語 練習問題集 <きほんのきほん>")]),s("v-chip",{staticClass:"title",attrs:{dark:"",color:"#BA68C8","text-color":"black"}},[t._v("標準入出力 (stdio)")])],1),s("div",{staticClass:"contents"},[s("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),s("h2",{staticClass:"prompt"},[t._v("Hello, World!")]),s("h4",[t._v(t._s(t.desc))]),s("details",[s("summary",[t._v("answer example 1")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    printf("Hello, World\\n");\n    return 0;\n}')])]),s("details",[s("summary",[t._v("answer example 2")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    puts("Hello, World");\n    return 0;\n}')])])]),s("v-divider"),s("div",{staticClass:"contents"},[s("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),t._m(0),s("h4",[t._v(t._s(t.desc)),s("br"),t._v("（ただし、文章の間は1行あけること）")]),s("details",[s("summary",[t._v("answer example 1")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    printf("こんにちは\\n");\n    printf("\\n");\n    printf("今日はいい天気ですね\\n");\n    return 0;\n}')])]),s("details",[s("summary",[t._v("answer example 2")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    printf("こんにちは\\n\\n今日はいい天気ですね\\n");\n    return 0;\n}')])])]),s("v-divider"),s("div",{staticClass:"contents"},[s("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),s("h2",{staticClass:"prompt"},[t._v("100 + 50 = 150")]),s("h4",[t._v(t._s(t.desc)),s("br"),t._v("（変数を用いること）")]),s("details",[s("summary",[t._v("answer example")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+"\nint main() {\n    int x = 100;\n    int y = 50; "),s("br"),t._v('\n    printf("%d + %d = %d\\n", x, y, x + y);\n    return 0;\n}')])])]),s("v-divider"),s("div",{staticClass:"contents"},[s("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),s("h2",{staticClass:"prompt"},[t._v("PI = 3.14")]),s("h4",[t._v(t._s(t.desc)),s("br"),t._v("（変数を用いること. また、3.14の後に0が続いていてもよい）")]),s("details",[s("summary",[t._v("answer example")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+"\nint main() {\n    float pi = 3.14;\n    // double pi = 3.14 でもよい "),s("br"),t._v('\n    printf("PI = %f\\n", pi);\n    return 0;\n}')])])]),s("v-divider"),s("div",{staticClass:"contents"},[s("h3",{staticClass:"question"},[t._v("Question "+t._s(t.counter()))]),t._m(1),s("h4",[t._v(t._s(t.desc)),s("br"),t._v("（scanf関数を用いてプロンプトから値を入力する）")]),s("details",[s("summary",[t._v("answer example")]),s("code",{staticClass:"code"},[t._v(t._s(t.includeStr)+'\nint main() {\n    int m, n;\n    printf("整数を入力してください\\n"); '),s("br"),t._v('\n    scanf("%d", &m);\n    scanf("%d", &n); '),s("br"),t._v('\n    printf("m + n = %d\\n", m + n);\n    return 0;\n}')])])])],1)},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"prompt"},[t._v("こんにちは"),s("br"),s("br"),t._v("今日はいい天気ですね")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"prompt"},[t._v("整数を入力してください"),s("br"),t._v("m = 10↲"),s("br"),t._v("n = 15↲"),s("br"),s("br"),t._v("m + n = 25")])}],u=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(_["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.desc="と表示するプログラムを作成せよ",t.includeStr="#include <stdio.h>",t.count=0,t.counter=function(){return++t.count},t}return Object(a["a"])(e,t),e}(l["Vue"]);u=r["__decorate"]([l["Component"]],u);var f=u,m=f,b=(s("4e40"),s("2877")),p=s("6544"),h=s.n(p),C=(s("bf5a"),s("58df")),y=s("9d26"),x=s("b64a"),w=s("6a18"),$=s("98a1"),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},E=Object(C["a"])(x["a"],w["a"],$["a"]).extend({name:"v-chip",props:{close:Boolean,disabled:Boolean,label:Boolean,outline:Boolean,selected:Boolean,small:Boolean,textColor:String,value:{type:Boolean,default:!0}},computed:{classes:function(){return g({"v-chip--disabled":this.disabled,"v-chip--selected":this.selected&&!this.disabled,"v-chip--label":this.label,"v-chip--outline":this.outline,"v-chip--small":this.small,"v-chip--removable":this.close},this.themeClasses)}},methods:{genClose:function(t){var e=this,s={staticClass:"v-chip__close",on:{click:function(t){t.stopPropagation(),e.$emit("input",!1)}}};return t("div",s,[t(y["a"],"$vuetify.icons.delete")])},genContent:function(t){return t("span",{staticClass:"v-chip__content"},[this.$slots.default,this.close&&this.genClose(t)])}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-chip",class:this.classes,attrs:{tabindex:this.disabled?-1:0},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),s=this.textColor||this.outline&&this.color;return t("span",this.setTextColor(s,e),[this.genContent(t)])}}),O=s("ce7e6"),S=Object(b["a"])(m,o,d,!1,null,"9c7ce4aa",null),k=S.exports;h()(S,{VChip:E,VDivider:O["a"]});var j=s("c7be"),B=function(t){function e(){return Object(n["a"])(this,e),Object(_["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(a["a"])(e,t),e}(l["Vue"]);B=r["__decorate"]([Object(l["Component"])({components:{Standard:k,StandardExp:j["default"]}})],B);var A=B,P=A,V=(s("c219"),s("8336"));s("db6d");function I(t){return{name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,s){var i=s.props,v=s.data,n=s.children;v.staticClass=(t+" "+(v.staticClass||"")).trim();var _=v.attrs;if(_){v.attrs={};var c=Object.keys(_).filter(function(t){if("slot"===t)return!1;var e=_[t];return t.startsWith("data-")?(v.attrs[t]=e,!1):e||"string"===typeof e});c.length&&(v.staticClass+=" "+c.join(" "))}return i.id&&(v.domProps=v.domProps||{},v.domProps.id=i.id),e(i.tag,v,n)}}}var D=I("layout"),X=Object(b["a"])(P,i,v,!1,null,null,null);e["default"]=X.exports;h()(X,{VBtn:V["a"],VDivider:O["a"],VLayout:D})},bf5a:function(t,e,s){},c219:function(t,e,s){"use strict";var i=s("07b9"),v=s.n(i);v.a},c7be:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"standard-exp"},[s("h1",{staticStyle:{"text-align":"center","border-bottom":"solid 3px #0277BD",width:"250px",margin:"auto"}},[t._v("解説ページ")]),s("br"),s("p",{staticClass:"title"},[t._v("#include <stdio.h>")]),t._m(0),s("p",{staticClass:"title"},[t._v("int main(void)")]),t._m(1),s("p",{staticClass:"title"},[t._v("{ }")]),t._m(2),s("p",{staticClass:"title"},[t._v(";")]),t._m(3),s("p",{staticClass:"title"},[t._v("return")]),t._m(4),s("p",{staticClass:"title"},[t._v("変数")]),t._m(5),s("p",{staticClass:"title"},[t._v("コメント")]),t._m(6),s("p",{staticClass:"title"},[t._v("型")]),t._m(7),s("p",{staticClass:"title"},[t._v("型とreturn値")]),s("ul",[t._m(8),s("code",{staticClass:"code"},[t._v("<型> 関数名() {\n    ...\n    <return文>\n}")]),s("tt",[s("table",[s("tr",[s("th",[t._v("型")]),s("th",[t._v("return文")])]),s("tr",[s("td",[t._v("void")]),s("td",[t._v("return;")])]),s("tr",[s("td",[t._v("int")]),s("td",[t._v("return "),s("span",{staticClass:"type-bg"},[t._v("整数")]),t._v(";")])]),s("tr",[s("td",[t._v("float")]),s("td",[t._v("return "),s("span",{staticClass:"type-bg"},[t._v("実数")]),t._v(";")])]),s("tr",[s("td",[t._v("double")]),s("td",[t._v("return "),s("span",{staticClass:"type-bg"},[t._v("実数")]),t._v(";")])]),s("tr",[s("td",[t._v("char")]),s("td",[t._v("return "),s("span",{staticClass:"type-bg"},[t._v("文字")]),t._v(";")])]),s("tr",[s("td",[t._v("char[]")]),s("td",[t._v("return "),s("span",{staticClass:"type-bg"},[t._v("文字列")]),t._v(";")])]),s("tr",[s("td",[t._v("bool")]),s("td",[t._v("return "),s("span",{staticClass:"type-bg"},[t._v("真偽値")]),t._v(";")])])])])],1),s("p",{staticClass:"title"},[t._v("変数の宣言 / 初期化")]),t._m(9),s("p",{staticClass:"title"},[t._v("キャスト")]),t._m(10),s("p",{staticClass:"title"},[t._v("算術演算子")]),t._m(11),t._m(12),s("p",{staticClass:"title"},[t._v("複合代入演算子")]),t._m(13),s("p",{staticClass:"title"},[t._v("単項演算子")]),t._m(14),s("p",{staticClass:"title"},[t._v("printf()")]),t._m(15),s("p",{staticClass:"title"},[t._v("エスケープシーケンス（特殊文字）")]),t._m(16),s("p",{staticClass:"title"},[t._v("scanf()")]),t._m(17),s("p",{staticClass:"title"},[t._v("変換指定子")]),t._m(18),s("p",{staticClass:"title"},[t._v("条件分岐")]),t._m(19),s("p",{staticClass:"title"},[t._v("条件式")]),t._m(20),s("p",{staticClass:"title"},[t._v("比較演算子")]),t._m(21),s("p",{staticClass:"title"},[t._v("論理演算子")]),t._m(22),s("p",{staticClass:"title"},[t._v("比較演算子と論理演算子の組み合わせ")]),t._m(23),s("p",{staticClass:"title"},[t._v("繰り返し処理")]),s("ul",[t._m(24),s("li",[t._v("主な使い分けは以下の通り")]),t._m(25),t._m(26),s("br"),s("details",{staticStyle:{background:"#C5E1A5",padding:".1rem .2rem"}},[s("summary",[t._v("繰り返しの考え方")]),s("v-divider"),t._m(27),s("v-divider"),s("br"),s("p",{staticClass:"type-bg",staticStyle:{width:"fit-content",margin:"auto"}},[t._v("10回処理を繰り返すプログラムの考え方")]),s("ol",{staticStyle:{background:"#FFCCBC"}},[t._m(28),s("v-divider"),t._m(29),t._v("（1から始めても問題ないがプログラムでは0から始めると後々応用しやすい）"),s("v-divider"),t._m(30),t._v("（このとき"),s("code",[t._v("i")]),t._v("が"),s("code",[t._v("0～9")]),t._v("と順にカウントしていくとちょうど10回になると考えるとよい） "),s("br"),s("code",[t._v("i")]),t._v("は"),s("code",[t._v("0～9")]),t._v("の値をとる => "),s("code",[t._v("i < 10")]),t._v("または"),s("code",[t._v("i <= 9")]),s("v-divider"),t._m(31),t._v("ここでは、回数を表示する "),s("br"),s("code",{staticClass:"code",staticStyle:{width:"fit-content"}},[t._v('printf("%d回目\\n", i + 1);')]),s("v-divider"),s("li",[t._v("変数の値を更新する")]),t._v("今回はカウントアップしていくため"),s("code",[t._v("i")]),t._v("をインクリメント "),s("br"),s("code",{staticClass:"code",staticStyle:{width:"fit-content"}},[t._v("i++;")]),s("v-divider"),s("li",[t._v("2.に戻って繰り返す")]),s("v-divider"),s("li",[t._v("条件式が成り立たなくなったら")]),s("code",[t._v("i")]),t._v("が"),s("code",[t._v("10")]),t._v("になったとき、"),s("code",[t._v("i < 10")]),t._v("の条件式は"),s("code",[t._v("false")]),t._v("になるためループを終える")],1)],1)]),s("p",{staticClass:"title"},[t._v("while")]),t._m(32),s("p",{staticClass:"title"},[t._v("for")]),t._m(33)])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("標準入出力（＝ 表示、入力）をできるようにするために必要なもの")]),s("li",[s("code",[t._v("printf")]),t._v("関数や"),s("code",[t._v("scanf")]),t._v("関数などが定義されている")]),s("li",[s("code",[t._v("stdio")]),t._v("＝"),s("code",[t._v("Standard Input Output")]),t._v("の略")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("main")]),t._v("関数と呼ばれ、プログラム実行時に呼ばれる関数")]),s("li",[s("code",[t._v("int")]),t._v("：返り値の型を表す / "),s("code",[t._v("main")]),t._v("関数の最後に"),s("code",[t._v("int")]),t._v("型の値を返すという意味")]),s("li",[s("code",[t._v("void")]),t._v("：英語で空という意味で引数がないということを表している"),s("br"),t._v(" また、"),s("code",[t._v("void")]),t._v("は省略でき、"),s("code",[t._v("int main()")]),t._v("とも書ける")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("{ }")]),t._v("で囲まれた部分はブロックと呼ばれる")]),s("li",[s("code",[t._v("if")]),t._v("や"),s("code",[t._v("for")]),t._v("などの処理が複数行にわたるときに用いられる")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("セミコロンと呼ばれる")]),s("li",[t._v("基本的に処理の終わりにつける（"),s("code",[t._v("if")]),t._v("や"),s("code",[t._v("for")]),t._v("の後にはつけてはいけない）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("一般的に関数の終わりにある処理で、この関数が呼ばれたときに返すという意味"),s("br"),s("span",{staticClass:"keyword"},[t._v("返り値")]),t._v("と呼ばれている")]),s("li",[s("code",[t._v("main")]),t._v("関数の型が"),s("code",[t._v("int")]),t._v("であるため、整数型の"),s("code",[t._v("0")]),t._v("が返される")]),s("li",[t._v("main関数では"),s("code",[t._v("return 0;")]),t._v("と書くのが一般的だが、その他の関数を使うときは"),s("code",[t._v("return false;")]),t._v("や"),s("code",[t._v("return abcde;")]),t._v("などの"),s("code",[t._v("bool")]),t._v("型、"),s("code",[t._v("char[]")]),t._v("型\nを返すことも可能であるということは頭に入れておくべき\n（"),s("code",[t._v("return 0;")]),t._v("だけが"),s("code",[t._v("return")]),t._v("と固定観念を持ってはダメ）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("一時的にメモリ上に領域が確保され、数値や文字などを記憶しておくことができる")]),s("li",[t._v("変数名の先頭に数字を使うことはできない")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("プログラム内に処理の説明やメモなどを書くことができる")]),s("li",[t._v("コンパイル時に削除される")]),s("br"),s("li",[t._v("1行コメント："),s("code",[t._v("//")]),t._v("の後がすべてコメントとみなされる（ただし、1行のみ）")]),s("code",{staticClass:"code"},[t._v("// 変数の宣言"),s("br"),t._v("int hoge;")]),s("li",[t._v("複数行コメント："),s("code",[t._v("/*")]),t._v("と"),s("code",[t._v("*/")]),t._v("で囲まれた部分がコメントとみなされ、複数行書くことができる")]),s("code",{staticClass:"code"},[t._v("/*"),s("br"),t._v("　変数の宣言"),s("br"),t._v("　max: 最大値を記憶する変数"),s("br"),t._v("*/"),s("br"),t._v("int max;")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"frame"},[s("code",[t._v("int")]),t._v("：整数型 "),s("br"),s("code",[t._v("float")]),t._v("：浮動小数点型（単精度） "),s("br"),s("code",[t._v("double")]),t._v("：浮動小数点型（倍精度） "),s("br"),s("code",[t._v("char")]),t._v("：文字型 "),s("br"),s("code",[t._v("bool")]),t._v("：論理型（"),s("code",[t._v("true")]),t._v(" / "),s("code",[t._v("false")]),t._v(")")]),s("br"),s("li",[t._v("浮動小数点型はコンピュータの特性上誤差が生じることがある")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("関数の返り値である"),s("code",[t._v("return")]),t._v("は、"),s("code",[t._v("型")]),t._v("によって変わる")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("span",{staticClass:"keyword"},[t._v("宣言")]),t._v("：変数は、"),s("code",[t._v("<型>␣<変数名>;")]),t._v("で宣言する")]),s("code",{staticClass:"code"},[t._v("int hoge;")]),s("br"),s("br"),s("li",[s("code",[t._v("=")]),t._v("：代入演算子"),s("br"),t._v("数学の"),s("code",[t._v("=")]),t._v("（等しい）とは異なり、右辺のデータを左辺に代入するという意味")]),s("li",[s("span",{staticClass:"keyword"},[t._v("初期化")]),t._v("：変数宣言時に初期値を設定すること（代入演算子を用いる）")]),s("code",{staticClass:"code"},[t._v("int fuga = 100;")]),s("br"),s("br"),s("li",[s("code",[t._v("<型>")]),t._v("の前に"),s("code",[t._v("const")]),t._v("をつけることで"),s("span",{staticClass:"keyword"},[t._v("定数")]),t._v("（変更不可能な変数）を宣言できる"),s("br"),t._v(" また、定数を宣言するときは初期値を必ず設定する")]),s("code",{staticClass:"code"},[t._v("const float PI = 3.141592653;")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("span",{staticClass:"keyword"},[t._v("キャスト")]),t._v("：明示的に変数の型を変換すること（明示的型変換とも呼ばれる）")]),s("li",[t._v("代入や式中では暗黙的に変換することも可能")]),s("div",{staticClass:"frame"},[t._v("暗黙型変換の優先順序 → "),s("code",[t._v("double")]),t._v(" > "),s("code",[t._v("float")]),t._v(" > "),s("code",[t._v("int")]),t._v(" > "),s("code",[t._v("char")])]),s("li",[t._v("明示的型変換は以下のように使われる"),s("code",{staticClass:"code"},[t._v("// (型名)式\ndouble pi = 3.14;\nint num = (int)pi;")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("tr",[s("td",[t._v("演算子")]),s("td",[t._v("意味")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"frame"},[s("code",[t._v("+")]),t._v("：加算演算子 "),s("br"),s("code",[t._v("-")]),t._v("：減算演算子 "),s("br"),s("code",[t._v("*")]),t._v("：乗算演算子（数学記号の"),s("code",[t._v("×")]),t._v("） "),s("br"),s("code",[t._v("/")]),t._v("：除算演算子（数学記号の"),s("code",[t._v("÷")]),t._v("） "),s("br"),s("code",[t._v("%")]),t._v("：剰余演算子（余りを求める） "),s("br")]),s("code",{staticClass:"code"},[t._v('printf("%d\\n", 10 % 5);\nprintf("%d\\n", 2 + 3 * 5);')]),s("div",{staticClass:"exec-result"},[t._v("0"),s("br"),t._v("17")]),s("br"),s("li",[t._v("プログラムでも数学と同じように"),s("code",[t._v("( )")]),t._v("で数式を囲むと演算順序が優先される")]),s("code",{staticClass:"code"},[t._v('printf("%d\\n", (2 + 3) * 5);')]),s("div",{staticClass:"exec-result"},[t._v("25")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("四則演算(+ %)と代入を同時に行う場合の省略記法"),s("br"),t._v("（ただし、左辺と右辺に同じ変数がある場合のみ）")]),s("li",[t._v("書き方は以下の通り")]),s("div",{staticClass:"frame"},[s("code",[t._v("a += b")]),t._v(" / "),s("code",[t._v("a -= b")]),t._v(" / "),s("code",[t._v("a *= b")]),t._v(" / "),s("code",[t._v("a /= b")]),t._v(" / "),s("code",[t._v("a %= b")])]),s("br"),s("code",{staticClass:"code"},[t._v("// 従来の四則演算と代入\nsum = sum + x;\n\n// 複合代入\nsum += x;")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("span",{staticClass:"keyword"},[t._v("単項演算子")]),t._v("： インクリメント（1増やすこと）/ デクリメント（1減らすこと）"),s("li",{staticClass:"frame"},[s("code",[t._v("x++")]),t._v(" = "),s("code",[t._v("x = x + 1")]),t._v(" / "),s("code",[t._v("x--")]),t._v(" = "),s("code",[t._v("x = x - 1")])]),s("li",{staticClass:"frame"},[s("code",[t._v("x++")]),t._v("：演算してからxに1加算　（後置型） "),s("br"),s("code",[t._v("++x")]),t._v("：xに1加算してから演算　（前置型） "),s("br"),s("code",[t._v("x--")]),t._v("：演算してからxを1減算　（後置型） "),s("br"),s("code",[t._v("--x")]),t._v("：xを1減算してから演算　（前置型） "),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("標準出力関数（読み方は「プリントエフ」）")]),s("li",[t._v("主な形は"),s("code",[t._v('printf("XXX\\n");')])]),t._v("この場合はコンソール（黒い）画面に"),s("span",{staticClass:"prompt"},[t._v("XXX")]),t._v("と出力される"),s("li",[s("code",[t._v("\\n")]),t._v("については次項に記載")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[t._v("￥と \\ は環境によって表示が異なるが同意（Macでは必ず \\ ）"),s("li",{staticClass:"frame"},[s("code",[t._v("\\n")]),t._v("：改行 "),s("br"),s("code",[t._v("\\0")]),t._v("：NULL（数字の「0」と同意）（読み方はナル文字 or ヌル文字） "),s("br"),s("code",[t._v("\\'")]),t._v("：シングルクォーテーション「'」を表示 "),s("br"),s("code",[t._v('\\"')]),t._v('：ダブルクォーテーション「"」を表示 '),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("標準入力関数（読み方は「スキャンエフ」）")]),s("li",[t._v("主な形は"),s("code",[t._v('scanf("%d", &x);')])]),t._v("この場合はコンソールが入力待ち状態になり、入力することができる"),s("li",[s("code",[t._v("%d")]),t._v("については次項に記載")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("printf")]),t._v("や"),s("code",[t._v("scanf")]),t._v("に用いる")]),s("li",{staticClass:"frame"},[s("code",[t._v("%d")]),t._v(" = "),s("code",[t._v("int")]),t._v(" - 10進数表示 "),s("br"),s("code",[t._v("%f")]),t._v(" = "),s("code",[t._v("float")]),s("br"),s("code",[t._v("%lf")]),t._v(" = "),s("code",[t._v("double")]),s("br"),s("code",[t._v("%c")]),t._v(" = "),s("code",[t._v("char")]),s("br"),s("code",[t._v("%s")]),t._v(" = "),s("code",[t._v("char[]")]),t._v(" - 文字列（文字配列） "),s("br"),s("br"),s("code",[t._v("%o")]),t._v(" = "),s("code",[t._v("int")]),t._v(" - 8進数表示 "),s("br"),s("code",[t._v("%x")]),t._v(" = "),s("code",[t._v("int")]),t._v(" - 16進数表示 "),s("br")]),s("li",[t._v("それぞれ様々なオプションがある（今は書く気ないです。詳しくは「変換指定子 オプション」で検索）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("if")]),t._v("（もしも～なら）を用いる")]),s("li",[t._v("主な書き方は以下の通り")]),s("code",{staticClass:"code"},[t._v("if ( 条件式 ) {   // 条件式が"),s("code",[t._v("true")]),t._v("(真)なら処理1を実行する\n    // 処理1;\n} else {          // 条件式が"),s("code",[t._v("false")]),t._v("(偽)なら処理2を実行する\n    // 処理2;\n}")]),s("li",[t._v("[処理1], [処理2]それぞれの処理が1文なら"),s("code",[t._v("{ }")]),t._v("を省略可能")]),s("li",[t._v("また、"),s("code",[t._v("else")]),t._v("も使わない場合は省略する")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("条件式には、"),s("span",{staticClass:"keyword"},[t._v("比較演算子")]),t._v("と"),s("span",{staticClass:"keyword"},[t._v("論理演算子")]),t._v("が使われる")]),s("li",[t._v("条件式の結果は"),s("code",[t._v("true")]),t._v("(真)、または"),s("code",[t._v("false")]),t._v("(偽)が返される")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[t._v("基本的に数学の記号と意味は同じ"),s("li",{staticClass:"frame"},[s("code",[t._v(">")]),t._v("：より大きい  / "),s("code",[t._v(">=")]),t._v("：以上 "),s("br"),s("code",[t._v("<")]),t._v("：より小さい / "),s("code",[t._v("<=")]),t._v("：以下 "),s("br"),s("code",[t._v("==")]),t._v("：等しい "),s("br"),s("code",[t._v("!=")]),t._v("：等しくない "),s("br")]),s("li",[t._v("プログラムの等価演算子は、数学の"),s("code",[t._v("=")]),t._v("とは異なるため注意する")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[t._v("A = 0 (false), B = 1 (true) とする"),s("li",{staticClass:"frame"},[s("code",[t._v("AND (&&)")]),t._v("：論理和 （A && B → 0） "),s("br"),s("code",[t._v("OR (||)")]),t._v("：論理積 （A || B → 1） "),s("br"),s("code",[t._v("NOT (!)")]),t._v("：論理否定 （!A → 1） "),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("論理演算子を用いることで複雑な条件式を作ることができる")]),s("code",{staticClass:"code"},[t._v("// n が0より小さい、または10以上なら\nif (n < 0 || n >= 10) ...\n\n// c がアルファベットの小文字なら\nif (c >= 'a' && c <= 'z') ...")]),s("li",[t._v("アルファベットがループで出力できるのは、ASCIIコードと呼ばれるもので連続的に管理されているからASCIIコードについては topics として追記予定")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("繰り返し構文には"),s("code",[t._v("while")]),t._v("、"),s("code",[t._v("for")]),t._v("の2つがある")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"frame"},[s("code",[t._v("for")]),t._v("：繰り返す回数が[n回]などとはっきりと分かっている場合 "),s("br"),s("code",[t._v("while")]),t._v("：繰り返す回数がはっきりとわからない場合")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("繰り返し条件の式が"),s("code",[t._v("true")]),t._v("の間"),s("code",[t._v("{ }")]),t._v("内の処理を行う "),s("br"),t._v("また、"),s("code",[t._v("{ }")]),t._v("内の処理が1文の場合、"),s("code",[t._v("{ }")]),t._v("省略可能")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("details",{staticStyle:{background:"#81D4FA",padding:".2rem .5rem"}},[s("summary",[t._v("sample code")]),s("p",{staticClass:"type-bg",staticStyle:{width:"fit-content",margin:"auto"}},[s("code",[t._v("while")]),t._v("と"),s("code",[t._v("for")]),t._v("で同じことをするコード")]),s("code",{staticClass:"code",staticStyle:{width:"fit-content"}},[t._v('// while\nint i;    // 宣言\ni = 0;    // 初期化\nwhile (i < 10) {  // 条件式\n    printf("%d回目\\n", i + 1);    // 処理\n    i++;  // 増減式\n}\n\n// for\nint i;    // 宣言\nfor (i = 0; i < 10; i++) {    // 初期化、条件式、増減式\n    printf("%d回目\\n", i + 1);    // 処理\n}')]),s("br"),s("br"),s("p",{staticClass:"type-bg",staticStyle:{width:"fit-content",margin:"auto"}},[t._v("それぞれ以下のような結果が得られる")]),s("br"),s("div",{staticClass:"exec-result",staticStyle:{width:"50%",margin:"auto"}},[t._v("1回目"),s("br"),t._v("2回目"),s("br"),t._v("3回目"),s("br"),t._v("4回目"),s("br"),t._v("5回目"),s("br"),t._v("6回目"),s("br"),t._v("7回目"),s("br"),t._v("8回目"),s("br"),t._v("9回目"),s("br"),t._v("10回目")]),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("変数"),s("code",[t._v("i")]),t._v("を宣言")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("code",[t._v("i")]),t._v("に"),s("code",[t._v("0")]),t._v("に初期化する "),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("繰り返し条件と比較する "),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("繰り返す処理 "),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("()")]),t._v("内に"),s("span",{staticClass:"keyword"},[t._v("条件式")]),t._v("のみを記述する")]),s("code",{staticClass:"code"},[t._v("while ( 条件式 ) {\n    // 処理\n}")]),s("li",[s("code",[t._v("while")]),t._v("と似た"),s("code",[t._v("do while")]),t._v("は topics として追加予定")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("()")]),t._v("内に"),s("span",{staticClass:"keyword"},[t._v("初期化")]),t._v("、"),s("span",{staticClass:"keyword"},[t._v("条件式")]),t._v("、"),s("span",{staticClass:"keyword"},[t._v("増減式")]),t._v("を"),s("code",[t._v(";")]),t._v("で区切りながら記述する")]),s("code",{staticClass:"code"},[t._v("for ( 初期化; 条件式; 増減式) {\n    // 処理\n}")])])}],n=s("d225"),_=s("308d"),c=s("6bb5"),a=s("4e2b"),r=s("cce8"),l=s("82f7"),o=function(t){function e(){return Object(n["a"])(this,e),Object(_["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(a["a"])(e,t),e}(l["Vue"]);o=r["__decorate"]([l["Component"]],o);var d=o,u=d,f=(s("ad0e"),s("2877")),m=s("6544"),b=s.n(m),p=s("ce7e6"),h=Object(f["a"])(u,i,v,!1,null,"13387d3c",null);e["default"]=h.exports;b()(h,{VDivider:p["a"]})},ce7e6:function(t,e,s){"use strict";s("58db");var i=s("6a18"),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:v({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}})},d141:function(t,e,s){},db6d:function(t,e,s){}}]);