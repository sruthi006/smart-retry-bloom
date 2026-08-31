import { i as __toESM } from "../_runtime.mjs";
import { r as cn, t as USING_MOCK_DATA } from "./client-C3Myktu5.mjs";
import { i as QueryClientProvider, o as require_react, s as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ScrollText, l as ChartColumn, o as LayoutDashboard, r as Sparkles, t as Upload, u as Activity } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Vmh9cOxE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DPJLrQ4h.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var NAV = [
	{
		to: "/dataset-selection",
		label: "Select Dataset",
		icon: Upload
	},
	{
		to: "/",
		label: "Overview",
		icon: LayoutDashboard
	},
	{
		to: "/recovery-agent",
		label: "Recovery Agent",
		icon: Sparkles
	},
	{
		to: "/business-impact",
		label: "Business Impact",
		icon: ChartColumn
	},
	{
		to: "/audit-trail",
		label: "Audit Trail",
		icon: ScrollText
	}
];
function AppShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen page-canvas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen w-full max-w-[1600px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-screen w-[264px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar/70 px-5 py-7 backdrop-blur-sm lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-9 flex flex-col gap-1",
						children: NAV.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							activeOptions: { exact: to === "/" },
							className: "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
							activeProps: { className: "bg-accent text-accent-foreground shadow-[var(--shadow-soft)]" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								strokeWidth: 1.9
							}), label]
						}, to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground",
								children: "Prototype notice"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[11px] leading-relaxed text-muted-foreground",
								children: "Smart Retry is a decision-simulation prototype. It is not connected to any live payment gateway."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[11px] text-muted-foreground",
								children: [
									"Data source:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: USING_MOCK_DATA ? "Mock service layer" : "FastAPI backend"
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { compact: true })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex gap-1 overflow-x-auto lg:hidden",
								children: NAV.map(({ to, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to,
									activeOptions: { exact: to === "/" },
									className: "whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground",
									activeProps: { className: "bg-accent text-accent-foreground" },
									children: label
								}, to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-auto flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIndicator, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 px-6 py-8 lg:px-10 lg:py-10",
						children
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "border-t border-border px-6 py-5 text-xs text-muted-foreground lg:px-10",
						children: "Smart Retry — synthetic-data policy simulation. Figures shown are simulated outcomes, not production payment performance."
					})
				]
			})]
		})
	});
}
function BrandMark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
				className: "size-5",
				strokeWidth: 2.1
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-[15px] font-semibold text-foreground",
				children: "Smart Retry"
			}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[11px] text-muted-foreground",
				children: "AI Revenue Recovery Agent"
			})]
		})]
	});
}
function StatusIndicator({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-border bg-amber-soft px-3 py-1.5 text-[11px] font-medium text-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative flex size-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full rounded-full bg-amber opacity-70" })
		}), "Simulation Environment"]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Smart Retry"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/smart-retry-favicon.svg",
				type: "image/svg+xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-right" })]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-DKRBuJny.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Smart Retry — AI Revenue Recovery Command Center" },
		{
			name: "description",
			content: "Simulated command center comparing fixed-schedule retries with AI-timed Smart Retry recovery on failed payments."
		},
		{
			property: "og:title",
			content: "Smart Retry — AI Revenue Recovery Command Center"
		},
		{
			property: "og:description",
			content: "Simulated command center comparing fixed-schedule retries with AI-timed Smart Retry recovery on failed payments."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./audit-trail-CfyDyodB.mjs");
var Route$3 = createFileRoute("/audit-trail")({
	head: () => ({ meta: [
		{ title: "Audit Trail — Smart Retry" },
		{
			name: "description",
			content: "Step-by-step decision log for every simulated retry: eligibility, scoring, recommendation, confidence and bounded action."
		},
		{
			property: "og:title",
			content: "Audit Trail — Smart Retry"
		},
		{
			property: "og:description",
			content: "Step-by-step decision log for every simulated retry, from eligibility check to bounded recovery action."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./business-impact-nvZ6gpOi.mjs");
var Route$2 = createFileRoute("/business-impact")({
	head: () => ({ meta: [
		{ title: "Business Impact — Smart Retry" },
		{
			name: "description",
			content: "Simulated revenue impact of AI-timed payment retries: incremental revenue, lift, and breakdowns by decline reason, method and amount band."
		},
		{
			property: "og:title",
			content: "Business Impact — Smart Retry"
		},
		{
			property: "og:description",
			content: "Simulated revenue impact of AI-timed payment retries, with breakdowns by decline reason, payment method and amount band."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./dataset-selection-CcgErBsS.mjs");
var Route$1 = createFileRoute("/dataset-selection")({
	head: () => ({ meta: [{ title: "Dataset Selection — Smart Retry" }, {
		name: "description",
		content: "Choose a dataset to analyze: try the demo or upload your own CSV."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./recovery-agent-BwJIXr6r.mjs");
var Route = createFileRoute("/recovery-agent")({
	head: () => ({ meta: [
		{ title: "Recovery Agent — Smart Retry" },
		{
			name: "description",
			content: "Pick a failed payment and watch the agent score retry windows, recommend the best time, and show confidence."
		},
		{
			property: "og:title",
			content: "Recovery Agent — Smart Retry"
		},
		{
			property: "og:description",
			content: "Score retry windows, recommend the best retry time based on ML confidence, and display the decision."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AuditTrailRoute: Route$3.update({
		id: "/audit-trail",
		path: "/audit-trail",
		getParentRoute: () => Route$5
	}),
	BusinessImpactRoute: Route$2.update({
		id: "/business-impact",
		path: "/business-impact",
		getParentRoute: () => Route$5
	}),
	DatasetSelectionRoute: Route$1.update({
		id: "/dataset-selection",
		path: "/dataset-selection",
		getParentRoute: () => Route$5
	}),
	RecoveryAgentRoute: Route.update({
		id: "/recovery-agent",
		path: "/recovery-agent",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
