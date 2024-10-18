const SearchInput=document.getElementById('search-input')
const SearchIcon=document.getElementById('search-icon')
const SearchForm=document.getElementById('search-form')
SearchIcon.addEventListener('click',()=>{
   SearchForm.action=`/user/SearchResults?${encodeURIComponent(SearchInput.value.trim())}`
   SearchForm.submit()
})

SearchForm.addEventListener('submit',()=>{
    SearchForm.action=`/user/SearchResults?${encodeURIComponent(SearchInput.value.trim())}`
})
