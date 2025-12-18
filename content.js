function clickFollowingTab() {
  setTimeout(() => {
    // Find all tab elements
    const tabs = document.querySelectorAll('div[role="tab"]');
    
    for (let tab of tabs) {
      // Check if this tab contains "Following" text
      if (tab.textContent.includes('Following')) {
        // Only click if it's not already selected
        if (tab.getAttribute('aria-selected') === 'false') {
          tab.click();
          console.log('Clicked Following tab');
          break;
        }
      }
    }
  }, 1500); // Increased delay slightly to ensure page is loaded
}

// Run on initial page load
clickFollowingTab();

// Run when navigating (Twitter is a SPA)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    clickFollowingTab();
  }
}).observe(document, { subtree: true, childList: true });