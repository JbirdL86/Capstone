function Speaker(name, profession, description, featureImg) {
  this.name = name;
  this.profession = profession;
  this.description = description;
  this.featureImg = featureImg;
}

const speakers = [];

function createSpeakers() {
  let speaker;

  speaker = new Speaker('Bill Gates', 'Software developer, investor, entrepreneur', 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist.', 'assets/billgates.jpeg');
  speakers.push(speaker);

  speaker = new Speaker('Elon Musk', 'Founder, CEO and Chief Engineer of SpaceX', 'Elon Reeve Musk is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product Architect of Tesla, Inc.', 'assets/elonmusk.png');
  speakers.push(speaker);
}

function populateSpeakers() {
  const speakerContainer = document.querySelector('.speakers-container');

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerWrapper = document.createElement('article');

    speakerWrapper.classList.add('speakers-wrapper');
    speakerWrapper.innerHTML = `
        <div>
          <div class="speaker-image-container">
            <div class="speaker-pattern">
              <img src="assets/qrcode.jpeg">
            </div>
            <div class="speaker-image">
              <img src="${speakers[i].featureImg}">
            </div>
          </div>
        </div>
        <div class="speaker-text">
          <h4>${speakers[i].name}</h4>
          <h5>${speakers[i].profession}</h5>
          <div class="divisor"></div>
          <p>${speakers[i].description}</p>
        </div>
    `;
    speakerContainer.appendChild(speakerWrapper);
  }
}

createSpeakers();
populateSpeakers();