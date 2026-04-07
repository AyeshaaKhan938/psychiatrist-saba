import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function AdminPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-serif text-gray-800 mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Booking Management</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Patient</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Contact</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Type / Session</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Message</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 text-sm text-gray-600">
                    {booking.createdAt.toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-gray-800">{booking.name}</p>
                    <p className="text-sm text-gray-500">{booking.email}</p>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{booking.phone}</td>
                  <td className="p-4">
                    <p className="text-sm text-gray-800">{booking.enquiryType}</p>
                    <span className="inline-block px-2 py-1 mt-1 text-xs bg-gray-100 rounded text-gray-600">
                      {booking.sessionPreference}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 max-w-xs truncate" title={booking.message || ''}>
                    {booking.message || '-'}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#eef3ec] text-[#4a6741]">
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No bookings yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
