(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "databases",
    ()=>databases,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Client"]();
client.setEndpoint(("TURBOPACK compile-time value", "https://sgp.cloud.appwrite.io/v1")).setProject(("TURBOPACK compile-time value", "693ece3900052a7c4caf"));
const databases = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Databases"](client);
const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Storage"](client);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrl",
    ()=>getImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-client] (ecmascript)");
;
function getImageUrl(fileId) {
    const bucketId = ("TURBOPACK compile-time value", "693ed25500011cc40c48");
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"].getFileView(bucketId, fileId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-client] (ecmascript)");
;
;
;
;
;
function ImageCarousel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "42a28427f41eff17b04fa4c77df093ad0ed7bb8b269cd0dfaf1a19fb9c1dc032") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42a28427f41eff17b04fa4c77df093ad0ed7bb8b269cd0dfaf1a19fb9c1dc032";
    }
    const { images, onImageClick } = t0;
    let t1;
    if ($[1] !== images || $[2] !== onImageClick) {
        let t2;
        if ($[4] !== onImageClick) {
            t2 = ({
                "ImageCarousel[images.map()]": (fileId, i)=>{
                    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(fileId);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: url,
                            alt: `Image ${i + 1}`,
                            className: "w-full h-56 object-contain rounded-lg bg-[#FFC1CC]",
                            onClick: {
                                "ImageCarousel[images.map() > <img>.onClick]": ()=>onImageClick?.(url)
                            }["ImageCarousel[images.map() > <img>.onClick]"]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                            lineNumber: 28,
                            columnNumber: 39
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                        lineNumber: 28,
                        columnNumber: 18
                    }, this);
                }
            })["ImageCarousel[images.map()]"];
            $[4] = onImageClick;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = images.map(t2);
        $[1] = images;
        $[2] = onImageClick;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            spaceBetween: 10,
            slidesPerView: 1,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_c = ImageCarousel;
