import React from "react";

export default function Models() {
  const services = [
    { name: "Auth Service", status: "running", version: "v1.4.2" },
    { name: "Order Service", status: "degraded", version: "v2.1.0" },
    { name: "Inventory", status: "running", version: "v3.0.1" },
    { name: "Billing", status: "stopped", version: "v1.0.0" },
  ];

  const metrics = [
    { title: "Active Orders", value: "1,284" },
    { title: "Open Invoices", value: "276" },
    { title: "Stock Alerts", value: "14" },
    { title: "API Latency", value: "86 ms" },
  ];

  const recent = [
    { id: 1, text: "Order #4521 created", time: "2m" },
    { id: 2, text: "Inventory low: SKU-1223", time: "10m" },
    { id: 3, text: "Payment failed: INV-887", time: "20m" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-72 bg-gray-850 border-r border-gray-800 p-6 hidden md:flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white">ERP</div>
            <div>
              <div className="text-sm font-semibold">MicroERP</div>
              <div className="text-xs text-gray-400">Micro-service dashboard</div>
            </div>
          </div>

          <nav className="flex-1 mt-4">
            <ul className="space-y-2 text-sm">
              <li className="px-3 py-2 rounded-md bg-gray-800">Overview</li>
              <li className="px-3 py-2 rounded-md hover:bg-gray-800">Services</li>
              <li className="px-3 py-2 rounded-md hover:bg-gray-800">Orders</li>
              <li className="px-3 py-2 rounded-md hover:bg-gray-800">Inventory</li>
              <li className="px-3 py-2 rounded-md hover:bg-gray-800">Billing</li>
              <li className="px-3 py-2 rounded-md hover:bg-gray-800">Logs</li>
              <li className="px-3 py-2 rounded-md hover:bg-gray-800">Settings</li>
            </ul>
          </nav>

          <div className="text-xs text-gray-500">v1.0.0</div>
        </aside>

        {/* Main area */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p className="text-sm text-gray-400">Overview — Micro-service status & key metrics</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gray-800 px-3 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h3.5a1 1 0 01.894.553L9.382 5H16a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                </svg>
                <div className="text-sm text-gray-300">Prod</div>
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-sm">HK</div>
            </div>
          </header>

          {/* Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-6">
            {/* Left column: metrics + services */}
            <div className="xl:col-span-3 lg:col-span-2 space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div key={m.title} className="p-4 bg-gray-800 rounded-xl border border-gray-800">
                    <div className="text-xs text-gray-400">{m.title}</div>
                    <div className="mt-2 text-xl font-semibold">{m.value}</div>
                    <div className="text-sm text-gray-500 mt-1">Updated just now</div>
                  </div>
                ))}
              </div>

              {/* Charts area (placeholders) */}
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-gray-850 rounded-xl border border-gray-800 h-56 flex items-center justify-center text-gray-500">API Traffic Chart (placeholder)</div>
                <div className="p-4 bg-gray-850 rounded-xl border border-gray-800 h-56 flex items-center justify-center text-gray-500">Orders Trend (placeholder)</div>
              </div>

              {/* Services table */}
              <div className="p-4 bg-gray-850 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Services</h2>
                  <div className="text-sm text-gray-400">Showing 4 services</div>
                </div>

                <div className="overflow-auto">
                  <table className="w-full text-sm table-auto">
                    <thead className="text-gray-400 text-xs text-left border-b border-gray-800">
                      <tr>
                        <th className="pb-3">Service</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Version</th>
                        <th className="pb-3">Uptime</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-200">
                      {services.map((s) => (
                        <tr key={s.name} className="border-b border-gray-800">
                          <td className="py-3">{s.name}</td>
                          <td className="py-3">
                            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${s.status === 'running' ? 'bg-green-800 text-green-300' : s.status === 'degraded' ? 'bg-yellow-900 text-yellow-300' : 'bg-red-900 text-red-300'}`}>
                              {s.status}
                            </span>
                          </td>
                          <td className="py-3">{s.version}</td>
                          <td className="py-3">99.9%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right column: activity + quick actions */}
            <aside className="space-y-6">
              <div className="p-4 bg-gray-850 rounded-xl border border-gray-800">
                <h3 className="text-lg font-medium mb-3">Quick actions</h3>
                <div className="flex flex-col gap-2">
                  <button className="w-full text-left px-3 py-2 rounded bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm">Restart Service</button>
                  <button className="w-full text-left px-3 py-2 rounded bg-gray-800 text-sm">Scale Service</button>
                  <button className="w-full text-left px-3 py-2 rounded bg-gray-800 text-sm">Open Logs</button>
                </div>
              </div>

              <div className="p-4 bg-gray-850 rounded-xl border border-gray-800">
                <h3 className="text-lg font-medium mb-3">Service status</h3>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((s) => (
                    <div key={s.name} className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded">
                      <div className="text-sm">{s.name}</div>
                      <div className="text-xs text-gray-300">{s.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gray-850 rounded-xl border border-gray-800">
                <h3 className="text-lg font-medium mb-3">Recent activity</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {recent.map((r) => (
                    <li key={r.id} className="flex items-center justify-between">
                      <div>{r.text}</div>
                      <div className="text-xs text-gray-500">{r.time}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gray-850 rounded-xl border border-gray-800">
                <h3 className="text-lg font-medium mb-3">Environment</h3>
                <div className="text-sm text-gray-300">Region: ap-southeast-1</div>
                <div className="text-sm text-gray-300 mt-1">Cluster: cluster-a</div>
              </div>
            </aside>
          </section>

          {/* Footer */}
          <footer className="mt-8 text-xs text-gray-500">© MicroERP</footer>
        </main>
      </div>
    </div>
  );
}
