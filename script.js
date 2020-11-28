/* Header Menu */
const header = document.querySelector("#header")
const hElement = document.getElementById('header')


/* Detail Menu */
const detailMenu = document.getElementsByClassName("content-info")
const menu = document.getElementsByClassName("img")
const topnav = document.getElementById('topnav')
const topnavmenu = document.getElementById('topnav-menu')
const content = document.getElementById("content")
const footer = document.getElementById("footer")


content.style.width = '80%'
detailMenu[0].style.display = 'none'

var i;
for (i = 0; i < detailMenu.length; i++) {
  detailMenu[i].style.display = 'none'
}

function line_header(n) {
  line_menu = document.querySelectorAll("#header > span");
  for (i = 0; i < line_menu.length; i++) {
    line_menu[i].style.cursor = 'pointer'
    if (line_menu[i].classList[0] == menu[n].classList[1]) {
      line_menu[i].classList.add('lined')
    } else if (line_menu[i].classList[0] == 'Daftar Menu') {
      line_menu[i].classList.remove('lined')
    } else {
      line_menu[i].classList.remove('lined')
    }
  }
}

function showModal(n) {
  topnav.style.display = 'none'
  content.style.display = 'none'
  footer.style.display = 'none'

  var i;
  for (i = 0; i < detailMenu.length; i++) {
    detailMenu[i].style.display = 'none'
  }

  if (detailMenu[n].style.display === 'none') {
    detailMenu[n].style.display = 'flex'
  } else {
    detailMenu[n].style.display = 'none'
  }

}

function showDetailMenu(n) {

  if (screen.width <= 768) {
    showModal(n);
  } else {
    var i;
    for (i = 0; i < detailMenu.length; i++) {
      detailMenu[i].style.display = 'none'
    }

    for (i = 0; i < menu.length; i++) {
      if (menu[i].classList[1] == menu[n].classList[1]) {
        menu[i].style.display = 'flex'
      } else {
        menu[i].style.display = 'none'
      }
    }

    if (detailMenu[n].style.display === 'none') {
      detailMenu[n].style.display = 'flex'
      content.style.width = '40%'
      header.innerHTML = '<span class="hidangan" onclick="showMenu(0)">Hidangan</span>' +
        '<span class="minuman" onclick="showMenu(1)">Minuman</span>' + '<span class="tambahan" onclick="showMenu(2)">Tambahan</span>'
    } else {
      detailMenu[n].style.display = 'none'
      content.style.width = '80%'
      header.innerHTML = '<span>Daftar Menu</span><img src="img/logo-sindang-leret-black.png" alt="logo-sindang-leret-black" class="logo-black">'
    }

    line_header(n)
  }

}

function closeDetailMenu(n) {

  if (screen.width <= 768) {
    detailMenu[n].style.display = 'none'
    topnav.style.display = 'flex'
    content.style.display = 'flex'
    footer.style.display = 'flex'
  } else {
    detailMenu[n].style.display = 'none'
    content.style.width = '80%'
    header.innerHTML = '<span>Daftar Menu</span><img src="img/logo-sindang-leret-black.png" alt="logo-sindang-leret-black" class="logo-black">'
    for (i = 0; i < menu.length; i++) {
      menu[i].style.display = 'flex'
    }
  }
}

function showMenu(n) {
  var i
  for (i = 0; i < menu.length; i++) {
    if (n === 0 && menu[i].classList[1] == 'hidangan') {
      menu[i].style.display = 'flex'
      line_header(i)
    } else if (n === 1 && menu[i].classList[1] == 'minuman') {
      menu[i].style.display = 'flex'
      line_header(i)
    } else if (n === 2 && menu[i].classList[1] == 'tambahan') {
      menu[i].style.display = 'flex'
      line_header(i)
    } else {
      menu[i].style.display = 'none'
    }
  }

}

function showTopNavMenu() {
  if (topnavmenu.style.display === 'none') {
    topnavmenu.style.display = 'flex'
  } else {
    topnavmenu.style.display = 'none'
  }
}
