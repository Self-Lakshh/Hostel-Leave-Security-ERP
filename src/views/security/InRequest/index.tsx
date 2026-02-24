import { toast } from 'sonner'
import { apiGetOutRequests, apiUpdateRequestStatus } from '@/services/Security'
import SearchBar from '../components/SearchBar'
import FilterTableByDate from '../components/FilterTableByDate'
import ExportButton from '../components/ExportButton'
import SecurityTable from '../components/SecurityTable'
import { useSecurityRequests } from '../components/useSecurityRequests'

const InRequest = () => {
    const {
        data,
        loading,
        setSearchTerm,
        setDateRange,
        handleExport,
        refresh
    } = useSecurityRequests({
        fetchFn: apiGetOutRequests,
        pageName: 'Inward Requests',
    })

    const handleInAction = async (requestId: string) => {
        try {
            const resp = await apiUpdateRequestStatus({
                requestId,
                status: 'in',
            })
            if (resp) {
                toast.success('Movement marked as IN')
                refresh()
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error('Update failed')
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] w-full bg-gray-50/30 overflow-hidden p-6 gap-6">
            {/* Div 1: Controls & Header Box */}
            <div className="flex-shrink-0 flex flex-col gap-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                {/* Row 1: Title */}
                <div className="pb-3 border-b border-gray-300">
                    <h1 className="text-base font-bold text-black uppercase tracking-wide">
                        In Entry
                    </h1>
                </div>

                {/* Row 2: Actions */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <SearchBar onSearch={setSearchTerm} />
                    <div className="flex items-center gap-3">
                        <FilterTableByDate onDateChange={(from, to) => setDateRange({ from, to })} />
                    </div>
                </div>
            </div>

            {/* Div 2: Table Box */}
            <div className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col min-h-0 overflow-hidden">
                <SecurityTable
                    data={data}
                    loading={loading}
                    actionType="in"
                    onAction={handleInAction}
                    showActualOut={true}
                />
            </div>
        </div>
    )
}

export default InRequest