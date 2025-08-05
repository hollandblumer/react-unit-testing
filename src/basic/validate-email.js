function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//console.log(validateEmail("holland@gmailcom"));

function validateEmail2(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [prefix, domain] = email.split("@");

  if (prefix.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExt = domain.split("");
  if (domainExt.length < 2 || domainExt[1] < 2) {
    return false;
  }
  return true;
}

console.log(validateEmail2("holland@gmail.com"));
