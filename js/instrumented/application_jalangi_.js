J$.iids = {"8":[34,13,34,89],"9":[3,1,3,2],"10":[34,13,34,51],"16":[34,13,34,89],"17":[3,3,6,2],"18":[34,55,34,89],"25":[3,3,6,2],"33":[3,3,6,2],"41":[3,1,6,3],"49":[3,1,6,4],"57":[8,1,8,2],"65":[8,3,8,11],"73":[8,1,8,12],"81":[10,5,10,6],"89":[10,7,10,17],"97":[10,5,10,18],"105":[11,9,11,10],"113":[11,11,11,15],"121":[11,9,11,16],"129":[11,29,11,40],"137":[11,9,11,41],"139":[11,9,11,28],"145":[11,9,11,42],"153":[10,25,12,6],"161":[10,25,12,6],"169":[10,25,12,6],"177":[10,5,12,7],"179":[10,5,10,24],"185":[10,5,12,8],"193":[15,5,15,6],"201":[15,7,15,30],"209":[15,5,15,31],"217":[15,40,15,46],"225":[15,5,15,47],"227":[15,5,15,39],"233":[15,5,15,48],"241":[18,5,18,6],"249":[18,7,18,19],"257":[18,5,18,20],"265":[18,5,18,32],"267":[18,5,18,30],"273":[18,5,18,33],"281":[21,5,21,6],"289":[21,7,21,16],"297":[21,5,21,17],"305":[22,14,22,15],"313":[23,14,23,15],"321":[24,16,24,17],"329":[25,22,25,34],"337":[26,16,26,21],"345":[21,25,27,6],"353":[21,5,27,7],"355":[21,5,21,24],"361":[21,5,27,8],"369":[30,5,30,6],"377":[30,7,30,24],"385":[30,5,30,25],"393":[30,5,30,39],"395":[30,5,30,37],"401":[30,5,30,40],"409":[33,5,33,6],"417":[33,7,33,22],"425":[33,5,33,23],"433":[34,14,34,15],"441":[34,16,34,20],"449":[34,14,34,21],"457":[34,14,34,30],"459":[34,14,34,28],"465":[34,40,34,50],"473":[34,14,34,51],"475":[34,14,34,39],"481":[34,56,34,57],"489":[34,58,34,62],"497":[34,56,34,63],"505":[34,56,34,72],"507":[34,56,34,70],"513":[34,82,34,88],"521":[34,56,34,89],"523":[34,56,34,81],"529":[35,13,35,14],"537":[35,15,35,19],"545":[35,13,35,20],"553":[35,13,35,29],"555":[35,13,35,27],"561":[35,39,35,43],"569":[35,13,35,44],"571":[35,13,35,38],"577":[35,57,35,65],"585":[35,13,35,66],"587":[35,13,35,56],"593":[35,13,35,67],"601":[36,13,36,14],"609":[36,15,36,19],"617":[36,13,36,20],"625":[36,13,36,29],"627":[36,13,36,27],"633":[36,39,36,47],"641":[36,13,36,48],"643":[36,13,36,38],"649":[36,13,36,49],"657":[33,30,38,6],"665":[33,30,38,6],"673":[33,30,38,6],"681":[33,5,38,7],"683":[33,5,33,29],"689":[33,5,38,8],"697":[40,5,40,6],"705":[40,7,40,21],"713":[40,5,40,22],"721":[40,29,43,6],"729":[40,29,43,6],"737":[40,29,43,6],"745":[40,5,43,7],"747":[40,5,40,28],"753":[40,5,43,8],"761":[46,5,46,6],"769":[46,7,46,20],"777":[46,5,46,21],"785":[47,16,47,21],"793":[47,16,47,21],"801":[47,9,47,21],"809":[46,28,48,6],"817":[46,28,48,6],"825":[46,28,48,6],"833":[46,5,48,7],"835":[46,5,46,27],"841":[46,5,48,8],"849":[8,19,50,2],"857":[8,19,50,2],"865":[8,19,50,2],"873":[8,1,50,3],"875":[8,1,8,18],"881":[8,1,50,4],"889":[1,1,52,1],"897":[3,3,6,2],"905":[3,3,6,2],"913":[10,25,12,6],"921":[10,25,12,6],"929":[34,9,37,10],"937":[33,30,38,6],"945":[33,30,38,6],"953":[40,29,43,6],"961":[40,29,43,6],"969":[46,28,48,6],"977":[46,28,48,6],"985":[8,19,50,2],"993":[8,19,50,2],"1001":[1,1,52,1],"1009":[1,1,52,1],"nBranches":4,"originalCodeFileName":"C:\\Users\\willh\\git\\Impressionist\\js\\application.js","instrumentedCodeFileName":"C:\\Users\\willh\\git\\Impressionist\\js\\application_jalangi_.js","code":"// Some general UI pack related JS\r\n\r\n$(function () {\r\n    // Custom selects\r\n    //$(\"dropdownlist\").dropkick();\r\n});\r\n\r\n$(document).ready(function() {\r\n    // Todo list\r\n    $(\".todo li\").click(function() {\r\n        $(this).toggleClass(\"todo-done\");\r\n    });\r\n\r\n    // Init tooltips\r\n    $(\"[data-toggle=tooltip]\").tooltip(\"show\");\r\n\r\n    // Init tags input\r\n    $(\"#tagsinput\").tagsInput();\r\n\r\n    // Init jQuery UI slider\r\n    $(\"#slider\").slider({\r\n        min: 1,\r\n        max: 5,\r\n        value: 2,\r\n        orientation: \"horizontal\",\r\n        range: \"min\",\r\n    });\r\n\r\n    // JS input/textarea placeholder\r\n    $(\"input, textarea\").placeholder();\r\n\r\n    // Make pagination demo work\r\n    $(\".pagination a\").click(function() {\r\n        if (!$(this).parent().hasClass(\"previous\") && !$(this).parent().hasClass(\"next\")) {\r\n            $(this).parent().siblings(\"li\").removeClass(\"active\");\r\n            $(this).parent().addClass(\"active\");\r\n        }\r\n    });\r\n\r\n    $(\".btn-group a\").click(function() {\r\n       // $(this).siblings().removeClass(\"active\");\r\n        //$(this).addClass(\"active\");\r\n    });\r\n\r\n    // Disable link click not scroll top\r\n    $(\"a[href='#']\").click(function() {\r\n        return false\r\n    });\r\n\r\n});\r\n\r\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(889, 'C:\\Users\\willh\\git\\Impressionist\\js\\application_jalangi_.js', 'C:\\Users\\willh\\git\\Impressionist\\js\\application.js');
            J$.X1(49, J$.F(41, J$.R(9, '$', $, 2), 0)(J$.T(33, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(17, arguments.callee, this, arguments);
                            arguments = J$.N(25, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(897, J$e);
                        } finally {
                            if (J$.Fr(905))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 17)));
            J$.X1(881, J$.M(873, J$.F(73, J$.R(57, '$', $, 2), 0)(J$.R(65, 'document', document, 2)), 'ready', 0)(J$.T(865, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(849, arguments.callee, this, arguments);
                            arguments = J$.N(857, 'arguments', arguments, 4);
                            J$.X1(185, J$.M(177, J$.F(97, J$.R(81, '$', $, 2), 0)(J$.T(89, ".todo li", 21, false)), 'click', 0)(J$.T(169, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(153, arguments.callee, this, arguments);
                                            arguments = J$.N(161, 'arguments', arguments, 4);
                                            J$.X1(145, J$.M(137, J$.F(121, J$.R(105, '$', $, 2), 0)(J$.R(113, 'this', this, 0)), 'toggleClass', 0)(J$.T(129, "todo-done", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(913, J$e);
                                        } finally {
                                            if (J$.Fr(921))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 153)));
                            J$.X1(233, J$.M(225, J$.F(209, J$.R(193, '$', $, 2), 0)(J$.T(201, "[data-toggle=tooltip]", 21, false)), 'tooltip', 0)(J$.T(217, "show", 21, false)));
                            J$.X1(273, J$.M(265, J$.F(257, J$.R(241, '$', $, 2), 0)(J$.T(249, "#tagsinput", 21, false)), 'tagsInput', 0)());
                            J$.X1(361, J$.M(353, J$.F(297, J$.R(281, '$', $, 2), 0)(J$.T(289, "#slider", 21, false)), 'slider', 0)(J$.T(345, {
                                min: J$.T(305, 1, 22, false),
                                max: J$.T(313, 5, 22, false),
                                value: J$.T(321, 2, 22, false),
                                orientation: J$.T(329, "horizontal", 21, false),
                                range: J$.T(337, "min", 21, false)
                            }, 11, false)));
                            J$.X1(401, J$.M(393, J$.F(385, J$.R(369, '$', $, 2), 0)(J$.T(377, "input, textarea", 21, false)), 'placeholder', 0)());
                            J$.X1(689, J$.M(681, J$.F(425, J$.R(409, '$', $, 2), 0)(J$.T(417, ".pagination a", 21, false)), 'click', 0)(J$.T(673, function () {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(657, arguments.callee, this, arguments);
                                            arguments = J$.N(665, 'arguments', arguments, 4);
                                            if (J$.X1(929, J$.C(16, J$.C(8, J$.U(10, '!', J$.M(473, J$.M(457, J$.F(449, J$.R(433, '$', $, 2), 0)(J$.R(441, 'this', this, 0)), 'parent', 0)(), 'hasClass', 0)(J$.T(465, "previous", 21, false)))) ? J$.U(18, '!', J$.M(521, J$.M(505, J$.F(497, J$.R(481, '$', $, 2), 0)(J$.R(489, 'this', this, 0)), 'parent', 0)(), 'hasClass', 0)(J$.T(513, "next", 21, false))) : J$._()))) {
                                                J$.X1(593, J$.M(585, J$.M(569, J$.M(553, J$.F(545, J$.R(529, '$', $, 2), 0)(J$.R(537, 'this', this, 0)), 'parent', 0)(), 'siblings', 0)(J$.T(561, "li", 21, false)), 'removeClass', 0)(J$.T(577, "active", 21, false)));
                                                J$.X1(649, J$.M(641, J$.M(625, J$.F(617, J$.R(601, '$', $, 2), 0)(J$.R(609, 'this', this, 0)), 'parent', 0)(), 'addClass', 0)(J$.T(633, "active", 21, false)));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(937, J$e);
                                        } finally {
                                            if (J$.Fr(945))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 657)));
                            J$.X1(753, J$.M(745, J$.F(713, J$.R(697, '$', $, 2), 0)(J$.T(705, ".btn-group a", 21, false)), 'click', 0)(J$.T(737, function () {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(721, arguments.callee, this, arguments);
                                            arguments = J$.N(729, 'arguments', arguments, 4);
                                        } catch (J$e) {
                                            J$.Ex(953, J$e);
                                        } finally {
                                            if (J$.Fr(961))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 721)));
                            J$.X1(841, J$.M(833, J$.F(777, J$.R(761, '$', $, 2), 0)(J$.T(769, "a[href='#']", 21, false)), 'click', 0)(J$.T(825, function () {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(809, arguments.callee, this, arguments);
                                            arguments = J$.N(817, 'arguments', arguments, 4);
                                            return J$.X1(801, J$.Rt(793, J$.T(785, false, 23, false)));
                                        } catch (J$e) {
                                            J$.Ex(969, J$e);
                                        } finally {
                                            if (J$.Fr(977))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 809)));
                        } catch (J$e) {
                            J$.Ex(985, J$e);
                        } finally {
                            if (J$.Fr(993))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 849)));
        } catch (J$e) {
            J$.Ex(1001, J$e);
        } finally {
            if (J$.Sr(1009)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
