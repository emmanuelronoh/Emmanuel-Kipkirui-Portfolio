/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Adversarial Attacks and Defenses in Cybersecurity: A Survey",
    authors: "Ian Goodfellow, Nicolas Papernot, Patrick McDaniel",
    conferences: "IEEE Symposium on Security and Privacy",
    researchYr: 2023,
    citebox: "popup1",
    image: "https://i.ibb.co/xKJ73DSN/you.png",
    citation: {
      vancouver:
        "Goodfellow I, Papernot N, McDaniel P. Adversarial Attacks and Defenses in Cybersecurity: A Survey. IEEE Symposium on Security and Privacy 2023.",
    },
    abstract: "This study explores adversarial machine learning techniques in cybersecurity and how they impact AI-driven security models.",
    absbox: "absPopup1",
  },

  {
    title: "Blockchain for Secure Data Sharing in Cybersecurity Applications",
    authors: "Satoshi Nakamoto, Gavin Wood",
    conferences: "ACM Conference on Computer and Communications Security (CCS)",
    researchYr: 2023,
    citebox: "popup2",
    image: "https://i.ibb.co/N4vLYjw/6.jpg",
    citation: {
      vancouver:
        "Nakamoto S, Wood G. Blockchain for Secure Data Sharing in Cybersecurity Applications. ACM CCS 2023.",
    },
    abstract: "This research discusses the integration of blockchain for secure data transmission and authentication in cybersecurity frameworks.",
    absbox: "absPopup2",
  },

  {
    title: "Zero Trust Architecture: The Future of Network Security",
    authors: "John Kindervag, Chase Cunningham",
    conferences: "USENIX Security Symposium",
    researchYr: 2022,
    citebox: "popup3",
    image: "https://i.ibb.co/5hHLkdWf/7.jpg",
    citation: {
      vancouver:
        "Kindervag J, Cunningham C. Zero Trust Architecture: The Future of Network Security. USENIX Security Symposium 2022.",
    },
    abstract: "A comprehensive study of Zero Trust principles and their application in enterprise security models.",
    absbox: "absPopup3",
  },

  {
    title: "AI-Powered Threat Detection in Modern Cybersecurity",
    authors: "Dawn Song, Nicolas Carlini",
    conferences: "Black Hat USA",
    researchYr: 2023,
    citebox: "popup4",
    image: "https://i.ibb.co/8n1Pm3jZ/8.jpg",
    citation: {
      vancouver:
        "Song D, Carlini N. AI-Powered Threat Detection in Modern Cybersecurity. Black Hat USA 2023.",
    },
    abstract: "Explores the use of AI and deep learning in identifying cyber threats with minimal false positives.",
    absbox: "absPopup4",
  },

  {
    title: "The Role of Quantum Cryptography in Cybersecurity",
    authors: "Michele Mosca, Peter Shor",
    conferences: "International Conference on Cryptology and Network Security (CANS)",
    researchYr: 2023,
    citebox: "popup5",
    image: "https://i.ibb.co/PZYKv8ss/9.jpg",
    citation: {
      vancouver:
        "Mosca M, Shor P. The Role of Quantum Cryptography in Cybersecurity. CANS 2023.",
    },
    abstract: "Discusses how quantum cryptography can enhance cybersecurity measures against post-quantum threats.",
    absbox: "absPopup5",
  },

  {
    title: "Ransomware Evolution: Trends, Mitigation, and Prevention Strategies",
    authors: "Kevin Mitnick, Bruce Schneier",
    conferences: "DEF CON",
    researchYr: 2023,
    citebox: "popup6",
    image: "https://i.ibb.co/gFBKWGpT/10.png",
    citation: {
      vancouver:
        "Mitnick K, Schneier B. Ransomware Evolution: Trends, Mitigation, and Prevention Strategies. DEF CON 2023.",
    },
    abstract: "Examines the evolving landscape of ransomware and proposes modern prevention mechanisms.",
    absbox: "absPopup6",
  },

  {
    title: "Social Engineering: The Human Factor in Cybersecurity Breaches",
    authors: "Christopher Hadnagy, Paul Ekman",
    conferences: "RSA Conference",
    researchYr: 2023,
    citebox: "popup7",
    image: "https://i.ibb.co/hxv3YNjM/11.jpg",
    citation: {
      vancouver:
        "Hadnagy C, Ekman P. Social Engineering: The Human Factor in Cybersecurity Breaches. RSA Conference 2023.",
    },
    abstract: "Investigates how human psychology is exploited in cyber-attacks and how to mitigate such risks.",
    absbox: "absPopup7",
  },

  // Adding Software Engineering Research Papers

  {
    title: "Agile Software Development: A Comprehensive Review",
    authors: "Jeff Sutherland, Ken Schwaber",
    conferences: "International Conference on Software Engineering (ICSE)",
    researchYr: 2023,
    citebox: "popup8",
    image: "https://i.ibb.co/fVqwntM6/12.jpg",
    citation: {
      vancouver:
        "Sutherland J, Schwaber K. Agile Software Development: A Comprehensive Review. ICSE 2023.",
    },
    abstract: "This paper provides a thorough review of Agile methodologies, its principles, and how they transform software development processes in modern teams.",
    absbox: "absPopup8",
  },

  {
    title: "Automated Software Testing: Current Practices and Future Trends",
    authors: "Elisabeth Hendrickson, Cem Kaner",
    conferences: "ACM SIGSOFT Symposium on Software Testing and Analysis (ISSTA)",
    researchYr: 2023,
    citebox: "popup9",
    image: "https://i.ibb.co/FLB225Rk/13.jpg",
    citation: {
      vancouver:
        "Hendrickson E, Kaner C. Automated Software Testing: Current Practices and Future Trends. ISSTA 2023.",
    },
    abstract: "Examines the advancements in automated testing tools, practices, and methodologies and predicts future trends in software quality assurance.",
    absbox: "absPopup9",
  }
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
