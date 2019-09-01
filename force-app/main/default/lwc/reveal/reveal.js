import { LightningElement } from 'lwc';
import confetti from '@salesforce/resourceUrl/aa';
import { loadScript } from 'lightning/platformResourceLoader';

export default class Reveal extends LightningElement {
    
    confettiInitialized = false;

    renderedCallback() {
        var can;
        var confettiSettings;
        var confettiDo; 
        if (this.confettiInitialized) {
            return;
        }
        this.confettiInitialized = true;
        loadScript(this, confetti + '/bb.js')
            .then(() => { 
                can = this.template.querySelector('canvas');
                confettiSettings = { 
                    target: can,
                    max: 200,
                    props: ['square','line']
                };
                
                confettiDo = new window.ConfettiGenerator(confettiSettings);
                confettiDo.render();
            });
    }

    
}