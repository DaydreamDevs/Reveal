import { LightningElement, track , wire} from 'lwc';
import confetti from '@salesforce/resourceUrl/aa';
import { loadScript } from 'lightning/platformResourceLoader';
import getGender from '@salesforce/apex/revealController.getGender';

export default class Reveal extends LightningElement {
    @track detailsVisible = false;
    @wire(getGender) contact;

    handleClick() {
        var can;
        var confettiSettings;
        var confettiDo; 
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
                this.detailsVisible = true;
            });
    }

    
}