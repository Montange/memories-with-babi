module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "databases",
    ()=>databases,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/appwrite/dist/esm/sdk.js [app-ssr] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Client"]();
client.setEndpoint(("TURBOPACK compile-time value", "https://sgp.cloud.appwrite.io/v1")).setProject(("TURBOPACK compile-time value", "693ece3900052a7c4caf"));
const databases = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Databases"](client);
const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Storage"](client);
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrl",
    ()=>getImageUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-ssr] (ecmascript)");
;
function getImageUrl(fileId) {
    const bucketId = ("TURBOPACK compile-time value", "693ed25500011cc40c48");
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].getFileView(bucketId, fileId);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/imageHandle.ts [app-ssr] (ecmascript)");
;
;
;
;
function ImageCarousel({ images, onImageClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
        spaceBetween: 10,
        slidesPerView: 1,
        children: images.map((fileId, i)=>{
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$imageHandle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageUrl"])(fileId);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: url,
                    alt: `Image ${i + 1}`,
                    className: "w-full h-56 object-contain rounded-lg bg-[#FFC1CC]",
                    onClick: ()=>onImageClick?.(url)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, this)
            }, i, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/ImageCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MemoryCard({ memory, isPlaying, disabled, onPlayClick }) {
    const [expandedImage, setExpandedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const musicIcons = [
        "/TOFI.png",
        "/TOBI.png"
    ];
    const formattedDate = new Date(memory.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const baseIcon = musicIcons[memory.$id.charCodeAt(memory.$id.length - 1) % musicIcons.length];
    const playingIcon = musicIcons.find((icon)=>icon !== baseIcon);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                className: "bg-white rounded-2xl shadow-md overflow-hidden w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$ImageCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        images: memory.imageIds,
                        onImageClick: (img)=>setExpandedImage(img)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            memory.musicFileID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: isPlaying ? playingIcon : baseIcon,
                                    alt: "Play Button",
                                    onClick: onPlayClick,
                                    className: "absolute top-[-15px] right-0 w-10 cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#6D4C41]",
                                children: formattedDate
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mt-1 text-[#6D4C41]",
                                children: memory.title
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#6D4C41] mt-2 leading-relaxed",
                                children: memory.description
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: expandedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setExpandedImage(null),
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-[#FFF1E6]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
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
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                }, "overlay", false, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$MemoryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/MemoryCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Timeline({ memories, playingID, onPlay }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto px-4 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
            children: memories.map((memory)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$MemoryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    memory: memory,
                    isPlaying: playingID === memory.$id,
                    disabled: playingID !== null && playingID !== memory.$id,
                    onPlayClick: ()=>onPlay(memory)
                }, memory.$id, false, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/components/Timeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function HomeClient({ memories }) {
    const [playingID, setPlayingID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handlePlay = (memory)=>{
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
    };
    const memoriesByYear = memories.reduce((acc, memory)=>{
        const year = new Date(memory.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(memory);
        return acc;
    }, {});
    const years = Object.keys(memoriesByYear).sort();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#FFF1E6]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center text-2xl font-semibold p-4",
                children: "Memories In Time"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-center text-xl font-semibold",
                            children: year
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            memories: memoriesByYear[Number(year)],
                            playingID: playingID,
                            onPlay: handlePlay
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, year, true, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-center text-xl font-semibold",
                children: "2026"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-lg",
                children: "Hello, Bubby!"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-vw flex justify-center items-center mx-2 p-10 bg-white rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-center text-xl font-semibold mt-1",
                    children: "COMING SOON!!"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/HomeClient.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5f20c8b4._.js.map