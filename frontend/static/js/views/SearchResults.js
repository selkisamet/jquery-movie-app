import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Search Results");
    }

    async getHtml() {
        return `
            <div class="container">
                <div class="list-wrap">
                    <header class="result-header">
                        <div class="result-title"></div>
                        <div class="result-count"></div>
                    </header>
                    <div class="movie-results">
                    </div>
                </div>
            </div>
        `;
    }
}