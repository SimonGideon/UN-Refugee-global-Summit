// speakers
const speakers = [
  {
    speakerAvartar: './images/speaker_01.png',
    speakerName: 'Yonchai Benkler',
    speakerProfession:
      'Berkman Professor of Enterpreneurial Legal Studoes at Havard Law School',
    speakerDescription:
      'Benkler studied common-based peer production and published his seminal book. The Wealth of Networks in 2006',
  },
  {
    speakerAvartar: './images/speaker_02.png',
    speakerName: 'Joen Gil-nam',
    speakerProfession: 'Doctor in Psychology and Mental Health',
    speakerDescription:
      'An academia from  Oxford University graduated with a doctorate in Mental health and phychology',
  },
  {
    speakerAvartar: './images/speaker_03.png',
    speakerName: 'Julia Leda',
    speakerProfession:
      'Minister of Human Rights Representing Asia in the UN board Committee',
    speakerDescription:
      'Appointed by the UN President presiding the previous change of UN cabinet on Human security matters',
  },
  {
    speakerAvartar: './images/speaker_04.png',
    speakerName: 'Layla Tretikov',
    speakerProfession: 'Professor in Climatology and Climate Change',
    speakerDescription:
      'Studied for Climate and Climatology from The University of London and part of the Global warming research team.',
  },
  {
    speakerAvartar: './images/speaker_05.png',
    speakerName: 'Ryan Merjkey',
    speakerProfession:
      'Merjkey Professor of Enterpreneurial Legal Studoes at Havard Law School',
    speakerDescription:
      'Ryan studied common-based peer production and published his seminal book. The Wealth of Networks in 2006',
  },
  {
    speakerAvartar: './images/speaker_06.png',
    speakerName: 'Noh So-Young',
    speakerProfession: 'Immigration and Migration Minister in the UN cabinaet',
    speakerDescription:
      'Young studied common-based peer production and published his seminal book. The Wealth of Networks in 2006',
  },
];

const speakerDiv = document.getElementById('speakingInt');
function speaketInt(speech) {
  return `
    <div class="speakerInt">
    <span><img src="${speech.speakerAvartar}" alt="${speech.speakerName}"></span>
    <span>
        <p class="speaker-name">${speech.speakerName}</p>
        <p class="speaker-profession">${speech.speakerProfession}</p>
        <p class="speaker-description">${speech.speakerDescription}</p>
    </span>
    </div>
    `;
}
speakerDiv.innerHTML = `

${speakers.map(speaketInt).join('')}

`;
