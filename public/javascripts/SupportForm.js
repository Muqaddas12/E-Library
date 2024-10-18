const supportmassage=document.getElementById('support-massage')


    window.onload = () => {
  const msg = new URLSearchParams(window.location.search)

  supportmassage.innerHTML = msg.toString().replace(/\+|=/g, ' ')

}

