(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{251:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("blockquote",[n("p",[t._v("关于 TensorFlow\nTensorFlow™ 是一个采用数据流图（data flow graphs），用于数值计算的开源软件库。节点（Nodes）在图中表示数学操作，图中的线（edges）则表示在节点间相互联系的多维数据数组，即张量（tensor）。它灵活的架构让你可以在多种平台上展开计算，例如台式计算机中的一个或多个CPU（或GPU），服务器，移动设备等等。TensorFlow 最初由Google大脑小组（隶属于Google机器智能研究机构）的研究员和工程师们开发出来，用于机器学习和深度神经网络方面的研究，但这个系统的通用性使其也可广泛用于其他计算领域。")])]),n("blockquote",[n("p",[t._v("关于 TensorFlow\nTensorFlow™ 是一个采用数据流图（data flow graphs），用于数值计算的开源软件库。节点（Nodes）在图中表示数学操作，图中的线（edges）则表示在节点间相互联系的多维数据数组，即张量（tensor）。它灵活的架构让你可以在多种平台上展开计算，例如台式计算机中的一个或多个CPU（或GPU），服务器，移动设备等等。TensorFlow 最初由Google大脑小组（隶属于Google机器智能研究机构）的研究员和工程师们开发出来，用于机器学习和深度神经网络方面的研究，但这个系统的通用性使其也可广泛用于其他计算领域。")])]),n("p",[n("img",{attrs:{src:a(54),alt:"tensors_flowing"}})]),n("h2",{attrs:{id:"基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础")]),n("h3",{attrs:{id:"hello-tensor-world"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-tensor-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello, Tensor World!")]),n("h3",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[t._v("#")]),n("a",{attrs:{href:"http://www.tensorfly.cn/tfdoc/get_started/basic_usage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("基本使用")])]),n("p",[t._v("使用 TensorFlow, 你必须明白 TensorFlow:")]),n("ul",[n("li",[t._v("使用图 (graph) 来表示计算任务.")]),n("li",[t._v("在被称之为 会话 (Session) 的上下文 (context) 中执行图.")]),n("li",[t._v("使用 tensor 表示数据.")]),n("li",[t._v("通过 变量 (Variable) 维护状态.")]),n("li",[t._v("使用 feed 和 fetch 可以为任意的操作(arbitrary operation) 赋值或者从其中获取数据.")])]),n("hr"),n("h4",{attrs:{id:"_1-tf-constant-常量和session"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-tf-constant-常量和session","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. tf.constant 常量和session")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# Create TensorFlow object called tensor")]),t._v("\nhello_constant "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constant"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Hello World!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("with")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Session"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sess"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("# Run the tf.constant operation in the session")]),t._v("\n    output "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" sess"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello_constant"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h4",{attrs:{id:"_2-输入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-输入","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 输入")]),n("p",[t._v("使用"),n("code",[t._v("tf.placeholder()")]),t._v("创建一个占位符，然后使用"),n("code",[t._v("tf.session.run()")]),t._v("中到"),n("code",[t._v("feed_dict")]),t._v(" 参数将数据传入")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\n\noutput "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("None")]),t._v("\nx "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("placeholder"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("with")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Session"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sess"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    output "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" sess"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("feed_dict "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("12")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h4",{attrs:{id:"_3-数学运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-数学运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 数学运算")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("x "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 7")]),t._v("\nx "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtract"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 6")]),t._v("\ny "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiply"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("# 10")]),t._v("\nz "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("divide"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("# 5 ")]),t._v("\n")])]),n("h4",{attrs:{id:"_4-类型转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-类型转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 类型转换")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subtract"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constant"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("2.0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constant"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n")])]),n("h2",{attrs:{id:"training-your-logistic-classifier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#training-your-logistic-classifier","aria-hidden":"true"}},[t._v("#")]),t._v(" Training Your Logistic Classifier")]),n("p",[n("img",{attrs:{src:a(53),alt:""}}),n("img",{attrs:{src:a(52),alt:""}})]),n("ul",[n("li",[t._v("首先我们会训练模型，以确定权重W和偏差b的取值，然后利用W和b求解预测值y")]),n("li",[t._v("然后，使用softmax函数，将预测值y转换成对应的概率p")])]),n("p",[t._v("::: tips")]),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Logit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Logit")])]),n("li",[n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//stackoverflow.com/questions/41455101/what-is-the-meaning-of-the-word-logits-in-tensorflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is the meaning of the word logits in TensorFlow?")])]),n("li",[n("a",{attrs:{href:"https://www.zhihu.com/question/60751553",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何理解深度学习源码里经常出现的logits？")]),t._v("\n:::\n"),n("img",{attrs:{src:a(51),alt:""}})])]),n("h3",{attrs:{id:"_1-tensorflow-线性方程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-tensorflow-线性方程","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. TensorFlow 线性方程")])])}],o=a(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=e.exports},51:function(t,s,a){t.exports=a.p+"assets/img/15378872218446.796fdecc.jpg"},52:function(t,s,a){t.exports=a.p+"assets/img/15378868514610.c560a11a.jpg"},53:function(t,s,a){t.exports=a.p+"assets/img/15378868023217.0a15f649.jpg"},54:function(t,s,a){t.exports=a.p+"assets/img/tensors_flowing.4a67e129.gif"}}]);