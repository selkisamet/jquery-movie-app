import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <div class="container">
                <div class="search-wrap">
                    <div class="search">
                        <div class="input-wrap">
                            <input type="text" class="input-search"
                                placeholder="Bulmak istediğiniz filmin adını yazınız.">
                                <img src="static/assets/icons/icon-search.svg" class="icon-search" alt="Ara">
                                </div>

                                <div class="search-result">
                                </div>
                        </div>


                    </div>
                </div>
        `;
    }
}