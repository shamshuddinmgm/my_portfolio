document.getElementById('theme-selector').addEventListener('change', function() {
  const theme = this.value;
  document.documentElement.setAttribute('data-theme', theme);
});