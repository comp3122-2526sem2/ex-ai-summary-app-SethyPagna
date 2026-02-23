import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

export default function AuthPage() {
  const { login } = useAuth();

  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'signup') {
        const emailTrimmed = email.trim().toLowerCase();
        const nameTrimmed = name.trim().toLowerCase();

        const hash = await bcrypt.hash(password, 10);

        const { data, error } = await supabase
          .from('users')
          .insert({
            email: emailTrimmed,
            name: nameTrimmed,
            password: hash,
          })
          .select()
          .single();

        if (error) {
          if (error.message.includes('email')) {
            throw new Error('Email already in use.');
          }
          if (error.message.includes('name')) {
            throw new Error('Username already taken.');
          }
          throw new Error('Unable to create account.');
        }

        login(data);

      } else {
        const identifier = email.trim().toLowerCase(); // can be email OR username

        const { data, error } = await supabase
          .from('users')
          .select('*')
          .or(`email.eq.${identifier},name.eq.${identifier}`)
          .single();

        if (error || !data) throw new Error('Account not found.');

        const match = await bcrypt.compare(password, data.password);
        if (!match) throw new Error('Incorrect password.');

        login(data);
      }

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>

            {mode === 'signup' && (
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  required
                  minLength={3}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Choose a unique username"
                />
              </div>
            )}

            <div className="form-group">
              <label>Email or Username</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email or username"
              />
            </div>

            {mode === 'signup' && (
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            )}

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="auth-switch" style={{ marginTop: 16 }}>
            {mode === 'login' ? (
              <>
                No account?{' '}
                <button onClick={() => setMode('signup')}>
                  Create one
                </button>
              </>
            ) : (
              <>
                Already have one?{' '}
                <button onClick={() => setMode('login')}>
                  Sign In
                </button>
              </>
            )}
          </div>
          {/* Note about account credentials */}
          <div className="account-credentials" style={{ marginTop: 16, fontSize: '12px', color: '#666' }}>
            <p>Access ready account:</p>
            <p>Username: <strong>user</strong></p>
            <p>Password: <strong>user123</strong></p>
            <p>Email: <strong>user@gmail.com</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}