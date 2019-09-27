/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
FUNDAMENTALSPARSINGALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES
*/


function domainName(url) {
    //your code here
    var urlParts = url.replace('http://', '').replace('www.', '').replace('https://', '').split(/[/?#]/);
    var domain = urlParts[0];
    domain = domain.split(".");
    return domain[0];
}

console.log(domainName("http://google.com"))