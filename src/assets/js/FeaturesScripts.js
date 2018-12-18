export default class FeaturesScripts {
    setOtherColor(elem) {
        setTimeout(() => elem.children[0].children[0].style.color = '#007bff', 100);
    }

    setColor(elem) {
        elem.children[0].children[0].style.color = '#fff';
        setTimeout(this.setOtherColor(elem), 2000);
    }
}