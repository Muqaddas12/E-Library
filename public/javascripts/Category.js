const selectedCategories = document.querySelectorAll('.category-name')
const form = document.getElementById('CategoryForm')

selectedCategories.forEach(category => {
  category.addEventListener('click', () => {
    let url ='/user/SelectedCategoryResults?'+encodeURIComponent(category.innerText
)

    form.action =url // Set the form action
    form.submit() // Submit the form
  })
})
