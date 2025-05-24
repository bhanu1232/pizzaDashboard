'use client';

import { useState } from 'react';

// Mock data for pizza orders
const mockOrders = [
    {
        id: 'PZA001',
        customerName: 'John Doe',
        pizzaType: 'Margherita',
        quantity: 2,
        orderDate: '2024-03-23 14:30',
        status: 'Delivered',
    },
    {
        id: 'PZA002',
        customerName: 'Jane Smith',
        pizzaType: 'Pepperoni',
        quantity: 1,
        orderDate: '2024-03-23 15:45',
        status: 'Preparing',
    },
    {
        id: 'PZA003',
        customerName: 'Bob Johnson',
        pizzaType: 'Veggie Supreme',
        quantity: 3,
        orderDate: '2024-03-23 16:15',
        status: 'Out for Delivery',
    },
    {
        id: 'PZA004',
        customerName: 'Alice Brown',
        pizzaType: 'Margherita',
        quantity: 1,
        orderDate: '2024-03-23 17:00',
        status: 'Pending',
    },
    {
        id: 'PZA005',
        customerName: 'Charlie Wilson',
        pizzaType: 'Pepperoni',
        quantity: 2,
        orderDate: '2024-03-23 17:30',
        status: 'Cancelled',
    },
];

// Status badge colors
const statusColors = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Preparing: 'bg-blue-100 text-blue-800',
    'Out for Delivery': 'bg-purple-100 text-purple-800',
    Delivered: 'bg-green-100 text-green-800',
    Cancelled: 'bg-red-100 text-red-800',
};

export default function Orders() {
    const [sortField, setSortField] = useState<string>('orderDate');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    // Sort and filter orders
    const sortedAndFilteredOrders = [...mockOrders]
        .filter((order) => statusFilter === 'all' || order.status === statusFilter)
        .sort((a, b) => {
            const aValue = a[sortField as keyof typeof a];
            const bValue = b[sortField as keyof typeof b];

            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
            }
            return aValue < bValue ? 1 : -1;
        });

    const handleSort = (field: string) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Status
                </label>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                    <option value="all">All Statuses</option>
                    {Object.keys(statusColors).map((status) => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('id')}
                            >
                                Order ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('customerName')}
                            >
                                Customer Name {sortField === 'customerName' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('pizzaType')}
                            >
                                Pizza Type {sortField === 'pizzaType' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('quantity')}
                            >
                                Quantity {sortField === 'quantity' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('orderDate')}
                            >
                                Order Date {sortField === 'orderDate' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('status')}
                            >
                                Status {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedAndFilteredOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.customerName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.pizzaType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.quantity}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.orderDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status as keyof typeof statusColors]
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 