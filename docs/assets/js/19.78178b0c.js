(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{228:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"贝叶斯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贝叶斯","aria-hidden":"true"}},[t._v("#")]),t._v(" 贝叶斯")]),a("h2",{attrs:{id:"基本公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本公式","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本公式")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),a("th",{staticStyle:{"text-align":"left"}}),a("th",{staticStyle:{"text-align":"left"}})])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("P(A) + P(~A) = 1")])]),a("td",{staticStyle:{"text-align":"left"}}),a("td",{staticStyle:{"text-align":"left"}})]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("P(AB) = P(A)P(B|A) = P(B)P(A|B)")])]),a("td",{staticStyle:{"text-align":"left"}}),a("td",{staticStyle:{"text-align":"left"}})]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("P(A) = P(B1)P(A|B1) + P(B2)P(A|B2)")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("全概率")]),a("td",{staticStyle:{"text-align":"left"}})]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("P(A|B) = P(A)P(B|A)/P(B)")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("贝叶斯")]),a("td",{staticStyle:{"text-align":"left"}})])])]),a("h2",{attrs:{id:"全概率和贝叶斯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全概率和贝叶斯","aria-hidden":"true"}},[t._v("#")]),t._v(" 全概率和贝叶斯")]),a("p",[t._v("首先我们来用语言描述一下全概率公式和贝叶斯公式，对它们有一个感性的认识")]),a("ol",[a("li",[t._v("全概率公式是说：有一组事件，这里假设是B1和B2能够引发事件A ， 那么事件A发生的概率就是B1发生的概率*B1导致A发生的概率+B2发生的概率*B2导致A发生的概率。这个就是A的全概率公式")]),a("li",[t._v("贝叶斯公式：我们已经知道A事件发生了，我们现在关心的是，在诸多可以导致它的事件（B1，B2）中，究竟是哪个事件导致了A事件的发生。从公式的角度来看，利用贝叶斯公式\n"),a("code",[t._v("P(A|B1) = P(A)P(B1|A)/P(B1)")]),t._v(" 我们就可以求得B1导致A发生的概率。或者用贝叶斯公式\n"),a("code",[t._v("P(A|B2) = P(A)P(B2|A)/P(B2)")]),t._v("我们就可以求得B2导致A发生的概率。")])]),a("p",[t._v("以上是对全概率和贝叶斯的一种解释，简单来讲，每件事情都不是独立发生的，往往是由其他事件引起的，"),a("strong",[t._v("全概率是由因求果，贝叶斯则是由果求因")]),t._v("。")]),a("h4",{attrs:{id:"全概率-由因求果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全概率-由因求果","aria-hidden":"true"}},[t._v("#")]),t._v(" 全概率 -----由因求果")]),a("p",[a("code",[t._v("P(A) = P(B1)P(A|B1) + P(B2)P(A|B2)")]),a("code",[t._v("果 = 因1 +因2")])]),a("h4",{attrs:{id:"贝叶斯-由果求因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贝叶斯-由果求因","aria-hidden":"true"}},[t._v("#")]),t._v(" 贝叶斯 ----- 由果求因")]),a("p",[a("code",[t._v("P(A|B) = P(A)P(B|A)/P(B)")]),a("code",[t._v("因 = 果 * 证据")])]),a("h2",{attrs:{id:"贝叶斯公式详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贝叶斯公式详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 贝叶斯公式详解")]),a("p",[t._v("下面我们再仔细看一下贝叶斯公式：\n"),a("img",{attrs:{src:"media/15363288031208.jpg",alt:""}})]),a("p",[t._v("贝叶斯概率分为几个部分")]),a("ol",[a("li",[t._v("A的先验概率")]),a("li",[t._v("A的后验概率")]),a("li",[t._v("似然度")]),a("li",[t._v("归一化因子")])]),a("h3",{attrs:{id:"_1-a的先验概率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-a的先验概率","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. A的先验概率")]),a("p",[t._v("不依赖我们"),a("strong",[t._v("之后")]),t._v("要进行的测试、观测、证据等，是根据我们"),a("strong",[t._v("之前")]),t._v("掌握的情况，得到的概率P(A)")]),a("h3",{attrs:{id:"_2-a的后验概率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-a的后验概率","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. A的后验概率")]),a("p",[t._v("经过我们"),a("strong",[t._v("之后")]),t._v("进行的测试、观测、证据等，更新我们"),a("strong",[t._v("之前")]),t._v("掌握的情况，得到事件A的后验概率 P(A|B)")]),a("h3",{attrs:{id:"_3-似然度（likelihood）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-似然度（likelihood）","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 似然度（likelihood）")]),a("p",[t._v("似然度是一个很关键的概念，所谓似然度，就是我们观测值是不是符合我们的模型。"),a("a",{attrs:{href:"https://codesachin.wordpress.com/2016/07/24/the-basics-of-likelihood/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("有一篇文章很好的介绍了似然度，本文引用其中部分内容对似然度做一个简单的介绍。")]),a("p",[t._v("当我们关注一个随机事件的时候，我们比较在意的是两件事：")]),a("ul",[a("li",[t._v("概率密度函数（概率模型 pdf）")]),a("li",[t._v("统计数据")])]),a("p",[t._v("概率模型，也就是决定了这一系列事件的发生概率的内在因素，比如你投掷硬币，如果硬币是你自己做的，那你就可以人为的规定其正反面的概率。但是大多数情况下我们都不是庄家，生活中大部分情况下，我们是不会得知概率模型的，我们只能通过测试，通过统计数据来推测概率模型。")]),a("p",[t._v("F(X, \\theta) 反应了数据和模型参数的关系：")]),a("ul",[a("li",[t._v("如果我们已知模型，则\\theta固定，函数变为F1(X)，则F1就是概率密度函数。我们可以依此求得某个数据X的概率。")]),a("li",[t._v("如果我们已知数据，则X固定，函数变为F2(\\theta)，则F2就是似然函数。我们不断调整\\theta，也就是模型的参数，模型参数越符合我们的数据，似然度也就越大，说明模型越准确。")])]),a("p",[t._v("另外一点比较重要的是，概率密度函数的积分总是1，如果数据X占据了0.7的比例，那么剩下的数据一定是0.3的比例。但是似然度不是这样，某个参数\\theta1如果能使F2=0.9，并不能说明其他的参数的和只能是0.1，其实完全可能存在F2(\\theta1)=0.99999。因此就涉及到了对似然度进行归一化的必要。但即使不归一化，仍然可以表明似然度的相对大小。")]),a("p",[t._v("在贝叶斯定律中我们是如何利用似然度的呢？")]),a("blockquote",[a("p",[t._v("给定输出x时，关于参数θ的似然函数L(θ|x)（在数值上）等于给定参数θ后变量X=x的概率：\nL(θ|x)=P(X=x|θ)")])]),a("blockquote",[a("p",[t._v("公式解释如下：对参数θ的似然函数求值，（在数值上）等于观测结果X在给定参数θ下的条件概率，也即X的后验概率。一般似然函数的值越大表明在结果X=x下，此参数θ越合理。\n因此形式上，似然函数也是一种条件概率函数，但我们关注的变量改变了，关注的是A取值为参数θ的似然值\n"),a("code",[t._v("θ <---\x3e P(B | A = θ)")])])]),a("p",[t._v("观察公式"),a("code",[t._v("P(A|B) = P(A)P(B|A)/P(B)")]),t._v("，似然度是"),a("code",[t._v("P(B|A)")]),t._v("。模型未知，我们希望选取合适的测试数据来推测模型的参数，这里我们关注的是A，可以将其看作是模型的参数，那么似然函数就是在给定A的情况下，某个观测值发生的条件概率"),a("code",[t._v("P(B|A)")]),t._v(" 且"),a("code",[t._v("P(B|A)")]),t._v("越大，表示参数A越合理。")]),a("p",[t._v("因此在我们在设计贝叶斯的测试时，希望"),a("code",[t._v("P(B|A)")]),t._v("更大，也就说，选取观测的对象，要尽可能在A发生的条件下发生。")]),a("h3",{attrs:{id:"_4-归一化因子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-归一化因子","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 归一化因子")]),a("p",[t._v("归一化因子在这里的作用是把似然度进行一个归一化，它的值是条件B的全概率")]),a("h3",{attrs:{id:"_5-测试和证据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试和证据","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 测试和证据")]),a("p",[a("img",{attrs:{src:"media/15363288079776.jpg",alt:""}})]),a("p",[t._v("贝叶斯公式：\n后验概率 = 先验概率 * 标准似然度")]),a("p",[t._v("先验概率是我们事先假设的，似然度我们希望能够大一些，因此选择一个合适的事件进行观测，所谓合适的事件就是假定A发生的时候，选择一个能使"),a("code",[t._v("P(B|A)")]),t._v("大一些的事件B。因为B是能够观察的，我们就可以求得观察到B时，A的概率，即"),a("code",[t._v("P(A|B)")]),t._v("，也就是当我们观测到证据B时，A的后验概率。")]),a("p",[t._v("贝叶斯定律的伟大之处就是，不论我们初始的先验概率是否准确，我们通过后面的一些观测得到证据，或者说对事件进行一些测试。我们可以利用贝叶斯定律来更新我们的先验概率，得到更为准确的后验概率，如果不断重复这个过程，最后得到的概率都是比较接近真实情况的。")]),a("p",[t._v("####举例来说：\n我们想知道某人患癌症的概率P(C)，但显然我们不可能了解其概率模型，因此我们只能使用似然函数来估计模型参数，我们关注的就是"),a("code",[t._v("P(B|A)")]),t._v("这个似然函数，并且我们希望它尽可能大。因此我们需要选择合适的观测值B。我们通常会选取和癌症相关性很高的指标进行测试，当癌症发生时，我们希望该指标很大概率发生，即测试成阳性，即似然函数为"),a("code",[t._v("P(pos|C)")])]),a("p",[t._v("最终公式为：\n"),a("code",[t._v("P(C|pos) = P(C)P(pos|C)/P(pos)")])]),a("h2",{attrs:{id:"应用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用举例","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用举例")]),a("h3",{attrs:{id:"癌症检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#癌症检测","aria-hidden":"true"}},[t._v("#")]),t._v(" 癌症检测")]),a("p",[t._v("先验概率：根据以往的知识，某种癌症的患病概率，在所有人当中约为10%，则我们可以得到")]),a("p",[t._v("似然度：我们选择观测某一个指标，当某人换癌症时，我们能检测到该指标成阳性的概率为90%，我们还有10%的可能性，检测不到该指标，即P(pos|C) = 0.9,P(neg|C) = 0.1。此外，在不患病的人群中，该检测也存在一定的误检概率，即P(pos|~C) = 0.1,P(neg|~C) = 0.9")]),a("p",[t._v("上述事实用数学语言描述为：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("P( C) = 0.1 \nP(~C) = 0.1 \nP(pos|C) = 0.9\nP(neg|C) = 0.1\nP(pos|~C) = 0.1\nP(neg|~C) = 0.9\n")])]),a("p",[t._v("问题1：当检测为阳性时，某人患病的概率是多少？")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("P(C|pos) = P(C)P(pos|C)/P(pos)\n                 = P(C)P(pos|C)/(P(C)P(Pos|C)+P(~C)P(Pos|~C))\n                 = 0.1 * 0.9 /(0.1*0.9+0.9*0.1)\n                 = 0.09 / (0.09 + 0.09)\n                 = 0.5\n")])]),a("p",[t._v("由此可见，从人群里面选一个人进行检测，即使检测准确率90%，某个人被检测为阳性，其患病概率也只有50%，当然，相对于10%的总人口中的患病率，其概率已经飙升了40%")]),a("p",[t._v("问题2: 对该病人再次检测，若仍为阳性，其患病概率为多少？")]),a("p",[t._v("首先我们要知道的是，已经对某人进行过一次检测了，其患病概率为50%，因此本次试验时，先验概率P(C1)=0.5")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("P(C1|pos) = P(C1)P(pos|C1)/P(pos)\n                 = P(C1)P(pos|C1)/(P(C1)P(Pos|C1)+P(~C1)P(Pos|~C1))\n                 = 0.5* 0.9 /(0.5*0.9+0.5*0.1)\n                 = 0.45 / (0.45 + 0.05)\n                 = 0.9\n")])]),a("p",[t._v("我们发现，只要再对他进行一次测试，如果还是阳性，那其患病的概率就已经是90%了。")]),a("p",[t._v("问题3: 如果假定人群中患有该疾病的人的比例是90%（瞎猜的），但对某人进行测试之后，结果是阴性，那么会有什么后果？")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("P(C2|pos) = P(C2)P(neg|C2)/P(neg)\n                 = P(C2)P(neg|C2)/(P(C2)P(neg|C2)+P(~C2)P(neg|~C2))\n                 = 0.9 * 0.1 /(0.9*0.1+0.1*0.9)\n                 = 0.09 / (0.09 + 0.09)\n                 = 0.5\n")])]),a("p",[t._v("患病的概率竟然降低到了50%。可见，在贝叶斯定律的指导下，不论你的先验概率是多少，有依据还是没有依据，你最终的后验概率总是需要"),a("strong",[t._v("证据")]),t._v("来佐证的，一旦证据不符合我们的猜想，贝叶斯定律就会自动修改我们的后验概率，使其向着更加理性的方向前进。")]),a("p",[t._v("当然，如果再次试验，结果是阳性，就会和之前问题2一样，概率上升到90%。贝叶斯总是用最新的证据来更新我们的先验知识，使后验知识更加符合现实。")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("扩展阅读")]),a("p",[t._v("1."),a("a",{attrs:{href:"https://codesachin.wordpress.com/2016/07/24/the-basics-of-likelihood/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The basics of Likelihood")]),t._v("\n2."),a("a",{attrs:{href:"https://blog.csdn.net/csshuke/article/details/62884071",target:"_blank",rel:"noopener noreferrer"}},[t._v("Think Bayes - 我所理解的贝叶斯定理")]),t._v("\n3."),a("a",{attrs:{href:"https://blog.csdn.net/SmellyKitty/article/details/49130173",target:"_blank",rel:"noopener noreferrer"}},[t._v("【机器学习】先验概率、后验概率、贝叶斯公式、 似然函数")])])])])}],!1,null,null,null);e.default=r.exports}}]);