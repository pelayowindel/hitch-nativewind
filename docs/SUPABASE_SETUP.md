# Supabase Configuration Guide

## Setup Instructions

1. Go to [https://supabase.com](https://supabase.com) and create a new project
2. Once your project is created, go to Settings > API
3. Copy your project URL and anon/public key
4. Replace the values in `app.json`:

```json
"extra": {
  "supabaseUrl": "https://your-project.supabase.co",
  "supabaseAnonKey": "your-anon-key-here"
}
```

## Usage Example

Import the `useSupabase` hook in any component:

```tsx
import { useSupabase } from '../contexts/SupabaseContext';

export default function MyComponent() {
  const { user, session, isLoading, signOut } = useSupabase();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {user ? (
        <>
          <Text>Welcome, {user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : (
        <Text>Not logged in</Text>
      )}
    </View>
  );
}
```

## Direct Supabase Client Usage

You can also import the supabase client directly:

```tsx
import { supabase } from '../lib/supabase';

// Query data
const { data, error } = await supabase
  .from('your_table')
  .select('*');

// Insert data
const { data, error } = await supabase
  .from('your_table')
  .insert({ column: 'value' });

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'email@example.com',
  password: 'password',
});

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'email@example.com',
  password: 'password',
});
```

## Environment Variables

Your Supabase credentials are stored in `app.json` under the `extra` field.
Make sure to add `app.json` to `.gitignore` if you commit sensitive keys,
or use a separate configuration file for production.
