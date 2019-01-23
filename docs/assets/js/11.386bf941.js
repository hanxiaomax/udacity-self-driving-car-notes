(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{126:function(t,a,s){t.exports=s.p+"assets/img/15403979893097.893c954d.jpg"},127:function(t,a,s){t.exports=s.p+"assets/img/15403972820536.e170e908.jpg"},128:function(t,a,s){t.exports=s.p+"assets/img/15403967800866.a7a73ca7.jpg"},129:function(t,a,s){t.exports=s.p+"assets/img/15403962739894.351dac91.jpg"},130:function(t,a,s){t.exports=s.p+"assets/img/15403956864245.1dbe157b.jpg"},131:function(t,a,s){t.exports=s.p+"assets/img/15403401346640.7659d62a.jpg"},132:function(t,a,s){t.exports=s.p+"assets/img/15403398881743.8168ae00.jpg"},133:function(t,a,s){t.exports=s.p+"assets/img/15403124014269.bc4d0035.jpg"},134:function(t,a,s){t.exports=s.p+"assets/img/15403123199237.2146e55a.jpg"},135:function(t,a,s){t.exports=s.p+"assets/img/15403112725540.95ea43a5.jpg"},136:function(t,a,s){t.exports=s.p+"assets/img/15403108670060.5cb5083a.jpg"},137:function(t,a,s){t.exports=s.p+"assets/img/15403087035844.e187ebf6.jpg"},138:function(t,a,s){t.exports=s.p+"assets/img/15403084891943.d4bff2a8.jpg"},139:function(t,a,s){t.exports=s.p+"assets/img/15403079997555.0271c02f.jpg"},140:function(t,a,s){t.exports=s.p+"assets/img/15403080425699.d9cd8226.jpg"},358:function(t,a,s){"use strict";s.r(a);var i=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"卡尔曼滤波-理论专题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#卡尔曼滤波-理论专题","aria-hidden":"true"}},[t._v("#")]),t._v(" 卡尔曼滤波-理论专题")]),i("h2",{attrs:{id:"_1-卡尔曼滤波简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-卡尔曼滤波简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 卡尔曼滤波简介")]),i("p",[i("img",{attrs:{src:s(140),alt:""}}),t._v("\n卡尔曼滤波器，可以从一组不断输入到系统的数据中，非常快速的推断出真实中（几乎），即使初始值偏差很大也没关系，卡尔曼滤波的收敛速度非常快。")]),i("h2",{attrs:{id:"_2-流程图"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-流程图","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 流程图")]),i("p",[i("img",{attrs:{src:s(139),alt:""}})]),i("ul",[i("li",[t._v("卡尔曼滤波器的流程如图所示，外部输入用红色表示，其中输入的数据data是不断加入系统的，而初始的估计误差和初始估计值，仅输入一次。")]),i("li",[t._v("我们通过初始输入的误差，和数据误差，来计算卡尔曼增益。卡尔曼增益实际上就是考虑如何对输入的估计误差和数据误差进行加权，这取决于我们更信任哪个数据（误差越小越信任）")]),i("li",[t._v("通过初始估计值和输入数据，计算新的估计值。")]),i("li",[t._v("通过卡尔曼增益和新的估计值，计算新的误差。")]),i("li",[t._v("将新的误差和作为输入，用于进行下一次卡尔曼增益的计算。")]),i("li",[t._v("讲新的估计值作为更新数据，输出系统。同时作为下一次输入的估计值")])]),i("h2",{attrs:{id:"_3-卡尔曼增益"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-卡尔曼增益","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 卡尔曼增益")]),i("p",[i("img",{attrs:{src:s(138),alt:""}})]),i("p",[t._v("卡尔曼增益KG是一个0-1之间的小数，公式如上图。我们可以看到，KG越接近1，说明EMEA越小，反正说明EMEA越大。EMEA是测量误差，也就是测量误差越大，KG越小，测量误差越小，KG越大。")]),i("p",[t._v("ESTt 即当前最新估计值，它等于上一次的估计值ESTt-1 + KG*[MEA-ESTt-1]")]),i("p",[t._v("这么构造KG的原因是，我们把KG看作是一个权重，我们希望，测量误差大的时候，减少对测量值的信任权重。")]),i("p",[t._v("所以，测量误差比较大时，KG*[MEA-ESTt-1]这部分的权重会小一些，使我们可以 减少测量值对估计值的影响。")]),i("p",[i("img",{attrs:{src:s(137),alt:""}})]),i("p",[t._v("最终，卡尔曼增益要像越来越小的方向发展，既估计值误差越来越小，越来越不受测量值影响（趋于稳定）。")]),i("h2",{attrs:{id:"_4-卡尔曼滤波3大计算公式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-卡尔曼滤波3大计算公式","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 卡尔曼滤波3大计算公式")]),i("p",[i("img",{attrs:{src:s(136),alt:""}})]),i("p",[i("img",{attrs:{src:s(135),alt:""}})]),i("p",[t._v("本节我们主要关注的是公式3，即如何计算最新的估计误差，估计误差可以化简成EESTt = (1-KG)EESTt-1的形式，观察该公式我们可以得到如下结论：")]),i("ul",[i("li",[t._v("最新的估计误差总是小于之前的估计误差，因为0<(1-KG)<1，误差是趋向于0的。")]),i("li",[t._v("如果测量误差大，则KG小，系数1-KG就大，则估计误差收敛的速度也就比较慢。及测量误差大的时候，我们希望误差减小的速度慢一些，防止误判。")]),i("li",[t._v("如果测量误差小，则KG大，系数1-KG就小，则估计误差收敛的速度也就比较快。及测量误差小的时候，我们希望误差减小的速度快一些")])]),i("h2",{attrs:{id:"_5-计算样例"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-计算样例","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 计算样例")]),i("p",[i("img",{attrs:{src:s(134),alt:""}})]),i("h2",{attrs:{id:"_6-多维卡尔曼滤波"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-多维卡尔曼滤波","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 多维卡尔曼滤波")]),i("p",[i("img",{attrs:{src:s(133),alt:""}})]),i("ul",[i("li",[t._v("X状态矩阵")]),i("li",[t._v("Xm 测量得到的状态矩阵")]),i("li",[t._v("Xkp 预测的状态矩阵")]),i("li",[t._v("Xk 经过更新的状态")]),i("li",[t._v("P处理协方差矩阵（估计误差）")]),i("li",[t._v("K卡尔曼增益")]),i("li",[t._v("k状态序列序号，0为初始值")]),i("li",[t._v("R传感器误差协方差矩阵（测量误差）")]),i("li",[t._v("Y测量值矩阵")]),i("li",[t._v("Z测量噪声（不确定性）")]),i("li",[t._v("Q 处理误差协方差矩阵")]),i("li",[t._v("u 运动控制矩阵（表明如何达到新状态）")]),i("li",[t._v("w 预测误差")]),i("li",[t._v("A，B，C ，H变换矩阵\n"),i("ul",[i("li",[t._v("A，B 状态变换矩阵（看作常系数）")]),i("li",[t._v("C，H 测量变换矩阵")])])])]),i("h3",{attrs:{id:"算法流程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#算法流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 算法流程")]),i("ul",[i("li",[t._v("前序状态（previous state）中有两个变量Xk-1和Pk-1，我们对其进行预测，得到新状态Xkp和Pkp，用于计算KG")]),i("li",[t._v("预测阶段\n"),i("ul",[i("li",[t._v("预测方程1：$X_kp = AX_k-1 + Bu_k + w_k$，其中uk表示的是控制变量矩阵，也就是系统如何控制我们的前序状态向新状态转移。例如uk可以是某个物理定律。wk是我们在预测时的误差。")]),i("li",[t._v("预测方程2:  $Pkp = AP_k-1A^T+Q_k$")])])]),i("li",[t._v("更新阶段（更新测量值和KG）\n"),i("ul",[i("li",[t._v("基于预测值Pkp和测量误差R计算KG")]),i("li",[t._v("新测量数据 $Y = CX_km+Z_k$")]),i("li",[t._v("基于预测值Xkp和新测量数据Y，结合KG计算估计值Xk")])])]),i("li",[t._v("输出最新估计值\n"),i("ul",[i("li",[t._v("$X_k$")]),i("li",[t._v("$P_k =(1-KG)P_kp$")])])]),i("li",[t._v("新估计值作为输入，从新进入预测阶段。")])]),i("p",[i("img",{attrs:{src:s(51),alt:""}})]),i("p",[t._v("结合课程中的表述来看，C，H是一个值，F是A，B的结合。u=w表示运动向量")]),i("p",[i("img",{attrs:{src:s(132),alt:""}})]),i("h2",{attrs:{id:"_7-计算过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-计算过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 计算过程")]),i("p",[i("img",{attrs:{src:s(131),alt:""}})]),i("ul",[i("li",[t._v("根据X维度不同，A和B也不尽相同。")]),i("li",[t._v("Xk的计算方法，即之前的状态加上在某个运动规律下，t时间间隔内状态变化值，再加上一个误差。上图中，uk=1/2*at^2")])]),i("p",[i("img",{attrs:{src:s(130),alt:""}})]),i("ul",[i("li",[t._v("A矩阵用于计算Xk-1在$\\Delta t$时间内，状态Xk-1的改变")]),i("li",[t._v("AX即对X进行变换，新的位移为$y+\\Delta t\\dot y$，新的速度为$\\dot y$，加速度的情况在uk中体现")])]),i("p",[i("img",{attrs:{src:s(129),alt:""}})]),i("ul",[i("li",[t._v("u在此处即为加速度")]),i("li",[t._v("三种情况加速分别为,0,g,a")]),i("li",[t._v("B是如何确定的？根据运动公式的系数。要考虑到加速度对速度和位移的影响")])]),i("p",[i("img",{attrs:{src:s(128),alt:""}})]),i("p",[t._v("预测的当前状态矩阵即为Xk")]),i("p",[i("img",{attrs:{src:s(127),alt:""}})]),i("ul",[i("li",[t._v("C 矩阵表示我们一次可以测量状态矩阵的几个维度")]),i("li",[t._v("例如某传感器只能测量位置，则C=[1,0]")]),i("li",[t._v("例如某个传感器可以同时测量位置和速度，则C为单位矩阵")]),i("li",[t._v("Yk是基于我们的传感器能力C，我们可以测量并输入到设备中的测量值状态矩阵。")])]),i("p",[i("img",{attrs:{src:s(126),alt:""}})]),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("扩展阅读")]),i("ol",[i("li",[i("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%B0%94%E6%9B%BC%E6%BB%A4%E6%B3%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("卡尔曼滤波")])]),i("li",[i("a",{attrs:{href:"https://www.cnblogs.com/Jessica-jie/p/6893473.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("kalman滤波（一）---对各参数的理解")])]),i("li",[i("a",{attrs:{href:"http://www.ilectureonline.com/lectures/subject/SPECIAL%20TOPICS/26/190",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lectures in The Kalman Filter")])])])])])}],r=s(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},i,!1,null,null,null);a.default=e.exports},51:function(t,a,s){t.exports=s.p+"assets/img/15399619340700.f982be2b.jpg"}}]);