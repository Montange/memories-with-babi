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
"[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/src/lib/appwrite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Album with Babi/memories-with-babi/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdminPage() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadedImageIds, setUploadedImageIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const databaseId = ("TURBOPACK compile-time value", "693ecf540006482697a0");
    const collectionId = ("TURBOPACK compile-time value", "Memories");
    const bucketId = ("TURBOPACK compile-time value", "693ed25500011cc40c48");
    async function handleFileUpload(e) {
        setError(null);
        if (!e.target.files?.length) return;
        setUploading(true);
        try {
            const files = Array.from(e.target.files);
            const uploadedIds = [];
            for (const file of files){
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"].createFile(bucketId, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ID"].unique(), file);
                uploadedIds.push(response.$id);
            }
            setUploadedImageIds((prev)=>[
                    ...prev,
                    ...uploadedIds
                ]);
            setMessage("Files uploaded successfully!");
        } catch (err) {
            console.error(err);
            setError("Failed to upload one or more files.");
        } finally{
            setUploading(false);
            e.target.value = ""; // Reset file input
        }
    }
    async function handleSubmit(e_0) {
        e_0.preventDefault();
        setMessage(null);
        setError(null);
        if (!title || !date) {
            setError("Title and date are required.");
            return;
        }
        try {
            const isoDate = new Date(date).toISOString();
            const newMemory = {
                title,
                description,
                date: isoDate,
                imageIds: uploadedImageIds,
                isPublished: true // <-- add this
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$src$2f$lib$2f$appwrite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["databases"].createDocument(databaseId, collectionId, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ID"].unique(), newMemory);
            setMessage("Memory added successfully!");
            // Reset form fields
            setTitle("");
            setDescription("");
            setDate("");
            setUploadedImageIds([]);
        } catch (err_0) {
            console.error(err_0);
            setError("Failed to add memory.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6 text-center",
                children: "Add New Memory"
            }, void 0, false, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col",
                        children: [
                            "Title ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: title,
                                onChange: (e_1)=>setTitle(e_1.target.value),
                                required: true,
                                className: "border border-gray-300 rounded p-2",
                                placeholder: "Memory title"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col",
                        children: [
                            "Description",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description,
                                onChange: (e_2)=>setDescription(e_2.target.value),
                                rows: 4,
                                className: "border border-gray-300 rounded p-2",
                                placeholder: "Memory description"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col",
                        children: [
                            "Date ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 87,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "datetime-local",
                                value: date,
                                onChange: (e_3)=>setDate(e_3.target.value),
                                required: true,
                                className: "border border-gray-300 rounded p-2"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex flex-col",
                        children: [
                            "Upload Images",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                multiple: true,
                                accept: "image/*",
                                onChange: handleFileUpload,
                                disabled: uploading,
                                className: "border border-gray-300 rounded p-2"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600",
                        children: "Uploading images..."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 96,
                        columnNumber: 23
                    }, this),
                    uploadedImageIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold",
                                children: "Uploaded Image IDs:"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc list-inside max-h-32 overflow-auto",
                                children: uploadedImageIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-sm break-all",
                                        children: id
                                    }, id, false, {
                                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 43
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 98,
                        columnNumber: 41
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 font-semibold",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 105,
                        columnNumber: 19
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-600 font-semibold",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 106,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Album__with__Babi$2f$memories$2d$with$2d$babi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: uploading,
                        className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded disabled:opacity-50",
                        children: "Add Memory"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Album with Babi/memories-with-babi/src/app/admin/page.tsx",
        lineNumber: 72,
        columnNumber: 10
    }, this);
}
_s(AdminPage, "rEBUWbOBej29rvDiPs5iYCdzMBI=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Album%20with%20Babi_memories-with-babi_src_ad06598f._.js.map