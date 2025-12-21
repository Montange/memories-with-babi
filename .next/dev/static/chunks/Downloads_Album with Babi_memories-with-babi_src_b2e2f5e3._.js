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
const getImageUrl = (fileId)=>{
    const bucketId = ("TURBOPACK compile-time value", "693ed25500011cc40c48");
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"].getFileView(bucketId, fileId);
};
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
"use client";
;
;
;
;
;
function ImageCarousel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "bd90e7401527c20bf1c3451dd8ff822b2ebbb50b44bba0b2890ab52797ada047") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd90e7401527c20bf1c3451dd8ff822b2ebbb50b44bba0b2890ab52797ada047";
    }
    const { images, onImageClick } = t0;
    let t1;
    if ($[1] !== images || $[2] !== onImageClick) {
        let t2;
        if ($[4] !== onImageClick) {
            t2 = ({
                "ImageCarousel[images.map()]": (fileId)=>{
                    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(fileId);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: url,
                            alt: "Memory Image",
                            className: "w-full h-56 object-contain rounded-lg bg-[#FFC1CC]",
                            onClick: {
                                "ImageCarousel[images.map() > <img>.onClick]": ()=>onImageClick?.(fileId)
                            }["ImageCarousel[images.map() > <img>.onClick]"]
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                            lineNumber: 30,
                            columnNumber: 44
                        }, this)
                    }, fileId, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                        lineNumber: 30,
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
            lineNumber: 49,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MemoryCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "f34355b0e98be8b10e84fb254dbe4f94b1ffa29d95959d9be65210fbf05d26c3") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f34355b0e98be8b10e84fb254dbe4f94b1ffa29d95959d9be65210fbf05d26c3";
    }
    const { memory } = t0;
    const [expandedImageId, setExpandedImageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] !== memory.date) {
        t1 = new Date(memory.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        $[1] = memory.date;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const formattedDate = t1;
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 30
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            duration: 0.6
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "MemoryCard[<ImageCarousel>.onImageClick]": (fileId)=>setExpandedImageId(fileId)
        })["MemoryCard[<ImageCarousel>.onImageClick]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== memory.imageIds) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            images: memory.imageIds,
            onImageClick: t5
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[7] = memory.imageIds;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== formattedDate) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-[#6D4C41]",
            children: formattedDate
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = formattedDate;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== memory.title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold mt-1 text-[#6D4C41]",
            children: memory.title
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = memory.title;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== memory.description) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6D4C41] mt-2 leading-relaxed",
            children: memory.description
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[13] = memory.description;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t7 || $[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            whileInView: t3,
            transition: t4,
            className: "bg-white rounded-2xl shadow-md overflow-hidden w-full",
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t6;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== expandedImageId) {
        t12 = expandedImageId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                "MemoryCard[<motion.div>.onClick]": ()=>setExpandedImageId(null)
            }["MemoryCard[<motion.div>.onClick]"],
            className: "fixed inset-0 z-50 flex items-center justify-center bg-[#FFF1E6]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageUrl"])(expandedImageId),
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
                lineNumber: 130,
                columnNumber: 121
            }, this)
        }, "overlay", false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 122,
            columnNumber: 30
        }, this);
        $[22] = expandedImageId;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t12
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t11 || $[27] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t11,
                t13
            ]
        }, void 0, true);
        $[26] = t11;
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_s(MemoryCard, "q8VLik8dHvUQ4aeFuHlp5tRsL20=");
_c = MemoryCard;
var _c;
__turbopack_context__.k.register(_c, "MemoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Album%20with%20Babi_memories-with-babi_src_b2e2f5e3._.js.map