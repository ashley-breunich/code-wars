function abbrevName(name){
  name = name.toUpperCase();
  var firstLetter = name.match(/\b\w/g);
  var initials = firstLetter.join('.');
  return initials;
}