var _c;
__turbopack_context__.k.register(_c, "ImageCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MemoryCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "e8f3b2162a69a154ba670aa06aef167c7c40a4e8a12902e86431506efb51b9f3") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e8f3b2162a69a154ba670aa06aef167c7c40a4e8a12902e86431506efb51b9f3";
    }
    const { memory, isPlaying, onPlayClick } = t0;
    const [expandedImage, setExpandedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "/TOFI.png",
            "/TOBI.png"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const musicIcons = t1;
    let t2;
    if ($[2] !== memory.date) {
        t2 = new Date(memory.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        $[2] = memory.date;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const formattedDate = t2;
    const baseIcon = musicIcons[memory.$id.charCodeAt(memory.$id.length - 1) % musicIcons.length];
    let t3;
    if ($[4] !== baseIcon) {
        t3 = musicIcons.find({
            "MemoryCard[musicIcons.find()]": (icon)=>icon !== baseIcon
        }["MemoryCard[musicIcons.find()]"]);
        $[4] = baseIcon;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const playingIcon = t3;
    let t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 0,
            y: 30
        };
        t5 = {
            opacity: 1,
            y: 0
        };
        t6 = {
            duration: 0.6
        };
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MemoryCard[<ImageCarousel>.onImageClick]": (img)=>setExpandedImage(img)
        })["MemoryCard[<ImageCarousel>.onImageClick]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== memory.imageIds) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            images: memory.imageIds,
            onImageClick: t7
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[10] = memory.imageIds;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== baseIcon || $[13] !== isPlaying || $[14] !== memory.musicFileID || $[15] !== onPlayClick || $[16] !== playingIcon) {
        t9 = memory.musicFileID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: isPlaying ? playingIcon : baseIcon,
                alt: "Play Button",
                onClick: onPlayClick,
                className: "absolute top-[-15px] right-0 w-10 cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                lineNumber: 103,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 103,
            columnNumber: 32
        }, this);
        $[12] = baseIcon;
        $[13] = isPlaying;
        $[14] = memory.musicFileID;
        $[15] = onPlayClick;
        $[16] = playingIcon;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== formattedDate) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-[#6D4C41]",
            children: formattedDate
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[18] = formattedDate;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== memory.title) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold mt-1 text-[#6D4C41]",
            children: memory.title
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[20] = memory.title;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== memory.description) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6D4C41] mt-2 leading-relaxed",
            children: memory.description
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[22] = memory.description;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t10 || $[25] !== t11 || $[26] !== t12 || $[27] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t9,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
        $[26] = t12;
        $[27] = t9;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t13 || $[30] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t4,
            whileInView: t5,
            transition: t6,
            className: "bg-white rounded-2xl shadow-md overflow-hidden w-full",
            children: [
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t8;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== expandedImage) {
        t15 = expandedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: {
                "MemoryCard[<motion.div>.onClick]": ()=>setExpandedImage(null)
            }["MemoryCard[<motion.div>.onClick]"],
            className: "fixed inset-0 z-50 flex items-center justify-center bg-[#FFF1E6]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                src: expandedImage,
                alt: "Expanded Image",
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.8,
                    opacity: 0
                },
                transition: {
                    duration: 0.3
                },
                className: "max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg cursor-pointer"
            }, "image", false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                lineNumber: 167,
                columnNumber: 121
            }, this)
        }, "overlay", false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 159,
            columnNumber: 28
        }, this);
        $[32] = expandedImage;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t15
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t14 || $[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                " ",
                t14,
                t16
            ]
        }, void 0, true);
        $[36] = t14;
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    return t17;
}
_s(MemoryCard, "+U8yK6q4A/WC0g7bofNq42VL6OQ=");
_c = MemoryCard;
var _c;
__turbopack_context__.k.register(_c, "MemoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$MemoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Timeline(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "27557da7302812b4afb1eff3ff71aef647561a744e8ed2db66680a7d92b177eb") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27557da7302812b4afb1eff3ff71aef647561a744e8ed2db66680a7d92b177eb";
    }
    const { memories, playingID, onPlay } = t0;
    let t1;
    if ($[1] !== memories || $[2] !== onPlay || $[3] !== playingID) {
        let t2;
        if ($[5] !== onPlay || $[6] !== playingID) {
            t2 = ({
                "Timeline[memories.map()]": (memory)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$MemoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        memory: memory,
                        isPlaying: playingID === memory.$id,
                        disabled: playingID !== null && playingID !== memory.$id,
                        onPlayClick: {
                            "Timeline[memories.map() > <MemoryCard>.onPlayClick]": ()=>onPlay(memory)
                        }["Timeline[memories.map() > <MemoryCard>.onPlayClick]"]
                    }, memory.$id, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx",
                        lineNumber: 30,
                        columnNumber: 47
                    }, this)
            })["Timeline[memories.map()]"];
            $[5] = onPlay;
            $[6] = playingID;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = memories.map(t2);
        $[1] = memories;
        $[2] = onPlay;
        $[3] = playingID;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-4 py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
                children: t1
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx",
                lineNumber: 50,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
}
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HomeClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "9653a6c2d6e2f5fd6472c7a33ce792bbce483049ec265dc78ce80af131070489") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9653a6c2d6e2f5fd6472c7a33ce792bbce483049ec265dc78ce80af131070489";
    }
    const { memories } = t0;
    const [playingID, setPlayingID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== playingID) {
        t1 = ({
            "HomeClient[handlePlay]": (memory)=>{
                if (!audioRef.current) {
                    audioRef.current = new Audio();
                }
                const audio = audioRef.current;
                if (playingID === memory.$id) {
                    audio.pause();
                    audio.currentTime = 0;
                    setPlayingID(null);
                    return;
                }
                audio.pause();
                audio.currentTime = 0;
                audio.src = `/audio/${memory.musicFileID}`;
                audio.play();
                setPlayingID(memory.$id);
            }
        })["HomeClient[handlePlay]"];
        $[1] = playingID;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handlePlay = t1;
    let t2;
    if ($[3] !== memories) {
        t2 = memories.reduce(_HomeClientMemoriesReduce, {});
        $[3] = memories;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const memoriesByYear = t2;
    let t3;
    let t4;
    let t5;
    if ($[5] !== handlePlay || $[6] !== memoriesByYear || $[7] !== playingID) {
        const years = Object.keys(memoriesByYear).sort();
        t3 = "bg-[#FFF1E6]";
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center text-2xl font-semibold p-4",
                children: "Memories In Time"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                lineNumber: 63,
                columnNumber: 12
            }, this);
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        t5 = years.map({
            "HomeClient[years.map()]": (year_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-center text-xl font-semibold",
                            children: year_0
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                            lineNumber: 69,
                            columnNumber: 62
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            memories: memoriesByYear[Number(year_0)],
                            playingID: playingID,
                            onPlay: handlePlay
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                            lineNumber: 69,
                            columnNumber: 125
                        }, this)
                    ]
                }, year_0, true, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                    lineNumber: 69,
                    columnNumber: 44
                }, this)
        }["HomeClient[years.map()]"]);
        $[5] = handlePlay;
        $[6] = memoriesByYear;
        $[7] = playingID;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-center text-xl font-semibold",
            children: "2026"
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-lg",
            children: "Hello, Bubby!"
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
    } else {
        t6 = $[12];
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-vw flex justify-center items-center mx-2 p-10 bg-white rounded-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-center text-xl font-semibold mt-1",
                children: "COMING SOON!!"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                lineNumber: 95,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t3 || $[16] !== t4 || $[17] !== t5) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    return t9;
}
_s(HomeClient, "RqofjXd8SEA1ppB8slJMV3XssaI=");
_c = HomeClient;
function _HomeClientMemoriesReduce(acc, memory_0) {
    const year = new Date(memory_0.date).getFullYear();
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(memory_0);
    return acc;
}
var _c;
__turbopack_context__.k.register(_c, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Album%20with%20Babi_memories-with-babi_src_49e04613._.js.map