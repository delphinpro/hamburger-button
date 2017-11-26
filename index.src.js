/**
 * hamburger-button
 * @since       26.11.2017 4:32
 * @author      delphinpro <delphinpro@gmail.com>
 * @copyright   copyright © 2017 delphinpro
 * @license     licensed under the MIT license
 */

export default function hamburgerButton(options = {}) {
  let opts = {
    mainClass       : 'hamburger',
    stateActiveClass: 'hamburger_state_active',
    onOpen          : null,
    onClose         : null,
    ...options
  };

  const hamburger = document.querySelector(`.${opts.mainClass}`);

  hamburger.innerHTML = '<span><span>≡</span></span>';

  let stateActive = false;

  function toggleState(state) {
    if (state) {
      stateActive = true;
      hamburger.classList.add(opts.stateActiveClass);
      if (typeof opts.onOpen === 'function') opts.onOpen();
    } else {
      stateActive = false;
      hamburger.classList.remove(opts.stateActiveClass);
      if (typeof opts.onClose === 'function') opts.onClose();
    }
  }

  function listener(e) {
    e.preventDefault();
    toggleState(!stateActive);
  }

  hamburger.addEventListener('click', listener);

  return {
    toggle() {
      toggleState(!stateActive);
    },

    open() {
      toggleState(true);
    },

    close() {
      toggleState(false);
    },
  };
}
