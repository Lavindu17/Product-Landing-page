// Test the Contact form functionality
// Open browser console and run: testContactForm()

window.testContactForm = function() {
  console.log('🧪 Testing Contact Form...');
  
  // Fill out the form
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  
  if (nameInput && emailInput && phoneInput && messageInput) {
    nameInput.value = 'Test User';
    emailInput.value = 'test@example.com';
    phoneInput.value = '123-456-7890';
    messageInput.value = 'This is a test message';
    
    // Dispatch input events to trigger React state updates
    nameInput.dispatchEvent(new Event('input', { bubbles: true }));
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
    phoneInput.dispatchEvent(new Event('input', { bubbles: true }));
    messageInput.dispatchEvent(new Event('input', { bubbles: true }));
    
    console.log('✅ Form fields populated');
    console.log('📝 Now submit the form to test Supabase connection');
  } else {
    console.error('❌ Form fields not found');
  }
};

console.log('🚀 Test function loaded. Run testContactForm() to test the form.');
