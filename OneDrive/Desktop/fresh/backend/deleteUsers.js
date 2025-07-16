const { supabase } = require('./supabaseClient');

// ✅ پاکسازی کل یوزرها (حتی ادمین هم میپره، اگه نمیخوای بگو!)
(async () => {
  const { error } = await supabase
    .from('users')
    .delete()
    .gt('id', 0); // 👈 هرچی ID بزرگتر از 0 باشه، نابودش میکنه 🔥

  if (error) {
    console.error('❌ خطا در حذف کاربران:', error);
  } else {
    console.log('✅ همه کاربران حذف شدند');
  }
})();

