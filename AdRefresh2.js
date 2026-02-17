// Refreshes the AdSense ad in the bottom-ad-demo box (bottom banner)
function refreshAdBox2() {
    var adBox = document.querySelector('.bottom-ad-demo');
    if (!adBox) return;
    adBox.innerHTML = '';
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', 'ca-pub-6607892053217120');
    ins.setAttribute('data-ad-slot', '9282367020');
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    adBox.appendChild(ins);
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.log('Ad failed to reload');
    }
}
