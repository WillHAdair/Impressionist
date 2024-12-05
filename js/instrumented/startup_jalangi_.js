J$.iids = {"8":[35,12,35,26],"9":[2,5,2,6],"10":[35,12,35,26],"17":[2,7,2,15],"25":[2,5,2,16],"33":[8,9,8,10],"41":[8,11,8,22],"49":[8,9,8,23],"57":[8,27,8,34],"65":[10,12,10,14],"73":[10,12,10,22],"75":[10,12,10,20],"81":[10,12,10,23],"89":[8,36,11,10],"97":[8,36,11,10],"105":[8,36,11,10],"113":[8,36,11,10],"121":[8,9,11,11],"123":[8,9,8,26],"129":[8,9,11,11],"137":[12,9,12,22],"145":[12,9,12,24],"153":[12,9,12,25],"161":[2,24,14,6],"169":[2,24,14,6],"177":[2,24,14,6],"185":[2,24,14,6],"193":[2,5,14,7],"195":[2,5,2,22],"201":[2,5,14,8],"209":[18,9,18,22],"217":[18,9,18,24],"225":[18,9,18,25],"233":[16,5,19,6],"241":[16,5,19,6],"249":[16,5,19,6],"257":[22,30,22,43],"265":[22,26,22,45],"273":[22,26,22,45],"281":[22,10,22,46],"289":[23,10,23,23],"297":[23,10,23,36],"299":[23,10,23,34],"305":[23,10,23,37],"313":[24,10,24,23],"321":[24,42,24,45],"329":[24,10,24,47],"331":[24,10,24,40],"337":[24,10,24,47],"345":[25,26,25,30],"353":[25,26,25,30],"361":[25,10,25,30],"369":[27,10,27,20],"377":[27,21,27,33],"385":[27,35,27,39],"393":[27,10,27,40],"401":[27,10,27,41],"409":[20,5,28,7],"417":[20,5,28,7],"425":[31,9,31,10],"433":[31,11,31,31],"441":[31,9,31,32],"449":[31,37,31,46],"457":[31,48,31,54],"465":[31,9,31,55],"467":[31,9,31,36],"473":[31,9,31,56],"481":[29,7,32,8],"489":[29,7,32,8],"497":[35,13,35,26],"505":[37,12,37,13],"513":[37,14,37,25],"521":[37,12,37,26],"529":[37,31,37,40],"537":[37,42,37,56],"545":[37,12,37,57],"547":[37,12,37,30],"553":[37,12,37,58],"561":[33,7,41,8],"569":[33,7,41,8],"577":[1,1,41,8],"585":[1,1,41,8],"593":[16,5,19,6],"601":[1,1,41,8],"609":[20,5,28,7],"617":[1,1,41,8],"625":[29,7,32,8],"633":[1,1,41,8],"641":[33,7,41,8],"649":[1,1,41,8],"657":[8,36,11,10],"665":[8,36,11,10],"673":[2,24,14,6],"681":[2,24,14,6],"689":[16,5,19,6],"697":[16,5,19,6],"705":[20,5,28,7],"713":[20,5,28,7],"721":[29,7,32,8],"729":[29,7,32,8],"737":[35,9,39,10],"745":[33,7,41,8],"753":[33,7,41,8],"761":[1,1,41,8],"769":[1,1,41,8],"nBranches":2,"originalCodeFileName":"C:\\Users\\willh\\git\\Impressionist\\js\\startup.js","instrumentedCodeFileName":"C:\\Users\\willh\\git\\Impressionist\\js\\startup_jalangi_.js","code":"\r\n    $(document).ready( function (e)\r\n    {\r\n        \r\n        // checkLogin();\r\n        /** uncomment for fb login stuff **/\r\n        //setTimeout(redirectApp, 10000)\r\n        $(\"#loginbtn\").on(\"click\", function( e )\r\n        {\r\n           FB.login();\r\n        })\r\n        impressionist();\r\n\r\n    });\r\n    var loggedinstate;\r\n    function showUserDetails( response )\r\n    {\r\n        impressionist();\r\n    };\r\n    function impressionist()\r\n    {\r\n         impressionist = new Impressionist();\r\n         impressionist.initialize();\r\n         impressionist.addSettingsPanel( \" \" )\r\n         loggedinstate = true\r\n         //$(\".preloaderviewport\").css(\"display\", \"none\");\r\n         setTimeout(showViewport, 1000);\r\n     }\r\n      function showViewport()\r\n      {\r\n        $(\".preloaderviewport\").css(\"display\", \"none\");\r\n      }\r\n      function redirectApp()\r\n      {\r\n        if(!loggedinstate)\r\n        {\r\n           $(\"#loginbtn\").css(\"display\", \"inline-block\");\r\n          // document.location.href = \"landing.html\";\r\n        }\r\n        \r\n      }"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(577, 'C:\\Users\\willh\\git\\Impressionist\\js\\startup_jalangi_.js', 'C:\\Users\\willh\\git\\Impressionist\\js\\startup.js');
            function showUserDetails(response) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            response = J$.N(249, 'response', response, 4);
                            J$.X1(225, J$.F(217, J$.R(209, 'impressionist', impressionist, 1), 0)());
                        } catch (J$e) {
                            J$.Ex(689, J$e);
                        } finally {
                            if (J$.Fr(697))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function impressionist() {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(409, arguments.callee, this, arguments);
                            arguments = J$.N(417, 'arguments', arguments, 4);
                            J$.X1(281, impressionist = J$.W(273, 'impressionist', J$.F(265, J$.R(257, 'Impressionist', Impressionist, 2), 1)(), impressionist, 2));
                            J$.X1(305, J$.M(297, J$.R(289, 'impressionist', impressionist, 1), 'initialize', 0)());
                            J$.X1(337, J$.M(329, J$.R(313, 'impressionist', impressionist, 1), 'addSettingsPanel', 0)(J$.T(321, " ", 21, false)));
                            J$.X1(361, loggedinstate = J$.W(353, 'loggedinstate', J$.T(345, true, 23, false), loggedinstate, 2));
                            J$.X1(401, J$.F(393, J$.R(369, 'setTimeout', setTimeout, 2), 0)(J$.R(377, 'showViewport', showViewport, 1), J$.T(385, 1000, 22, false)));
                        } catch (J$e) {
                            J$.Ex(705, J$e);
                        } finally {
                            if (J$.Fr(713))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function showViewport() {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(481, arguments.callee, this, arguments);
                            arguments = J$.N(489, 'arguments', arguments, 4);
                            J$.X1(473, J$.M(465, J$.F(441, J$.R(425, '$', $, 2), 0)(J$.T(433, ".preloaderviewport", 21, false)), 'css', 0)(J$.T(449, "display", 21, false), J$.T(457, "none", 21, false)));
                        } catch (J$e) {
                            J$.Ex(721, J$e);
                        } finally {
                            if (J$.Fr(729))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function redirectApp() {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(561, arguments.callee, this, arguments);
                            arguments = J$.N(569, 'arguments', arguments, 4);
                            if (J$.X1(737, J$.C(8, J$.U(10, '!', J$.R(497, 'loggedinstate', loggedinstate, 1))))) {
                                J$.X1(553, J$.M(545, J$.F(521, J$.R(505, '$', $, 2), 0)(J$.T(513, "#loginbtn", 21, false)), 'css', 0)(J$.T(529, "display", 21, false), J$.T(537, "inline-block", 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(745, J$e);
                        } finally {
                            if (J$.Fr(753))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(585, 'loggedinstate', loggedinstate, 0);
            showUserDetails = J$.N(601, 'showUserDetails', J$.T(593, showUserDetails, 12, false, 233), 0);
            impressionist = J$.N(617, 'impressionist', J$.T(609, impressionist, 12, false, 409), 0);
            showViewport = J$.N(633, 'showViewport', J$.T(625, showViewport, 12, false, 481), 0);
            redirectApp = J$.N(649, 'redirectApp', J$.T(641, redirectApp, 12, false, 561), 0);
            J$.X1(201, J$.M(193, J$.F(25, J$.R(9, '$', $, 2), 0)(J$.R(17, 'document', document, 2)), 'ready', 0)(J$.T(185, function (e) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            e = J$.N(177, 'e', e, 4);
                            J$.X1(129, J$.M(121, J$.F(49, J$.R(33, '$', $, 2), 0)(J$.T(41, "#loginbtn", 21, false)), 'on', 0)(J$.T(57, "click", 21, false), J$.T(113, function (e) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(89, arguments.callee, this, arguments);
                                            arguments = J$.N(97, 'arguments', arguments, 4);
                                            e = J$.N(105, 'e', e, 4);
                                            J$.X1(81, J$.M(73, J$.R(65, 'FB', FB, 2), 'login', 0)());
                                        } catch (J$e) {
                                            J$.Ex(657, J$e);
                                        } finally {
                                            if (J$.Fr(665))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 89)));
                            J$.X1(153, J$.F(145, J$.R(137, 'impressionist', impressionist, 1), 0)());
                        } catch (J$e) {
                            J$.Ex(673, J$e);
                        } finally {
                            if (J$.Fr(681))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161)));
            var loggedinstate;
            ;
        } catch (J$e) {
            J$.Ex(761, J$e);
        } finally {
            if (J$.Sr(769)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
