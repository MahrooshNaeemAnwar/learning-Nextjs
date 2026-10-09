export default function DashboardLoading() {
    return (
        <div className="space-y-4">
            <div className="h-8 rounded bg-gray-200 w-1/4 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-32 rounded bg-gray-200 animate-pulse"></div>
                ))}
            </div>
            <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
    );
}