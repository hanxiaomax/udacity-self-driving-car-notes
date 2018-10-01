(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(t,a,s){t.exports=s.p+"assets/img/15352979743394.2f6bfad7.jpg"},208:function(t,a,s){t.exports=s.p+"assets/img/15352482554076.f3163dfb.jpg"},209:function(t,a,s){t.exports=s.p+"assets/img/15352482470628.99081356.jpg"},210:function(t,a,s){t.exports=s.p+"assets/img/15352481652408.3541b5f6.jpg"},211:function(t,a,s){t.exports=s.p+"assets/img/15352479719973.e53dbc7d.jpg"},212:function(t,a,s){t.exports=s.p+"assets/img/15352479131882.b13af603.jpg"},213:function(t,a,s){t.exports=s.p+"assets/img/15352478365437.38ae06db.jpg"},289:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"相机模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相机模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 相机模型")]),n("ol",[n("li",[n("p",[t._v("针孔相机（无畸变）\n"),n("img",{attrs:{src:s(213),alt:""}})])]),n("li",[n("p",[t._v("镜头相机（有畸变）")]),n("ul",[n("li",[n("p",[t._v("径向畸变\n镜头导致的光线弯曲\n"),n("img",{attrs:{src:s(212),alt:""}})])]),n("li",[n("p",[t._v("切向畸变\n胶片与传感器屏幕不平行导致\n"),n("img",{attrs:{src:s(211),alt:""}})])])])])]),n("h3",{attrs:{id:"畸变系数和矫正"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#畸变系数和矫正","aria-hidden":"true"}},[t._v("#")]),t._v(" 畸变系数和矫正")]),n("h4",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),n("p",[n("img",{attrs:{src:s(210),alt:""}})]),n("ul",[n("li",[t._v("计算无畸变图像上一个点到图像中心点的距离r")]),n("li",[t._v("c = [k1, k2, p1, p2, k3]")]),n("li",[t._v("k3 用于矫正广角镜头，不需要时可以忽略\n"),n("img",{attrs:{src:s(209),alt:""}}),n("img",{attrs:{src:s(208),alt:""}})])]),n("h4",{attrs:{id:"函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数")]),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("功能")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("函数")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("返回值")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html#cv2.findChessboardCorners",target:"_blank",rel:"noopener noreferrer"}},[t._v("cv2.findChessboardCorners()")])]),n("td",{staticStyle:{"text-align":"center"}},[t._v("查找棋盘格角点")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"https://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html#cv2.drawChessboardCorners",target:"_blank",rel:"noopener noreferrer"}},[t._v("cv2.drawChessboardCorners()")])]),n("td",{staticStyle:{"text-align":"center"}},[t._v("绘制棋盘格角点")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("code",[t._v("cv2.findChessboardCorners()")])]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})])])]),n("p",[t._v("objpoints 标准棋盘格\nimgpoints")]),n("h4",{attrs:{id:"步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 步骤")]),n("ol",[n("li",[t._v("读取图像转换为灰阶")]),n("li",[t._v("查找角点、绘制角点"),n("br"),n("code",[t._v("ret, corners = cv2.findChessboardCorners(gray, (8,6), None)")])]),n("li",[t._v("校准相机"),n("br"),n("code",[t._v("ret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(objpoints, imgpoints, gray.shape[::-1], None, None)")])]),n("li",[t._v("去畸变"),n("br"),n("code",[t._v("dst = cv2.undistort(img, mtx, dist, None, mtx)")])])]),n("p",[t._v("%matplot qt")]),n("h4",{attrs:{id:"练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习","aria-hidden":"true"}},[t._v("#")]),t._v(" 练习")]),n("p",[t._v("https://github.com/udacity/CarND-Camera-Calibration")]),n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),n("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" mpimg\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" glob\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pickle\n\n"),n("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v("matplotlib inline\n\nCOL "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("8")]),t._v("\nROW "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("6")]),t._v("\n\nfname "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"test_image2.png"')]),t._v("\n\nfilenames "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" glob"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("glob"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),n("span",{attrs:{class:"token string"}},[t._v('"./calibration_wide/GOPR*.jpg"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntest_image "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),n("span",{attrs:{class:"token string"}},[t._v('"./calibration_wide/test_image.jpg"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nobjpoints "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nimagepoints "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nobjp "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ROW"),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("COL"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("np"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nobjp"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mgrid"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("8")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("calib_camera")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" filename "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" filenames"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        img "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        gray "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2GRAY"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ret"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" corners "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findChessboardCorners"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gray"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COL"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ROW"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("None")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ret "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("True")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            objpoints"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("objp"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            imagepoints"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corners"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n    ret"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mtx"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dist"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rvecs"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tvecs "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calibrateCamera"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("objpoints"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imagepoints"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gray"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("None")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("None")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    distort_img_gray "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2GRAY"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    dst "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("undistort"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distort_img_gray"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mtx"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dist"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("None")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mtx"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),n("span",{attrs:{class:"token keyword"}},[t._v("print")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"finished"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dst\n\n    \nsrc_img "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"./calibration_wide/GOPR0050.jpg"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndst "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" calib_camera"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_img"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n\nplt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("figsize"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("30")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("30")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subplot"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_img"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cmap"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"gray"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subplot"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cmap"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"gray"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n")])]),n("p",[n("img",{attrs:{src:s(207),alt:""}}),t._v("\n![](./imgs[](imgs(./imgs"),n("a",{attrs:{href:"imgs/15352981983489.jpg"}})]),n("h3",{attrs:{id:"a-note-on-image-shape"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-image-shape","aria-hidden":"true"}},[t._v("#")]),t._v(" A note on image shape")]),n("p",[t._v("The shape of the image, which is passed into the calibrateCamera function, is just the height and width of the image. One way to retrieve these values is by retrieving them from the grayscale image shape array gray.shape[::-1]. This returns the image width and height in pixel values like (1280, 960).")]),n("blockquote",[n("p",[t._v("Another way to retrieve the image shape, is to get them directly from the color image by retrieving the first two values in the color image shape array using img.shape[1::-1]. This code snippet asks for just the first two values in the shape array, and reverses them. Note that in our case we are working with a greyscale image, so we only have 2 dimensions (color images have three, height, width, and depth), so this is not necessary.")])]),n("blockquote",[n("p",[t._v("It's important to use an entire grayscale image shape or the first two values of a color image shape. This is because the entire shape of a color image will include a third value -- the number of color channels -- in addition to the height and width of the image. For example the shape array of a color image might be (960, 1280, 3), which are the pixel height and width of an image (960, 1280) and a third value (3) that represents the three color channels in the color image which you'll learn more about later, and if you try to pass these three values into the calibrateCamera function, you'll get an error.")])])])}],e=s(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=o.exports}}]);