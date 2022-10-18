class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.current = 0;
  }

  /**
   * @param {string} url
   * @return {void}
   */

  visit(url) {
    ++this.current;
    this.history[this.current] = url;
    this.history.length = this.current + 1;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    if (steps > this.current) {
      this.current = 0;
      return this.history[this.current];
    }
    this.current -= steps;
    return this.history[this.current];
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    if (this.current + steps > this.history.length - 1) {
      this.current = this.history.length - 1;
      return this.history[this.current];
    }

    this.current += steps;
    return this.history[this.current];
  }
}
