(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{307:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"迁移学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移学习","aria-hidden":"true"}},[t._v("#")]),t._v(" 迁移学习")]),s("p",[t._v("在工程实践中，从头构建一个神经网络是非常耗时的，因此我们会将已经训练过的模型进行调整，或者是利用相似的模型完成不同的任务，这都是属于迁移学习。")]),s("h2",{attrs:{id:"gpu-vs-cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpu-vs-cpu","aria-hidden":"true"}},[t._v("#")]),t._v(" GPU vs CPU")]),s("p",[t._v("使用GPU可以将训练速度提高5倍以上，知名的库有cuDNN\n"),s("img",{attrs:{src:a(57),alt:""}})]),s("h2",{attrs:{id:"迁移学习-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移学习-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 迁移学习")]),s("p",[t._v("使用迁移学习依赖于：")]),s("ul",[s("li",[t._v("新数据集的大小")]),s("li",[t._v("新老数据集的相似性")])]),s("p",[t._v("通常有以下四种场景：")]),s("ul",[s("li",[t._v("新数据集很小，新数据集和老的训练数据相似")]),s("li",[t._v("新数据集很小，新数据集和老的训练数据不一样")]),s("li",[t._v("新数据集较大，新数据集和老的训练数据相似")]),s("li",[t._v("新数据集较大，新数据集和老的训练数据不一样")])]),s("p",[s("img",{attrs:{src:a(56),alt:""}})]),s("p",[t._v("一个预先训练好的模型")]),s("p",[s("img",{attrs:{src:a(55),alt:""}})]),s("ul",[s("li",[t._v("the first layer will detect edges in the image")]),s("li",[t._v("the second layer will detect shapes")]),s("li",[t._v("the third convolutional layer detects higher level features")])]),s("h3",{attrs:{id:"case-1-small-data-set-similar-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-1-small-data-set-similar-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Case 1: Small Data Set, Similar Data")]),s("p",[t._v("slice off the end of the neural network\nadd a new fully connected layer that matches the number of classes in the new data set\nrandomize the weights of the new fully connected layer; freeze all the weights from the pre-trained network\ntrain the network to update the weights of the new fully connected layer")]),s("h2",{attrs:{id:"imagenet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imagenet","aria-hidden":"true"}},[t._v("#")]),t._v(" ImageNet")]),s("h2",{attrs:{id:"alexnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alexnet","aria-hidden":"true"}},[t._v("#")]),t._v(" AlexNet")]),s("p",[t._v("模型共8层，使用了GPU进行模型训练")]),s("p",[s("img",{attrs:{src:a(54),alt:""}})]),s("h2",{attrs:{id:"vgg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vgg","aria-hidden":"true"}},[t._v("#")]),t._v(" VGG")]),s("p",[t._v("模型共19层，3x3卷积，中间由2x2的池化层隔开，最后是连续3个全连接层")]),s("p",[s("img",{attrs:{src:a(53),alt:""}})]),s("h2",{attrs:{id:"googlenet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#googlenet","aria-hidden":"true"}},[t._v("#")]),t._v(" GoogLeNet")]),s("p",[t._v("模型共22层。引入了interception模块，使的超参数非常少，因此训练速度很快。错误率7%左右")]),s("p",[s("img",{attrs:{src:a(52),alt:""}})]),s("h2",{attrs:{id:"resnet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resnet","aria-hidden":"true"}},[t._v("#")]),t._v(" ResNet")]),s("p",[t._v("微软提出，模型有152层。错误率3%，甚至比人还强。通过增加连接来跳过一些层，确保深层网络可以被训练到。")]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("扩展阅读")]),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/lqfarmer/article/details/73195060",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度学习模型-13 迁移学习（Transfer Learning）技术概述")])])])])])}],r=a(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);e.default=i.exports},52:function(t,e,a){t.exports=a.p+"assets/img/15389281929480.2464888d.jpg"},53:function(t,e,a){t.exports=a.p+"assets/img/15389278904893.7907a68c.jpg"},54:function(t,e,a){t.exports=a.p+"assets/img/15389277620969.7055c4f0.jpg"},55:function(t,e,a){t.exports=a.p+"assets/img/15389270386400.f2af864f.jpg"},56:function(t,e,a){t.exports=a.p+"assets/img/15389268293845.15455388.jpg"},57:function(t,e,a){t.exports=a.p+"assets/img/15389135380217.3cc97f7b.jpg"}}]);