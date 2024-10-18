const sideMenu = document.getElementById('header-menu')
const sidebarToggle = document.getElementById('sidebar-toggle')
const profileMenu = document.getElementById('toggle-profile-menu')
const profileToggle = document.getElementById('profile-pic')

// Initialize sidebar content
sidebarToggle.innerHTML = `
  <ul>
    <li><a href='/Dashboard'>Dashboard</a></li>
    <li><a href='/Explore'>Explore</a></li>
    <li><a href='#'>Library</a></li>
    <li><a href='#'>Authors</a></li>
    <li><a href='#'>Suggestions</a></li>
    <li><a href='#'>Reviews</a></li>
    <li><a href='#'>Activity</a></li>
    <li><a href='#'>Settings</a></li>
    <li><a href='#'>Support</a></li>
  </ul>
`

// Initialize profile menu content
profileMenu.innerHTML = `
  <div class='profile-popup'>
    <div class='User-name'><h4>Muqaddasmalik781@gmail.com</h4></div>
    <div class='user-profile-icon' id='profile-icon'>
      <img src='./images/sunny.jpg' id='profile-pic' />
    </div>
    <div class='User-name'><h4>Hi, Muqaddas</h4></div>
    <div class='account-options'>
      <div class='left-option'>
        <img src='./images/user-avatar.png' id='left-option-icon' />
        <span>Edit Profile</span>
      </div>
      <div class='right-option'>
        <img src='./images/logout.png' id='right-option-icon' />
        <span>Sign out</span>
      </div>
    </div>
    <div class='popup-menu'>
      <div class='safe-search'>Safe Search</div>
      <div class='user-history'>History</div>
      <div class='language'>Language</div>
      <div class='more-settings'>Saved Books</div>
    </div>
  </div>
`

// Toggle sidebar
sideMenu.addEventListener('click', () => {
  const isVisible = sidebarToggle.style.display === 'block'
  sidebarToggle.style.display = isVisible ? 'none' : 'block'
})

// Toggle profile menu
profileToggle.addEventListener('click', () => {
  const isVisible = profileMenu.style.display === 'block'
  profileMenu.style.display = isVisible ? 'none' : 'block'
})
