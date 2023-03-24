/**
 * hamburger-button
 * @author      delphinpro <delphinpro@gmail.com>
 * @copyright   copyright © 2017—2018 delphinpro
 * @license     licensed under the MIT license
 */

export class HamburgerButton {
    // noinspection JSUnusedGlobalSymbols
    constructor(options = {}) {
        this.opts = {
            mainClass       : 'hamburger',
            stateActiveClass: 'hamburger_state_active',
            onOpen          : null,
            onClose         : null,
            ...options,
        };

        this.stateActive         = false;
        this.hamburger           = document.querySelector(`.${this.opts.mainClass}`);
        this.hamburger.innerHTML = '<span><span>≡</span></span>';

        const listener = e => {
            e.preventDefault();
            this.toggleState(!this.stateActive);
        };

        this.hamburger.addEventListener('click', listener);
    }

    toggleState(state) {
        if (state) {
            this.stateActive = true;
            this.hamburger.classList.add(this.opts.stateActiveClass);
            if (typeof this.opts.onOpen === 'function') this.opts.onOpen();
        } else {
            this.stateActive = false;
            this.hamburger.classList.remove(this.opts.stateActiveClass);
            if (typeof this.opts.onClose === 'function') this.opts.onClose();
        }
    }

    toggle() {
        this.toggleState(!this.stateActive);
    }

    open() {
        this.toggleState(true);
    }

    close() {
        this.toggleState(false);
    }
}

// noinspection JSUnusedGlobalSymbols
export default HamburgerButton;
