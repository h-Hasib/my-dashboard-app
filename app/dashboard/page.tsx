import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

// Mock user data (simulating what reqres.in would return)
const MOCK_USER_DATA = {
  id: 2,
  email: 'eve.holt@reqres.in',
  first_name: 'Eve',
  last_name: 'Holt',
  avatar: 'https://reqres.in/img/faces/2-image.jpg',
};

async function getUserData() {
  // Check for auth token
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');

  if (!token) {
    redirect('/login');
  }

  // Return mock user data
  // In a real app, I'd fetch this from an API using the token
  return MOCK_USER_DATA;
}

export default async function DashboardPage() {
  const user = await getUserData();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-blue-600">
              Dashboard
            </h1>
            <LogoutButton />
          </div>

          <div className="flex items-center space-x-6">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full"
            />
            
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded">
            <p className="text-sm text-gray-700">
              ✅ You are successfully authenticated and viewing protected content!
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Token stored in HttpOnly cookie: {user.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}