const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
<<<<<<< HEAD
      alert('Failed to log out.');
=======
      alert('You are not logged in');
>>>>>>> dev
    }
  };
  
  document.querySelector('#logoutBtn').addEventListener('click', logout);
  