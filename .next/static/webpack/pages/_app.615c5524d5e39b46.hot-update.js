"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"transparent\");\n    const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"white\");\n    const handleNav = ()=>{\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const changeColor = ()=>{\n            if (window.scrollY >= 90) {\n                setColor(\"#ffffff\");\n                setTextColor(\"#000000\");\n            } else {\n                setColor(\"transparent\");\n                setTextColor(\"#ffffff\");\n            }\n        };\n        window.addEventListener(\"scroll\", changeColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"\".concat(color)\n        },\n        className: \"fixed left-0 top-0 w-full z-10 ease-in duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1240px] m-auto flex justify-between p-4 text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            color: \"{textColor}\"\n                        },\n                        className: \"font-bold text-4xl\",\n                        children: \"DSAW\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    style: {\n                        color: \"{textColor}\"\n                    },\n                    className: \"hidden sm:flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/#gallery\",\n                                children: \"Gallery\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/portfolio\",\n                                children: \"Work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handleNav,\n                    className: \"block sm:hidden z-10\",\n                    children: nav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutLineClose, {\n                        size: 20,\n                        style: {\n                            color: \"{textColor}\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 24\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineMenu, {\n                        size: 20,\n                        style: {\n                            color: \"{textColor}\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 86\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: nav ? \"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300\" : \"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#gallery\",\n                                    children: \"Gallery\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/portfolio\",\n                                    children: \"Work\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: handleNav,\n                                className: \"p-4 text-4xl hover:text-gray-500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorenprice/Desktop/next/components/Navbar.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"hM4e+HsCErmOPmilgtBeBMrfzzY=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDdEI7QUFDa0M7QUFFL0QsTUFBTU0sU0FBUyxJQUFNOztJQUNqQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUNwQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1XLFlBQVksSUFBTTtRQUNwQkwsT0FBTyxDQUFDRDtJQUNaO0lBRUFOLGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNYSxjQUFjLElBQU07WUFDeEIsSUFBSUMsT0FBT0MsT0FBTyxJQUFJLElBQUk7Z0JBQ3hCTixTQUFTO2dCQUNURSxhQUFhO1lBQ2YsT0FBTztnQkFDTEYsU0FBUztnQkFDVEUsYUFBYTtZQUNmLENBQUM7UUFDSDtRQUNBRyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtJQUNwQyxHQUFHLEVBQUU7SUFHVCxxQkFDRSw4REFBQ0k7UUFDR0MsT0FBTztZQUFDQyxpQkFBaUIsR0FBUyxPQUFOWDtRQUFPO1FBQ25DWSxXQUFVO2tCQUNWLDRFQUFDSDtZQUFJRyxXQUFVOzs4QkFDWCw4REFBQ2xCLGtEQUFJQTtvQkFBQ21CLE1BQU07OEJBQ1IsNEVBQUNDO3dCQUFHSixPQUFPOzRCQUFDVixPQUFRO3dCQUFZO3dCQUFFWSxXQUFVO2tDQUFxQjs7Ozs7Ozs7Ozs7OEJBS3JFLDhEQUFDRztvQkFBR0wsT0FBTzt3QkFBQ1YsT0FBUTtvQkFBWTtvQkFBR1ksV0FBVTs7c0NBQ3pDLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FDViw0RUFBQ2xCLGtEQUFJQTtnQ0FBQ21CLE1BQU07MENBQUk7Ozs7Ozs7Ozs7O3NDQUVwQiw4REFBQ0c7NEJBQUdKLFdBQVU7c0NBQ1YsNEVBQUNsQixrREFBSUE7Z0NBQUNtQixNQUFNOzBDQUFZOzs7Ozs7Ozs7OztzQ0FFNUIsOERBQUNHOzRCQUFHSixXQUFVO3NDQUNWLDRFQUFDbEIsa0RBQUlBO2dDQUFDbUIsTUFBTTswQ0FBYTs7Ozs7Ozs7Ozs7c0NBRTdCLDhEQUFDRzs0QkFBR0osV0FBVTtzQ0FDViw0RUFBQ2xCLGtEQUFJQTtnQ0FBQ21CLE1BQU07MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUsvQiw4REFBQ0o7b0JBQUlRLFNBQVNiO29CQUFXUSxXQUFVOzhCQUM5QmQsb0JBQU0sOERBQUNGLDBEQUFjQTt3QkFBQ3NCLE1BQU07d0JBQUlSLE9BQU87NEJBQUNWLE9BQVE7d0JBQVk7Ozs7O2tEQUFRLDhEQUFDTCx5REFBYUE7d0JBQUN1QixNQUFNO3dCQUFJUixPQUFPOzRCQUFDVixPQUFRO3dCQUFZOzs7OztpQ0FBSzs7Ozs7OzhCQUluSSw4REFBQ1M7b0JBQ0dHLFdBQ0lkLE1BQ0UsZ0pBQ0EsbUpBQW1KOzhCQUd6Siw0RUFBQ2lCOzswQ0FDRyw4REFBQ0M7Z0NBQUdDLFNBQVNiO2dDQUFXUSxXQUFVOzBDQUM5Qiw0RUFBQ2xCLGtEQUFJQTtvQ0FBQ21CLE1BQU07OENBQUk7Ozs7Ozs7Ozs7OzBDQUVwQiw4REFBQ0c7Z0NBQUdDLFNBQVNiO2dDQUFXUSxXQUFVOzBDQUM5Qiw0RUFBQ2xCLGtEQUFJQTtvQ0FBQ21CLE1BQU07OENBQVk7Ozs7Ozs7Ozs7OzBDQUU1Qiw4REFBQ0c7Z0NBQUdDLFNBQVNiO2dDQUFXUSxXQUFVOzBDQUM5Qiw0RUFBQ2xCLGtEQUFJQTtvQ0FBQ21CLE1BQU07OENBQWE7Ozs7Ozs7Ozs7OzBDQUU3Qiw4REFBQ0c7Z0NBQUdDLFNBQVNiO2dDQUFXUSxXQUFVOzBDQUM5Qiw0RUFBQ2xCLGtEQUFJQTtvQ0FBQ21CLE1BQU07OENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMvQztHQWxGTWhCO0tBQUFBO0FBb0ZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8zYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEFpT3V0bGluZU1lbnUsIEFpT3V0TGluZUNsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCd0cmFuc3BhcmVudCcpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZSgnd2hpdGUnKTtcblxuICAgIGNvbnN0IGhhbmRsZU5hdiA9ICgpID0+IHtcbiAgICAgICAgc2V0TmF2KCFuYXYpXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA5MCkge1xuICAgICAgICAgICAgc2V0Q29sb3IoJyNmZmZmZmYnKTtcbiAgICAgICAgICAgIHNldFRleHRDb2xvcignIzAwMDAwMCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDb2xvcigndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgICAgIHNldFRleHRDb2xvcignI2ZmZmZmZicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUNvbG9yKTtcbiAgICAgIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBcbiAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfWB9fVxuICAgICAgICBjbGFzc05hbWU9J2ZpeGVkIGxlZnQtMCB0b3AtMCB3LWZ1bGwgei0xMCBlYXNlLWluIGR1cmF0aW9uLTMwMCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTI0MHB4XSBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gcC00IHRleHQtd2hpdGUnPlxuICAgICAgICAgICAgPExpbmsgaHJlZiA9Jy8nPlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOiBge3RleHRDb2xvcn1gfX1jbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTR4bCc+XG4gICAgICAgICAgICAgICAgRFNBV1xuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDx1bCBzdHlsZT17e2NvbG9yOiBge3RleHRDb2xvcn1gfX0gY2xhc3NOYW1lPSdoaWRkZW4gc206ZmxleCc+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncC00Jz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9Jy8nPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmID0nLyNnYWxsZXJ5Jz5HYWxsZXJ5PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncC00Jz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9Jy9wb3J0Zm9saW8nPldvcms8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmID0nL2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgQnV0dG9uICovfVxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0nYmxvY2sgc206aGlkZGVuIHotMTAnPlxuICAgICAgICAgICAgICAgIHtuYXYgPyA8QWlPdXRMaW5lQ2xvc2Ugc2l6ZT17MjB9IHN0eWxlPXt7Y29sb3I6IGB7dGV4dENvbG9yfWB9fSAvPiA6IDxBaU91dGxpbmVNZW51IHNpemU9ezIwfSBzdHlsZT17e2NvbG9yOiBge3RleHRDb2xvcn1gfX0gLz4gfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSAqL31cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgbmF2IFxuICAgICAgICAgICAgICAgICAgICA/ICdzbTpoaWRkZW4gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtc2NyZWVuIGJnLWJsYWNrIHRleHQtY2VudGVyIGVhc2UtaW4gZHVyYXRpb24tMzAwJyBcbiAgICAgICAgICAgICAgICAgICAgOiAnc206aGlkZGVuIGFic29sdXRlIHRvcC0wIGxlZnQtWy0xMDAlXSByaWdodC0wIGJvdHRvbS0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLXNjcmVlbiBiZy1ibGFjayB0ZXh0LWNlbnRlciBlYXNlLWluIGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17aGFuZGxlTmF2fSBjbGFzc05hbWU9J3AtNCB0ZXh0LTR4bCBob3Zlcjp0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17aGFuZGxlTmF2fSBjbGFzc05hbWU9J3AtNCB0ZXh0LTR4bCBob3Zlcjp0ZXh0LWdyYXktNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPScvI2dhbGxlcnknPkdhbGxlcnk8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0ncC00IHRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9Jy9wb3J0Zm9saW8nPldvcms8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVOYXZ9IGNsYXNzTmFtZT0ncC00IHRleHQtNHhsIGhvdmVyOnRleHQtZ3JheS01MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9Jy9jb250YWN0Jz5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJBaU91dGxpbmVNZW51IiwiQWlPdXRMaW5lQ2xvc2UiLCJOYXZiYXIiLCJuYXYiLCJzZXROYXYiLCJjb2xvciIsInNldENvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwiaGFuZGxlTmF2IiwiY2hhbmdlQ29sb3IiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});