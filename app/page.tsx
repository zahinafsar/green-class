'use client';

import { User } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      setEmail('');
      setPassword('');
      fetchUsers();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-2 border rounded"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground p-2 rounded hover:opacity-90"
            >
              Add User
            </button>
          </div>
        </form>

        {error && (
          <div className="text-destructive mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {users.map((user) => (
            <div 
              key={user.id}
              className="p-4 border rounded"
            >
              <p className="font-medium">{user.email}</p>
              <p className="text-sm text-muted-foreground">Role: {user.role}</p>
              <p className="text-xs text-muted-foreground">
                Created: {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
