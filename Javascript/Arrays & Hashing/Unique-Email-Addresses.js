/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let uniqueEmails = new Set();

  emails.forEach((email) => {
    let [local, domain] = email.split("@");
    local = local.split("+")[0];
    local = local.replaceAll(".", "");

    local += "@" + domain;

    uniqueEmails.add(local);
  });

  return uniqueEmails.size;
};
