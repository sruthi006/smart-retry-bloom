import { i as __toESM } from "../_runtime.mjs";
import { n as api } from "./client-C3Myktu5.mjs";
import { a as useQueryClient, o as require_react, s as require_jsx_runtime, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { a as Play, c as CloudUpload } from "../_libs/lucide-react.mjs";
import { a as LoadingBlock, d as formatPct, i as KpiCard, o as PageHeader, s as Panel, u as formatNumber } from "./format-C6bmXaSy.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dataset-selection-CcgErBsS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DatasetSelection() {
	const queryClient = useQueryClient();
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [validationError, setValidationError] = (0, import_react.useState)(null);
	const uploadMutation = useMutation({
		mutationFn: (file) => api.uploadAndInfer(file),
		onSuccess: () => queryClient.invalidateQueries({ predicate: (query) => [
			"dashboard",
			"business-impact",
			"recovery-breakdown",
			"retry-distribution",
			"confidence",
			"transactions",
			"audit"
		].includes(String(query.queryKey[0])) })
	});
	const demoMutation = useMutation({
		mutationFn: () => api.loadDemoDataset(),
		onSuccess: () => queryClient.invalidateQueries({ predicate: (query) => [
			"dashboard",
			"business-impact",
			"recovery-breakdown",
			"retry-distribution",
			"confidence",
			"transactions",
			"audit"
		].includes(String(query.queryKey[0])) })
	});
	const handleFileSelect = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (!file.name.endsWith(".csv")) {
			setValidationError("Only CSV files are accepted");
			return;
		}
		setValidationError(null);
		setSelectedFile(file);
	};
	const handleUpload = () => {
		if (!selectedFile) return;
		uploadMutation.mutate(selectedFile);
	};
	const handleDemo = () => {
		demoMutation.mutate();
	};
	const isProcessing = uploadMutation.isPending || demoMutation.isPending;
	if (uploadMutation.data || demoMutation.data) {
		const result = uploadMutation.data || demoMutation.data;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: "Inference results",
					title: result.dataset_source === "demo" ? "Demo dataset loaded" : "CSV uploaded and processed",
					description: result.dataset_source === "demo" ? `Processed ${formatNumber(result.total_records)} synthetic evaluation records` : `Processed ${formatNumber(result.total_records)} rows from your CSV`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Dataset Information",
					description: result.dataset_source === "demo" ? "Demo synthetic evaluation data" : "Uploaded CSV",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Data source:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: result.dataset_source === "demo" ? "Demo synthetic evaluation dataset" : "Uploaded CSV"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Total records:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: formatNumber(result.total_records)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Records processed:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: formatNumber(result.processed_records)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Failed records:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: result.failed_records > 0 ? "font-medium text-red-600" : "font-medium",
									children: formatNumber(result.failed_records)
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: "Eligible for retry",
							value: formatNumber(result.eligible_records),
							sub: `${formatPct(result.eligible_records / result.processed_records * 100, 1)} of records`,
							tone: "mint"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: "High confidence",
							value: formatNumber(result.eligible_by_confidence?.["High"] ?? 0),
							sub: "Recommended for retry",
							tone: "lavender"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
							label: "Avg retry timing",
							value: `${(result.avg_selected_retry_hours ?? 0).toFixed(1)}h`,
							sub: "Mean selected offset",
							tone: "sky"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							title: "Medium confidence",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-bold",
								children: formatNumber(result.eligible_by_confidence?.["Medium"] ?? 0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Records in medium tier"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							title: "Low confidence",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-bold",
								children: formatNumber(result.eligible_by_confidence?.["Low"] ?? 0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Stopped by policy"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							title: "Errors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `text-3xl font-bold ${result.errors.length > 0 ? "text-red-600" : ""}`,
								children: result.errors.length
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: result.errors.length > 0 ? "See errors below" : "No errors"
							})]
						})
					]
				}),
				result.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Errors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: result.errors.map((err, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-red-600 bg-red-50 p-2 rounded",
							children: err
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90",
						children: "View Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							uploadMutation.reset();
							demoMutation.reset();
							setSelectedFile(null);
						},
						className: "px-4 py-2 border border-border rounded-lg font-medium hover:bg-accent",
						children: "Select Different Dataset"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Get started",
				title: "Select your dataset",
				description: "Try the demo dataset or upload your own CSV of failed payments for analysis and retry optimization recommendations."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Try Demo Dataset",
					description: "Use our synthetic evaluation dataset (100k failed payments) to see Smart Retry in action.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Records:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "100,000 transactions"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Type:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Synthetic evaluation data"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Model:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Existing trained model"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Retrain:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-green-600",
											children: "No"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleDemo,
								disabled: isProcessing,
								className: "w-full flex items-center justify-center gap-2 px-4 py-3 bg-mint text-white rounded-lg font-medium hover:bg-mint/90 disabled:opacity-50 disabled:cursor-not-allowed",
								children: demoMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Processing..." }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Load Demo Dataset" })] })
							}),
							demoMutation.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-red-600 bg-red-50 p-2 rounded",
								children: demoMutation.error instanceof Error ? demoMutation.error.message : "Failed to load demo dataset"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Upload CSV",
					description: "Upload your own CSV file with failed payment data for Smart Retry analysis.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium",
									children: "Required columns:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "text-xs text-muted-foreground space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• amount_inr" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• decline_reason" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• payment_method" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• hour_of_day, day_of_month, day_of_week" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• customer_previous_success_rate" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• customer_previous_failure_count" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• days_since_last_successful_payment" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-2 border-dashed border-border rounded-lg p-6 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".csv",
									onChange: handleFileSelect,
									disabled: isProcessing,
									className: "hidden",
									id: "csv-upload"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "csv-upload",
									className: "cursor-pointer flex flex-col items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, {
											size: 32,
											className: "text-muted-foreground"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: selectedFile ? selectedFile.name : "Click to select CSV or drag and drop"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "CSV files only"
										})
									]
								})]
							}),
							validationError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-red-600 bg-red-50 p-2 rounded",
								children: validationError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleUpload,
								disabled: !selectedFile || isProcessing,
								className: "w-full flex items-center justify-center gap-2 px-4 py-3 bg-peach text-white rounded-lg font-medium hover:bg-peach/90 disabled:opacity-50 disabled:cursor-not-allowed",
								children: uploadMutation.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Uploading..." }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload and Analyze" })] })
							}),
							uploadMutation.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-red-600 bg-red-50 p-2 rounded",
								children: uploadMutation.error instanceof Error ? uploadMutation.error.message : "Failed to upload CSV"
							})
						]
					})
				})]
			}),
			isProcessing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBlock, { rows: 4 })
		]
	});
}
//#endregion
export { DatasetSelection as component };
