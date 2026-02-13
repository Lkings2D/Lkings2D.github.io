// Refreshes the AdSense ad in the ad-demo box
function refreshAdBox() {
    var adBox = document.querySelector('.ad-demo');
    if (!adBox) return;
    // Remove old ad
    adBox.innerHTML = '';
    // Create new ad element
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', 'ca-pub-6607892053217120');
    ins.setAttribute('data-ad-slot', '2987878848');
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    adBox.appendChild(ins);
    // (Re)load the ad
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.log('Ad failed to reload');
    }
}