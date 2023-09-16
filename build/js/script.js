
  //digital marketing collapsible
  const dMarketing = document.getElementById('digital_marketing');
  const collapsibleDigital = document.getElementById('digitalMarketingDetails');

  dMarketing.addEventListener('click', () => {
    if (collapsibleDigital.classList.contains('hidden')) {
      collapsibleDigital.classList.remove('hidden');
    } else {
      collapsibleDigital.classList.add('hidden');
    }
  });

  //graphic design collapsibe
  const gDesigning = document.getElementById('graphicDesigning');
  const collapsibleGdesign = document.getElementById('graphicDesigningDetails');

  gDesigning.addEventListener('click', () => {
    if (collapsibleGdesign.classList.contains('hidden')) {
        collapsibleGdesign.classList.remove('hidden');
    } else {
        collapsibleGdesign.classList.add('hidden');
    }
  });

  //branding collapsible
  const branding = document.getElementById('branding');
  const brandingDetails = document.getElementById('brandingDetails');

  branding.addEventListener('click', () => {
    if (brandingDetails.classList.contains('hidden')) {
        brandingDetails.classList.remove('hidden');
    } else {
        brandingDetails.classList.add('hidden')
    }
  })

  //web development
  const webDevelopment = document.getElementById('webDevelopment');
  const webDetails = document.getElementById('webDetails');

  webDevelopment.addEventListener('click',() => {
    if (webDetails.classList.contains('hidden')) {
        webDetails.classList.remove('hidden');
    } else {
        webDetails.classList.add('hidden')
    }
  })

  //photography
  const photography = document.getElementById('photography');
  const photographyDetails = document.getElementById('photographyDetails');

  photography.addEventListener('click',() => {
    if (photographyDetails.classList.contains('hidden')) {
        photographyDetails.classList.remove('hidden')
    } else {
        photographyDetails.classList.add('hidden')
    }
  })

  //motionGraphics
  const motionGraphics = document.getElementById('motionGraphics');
  const motionGraphicsDetails = document.getElementById('motionGraphicsDetails');

  motionGraphics.addEventListener('click', () => {
    
    if (motionGraphicsDetails.classList.contains('hidden')) {
        motionGraphicsDetails.classList.remove('hidden')
    } else {
        motionGraphicsDetails.classList.add('hidden')
    }
  })