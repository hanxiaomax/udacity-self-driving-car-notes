(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{119:function(t,a,s){t.exports=s.p+"assets/img/15403401346640.7659d62a.jpg"},120:function(t,a,s){t.exports=s.p+"assets/img/15403398881743.8168ae00.jpg"},121:function(t,a,s){t.exports=s.p+"assets/img/15403124014269.bc4d0035.jpg"},122:function(t,a,s){t.exports=s.p+"assets/img/15403123199237.2146e55a.jpg"},123:function(t,a,s){t.exports=s.p+"assets/img/15403112725540.95ea43a5.jpg"},124:function(t,a,s){t.exports=s.p+"assets/img/15403108670060.5cb5083a.jpg"},125:function(t,a,s){t.exports=s.p+"assets/img/15403087035844.e187ebf6.jpg"},126:function(t,a,s){t.exports=s.p+"assets/img/15403084891943.d4bff2a8.jpg"},127:function(t,a,s){t.exports=s.p+"assets/img/15403079997555.0271c02f.jpg"},128:function(t,a,s){t.exports=s.p+"assets/img/15403080425699.d9cd8226.jpg"},129:function(t,a,s){t.exports=s.p+"assets/img/15401347728831.8272337e.jpg"},130:function(t,a,s){t.exports=s.p+"assets/img/15401333406014.a50f748c.jpg"},131:function(t,a,s){t.exports=s.p+"assets/img/15401323707395.6fea8125.jpg"},132:function(t,a,s){t.exports=s.p+"assets/img/15401319344883.00b2f007.jpg"},133:function(t,a,s){t.exports=s.p+"assets/img/15399574409127.8012fea9.jpg"},134:function(t,a,s){t.exports=s.p+"assets/img/15399561190760.62f938c1.jpg"},135:function(t,a,s){t.exports=s.p+"assets/img/15399554841338.52a159fb.jpg"},328:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"卡尔曼滤波"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#卡尔曼滤波","aria-hidden":"true"}},[t._v("#")]),t._v(" 卡尔曼滤波")]),n("h2",{attrs:{id:"_1-更新循环和移动循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-更新循环和移动循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 更新循环和移动循环")]),n("ul",[n("li",[t._v("更新循环\n基于乘法法则和贝叶斯定律")]),n("li",[t._v("移动循环（预测）\n基于卷积和全概率公式")])]),n("p",[n("img",{attrs:{src:s(135),alt:""}})]),n("h2",{attrs:{id:"_2-测量更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-测量更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 测量更新")]),n("h3",{attrs:{id:"数学原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数学原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 数学原理")]),n("p",[t._v("测量的更新，基于乘法法则和贝叶斯定律。\n首先我们有一个先验的测量值，然后得到一个新的测量值，两者均为正态分布。使用贝叶斯定律，我们可以得到后验概率，也就是我们更新测量后的结果")]),n("p",[n("img",{attrs:{src:s(134),alt:""}})]),n("p",[t._v("P(X|Z) = P(Z|X)P(X)/P(Z)\n叠加之后的正态分布参数为\n$\n\\mu^2=\\frac{\\mu* r^2 + \\gamma*\\sigma^2}{r^2+\\sigma^2}\n$")]),n("p",[t._v("$\n\\sigma^2=\\frac{1}{\\frac{1}{r^2}+\\frac{1}{\\sigma^2}}\n$")]),n("h3",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("update")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mean2"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    new_mean "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean1"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("var2"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("mean2"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("var1"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("var1"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    new_var "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("var1 "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new_mean"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_var"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),n("h2",{attrs:{id:"_3-移动更新（预测过程）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-移动更新（预测过程）","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 移动更新（预测过程）")]),n("p",[n("img",{attrs:{src:s(133),alt:""}}),t._v("\n预测过程基于卷积和全概率公式")]),n("h3",{attrs:{id:"数学原理-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数学原理-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 数学原理")]),n("p",[t._v("假设我们处于一个初始位置，然后进行一次移动，移动本身是有误差的，两个事件都服从正态分布。则结果也是正态分布")]),n("p",[t._v("$\n\\mu'=\\mu + u\n$")]),n("p",[t._v("$\n\\sigma'^2 =r^2+\\sigma^2\n$")]),n("h3",{attrs:{id:"代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("predict")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mean2"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    new_mean "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mean1"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("mean2\n    new_var "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" var1"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("var2\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new_mean"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_var"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),n("h2",{attrs:{id:"_4-一维卡尔曼滤波代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-一维卡尔曼滤波代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 一维卡尔曼滤波代码")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# 更新函数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("update")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mean2"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    new_mean "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("float")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("var2 "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" mean1 "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" var1 "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" mean2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("var1 "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    new_var "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("var1 "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new_mean"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_var"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 预测函数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("predict")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var1"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mean2"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    new_mean "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mean1 "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" mean2\n    new_var "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" var1 "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" var2\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new_mean"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_var"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nmeasurements "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("7")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("9")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 测量值")]),t._v("\nmotion "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 移动距离")]),t._v("\nmeasurement_sig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 测量方差")]),t._v("\nmotion_sig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 移动方差")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 初始值")]),t._v("\nmu "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nsig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("range")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("len")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("measurements"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sig"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("update"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sig"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("measurements"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("measurement_sig"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"update:"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sig"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("# 使用更新的均值和方差进行预测")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sig"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("predict"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sig"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("motion"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("motion_sig"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"pridict:"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sig"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mu"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sig"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("('update:', [4.998000799680128, 3.9984006397441023])\n('pridict:', [5.998000799680128, 5.998400639744102])\n('update:', [5.999200191953932, 2.399744061425258])\n('pridict:', [6.999200191953932, 4.399744061425258])\n('update:', [6.999619127420922, 2.0951800575117594])\n('pridict:', [8.999619127420921, 4.09518005751176])\n('update:', [8.999811802788143, 2.0235152416216957])\n('pridict:', [9.999811802788143, 4.023515241621696])\n('update:', [9.999906177177365, 2.0058615808441944])\n('pridict:', [10.999906177177365, 4.005861580844194])\n[10.999906177177365, 4.005861580844194]\n")])]),n("h2",{attrs:{id:"_5-多维高斯分布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-多维高斯分布","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 多维高斯分布")]),n("p",[t._v("在多维高斯函数中，均值变成了一个向量，方差变成了协方差矩阵。其概率密度如下：\n"),n("img",{attrs:{src:s(132),alt:""}})]),n("p",[t._v("针对二维高斯分布，协方差矩阵的对角线元素为X1与X2轴的方差，反斜对角线上的两个值为协方差，表明X1与X2的线性相关程度，（正值时：X1增大，X2也随之增大；负值时：X1增大，X2随之减小）。")]),n("ul",[n("li",[t._v("如果两个变量无关，则协方差矩阵为一个圆")]),n("li",[t._v("不确定越大，圆越大")]),n("li",[t._v("也可能在一个方向上不确定大，另一个方向不确定小，则为椭圆")]),n("li",[t._v("如果两个维度相关，则椭圆为斜的，所谓相关，指的是我们可以以一个维度推断另一个维度。通过(X0 ,Y0)，则可以推断(X1 ,Y1)")])]),n("p",[n("img",{attrs:{src:s(131),alt:""}})]),n("h2",{attrs:{id:"_6-基于多维高斯函数的预测"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-基于多维高斯函数的预测","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 基于多维高斯函数的预测")]),n("p",[t._v("在平面上，基于一维的高斯，我们可以预测位置，同样的，在二维的空间中，我们也可以进行预测。")]),n("p",[n("img",{attrs:{src:s(130),alt:""}})]),n("p",[t._v("我们可以测量X，不能测量速度，但是速度是位置的导数，所以我们说两个维度是有相关性的。在测量过程中，我们可以测得X，此时我们对速度一无所知。在预测过程中，我们可以假设一个速度，这样就能知道X在此速度下，T+1时的位置X。")]),n("p",[n("img",{attrs:{src:s(129),alt:""}})]),n("p",[n("strong",[t._v("上图诠释了卡尔曼滤波的核心概念。")])]),n("p",[t._v("首先我们知道了X和速度V（X导数）的关系，X = Vt，也就是红色的椭圆。但是显然，斜椭圆表示两者是相关的。但是如果我们将红色椭圆投影到X或X点方向上，我们都无法进行预测，因为不论投影在哪个轴，我们都缺少另一个变量的信息。即单次观察和单次预测都无法确定观察结果。")]),n("p",[t._v("由于红色是我们已知的规律，所以它是一种"),n("strong",[t._v("先验概率（prior）")]),t._v("，如果我们再对X进行一次观察，得到X的"),n("strong",[t._v("条件概率(measurement)")]),t._v("，然后依据"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E8%B4%9D%E5%8F%B6%E6%96%AF%E5%85%AC%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("贝叶斯定律")]),t._v("将两者相乘，我们就可以得到"),n("strong",[t._v("后验概率（预测）")]),t._v("，后验概率一定相交于在红色椭圆上，它也是一个椭圆（二维高斯），且在两个维度上可以鸽子得到一个高斯函数，预测相关维度。经过不断的测量和预测，我们注意到，红色椭圆上的黑色椭圆越来越小，表示不确定性逐渐减小（方差减小了）")]),n("p",[t._v("这深刻的揭示了卡尔曼滤波器的原理，我们只能观察一个值的时候，就可以利用贝叶斯推断另外一个值（通过先验知识——例如物理方程）")]),n("p",[t._v("卡尔曼滤波器可以预测一段时间后我的位置，"),n("code",[t._v("x' = x + Δtẋ'")]),t._v("，且该方程在后续的预测中可以作为约束条件。利用该约束条件，我们就可以通过x来预测速度（本身不能观察）")]),n("h2",{attrs:{id:"_7-设计卡尔曼滤波器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-设计卡尔曼滤波器","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 设计卡尔曼滤波器")]),n("p",[n("img",{attrs:{src:s(52),alt:""}})]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# Write a function 'kalman_filter' that implements a multi-")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# dimensional Kalman Filter for the example given")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("########################################")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# Implement the filter function below")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("kalman_filter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" P"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("range")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("len")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("measurements"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("# measurement update")]),t._v("\n        Z "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("measurements"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 测量值")]),t._v("\n        y "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Z "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("H "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n        S "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" H "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" P "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" H"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transpose"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" R "),n("span",{attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        K "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  P "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" H"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transpose"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" S"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inverse"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        x "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" K "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" y"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("#")]),t._v("\n        \n        P "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("K "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" H"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" P "),n("span",{attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n        \n        "),n("span",{attrs:{class:"token comment"}},[t._v("# prediction")]),t._v("\n        x "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" u\n        P "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" F "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" P "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" F"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transpose"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n        \n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("P\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("############################################")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("### use the code below to test your filter!")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("############################################")]),t._v("\n\nmeasurements "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nx "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# initial state (location and velocity)")]),t._v("\nP "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# initial uncertainty")]),t._v("\nu "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# external motion")]),t._v("\nF "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# next state function")]),t._v("\nH "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# measurement function")]),t._v("\nR "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# measurement uncertainty")]),t._v("\nI "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# identity matrix")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kalman_filter"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" P"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# output should be:")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# x: [[3.9996664447958645], [0.9999998335552873]]")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("# P: [[2.3318904241194827, 0.9991676099921091], [0.9991676099921067, 0.49950058263974184]]")]),t._v("\n\n")])]),n("h2",{attrs:{id:"卡尔曼滤波详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#卡尔曼滤波详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 卡尔曼滤波详解")]),n("h3",{attrs:{id:"_1-卡尔曼滤波简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-卡尔曼滤波简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 卡尔曼滤波简介")]),n("p",[n("img",{attrs:{src:s(128),alt:""}}),t._v("\n卡尔曼滤波器，可以从一组不断输入到系统的数据中，非常快速的推断出真实中（几乎），即使初始值偏差很大也没关系，卡尔曼滤波的收敛速度非常快。")]),n("h3",{attrs:{id:"_2-流程图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-流程图","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 流程图")]),n("p",[n("img",{attrs:{src:s(127),alt:""}})]),n("ul",[n("li",[t._v("卡尔曼滤波器的流程如图所示，外部输入用红色表示，其中输入的数据data是不断加入系统的，而初始的估计误差和初始估计值，仅输入一次。")]),n("li",[t._v("我们通过初始输入的误差，和数据误差，来计算卡尔曼增益。卡尔曼增益实际上就是考虑如何对输入的估计误差和数据误差进行加权，这取决于我们更信任哪个数据（误差越小越信任）")]),n("li",[t._v("通过初始估计值和输入数据，计算新的估计值。")]),n("li",[t._v("通过卡尔曼增益和新的估计值，计算新的误差。")]),n("li",[t._v("将新的误差和作为输入，用于进行下一次卡尔曼增益的计算。")]),n("li",[t._v("讲新的估计值作为更新数据，输出系统。")])]),n("h3",{attrs:{id:"_3-卡尔曼增益"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-卡尔曼增益","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 卡尔曼增益")]),n("p",[n("img",{attrs:{src:s(126),alt:""}})]),n("p",[t._v("卡尔曼增益KG是一个0-1之间的小数，公式如上图。我们可以看到，KG越接近1，说明EMEA越小，反正说明EMEA越大。EMEA是测量误差，也就是测量误差越大，KG越小，测量误差越小，KG越大。")]),n("p",[t._v("ESTt 即当前最新估计值，它等于上一次的估计值ESTt-1 + KG*[MEA-ESTt-1]")]),n("p",[t._v("这么构造KG的原因是，我们把KG看作是一个权重，我们希望，测量误差大的时候，减少对测量值的信任权重。")]),n("p",[t._v("所以，测量误差比较大时，KG*[MEA-ESTt-1]这部分的权重会小一些，使我们可以 减少测量值对估计值的影响。")]),n("p",[n("img",{attrs:{src:s(125),alt:""}})]),n("p",[t._v("最终，卡尔曼增益要像越来越小的方向发展，既估计值误差越来越小，越来越不受测量值影响（趋于稳定）。")]),n("h3",{attrs:{id:"_4-卡尔曼滤波3大计算公式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-卡尔曼滤波3大计算公式","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 卡尔曼滤波3大计算公式")]),n("p",[n("img",{attrs:{src:s(124),alt:""}})]),n("p",[n("img",{attrs:{src:s(123),alt:""}})]),n("p",[t._v("本节我们主要关注的是公式3，即如何计算最新的估计误差，估计误差可以化简成EESTt = (1-KG)EESTt-1的形式，观察该公式我们可以得到如下结论：")]),n("ul",[n("li",[t._v("最新的估计误差总是小于之前的估计误差，因为0<(1-KG)<1，误差是趋向于0的。")]),n("li",[t._v("如果测量误差大，则KG小，系数1-KG就大，则估计误差收敛的速度也就比较慢。及测量误差大的时候，我们希望误差减小的速度慢一些，防止误判。")]),n("li",[t._v("如果测量误差小，则KG大，系数1-KG就小，则估计误差收敛的速度也就比较快。及测量误差小的时候，我们希望误差减小的速度快一些")])]),n("h3",{attrs:{id:"_5-计算样例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-计算样例","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 计算样例")]),n("p",[n("img",{attrs:{src:s(122),alt:""}})]),n("h3",{attrs:{id:"_6-多维卡尔曼滤波"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-多维卡尔曼滤波","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 多维卡尔曼滤波")]),n("p",[n("img",{attrs:{src:s(121),alt:""}})]),n("ul",[n("li",[t._v("X状态矩阵")]),n("li",[t._v("P处理协方差矩阵（估计误差）")]),n("li",[t._v("K卡尔曼增益")]),n("li",[t._v("k状态序列序号，0为初始值")]),n("li",[t._v("R传感器误差协方差矩阵")]),n("li",[t._v("Y测量值矩阵")]),n("li",[t._v("Z测量噪声（不确定性）")]),n("li",[t._v("Q 处理误差协方差矩阵")]),n("li",[t._v("A，B，C ，H变换矩阵\n"),n("ul",[n("li",[t._v("A，B 状态变换矩阵（含某种内在的变化规律）")]),n("li",[t._v("C，H 测量变换矩阵")])])])]),n("p",[n("img",{attrs:{src:s(52),alt:""}})]),n("p",[t._v("结合课程中的表述来看，C，H是一个值，F是A，B的结合。u=w表示运动向量")]),n("p",[n("img",{attrs:{src:s(120),alt:""}})]),n("p",[n("img",{attrs:{src:s(119),alt:""}})]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("扩展阅读")]),n("ol",[n("li",[n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%B0%94%E6%9B%BC%E6%BB%A4%E6%B3%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("卡尔曼滤波")])]),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/Jessica-jie/p/6893473.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("kalman滤波（一）---对各参数的理解")])]),n("li",[n("a",{attrs:{href:"http://www.ilectureonline.com/lectures/subject/SPECIAL%20TOPICS/26/190",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lectures in The Kalman Filter")])])])])])}],o=s(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=r.exports},52:function(t,a,s){t.exports=s.p+"assets/img/15399619340700.f982be2b.jpg"}}]);