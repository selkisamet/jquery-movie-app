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
                        <div class="result-title">Batman İçin Sonuçlar</div>
                        <div class="result-count">10 Sonuç Bulundu</div>
                    </header>
                    <div class="movie-results">
                    </div>
                </div>
            </div>
        `;
    }
}