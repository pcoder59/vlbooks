Vue.component('book-page', {
    template: `
    <div>
        <header class="jumbotron text-center">
            <h1>VLBOOKS</h1>
            <p>We Love Books!</p>
        </header>
    </div>
    `,
    name: 'book-page'
})

Vue.component('category-selected', {
    template: `
    <article id="selectedCategory">
        
    </article>
    `
})

Vue.component('category-display', {
    template: `
    <section class="container">
        <category-selected></category-selected>
    </section>
    `
})

Vue.component('categories-columns', {
    template: `
    <div>
        <section class="container" v-bind:style={display:displayBack}>
            <article class="row">
                <button class="btn btn-success mx-auto" v-on:click="show" id="displayBack">Back</button>
            </article>
        </section>
        <section class="card-columns" v-on:click="hide" v-bind:style={display:displayCategory}>
            <article v-for="category in categories" class="card">
                <div class="card-body text-center">
                    <p>{{ category }}</p>
                </div>
            </article>
        </section>
    </div>
    `,
    data: function() {
        return {
            categories: ["Fantasy"],
            //"Action and Adventure", "Children's", "Comic Book", "Crime", "Drama", "Graphic Novel", "Historical Fiction", "Horror", "Mystery", "Picture Book", "Poetry", "Political Thriller", "Romance", "Satire", "Science Fiction", "Short Story", "Suspense", "Thriller", "Young Adult", "Art", "Autobiography", "Biography", "Cookbook", "Diary", "Dictionary", "Encyclopedia", "Guide", "Health", "History", "Journal", "Math", "Memoir", "Prayer", "Religion and Spirituality", "Textbook", "Science", "Self-Help", "Travel", "True Crime"
            displayCategory: "block",
            displayBack: "none"
        }
    },
    methods: {
        hide: function() {
            this.displayCategory = "none";
            this.displayBack = "block";
        },
        show: function() {
            this.displayBack = "none";
            this.displayCategory = "block";
        }
    },
})

Vue.component('header-section', {
    template: `
    <div>
        <book-page></book-page>
        <categories-columns></categories-columns>
    </div>
    `
})

var app = new Vue({
    el: "#app",
    data: {}
})