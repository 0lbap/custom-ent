var color = "#1a8547";
var lightColor = "#4fb078";
var darkColor = "#186339";
var bgColor = "#efffef"; //e1ffe1

function refresh() {
  document.getElementsByClassName('js')[0].style.backgroundColor = bgColor;
  document.body.style.backgroundColor = bgColor;

  var barSiteName = document.getElementsByClassName('h5-like bar__sitename');
  barSiteName[0].innerHTML = barSiteName[0].innerHTML + " [custom-ent loaded]";
  barSiteName[0].style.color = "white";
  barSiteName[0].style.fontFamily = "'Segoe Print','Open Sans',sans-serif";

  var avatarIconMail = document.getElementsByClassName('avatar--e');
  for (var i = 0; i < avatarIconMail.length; i++) {
    avatarIconMail[i].style.backgroundColor = color;
  };

  var header = document.getElementsByClassName('header');
  header[0].style.backgroundColor = color;

  var bar = document.getElementsByClassName('bar');
  bar[0].style.backgroundColor = color;

  var menu = document.getElementsByClassName('menu');
  menu[0].style.backgroundColor = color;

  var burger = document.getElementsByClassName('burger');
  burger[0].style.backgroundColor = darkColor;

  var a = document.getElementsByTagName('a');
  for (var i = 0; i < a.length; i++) {
    a[i].style.color = color;
    a[i].style.borderColor = lightColor;
  };

  var btnPrimary = document.getElementsByClassName('btn--primary');
  for (var i = 0; i < btnPrimary.length; i++) {
    btnPrimary[i].style.backgroundColor = lightColor;
    btnPrimary[i].style.color = "white";
  };

  var servicesListGroupName = document.getElementsByClassName('services-list__group-name');
  for (var i = 0; i < servicesListGroupName.length; i++) {
    servicesListGroupName[i].style.color = "white";
  };

  var label = document.getElementsByClassName('label');
  for (var i = 0; i < label.length; i++) {
    label[i].style.color = "white";
  };

  var burgerLabel = document.getElementsByClassName('burger__label');
  burgerLabel[0].style.color = "white";

  var servicesListItemGroup = document.getElementsByClassName('services-list__item--group');
  for (var i = 0; i < servicesListItemGroup.length; i++) {
    servicesListItemGroup[i].style.borderColor = lightColor;
  };

  var servicesListItemActif = document.querySelectorAll('.services-list__item--actif > a:nth-child(1)')
  for (var i = 0; i < servicesListItemActif.length; i++) {
    servicesListItemActif[i].style.backgroundColor = darkColor;
  };
  //servicesListItemActif[0].style.backgroundColor = darkColor;

  var dropDownContent = document.getElementsByClassName('dropdown__content');
  for (var i = 0; i < dropDownContent.length; i++) {
    dropDownContent[i].style.borderColor = lightColor;
  };

  var jumboFilesThumbPrimary = document.getElementsByClassName('jumbofiles__thumb--primary');
  for (var i = 0; i < jumboFilesThumbPrimary.length; i++) {
    jumboFilesThumbPrimary[i].style.backgroundColor = lightColor;
  };

  var btnAsLink = document.getElementsByClassName('btn--as-link');
  for (var i = 0; i < btnAsLink.length; i++) {
    btnAsLink[i].style.color = lightColor;
  };

  var dropDownToggle = document.getElementsByClassName('dropdown__toggle');
  dropDownToggle[0].style.color = "white";
};

refresh();
